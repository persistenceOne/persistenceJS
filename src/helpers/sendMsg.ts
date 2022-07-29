import { PersistenceClient } from "../clients/client"
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx"

export async function test() {
    const client = await PersistenceClient.init("obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical")
    const wallet = client.wallet
    const [account] = await wallet.getAccounts()
    const sendMsg = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
            fromAddress: "persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm",
            toAddress: "persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu",
            amount: [{
                denom: "stake",
                amount: "100",
            }]
        }
    }
    const res = await client.core.signAndBroadcast(account.address, [sendMsg],{amount: [{denom: "stake", amount:"10000"}], gas: "100000"} ,"test send")
    console.log(res)

}

test()
