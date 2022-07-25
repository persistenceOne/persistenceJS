import { DirectSecp256k1HdWallet, Registry, GeneratedType } from "@cosmjs/proto-signing";
import {
    defaultRegistryTypes,
    SigningStargateClient,
    Coin
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import { stringToPath, HdPath } from "@cosmjs/crypto"
import * as cosmwasmWasmV1TxRegistry from "src/proto/cosmwasm/wasm/v1/tx.registry";
import { LocalConfig, DefaultWalletOptoions } from "../config/config";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "cosmjs-types/cosmwasm/wasm/v1beta1/tx";
export interface Config {
    rpc: string,
    chainId: string,
    gasPrices: Coin,
    gasAdjustment: Number,
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

    private constructor(mnemonic: string, wallet: DirectSecp256k1HdWallet, wasm: SigningCosmWasmClient, core: SigningStargateClient, config?: Config) {
        this.mnemonic = mnemonic
        this.config = LocalConfig || config
        this.wallet = wallet
        this.core = core
        this.wasm = wasm
    }

    static async init(mnemonic: string, chainConfig?: Config): Promise<PersistenceClient> {
        const config = LocalConfig || chainConfig
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, DefaultWalletOptoions)
        const registryArray: ReadonlyArray<[string, GeneratedType]> = [["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin]];
        const registry = new Registry([...defaultRegistryTypes, ...registryArray]);
        const core = await SigningStargateClient.connectWithSigner(config.rpc, wallet, {registry})
        const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, wallet, {registry})
        return new PersistenceClient(mnemonic, wallet, wasm, core)
    }
}

export { }
