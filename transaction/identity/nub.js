const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');

async function nub(address, chain_id, mnemonic, toAddress, nubID, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);

    let options = {
        'method': 'POST',
        'url': config.lcdURL + config.nubType,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "type":config.nubType + "/request",
            "value":{
                "baseReq":{"from":address,"chain_id":chain_id,"memo":memo},
                "nubID":nubID
            }
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
    nub
};