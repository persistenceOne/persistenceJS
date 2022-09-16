import codegen from "@cosmwasm/ts-codegen";

codegen({
  contracts: [
    {
      name: "CW20",
      dir: "./source/schema/cw20-base",
    },
    {
      name: "Cw20ICS20",
      dir: "./source/schema/cw20-ics20",
    },
  ],
  outPath: "./src/contracts",

  // options are completely optional ;)
  options: {
    bundle: {
      bundleFile: "index.ts",
      scope: "contracts",
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: "v4",
      mutations: true,
      queryKeys: true,
    },
    recoil: {
      enabled: false,
    },
    messageComposer: {
      enabled: false,
    },
  },
}).then(() => {
  console.log("✨ all done!");
});
