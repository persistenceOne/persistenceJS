import { DirectSecp256k1HdWallet, Registry, GeneratedType } from "@cosmjs/proto-signing";
import {
    defaultRegistryTypes,
    SigningStargateClient,
    Coin,
    StargateClient,
    QueryClient,
    setupStakingExtension,
    setupAuthExtension,
    setupTxExtension,
    setupDistributionExtension,
    StakingExtension,
    AuthExtension,
    TxExtension,
    DistributionExtension,
    SigningStargateClientOptions,
    GasPrice,
    BankExtension,
    setupBankExtension,
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import { stringToPath, HdPath } from "@cosmjs/crypto"
import * as cosmwasmWasmV1TxRegistry from "src/proto/cosmwasm/wasm/v1/tx.registry";
import { LocalConfig, DefaultWalletOptoions } from "../config/config";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "cosmjs-types/cosmwasm/wasm/v1beta1/tx";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
export interface Config {
    rpc: string,
    chainId: string,
    gasPrices: Coin,
    gasAdjustment: string,
}

export interface WalletOptoions {
    bip39Password: string
    hdPaths: HdPath,
    prefix: string,
}


export class PersistenceClient {
    public wallet: DirectSecp256k1HdWallet
    public mnemonic: string
    public config: Config;
    public core: SigningStargateClient
    public wasm: SigningCosmWasmClient
    public query: QueryClient

    private constructor(mnemonic: string, wallet: DirectSecp256k1HdWallet, wasm: SigningCosmWasmClient, core: SigningStargateClient, queryclient: QueryClient, config?: Config) {
        this.mnemonic = mnemonic
        this.config = config
        this.wallet = wallet
        this.core = core
        this.wasm = wasm
        this.query = queryclient
    }

    static async init(mnemonic: string, chainConfig?: Config): Promise<PersistenceClient> {
        const config = chainConfig || LocalConfig
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, DefaultWalletOptoions)
        const registryArray: ReadonlyArray<[string, GeneratedType]> = [["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin]];
        const registry = new Registry([...defaultRegistryTypes, ...registryArray]);
        const core = await SigningStargateClient.connectWithSigner(config.rpc, wallet, { registry })
        const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, wallet, { registry })
        const tmClient = await Tendermint34Client.connect(config.rpc)
        const queryClient = QueryClient.withExtensions(
            tmClient,
            setupStakingExtension,
            setupAuthExtension,
            setupTxExtension,
            setupDistributionExtension,
            setupBankExtension,
        );
        return new PersistenceClient(mnemonic, wallet, wasm, core, queryClient)
    }
}

export { }
