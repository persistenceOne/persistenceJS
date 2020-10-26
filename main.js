const keys = require("./utilities/keys");
const bank = require("./transaction/bank/index");
const identity = require("./transaction/identity/index");
const cls = require("./transaction/classification/index");
const assets = require("./transaction/assets/index");
const meta = require("./transaction/meta/index");
const splits = require("./transaction/splits/index");
const orders = require("./transaction/orders/index");
const config = require("./config.json");

let mnemonic = "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
let toAddress = "cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c";

async function test(){
    console.log("Creating random wallet...");
    let randomWallet = keys.createRandomWallet();
    console.log(randomWallet);

    let userGivenMnemonic = 'wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please';
    console.log("Creating wallet from mnemonic...");
    let wallet = keys.createWallet(userGivenMnemonic);
    console.log(wallet);

    console.log("Creating keystore...");

    let createdStore = keys.createStore(wallet.mnemonic, "123123123", wallet.address);
    if (createdStore.error) {
        console.log(createdStore.error);
    } else {
        console.log("Keystore created with name " + wallet.address + ".json")
    }

    if (createdStore.error) {
        console.log("Unable to store keys. Reason: " + created.error);
    }

    console.log("Reading keystore...");
    let mnemonicRestored = keys.decryptStore("cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c.json", "123123123")
    console.log(mnemonicRestored);

    let result = await nub(wallet.address, config.chain_id, mnemonic, toAddress, config.nubID, 25, "stake", 200000, "block")
    console.log("**TX HASH for nub**:" + result);

    if (result) {

        let res = await bank.sendCoin(config.chain_id, mnemonic, wallet.address, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Send Coin **: " + res);

        let results = await identity.queryIdentity(config.nubID)
        let clsID = results.clasificationID + '|' + results.hashID

        res = await identity.define(wallet.address, config.chain_id, mnemonic, clsID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define identity 1 **: " + res);

        results = await cls.queryCls("immutableMetaTraits")
        let classificationID = results.chainID + '.' + results.hashID

        res = await identity.issue(wallet.address, config.chain_id, mnemonic, config.testAccountAddress, clsID, classificationID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for issue identity 1 **: " + res);

        res = await identity.define(wallet.address, config.chain_id, mnemonic, clsID, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define identity 2 **:" + res);

        results = await cls.queryCls("immutableMetaTraits2")
        let classificationID1 = results.chainID + '.' + results.hashID

        res = await identity.issue(wallet.address, config.chain_id, mnemonic, config.testAccountAddress, clsID, classificationID1, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for issue identity 2 **:" + res);

        results = await identity.queryIdentity("immutableMetaTraits")
        let identityID1 = results.clasificationID + '|' + results.hashID

        results = await identity.queryIdentity("immutableMetaTraits2")
        let identityID2 = results.clasificationID + '|' + results.hashID

        res = await identity.provision(wallet.address, config.chain_id, mnemonic, identityID1, randomWallet.address, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Provision **: " + res);

        res = await identity.unprovision(wallet.address, config.chain_id, mnemonic, identityID1, randomWallet.address, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Unprovision **: " + res);

        res = await assets.define(wallet.address, config.chain_id, mnemonic, identityID1, "ASSET1:S|num1,burn:H|1", "ASSET2:S|", "ASSET3:S|num3", "ASSET4:S|num4", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define assets**:"  + res);

        results = await cls.queryCls("ASSET4")
        let assetClsID = results.chainID + '.' + results.hashID

        res = await assets.mint(wallet.address, config.chain_id, mnemonic, identityID1, identityID1, assetClsID, "ASSET1:S|num1,burn:H|1", "ASSET2:S|num2", "ASSET3:S|num3", "ASSET4:S|num4",25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for mint asset**: " + res);

        results = await assets.query("ASSET4")
        let assetID = results.clasificationID + '|' + results.hashID

        res = await assets.mutate(wallet.address, config.chain_id, mnemonic, identityID1, assetID, "ASSET1:S|", "ASSET3:S|num3",25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for mutate asset**: " + res);

        res = await meta.reveal(wallet.address, config.chain_id, mnemonic, "H|1", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for meta reveal**:" + res);

        res = await splits.wrap(wallet.address, config.chain_id, mnemonic, identityID1, "100000stake", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Wrap**: " + res);

        res = await splits.unwrap(wallet.address, config.chain_id, mnemonic, identityID1, "stake", "100", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Unwrap**: " + res);

        res = await splits.send(wallet.address, config.chain_id ,mnemonic, identityID1, identityID2, "stake", "499", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Splits Send**:" + res);

        let mutableMetaTraits = "exchangeRate:D|1,makerOwnableSplit:D|0.000000000000000001,expiry:H|1000000,takerID:I|ID"
        res = await orders.define(wallet.address, config.chain_id, mnemonic, identityID2, "description:S|", "Which Gift:S|Christmas Gift,What Gift:S|", mutableMetaTraits, "Gift:S|Exchange,AmazonOrderID:S|", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define Order **: " + res);

        results = await cls.queryCls("Gift")
        let orderCls = results.chainID + '.' + results.hashID

        res = await orders.make(wallet.address, config.chain_id, mnemonic, identityID2, orderCls, "stake", "stake", "100000", "0.000000000000000001", "description:S|awesomeChocolates", "Which Gift:S|Christmas Gift,What Gift:S|Chocolates", "exchangeRate:D|1", "Gift:S|Exchange,AmazonOrderID:S|1234", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Make Order **: " + res);

        results = await orders.query("Gift")
        let orderID = results.clasificationID + '*' + results.makerownableid + '*' + results.takerownableid + '*' + results.makerID + '*' + results.hashID

        res = await orders.cancel(wallet.address, config.chain_id, mnemonic, identityID2, orderID, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Cancel Order **: " + res);

        res = await orders.make(wallet.address, config.chain_id, mnemonic, identityID2, orderCls, "stake", "stake", "100000", "0.000000000000000001", "description:S|awesomeChocolates", "Which Gift:S|Christmas Gift,What Gift:S|Chocolates", "exchangeRate:D|1", "Gift:S|Exchange,AmazonOrderID:S|1234", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Make Order **: " + res);

        res = await orders.take(wallet.address, config.chain_id, mnemonic, identityID2, "0.000000000000000001", orderID, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Take Order **: " + res);

        res = await assets.burn(wallet.address, config.chain_id, mnemonic, identityID1, assetID, "25", "stake", "200000", "block", "")
        console.log("\n\n**TX HASH for Asset Burn**: " + res);

    } else {
        console.log("ERROR!!");
        console.log("NUB Tx failed!!");
    }
}

test()

async function nub(address, chain_id, mnemonic, toAddress, nubID, fee, token, gas, mode){
    return new Promise(async function(resolve, reject) {
        let result = await identity.nub(address, chain_id, mnemonic, toAddress, nubID, fee, token, gas, mode)
        resolve(result)
    });
}



