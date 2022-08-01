import { getSigningCosmwasmClient } from './../proto/cosmwasm/client';
import { getSigningCosmosClient } from './../proto/cosmos/client';
import { Rpc } from "@osmonauts/helpers";
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
    createProtobufRpcClient
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import { stringToPath, HdPath } from "@cosmjs/crypto"
import * as cosmwasmWasmV1TxRegistry from "src/proto/cosmwasm/wasm/v1/tx.registry";
import { LocalConfig, DefaultWalletOptoions } from "../config/config";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "cosmjs-types/cosmwasm/wasm/v1beta1/tx";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { createRPCQueryClient, } from '../proto/cosmwasm/rpc.query'
import { QueryClientImpl } from '../proto/cosmwasm/wasm/v1/query.rpc.query';
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
    public wasm: SigningStargateClient
    public query

    private constructor(mnemonic: string, wallet: DirectSecp256k1HdWallet, wasm: SigningStargateClient, core: SigningStargateClient, queryclient, config?: Config) {
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

        const core = await getSigningCosmosClient({ rpcEndpoint: config.rpc, signer: wallet })
        const wasm = await getSigningCosmwasmClient({ rpcEndpoint: config.rpc, signer: wallet })
        
        const tendermintClient = await Tendermint34Client.connect(config.rpc);
        const queryClient = new QueryClient(tendermintClient);
        const rpc = await createProtobufRpcClient(queryClient)
        const query = await createRPCQueryClient({ rpc: rpc })
        return new PersistenceClient(mnemonic, wallet, wasm, core, query)
    }
}

export { }