const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class cancelOrder extends persistenceClass {
    async cancel(address, chain_id, mnemonic, fromID,  orderID, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
        let path = this.path

        let options = {
            'method': 'POST',
            'url': path + config.cancelOrderPath,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type":config.cancelOrderType,
                "value":{
                    "baseReq":{"from":address,"chain_id":chain_id,"memo":memo,
                        "fee": {"amount": [{"amount": String(feesAmount), "denom": feesToken}], "gas": String(gas)},},
                    "fromID":fromID,
                    "orderID":orderID
                }
            })
        };

        return new Promise(function(resolve, reject) {
            request(options, function (error, response) {
                if (error) {
                    reject(error);
                }

                let result = JSON.parse(response.body)

                let tx = result.value
                resolve(broadcast.broadcastTx(path, wallet, tx, chain_id, mode));
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
            return(error)
        });
    }
}

module.exports = cancelOrder
