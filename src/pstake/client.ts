/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as pstakeLiquidstakeV1beta1TxRegistry from "./liquidstake/v1beta1/tx.registry";
import * as pstakeLiquidstakeibcV1beta1MsgsRegistry from "./liquidstakeibc/v1beta1/msgs.registry";
import * as pstakeLscosmosV1beta1MsgsRegistry from "./lscosmos/v1beta1/msgs.registry";
import * as pstakeLiquidstakeV1beta1TxAmino from "./liquidstake/v1beta1/tx.amino";
import * as pstakeLiquidstakeibcV1beta1MsgsAmino from "./liquidstakeibc/v1beta1/msgs.amino";
import * as pstakeLscosmosV1beta1MsgsAmino from "./lscosmos/v1beta1/msgs.amino";
export const pstakeAminoConverters = {
  ...pstakeLiquidstakeV1beta1TxAmino.AminoConverter,
  ...pstakeLiquidstakeibcV1beta1MsgsAmino.AminoConverter,
  ...pstakeLscosmosV1beta1MsgsAmino.AminoConverter,
};
export const pstakeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...pstakeLiquidstakeV1beta1TxRegistry.registry,
  ...pstakeLiquidstakeibcV1beta1MsgsRegistry.registry,
  ...pstakeLscosmosV1beta1MsgsRegistry.registry,
];
export const getSigningPstakeClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...pstakeProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...pstakeAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningPstakeClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningPstakeClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes,
  });
  return client;
};
