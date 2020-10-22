const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
var request = require('request');

function reveal(address, chain_id, mnemonic, metaFact, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.metaRevealType,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"type":"/xprt/metas/reveal/request","value":{"baseReq":{"from":address,"chain_id":chain_id,"memo":memo},metaFact:metaFact}})
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
    reveal
};
