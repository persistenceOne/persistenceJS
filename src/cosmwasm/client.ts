/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cosmwasmWasmV1TxRegistry from "./wasm/v1/tx.registry";
import * as cosmwasmWasmV1TxAmino from "./wasm/v1/tx.amino";
export const cosmwasmAminoConverters = {
  ...cosmwasmWasmV1TxAmino.AminoConverter,
};
export const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmwasmWasmV1TxRegistry.registry,
];
export const getSigningCosmwasmClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...cosmwasmProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cosmwasmAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningCosmwasmClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningCosmwasmClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
