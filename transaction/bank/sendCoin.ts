import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";
import * as config from "../../config.json";

export class bank extends Persistence {
  sendCoin = async (
    from_address: string,
    chain_id: string,
    to_address: string,
    mnemonic: string,
    denom: string,
    amount: string,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string
  ): Promise<any> => {
    let path = this.path;
    const wallet = await getWallet(mnemonic, "");

    let options = {
      method: "POST",
      url: path + "/bank/accounts/" + from_address + "/transfers",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        base_req: {
          from: to_address,
          chain_id: chain_id,
          memo: memo,
          fees: [{ amount: String(feesAmount), denom: feesToken }],
        },
        amount: [
          {
            denom: denom,
            amount: amount,
          },
        ],
      }),
    };
    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(response.body);
        resolve(broadcastTx(path, wallet, mnemonic, result.value, chain_id, result.value.fee.gas ,config.GASPRICE, mode));
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  createSendCoinMsg = async (
      from_address: string,
      chain_id: string,
      to_address: string,
      denom: string,
      amount: string,
      feesAmount: any,
      feesToken: any,
      gas: any,
      memo: string
  ): Promise<any> => {
    let path = this.path;

    let options = {
      method: "POST",
      url: path + "/bank/accounts/" + to_address + "/transfers",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        base_req: {
          from: from_address,
          chain_id: chain_id,
          memo: memo,
          fees: [{ amount: String(feesAmount), denom: feesToken }],
        },
        amount: [
          {
            denom: denom,
            amount: amount,
          },
        ],
      }),
    };
    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(response.body);
        resolve(result);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}
