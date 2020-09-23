const fetch = require('node-fetch').default;
const tmSig = require("@tendermint/sig");
const tmBelt = require('@tendermint/belt');
const tmAmino = require("@tendermint/amino-js");
const config = require("../config.json");


function broadcastTx(wallet, tx, mode) {
    return new Promise((resolve, reject) => {
        getAccount(wallet.address).then(account => {
            if (Object.keys(account.result.value).length === 0) {
                reject("Account for "+ wallet.address + " not found.");
                return;
            }
            let accountNum = account.result.value.account_number;
            if (accountNum === undefined) {
                accountNum = String(0);
            }
            let seq = account.result.value.sequence;
            console.log("\n\n seq \n\n" + JSON.stringify(seq))
            if (seq === undefined) {
                seq = String(0);
            }
            const signMeta = {
                account_number: accountNum,
                chain_id: config.chainID,
                sequence: seq
            };
            console.log("\n\n before tx \n\n" + JSON.stringify(tx))

            let stdTx = tmSig.signTx(tx, signMeta, wallet);

            console.log("\n\n after sign \n\n" + JSON.stringify(stdTx))

            let broadcastReq = {
                tx: {
                    msg: stdTx.value.msg,
                    fee: stdTx.value.fee,
                    memo:"",
                    signatures:[
                        {
                            "pub_key": stdTx.signatures[0].pub_key,
                            "signature": stdTx.signatures[0].signature
                        }
                    ]
                },
                mode: mode
            }
            console.log("\n\n broadcastReq \n\n" + JSON.stringify(broadcastReq))
            fetch(config.lcdURL + "/txs", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(broadcastReq)
            }).then(response => response.json())
                .then(response => getTxResponse(response)
                    .then(txHash => resolve(txHash))
                    .catch(err => reject(err)));
            }).catch(error => {
                console.log(error);
                reject("Unable to query account for the address: " + wallet.address);
            });
    });
}

function broadcastCoinTx(wallet, tx, mode) {
    return new Promise((resolve, reject) => {
        getAccount(wallet.address).then(account => {
            if (Object.keys(account.result.value).length === 0) {
                reject("Account for "+ wallet.address + " not found.");
                return;
            }
            let accountNum = account.result.value.account_number;
            if (accountNum === undefined) {
                accountNum = String(0);
            }
            let seq = account.result.value.sequence;
            if (seq === undefined) {
                seq = String(0);
            }
            const signMeta = {
                account_number: accountNum,
                chain_id: config.chainID,
                sequence: seq
            };
            let stdTx = tmSig.signTx(tx, signMeta, wallet);
            let publicKey = tmAmino.marshalPubKey(stdTx.signatures[0].pub_key, false);
            stdTx.signatures[0].pub_key = tmBelt.bytesToBase64(publicKey);
            let broadcastReq = {
                tx: stdTx,
                mode: mode
            }
            fetch(config.lcdURL + "/txs", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(broadcastReq)
            }).then(response => response.json())
                .then(response => getTxResponse(response)
                    .then(txHash => resolve(txHash))
                    .catch(err => reject(err)));
        }).catch(error => {
            console.log(error);
            reject("Unable to query account for the address: " + wallet.address);
        });
    });
}

function getAccount(address) {
    return fetch(config.lcdURL + "/auth/accounts/" + address)
        .then(response => response.json())
        .catch(err => console.log(JSON.stringify(err)))
}

function getTxResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.code) {
            reject(JSON.stringify(response.raw_log).message);
        } else if (response.error) {
            reject(response.error);
        } else {
            if (response.txhash) {
                resolve(response.txhash);
            } else {
                console.log(JSON.stringify(response));
                reject("Tx failed due to unknown reasons");   
            }
        }
    });
}


module.exports = {
    broadcastTx,
    broadcastCoinTx
};