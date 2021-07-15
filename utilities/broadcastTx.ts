import * as config from "../config.json";
import { getAccount } from "../helpers/helper";
import {  Secp256k1HdWallet } from "@cosmjs/amino";
import {GasPrice, SigningCosmosClient} from '@cosmjs/launchpad'

export const broadcastTx = async(
  path: any,
  wallet: any,
  mnemonic: any,
  tx: any,
  chainID: any,
  gas: any,
  gasPrice: any,
  mode: any
): Promise<any> => {
  let getAcc = await getAccount(wallet.address, path);

    let data = {
    raw_log: ""
  };
  return new Promise(async(resolve, reject) =>{
      if (getAcc.hasOwnProperty("error")) {
        data.raw_log = "Account for " + wallet.address + " not found.";
        return reject(data);
      }
      if (Object.keys(getAcc.result.value.address).length === 0) {
        data.raw_log = "Account for " + wallet.address + " not found.";
        return reject(data);
      }

      const _wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);

      let concatGas = gasPrice + "stake"

      let calculateGas = await GasPrice.fromString(concatGas)

      let client = new SigningCosmosClient(config.testURL, wallet.address, _wallet, calculateGas, gas, mode);

      let response = await client.signAndBroadcast(tx.msg, tx.fee, "")
      resolve(response);

  }).catch((error: string) => {
    console.log("Promise Rejected: " + error);
    return error;
  });
};

const getTxResponse = (response: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (response.code) {
      //reject(JSON.stringify(response.raw_log).message);
    } else if (response.error) {
      reject(response.error);
    } else {
      if (response.txhash) {
        resolve(response.txhash);
      } else {
        console.log(JSON.stringify(response));
        reject("Tx failed due to unknown reasons");
      }
    }
  });
};
