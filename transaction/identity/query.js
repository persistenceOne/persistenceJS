const config = require("../../config.json")
var request = require('request');
var Promise = require('promise');

async function queryIdentity(id) {

    var data = {
        'clasificationID': '',
        'hashID': ''
    }

    var options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryIdentity,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, res) {
            if (error) throw new Error(error);
            var result = JSON.parse(res.body)
            var list = result.result.value.identities.value.list
            list.forEach(function (value) {
                if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString == id) {
                    data.clasificationID = value.value.id.value.classificationID.value.idString
                    data.hashID = value.value.id.value.hashID.value.idString
                    resolve(data);
                }
            });
        });
    });
}

module.exports = {
    queryIdentity
};