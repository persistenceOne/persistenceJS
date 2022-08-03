import { PersistenceClient } from "../clients/client";
import { cosmos } from "../proto/";
import { Coin } from "@cosmjs/stargate";

export async function Send(client: PersistenceClient, from: string, to: string, amount: Coin) {
  const wallet = client.wallet;
  const [account] = await wallet.getAccounts();
  const sendMsg = {
    typeUrl: "/cosmos.bank.v1beta1.tx.MsgSend",
    value: cosmos.bank.v1beta1.MsgSend.fromJSON({
      fromAddress: from,
      toAddress: to,
      amount: amount,
    }),
  };
  const res = await client.core.signAndBroadcast(
    account.address,
    [sendMsg],
    { amount: [{ denom: "uxprt", amount: "10000" }], gas: "100" },
    "test send",
  );
  console.log(res);
}
