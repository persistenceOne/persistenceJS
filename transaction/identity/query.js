const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryIdentities extends persistenceClass {
    async queryIdentity() {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryIdentityPath,
            'headers': {}
        };

        return new Promise(function (resolve, reject) {
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
            return(error)
        });
    }

    async queryIdentityWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryIdentityWithID + id,
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

module.exports = queryIdentities