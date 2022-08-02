import { PersistenceClient } from "../clients/client";
import { MsgVote } from "../proto/cosmos/gov/v1beta1/tx";
import { coins } from "@cosmjs/stargate";
import { voteOptionFromJSON } from "../proto/cosmos/gov/v1beta1/gov";
import Long = require("long");

export async function voteYes(client: PersistenceClient, proposalid: number) {
  const [account] = await client.wallet.getAccounts();
  const sendMsg = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    value: {
      proposalId: Long.fromNumber(proposalid),
      voter: account.address,
      option: voteOptionFromJSON(1),
    },
  };
  const res = await client.core.signAndBroadcast(
    account.address,
    [sendMsg],
    { amount: coins(10_000_000, client.config.gasPrices.denom), gas: "2000000" },
    "Vote Yes!",
  );
  if (res.code === 0) {
    return res;
  } else {
    return res.rawLog;
  }
}
