import {
    createStore,
    decryptStore,
    createRandomWallet,
    createWallet,
} from "../utilities/keys";
import { checkRawLog, FindInResponse } from "../helpers/helper";
import * as config from "../config.json";
import { nubIdentity } from "../transaction/identity/nub";
import {bank} from "../transaction/bank/sendCoin";
import {defineAsset} from "../transaction/assets/define";
import {cls} from "../transaction/classification/query";
import {defineIdentity} from "../transaction/identity/define";
import {issueIdentity} from "../transaction/identity/issue";
import {queryIdentities} from "../transaction/identity/query";
import {defineOrder} from "../transaction/orders/define";
import {makeOrder} from "../transaction/orders/make";
import {takeOrder} from "../transaction/orders/take";
import {cancelOrder} from "../transaction/orders/cancel";
import {queryOrders} from "../transaction/orders/query";
import {mintAsset} from "../transaction/assets/mint";
import {queryAssets} from "../transaction/assets/query";
import {sendSplits} from "../transaction/splits/send";
import {deputizeMaintainer} from "../transaction/maintainers/deputize";
import {deputizeIdentity} from "../transaction/identity/deputize";

let url = "http://localhost:1317";


const sendCoin = new bank(url);
const clsQuery = new cls(url);
const identityNub = new nubIdentity(url);
const identityDefine = new defineIdentity(url);
const identityIssue = new issueIdentity(url);
const identityQuery = new queryIdentities(url);
const assetDefine = new defineAsset(url);
const assetMint = new mintAsset(url);
const orderDefine = new defineOrder(url);
const orderMake = new makeOrder(url);
const orderTake = new takeOrder(url);
const orderCancel = new cancelOrder(url);
const splitsSend = new sendSplits(url);
const maintainerDeputize = new deputizeMaintainer(url);
const identityDeputize = new deputizeIdentity(url);


const assetQuery = new queryAssets(url);
const orderQuery = new queryOrders(url);



const mnemonic =
    "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";


async function nub_test() {
    console.log("Creating random wallet...");
    let randomWallet = await createRandomWallet("");
    console.log(randomWallet);

    let userGivenMnemonic =
        "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
    console.log("Creating wallet from mnemonic...");
    let wallet = await createWallet(userGivenMnemonic, "");
    console.log(wallet);

    let createdStore = await createStore(wallet.mnemonic, "123123123");
    let keyRes = "";
    if (createdStore.error) {
        console.log(createdStore.error);
    } else {
        console.log("Keystore created with name " + wallet.address + ".json");
        keyRes = createdStore.Response;
    }

    if (createdStore.error) {
        console.log("Unable to store    Reason: " + createdStore.error);
    }

    console.log("Reading keystore...");
    let mnemonicRestored = await decryptStore(keyRes, "123123123");
    console.log(mnemonicRestored);

    let result = await nub(
        wallet.address,
        config.chain_id,
        mnemonic,
        config.nubID,
        25,
        "stake",
        200000,
        "block"
    );
    let _res = JSON.parse(JSON.stringify(result));
    let check = await checkRawLog(_res.rawLog);
    if (check) {
        console.log("\n\n**TX HASH for nub** :" + _res.transactionHash);
    } else {
        console.log("\n\n**TX failed for nub** :" + _res.rawLog);
    }

    if (result) {
        let res = await sendCoin.sendCoin(
            wallet.address,
            config.chain_id,
            mnemonic,
            "stake",
            "1000000",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        let check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Send Coin** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Send Coin** :" + res.rawLog);
        }

        let results = await identityQuery.queryIdentity();
        let listResponse = await FindInResponse(
            "identities",
            results,
            config.nubID
        );
        let  nubId = listResponse.classificationID + "|" + listResponse.hashID;

        res = await identityDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "ASSET4:S|num4",
            "ASSET2:S|num2",
            "ASSET3:S|num3",
            "ASSET1:S|num1,burn:H|1",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define identity ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define identity ** :" + res.rawLog);
        }

        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse(
            "classifications",
            results,
            "ASSET4"
        );
        let classificationID1 = listResponse.chainID + "." + listResponse.hashID;

        res = await identityIssue.issue(
            wallet.address,
            config.chain_id,
            mnemonic,
            config.testAccountAddress,
            nubId,
            classificationID1,
            "ASSET4:S|num4",
            "ASSET2:S|num2",
            "ASSET3:S|num3",
            "ASSET1:S|num1,burn:H|1",
            25,
            "stake",
            200000,
            "block",
            ""
        );


        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for issue identity 2** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for issue identity 2** :" + res.rawLog);
        }

        results = await identityQuery.queryIdentity();
        listResponse = await FindInResponse(
            "identities",
            results,
            "ASSET4"
        );
        let identityID1 = listResponse.classificationID + "|" + listResponse.hashID;

        res = await identityDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "ASSET42:S|num42",
            "ASSET22:S|num22",
            "ASSET32:S|num32",
            "ASSET12:S|num1,burn:H|1",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define identity 2** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define identity 2** :" + res.rawLog);
        }

        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse(
            "classifications",
            results,
            "ASSET42"
        );
        let classificationID2 = listResponse.chainID + "." + listResponse.hashID;

        res = await identityIssue.issue(
            wallet.address,
            config.chain_id,
            mnemonic,
            config.testAccountAddress,
            nubId,
            classificationID2,
            "ASSET42:S|num42",
            "ASSET22:S|num22",
            "ASSET32:S|num32",
            "ASSET12:S|num1,burn:H|1",
            25,
            "stake",
            200000,
            "block",
            ""
        );


        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for issue identity 2** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for issue identity 2** :" + res.rawLog);
        }

        results = await identityQuery.queryIdentity();
        listResponse = await FindInResponse(
            "identities",
            results,
            "ASSET42"
        );
        let identityID2 = listResponse.classificationID + "|" + listResponse.hashID;

        res = await assetDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "ASSET33:S|num13",
            "ASSET32:S|num12",
            "ASSET31:S|num11",
            "ASSET30:S|num10,burn:H|10",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets 33** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define assets 33** :" + res.rawLog);
        }

        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse("classifications", results, "ASSET33");
        let assetClsID3 = listResponse.chainID + "." + listResponse.hashID;

        res = await assetMint.mint(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            nubId,
            assetClsID3,
            "ASSET33:S|num13",
            "ASSET32:S|num12",
            "ASSET31:S|num11",
            "ASSET30:S|num10,burn:H|10",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets 33** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mint assets 33** :" + res.rawLog);
        }

        results = await assetQuery.queryAsset();
        listResponse = await FindInResponse("assets", results, "ASSET33");
        let assetID3 = listResponse.classificationID + "|" + listResponse.hashID;



        // res = await maintainerDeputize.deputize(
        //     wallet.address,
        //     config.chain_id,
        //     mnemonic,
        //     nubId,
        //     identityID1,
        //     assetClsID3,
        //     "ASSET5:S|num1,burn:H|1,ASSET8:S|num4",
        //     false,
        //     false,
        //     false,
        //     25,
        //     "stake",
        //     200000,
        //     "block",
        //     ""
        // );
        // check = await checkRawLog(res.rawLog);
        // if (check) {
        //     console.log("\n\n**TX HASH for maintainer deputize** :" + res.transactionHash);
        // } else {
        //     console.log("\n\n**TX failed for maintainer deputize** :" + res.rawLog);
        // }

        // res = await identityDeputize.deputize(
        //     wallet.address,
        //     config.chain_id,
        //     mnemonic,
        //     nubId,
        //     identityID2,
        //     assetClsID3,
        //     "ASSET33:S|num13",
        //     true,
        //     true,
        //     true,
        //     25,
        //     "stake",
        //     200000,
        //     "block",
        //     ""
        // );
        // check = await checkRawLog(res.rawLog);
        // if (check) {
        //     console.log("\n\n**TX HASH for Deputize** :" + res.transactionHash);
        // } else {
        //     console.log("\n\n**TX failed for Deputize** :" + res.rawLog);
        // }

        res = await splitsSend.send(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            identityID2,
            assetID3,
            "0.000000000000000001",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Splits Send** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Splits Send** :" + res.rawLog);
        }


        res = await orderDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "Gift:S|Exchange,AmazonOrderID:S|",
            "Which Gift:S|Christmas Gift,What Gift:S|Chocolates",
            "expiry:H|,makerOwnableSplit:D|",
            "description:S|awesomeChocolates",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define Order** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define Order** :" + res.rawLog);
        }

        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse("classifications", results, "Gift");
        let orderCls = listResponse.chainID + "." + listResponse.hashID;

        res = await orderMake.make(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            orderCls,
            "stake",
            assetID3,
            "100000",
            "0.000000000000000001",
            "0.000000000000000001",
            "Gift:S|Exchange,AmazonOrderID:S|1234",
            "Which Gift:S|Christmas Gift,What Gift:S|Chocolates",
            "",
            "description:S|awesomeChocolates",
            25,
            "stake",
            200000,
            "block",
            ""
        );

        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Make Order ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Make Order ** :" + res.rawLog);
        }

        results = await orderQuery.queryOrder();
        listResponse = await FindInResponse("orders", results, "Gift");
        let orderID =
            listResponse.classificationID +
            "*" +
            listResponse.makerOwnableID +
            "*" +
            listResponse.takerOwnableID +
            "*" +
            listResponse.makerID +
            "*" +
            listResponse.hashID;

        res = await orderCancel.cancel(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            orderID,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Cancel Order ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Cancel Order ** :" + res.rawLog);
        }


        res = await orderTake.take(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "0.000000000000000001",
            orderID,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Take Order ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Take Order ** :" + res.rawLog);
        }
    }
}

nub_test();

async function nub(address: string, chain_id: string, mnemonic: string, nubID: string, fee: number, token: string, gas: number, mode: string) {
    return new Promise(async function (resolve) {
        let result = await identityNub.nub(
            address,
            chain_id,
            mnemonic,
            nubID,
            fee,
            token,
            gas,
            mode,
            ""
        );
        resolve(result);
    });
}