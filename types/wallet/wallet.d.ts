import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Config } from "../config/config";
export declare const wallet: {
    setupWebKeplr: (config: Config) => Promise<[SigningCosmWasmClient, any]>;
    setupNodeLocal: (config: Config, mnemonic: string, WalletOptions: any) => Promise<[SigningStargateClient, SigningCosmWasmClient, DirectSecp256k1HdWallet]>;
    setupWebLedger: (config: Config, transport: any, WalletOptions: any) => Promise<SigningCosmWasmClient>;
    makeRandomClinet: () => Promise<void>;
};
