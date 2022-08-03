import { PersistenceClient } from "../src/clients/client"
import { contractProposal } from "../src/helpers/submitMsgProposal"
import { voteYes } from '../src/helpers/vote'
import { StoreCodeProposal } from '../src/proto/cosmwasm/wasm/v1/proposal'
import { InstantiateContractProposal } from '../src/proto/cosmwasm/wasm/v1/proposal'
import { accessTypeFromJSON } from '../src//proto/cosmwasm/wasm/v1/types'
import { coins } from "@cosmjs/stargate"
import * as Pako from 'pako'
import * as fs from 'fs'
import { DefaultConfig } from '../src/config/config'//use when connecting to test-core-1
import * as Long from 'Long'

//use https://github.com/persistenceOne/persistenceCore/tree/master/contrib/local for configuring test chain
export async function ContractTest() {
    let proposalId = 0
    let json = {}
    const val1 = await PersistenceClient.init(
        "flash tuna music boat sign image judge engage pistol reason love reform defy game ceiling basket roof clay keen hint flash buyer fancy buyer"
    )//persistence1wh9z8dedh0mpcgzd5e2zqzsdu2j2d0zwfk3xz9 used form persistenceCore/contrib/local/configs/keys.json
    const [val1Account] = await val1.wallet.getAccounts()
    const val1Address = val1Account.address

    const test1 = await PersistenceClient.init(
        "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
    )//persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm 

    const test2 = await PersistenceClient.init(
        "hungry foil sort arrest lizard sing acquire traffic veteran entire empty humble coach melody avoid gospel pair above chuckle hip list cage vessel zebra"
    )//persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu 

    const test3 = await PersistenceClient.init(
        "trip deliver device army resource toe stem unhappy employ vendor talent vapor little pole pottery side domain wealth bleak top diary card rose agree"
    )//persistence1hqujwsdhdjxpe5j50lrfdw9f72wlh90t63zdn8 used form persistenceCore/contrib/local/configs/keys.json
    const [test3Account] = await test3.wallet.getAccounts()
    const test3Address = test3Account.address
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
        const res = await contractProposal(test3, wasmStoreProposal)
        proposalId = res[0].events[3].attributes[1].value //js formating
        json = res
        console.log("proposalId => ", proposalId)
    } catch (e) {
        console.log("Proposal Error has occoured => ", e)
    }

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
    console.log("waiting for proposal to pass ...")
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(60000) /// waiting 1 min.

    // check if passed proposal
    let proposalStatus = await test3.query.cosmos.gov.v1beta1.proposal({ proposalId: Long.fromNumber(proposalId) })
    console.log("proposalPassed => ", await proposalStatus.proposal.status === 3)

    // make query client and get codeId
    const codes = await test3.query.cosmwasm.wasm.v1.codes({})
    const codeId = codes.codeInfos.length //this needs to be the last available code id, for the latest code uploaded
    console.log("codeId is => ", codeId)
    // calculate wasmcode diff === 0

    // init code proposals ics20
    try {
        console.log("Submitting Proposal ...")
        const initMsg = {
            allowlist: [
                // {
                //     contract: "persistence1234234",
                //     gas_limit: 10000,
                // },
            ],
            default_gas_limit: 1000000,
            default_timeout: 10000,
            gov_contract: val1Address
        }
        //wasm proposl of type InstantiateContractProposal
        const initContractProposal = {
            typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
            value: Uint8Array.from(InstantiateContractProposal.encode(InstantiateContractProposal.fromJSON(
                {
                    title: "ICS20",
                    description: "CW20 ICS20 contract, used for ibc transfer.",
                    runAs: test3Address,
                    admin: test3Address,
                    codeId: codeId.toString(),
                    label: "native ics20",
                    msg: Buffer.from(JSON.stringify(initMsg)).toString("base64"),
                    funds: coins(1000000000, "stake")
                }
            )).finish())
        }
        const res = await contractProposal(test3, initContractProposal)
        proposalId = res[0].events[3].attributes[1].value //js formating
        json = res
        console.log("proposalId => ", proposalId)
    } catch (e) {
        console.log("Proposal Error has occoured => ", e)
    }

    //vote for initiation
    if (proposalId != 0) {
        try {
            console.log("Submitting Votes ...", proposalId)
            console.log("validator Vote Log => ", await voteYes(val1, proposalId))
            console.log("test1 Vote Log => ", await voteYes(test1, proposalId))
            console.log("test2 Vote Log => ", await voteYes(test2, proposalId))
        } catch (e) {
            console.log("Voting Error has occoured => ", e)
        }
    } else {
        console.log("No Proposal was submitted")
    }

    // wait for proposal to pass
    console.log("waiting for proposal to pass ...")
    await delay(45000) /// waiting 1 min.

    // check if passed proposal
    proposalStatus = await test3.query.cosmos.gov.v1beta1.proposal({ proposalId: Long.fromNumber(proposalId) })
    console.log("proposalPassed => ", await proposalStatus.proposal.status === 3)

    // make query client and get contractaddress from codeId
    const contract = await test3.query.cosmwasm.wasm.v1.contractsByCode({ codeId: Long.fromNumber(codeId) })
    console.log("Contracts are => ", contract.contracts)
}

ContractTest()


