// @ts-ignore
import { bip39 } from "bip39";
// @ts-ignore
import { bip32 } from "bip32";
// @ts-ignore
import { tmSig } from "@tendermint/sig";
// @ts-ignore
import { crypto } from "crypto";
import * as config from "../config.json";

const passwordHashAlgorithm = "sha512";

export const getWallet = (
  mnemonic: string,
  bip39Passphrase: string
): Promise<any> => {
  return new Promise(function (resolve) {
    const seed = bip39.mnemonicToSeedSync(mnemonic, bip39Passphrase);
    const masterKey = bip32.fromSeed(seed);
    const walletPath = getWalletPath();
    resolve(
      tmSig.createWalletFromMasterKey(masterKey, config.prefix, walletPath)
    );
  });
};

export const createRandomWallet = async(
  bip39Passphrase: string
): Promise<{ address: string; mnemonic: string }> => {
  const mnemonic = bip39.generateMnemonic(256);
  const walletInfo = await getWallet(mnemonic, bip39Passphrase);

  return {
    address: walletInfo.address,
    mnemonic: mnemonic,
  };
};

export const createWallet = async(
  mnemonic: string,
  bip39Passphrase: string
): Promise<{ address: string; mnemonic: string }> => {
  let validateMnemonic = bip39.validateMnemonic(mnemonic);
  if (validateMnemonic) {
    const walletInfo = await getWallet(mnemonic, bip39Passphrase);
    return {
      address: walletInfo.address,
      mnemonic: mnemonic,
    };
  } else {
    return {
      address: "Invalid mnemonic.",
      mnemonic: "Invalid mnemonic.",
    };
  }
};

export const getWalletPath = (): string => {
  return "m/44'/118'/0'/0/0";
};

export const createStore = (
  mnemonic: string,
  password: string
): { Response: any; error: any } => {
  try {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    let encrypted = cipher.update(mnemonic);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    let obj = {
      hashpwd: crypto
        .createHash(passwordHashAlgorithm)
        .update(password)
        .digest("hex"),
      iv: iv.toString("hex"),
      salt: key.toString("hex"),
      crypted: encrypted.toString("hex"),
    };
    return {
      Response: obj,
      error: null,
    };
  } catch (exception) {
    return {
      Response: false,
      error: exception.message,
    };
  }
};

export const decryptStore = (
  fileData: any,
  password: string
): { mnemonic: any } => {
  let hashpwd = fileData.hashpwd;
  let iv = fileData.iv;
  let salt = fileData.salt;
  let crypted = fileData.crypted;

  if (
    hashpwd ===
    crypto.createHash(passwordHashAlgorithm).update(password).digest("hex")
  ) {
    let ivText = Buffer.from(iv, "hex");
    let encryptedText = Buffer.from(crypted, "hex");

    let decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(salt, "hex"),
      ivText
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return {
      mnemonic: decrypted.toString(),
    };
  } else {
    return {
      mnemonic: "Incorrect password.",
    };
  }
};
