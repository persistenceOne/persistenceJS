const keys = require("../../utilities/keys");
const helpers = require("../../helpers/index")
const broadcast = require("../../utilities/broadcastTx");

function issue(mnemonic, toAddress, fromID, maintainersID, classificationID, properties, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);
    let tx = {
        msg: [
            {
                type: "/xprt/identities/issue/message",
                value: {
                    from: wallet.address,
                    fromID: helpers.NewID(fromID),
                    maintainersID: helpers.NewID(maintainersID),
                    classificationID: helpers.NewID(classificationID),
                    properties: helpers.NewProperties(properties.split(',')),
                    to: toAddress
                }
            }
        ],
        fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
        memo: memo
    };
    return broadcast.broadcastTx(wallet, tx, mode);
}

module.exports = {
    issue
};