const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class recoverAccount extends persistenceClass {

    async recover(mnemonic, name) {

        let options = {
            'method': 'POST',
            'url': this.path + config.keysRecover,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name": name, "mnemonic": mnemonic})

        };
        return new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) {
                    reject(error);
                }

                let result = JSON.parse(response.body)
                let address = result.address
                resolve(address)
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
        });
    }
}

module.exports = {
    recoverAccount
};
