// @ts-ignore
import * as config from "../../config.json";
import { request } from "request";
import { Persistence } from "../../utilities/persistenceJS";

class recoverAccount extends Persistence {
  recover = async (mnemonic: string, name: string): Promise<any> => {
    let options = {
      method: "POST",
      url: this.path + config.keysRecover,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, mnemonic: mnemonic }),
    };
    return new Promise(function (resolve, reject) {
      request(options, function (error, response) {
        if (error) {
          reject(error);
        }

        let result = JSON.parse(response.body);
        let address = result.address;
        resolve(address);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}

module.exports = {
  recoverAccount,
};
