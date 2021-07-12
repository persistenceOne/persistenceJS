import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class mintAsset extends Persistence {
  mint = async (
      address: string,
      chain_id: string,
      mnemonic: any,
      toID: any,
      fromID: string,
      classificationID: any,
      immutableMetaProperties: any,
      immutableProperties: any,
      mutableMetaProperties: any,
      mutableProperties: string,
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
      url: path + config.mintAssetPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.mintAssetType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          toID: toID,
          fromID: fromID,
          classificationID: classificationID,
          immutableMetaProperties: immutableMetaProperties,
          immutableProperties: immutableProperties,
          mutableMetaProperties: mutableMetaProperties,
          mutableProperties: mutableProperties,
        },
      }),
    };
    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          reject(error);
        }

        let result = JSON.parse(response.body);
        resolve(broadcastTx(path, wallet, mnemonic ,result.value, chain_id, result.value.fee.gas ,config.GASPRICE, mode));
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  createAssetMintMsg = async (
      address: string,
      chain_id: string,
      toID: any,
      fromID: string,
      classificationID: any,
      immutableMetaProperties: any,
      immutableProperties: any,
      mutableMetaProperties: any,
      mutableProperties: string,
      feesAmount: any,
      feesToken: any,
      gas: any,
      memo: string
  ): Promise<any> => {
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.mintAssetPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.mintAssetType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          toID: toID,
          fromID: fromID,
          classificationID: classificationID,
          immutableMetaProperties: immutableMetaProperties,
          immutableProperties: immutableProperties,
          mutableMetaProperties: mutableMetaProperties,
          mutableProperties: mutableProperties,
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
  };
}
