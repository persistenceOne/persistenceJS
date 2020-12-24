const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class cls extends persistenceClass {
    async queryClassification() {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryClassificationPath,
            'headers': {
            }
        };

        return new Promise(function(resolve, reject) {
            request(options, async function (error, res) {
                if (error) {
                    reject(error);
                }

                let result = JSON.parse(res.body)
                let list = result.result.list
                resolve(list)
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