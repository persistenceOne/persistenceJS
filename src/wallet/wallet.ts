import { makeCosmoshubPath } from "@cosmjs/amino";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { LedgerSigner } from "@cosmjs/ledger-amino";
import { DirectSecp256k1HdWallet, OfflineSigner } from "@cosmjs/proto-signing";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
// import { getOfflineSigner } from "@cosmostation/cosmos-client";
import { Keplr } from "@keplr-wallet/types";
import { Config } from "../config/config";

declare const window: any;

export const wallet = {
  setupWebKeplr: async (config: Config): Promise<[SigningCosmWasmClient, any]> => {
    // check browser compatibility
    if (!window.keplr) {
      throw new Error("Keplr is not supported or installed on this browser!");
    }

    // try to enable keplr with given chainId
    await window.keplr.enable(config.chainId).catch(() => {
      throw new Error("Keplr can't connect to this chainId!");
    });

    // Setup signer
    const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

    // Init SigningCosmWasmClient client
    const signingClient = await SigningCosmWasmClient.connectWithSigner(config.rpc, offlineSigner, {
      prefix: config.prefix,
      gasPrice: config.gasPrice,
    });

    return [signingClient, offlineSigner];
  },
  // setupCosmostation: async (config: Config): Promise<[SigningCosmWasmClient, OfflineSigner]> => {
  //   // Setup signer
  //   const offlineSigner = await getOfflineSigner(config.chainId);

  //   // Init SigningCosmWasmClient client
  //   const signingClient = await SigningCosmWasmClient.connectWithSigner(config.rpc, offlineSigner, {
  //     prefix: config.prefix,
  //     gasPrice: config.gasPrice,
  //   });

  //   return [signingClient, offlineSigner];
  // },
  setupNodeLocal: async (
    config: Config,
    mnemonic: string,
    WalletOptions: any,
  ): Promise<[SigningStargateClient, SigningCosmWasmClient, DirectSecp256k1HdWallet]> => {
    // Setup signer
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, WalletOptions);

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

    const chainId = await core.getChainId();

    if (chainId !== config.chainId) {
      throw Error("Given ChainId doesn't match the clients ChainID!");
    }

    return [core, wasm, offlineSigner];
  },
  setupWebLedger: async (
    config: Config,
    transport: any,
    WalletOptions: any,
  ): Promise<SigningCosmWasmClient> => {
    const interactiveTimeout = 120_000;

    // Prepare ledger
    const ledgerTransport = await transport.create(interactiveTimeout, interactiveTimeout);

    // Setup signer
    const offlineSigner = new LedgerSigner(ledgerTransport, {
      hdPaths: WalletOptions.hdPaths,
      prefix: config.prefix,
    });

    // Init SigningCosmWasmClient client
    const client = await SigningCosmWasmClient.connectWithSigner(config.rpc, offlineSigner, {
      prefix: config.prefix,
      gasPrice: config.gasPrice,
    });

    const chainId = await client.getChainId();

    if (chainId !== config.chainId) {
      throw Error("Given ChainId doesn't match the clients ChainID!");
    }

    return client;
  },
  makeRandomClinet: async () => {},
};
