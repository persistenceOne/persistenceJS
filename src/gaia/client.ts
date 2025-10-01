/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as gaiaLiquidV1beta1TxRegistry from "./liquid/v1beta1/tx.registry";
import * as gaiaLiquidV1beta1TxAmino from "./liquid/v1beta1/tx.amino";
export const gaiaAminoConverters = {
  ...gaiaLiquidV1beta1TxAmino.AminoConverter,
};
export const gaiaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...gaiaLiquidV1beta1TxRegistry.registry,
];
export const getSigningGaiaClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...gaiaProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...gaiaAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningGaiaClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningGaiaClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
