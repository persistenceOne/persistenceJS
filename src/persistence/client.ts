/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as persistenceHalvingV1beta1TxRegistry from "./halving/v1beta1/tx.registry";
import * as persistenceHalvingV1beta1TxAmino from "./halving/v1beta1/tx.amino";
export const persistenceAminoConverters = {
  ...persistenceHalvingV1beta1TxAmino.AminoConverter,
};
export const persistenceProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...persistenceHalvingV1beta1TxRegistry.registry,
];
export const getSigningPersistenceClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...persistenceProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...persistenceAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningPersistenceClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningPersistenceClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
