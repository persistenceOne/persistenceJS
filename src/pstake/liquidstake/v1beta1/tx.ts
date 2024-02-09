/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params, WhitelistedValidator } from "./liquidstake";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.liquidstake.v1beta1";
/**
 * MsgLiquidStake defines a SDK message for performing a liquid stake of coins
 * from a delegator to whitelisted validators.
 */
export interface MsgLiquidStake {
  delegatorAddress: string;
  amount: Coin;
}
/** MsgLiquidStakeResponse defines the MsgLiquidStake response type. */
export interface MsgLiquidStakeResponse {}
/**
 * MsgStakeToLP defines a SDK message for performing an LSM-transfer of staked
 * XPRT into stkXPRT with locking into an LP.
 */
export interface MsgStakeToLP {
  delegatorAddress: string;
  validatorAddress: string;
  stakedAmount: Coin;
  liquidAmount: Coin;
}
/** MsgStakeToLPResponse defines the MsgStakeToLP response type. */
export interface MsgStakeToLPResponse {}
/**
 * MsgLiquidUnstake defines a SDK message for performing an undelegation of
 * liquid staking from a delegate.
 */
export interface MsgLiquidUnstake {
  delegatorAddress: string;
  amount: Coin;
}
/** MsgLiquidUnstakeResponse defines the MsgLiquidUnstake response type. */
export interface MsgLiquidUnstakeResponse {
  completionTime: Timestamp;
}
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the parameters to update.
   *
   * NOTE: denom and whitelisted validators are not updated.
   */
  params: Params;
}
/** MsgUpdateParamsResponse defines the response structure for executing a */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateWhitelistedValidators {
  /**
   * Authority is the address that is allowed to update whitelisted validators,
   * defined as admin address in params (WhitelistAdminAddress).
   */
  authority: string;
  /**
   * WhitelistedValidators specifies the validators elected to become Active
   * Liquid Validators.
   */
  whitelistedValidators: WhitelistedValidator[];
}
/**
 * MsgUpdateWhitelistedValidatorsResponse defines the response structure for
 * executing a
 */
export interface MsgUpdateWhitelistedValidatorsResponse {}
export interface MsgSetModulePaused {
  /**
   * Authority is the address that is allowed to update module's paused state,
   * defined as admin address in params (WhitelistAdminAddress).
   */
  authority: string;
  /** IsPaused represents the target state of the paused flag. */
  isPaused: boolean;
}
/**
 * MsgSetModulePausedResponse defines the response structure for
 * executing a
 */
export interface MsgSetModulePausedResponse {}
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({}),
  };
}
export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
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
  fromJSON(object: any): MsgLiquidStake {
    const obj = createBaseMsgLiquidStake();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}
export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();
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
  fromJSON(_: any): MsgLiquidStakeResponse {
    const obj = createBaseMsgLiquidStakeResponse();
    return obj;
  },
  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  },
};
function createBaseMsgStakeToLP(): MsgStakeToLP {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    stakedAmount: Coin.fromPartial({}),
    liquidAmount: Coin.fromPartial({}),
  };
}
export const MsgStakeToLP = {
  encode(message: MsgStakeToLP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.stakedAmount !== undefined) {
      Coin.encode(message.stakedAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.liquidAmount !== undefined) {
      Coin.encode(message.liquidAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeToLP {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeToLP();
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
          message.stakedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.liquidAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeToLP {
    const obj = createBaseMsgStakeToLP();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.stakedAmount)) obj.stakedAmount = Coin.fromJSON(object.stakedAmount);
    if (isSet(object.liquidAmount)) obj.liquidAmount = Coin.fromJSON(object.liquidAmount);
    return obj;
  },
  toJSON(message: MsgStakeToLP): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.stakedAmount !== undefined &&
      (obj.stakedAmount = message.stakedAmount ? Coin.toJSON(message.stakedAmount) : undefined);
    message.liquidAmount !== undefined &&
      (obj.liquidAmount = message.liquidAmount ? Coin.toJSON(message.liquidAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeToLP>): MsgStakeToLP {
    const message = createBaseMsgStakeToLP();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.stakedAmount !== undefined && object.stakedAmount !== null) {
      message.stakedAmount = Coin.fromPartial(object.stakedAmount);
    }
    if (object.liquidAmount !== undefined && object.liquidAmount !== null) {
      message.liquidAmount = Coin.fromPartial(object.liquidAmount);
    }
    return message;
  },
};
function createBaseMsgStakeToLPResponse(): MsgStakeToLPResponse {
  return {};
}
export const MsgStakeToLPResponse = {
  encode(_: MsgStakeToLPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeToLPResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeToLPResponse();
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
  fromJSON(_: any): MsgStakeToLPResponse {
    const obj = createBaseMsgStakeToLPResponse();
    return obj;
  },
  toJSON(_: MsgStakeToLPResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgStakeToLPResponse>): MsgStakeToLPResponse {
    const message = createBaseMsgStakeToLPResponse();
    return message;
  },
};
function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({}),
  };
}
export const MsgLiquidUnstake = {
  encode(message: MsgLiquidUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstake();
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
  fromJSON(object: any): MsgLiquidUnstake {
    const obj = createBaseMsgLiquidUnstake();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgLiquidUnstake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidUnstake>): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgLiquidUnstakeResponse(): MsgLiquidUnstakeResponse {
  return {
    completionTime: Timestamp.fromPartial({}),
  };
}
export const MsgLiquidUnstakeResponse = {
  encode(message: MsgLiquidUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstakeResponse();
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
  fromJSON(object: any): MsgLiquidUnstakeResponse {
    const obj = createBaseMsgLiquidUnstakeResponse();
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    return obj;
  },
  toJSON(message: MsgLiquidUnstakeResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<MsgLiquidUnstakeResponse>): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    return message;
  },
};
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
function createBaseMsgUpdateWhitelistedValidators(): MsgUpdateWhitelistedValidators {
  return {
    authority: "",
    whitelistedValidators: [],
  };
}
export const MsgUpdateWhitelistedValidators = {
  encode(
    message: MsgUpdateWhitelistedValidators,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWhitelistedValidators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWhitelistedValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWhitelistedValidators {
    const obj = createBaseMsgUpdateWhitelistedValidators();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.whitelistedValidators))
      obj.whitelistedValidators = object.whitelistedValidators.map((e: any) =>
        WhitelistedValidator.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: MsgUpdateWhitelistedValidators): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.whitelistedValidators) {
      obj.whitelistedValidators = message.whitelistedValidators.map((e) =>
        e ? WhitelistedValidator.toJSON(e) : undefined,
      );
    } else {
      obj.whitelistedValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWhitelistedValidators>): MsgUpdateWhitelistedValidators {
    const message = createBaseMsgUpdateWhitelistedValidators();
    message.authority = object.authority ?? "";
    message.whitelistedValidators =
      object.whitelistedValidators?.map((e) => WhitelistedValidator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgUpdateWhitelistedValidatorsResponse(): MsgUpdateWhitelistedValidatorsResponse {
  return {};
}
export const MsgUpdateWhitelistedValidatorsResponse = {
  encode(
    _: MsgUpdateWhitelistedValidatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWhitelistedValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWhitelistedValidatorsResponse();
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
  fromJSON(_: any): MsgUpdateWhitelistedValidatorsResponse {
    const obj = createBaseMsgUpdateWhitelistedValidatorsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateWhitelistedValidatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWhitelistedValidatorsResponse>): MsgUpdateWhitelistedValidatorsResponse {
    const message = createBaseMsgUpdateWhitelistedValidatorsResponse();
    return message;
  },
};
function createBaseMsgSetModulePaused(): MsgSetModulePaused {
  return {
    authority: "",
    isPaused: false,
  };
}
export const MsgSetModulePaused = {
  encode(message: MsgSetModulePaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.isPaused === true) {
      writer.uint32(16).bool(message.isPaused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetModulePaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModulePaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.isPaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetModulePaused {
    const obj = createBaseMsgSetModulePaused();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.isPaused)) obj.isPaused = Boolean(object.isPaused);
    return obj;
  },
  toJSON(message: MsgSetModulePaused): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.isPaused !== undefined && (obj.isPaused = message.isPaused);
    return obj;
  },
  fromPartial(object: Partial<MsgSetModulePaused>): MsgSetModulePaused {
    const message = createBaseMsgSetModulePaused();
    message.authority = object.authority ?? "";
    message.isPaused = object.isPaused ?? false;
    return message;
  },
};
function createBaseMsgSetModulePausedResponse(): MsgSetModulePausedResponse {
  return {};
}
export const MsgSetModulePausedResponse = {
  encode(_: MsgSetModulePausedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetModulePausedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModulePausedResponse();
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
  fromJSON(_: any): MsgSetModulePausedResponse {
    const obj = createBaseMsgSetModulePausedResponse();
    return obj;
  },
  toJSON(_: MsgSetModulePausedResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetModulePausedResponse>): MsgSetModulePausedResponse {
    const message = createBaseMsgSetModulePausedResponse();
    return message;
  },
};
/** Msg defines the liquid staking Msg service. */
export interface Msg {
  /**
   * LiquidStake defines a method for performing a delegation of coins
   * from a delegator to whitelisted validators.
   */
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  /**
   * LiquidUnstake defines a method for performing an undelegation of liquid
   * staking from a delegate.
   */
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
  /**
   * StakeToLP defines a method for LSM-transfer of staked XPRT
   * into stkXPRT with locking into an LP.
   */
  StakeToLP(request: MsgStakeToLP): Promise<MsgStakeToLPResponse>;
  /** UpdateParams defines a method to update the module params. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateWhitelistedValidators defines a method to update the whitelisted
   * validators list.
   */
  UpdateWhitelistedValidators(
    request: MsgUpdateWhitelistedValidators,
  ): Promise<MsgUpdateWhitelistedValidatorsResponse>;
  /**
   * SetModulePaused  defines a method to update the module's pause status,
   * setting value of the safety flag in params.
   */
  SetModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidStake = this.LiquidStake.bind(this);
    this.LiquidUnstake = this.LiquidUnstake.bind(this);
    this.StakeToLP = this.StakeToLP.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.UpdateWhitelistedValidators = this.UpdateWhitelistedValidators.bind(this);
    this.SetModulePaused = this.SetModulePaused.bind(this);
  }
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Msg", "LiquidStake", data);
    return promise.then((data) => MsgLiquidStakeResponse.decode(new BinaryReader(data)));
  }
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Msg", "LiquidUnstake", data);
    return promise.then((data) => MsgLiquidUnstakeResponse.decode(new BinaryReader(data)));
  }
  StakeToLP(request: MsgStakeToLP): Promise<MsgStakeToLPResponse> {
    const data = MsgStakeToLP.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Msg", "StakeToLP", data);
    return promise.then((data) => MsgStakeToLPResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  UpdateWhitelistedValidators(
    request: MsgUpdateWhitelistedValidators,
  ): Promise<MsgUpdateWhitelistedValidatorsResponse> {
    const data = MsgUpdateWhitelistedValidators.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Msg", "UpdateWhitelistedValidators", data);
    return promise.then((data) => MsgUpdateWhitelistedValidatorsResponse.decode(new BinaryReader(data)));
  }
  SetModulePaused(request: MsgSetModulePaused): Promise<MsgSetModulePausedResponse> {
    const data = MsgSetModulePaused.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Msg", "SetModulePaused", data);
    return promise.then((data) => MsgSetModulePausedResponse.decode(new BinaryReader(data)));
  }
}
