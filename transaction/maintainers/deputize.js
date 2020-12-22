const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class deputizeMaintainer extends persistenceClass {
    async deputize(address, chain_id, mnemonic, identityID, clsID, toID, maintainedTraits, addMaintainer, removeMaintainer, mutateMaintainer, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
        let path = this.path

        let options = {
            'method': 'POST',
            'url': path + config.deputizePath,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type":config.deputizeType,
                "value":{
                    "baseReq":{"from":address,
                        "chain_id":chain_id,
                        "memo":memo,
                        "fees": [{"amount": String(feesAmount), "denom": feesToken}],
                        "gas": String(gas)},
                    "toID": toID,
                    "classificationID": clsID,
                    "fromID": identityID,
                    "maintainedTraits":maintainedTraits,
                    "addMaintainer": addMaintainer,
                    "removeMaintainer": removeMaintainer,
                    "mutateMaintainer": mutateMaintainer
                }
            })
        };
        return new Promise(function(resolve, reject) {
            request(options, function (error, response) {
                if (error) {
                    reject(error);
                }
                let result = JSON.parse(response.body)
                resolve(broadcast.broadcastTx(path, wallet, result.value, chain_id, mode));
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
            return(error)
        });
    }
}
module.exports = deputizeMaintainer
