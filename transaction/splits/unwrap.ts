import * as config from "../../config.json";
import { request } from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

class unwrapsplits extends Persistence {
  unwrap = async (
      address: string,
      chain_id: string,
      mnemonic: string,
      fromID: string,
      ownableID: string,
      split: any,
      feesAmount: any,
      feesToken: any,
      gas: any,
      mode: any,
      memo: string
  ): Promise<any> => {
    const wallet = getWallet(mnemonic, "");
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.unwrapCoinPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.unwrapCoinType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          fromID: fromID,
          ownableID: ownableID,
          split: split,
        },
      }),
    };

    return new Promise(function (resolve, reject) {
      request(options, function (error, response) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(response.body);
        resolve(
          broadcastTx(path, wallet, result.value, chain_id, mode)
        );
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  }
}

module.exports = unwrapsplits;
