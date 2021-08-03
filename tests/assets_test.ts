import {
    createStore,
    decryptStore,
    createRandomWallet,
    createWallet,
} from "../utilities/keys";
import { checkRawLog, FindInResponse } from "../helpers/helper";
import * as config from "../config.json";
import { nubIdentity } from "../transaction/identity/nub";
import {defineAsset} from "../transaction/assets/define";
import {mintAsset} from "../transaction/assets/mint";
import {mutateAsset} from "../transaction/assets/mutate";
import {burnAsset} from "../transaction/assets/burn";
import {renumerateAsset} from "../transaction/assets/renumerate";
import {revokeAsset} from "../transaction/assets/revoke";
import {queryAssets} from "../transaction/assets/query";
import {cls} from "../transaction/classification/query";
import {bank} from "../transaction/bank/sendCoin";
import {defineIdentity} from "../transaction/identity/define";
import {issueIdentity} from "../transaction/identity/issue";
import {queryIdentities} from "../transaction/identity/query";
import {deputizeAsset} from "../transaction/assets/deputize";

let url = "http://localhost:1317";
const identityNub = new nubIdentity(url);
const assetDefine = new defineAsset(url);
const assetMint = new mintAsset(url);
const assetMutate = new mutateAsset(url);
const assetBurn = new burnAsset(url);
const assetRenumerate = new renumerateAsset(url);
const assetRevoke = new revokeAsset(url);
const assetDeputize = new deputizeAsset(url);

const assetQuery = new queryAssets(url);
const clsQuery = new cls(url);
const sendCoin = new bank(url);
const identityDefine = new defineIdentity(url);
const identityIssue = new issueIdentity(url);
const identityQuery = new queryIdentities(url);



const mnemonic =
    "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";


async function assets_test() {
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
            wallet.address,
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

        res = await assetDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "ASSET13:S|num13",
            "ASSET12:S|num12",
            "ASSET11:S|num11",
            "ASSET10:S|num10,burn:H|10",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define assets** :" + res.rawLog);
        }

        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse("classifications", results, "ASSET13");
        let assetClsID = listResponse.chainID + "." + listResponse.hashID;

        res = await assetMint.mint(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            nubId,
            assetClsID,
            "ASSET13:S|num13",
            "ASSET12:S|num12",
            "ASSET11:S|num11",
            "ASSET10:S|num10,burn:H|10",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mint assets** :" + res.rawLog);
        }

        results = await assetQuery.queryAsset();
        listResponse = await FindInResponse("assets", results, "ASSET13");
        let assetID = listResponse.classificationID + "|" + listResponse.hashID;

        res = await assetMutate.mutate(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            assetID,
            "ASSET11:S|num11",
            "ASSET10:S|num10,burn:H|10",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mutate assets** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mutate assets** :" + res.rawLog);
        }

        res = await assetDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "ASSET23:S|num23,burn:H|",
            "ASSET22:S|num22",
            "ASSET21:S|num21",
            "ASSET20:S|num20",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets 2** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define assets 2** :" + res.rawLog);
        }

        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse("classifications", results, "ASSET23");
        let assetClsID2 = listResponse.chainID + "." + listResponse.hashID;

        res = await assetMint.mint(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            nubId,
            assetClsID2,
            "ASSET23:S|num23,burn:H|3",
            "ASSET22:S|num22",
            "ASSET21:S|num21",
            "ASSET20:S|num20",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets 2** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mint assets 2** :" + res.rawLog);
        }

        results = await assetQuery.queryAsset();
        listResponse = await FindInResponse("assets", results, "ASSET23");
        let assetID2 = listResponse.classificationID + "|" + listResponse.hashID;


        res = await assetBurn.burn(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            assetID2,
            "25",
            "stake",
            "200000",
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Asset Burn ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Asset Burn ** :" + res.rawLog);
        }


        res = await assetDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            "ASSET53:S|num23,burn:H|,value:D|12",
            "ASSET52:S|num22",
            "ASSET51:S|num21",
            "ASSET50:S|num20",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets 3** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define assets 3** :" + res.rawLog);
        }



        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse("classifications", results, "ASSET53");
        let assetClsID3 = listResponse.chainID + "." + listResponse.hashID;

        res = await assetMint.mint(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            nubId,
            assetClsID3,
            "ASSET53:S|num23,burn:H|3,value:D|12",
            "ASSET52:S|num22",
            "ASSET51:S|num21",
            "ASSET50:S|num20",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets 3** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mint assets 3** :" + res.rawLog);
        }

        results = await assetQuery.queryAsset();
        listResponse = await FindInResponse("assets", results, "ASSET53");
        let assetID3 = listResponse.classificationID + "|" + listResponse.hashID;

         res = await identityDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
         "ASSET53:S|num23,burn:H|3",
         "ASSET52:S|num22",
         "ASSET51:S|num21,authentication:LD|cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c",
         "ASSET50:S|num20",
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
            "ASSET53"
        );
        let classificationID1 = listResponse.chainID + "." + listResponse.hashID;

        res = await identityIssue.issue(
            wallet.address,
            config.chain_id,
            mnemonic,
            config.testAccountAddress,
            nubId,
            classificationID1,
            "ASSET53:S|num23,burn:H|3",
            "ASSET52:S|num22",
            "ASSET51:S|num21",
            "ASSET50:S|num20",
            25,
            "stake",
            200000,
            "block",
            ""
        );


        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for issue identity ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for issue identity ** :" + res.rawLog);
        }

        results = await identityQuery.queryIdentity();
        listResponse = await FindInResponse(
            "identities",
            results,
            "ASSET53"
        );
        let identityID1 = listResponse.classificationID + "|" + listResponse.hashID;

        res = await assetDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            "ASSET60:S|num23,burn:H|",
            "ASSET61:S|num62",
            "ASSET62:S|num61,value:D|12",
            "ASSET63:S|num60",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets 4** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for define assets 4** :" + res.rawLog);
        }



        results = await clsQuery.queryClassification();
        listResponse = await FindInResponse("classifications", results, "ASSET60");
        let assetClsID4 = listResponse.chainID + "." + listResponse.hashID;

        res = await assetMint.mint(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            identityID1,
            assetClsID4,
            "ASSET60:S|num23,burn:H|",
            "ASSET61:S|num62",
            "ASSET62:S|num61,value:D|12",
            "ASSET63:S|num60",
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets 4** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mint assets 4** :" + res.rawLog);
        }

        results = await assetQuery.queryAsset();
        listResponse = await FindInResponse("assets", results, "ASSET60");
        let assetID4 = listResponse.classificationID + "|" + listResponse.hashID;

        res = await assetRenumerate.renumerate(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            assetID4,
            "25",
            "stake",
            "200000",
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Asset Renumerate ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Asset Renumerate ** :" + res.rawLog);
        }

        res = await assetDeputize.deputize(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            identityID1,
            assetClsID3,
            "ASSET51:S|num21,ASSET50:S|num20",
            true,
            true,
            true,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Deputize** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Deputize** :" + res.rawLog);
        }


        res = await assetRevoke.revoke(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            identityID1,
            assetClsID3,
            "25",
            "stake",
            "200000",
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Asset Revoke ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Asset Revoke ** :" + res.rawLog);
        }
    }
}

assets_test();

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