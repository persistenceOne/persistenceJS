const define = require("./define").define;
const query = require("./query").queryOrder;
const queryOrderWithID = require("./query").queryOrderWithID;
const make = require("./make").make;
const cancel = require("./cancel").cancel;
const take = require("./take").take;

module.exports = {
    define,
    query,
    queryOrderWithID,
    make,
    cancel,
    take
};