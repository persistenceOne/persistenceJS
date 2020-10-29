const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');

async function querySplitsWithID(id) {

    let options = {
        'method': 'GET',
        'url': config.lcdURL + config.querySplitWithID + id,
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
    querySplitsWithID
};