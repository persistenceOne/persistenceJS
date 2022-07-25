import { PersistenceClient } from "../clients/client"
import { LocalConfig } from "../config/config"

import { cosmos } from "../proto"
import { MsgStoreCode, } from 'cosmjs-types/cosmwasm/wasm/v1beta1/tx'
import { accessTypeFromJSON } from 'cosmjs-types/cosmwasm/wasm/v1beta1/types'
import { MsgSubmitProposalEncodeObject, coins } from "@cosmjs/stargate"
import { MsgSubmitProposal, MsgSubmitProposalResponse } from 'cosmjs-types/cosmos/gov/v1beta1/tx'
import * as fs from 'fs'

export async function contractProposal(wasmPath: string, client: PersistenceClient) {
    //setup
    // const wallet = client.wallet
    const [account] = await client.wallet.getAccounts()
    const wasm = fs.readFileSync(wasmPath); // path should be relative to install directory of persistenceJs

    //submit proposal

    const proposalMsg = {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON({
            content: MsgStoreCode.fromPartial({
                sender: account.address,
                wasmByteCode: wasm,
                instantiatePermission: {
                    permission: accessTypeFromJSON({//'cosmjs-types/cosmwasm/wasm/v1beta1/types'

                    }),
                    address: "persistence12///"
                }
            }),
            initialDeposit: coins(1000, "uxprt"),
            proposer: "persistence123..."
        })
    };
    const proposalId = await client.core.signAndBroadcast(account.address, [proposalMsg], { amount: [{ denom: "ucosm", amount: "10000" }], gas: "100" }, "test send")

}