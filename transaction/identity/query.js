const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');

async function queryIdentity(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryIdentity,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, async function (error, res) {
            if (error) throw new Error(error);
            let result = JSON.parse(res.body)
            let list = result.result.value.identities.value.list
            let find = await helper.FindInResponse("identities", list, id)
            resolve(find)
        });
    });
}

module.exports = {
    queryIdentity
};