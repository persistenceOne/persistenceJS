// @ts-ignore
import * as config from "../config.json";
import { fetch } from "node-fetch";

let _fetch = fetch.default;

export const checkRawLog = (log: string): Promise<boolean> => {
  return new Promise(function (resolve) {
    let rawData = JSON.stringify(log);
    if (
      rawData.indexOf("failed") !== -1 ||
      rawData.indexOf("error") !== -1 ||
      rawData.indexOf("panic") !== -1
    ) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
};

export const getAccount = (address: string, path: string): Promise<any> => {
  return _fetch(path + config.getAccount + address)
    .then((response) => response.json())
    .catch((err) => console.log(JSON.stringify(err)));
};

export const FindInResponse = (
  type: string,
  list: [],
  id: string
): Promise<any> => {
  let data = {
    classificationID: "",
    hashID: "",
  };

  let ordersData = {
    classificationID: "",
    makerOwnableID: "",
    takerOwnableID: "",
    makerID: "",
    hashID: "",
  };

  return new Promise(function (resolve, reject) {
    switch (type) {
      case "assets":
        list.forEach(function (value) {
          if (
            value.value.immutables.value.properties.value.propertyList[0].value
              .id.value.idString === id
          ) {
            data.classificationID =
              value.value.id.value.classificationID.value.idString;
            data.hashID = value.value.id.value.hashID.value.idString;
            resolve(data);
          }
        });
        break;
      case "identities":
        list.forEach(function (value) {
          if (
            value.value.immutables.value.properties.value.propertyList[0].value
              .id.value.idString === id
          ) {
            data.classificationID =
              value.value.id.value.classificationID.value.idString;
            data.hashID = value.value.id.value.hashID.value.idString;
            resolve(data);
          }
        });
        break;
      case "classifications":
        list.forEach(function (value) {
          if (
            value.value.immutableTraits.value.properties.value.propertyList[0]
              .value.id.value.idString === id
          ) {
            data.chainID = value.value.id.value.chainID.value.idString;
            data.hashID = value.value.id.value.hashID.value.idString;
            resolve(data);
          }
        });
        break;
      case "orders":
        list.forEach(function (value) {
          if (
            value.value.immutables.value.properties.value.propertyList[0].value
              .id.value.idString === id
          ) {
            ordersData.classificationID =
              value.value.key.value.classificationID.value.idString;
            ordersData.makerOwnableID =
              value.value.key.value.makerOwnableID.value.idString;
            ordersData.takerOwnableID =
              value.value.key.value.takerOwnableID.value.idString;
            ordersData.makerID = value.value.key.value.makerID.value.idString;
            ordersData.hashID = value.value.key.value.hashID.value.idString;
            resolve(ordersData);
          }
        });
        break;
    }
  });
};
