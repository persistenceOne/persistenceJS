import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
//import {Promise} from 'es6-promise';

export class recoverAccount extends Persistence {
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
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          reject(error);
        }

        let result = JSON.parse(response.body);
        let address = result.address;
        Promise.resolve(address);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}
