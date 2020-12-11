const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class cls extends persistenceClass {
    async queryClassification(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.qClassification,
            'headers': {
            }
        };

        let data = {
            'clasificationID': '',
            'hashID': ''
        }
        return new Promise(function(resolve, reject) {
            request(options, async function (error, res) {
                if (error) {
                    reject(error);
                }

                let result = JSON.parse(res.body)
                let list = result.result.list
                if(list != null) {
                    list.forEach(function (value) {
                        if (value.value.immutableTraits.value.properties.value.propertyList[0].value.id.value.idString === id) {
                            data.chainID = value.value.id.value.chainID.value.idString
                            data.hashID = value.value.id.value.hashID.value.idString
                        }
                    });
                }
                resolve(data)
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
        });
    }
    
    async queryClassificationWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryClsWithID + id,
            'headers': {
            }
        };
        return new Promise(function(resolve, reject) {
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

module.exports = cls