import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class issueIdentity extends Persistence {
  issue = async (
      address: string,
      chain_id: string,
      mnemonic: any,
      to: any,
      fromID: string,
      classificationID: any,
      mutableProperties: string,
      immutableProperties: any,
      mutableMetaProperties: any,
      immutableMetaProperties: any,
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
      url: path + config.issueIdentityPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.issueIdentityType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          to: to,
          fromID: fromID,
          classificationID: classificationID,
          mutableProperties: mutableProperties,
          immutableProperties: immutableProperties,
          mutableMetaProperties: mutableMetaProperties,
          immutableMetaProperties: immutableMetaProperties,
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
          broadcastTx(path, wallet, mnemonic ,result.value, chain_id, result.value.fee.gas ,config.GASPRICE, mode)
        );
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  }

  createIdentityIssueMsg = async (
      address: string,
      chain_id: string,
      to: any,
      fromID: string,
      classificationID: any,
      mutableProperties: string,
      immutableProperties: any,
      mutableMetaProperties: any,
      immutableMetaProperties: any,
      feesAmount: any,
      feesToken: any,
      gas: any,
      memo: string
  ): Promise<any> => {
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.issueIdentityPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.issueIdentityType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          to: to,
          fromID: fromID,
          classificationID: classificationID,
          mutableProperties: mutableProperties,
          immutableProperties: immutableProperties,
          mutableMetaProperties: mutableMetaProperties,
          immutableMetaProperties: immutableMetaProperties,
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

