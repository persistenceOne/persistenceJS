import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export declare enum ResponseResultType {
  /** RESPONSE_RESULT_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_NOOP = 1,
  /** RESPONSE_RESULT_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_SUCCESS = 2,
  UNRECOGNIZED = -1,
}
export declare function responseResultTypeFromJSON(object: any): ResponseResultType;
export declare function responseResultTypeToJSON(object: ResponseResultType): string;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel: Channel;
  signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
  channelId: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previousChannelId: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet: Packet;
  proofCommitment: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: Long;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: Long;
  signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
  result: ResponseResultType;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}
export declare const MsgChannelOpenInit: {
  encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit;
  fromJSON(object: any): MsgChannelOpenInit;
  toJSON(message: MsgChannelOpenInit): unknown;
  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit;
};
export declare const MsgChannelOpenInitResponse: {
  encode(message: MsgChannelOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
  fromJSON(object: any): MsgChannelOpenInitResponse;
  toJSON(message: MsgChannelOpenInitResponse): unknown;
  fromPartial(object: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
};
export declare const MsgChannelOpenTry: {
  encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry;
  fromJSON(object: any): MsgChannelOpenTry;
  toJSON(message: MsgChannelOpenTry): unknown;
  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry;
};
export declare const MsgChannelOpenTryResponse: {
  encode(_: MsgChannelOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
  fromJSON(_: any): MsgChannelOpenTryResponse;
  toJSON(_: MsgChannelOpenTryResponse): unknown;
  fromPartial(_: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
};
export declare const MsgChannelOpenAck: {
  encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck;
  fromJSON(object: any): MsgChannelOpenAck;
  toJSON(message: MsgChannelOpenAck): unknown;
  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck;
};
export declare const MsgChannelOpenAckResponse: {
  encode(_: MsgChannelOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
  fromJSON(_: any): MsgChannelOpenAckResponse;
  toJSON(_: MsgChannelOpenAckResponse): unknown;
  fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
};
export declare const MsgChannelOpenConfirm: {
  encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm;
  fromJSON(object: any): MsgChannelOpenConfirm;
  toJSON(message: MsgChannelOpenConfirm): unknown;
  fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
};
export declare const MsgChannelOpenConfirmResponse: {
  encode(_: MsgChannelOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
  fromJSON(_: any): MsgChannelOpenConfirmResponse;
  toJSON(_: MsgChannelOpenConfirmResponse): unknown;
  fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
};
export declare const MsgChannelCloseInit: {
  encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit;
  fromJSON(object: any): MsgChannelCloseInit;
  toJSON(message: MsgChannelCloseInit): unknown;
  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit;
};
export declare const MsgChannelCloseInitResponse: {
  encode(_: MsgChannelCloseInitResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
  fromJSON(_: any): MsgChannelCloseInitResponse;
  toJSON(_: MsgChannelCloseInitResponse): unknown;
  fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
};
export declare const MsgChannelCloseConfirm: {
  encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm;
  fromJSON(object: any): MsgChannelCloseConfirm;
  toJSON(message: MsgChannelCloseConfirm): unknown;
  fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
};
export declare const MsgChannelCloseConfirmResponse: {
  encode(_: MsgChannelCloseConfirmResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
  fromJSON(_: any): MsgChannelCloseConfirmResponse;
  toJSON(_: MsgChannelCloseConfirmResponse): unknown;
  fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
};
export declare const MsgRecvPacket: {
  encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket;
  fromJSON(object: any): MsgRecvPacket;
  toJSON(message: MsgRecvPacket): unknown;
  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket;
};
export declare const MsgRecvPacketResponse: {
  encode(message: MsgRecvPacketResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse;
  fromJSON(object: any): MsgRecvPacketResponse;
  toJSON(message: MsgRecvPacketResponse): unknown;
  fromPartial(object: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
};
export declare const MsgTimeout: {
  encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout;
  fromJSON(object: any): MsgTimeout;
  toJSON(message: MsgTimeout): unknown;
  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout;
};
export declare const MsgTimeoutResponse: {
  encode(message: MsgTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse;
  fromJSON(object: any): MsgTimeoutResponse;
  toJSON(message: MsgTimeoutResponse): unknown;
  fromPartial(object: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse;
};
export declare const MsgTimeoutOnClose: {
  encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose;
  fromJSON(object: any): MsgTimeoutOnClose;
  toJSON(message: MsgTimeoutOnClose): unknown;
  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
};
export declare const MsgTimeoutOnCloseResponse: {
  encode(message: MsgTimeoutOnCloseResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
  fromJSON(object: any): MsgTimeoutOnCloseResponse;
  toJSON(message: MsgTimeoutOnCloseResponse): unknown;
  fromPartial(object: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
};
export declare const MsgAcknowledgement: {
  encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement;
  fromJSON(object: any): MsgAcknowledgement;
  toJSON(message: MsgAcknowledgement): unknown;
  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement;
};
export declare const MsgAcknowledgementResponse: {
  encode(message: MsgAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse;
  fromJSON(object: any): MsgAcknowledgementResponse;
  toJSON(message: MsgAcknowledgementResponse): unknown;
  fromPartial(object: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
};
