import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class deputizeMaintainer extends Persistence {

  deputize = async (
      address: string,
      chain_id: string,
      mnemonic: string,
      identityID: string,
      clsID: string,
      toID: string,
      maintainedTraits: string,
      addMaintainer: any,
      removeMaintainer: any,
      mutateMaintainer: any,
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
      url: path + config.deputizePath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.deputizeType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          toID: toID,
          classificationID: clsID,
          fromID: identityID,
          maintainedTraits: maintainedTraits,
          addMaintainer: addMaintainer,
          removeMaintainer: removeMaintainer,
          mutateMaintainer: mutateMaintainer,
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
