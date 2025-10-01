/* eslint-disable */
import { Params } from "./liquid";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
export const protobufPackage = "gaia.liquid.v1beta1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/liquid parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
  tokenizedShareOwner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
  amount: Coin;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
  delegatorAddress: string;
  amount: Coin;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
  amount: Coin;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
  tokenizeShareRecordId: bigint;
  sender: string;
  newOwner: string;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
  delegatorAddress: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
  delegatorAddress: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
  completionTime: Timestamp;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
  ownerAddress: string;
  recordId: bigint;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
  ownerAddress: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    tokenizedShareOwner: "",
  };
}
export const MsgTokenizeShares = {
  encode(message: MsgTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenizedShareOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeShares {
    const obj = createBaseMsgTokenizeShares();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.tokenizedShareOwner)) obj.tokenizedShareOwner = String(object.tokenizedShareOwner);
    return obj;
  },
  toJSON(message: MsgTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.tokenizedShareOwner !== undefined && (obj.tokenizedShareOwner = message.tokenizedShareOwner);
    return obj;
  },
  fromPartial(object: Partial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  },
};
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const MsgTokenizeSharesResponse = {
  encode(message: MsgTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeSharesResponse {
    const obj = createBaseMsgTokenizeSharesResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({}),
  };
}
export const MsgRedeemTokensForShares = {
  encode(message: MsgRedeemTokensForShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemTokensForShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForShares {
    const obj = createBaseMsgRedeemTokensForShares();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgRedeemTokensForShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const MsgRedeemTokensForSharesResponse = {
  encode(
    message: MsgRedeemTokensForSharesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForSharesResponse {
    const obj = createBaseMsgRedeemTokensForSharesResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgRedeemTokensForSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenizeShareRecordId: BigInt(0),
    sender: "",
    newOwner: "",
  };
}
export const MsgTransferTokenizeShareRecord = {
  encode(
    message: MsgTransferTokenizeShareRecord,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenizeShareRecordId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferTokenizeShareRecord {
    const obj = createBaseMsgTransferTokenizeShareRecord();
    if (isSet(object.tokenizeShareRecordId))
      obj.tokenizeShareRecordId = BigInt(object.tokenizeShareRecordId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.newOwner)) obj.newOwner = String(object.newOwner);
    return obj;
  },
  toJSON(message: MsgTransferTokenizeShareRecord): unknown {
    const obj: any = {};
    message.tokenizeShareRecordId !== undefined &&
      (obj.tokenizeShareRecordId = (message.tokenizeShareRecordId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },
  fromPartial(object: Partial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    if (object.tokenizeShareRecordId !== undefined && object.tokenizeShareRecordId !== null) {
      message.tokenizeShareRecordId = BigInt(object.tokenizeShareRecordId.toString());
    }
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};
function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
  encode(
    _: MsgTransferTokenizeShareRecordResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTransferTokenizeShareRecordResponse {
    const obj = createBaseMsgTransferTokenizeShareRecordResponse();
    return obj;
  },
  toJSON(_: MsgTransferTokenizeShareRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
};
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegatorAddress: "",
  };
}
export const MsgDisableTokenizeShares = {
  encode(message: MsgDisableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDisableTokenizeShares {
    const obj = createBaseMsgDisableTokenizeShares();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: MsgDisableTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  encode(_: MsgDisableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDisableTokenizeSharesResponse {
    const obj = createBaseMsgDisableTokenizeSharesResponse();
    return obj;
  },
  toJSON(_: MsgDisableTokenizeSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
};
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegatorAddress: "",
  };
}
export const MsgEnableTokenizeShares = {
  encode(message: MsgEnableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEnableTokenizeShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeShares {
    const obj = createBaseMsgEnableTokenizeShares();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: MsgEnableTokenizeShares): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completionTime: Timestamp.fromPartial({}),
  };
}
export const MsgEnableTokenizeSharesResponse = {
  encode(
    message: MsgEnableTokenizeSharesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeSharesResponse {
    const obj = createBaseMsgEnableTokenizeSharesResponse();
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    return obj;
  },
  toJSON(message: MsgEnableTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    return message;
  },
};
function createBaseMsgWithdrawTokenizeShareRecordReward(): MsgWithdrawTokenizeShareRecordReward {
  return {
    ownerAddress: "",
    recordId: BigInt(0),
  };
}
export const MsgWithdrawTokenizeShareRecordReward = {
  encode(
    message: MsgWithdrawTokenizeShareRecordReward,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.recordId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward {
    const obj = createBaseMsgWithdrawTokenizeShareRecordReward();
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.recordId)) obj.recordId = BigInt(object.recordId.toString());
    return obj;
  },
  toJSON(message: MsgWithdrawTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.recordId !== undefined && (obj.recordId = (message.recordId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    if (object.recordId !== undefined && object.recordId !== null) {
      message.recordId = BigInt(object.recordId.toString());
    }
    return message;
  },
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse(): MsgWithdrawTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  encode(
    _: MsgWithdrawTokenizeShareRecordRewardResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse {
    const obj = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(
    _: Partial<MsgWithdrawTokenizeShareRecordRewardResponse>,
  ): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward(): MsgWithdrawAllTokenizeShareRecordReward {
  return {
    ownerAddress: "",
  };
}
export const MsgWithdrawAllTokenizeShareRecordReward = {
  encode(
    message: MsgWithdrawAllTokenizeShareRecordReward,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward {
    const obj = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    return obj;
  },
  toJSON(message: MsgWithdrawAllTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial(
    object: Partial<MsgWithdrawAllTokenizeShareRecordReward>,
  ): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse(): MsgWithdrawAllTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  encode(
    _: MsgWithdrawAllTokenizeShareRecordRewardResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const obj = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(
    _: Partial<MsgWithdrawAllTokenizeShareRecordRewardResponse>,
  ): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
};
/** Msg defines the liquid Msg service. */
export interface Msg {
  /**
   * UpdateParams defines an operation for updating the x/liquid module
   * parameters.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** TokenizeShares defines a method for tokenizing shares from a validator. */
  TokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse>;
  /**
   * RedeemTokensForShares defines a method for redeeming tokens from a
   * validator for shares.
   */
  RedeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse>;
  /**
   * TransferTokenizeShareRecord defines a method to transfer ownership of
   * TokenizeShareRecord
   */
  TransferTokenizeShareRecord(
    request: MsgTransferTokenizeShareRecord,
  ): Promise<MsgTransferTokenizeShareRecordResponse>;
  /**
   * DisableTokenizeShares defines a method to prevent the tokenization of an
   * addresses stake
   */
  DisableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse>;
  /**
   * EnableTokenizeShares defines a method to re-enable the tokenization of an
   * addresseses stake after it has been disabled
   */
  EnableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse>;
  /**
   * WithdrawTokenizeShareRecordReward defines a method to withdraw reward for
   * an owning TokenizeShareRecord
   */
  WithdrawTokenizeShareRecordReward(
    request: MsgWithdrawTokenizeShareRecordReward,
  ): Promise<MsgWithdrawTokenizeShareRecordRewardResponse>;
  /**
   * WithdrawAllTokenizeShareRecordReward defines a method to withdraw reward
   * for all owning TokenizeShareRecord
   */
  WithdrawAllTokenizeShareRecordReward(
    request: MsgWithdrawAllTokenizeShareRecordReward,
  ): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.TokenizeShares = this.TokenizeShares.bind(this);
    this.RedeemTokensForShares = this.RedeemTokensForShares.bind(this);
    this.TransferTokenizeShareRecord = this.TransferTokenizeShareRecord.bind(this);
    this.DisableTokenizeShares = this.DisableTokenizeShares.bind(this);
    this.EnableTokenizeShares = this.EnableTokenizeShares.bind(this);
    this.WithdrawTokenizeShareRecordReward = this.WithdrawTokenizeShareRecordReward.bind(this);
    this.WithdrawAllTokenizeShareRecordReward = this.WithdrawAllTokenizeShareRecordReward.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  TokenizeShares(request: MsgTokenizeShares): Promise<MsgTokenizeSharesResponse> {
    const data = MsgTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TokenizeShares", data);
    return promise.then((data) => MsgTokenizeSharesResponse.decode(new BinaryReader(data)));
  }
  RedeemTokensForShares(request: MsgRedeemTokensForShares): Promise<MsgRedeemTokensForSharesResponse> {
    const data = MsgRedeemTokensForShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "RedeemTokensForShares", data);
    return promise.then((data) => MsgRedeemTokensForSharesResponse.decode(new BinaryReader(data)));
  }
  TransferTokenizeShareRecord(
    request: MsgTransferTokenizeShareRecord,
  ): Promise<MsgTransferTokenizeShareRecordResponse> {
    const data = MsgTransferTokenizeShareRecord.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "TransferTokenizeShareRecord", data);
    return promise.then((data) => MsgTransferTokenizeShareRecordResponse.decode(new BinaryReader(data)));
  }
  DisableTokenizeShares(request: MsgDisableTokenizeShares): Promise<MsgDisableTokenizeSharesResponse> {
    const data = MsgDisableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "DisableTokenizeShares", data);
    return promise.then((data) => MsgDisableTokenizeSharesResponse.decode(new BinaryReader(data)));
  }
  EnableTokenizeShares(request: MsgEnableTokenizeShares): Promise<MsgEnableTokenizeSharesResponse> {
    const data = MsgEnableTokenizeShares.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "EnableTokenizeShares", data);
    return promise.then((data) => MsgEnableTokenizeSharesResponse.decode(new BinaryReader(data)));
  }
  WithdrawTokenizeShareRecordReward(
    request: MsgWithdrawTokenizeShareRecordReward,
  ): Promise<MsgWithdrawTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawTokenizeShareRecordReward", data);
    return promise.then((data) =>
      MsgWithdrawTokenizeShareRecordRewardResponse.decode(new BinaryReader(data)),
    );
  }
  WithdrawAllTokenizeShareRecordReward(
    request: MsgWithdrawAllTokenizeShareRecordReward,
  ): Promise<MsgWithdrawAllTokenizeShareRecordRewardResponse> {
    const data = MsgWithdrawAllTokenizeShareRecordReward.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Msg", "WithdrawAllTokenizeShareRecordReward", data);
    return promise.then((data) =>
      MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(new BinaryReader(data)),
    );
  }
}
