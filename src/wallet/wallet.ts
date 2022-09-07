import { makeCosmoshubPath } from "@cosmjs/amino";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { LedgerSigner } from "@cosmjs/ledger-amino";
import { DirectSecp256k1HdWallet, OfflineSigner } from "@cosmjs/proto-signing";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
// import { getOfflineSigner } from "@cosmostation/cosmos-client";
import { Keplr } from "@keplr-wallet/types";
import { Config, WalletOptions } from "../config/config";

declare const window: any;

export const wallet = {
  setupWebKeplr: async (config: Config): Promise<OfflineSigner> => {
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
    return offlineSigner;
  },
  // setupCosmostation: async (config: Config): Promise<OfflineSigner> => {
  //   // Setup signer
  //   const offlineSigner = await getOfflineSigner(config.chainId);

  //   return [signingClient, offlineSigner];
  // },
  setupNodeLocal: async (
    config: Config,
    mnemonic: string,
    WalletOptions: any,
  ): Promise<OfflineSigner> => {
    // Setup signer
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, WalletOptions);
    return offlineSigner;
  },
  setupWebLedger: async (
    config: Config,
    transport: any,
    WalletOptions: WalletOptions,
  ): Promise<OfflineSigner> => {
    const interactiveTimeout = 120_000;

    // Prepare ledger
    const ledgerTransport = await transport.create(interactiveTimeout, interactiveTimeout);

    // Setup signer
    const offlineSigner = new LedgerSigner(ledgerTransport, {
      hdPaths: WalletOptions.hdPaths,
      prefix: config.prefix,
    });
    return offlineSigner;
  },
  makeRandomClinet: async (): 
  Promise<OfflineSigner>=> {
    return DirectSecp256k1HdWallet.generate(12)
  },
};
