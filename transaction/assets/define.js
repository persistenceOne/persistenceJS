const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
var request = require('request');

function define(mnemonic, classificationID, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.defineAssetTyp,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"type":"/xprt/assets/define/request","value":{"baseReq":{"from":config.testAccountAddress,"chain_id":config.chain_id},"fromID":classificationID,"mutableTraits":"ASSET1:S|num1,burn:H|1","immutableTraits":"ASSET2:S|","mutableMetaTraits":"ASSET3:S|num3","immutableMetaTraits":"ASSET4:S|num4"}})

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
