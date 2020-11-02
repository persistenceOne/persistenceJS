const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');

async function queryOrder(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryOrder,
        'headers': {
        }
    };
    return new Promise(function(resolve, reject) {
        request(options, async function (error, res) {
            if (error) throw new Error(error);
            let result = JSON.parse(res.body)
            let list = result.result.value.orders.value.list
            let find = await helper.FindInResponse("orders", list, id)
            resolve(find)
        });
    });
}

async function queryOrderWithID(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.queryOrderWithID + id,
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
    queryOrder,
    queryOrderWithID
};