import { createProtobufRpcClient, QueryClient, SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { DefaultWalletOptions, LocalConfig, Config, WalletOptions } from "../config/config";
import { createRPCQueryClient } from "../proto/cosmwasm/rpc.query";
import { wallet } from "../wallet/wallet";

export class PersistenceClient {
  public mnemonic: string;
  public config: Config;
  public core: SigningStargateClient;
  public wasm: SigningCosmWasmClient;
  public offlineSigner: OfflineSigner;
  public query;

  private constructor(
    wasm: SigningCosmWasmClient,
    core: SigningStargateClient,
    query,
    offlineSigner?: OfflineSigner,
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

  static async init(
    mnemonic: string,
    chainConfig?: Config,
    walletOptions?: WalletOptions,
  ): Promise<PersistenceClient> {
    const config = chainConfig || LocalConfig;
    const WalletOptions = walletOptions || DefaultWalletOptions;
    // Get offline signer
    const offlineSigner = await wallet.setupNodeLocal(config, mnemonic, WalletOptions);

    // Init SigningStargateClient client
    const core = await SigningStargateClient.connectWithSigner(config.rpc, offlineSigner, {
      prefix: config.prefix,
      gasPrice: config.gasPrice,
    });

    // Init SigningCosmWasmClient client
    const wasm = await SigningCosmWasmClient.connectWithSigner(config.rpc, offlineSigner, {
      prefix: config.prefix,
      gasPrice: config.gasPrice,
    });

    //query client
    const tendermintClient = await Tendermint34Client.connect(config.rpc);
    const queryClient = new QueryClient(tendermintClient);
    const rpc = await createProtobufRpcClient(queryClient);
    const query = await createRPCQueryClient({ rpc: rpc });

    return new PersistenceClient(wasm, core, query, offlineSigner);
  }
}
