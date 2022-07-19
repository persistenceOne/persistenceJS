import { PersistenceClient } from "../clients/client"
import { MessageComposer } from "../src/cosmos/bank/v1beta1/tx.registry"
import { MsgSend } from "../src/cosmos/bank/v1beta1/tx"

export async function test() {
    const client = await PersistenceClient.init("rifle same bitter control garage duck grab spare mountain doctor rubber cook")//wasm1vw0gf8uc000h72qxzkdrx2x2u8zzj0ppfq02gd
    const wallet = client.wallet
    const [account] = await wallet.getAccounts()
    
    const sendMsg = MessageComposer.fromJSON.send({
                fromAddress: "wasm1vw0gf8uc000h72qxzkdrx2x2u8zzj0ppfq02gd",
                toAddress: "wasm1q6gtklegcp6n29mg0lxk7k3uwkarj3jv6qu0vq",
                amount: [{
                    denom: "ucosm",
                    amount: "100",
                }]
            })

    const res = await client.core.signAndBroadcast(account.address, [sendMsg],{amount: [{denom: "ucosm", amount:"10000"}], gas: "1000000"} ,"test send")
    console.log(res)

}

test()