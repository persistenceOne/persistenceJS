const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');

async function queryMetaWithID(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryMetaWithID + id,
        'headers': {}
    };
    return new Promise(function (resolve, reject) {
        request(options, async function (error, res) {
            if (error) throw new Error(error);
            resolve(res.body)
        });
    });
}

module.exports = {
    queryMetaWithID: queryMetaWithID
};
