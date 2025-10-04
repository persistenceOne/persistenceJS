/* eslint-disable */
import { orderFromJSON } from "../../../../core/channel/v1/channel";
import { typeFromJSON } from "../../v1/packet";
import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export interface MsgRegisterInterchainAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterInterchainAccount";
  value: {
    owner: string;
    connection_id: string;
    version: string;
    ordering: number;
  };
}
export interface MsgSendTxAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSendTx";
  value: {
    owner: string;
    connection_id: string;
    packet_data: {
      type: number;
      data: Uint8Array;
      memo: string;
    };
    relative_timeout: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    signer: string;
    params: {
      controller_enabled: boolean;
    };
  };
}
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
    aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
    toAmino: ({
      owner,
      connectionId,
      version,
      ordering,
    }: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoType["value"] => {
      return {
        owner,
        connection_id: connectionId,
        version,
        ordering,
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      version,
      ordering,
    }: MsgRegisterInterchainAccountAminoType["value"]): MsgRegisterInterchainAccount => {
      return {
        owner,
        connectionId: connection_id,
        version,
        ordering: orderFromJSON(ordering),
      };
    },
  },
  "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
    aminoType: "cosmos-sdk/MsgSendTx",
    toAmino: ({
      owner,
      connectionId,
      packetData,
      relativeTimeout,
    }: MsgSendTx): MsgSendTxAminoType["value"] => {
      return {
        owner,
        connection_id: connectionId,
        packet_data: {
          type: packetData.type,
          data: packetData.data,
          memo: packetData.memo,
        },
        relative_timeout: relativeTimeout.toString(),
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      packet_data,
      relative_timeout,
    }: MsgSendTxAminoType["value"]): MsgSendTx => {
      return {
        owner,
        connectionId: connection_id,
        packetData: {
          type: typeFromJSON(packet_data.type),
          data: packet_data.data,
          memo: packet_data.memo,
        },
        relativeTimeout: BigInt(relative_timeout),
      };
    },
  },
  "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ signer, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        signer,
        params: {
          controller_enabled: params.controllerEnabled,
        },
      };
    },
    fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        signer,
        params: {
          controllerEnabled: params.controller_enabled,
        },
      };
    },
  },
};
