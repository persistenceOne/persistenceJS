import { PersistenceClient } from "../src/clients/client"
import { cosmos } from "../src/proto"
import { MsgSubmitProposalEncodeObject } from "@cosmjs/stargate"
import { contractProposal } from "../src/helpers/uploadContractViaProposal"

//use https://github.com/persistenceOne/persistenceCore/tree/master/contrib/local for configuring test chain
export async function uploadContract() {
    try {
        const client = await PersistenceClient.init(
            "obtain door word season wealth inspire tobacco shallow thumb tip walk forum someone verb pistol bright mutual nest fog valley tiny section sauce typical"
        )//persistence1ht0tun4u5uj4f4z83p9tncjerwu27ycsm52txm used form persistenceCore/contrib/local/configs/keys.json
        const wallet = client.wallet
        const [account] = await wallet.getAccounts()
        console.log(account.address)
        // const res = await contractProposal("../source/cw-plus/artifacts/cw20_base.wasm", client)
        // console.log(res)

    } catch (e) {
        console.log(e)
    }
}

uploadContract()
