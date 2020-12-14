const tmSig = require("@tendermint/sig");
const config = require("../config.json");
const helper = require("../helpers/index");
const request = require('request');

function broadcastTx(path, wallet, tx, chainID, mode) {

    return new Promise((resolve, reject) => {
        helper.getAccount(wallet.address, path).then(account => {
           if(account.hasOwnProperty('error')){
               let data = {}
               data.raw_log = "Account for " + wallet.address + " not found."
               console.log(JSON.stringify(data))
               return reject(data);
            }
            if (Object.keys(account.result.value.address).length === 0) {
                let data = {}
                data.raw_log = "Account for " + wallet.address + " not found."
                console.log(JSON.stringify(data))
                return reject(data);
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
                if (error) {
                    return(error);
                }
                let data = JSON.parse(response.body)
                resolve(data)
            })
        })
    }).catch(error => {
        console.log("Promise Rejected: " + error);
        return(error)
    });
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