const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
var request = require('request');

function mint(address, chain_id, mnemonic, toID, fromID, classificationID, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.mintTyp,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"type":"/xprt/assets/mint/request","value":{"baseReq":{"from":address,"chain_id":chain_id,"memo":memo},"toID":toID,"fromID":fromID,"classificationID":classificationID,"mutableProperties":"ASSET1:S|num1,burn:H|1","immutableProperties":"ASSET2:S|num2","mutableMetaProperties":"ASSET3:S|num3","immutableMetaProperties":"ASSET4:S|num4"}})
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
    mint
};
