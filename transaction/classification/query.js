const config = require("../../config.json")
const helper = require("../../helpers/index")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class cls extends persistenceClass {
    async queryClassification(id) {
    
        let options = {
            'method': 'GET',
            'url': this.path + config.queryCls,
            'headers': {
            }
        };
        return new Promise(function(resolve, reject) {
            request(options, async function (error, res) {
                if (error) throw new Error(error);
                let result = JSON.parse(res.body)
                let list = result.result.value.classifications.value.list
                let find = await helper.FindInResponse("classifications", list, id)
                resolve(find)
            });
        });
    }
    
    async queryClassificationWithID(id) {
    
        let options = {
            'method': 'GET',
            'url': this.path + config.queryClsWithID + id,
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
}

module.exports = {
    cls
};