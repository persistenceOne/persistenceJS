import { PersistenceClient, cosmos } from "persistenceonejs";
import { coins } from "@cosmjs/stargate";
import * as Long from "long";

export async function voteYes(client: PersistenceClient, proposalid: number) {
  const [account] = await client.wallet.getAccounts();
  const sendMsg = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    value: {
      proposalId: Long.fromNumber(proposalid),
      voter: account.address,
      option: cosmos.gov.v1beta1.voteOptionFromJSON(1),
    },
  };
  const res = await client.core.signAndBroadcast(
    account.address,
    [sendMsg],
    { amount: coins(10_000_000, "stake"), gas: "2000000" },
    "Vote Yes!",
  );
  if (res.code === 0) {
    return res;
  } else {
    return res.rawLog;
  }
}
