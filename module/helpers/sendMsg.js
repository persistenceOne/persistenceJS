import { cosmos } from "../proto/";
export async function Send(client, from, to, amount) {
  const wallet = client.wallet;
  const [account] = await wallet.getAccounts();
  const sendMsg = {
    typeUrl: "/cosmos.bank.v1beta1.tx.MsgSend",
    value: cosmos.bank.v1beta1.MsgSend.fromJSON({
      fromAddress: from,
      toAddress: to,
      amount: amount
    })
  };
  const res = await client.core.signAndBroadcast(account.address, [sendMsg], {
    amount: [{
      denom: "uxprt",
      amount: "10000"
    }],
    gas: "100"
  }, "test send");
  console.log(res);
}