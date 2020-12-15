const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class burnAsset extends persistenceClass {

    async burn(address, chain_id, mnemonic, fromID, assetID, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
        let path = this.path

        let options = {
            'method': 'POST',
            'url': path + config.burnAssetPath,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type": config.burnAssetType,
                "value": {
                    "baseReq":{"from":address,
                        "chain_id":chain_id,
                        "memo":memo,
                        "fees": [{"amount": String(feesAmount), "denom": feesToken}],
                        "gas": String(gas)},
                    "fromID": fromID,
                    "assetID": assetID
                }
            })
        };

        return new Promise(function (resolve, reject) {
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

module.exports = burnAsset
