const Hash = require("../utilities/hash").Hash;
var config = require("../config.json")

function NewFact(fact, meta, signatureList = null) {
    // return {
    //     type: "xprt/fact",
    //     value: {
    //         hash: Hash(fact),
    //         type:fact[0],
    //         signatures: {
    //             type: "xprt/signatures",
    //             value: {
    //                 signatureList: signatureList
    //             }
    //         }
    //     }
    // }
   // console.log("fact*********" + config.S)


    return {
        Hash: Hash(fact),
        Type: config.S,
        Signatures: {
            type: "xprt/signatures",
            value: {
                signatureList: signatureList
            }
        }
    }
}

module.exports = {
    NewFact
};