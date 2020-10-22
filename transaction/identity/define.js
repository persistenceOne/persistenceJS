const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
var request = require('request');

function define(mnemonic, classificationID, mutableTraits, immutableTraits, mutableMetaTraits, immutableMetaTraits, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.defineTyp,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"type":"/xprt/identities/define/request","value":{"baseReq":{"from":config.testAccountAddress,"chain_id":config.chain_id},"fromID":classificationID,"mutableTraits":mutableTraits, "immutableTraits":immutableTraits, "mutableMetaTraits":mutableMetaTraits, "immutableMetaTraits":immutableMetaTraits}})

    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            var result = JSON.parse(response.body)

            let tx = {
                msg: result.value.msg,
                fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                signatures:null,
                memo:result.value.memo
            }
            resolve(broadcast.broadcastTx(wallet, tx, mode));
        });
    });
}

module.exports = {
    define
};
