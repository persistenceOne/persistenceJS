import * as config from "../../config.json";
import { request } from "request";
import { Persistence } from "../../utilities/persistenceJS";

class queryMeta extends Persistence {
  queryMetaWithID = async (id: any): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryMetaWithID + id,
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
  }
}

module.exports = queryMeta;
