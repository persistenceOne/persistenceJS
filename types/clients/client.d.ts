import { SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { Config, WalletOptions } from "../config/config";
export declare class PersistenceClient {
  mnemonic: string;
  config: Config;
  core: SigningStargateClient;
  wasm: SigningCosmWasmClient;
  offlineSigner: OfflineSigner;
  query: any;
  private constructor();
  static init(
    mnemonic: string,
    chainConfig?: Config,
    walletOptions?: WalletOptions,
  ): Promise<PersistenceClient>;
}
