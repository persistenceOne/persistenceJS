import * as config from "../../config.json";
import { request } from "request";
import { Persistence } from "../../utilities/persistenceJS";

class queryAssets extends Persistence {
  queryAsset = async (): Promise<any> => {
    let path = this.path;
    let options = {
      method: "GET",
      url: path + config.queryAssetPath,
      headers: {},
    };

    return new Promise(function (resolve, reject) {
      request(options, async function (error, res) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(res.body);
        let list = result.result.list;
        resolve(list);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  queryAssetWithID = async (id: any): Promise<any> => {
    let path = this.path;
    let options = {
      method: "GET",
      url: path + config.queryAssetWithID + id,
      headers: {},
    };
    return new Promise(function (resolve, reject) {
      request(options, async function (error, res) {
        if (error) {
          reject(error);
        }
        resolve(res.body);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}

module.exports = queryAssets;
