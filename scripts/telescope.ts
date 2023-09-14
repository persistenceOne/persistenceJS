#!/usr/bin/env node
import { join } from "path";
import { writeFileSync } from "fs" ;
import telescope from "@cosmology/telescope";

const outPath = join(__dirname, "/../src");

telescope({
  protoDirs: ["./proto"],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      patterns: ["**/tx.registry.ts", "**/msgs.registry.ts"],
      files: [
        "ibc/core/types/v1/genesis.ts",
        "ibc/applications/interchain_accounts/genesis/v1/genesis.ts",
        "cosmos/tx/signing/v1beta1/signing.ts",
        "cosmos/staking/v1beta1/tx.ts",
        "cosmos/staking/v1beta1/staking.ts",

        "cosmos/authz/v1beta1/tx.amino.ts",
        "cosmos/staking/v1beta1/tx.amino.ts",
        "cosmos/slashing/v1beta1/tx.amino.ts",
        "cosmos/upgrade/v1beta1/tx.amino.ts",

        "cosmos/consensus/v1/tx.amino.ts",
        "cosmos/gov/v1/tx.amino.ts"
      ]
    },
    eslintDisable: {
      disableAll: true
    },
    bundle: {
      enabled: false
    },
    prototypes: {
      includePackageVar: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      excluded: {
        protos: [
          "cosmos/autocli/v1/options.proto",
          "cosmos/autocli/v1/query.proto",
          "cosmos/authz/v1beta1/event.proto",
          "cosmos/base/reflection/v2alpha1/reflection.proto",
          "cosmos/crypto/secp256r1/keys.proto",
          "ibc/core/port/v1/query.proto",
          "ibc/lightclients/solomachine/v2/solomachine.proto",
          "tendermint/libs/bits/types.proto",
          "google/api/httpbody.proto",
          "tendermint/blockchain/types.proto",
          "tendermint/consensus/types.proto",
          "tendermint/consensus/wal.proto",
          "tendermint/mempool/types.proto",
          "tendermint/p2p/conn.proto",
          "tendermint/p2p/pex.proto",
          "tendermint/privval/types.proto",
          "tendermint/rpc/grpc/types.proto",
          "tendermint/state/types.proto",
          "tendermint/statesync/types.proto",
          "tendermint/store/types.proto",
          "tendermint/types/canonical.proto",
          "tendermint/types/events.proto"
        ]
      },
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: true,
        toJSON: true,
        fromPartial: true

        // encode: true,
        // decode: true,
        // toSDK: true,
        // fromSDK: true,
        // toAmino: true,
        // fromAmino: true,
        // fromProto: true,
        // toProto: true
      },
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: "timestamp",
        duration: "duration",
        num64: "bigint",
        setDefaultCustomTypesToUndefined: false
      }
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: [
        "Msg",
        "Query",
        "Service",
        "ReflectionService",
        "ABCIApplication"
      ]
    },
    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: false
    },
    aminoEncoding: {
      enabled: true
    }
  }
}).then(() => {
  // Create index.ts
  const index_ts = `
    // Auto-generated, see scripts/codegen.js!
    // Exports we want to provide at the root of the "persistenceJS" package
    export { DeepPartial, Exact } from "./helpers";
    `;
  writeFileSync(`${outPath}/index.ts`, index_ts);

  console.log("✨ All Done!");
}, (e) => {
  console.error(e);
  process.exit(1);
});