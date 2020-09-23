const keys = require("../../utilities/keys");
const helpers = require("../../helpers/index")
const broadcast = require("../../utilities/broadcastTx");

function mint(mnemonic, toAddress, fromID, maintainersID, classificationID, properties, feesAmount, feesToken, gas, mode, memo = "") {

    console.log("1")
    const wallet = keys.getWallet(mnemonic);
    let tx = {
        msg: [
            {
                type: "/xprt/assets/mint/message",
                value: {
                    from: wallet.address,
                    fromID: helpers.NewID(fromID),
                    maintainersID: helpers.NewID(maintainersID),
                    classificationID: helpers.NewID(classificationID),
                    properties: helpers.NewProperties(properties.split(',')),
                    toID: toAddress
                }
            }
        ],
        fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
        memo: memo
    };
    console.log("\n\nmint:\n\n " + JSON.stringify(tx))
    return broadcast.broadcastTx(wallet, tx, mode);
}

module.exports = {
    mint
};