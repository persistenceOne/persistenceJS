const fs = require('fs');
const fileName = './config.json';
const file = require("./config.json");

function init(url){

    file.lcdURL = url;

    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });
}

module.exports = {
    init
};