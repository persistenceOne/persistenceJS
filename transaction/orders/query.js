const config = require("../../config.json")
var request = require('request');
var Promise = require('promise');

async function queryOrder(id) {

    var data = {
        'clasificationID': '',
        'makerownableid':'',
        'takerownableid':'',
        'makerID':'',
        'hashID': ''
    }

    var options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryOrder,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, function (error, res) {
            if (error) throw new Error(error);
            var result = JSON.parse(res.body)
            var list = result.result.value.orders.value.list
            list.forEach(function (value) {
                if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString == id) {
                    data.clasificationID = value.value.id.value.classificationID.value.idString
                    data.makerownableid = value.value.id.value.makerOwnableID.value.idString
                    data.takerownableid = value.value.id.value.takerOwnableID.value.idString
                    data.makerID = value.value.id.value.makerID.value.idString
                    data.hashID = value.value.id.value.hashID.value.idString
                    resolve(data);
                }
            });
        });
    });
}

module.exports = {
    queryOrder
};