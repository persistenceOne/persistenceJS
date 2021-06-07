// @ts-ignore
import * as config from "../../config.json";
import { request } from "request";
import { Persistence } from "../../utilities/persistenceJS";

class createAccount extends Persistence {
  create = async (
    address: string,
    chain_id: string,
    mnemonic: string,
    name: string,
    denom: string,
    amount: any,
    gas: any,
    memo: string
  ): Promise<any> => {
    let x = {
      address: "",
      hash: "",
    };

    let keyAddOptions = {
      method: "POST",
      url: this.path + config.keysAdd,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    };
    // @ts-ignore
    return new Promise(function (resolve, reject) {
      request(keyAddOptions, function (error, response) {
        if (error) {
          reject(error);
        }

        let result = JSON.parse(response.body);
        x.address = result.result.keyOutput.address;

        let signOptions = {
          method: "POST",
          url: this.path + config.signTx,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            baseReq: { from: address, chain_id: chain_id },
            type: "cosmos-sdk/StdTx",
            value: {
              msg: [
                {
                  type: config.msgSend,
                  value: {
                    from_address: address,
                    to_address: x.address,
                    amount: [
                      {
                        denom: denom,
                        amount: amount,
                      },
                    ],
                  },
                },
              ],
              fee: { amount: [], gas: gas },
              signatures: null,
              memo: memo,
            },
          }),
        };
        request(signOptions, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
          let result = JSON.parse(response.body);
          let typekey = result.result.tx.signatures[0].pub_key.type;
          let value = result.result.tx.signatures[0].pub_key.value;
          let signature = result.result.tx.signatures[0].signature;

          let broadcastOptions = {
            method: "POST",
            url: this.path + config.broadcastTx,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tx: {
                msg: [
                  {
                    type: config.msgSend,
                    value: {
                      from_address: address,
                      to_address: x.address,
                      amount: [
                        {
                          denom: denom,
                          amount: amount,
                        },
                      ],
                    },
                  },
                ],
                fee: {
                  amount: [],
                  gas: gas,
                },
                signatures: [
                  {
                    pub_key: { type: typekey, value: value },
                    signature: signature,
                  },
                ],
                memo: memo,
              },
              mode: "sync",
            }),
          };
          request(broadcastOptions, function (error, resp) {
            if (error) throw new Error(error);
            let result = JSON.parse(resp.body);
            x.hash = result.txhash;
            resolve(x);
          });
        });
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}

module.exports = {
  createAccount,
};
