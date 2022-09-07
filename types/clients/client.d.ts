import { SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Config } from "../config/config";
export declare class PersistenceClient {
    mnemonic: string;
    config: Config;
    core: SigningStargateClient;
    wasm: SigningCosmWasmClient;
    offlineSigner: any;
    query: any;
    private constructor();
    static init(mnemonic: string, chainConfig?: Config): Promise<PersistenceClient>;
}
