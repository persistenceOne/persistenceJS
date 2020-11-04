const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryOrders extends persistenceClass {
    async queryOrder(id) {

        let options = {
            'method': 'GET',
            'url': this.path + config.queryOrder,
            'headers': {}
        };
        return new Promise(function (resolve, reject) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                let result = JSON.parse(res.body)
                let list = result.result.value.orders.value.list
                let find = await helper.FindInResponse("orders", list, id)
                resolve(find)
            });
        });
    }

    async queryOrderWithID(id) {

        let options = {
            'method': 'GET',
            'url': this.path + config.queryOrderWithID + id,
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
    queryOrders
};