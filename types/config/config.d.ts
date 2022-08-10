import { HdPath } from "@cosmjs/crypto";
export declare const DefaultConfig: {
  rpc: string;
  chainId: string;
  gasPrices: {
    denom: string;
    amount: string;
  };
  gasAdjustment: string;
};
export declare const LocalConfig: {
  rpc: string;
  chainId: string;
  gasPrices: {
    denom: string;
    amount: string;
  };
  gasAdjustment: string;
};
export declare const DefaultWalletOptoions: {
  bip39Password: string;
  hdPaths: HdPath[];
  prefix: string;
};
