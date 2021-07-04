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

let url = "http://localhost:1317";
const identityNub = new nubIdentity(url);
const clsQuery = new cls(url);
const identityDefine = new defineIdentity(url);
const identityIssue = new issueIdentity(url);
const identityQuery = new queryIdentities(url);
const identityProvision = new provisionIdentity(url);
const identityUnprovision = new unprovisionIdentity(url);


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
        let results = await identityQuery.queryIdentity();
        let listResponse = await FindInResponse(
            "identities",
            results,
            config.nubID
        );
        let  clsID = listResponse.classificationID + "|" + listResponse.hashID;

       let res = await identityDefine.define(
            wallet.address,
            config.chain_id,
            mnemonic,
            clsID,
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
            clsID,
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
            console.log("\n\n**TX HASH for issue identity ** :" + res.transactionHash);
        } else {
            console.log("\n\n**TX failed for issue identity ** :" + res.rawLog);
        }

        results = await identityQuery.queryIdentity();
        listResponse = await FindInResponse(
            "identities",
            results,
            "ASSET4"
        );
        let identityID1 = listResponse.classificationID + "|" + listResponse.hashID;

        results = await identityQuery.queryIdentity();
        listResponse = await FindInResponse(
            "identities",
            results,
            "ASSET4"
        );

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