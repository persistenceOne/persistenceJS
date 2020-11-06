const fetch = require('node-fetch').default;
const tmSig = require("@tendermint/sig");
const config = require("../config.json");
const request = require('request');

function broadcastTx(path, wallet, tx, chainID, mode) {
    let returnParams = {
        'rawLog' : '',
        'txhash': ''
    }
    return new Promise((resolve, reject) => {
        getAccount(wallet.address, path).then(account => {
            if (Object.keys(account.result.value).length === 0) {
                reject("Account for " + wallet.address + " not found.");
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
                chain_id: chainID,
                sequence: seq
            };

            let stdTx = tmSig.signTx(tx, signMeta, wallet);

            let broadcastReq = {
                tx: {
                    msg: stdTx.msg,
                    fee: stdTx.fee,
                    signatures: stdTx.signatures,
                    memo: stdTx.memo
                },
                mode: mode
            }

            let options = {
                'method': 'POST',
                'url': path + config.broadcastTx,
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(broadcastReq)
            };
            request(options, function (error, response) {
                let data = JSON.parse(response.body)
                returnParams.rawLog = data.raw_log
                returnParams.txhash = data.txhash
                resolve(returnParams)
            });
        }).catch(error => {
            console.log(error);
            reject("Unable to query account for the address: " + wallet.address);
        });
    });
}

function getAccount(address, path) {
     return fetch(path + "/auth/accounts/" + address)
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
    broadcastTx
};