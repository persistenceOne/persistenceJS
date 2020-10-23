const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');

async function queryAsset(id) {

    let data = {
        'clasificationID': '',
        'hashID': ''
    }

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryAsset,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, res) {
            if (error) throw new Error(error);
            let result = JSON.parse(res.body)
            let list = result.result.value.assets.value.list
            list.forEach(function (value) {
                if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                    data.clasificationID = value.value.id.value.classificationID.value.idString
                    data.hashID = value.value.id.value.hashID.value.idString
                    resolve(data);
                }
            });
        });
    });
}

module.exports = {
    queryAsset
};