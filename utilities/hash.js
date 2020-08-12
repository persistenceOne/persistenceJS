const crypto = require('crypto');

function Hash(...args) {
    let shaSum = crypto.createHash('sha1');
    shaSum.update(args.sort().join('_'));
    return shaSum.digest('base64').replace('+', '-').replace('/', '_');
}

module.exports = {
    Hash
};