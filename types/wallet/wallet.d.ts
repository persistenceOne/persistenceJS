import { OfflineSigner } from "@cosmjs/proto-signing";
import { Config, WalletOptions } from "../config/config";
export declare const wallet: {
  setupWebKeplr: (config: Config) => Promise<OfflineSigner>;
  setupNodeLocal: (config: Config, mnemonic: string, WalletOptions: any) => Promise<OfflineSigner>;
  setupWebLedger: (config: Config, transport: any, WalletOptions: WalletOptions) => Promise<OfflineSigner>;
  makeRandomClinet: () => Promise<OfflineSigner>;
};
