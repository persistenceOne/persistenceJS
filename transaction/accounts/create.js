const config = require("../../config.json")
var request = require('request');

function create(address, chain_id, mnemonic, name) {

    let x = {
        'address': '',
        'hash':''
    }

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.keysAdd,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name":name})

    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            var result = JSON.parse(response.body)
            x.address = result.result.keyOutput.address

            var options1 = {
                'method': 'POST',
                'url': config.lcdURL + config.signTx,
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"baseReq":{"from":address,"chain_id":chain_id},"type":"cosmos-sdk/StdTx","value":{"msg":[{"type":"cosmos-sdk/MsgSend","value":{"from_address":config.testAccountAddress,"to_address":x.address,"amount":[{"denom":"stake","amount":"1000"}]}}],"fee":{"amount":[],"gas":"200000"},"signatures":null,"memo":""}})

            };
            request(options1, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
                var result = JSON.parse(response.body)
                var typekey = result.result.tx.signatures[0].pub_key.type
                var value = result.result.tx.signatures[0].pub_key.value
                var signature = result.result.tx.signatures[0].signature

                var options2 = {
                    'method': 'POST',
                    'url': config.lcdURL + config.broadcastTx,
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"tx":{"msg":[{"type":"cosmos-sdk/MsgSend","value":{"from_address":config.testAccountAddress,"to_address":x.address,"amount":[{"denom":"stake","amount":"1000"}]}}],"fee":{"amount":[],"gas":"200000"},"signatures":[{"pub_key":{"type":typekey,"value":value},"signature":signature}],"memo":""},"mode":"sync"})

                };
                request(options2, function (error, resp) {
                    if (error) throw new Error(error);
                    var result = JSON.parse(resp.body)
                    x.hash = result.txhash
                    resolve(x)
                });
            });
        });
    });
}

module.exports = {
    create
};
