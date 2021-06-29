import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class deputizeIdentity extends Persistence {

  deputize = async (
      address: string,
      chain_id: string,
      mnemonic: string,
      toId: string,
      fromID: string,
      classificationID: any,
      mutableTraits: string,
      immutableTraits: any,
      mutableMetaTraits: any,
      immutableMetaTraits: any,
      feesAmount: any,
      feesToken: any,
      gas: any,
      mode: any,
      memo: string
  ): Promise<any> => {
    const wallet = await getWallet(mnemonic, "");
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.deputizeIdentityPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.deputizeIdentityType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          toId: toId,
          fromID: fromID,
          classificationID: classificationID,
          mutableTraits: mutableTraits,
          immutableTraits: immutableTraits,
          mutableMetaTraits: mutableMetaTraits,
          immutableMetaTraits: immutableMetaTraits,
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
          broadcastTx(path, wallet, mnemonic, result.value, chain_id, result.value.fee.gas ,config.GASPRICE, mode)
        );
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  }

  createIdentityDeputizeMsg = async (
      address: string,
      chain_id: string,
      toId: string,
      fromID: string,
      classificationID: any,
      mutableTraits: string,
      immutableTraits: any,
      mutableMetaTraits: any,
      immutableMetaTraits: any,
      feesAmount: any,
      feesToken: any,
      gas: any,
      memo: string
  ): Promise<any> => {
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.deputizeIdentityPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.deputizeIdentityType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          toId: toId,
          fromID: fromID,
          classificationID: classificationID,
          mutableTraits: mutableTraits,
          immutableTraits: immutableTraits,
          mutableMetaTraits: mutableMetaTraits,
          immutableMetaTraits: immutableMetaTraits,
        },
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
  }
}
