const keys = require("../../utilities/keys");
const helpers = require("../../helpers/index")
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")

function define(mnemonic, classificationID, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);
    console.log("$$$$$$$$44 config.S    " +  config.S)
    let tx = {
        msg: [
            {
                type: config.defineIdentityType,
                value: {
                    baseReq: {
                        from: config.testAccountAddress,
                        chain_id: config.chain_id
                    },
                    fromID: helpers.NewID(classificationID),
                    mutableTraits: helpers.NewProperties("mutableTraits1:S|num1"),
                    immutableTraits: helpers.NewProperties("immutableTraits1:S|"),
                    mutableMetaTraits: helpers.NewProperties("mutableMetaTraits1:S|num3"),
                    immutableMetaTraits: helpers.NewProperties("immutableMetaTraits1:S|num4")
                }
            }
        ],
        fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
        memo: memo
    };
    
    console.log("req: " + JSON.stringify(tx))
    return broadcast.broadcastTx(wallet, tx, mode);
}

module.exports = {
    define
};

// immutableTraits: {
//     type: "xprt/immutables",
//         value:{
//         properties:{
//             type: "xprt/properties",
//                 value:{
//                 propertyList:[
//                     helpers.NewProperties("immutableTraits1:S|")
//                 ]
//             }
//         }
//     }
// },