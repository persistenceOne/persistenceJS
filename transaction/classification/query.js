const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class cls extends persistenceClass {
    async queryClassification(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryCls,
            'headers': {
            }
        };

        let data = {
            'clasificationID': '',
            'hashID': ''
        }
        return new Promise(function(resolve) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);

                let result = JSON.parse(res.body)
                let list = result.result.value.classifications.value.list
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
        return new Promise(function(resolve) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                resolve(res.body)
            });
        });
    }
}

module.exports = cls