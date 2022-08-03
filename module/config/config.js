import { stringToPath } from "@cosmjs/crypto";
export const DefaultConfig = {
  rpc: "https://rpc.testnet.persistence.one:443",
  chainId: "test-core-1",
  gasPrices: {
    denom: "uxprt",
    amount: "2000000"
  },
  gasAdjustment: "1.5"
};
export const LocalConfig = {
  rpc: "http://localhost:26657",
  chainId: "testing",
  gasPrices: {
    denom: "stake",
    amount: "2000000"
  },
  gasAdjustment: "1.5"
};
export const DefaultWalletOptoions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/750'/0'/0/0")],
  prefix: "persistence"
};