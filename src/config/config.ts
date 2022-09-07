import { stringToPath, HdPath } from "@cosmjs/crypto";
import {Coin, GasPrice} from "@cosmjs/stargate"
export interface Config {
  rpc: string;
  chainId: string;
  gasPrice: GasPrice;
  gasAdjustment: string;
  prefix: string;
}

export const DefaultConfig = {
  rpc: "https://rpc.testnet.persistence.one:443",
  chainId: "test-core-1",
  gasPrice: GasPrice.fromString("200000.00uxprt"),
  gasAdjustment: "1.5",
  prefix: "persistence",
};

export const LocalConfig = {
  rpc: "http://localhost:26657",
  chainId: "testing",
  gasPrice: GasPrice.fromString("200000.00stake"),
  gasAdjustment: "1.5",
  prefix: "persistence",

};

export const DefaultWalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/750'/0'/0/0")],
  prefix: "persistence",
};
