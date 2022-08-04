import { HdPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Coin, createProtobufRpcClient, QueryClient, SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DefaultWalletOptoions, LocalConfig } from "../config/config";
import { createRPCQueryClient } from "../proto/cosmwasm/rpc.query";
export interface Config {
  rpc: string;
  chainId: string;
  gasPrices: Coin;
  gasAdjustment: string;
}

export interface WalletOptoions {
  bip39Password: string;
  hdPaths: HdPath;
  prefix: string;
}

export class PersistenceClient {
  public wallet: DirectSecp256k1HdWallet;
  public mnemonic: string;
  public config: Config;
  public core: SigningStargateClient;
  public wasm: SigningCosmWasmClient;
  public query;

  private constructor(
    mnemonic: string,
    wallet: DirectSecp256k1HdWallet,
    wasm: SigningCosmWasmClient,
    core: SigningStargateClient,
    queryclient,
    config?: Config,
  ) {
    this.mnemonic = mnemonic;
    this.config = config;
    this.wallet = wallet;
    this.core = core;
    this.wasm = wasm;
    this.query = queryclient;
  }

  public static async init(mnemonic: string, chainConfig?: Config): Promise<PersistenceClient> {
    //wallet
    const config = chainConfig || LocalConfig;
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, DefaultWalletOptoions);
    //signing clients
    const core = await SigningStargateClient.connectWithSigner(config.rpc, wallet);
    const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, wallet);
    //query client
    const tendermintClient = await Tendermint34Client.connect(config.rpc);
    const queryClient = new QueryClient(tendermintClient);
    const rpc = await createProtobufRpcClient(queryClient);
    const query = await createRPCQueryClient({ rpc: rpc });
    return new PersistenceClient(mnemonic, wallet, wasm, core, query);
  }
}

