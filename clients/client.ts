import { DirectSecp256k1HdWallet, Registry, DirectSecp256k1HdWalletOptions } from "@cosmjs/proto-signing";
import {
    defaultRegistryTypes as defaultStargateTypes,
    SigningStargateClient,
    SigningStargateClientOptions,
    StargateClient,
} from "@cosmjs/stargate";
import {   CosmWasmClient, SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import  { Coin, MsgSend, MessageOptions, Balance, BroadcastAPI, AllAccountsResponse } from ".././src"; // Replace with your own Msg import
import {stringToPath, HdPath} from "@cosmjs/crypto"

export interface Config{
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


export class PersistenceClient{
    public mnemonic: string
    public config: Config;
    public core: StargateClient;
    public wasm: CosmWasmClient;
    
    constructor(config: Config, mnemonic: string) {
        this.mnemonic = mnemonic
        this.config = DefaultConfig || config
    }
    
    public async wallet(){
        return await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, DefaultWalletOptoions)
    }

    public async connect(){
        const wallet = await this.wallet()
        this.core = await SigningStargateClient.connectWithSigner(this.config.rpc, wallet)
        this.wasm = await SigningCosmWasmClient.connectWithSigner(this.config.rpc, wallet)
    }
}

export {}