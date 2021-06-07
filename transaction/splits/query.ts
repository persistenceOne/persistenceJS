import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";

export class querySplits extends Persistence {
  querySplitsWithID = async (id: any): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.querySplitWithID + id,
      headers: {},
    };
    return new Promise(function (resolve, reject) {
      Request(options, async function (error: any, res: { body: unknown; }) {
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