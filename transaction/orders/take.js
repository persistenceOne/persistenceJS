const keys = require("../../utilities/keys");
const helpers = require("../../helpers/index")
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
var request = require('request');

function take(mnemonic, fromID, takerOwnableSplit, orderID, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.takeOrderType,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"type":"/xprt/orders/take/request","value":{"baseReq":{"from":config.testAccountAddress,"chain_id":config.chain_id},"fromID":fromID,"takerOwnableSplit":takerOwnableSplit,"orderID":orderID}})
    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            var result = JSON.parse(response.body)

            let tx = {
                msg: result.value.msg,
                fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                signatures:null,
                memo:""
            }
            resolve(broadcast.broadcastTx(wallet, tx, mode));
        });
    });
}

module.exports = {
    take
};
