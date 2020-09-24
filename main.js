const keys = require("./utilities/keys");
const bank = require("./transaction/bank/index");
const identity = require("./transaction/identity/index");
const cls = require("./transaction/classification/index");
const assets = require("./transaction/assets/index");
const meta = require("./transaction/meta/index");
const splits = require("./transaction/splits/index");
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

    if(result){
        var results = await identity.queryIdentity(config.nubID)
        var clsID = results.clasificationID + '|' + results.hashID

        var res = await identity.define(mnemonic, clsID, "mutableTraits111:S|identity11543","immutableTraits:S|identity22662","mutableMetaTraits:S|identity34167","immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        console.log("**TX HASH for define identity 1 **: " + res);

        var results = await cls.queryCls("immutableMetaTraits")
        var classificationID = results.chainID + '.' + results.hashID

        var res = await identity.issue(mnemonic, config.testAccountAddress, clsID, classificationID, "mutableTraits111:S|identity11543","immutableTraits:S|identity22662","mutableMetaTraits:S|identity34167","immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        console.log("**TX HASH for issue identity 1 **: " + res);

        var res = await identity.define(mnemonic, clsID, "mutableTraits2:S|identity11543","immutableTraits2:S|identity22662","mutableMetaTraits2:S|identity34167","immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        console.log("**TX HASH for define identity 2 **: " + res);

        var results = await cls.queryCls("immutableMetaTraits2")
        var classificationID1 = results.chainID + '.' + results.hashID

        var res = await identity.issue(mnemonic, config.testAccountAddress, clsID, classificationID1, "mutableTraits2:S|identity11543","immutableTraits2:S|identity22662","mutableMetaTraits2:S|identity34167","immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        console.log("**TX HASH for issue identity 2 **: " + res);

        var res = await assets.define(mnemonic, clsID, 25, "stake", 200000, "block")
        console.log("**TX HASH for define assets**: " + res);

        results = await cls.queryCls("ASSET4")
        classificationID = results.chainID + '.' + results.hashID

        var res = await assets.mint(mnemonic, config.testAccountAddress, clsID, classificationID, 25, "stake", 200000, "block")
        console.log("**TX HASH for mint asset**: " + res);

        results = await assets.query("ASSET4")
        var assetID = results.clasificationID + '|' + results.hashID

        var res = await assets.mutate(mnemonic, clsID, assetID, 25, "stake", 200000, "block")
        console.log("**TX HASH for mutate asset**: " + res);

        var res = await meta.reveal(mnemonic, "H|1", 25, "stake", 200000, "block")
        console.log("**TX HASH for meta reveal**: " + res);

        var res = await splits.unwrap(mnemonic, classificationID, assetID, config.splitval, 25, "stake", 200000, "block")
        console.log("**TX HASH for Unwrap**: " + res);

        var res = await splits.wrap(mnemonic, classificationID, config.coins, 25, "stake", 200000, "block")
        console.log("**TX HASH for Wrap**: " + res);

        var res = await splits.send(mnemonic, classificationID, classificationID1,  assetID, config.splitval, 25, "stake", 200000, "block")
        console.log("**TX HASH for Splits Send**: " + res);

    }else{
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



