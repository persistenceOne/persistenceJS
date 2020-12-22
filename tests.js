const keys = require("./utilities/keys");
const helper = require("./helpers");
const config = require("./config.json");

let url = config.testURL

const assetDefine = new (require("./transaction/assets/define"))(url);
const assetMint = new (require("./transaction/assets/mint"))(url);
const assetMutate = new (require("./transaction/assets/mutate"))(url);
const assetBurn = new (require("./transaction/assets/burn"))(url);
const assetQuery = new (require("./transaction/assets/query"))(url);

const sendCoin = new (require("./transaction/bank/sendCoin"))(url);

const clsQuery = new (require("./transaction/classification/query"))(url);

const identityNub = new (require("./transaction/identity/nub"))(url);
const identityDefine = new (require("./transaction/identity/define"))(url);
const identityIssue = new (require("./transaction/identity/issue"))(url);
const identityQuery = new (require("./transaction/identity/query"))(url);
const identityProvision = new (require("./transaction/identity/provision"))(url);
const identityUnprovision = new (require("./transaction/identity/unprovision"))(url);

const maintainerDeputize = new (require("./transaction/maintainers/deputize"))(url);

const metaReveal = new (require("./transaction/meta/reveal"))(url);

const orderDefine = new (require("./transaction/orders/define"))(url);
const orderMake = new (require("./transaction/orders/make"))(url);
const orderTake = new (require("./transaction/orders/take"))(url);
const orderCancel = new (require("./transaction/orders/cancel"))(url);
const orderQuery = new (require("./transaction/orders/query"))(url);

const splitsSend = new (require("./transaction/splits/send"))(url);
const splitsWrap = new (require("./transaction/splits/wrap"))(url);
const splitsUnwrap = new (require("./transaction/splits/unwrap"))(url);

let mnemonic = "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";

async function test(){
    console.log("Creating random wallet...");
    let randomWallet = keys.createRandomWallet();
    console.log(randomWallet);

    let userGivenMnemonic = 'wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please';
    console.log("Creating wallet from mnemonic...");
    let wallet = keys.createWallet(userGivenMnemonic);
    console.log(wallet);

    let createdStore = keys.createStore(wallet.mnemonic, "123123123", wallet.address);
    let keyRes = ""
    if (createdStore.error) {
        console.log(createdStore.error);
    } else {
        console.log("Keystore created with name " + wallet.address + ".json")
        keyRes = createdStore.Response
    }

    if (createdStore.error) {
        console.log("Unable to store keys. Reason: " + createdStore.error);
    }

    console.log("Reading keystore...");
    let mnemonicRestored = keys.decryptStore(keyRes, "123123123")
    console.log(mnemonicRestored);

    let result = await nub(wallet.address, config.chain_id, mnemonic, config.nubID, 25, "stake", 200000, "block")
    let check = await helper.checkRawLog(result.raw_log)
    if(check){
        console.log("\n\n**TX HASH for nub** :" + result.txhash);
    }else{
        console.log("\n\n**TX failed for nub** :" + result.raw_log);
    }

    if (result) {
        let res = await sendCoin.sendCoin(config.chain_id, mnemonic, wallet.address, "stake", "1000000", 25, "stake", 200000, "block")
        let check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Send Coin** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Send Coin** :" + res.raw_log);
        }

        let results = await identityQuery.queryIdentity()
        let listResponse = await helper.FindInResponse("identities", results, config.nubID)
        let clsID = listResponse.classificationID + '|' + listResponse.hashID

        res = await identityDefine.define(wallet.address, config.chain_id, mnemonic, clsID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for define identity 1** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for define identity 1** :" + res.raw_log);
        }

        results = await clsQuery.queryClassification()
        listResponse = await helper.FindInResponse("classifications", results, "immutableMetaTraits")
        let classificationID = listResponse.chainID + '.' + listResponse.hashID

        res = await identityIssue.issue(wallet.address, config.chain_id, mnemonic, config.testAccountAddress, clsID, classificationID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for issue identity 1** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for issue identity 1** :" + res.raw_log);
        }

        res = await identityDefine.define(wallet.address, config.chain_id, mnemonic, clsID, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for define identity 2** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for define identity 2** :" + res.raw_log);
        }

        results = await clsQuery.queryClassification()
        listResponse = await helper.FindInResponse("classifications", results, "immutableMetaTraits2")
        let classificationID1 = listResponse.chainID + '.' + listResponse.hashID

        res = await identityIssue.issue(wallet.address, config.chain_id, mnemonic, config.testAccountAddress, clsID, classificationID1, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for issue identity 2** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for issue identity 2** :" + res.raw_log);
        }

        results = await identityQuery.queryIdentity()
        listResponse = await helper.FindInResponse("identities", results, "immutableMetaTraits")
        let identityID1 = listResponse.classificationID + '|' + listResponse.hashID

        results = await identityQuery.queryIdentity()
        listResponse = await helper.FindInResponse("identities", results, "immutableMetaTraits2")
        let identityID2 = listResponse.classificationID + '|' + listResponse.hashID

        res = await identityProvision.provision(wallet.address, config.chain_id, mnemonic, identityID1, randomWallet.address, 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Provision** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Provision1** :" + res.raw_log);
        }

        res = await identityUnprovision.unprovision(wallet.address, config.chain_id, mnemonic, identityID1, randomWallet.address, 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Unprovision** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Unprovision1** :" + res.raw_log);
        }

        res = await assetDefine.define(wallet.address, config.chain_id, mnemonic, identityID1, "ASSET1:S|num1,burn:H|1", "ASSET2:S|", "ASSET3:S|num3", "ASSET4:S|num4", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for define assets** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for define assets** :" + res.raw_log);
        }

        results = await clsQuery.queryClassification()
        listResponse = await helper.FindInResponse("classifications", results, "ASSET4")
        let assetClsID = listResponse.chainID + '.' + listResponse.hashID

        res = await assetMint.mint(wallet.address, config.chain_id, mnemonic, identityID1, identityID1, assetClsID, "ASSET1:S|num1,burn:H|1", "ASSET2:S|num2", "ASSET3:S|num3", "ASSET4:S|num4",25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for mint assets** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for mint assets** :" + res.raw_log);
        }

        results = await assetQuery.queryAsset()
        listResponse = await helper.FindInResponse("assets", results, "ASSET4")
        let assetID = listResponse.classificationID + '|' + listResponse.hashID

        res = await assetMutate.mutate(wallet.address, config.chain_id, mnemonic, identityID1, assetID, "ASSET1:S|", "ASSET3:S|num3",25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for mutate assets** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for mutate assets** :" + res.raw_log);
        }

        res = await assetDefine.define(wallet.address, config.chain_id, mnemonic, identityID1, "ASSET5:S|num1,burn:H|1", "ASSET6:S|", "ASSET7:S|num3", "ASSET8:S|num4", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for define assets 1** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for define assets 1** :" + res.raw_log);
        }

        results = await clsQuery.queryClassification()
        listResponse = await helper.FindInResponse("classifications", results, "ASSET8")
        let assetClsID1 = listResponse.chainID + '.' + listResponse.hashID

        res = await assetMint.mint(wallet.address, config.chain_id, mnemonic, identityID1, identityID1, assetClsID1, "ASSET5:S|num1,burn:H|1", "ASSET6:S|num2", "ASSET7:S|num3", "ASSET8:S|num4",25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for mint assets 2 ** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for mint assets 2** :" + res.raw_log);
        }

        results = await assetQuery.queryAsset()
        listResponse = await helper.FindInResponse("assets", results, "ASSET8")
        let assetID1 = listResponse.classificationID + '|' + listResponse.hashID

        res = await splitsSend.send(wallet.address, config.chain_id ,mnemonic, identityID1, identityID2, assetID1, "0.000000000000000001", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Splits Send** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Splits Send** :" + res.raw_log);
        }

        res = await maintainerDeputize.deputize(wallet.address, config.chain_id, mnemonic, identityID1, assetClsID1, identityID2, "ASSET5:S|num1,burn:H|1,ASSET7:S|num3", true, true, true, 25, "stake",200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for maintainer deputize** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for maintainer deputize** :" + res.raw_log);
        }

        res = await assetMutate.mutate(wallet.address, config.chain_id, mnemonic, identityID2, assetID1, "ASSET5:S|,burn:H|1", "ASSET7:S|num3",25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for mutate assets 2** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for mutate assets 2** :" + res.raw_log);
        }

        res = await metaReveal.reveal(wallet.address, config.chain_id, mnemonic, "H|1", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for meta reveal** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for meta reveal** :" + res.raw_log);
        }

        res = await splitsWrap.wrap(wallet.address, config.chain_id, mnemonic, identityID1, "100000stake", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Wrap** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Wrap** :" + res.raw_log);
        }

        res = await splitsUnwrap.unwrap(wallet.address, config.chain_id, mnemonic, identityID1, "stake", "100", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Unwrap** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Unwrap** :" + res.raw_log);
        }

        res = await splitsSend.send(wallet.address, config.chain_id ,mnemonic, identityID1, identityID2, "stake", "499", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Splits Send** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Splits Send** :" + res.raw_log);
        }

        let mutableMetaTraits = "exchangeRate:D|1,makerOwnableSplit:D|0.000000000000000001,expiry:H|1000000,takerID:I|ID"
        res = await orderDefine.define(wallet.address, config.chain_id, mnemonic, identityID2, "description:S|", "Which Gift:S|Christmas Gift,What Gift:S|", mutableMetaTraits, "Gift:S|Exchange,AmazonOrderID:S|", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for define Order** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for define Order** :" + res.raw_log);
        }

        results = await clsQuery.queryClassification()
        listResponse = await helper.FindInResponse("classifications", results, "Gift")
        let orderCls = listResponse.chainID + '.' + listResponse.hashID

        res = await orderMake.make(wallet.address, config.chain_id, mnemonic, identityID2, orderCls, "stake", "stake", "100000", "0.000000000000000001", "description:S|awesomeChocolates", "Which Gift:S|Christmas Gift,What Gift:S|Chocolates", "exchangeRate:D|1", "Gift:S|Exchange,AmazonOrderID:S|1234", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Make Order ** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Make Order ** :" + res.raw_log);
        }

        results = await orderQuery.queryOrder()
        listResponse = await helper.FindInResponse("orders", results, "Gift")
        let orderID = listResponse.classificationID + '*' + listResponse.makerOwnableID + '*' + listResponse.takerOwnableID + '*' + listResponse.makerID + '*' + listResponse.hashID

        res = await orderCancel.cancel(wallet.address, config.chain_id, mnemonic, identityID2, orderID, 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Cancel Order ** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Cancel Order ** :" + res.raw_log);
        }

        res = await orderMake.make(wallet.address, config.chain_id, mnemonic, identityID2, orderCls, "stake", "stake", "100000", "0.000000000000000001", "description:S|awesomeChocolates", "Which Gift:S|Christmas Gift,What Gift:S|Chocolates", "exchangeRate:D|1", "Gift:S|Exchange,AmazonOrderID:S|1234", 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Make Order ** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Make Order ** :" + res.raw_log);
        }

        res = await orderTake.take(wallet.address, config.chain_id, mnemonic, identityID2, "0.000000000000000001", orderID, 25, "stake", 200000, "block")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Take Order ** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Take Order ** :" + res.raw_log);
        }

        res = await assetBurn.burn(wallet.address, config.chain_id, mnemonic, identityID1, assetID, "25", "stake", "200000", "block", "")
        check = await helper.checkRawLog(res.raw_log)
        if(check){
            console.log("\n\n**TX HASH for Asset Burn ** :" + res.txhash);
        }else{
            console.log("\n\n**TX failed for Asset Burn ** :" + res.raw_log);
        }

    } else {
        console.log("ERROR!!");
        console.log("NUB Tx failed!!");
    }
}

test()

async function nub(address, chain_id, mnemonic, nubID, fee, token, gas, mode){
    return new Promise(async function(resolve) {
        let result = await identityNub.nub(address, chain_id, mnemonic, nubID, fee, token, gas, mode)
        resolve(result)
    });
}



