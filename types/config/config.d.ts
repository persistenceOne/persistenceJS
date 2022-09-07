import { HdPath } from "@cosmjs/crypto";
import { GasPrice } from "@cosmjs/stargate";
export interface Config {
  rpc: string;
  chainId: string;
  gasPrice: GasPrice;
  gasAdjustment: string;
  prefix: string;
}
export interface WalletOptions {
  bip39Password: string;
  hdPaths: HdPath[];
  prefix: string;
}
export declare const DefaultConfig: {
  rpc: string;
  chainId: string;
  gasPrice: GasPrice;
  gasAdjustment: string;
  prefix: string;
};
export declare const LocalConfig: {
  rpc: string;
  chainId: string;
  gasPrice: GasPrice;
  gasAdjustment: string;
  prefix: string;
};
export declare const DefaultWalletOptions: {
  bip39Password: string;
  hdPaths: HdPath[];
  prefix: string;
};
