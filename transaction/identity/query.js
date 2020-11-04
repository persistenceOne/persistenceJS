const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryIdentities extends persistenceClass {
    async queryIdentity(id) {

        let options = {
            'method': 'GET',
            'url': this.path + config.queryIdentity,
            'headers': {}
        };
        return new Promise(function (resolve, reject) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                let result = JSON.parse(res.body)
                let list = result.result.value.identities.value.list
                let find = await helper.FindInResponse("identities", list, id)
                resolve(find)
            });
        });
    }

    async queryIdentityWithID(id) {

        let options = {
            'method': 'GET',
            'url': this.path + config.queryIdentityWithID + id,
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
    queryIdentities
};