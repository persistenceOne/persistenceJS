const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class takeOrder extends persistenceClass {
    async take(address, chain_id, mnemonic, fromID, takerOwnableSplit, orderID, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
        let path = this.path

        let options = {
            'method': 'POST',
            'url': path + config.takeOrderType,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type":config.takeOrderType + "/request",
                "value":{
                    "baseReq":{"from":address,"chain_id":chain_id,"memo":memo},
                    "fromID":fromID,
                    "takerOwnableSplit":takerOwnableSplit,
                    "orderID":orderID
                }
            })
        };
        return new Promise(function(resolve) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
    
                let result = JSON.parse(response.body)
    
                let tx = {
                    msg: result.value.msg,
                    fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                    signatures:null,
                    memo:result.value.memo
                }
                resolve(broadcast.broadcastTx(path, wallet, tx, chain_id, mode));
            });
        });
    }
}

module.exports = takeOrder
