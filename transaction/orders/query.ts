import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";

export class queryOrders extends Persistence {
  queryOrder = async (): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryOrderPath,
      headers: {},
    };

    return new Promise(function (resolve, reject) {
      Request(options, async function (error: any, res: { body: string; }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(res.body);
        let list = result.result.list;
        resolve(list);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
    });
  }

  queryOrderWithID = async (id: any): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryOrderWithID + id,
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