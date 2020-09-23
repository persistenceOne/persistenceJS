const keys = require("../../utilities/keys");
const helpers = require("../../helpers/index")
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")

function nub(mnemonic, toAddress, fromID, maintainersID, classificationID, properties, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);
    let tx = {
        type: "cosmos-sdk/StdTx",
        baseReq: {
            from: config.testAccountAddress,
            chain_id: "test"
        },
        value:{
            msg: [
                {
                    type: config.nubType,
                    value: {
                        from: wallet.address,
                        nubID: helpers.NewID(config.nubID)
                    }
                }
            ],
            fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
            memo: memo
        }
    };
        return broadcast.broadcastTx(wallet, tx, mode);
}

module.exports = {
    nub
};