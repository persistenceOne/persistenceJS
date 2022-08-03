import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { createProtobufRpcClient, QueryClient, SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DefaultWalletOptoions, LocalConfig } from "../config/config";
import { createRPCQueryClient } from "../proto/cosmwasm/rpc.query";
export class PersistenceClient {
  constructor(mnemonic, wallet, wasm, core, queryclient, config) {
    _defineProperty(this, "wallet", void 0);

    _defineProperty(this, "mnemonic", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "core", void 0);

    _defineProperty(this, "wasm", void 0);

    _defineProperty(this, "query", void 0);

    this.mnemonic = mnemonic;
    this.config = config;
    this.wallet = wallet;
    this.core = core;
    this.wasm = wasm;
    this.query = queryclient;
  }

  static async init(mnemonic, chainConfig) {
    //wallet
    const config = chainConfig || LocalConfig;
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, DefaultWalletOptoions); //signing clients

    const core = await SigningStargateClient.connectWithSigner(config.rpc, wallet);
    const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, wallet); //query client

    const tendermintClient = await Tendermint34Client.connect(config.rpc);
    const queryClient = new QueryClient(tendermintClient);
    const rpc = await createProtobufRpcClient(queryClient);
    const query = await createRPCQueryClient({
      rpc: rpc
    });
    return new PersistenceClient(mnemonic, wallet, wasm, core, query);
  }

}
export {};