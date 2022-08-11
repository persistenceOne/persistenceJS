<p align="center" size="20">
    <span style="color:black;font-weight:700;font-size:30px">
    Persistence
    </span> 
    <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="isolated" width="40"/>
</p>
<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"></a>
    <a href="https://www.npmjs.com/package/persistenceonejs"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/persistenceonejs.svg"> </a>
</p>

<p align="center">
    <a href="https://docs.pstake.finance/">Core</a>
    ·
    <a href="https://cosmos.github.io/cosmjs/latest/stargate/index.html">Docs</a>
</p>

---

## Setup

```sh
npm install persistenceonejs
```

## Usage

PersistenceClient consistes of a `signingStargateClient` and a
`SigningCowsmWasmClient`, refered to as core and wasm respectively.

For querying use PersistenceClient.query, this gives you a `tmclient`. Usage for
a tmclient for querying is based on `cosmos-sdk` i.e. query path is taken from
module locations.

```js
import { PersistenceClient } from "persistenceonejs";

const alice = await PersistenceClient.init(...mnemonic);
const codes = await alice.query.cosmwasm.wasm.v1.codes({});
console.log(codes);
```

## Example

- **Send Tokens** Use persistenceClient.wasm to send contracts via CW20
  contract, persistenceClient.wasm is a SigningWasmClient so most of the
  functionalities are similar to
  @cosmjs/[cosmwasm-stargate](https://github.com/cosmos/cosmjs/tree/main/packages/cosmwasm-stargate).
  The Signer for this example is a mnemonic wallet.

  ```js
  import { PersistenceClient, Cw20Contract } from "persistenceonejs";
  import { coins } from "@cosmjs/stargate";

  const alice = await PersistenceClient.init(...mnemonic);
  const [account] = await alice.wallet.getAccounts();
  const aliceaddress = account.address;
  const pstake =
    "persistence14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sjvz4fk"; //cw20 token address on chain
  const res = await alice.wasm.execute(
    aliceaddress,
    pstake,
    {
      transfer: {
        recipient: "persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu", //recipient address
        amount: "10",
      },
    },
    { amount: coins(2_000_000, "stake"), gas: "200000" },
  );
  console.log(res);
  ```

  ```js
  {
    logs: [ { msg_index: 0, log: '', events: [Array] } ],
    height: 1354,
    transactionHash: 'B4789783E9FB89FC69AB38F38C3C670612041C7E1EFFB8DF22929681BD52FB4A',
    gasWanted: 200000,
    gasUsed: 75715
  }
  ```

  Query Balance

  ```js
  const balance = await alice.wasm.queryContractSmart(pstake, {
    balance: { address: "persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu" },
  });
  console.log(balance);
  ```

  ```js
  {
    balance: "13010";
  }
  ```

  Please refer to
  [cowmwasm](https://docs.cosmwasm.com/dev-academy/smart-contract-interaction/interact#setting-up-the-cosmjs-cli-client)
  for more information on how to use CosmWasm.

- **MsgSend** A more flexible way to send transaction is by creating a Msg and
  brodcasting it. This is the preferd way for building large scale applications
  with multiple components.

  ```js
  import { cosmos } from "persistenceonejs";
  const sendMsg = {
    typeUrl: "/cosmos.bank.v1beta1.tx.MsgSend",
    value: cosmos.bank.v1beta1.MsgSend.fromJSON({
      fromAddress: from,
      toAddress: to,
      amount: amount,
    }),
  };
  const res = await alice.core.signAndBroadcast(
    account.address,
    [sendMsg],
    { amount: [{ denom: "uxprt", amount: "10000" }], gas: "100" },
    "test send",
  );
  ```

  This method gives a lot more flexibility for an application, additional use
  case can be found in the [helpers](./examples/helpers/).

## Gov Proposals

This [script](./tests/testContractProposals.ts) lets you upload and initiate a
contract via Gov proposals.

> **_NOTE:_** It is the default method for uploading your own contract to the
> prsistence chain.
