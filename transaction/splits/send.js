const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class sendSplits extends persistenceClass {
    async send(address, chain_id, mnemonic, fromID, toID, ownableID, split, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
        let path = this.path

        let options = {
            'method': 'POST',
            'url': path + config.sendSplitType,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type": config.sendSplitType + "/request",
                "value": {
                    "baseReq": {"from": address, "chain_id": chain_id, "memo": memo},
                    fromID: fromID,
                    toID: toID,
                    ownableID: ownableID,
                    split: split
                }
            })
        };

        return new Promise(function (resolve,reject) {
            request(options, function (error, response) {
                if (error) {
                    reject(error);
                }

                let result = JSON.parse(response.body)

                let tx = {
                    msg: result.value.msg,
                    fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                    signatures: null,
                    memo: result.value.memo
                }
                resolve(broadcast.broadcastTx(path, wallet, tx, chain_id, mode));
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
            return(error)
        });
    }
}

module.exports = sendSplits
