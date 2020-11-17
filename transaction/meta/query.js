const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryMeta extends persistenceClass {
    async queryMetaWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryMetaWithID + id,
            'headers': {}
        };
        return new Promise(function (resolve) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                resolve(res.body)
            });
        });
    }
}

module.exports = queryMeta
