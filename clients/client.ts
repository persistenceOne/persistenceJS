import { DirectSecp256k1HdWallet, Registry, DirectSecp256k1HdWalletOptions } from "@cosmjs/proto-signing";
import {
    defaultRegistryTypes as defaultStargateTypes,
    SigningStargateClient,
    AminoTypes
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import { getSigningCosmosClient } from ".././src/cosmos/client"; // Replace with your own Msg import
import { stringToPath, HdPath } from "@cosmjs/crypto"
import { Coin } from "@cosmjs/amino"

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

const DefaultConfig = {
    rpc: "rpc.testnet.persistence.one",
    chainId: "wasm-1",
    gasPrices: {
        denom: "uxprt",
        amount: "200",
    },
    gasAdjustment: 0,
}

const LocalConfig = {
    rpc: "http://localhost:26657",
    chainId: "core-1",
    gasPrices: {
        denom: "uxprt",
        amount: "200",
    },
    gasAdjustment: 0,
}

const DefaultWalletOptoions = {
    bip39Password: "",
    hdPaths: [stringToPath("m/44'/750'/0'/0/0")],
    prefix: "wasm",
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
        const core = await getSigningCosmosClient({rpcEndpoint: config.rpc, signer: wallet})
        const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, wallet)
        return new PersistenceClient(mnemonic, wallet, wasm, core)
    }
}

export { }
