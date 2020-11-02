const config = require("../../config.json")
const request = require('request');

function recover(mnemonic, name) {

    let options = {
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

            let result = JSON.parse(response.body)
            let address = result.address
            resolve(address)
        });
    });
}

module.exports = {
    recover
};
