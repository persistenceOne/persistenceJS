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

    let userGivenMnemonic = 'banana sun alone body hybrid praise drift gravity castle task proud six surround twice fuel riot enable deny casual menu elbow beauty repair three';
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
    let mnemonicRestored = keys.decryptStore("cosmos160phc9aajqmllhn442tyehkrwpd8sytr6q9uwc.json", "123123123")
    console.log(mnemonicRestored);

    var result = await nub(mnemonic, toAddress,  25, "stake", 200000, "block")
    console.log("**TX HASH for nub**:" + result);

    if (result) {
        var results = await identity.queryIdentity(config.nubID)
        var clsID = results.clasificationID + '|' + results.hashID

        var res = await identity.define(mnemonic, clsID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define identity 1 **:\n\n " + res);

        var results = await cls.queryCls("immutableMetaTraits")
        var classificationID = results.chainID + '.' + results.hashID

        var res = await identity.issue(mnemonic, config.testAccountAddress, clsID, classificationID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for issue identity 1 **: \n\n" + res);

        var res = await identity.define(mnemonic, clsID, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define identity 2 **: \n\n" + res);

        var results = await cls.queryCls("immutableMetaTraits2")
        var classificationID1 = results.chainID + '.' + results.hashID

        var res = await identity.issue(mnemonic, config.testAccountAddress, clsID, classificationID1, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for issue identity 2 **: \n\n" + res);

        var results = await identity.queryIdentity("immutableMetaTraits")
        var identityID1 = results.clasificationID + '|' + results.hashID

        var results = await identity.queryIdentity("immutableMetaTraits2")
        var identityID2 = results.clasificationID + '|' + results.hashID

        var res = await assets.define(mnemonic, identityID1, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define assets**: \n\n" + res);

        results = await cls.queryCls("ASSET4")
        classificationID = results.chainID + '.' + results.hashID

        var res = await assets.mint(mnemonic, config.testAccountAddress, identityID1, classificationID, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for mint asset**: \n\n" + res);

        results = await assets.query("ASSET4")
        var assetID = results.clasificationID + '|' + results.hashID
        var assetID1 = results.clasificationID + '.' + results.hashID

        var res = await assets.mutate(mnemonic, identityID1, assetID, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for mutate asset**: \n\n" + res);

        var res = await meta.reveal(mnemonic, "H|1", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for meta reveal**: \n\n" + res);

        var res = await splits.send(mnemonic, identityID1, identityID2, assetID, config.splitval, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Splits Send**: \n\n" + res);

        var res = await splits.unwrap(mnemonic, identityID1, assetID, config.splitval, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Unwrap**: \n\n" + res);

        var res = await splits.wrap(mnemonic, identityID1, config.coins, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Wrap**: \n\n" + res);

        var mutableMetaTraits = "ORDER_MUTABLE_META2:S|ORDER_CLASSIFICATION_MUTABLE_META_1,exchangeRate:D|" + config.exchangeRate + ",makerOwnableSplit:D|" + config.makerownablesplit + ",expiry:H|" + config.expiry + ",makerSplit:D|" + config.makerownablesplit + ",takerID:S|"
        var res = await orders.define(mnemonic, identityID1, "ORDER_MUTABLE2:S|ORDER_CLASSIFICATION_MUTABLE_1", "ORDER_IMMUTABLE2:S|ORDER_CLASSIFICATION_IMMUTABLE_1", mutableMetaTraits, "ORDER_IMMUTABLE_META2:S|num4", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for define Order **:\n\n " + res);

        results = await cls.queryCls("ORDER_IMMUTABLE_META2")
        var orderCls = results.chainID + '.' + results.hashID

        var mutableMetaProperties = "ORDER_MUTABLE_META2:S|ORDER_CLASSIFICATION_MUTABLE_META_1,exchangeRate:D|" + config.exchangeRate + ",makerSplit:D|" + config.makerownablesplit
        var res = await orders.make(mnemonic, identityID1, orderCls, assetID, config.makerownableid, config.expiry, config.makerownablesplit, "ORDER_MUTABLE2:S|ORDER_CLASSIFICATION_MUTABLE_1", "ORDER_IMMUTABLE2:S|ORDER_CLASSIFICATION_IMMUTABLE_1", mutableMetaProperties, "ORDER_IMMUTABLE_META2:S|num4", 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for Make Order **: \n\n" + res);

        results = await orders.query("ORDER_IMMUTABLE_META2")
        var orderID = results.clasificationID + '*' + results.makerownableid + '*' + results.takerownableid + '*' + results.makerID + '*' + results.hashID

        var res = await orders.take(mnemonic, identityID1, config.makerownablesplit, orderID, 25, "stake", 200000, "block")
        console.log("\n\n**TX HASH for take Order **:\n\n " + res);


    } else {
        console.log("ERROR!!");
        console.log("NUB Tx failed!!");
    }

}

test()

async function nub(mnemonic, toAddress, fee, token, gas, mode){
    return new Promise(async function(resolve, reject) {
        var result = await identity.nub(mnemonic, toAddress, fee, token, gas, mode)
        resolve(result)
    });
}



