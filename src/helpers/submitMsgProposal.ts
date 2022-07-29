import { PersistenceClient } from "../clients/client"
import { LocalConfig } from "../config/config"

// import { cosmos } from "../proto"
import { MsgStoreCode } from 'cosmjs-types/cosmwasm/wasm/v1beta1/tx'

import { MsgSubmitProposalEncodeObject, coins } from "@cosmjs/stargate"
import { MsgSubmitProposal, MsgSubmitProposalResponse } from 'cosmjs-types/cosmos/gov/v1beta1/tx'

import { Any } from "cosmjs-types/google/protobuf/any"


export async function contractProposal(client: PersistenceClient, proposal: { typeUrl?: string; value?: Uint8Array }) {
    const [account] = await client.wallet.getAccounts()
    //submit proposal
    const proposalMsg = {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: {
            content: Any.fromPartial(proposal),
            initialDeposit: coins(600_000_000, "uxprt"),
            proposer: account.address,
        }
    }
    const res = await client.core.signAndBroadcast(account.address, [proposalMsg], { amount: coins(20_000_000,"uxprt"), gas: "20000000" }, "Proposal Submitted!")
    if (res.code === 0) {
        const json = JSON.parse(res.rawLog)
        return json[0].events[3].attributes[1].value //return Proposal Id
    } else {
        return res.rawLog
    }
}