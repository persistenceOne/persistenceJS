const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryAsset extends persistenceClass {
    async queryAsset(id) {

        let options = {
            'method': 'GET',
            'url': this.path + config.queryAsset,
            'headers': {}
        };
        return new Promise(function (resolve, reject) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                let result = JSON.parse(res.body)
                let list = result.result.value.assets.value.list
                let find = await helper.FindInResponse("assets", list, id)
                resolve(find)
            });
        });
    }

    async queryAssetWithID(id) {

        let options = {
            'method': 'GET',
            'url': this.path + config.queryAssetWithID + id,
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
    queryAsset
};