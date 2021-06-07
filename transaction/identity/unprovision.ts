import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class unprovisionIdentity extends Persistence {
  unprovision = async (
      address: string,
      chain_id: string,
      mnemonic: any,
      identityID: any,
      to: any,
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
      url: path + config.unprovisionKeyPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.unprovisionKeyType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          identityID: identityID,
          to: to,
        },
      }),
    };
    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string; }) {
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
