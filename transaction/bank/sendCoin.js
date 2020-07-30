const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");

function sendCoin(mnemonic, toAddress, sendAmount, sendToken, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);
    let tx = {
        msg: [
            {
                type: "cosmos-sdk/MsgSend",
                value: {
                    from_address: wallet.address,
                    to_address: toAddress,
                    amount: [
                        {
                            amount: String(sendAmount),
                            denom: sendToken
                        }
                    ]
                }
            }
        ],
        fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
        memo: memo
    };
    return broadcast.broadcastTx(wallet, tx, mode);
}

module.exports = {
    sendCoin
};