const config = require("../../config.json")
var request = require('request');

function recover(mnemonic, name) {

    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.keysRecover,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name":name,"mnemonic":mnemonic})

    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            var result = JSON.parse(response.body)
            var address = result.address
            resolve(address)
        });
    });
}

module.exports = {
    recover
};
