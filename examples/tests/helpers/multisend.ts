import { PersistenceClient, cosmos } from "persistenceonejs";
import { coins } from "@cosmjs/stargate";

export async function MultiSend(client: PersistenceClient, input: [], output: []) {
  //example type for inputs and outputs
  // const input = [
  //   {
  //     address: "persistence123...", //fromAddress
  //     coins: coins(300, "uxprt"),
  //   },
  // ];

  // const output = [
  //   {
  //     address: "persistence1...", //toAddress 1
  //     coins: coins(100, "uxprt"),
  //   },
  //   {
  //     address: "persistence2...", //toAddress 2
  //     coins: coins(100, "uxprt"),
  //   },
  //   {
  //     address: "persistence3...", //toAddress 3
  //     coins: coins(100, "uxprt"),
  //   },
  // ];
  const wallet = client.wallet;
  const [account] = await wallet.getAccounts();
  const sendMsg = {
    typeUrl: "/cosmos.bank.v1beta1.tx.MsgSend",
    value: cosmos.bank.v1beta1.MsgMultiSend.fromJSON({ inputs: input, outputs: output }),
  };
  const res = await client.core.signAndBroadcast(
    account.address,
    [sendMsg],
    { amount: [{ denom: "uxprt", amount: "10000" }], gas: "100" },
    "test send",
  );
  console.log(res);
}