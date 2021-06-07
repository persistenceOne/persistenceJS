import * as config from "../../config.json";
import { request } from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

class revealMeta extends Persistence {
  reveal = async (
      address: string,
      chain_id: string,
      mnemonic: any,
      metaFact: any,
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
      url: path + config.metaRevealPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.metaRevealType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          metaFact: metaFact,
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
module.exports = revealMeta;
