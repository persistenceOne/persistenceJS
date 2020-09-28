const config = require("../../config.json")
var request = require('request');
var Promise = require('promise');

async function queryClassification(id) {

    var data = {
        'chainID': '',
        'hashID': ''
    }

    var options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryCls,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, res) {
            if (error) throw new Error(error);
            var result = JSON.parse(res.body)
            var list = result.result.value.classifications.value.list
            list.forEach(function (value) {
                if (value.value.immutableTraits.value.properties.value.propertyList[0].value.id.value.idString == id) {
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