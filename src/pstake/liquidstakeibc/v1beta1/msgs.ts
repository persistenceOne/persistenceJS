/* eslint-disable */
import { KVUpdate } from "./liquidstakeibc";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "pstake.liquidstakeibc.v1beta1";
export interface MsgRegisterHostChain {
  /** authority is the address of the governance account */
  authority: string;
  connectionId: string;
  depositFee: string;
  restakeFee: string;
  unstakeFee: string;
  redemptionFee: string;
  channelId: string;
  portId: string;
  hostDenom: string;
  minimumDeposit: string;
  unbondingFactor: Long;
  autoCompoundFactor: Long;
}
export interface MsgRegisterHostChainResponse {}
export interface MsgUpdateHostChain {
  /** authority is the address of the governance account */
  authority: string;
  chainId: string;
  updates: KVUpdate[];
}
export interface MsgUpdateHostChainResponse {}
export interface MsgLiquidStake {
  delegatorAddress: string;
  amount?: Coin;
}
export interface MsgLiquidStakeResponse {}
export interface MsgLiquidStakeLSM {
  delegatorAddress: string;
  delegations: Coin[];
}
export interface MsgLiquidStakeLSMResponse {}
export interface MsgLiquidUnstake {
  delegatorAddress: string;
  amount?: Coin;
}
export interface MsgLiquidUnstakeResponse {}
export interface MsgRedeem {
  delegatorAddress: string;
  amount?: Coin;
}
export interface MsgRedeemResponse {}
export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}
export interface MsgUpdateParamsResponse {}
function createBaseMsgRegisterHostChain(): MsgRegisterHostChain {
  return {
    authority: "",
    connectionId: "",
    depositFee: "",
    restakeFee: "",
    unstakeFee: "",
    redemptionFee: "",
    channelId: "",
    portId: "",
    hostDenom: "",
    minimumDeposit: "",
    unbondingFactor: Long.ZERO,
    autoCompoundFactor: Long.ZERO,
  };
}
export const MsgRegisterHostChain = {
  encode(message: MsgRegisterHostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.depositFee !== "") {
      writer.uint32(26).string(message.depositFee);
    }
    if (message.restakeFee !== "") {
      writer.uint32(34).string(message.restakeFee);
    }
    if (message.unstakeFee !== "") {
      writer.uint32(42).string(message.unstakeFee);
    }
    if (message.redemptionFee !== "") {
      writer.uint32(50).string(message.redemptionFee);
    }
    if (message.channelId !== "") {
      writer.uint32(58).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(66).string(message.portId);
    }
    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }
    if (message.minimumDeposit !== "") {
      writer.uint32(82).string(message.minimumDeposit);
    }
    if (!message.unbondingFactor.isZero()) {
      writer.uint32(88).int64(message.unbondingFactor);
    }
    if (!message.autoCompoundFactor.isZero()) {
      writer.uint32(96).int64(message.autoCompoundFactor);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.depositFee = reader.string();
          break;
        case 4:
          message.restakeFee = reader.string();
          break;
        case 5:
          message.unstakeFee = reader.string();
          break;
        case 6:
          message.redemptionFee = reader.string();
          break;
        case 7:
          message.channelId = reader.string();
          break;
        case 8:
          message.portId = reader.string();
          break;
        case 9:
          message.hostDenom = reader.string();
          break;
        case 10:
          message.minimumDeposit = reader.string();
          break;
        case 11:
          message.unbondingFactor = reader.int64() as Long;
          break;
        case 12:
          message.autoCompoundFactor = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterHostChain {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      restakeFee: isSet(object.restakeFee) ? String(object.restakeFee) : "",
      unstakeFee: isSet(object.unstakeFee) ? String(object.unstakeFee) : "",
      redemptionFee: isSet(object.redemptionFee) ? String(object.redemptionFee) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      minimumDeposit: isSet(object.minimumDeposit) ? String(object.minimumDeposit) : "",
      unbondingFactor: isSet(object.unbondingFactor) ? Long.fromValue(object.unbondingFactor) : Long.ZERO,
      autoCompoundFactor: isSet(object.autoCompoundFactor)
        ? Long.fromValue(object.autoCompoundFactor)
        : Long.ZERO,
    };
  },
  toJSON(message: MsgRegisterHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.restakeFee !== undefined && (obj.restakeFee = message.restakeFee);
    message.unstakeFee !== undefined && (obj.unstakeFee = message.unstakeFee);
    message.redemptionFee !== undefined && (obj.redemptionFee = message.redemptionFee);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.hostDenom !== undefined && (obj.hostDenom = message.hostDenom);
    message.minimumDeposit !== undefined && (obj.minimumDeposit = message.minimumDeposit);
    message.unbondingFactor !== undefined &&
      (obj.unbondingFactor = (message.unbondingFactor || Long.ZERO).toString());
    message.autoCompoundFactor !== undefined &&
      (obj.autoCompoundFactor = (message.autoCompoundFactor || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterHostChain>, I>>(object: I): MsgRegisterHostChain {
    const message = createBaseMsgRegisterHostChain();
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    message.depositFee = object.depositFee ?? "";
    message.restakeFee = object.restakeFee ?? "";
    message.unstakeFee = object.unstakeFee ?? "";
    message.redemptionFee = object.redemptionFee ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.minimumDeposit = object.minimumDeposit ?? "";
    message.unbondingFactor =
      object.unbondingFactor !== undefined && object.unbondingFactor !== null
        ? Long.fromValue(object.unbondingFactor)
        : Long.ZERO;
    message.autoCompoundFactor =
      object.autoCompoundFactor !== undefined && object.autoCompoundFactor !== null
        ? Long.fromValue(object.autoCompoundFactor)
        : Long.ZERO;
    return message;
  },
};
function createBaseMsgRegisterHostChainResponse(): MsgRegisterHostChainResponse {
  return {};
}
export const MsgRegisterHostChainResponse = {
  encode(_: MsgRegisterHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChainResponse();
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
  fromJSON(_: any): MsgRegisterHostChainResponse {
    return {};
  },
  toJSON(_: MsgRegisterHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterHostChainResponse>, I>>(
    _: I,
  ): MsgRegisterHostChainResponse {
    const message = createBaseMsgRegisterHostChainResponse();
    return message;
  },
};
function createBaseMsgUpdateHostChain(): MsgUpdateHostChain {
  return {
    authority: "",
    chainId: "",
    updates: [],
  };
}
export const MsgUpdateHostChain = {
  encode(message: MsgUpdateHostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    for (const v of message.updates) {
      KVUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.updates.push(KVUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateHostChain {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => KVUpdate.fromJSON(e)) : [],
    };
  },
  toJSON(message: MsgUpdateHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.updates) {
      obj.updates = message.updates.map((e) => (e ? KVUpdate.toJSON(e) : undefined));
    } else {
      obj.updates = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateHostChain>, I>>(object: I): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    message.authority = object.authority ?? "";
    message.chainId = object.chainId ?? "";
    message.updates = object.updates?.map((e) => KVUpdate.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgUpdateHostChainResponse(): MsgUpdateHostChainResponse {
  return {};
}
export const MsgUpdateHostChainResponse = {
  encode(_: MsgUpdateHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChainResponse();
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
  fromJSON(_: any): MsgUpdateHostChainResponse {
    return {};
  },
  toJSON(_: MsgUpdateHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateHostChainResponse>, I>>(_: I): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
};
function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    delegatorAddress: "",
    amount: undefined,
  };
}
export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },
  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidStake>, I>>(object: I): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};
function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}
export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },
  toJSON(_: MsgLiquidStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidStakeResponse>, I>>(_: I): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  },
};
function createBaseMsgLiquidStakeLSM(): MsgLiquidStakeLSM {
  return {
    delegatorAddress: "",
    delegations: [],
  };
}
export const MsgLiquidStakeLSM = {
  encode(message: MsgLiquidStakeLSM, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    for (const v of message.delegations) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeLSM {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeLSM();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.delegations.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLiquidStakeLSM {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },
  toJSON(message: MsgLiquidStakeLSM): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidStakeLSM>, I>>(object: I): MsgLiquidStakeLSM {
    const message = createBaseMsgLiquidStakeLSM();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.delegations = object.delegations?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgLiquidStakeLSMResponse(): MsgLiquidStakeLSMResponse {
  return {};
}
export const MsgLiquidStakeLSMResponse = {
  encode(_: MsgLiquidStakeLSMResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeLSMResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeLSMResponse();
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
  fromJSON(_: any): MsgLiquidStakeLSMResponse {
    return {};
  },
  toJSON(_: MsgLiquidStakeLSMResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidStakeLSMResponse>, I>>(_: I): MsgLiquidStakeLSMResponse {
    const message = createBaseMsgLiquidStakeLSMResponse();
    return message;
  },
};
function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return {
    delegatorAddress: "",
    amount: undefined,
  };
}
export const MsgLiquidUnstake = {
  encode(message: MsgLiquidUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },
  toJSON(message: MsgLiquidUnstake): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidUnstake>, I>>(object: I): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};
function createBaseMsgLiquidUnstakeResponse(): MsgLiquidUnstakeResponse {
  return {};
}
export const MsgLiquidUnstakeResponse = {
  encode(_: MsgLiquidUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstakeResponse();
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
  fromJSON(_: any): MsgLiquidUnstakeResponse {
    return {};
  },
  toJSON(_: MsgLiquidUnstakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidUnstakeResponse>, I>>(_: I): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    return message;
  },
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    delegatorAddress: "",
    amount: undefined,
  };
}
export const MsgRedeem = {
  encode(message: MsgRedeem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeem();
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
  fromJSON(object: any): MsgRedeem {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },
  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedeem>, I>>(object: I): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {};
}
export const MsgRedeemResponse = {
  encode(_: MsgRedeemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemResponse();
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
  fromJSON(_: any): MsgRedeemResponse {
    return {};
  },
  toJSON(_: MsgRedeemResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedeemResponse>, I>>(_: I): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined,
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
/** Msg defines the liquidstakeibc services. */
export interface Msg {
  RegisterHostChain(request: MsgRegisterHostChain): Promise<MsgRegisterHostChainResponse>;
  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse>;
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  LiquidStakeLSM(request: MsgLiquidStakeLSM): Promise<MsgLiquidStakeLSMResponse>;
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterHostChain = this.RegisterHostChain.bind(this);
    this.UpdateHostChain = this.UpdateHostChain.bind(this);
    this.LiquidStake = this.LiquidStake.bind(this);
    this.LiquidStakeLSM = this.LiquidStakeLSM.bind(this);
    this.LiquidUnstake = this.LiquidUnstake.bind(this);
    this.Redeem = this.Redeem.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterHostChain(request: MsgRegisterHostChain): Promise<MsgRegisterHostChainResponse> {
    const data = MsgRegisterHostChain.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "RegisterHostChain", data);
    return promise.then((data) => MsgRegisterHostChainResponse.decode(new _m0.Reader(data)));
  }
  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse> {
    const data = MsgUpdateHostChain.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "UpdateHostChain", data);
    return promise.then((data) => MsgUpdateHostChainResponse.decode(new _m0.Reader(data)));
  }
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "LiquidStake", data);
    return promise.then((data) => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }
  LiquidStakeLSM(request: MsgLiquidStakeLSM): Promise<MsgLiquidStakeLSMResponse> {
    const data = MsgLiquidStakeLSM.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "LiquidStakeLSM", data);
    return promise.then((data) => MsgLiquidStakeLSMResponse.decode(new _m0.Reader(data)));
  }
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "LiquidUnstake", data);
    return promise.then((data) => MsgLiquidUnstakeResponse.decode(new _m0.Reader(data)));
  }
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "Redeem", data);
    return promise.then((data) => MsgRedeemResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}
