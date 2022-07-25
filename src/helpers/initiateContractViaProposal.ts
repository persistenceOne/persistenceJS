import { PersistenceClient, Config } from "../clients/client"
import { LocalConfig } from "../config/config"
import { toAscii } from '@cosmjs/encoding';
import { cosmos } from "../proto"
import { MsgInstantiateContract } from 'cosmjs-types/cosmwasm/wasm/v1beta1/tx'
import { accessTypeFromJSON } from 'cosmjs-types/cosmwasm/wasm/v1beta1/types'
import { MsgSubmitProposalEncodeObject, coins } from "@cosmjs/stargate"
import { MsgSubmitProposal, MsgSubmitProposalResponse } from 'cosmjs-types/cosmos/gov/v1beta1/tx'
import * as fs from 'fs'

export async function contractProposal(codeId: string, wasmPath: string, initMsg: JSON, client: PersistenceClient) {
    //setup
    // const wallet = client.wallet
    const [account] = await client.wallet.getAccounts()
    const wasm = fs.readFileSync(wasmPath); // path should be relative to install directory of persistenceJs

    //submit proposal
    // const initMsg = {
    //     name: "factory token",
    //     symbol: "FACTORYTOKEN",
    //     decimals: 2,
    //     // list of all validator self-delegate addresses - 100 STARs each!
    //     initial_balances: [
    //         { address: "osmo1vw0gf8uc000h72qxzkdrx2x2u8zzj0ppt8d0h5", amount: "10000000000000000" },
    //         { address: "osmo1ppgpwep3yzh8w3d89xlzlens3420j5vsk8ny2t", amount: "10000000000000000" },
    //         { address: "osmo1fnx5jzqsdkntlq2nspjgswtezf45u5ugn3zq0h", amount: "10000000000000000" },
    //     ],
    //     mint: {
    //         minter: account.address,
    //     },
    // }
    const proposalMsg = {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON({
            content: MsgInstantiateContract.fromPartial({
                sender: account.address,
                admin: account.address,
                codeId: codeId,
                initMsg: toAscii(
                    JSON.stringify(initMsg)),
                funds: coins(1234, "uxprt")
            }),
            initialDeposit: coins(1000, "uxprt"),
            proposer: "persistence123..."
        })
    };
    const res = await client.core.signAndBroadcast(account.address, [proposalMsg], { amount: [{ denom: "ucosm", amount: "10000" }], gas: "100" }, "test send")
    const resData = res.data.forEach(e =>
        e.msgType === "MsgInstantiateContractResponse"
    ) //figure out how to get response
    
}