const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryOrders extends persistenceClass {
    async queryOrder(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.qOrder,
            'headers': {}
        };

        let ordersData = {
            'clasificationID': '',
            'makerownableid': '',
            'takerownableid': '',
            'makerID': '',
            'hashID': ''
        }
        return new Promise(function (resolve, reject) {
            request(options, async function (error, res) {
                if (error) {
                    reject(error);
                }
                let result = JSON.parse(res.body)
                let list = result.result.list
                if(list != null) {
                    list.forEach(function (value) {
                        if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                            ordersData.clasificationID = value.value.key.value.classificationID.value.idString
                            ordersData.makerownableid = value.value.key.value.makerOwnableID.value.idString
                            ordersData.takerownableid = value.value.key.value.takerOwnableID.value.idString
                            ordersData.makerID = value.value.key.value.makerID.value.idString
                            ordersData.hashID = value.value.key.value.hashID.value.idString
                            resolve(ordersData);
                        }
                    });
                }
                resolve(ordersData)
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
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
                if (error) {
                    reject(error);
                }
                resolve(res.body)
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
            return(error)
        });
    }
}

module.exports = queryOrders