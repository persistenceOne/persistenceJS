import  {signTx}  from '@tendermint/sig';
import * as config from "../config.json";
import { getAccount } from "../helpers/helper";
import Request from "request";

export const broadcastTx = async(
  path: any,
  wallet: any,
  tx: any,
  chainID: any,
  mode: any
): Promise<any> => {
  let getAcc = await getAccount(wallet.address, path);

  let data = {
    raw_log: ""
  };
  return new Promise(async(resolve, reject) =>{
      if (getAcc.hasOwnProperty("error")) {
        data.raw_log = "Account for " + wallet.address + " not found.";
        console.log(JSON.stringify(data));
        return reject(data);
      }
      if (Object.keys(getAcc.result.value.address).length === 0) {
        data.raw_log = "Account for " + wallet.address + " not found.";
        console.log(JSON.stringify(data));
        return reject(data);
      }

      let accountNum = getAcc.result.value.account_number;
      if (accountNum === undefined) {
        accountNum = String(0);
      }
      let seq = getAcc.result.value.sequence;
      if (seq === undefined) {
        seq = String(0);
      }
      const signMeta = {
        account_number: accountNum,
        chain_id: chainID,
        sequence: seq,
      };

      let stdTx = await signTx(tx, signMeta, wallet);

      let broadcastReq = {
        tx: stdTx,
        mode: mode,
      };

      let options = {
        method: "POST",
        url: path + config.broadcastTx,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(broadcastReq),
      };
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          return error;
        }
        let data = JSON.parse(response.body);
        resolve(data);
      });

  }).catch((error) => {
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
