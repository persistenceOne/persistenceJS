"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalConfig = exports.DefaultWalletOptoions = exports.DefaultConfig = void 0;

var _crypto = require("@cosmjs/crypto");

var DefaultConfig = {
  rpc: "https://rpc.testnet.persistence.one:443",
  chainId: "test-core-1",
  gasPrices: {
    denom: "uxprt",
    amount: "2000000"
  },
  gasAdjustment: "1.5"
};
exports.DefaultConfig = DefaultConfig;
var LocalConfig = {
  rpc: "http://localhost:26657",
  chainId: "testing",
  gasPrices: {
    denom: "stake",
    amount: "2000000"
  },
  gasAdjustment: "1.5"
};
exports.LocalConfig = LocalConfig;
var DefaultWalletOptoions = {
  bip39Password: "",
  hdPaths: [(0, _crypto.stringToPath)("m/44'/750'/0'/0/0")],
  prefix: "persistence"
};
exports.DefaultWalletOptoions = DefaultWalletOptoions;