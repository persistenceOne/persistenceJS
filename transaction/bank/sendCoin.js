const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class bank extends persistenceClass {
    async sendCoin(chain_id, mnemonic, address, denom, amount, feesAmount, feesToken, gas, mode, memo = "") {
        let path = this.path
        const wallet = keys.getWallet(mnemonic);
    
        let options = {
            'method': 'POST',
            'url': path + '/bank/accounts/' + address + '/transfers',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "base_req":{
                    "from":wallet.address,
                    "chain_id":chain_id,
                    "memo":memo
                },
                "amount":[{
                    "denom":denom,
                    "amount":amount
                }]
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

module.exports = bank