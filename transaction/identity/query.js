const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryIdentities extends persistenceClass {
    async queryIdentity(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryIdentity,
            'headers': {}
        };

        let data = {
            'clasificationID': '',
            'hashID': ''
        }
        return new Promise(function (resolve) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                let result = JSON.parse(res.body)
                let list = result.result.value.identities.value.list
                if(list != null) {
                    list.forEach(function (value) {
                        if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                            data.clasificationID = value.value.id.value.classificationID.value.idString
                            data.hashID = value.value.id.value.hashID.value.idString
                        }
                    });
                }
                resolve(data)
            });
        });
    }

    async queryIdentityWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryIdentityWithID + id,
            'headers': {}
        };
        return new Promise(function (resolve) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                resolve(res.body)
            });
        });
    }
}

module.exports = queryIdentities