import {
    createStore,
    decryptStore,
    createRandomWallet,
    createWallet,
} from "../utilities/keys";
import { checkRawLog, FindInResponse } from "../helpers/helper";
import * as config from "../config.json";
import { nubIdentity } from "../transaction/identity/nub";
import {defineIdentity} from "../transaction/identity/define";
import {issueIdentity} from "../transaction/identity/issue";
import {queryIdentities} from "../transaction/identity/query";
import {provisionIdentity} from "../transaction/identity/provision";
import {unprovisionIdentity} from "../transaction/identity/unprovision";
import {cls} from "../transaction/classification/query";
import {mutateIdentity} from "../transaction/identity/mutate";
import {deputizeIdentity} from "../transaction/identity/deputize";
import {queryAssets} from "../transaction/assets/query";
import {sendSplits} from "../transaction/splits/send";
import {defineAsset} from "../transaction/assets/define";
import {mintAsset} from "../transaction/assets/mint";
import {bank} from "../transaction/bank/sendCoin";
import {quashIdentity} from "../transaction/identity/quash";
import {revokeIdentity} from "../transaction/identity/revoke";

let url = "http://localhost:1317";
const identityNub = new nubIdentity(url);
const clsQuery = new cls(url);
const identityDefine = new defineIdentity(url);
const identityIssue = new issueIdentity(url);
const identityQuery = new queryIdentities(url);
const identityProvision = new provisionIdentity(url);
const identityUnprovision = new unprovisionIdentity(url);
const identityMutate = new mutateIdentity(url);
const identityDeputize = new deputizeIdentity(url);
const identityQuash = new quashIdentity(url);
const identityRevoke = new revokeIdentity(url);

const sendCoin = new bank(url);





const mnemonic =
    "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";


async function identity_test() {
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
            "ASSET53:S|num23,expiry:H|3,authentication:AL|cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c",
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
            "ASSET53:S|num23,expiry:H|3,authentication:AL|cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c",
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

        res = await identityDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            "ASSET42:S|num42,expiry:H|3,authentication:AL|cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c",
            "ASSET22:S|num22",
            "ASSET32:S|num32",
            "ASSET12:S|num1",
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
            identityID1,
            classificationID2,
            "ASSET42:S|num42,expiry:H|3,authentication:AL|cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c",
            "ASSET22:S|num22",
            "ASSET32:S|num32",
            "ASSET12:S|num1",
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



        res = await identityProvision.provision(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            randomWallet.address,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Provision** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Provision1** :" + res.rawLog);
        }

        res = await identityUnprovision.unprovision(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            randomWallet.address,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Unprovision** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for Unprovision1** :" + res.rawLog);
        }

        res = await identityDeputize.deputize(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            identityID2,
            classificationID2,
            "ASSET32:S|num32,ASSET12:S|num1",
            true,
            true,
            true,
            25,
            "stake",
            200000,
            "block",
            "",
        );


        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for deputize identity ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for deputize identity ** :" + res.rawLog);
        }

        res = await identityRevoke.revoke(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            identityID2,
            classificationID2,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for revoke** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for revoke** :" + res.rawLog);
        }

        res = await identityMutate.mutate(
            wallet.address,
            config.chain_id,
            mnemonic,
            nubId,
            identityID1,
            "ASSET51:S|num21",
            "ASSET50:S|num20",
            25,
            "stake",
            200000,
            "block",
            "",
        );


        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mutate identity ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for mutate identity ** :" + res.rawLog);
        }

        res = await identityQuash.quash(
            wallet.address,
            config.chain_id,
            mnemonic,
            identityID1,
            identityID2,
            25,
            "stake",
            200000,
            "block",
            ""
        );
        check = await checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for quash** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for quash** :" + res.rawLog);
        }

    }
}

identity_test();

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