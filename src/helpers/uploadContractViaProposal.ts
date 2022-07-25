import { PersistenceClient } from "../clients/client"
import { LocalConfig } from "../config/config"
import Pako = require('pako')
// import { cosmos } from "../proto"
import { MsgStoreCode } from 'cosmjs-types/cosmwasm/wasm/v1beta1/tx'
import { accessTypeFromJSON } from 'cosmjs-types/cosmwasm/wasm/v1beta1/types'
import { MsgSubmitProposalEncodeObject, coins } from "@cosmjs/stargate"
import { MsgSubmitProposal, MsgSubmitProposalResponse } from 'cosmjs-types/cosmos/gov/v1beta1/tx'
import * as fs from 'fs'

export async function contractProposal(wasmPath: string, client: PersistenceClient) {
    //setup
    // const wallet = client.wallet
    const [account] = await client.wallet.getAccounts()
    const wasm = fs.readFileSync(wasmPath); // path should be relative to install directory of persistenceJs
    console.log(typeof wasm)
    //submit proposal

    const proposalMsg = {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: {
            content: {
                typeUrl: "/cosmwasm.wasm.v1beta1.MsgStoreCode",
                value: {
                    sender: account.address,
                    wasmByteCode: Pako.gzip(wasm, { level: 9 }),
                    instantiatePermission: {
                        permission: accessTypeFromJSON(1),//'cosmjs-types/cosmwasm/wasm/v1beta1/types'
                        address: account.address
                    }
                }
            },
            initialDeposit: coins(1000, "stake"),
            proposer: "persistence1wh9z8dedh0mpcgzd5e2zqzsdu2j2d0zwfk3xz9"
        }

    }
    return await client.core.signAndBroadcast(account.address, [proposalMsg], { amount: [{ denom: "stake", amount: "10000" }], gas: "100" }, "test send")
}