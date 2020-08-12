const Hash = require("../utilities/hash").Hash;

function NewFact(fact, meta, signatureList = null) {
    return {
        type: "xprt/fact",
        value: {
            hash: Hash(fact),
            signatures: {
                type: "xprt/signatures",
                value: {
                    signatureList: signatureList
                }
            },
            meta: meta
        }
    }
}

module.exports = {
    NewFact
};