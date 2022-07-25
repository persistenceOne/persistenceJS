import { DirectSecp256k1HdWallet, Registry, DirectSecp256k1HdWalletOptions } from "@cosmjs/proto-signing";
import {
    defaultRegistryTypes as defaultStargateTypes,
    SigningStargateClient,
    Coin
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import { stringToPath, HdPath } from "@cosmjs/crypto"
// import { getSigningCosmosClient } from "../proto";
import { LocalConfig } from "config/config";

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
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix: "wasm",
        })
        const core = await SigningStargateClient.connectWithSigner(config.rpc, wallet)
        const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, wallet)
        return new PersistenceClient(mnemonic, wallet, wasm, core)
    }
}

export { }
