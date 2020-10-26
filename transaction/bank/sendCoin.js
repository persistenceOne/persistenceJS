const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');

function sendCoin(chain_id, mnemonic, address, feesAmount, feesToken, gas, mode, memo = "") {

    const wallet = keys.getWallet(mnemonic);

    let options = {
        'method': 'POST',
        'url': config.lcdURL + '/bank/accounts/' + address + '/transfers',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "base_req":{
                "from":address,"chain_id":chain_id,"memo":memo
            },
            "amount":[{
                "denom":"stake",
                "amount":"1000000"
            }]
        })

    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            let result = JSON.parse(response.body)

            let tx = {
                msg: result.value.msg,
                fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                signatures:null,
                memo:result.value.memo
            }
            resolve(broadcast.broadcastTx(wallet, tx, chain_id, mode));
        });
    });
}

module.exports = {
    sendCoin
};