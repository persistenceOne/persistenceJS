import { coins } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
export async function contractProposal(client, proposal) {
  const [account] = await client.wallet.getAccounts(); //submit proposal

  const proposalMsg = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    value: {
      content: Any.fromPartial(proposal),
      initialDeposit: coins(600000000, "stake"),
      proposer: account.address
    }
  };
  const res = await client.core.signAndBroadcast(account.address, [proposalMsg], {
    amount: coins(20000000, "stake"),
    gas: "20000000"
  }, "Proposal Submitted!");

  if (res.code === 0) {
    const json = JSON.parse(res.rawLog);
    return json; //return json response, for proposalID use json[0].events[3].attributes[1].value
  } else {
    return res.rawLog;
  }
}