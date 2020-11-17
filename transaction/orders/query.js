const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryOrders extends persistenceClass {
    async queryOrder(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryOrder,
            'headers': {}
        };

        let ordersData = {
            'clasificationID': '',
            'makerownableid': '',
            'takerownableid': '',
            'makerID': '',
            'hashID': ''
        }
        return new Promise(function (resolve) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                let result = JSON.parse(res.body)
                let list = result.result.value.orders.value.list
                if(list != null) {
                    list.forEach(function (value) {
                        if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                            ordersData.clasificationID = value.value.id.value.classificationID.value.idString
                            ordersData.makerownableid = value.value.id.value.makerOwnableID.value.idString
                            ordersData.takerownableid = value.value.id.value.takerOwnableID.value.idString
                            ordersData.makerID = value.value.id.value.makerID.value.idString
                            ordersData.hashID = value.value.id.value.hashID.value.idString
                            resolve(ordersData);
                        }
                    });
                }
                resolve(ordersData)
            });
        });
    }

    async queryOrderWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryOrderWithID + id,
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

module.exports = queryOrders