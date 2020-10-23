const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');

async function queryClassification(id) {

    let data = {
        'chainID': '',
        'hashID': ''
    }

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryCls,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, res) {
            if (error) throw new Error(error);
            let result = JSON.parse(res.body)
            let list = result.result.value.classifications.value.list
            list.forEach(function (value) {
                if (value.value.immutableTraits.value.properties.value.propertyList[0].value.id.value.idString === id) {
                    data.chainID = value.value.id.value.chainID.value.idString
                    data.hashID = value.value.id.value.hashID.value.idString
                    resolve(data);
                }
            });
        });
    });
}

module.exports = {
    queryClassification
};