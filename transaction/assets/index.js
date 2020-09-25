const define = require("./define").define;
const query = require("./query").queryAsset;
const mint = require("./mint").mint;
const mutate = require("./mutate").mutate;
const burn = require("./burn").burn;

module.exports = {
    define,
    query,
    mint,
    mutate,
    burn
};