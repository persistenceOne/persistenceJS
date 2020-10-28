const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');

async function queryAsset(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryAsset,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, async function (error, res) {
            if (error) throw new Error(error);
            let result = JSON.parse(res.body)
            let list = result.result.value.assets.value.list
            let find = await helper.FindInResponse("assets", list, id)
            resolve(find)
        });
    });
}

async function queryAssetWithID(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryAssetWithID + id,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, async function (error, res) {
            if (error) throw new Error(error);
            resolve(res.body)
        });
    });
}

module.exports = {
    queryAsset,
    queryAssetWithID
};