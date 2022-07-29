import { PersistenceClient } from "../src/clients/client"
import { cosmos } from "../src/proto"
import { MsgSubmitProposalEncodeObject, coins } from "@cosmjs/stargate"
import {StargateClient} from "@cosmjs/stargate"
import { contractProposal } from "../src/helpers/submitMsgProposal"
import { voteYes } from '../src/helpers/vote'
import { StoreCodeProposal, InstantiateContractProposal } from 'cosmjs-types/cosmwasm/wasm/v1beta1/proposal'
import { MsgInstantiateContract } from 'cosmjs-types/cosmwasm/wasm/v1beta1/tx'

import { accessTypeFromJSON } from 'cosmjs-types/cosmwasm/wasm/v1beta1/types'
import * as Pako from 'pako'
import * as fs from 'fs'
import { DefaultConfig } from '../src/config/config'
import { QueryClient } from '@cosmjs/stargate/'

//use https://github.com/persistenceOne/persistenceCore/tree/master/contrib/local for configuring test chain
export async function ContractTest() {
    let proposalId = 0
    let codeId = 0
    // const test = await PersistenceClient.init(
    //     "cereal hole wink isolate slam sample business bone abandon tell tilt embark rib history door spice base fever deal wish jump ask object deal",
    // )//persistence1wh9z8dedh0mpcgzd5e2zqzsdu2j2d0zwfk3xz9 used form persistenceCore/contrib/local/configs/keys.json
    // const [testAccount] = await test.wallet.getAccounts()
    // const testAddress = testAccount.address

    const val1 = await PersistenceClient.init(
        "flash tuna music boat sign image judge engage pistol reason love reform defy game ceiling basket roof clay keen hint flash buyer fancy buyer"
    )//persistence1wh9z8dedh0mpcgzd5e2zqzsdu2j2d0zwfk3xz9 used form persistenceCore/contrib/local/configs/keys.json
    const [val1Account] = await val1.wallet.getAccounts()
    const val1Address = val1Account.address

    const test3 = await PersistenceClient.init(
        "trip deliver device army resource toe stem unhappy employ vendor talent vapor little pole pottery side domain wealth bleak top diary card rose agree"
    )//persistence1hqujwsdhdjxpe5j50lrfdw9f72wlh90t63zdn8 used form persistenceCore/contrib/local/configs/keys.json
    const [test3Account] = await test3.wallet.getAccounts()
    const test3Address = test3Account.address

    const test1 = await PersistenceClient.init(
        "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
    )//persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm 

    const test2 = await PersistenceClient.init(
        "hungry foil sort arrest lizard sing acquire traffic veteran entire empty humble coach melody avoid gospel pair above chuckle hip list cage vessel zebra"
    )//persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu 

    // console.log(await test1.core.getHeight())

    try {
        console.log("Submitting Proposal ...")
        const wasm = fs.readFileSync("source/cw-plus/artifacts/cw20_ics20.wasm"); // path should be relative to install directory of persistenceJs
        //wasm proposl of type StoreCodeProposal
        const wasmStoreProposal = {
            typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
            value: Uint8Array.from(StoreCodeProposal.encode(StoreCodeProposal.fromPartial({
                title: "ICS20 Contract",
                description: "Add wasm code for ICS20 contract.",
                runAs: test3Address,
                wasmByteCode: Pako.gzip(wasm, { level: 9 }),
                instantiatePermission: {
                    permission: accessTypeFromJSON(1),//'cosmjs-types/cosmwasm/wasm/v1beta1/types'
                }
            })).finish())
        }
        proposalId = await contractProposal(test3, wasmStoreProposal)
        console.log("ProposalId => ", proposalId)
    } catch (e) {
        console.log("Proposal Error has occoured => ", e)
    }
    proposalId = 8
    //vote
    if (proposalId != 0) {
        try {
            console.log("Submitting Votes ...")
            console.log("validator Vote Log => ", await voteYes(val1, proposalId))
            console.log("test1 Vote Log => ", await voteYes(test1, proposalId))
            console.log("test2 Vote Log => ", await voteYes(test2, proposalId))
        } catch (e) {
            console.log("Voting Error has occoured => ", e)
        }
    } else {
        console.log("No Proposal was submitted")
    }

    // sleep for 1 min
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(60000) /// waiting 1 min.

    // check if passed proposal
    // make query client and get codeId
    // const codeId = await test3.query.
    // calculate wasmcode diff === 0


    //init code proposal
    // try {
    //     console.log("Submitting Proposal ...")
    //     const initMsg = {
    //         allowlist: [
    //             {
    //                 contract:"",
    //                 gas_limit:10000,
    //             },
    //         ],
    //         default_gas_limit: 1000000,
    //         default_timeout: 10000,
    //         gov_contract: "",
    //     }
    //     //wasm proposl of type StoreCodeProposal
    //     const wasmStoreProposal = {
    //         typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
    //         value: Uint8Array.from(InstantiateContractProposal.encode(InstantiateContractProposal.fromPartial({
    //             title: "ICS20",
    //             description: "CW20 ICS20 contract, used for ibc transfer.",
    //             runAs: test3Address,
    //             admin: test3Address,
    //             codeId: codeId,
    //             label: "native ics20",
    //             initMsg: initMsg,
    //             funds: coins(1000000000, "stake")
    //         })).finish())
    //     }
    //     proposalId = await contractProposal(test3, wasmStoreProposal)
    //     console.log("ProposalId => ", proposalId)
    // } catch (e) {
    //     console.log("Proposal Error has occoured => ", e)
    // }

    //vote for initiation


    //get contract address


}

ContractTest()
