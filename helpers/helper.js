const config = require("../config.json")
const fetch = require('node-fetch').default;

function checkRawLog(log) {
    return new Promise(function (resolve) {
        let rawData = JSON.stringify(log)
        if ((rawData.indexOf('failed') !== -1) || (rawData.indexOf('error') !== -1) || (rawData.indexOf('panic') !== -1)) {
            resolve(false)
        } else {
            resolve(true)
        }
    })
}

function getAccount(address, path) {
    return fetch(path + config.getAccount + address)
        .then(response => response.json())
        .catch(err => console.log(JSON.stringify(err)))
}

module.exports = {
    checkRawLog,
    getAccount
};
