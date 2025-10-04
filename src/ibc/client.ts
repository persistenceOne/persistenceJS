/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ibcApplicationsInterchainAccountsControllerV1TxRegistry from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as ibcApplicationsInterchainAccountsHostV1TxRegistry from "./applications/interchain_accounts/host/v1/tx.registry";
import * as ibcApplicationsTransferV1TxRegistry from "./applications/transfer/v1/tx.registry";
import * as ibcCoreChannelV1TxRegistry from "./core/channel/v1/tx.registry";
import * as ibcCoreChannelV2TxRegistry from "./core/channel/v2/tx.registry";
import * as ibcCoreClientV1TxRegistry from "./core/client/v1/tx.registry";
import * as ibcCoreClientV2TxRegistry from "./core/client/v2/tx.registry";
import * as ibcCoreConnectionV1TxRegistry from "./core/connection/v1/tx.registry";
import * as ibcLightclientsWasmV1TxRegistry from "./lightclients/wasm/v1/tx.registry";
import * as ibcApplicationsInterchainAccountsControllerV1TxAmino from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as ibcApplicationsInterchainAccountsHostV1TxAmino from "./applications/interchain_accounts/host/v1/tx.amino";
import * as ibcApplicationsTransferV1TxAmino from "./applications/transfer/v1/tx.amino";
import * as ibcCoreChannelV1TxAmino from "./core/channel/v1/tx.amino";
import * as ibcCoreChannelV2TxAmino from "./core/channel/v2/tx.amino";
import * as ibcCoreClientV1TxAmino from "./core/client/v1/tx.amino";
import * as ibcCoreClientV2TxAmino from "./core/client/v2/tx.amino";
import * as ibcCoreConnectionV1TxAmino from "./core/connection/v1/tx.amino";
import * as ibcLightclientsWasmV1TxAmino from "./lightclients/wasm/v1/tx.amino";
export const ibcAminoConverters = {
  ...ibcApplicationsInterchainAccountsControllerV1TxAmino.AminoConverter,
  ...ibcApplicationsInterchainAccountsHostV1TxAmino.AminoConverter,
  ...ibcApplicationsTransferV1TxAmino.AminoConverter,
  ...ibcCoreChannelV1TxAmino.AminoConverter,
  ...ibcCoreChannelV2TxAmino.AminoConverter,
  ...ibcCoreClientV1TxAmino.AminoConverter,
  ...ibcCoreClientV2TxAmino.AminoConverter,
  ...ibcCoreConnectionV1TxAmino.AminoConverter,
  ...ibcLightclientsWasmV1TxAmino.AminoConverter,
};
export const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...ibcApplicationsInterchainAccountsControllerV1TxRegistry.registry,
  ...ibcApplicationsInterchainAccountsHostV1TxRegistry.registry,
  ...ibcApplicationsTransferV1TxRegistry.registry,
  ...ibcCoreChannelV1TxRegistry.registry,
  ...ibcCoreChannelV2TxRegistry.registry,
  ...ibcCoreClientV1TxRegistry.registry,
  ...ibcCoreClientV2TxRegistry.registry,
  ...ibcCoreConnectionV1TxRegistry.registry,
  ...ibcLightclientsWasmV1TxRegistry.registry,
];
export const getSigningIbcClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...ibcProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...ibcAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningIbcClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningIbcClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
