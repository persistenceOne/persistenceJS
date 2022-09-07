import { createProtobufRpcClient, QueryClient, SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DefaultWalletOptions, LocalConfig, Config } from "../config/config";
import { createRPCQueryClient } from "../proto/cosmwasm/rpc.query";
import { wallet } from "../wallet/wallet";

export class PersistenceClient {
  public mnemonic: string;
  public config: Config;
  public core: SigningStargateClient;
  public wasm: SigningCosmWasmClient;
  public offlineSigner;
  public query;

  private constructor(
    wasm: SigningCosmWasmClient,
    core: SigningStargateClient,
    query,
    offlineSigner?,
    mnemonic?: string,
    config?: Config,
  ) {
    this.core = core;
    this.wasm = wasm;
    this.query = query;
    this.offlineSigner = offlineSigner;
    this.mnemonic = mnemonic;
    this.config = config;
  }

  static async init(mnemonic: string, chainConfig?: Config): Promise<PersistenceClient> {
    const config = chainConfig || LocalConfig;
    //signing clients
    const [core, wasm, offlineSigner] = await wallet.setupNodeLocal(config, mnemonic, DefaultWalletOptions);
    //query client
    const tendermintClient = await Tendermint34Client.connect(config.rpc);
    const queryClient = new QueryClient(tendermintClient);
    const rpc = await createProtobufRpcClient(queryClient);
    const query = await createRPCQueryClient({ rpc: rpc });

    return new PersistenceClient(wasm, core, query, offlineSigner);
  }
}
