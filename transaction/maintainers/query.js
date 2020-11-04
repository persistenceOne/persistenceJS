const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryMaintainer extends persistenceClass {
    async queryMaintainerWithID(id) {
    
        let options = {
            'method': 'GET',
            'url': this.path + config.queryMaintainerWithID + id,
            'headers': {}
        };
        return new Promise(function (resolve, reject) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                resolve(res.body)
            });
        });
    }
}

module.exports = {
    queryMaintainer
};
