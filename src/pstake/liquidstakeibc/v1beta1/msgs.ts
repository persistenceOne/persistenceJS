/* eslint-disable */
import { KVUpdate } from "./liquidstakeibc";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
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
  unbondingFactor: bigint;
  autoCompoundFactor: bigint;
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
  amount: Coin;
}
export interface MsgLiquidStakeResponse {}
export interface MsgLiquidStakeLSM {
  delegatorAddress: string;
  delegations: Coin[];
}
export interface MsgLiquidStakeLSMResponse {}
export interface MsgLiquidUnstake {
  delegatorAddress: string;
  amount: Coin;
}
export interface MsgLiquidUnstakeResponse {}
export interface MsgRedeem {
  delegatorAddress: string;
  amount: Coin;
}
export interface MsgRedeemResponse {}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
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
    unbondingFactor: BigInt(0),
    autoCompoundFactor: BigInt(0),
  };
}
export const MsgRegisterHostChain = {
  encode(message: MsgRegisterHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.unbondingFactor !== BigInt(0)) {
      writer.uint32(88).int64(message.unbondingFactor);
    }
    if (message.autoCompoundFactor !== BigInt(0)) {
      writer.uint32(96).int64(message.autoCompoundFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.unbondingFactor = reader.int64();
          break;
        case 12:
          message.autoCompoundFactor = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterHostChain {
    const obj = createBaseMsgRegisterHostChain();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.depositFee)) obj.depositFee = String(object.depositFee);
    if (isSet(object.restakeFee)) obj.restakeFee = String(object.restakeFee);
    if (isSet(object.unstakeFee)) obj.unstakeFee = String(object.unstakeFee);
    if (isSet(object.redemptionFee)) obj.redemptionFee = String(object.redemptionFee);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.hostDenom)) obj.hostDenom = String(object.hostDenom);
    if (isSet(object.minimumDeposit)) obj.minimumDeposit = String(object.minimumDeposit);
    if (isSet(object.unbondingFactor)) obj.unbondingFactor = BigInt(object.unbondingFactor.toString());
    if (isSet(object.autoCompoundFactor))
      obj.autoCompoundFactor = BigInt(object.autoCompoundFactor.toString());
    return obj;
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
      (obj.unbondingFactor = (message.unbondingFactor || BigInt(0)).toString());
    message.autoCompoundFactor !== undefined &&
      (obj.autoCompoundFactor = (message.autoCompoundFactor || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterHostChain>): MsgRegisterHostChain {
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
    if (object.unbondingFactor !== undefined && object.unbondingFactor !== null) {
      message.unbondingFactor = BigInt(object.unbondingFactor.toString());
    }
    if (object.autoCompoundFactor !== undefined && object.autoCompoundFactor !== null) {
      message.autoCompoundFactor = BigInt(object.autoCompoundFactor.toString());
    }
    return message;
  },
};
function createBaseMsgRegisterHostChainResponse(): MsgRegisterHostChainResponse {
  return {};
}
export const MsgRegisterHostChainResponse = {
  encode(_: MsgRegisterHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgRegisterHostChainResponse();
    return obj;
  },
  toJSON(_: MsgRegisterHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterHostChainResponse>): MsgRegisterHostChainResponse {
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
  encode(message: MsgUpdateHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgUpdateHostChain();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (Array.isArray(object?.updates)) obj.updates = object.updates.map((e: any) => KVUpdate.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<MsgUpdateHostChain>): MsgUpdateHostChain {
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
  encode(_: MsgUpdateHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgUpdateHostChainResponse();
    return obj;
  },
  toJSON(_: MsgUpdateHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateHostChainResponse>): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
};
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
function createBaseMsgLiquidStakeLSM(): MsgLiquidStakeLSM {
  return {
    delegatorAddress: "",
    delegations: [],
  };
}
export const MsgLiquidStakeLSM = {
  encode(message: MsgLiquidStakeLSM, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    for (const v of message.delegations) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStakeLSM {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgLiquidStakeLSM();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (Array.isArray(object?.delegations))
      obj.delegations = object.delegations.map((e: any) => Coin.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<MsgLiquidStakeLSM>): MsgLiquidStakeLSM {
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
  encode(_: MsgLiquidStakeLSMResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidStakeLSMResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgLiquidStakeLSMResponse();
    return obj;
  },
  toJSON(_: MsgLiquidStakeLSMResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgLiquidStakeLSMResponse>): MsgLiquidStakeLSMResponse {
    const message = createBaseMsgLiquidStakeLSMResponse();
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
  return {};
}
export const MsgLiquidUnstakeResponse = {
  encode(_: MsgLiquidUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgLiquidUnstakeResponse();
    return obj;
  },
  toJSON(_: MsgLiquidUnstakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgLiquidUnstakeResponse>): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    return message;
  },
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({}),
  };
}
export const MsgRedeem = {
  encode(message: MsgRedeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgRedeem();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeem>): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.delegatorAddress = object.delegatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {};
}
export const MsgRedeemResponse = {
  encode(_: MsgRedeemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseMsgRedeemResponse();
    return obj;
  },
  toJSON(_: MsgRedeemResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
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
    return promise.then((data) => MsgRegisterHostChainResponse.decode(new BinaryReader(data)));
  }
  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse> {
    const data = MsgUpdateHostChain.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "UpdateHostChain", data);
    return promise.then((data) => MsgUpdateHostChainResponse.decode(new BinaryReader(data)));
  }
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "LiquidStake", data);
    return promise.then((data) => MsgLiquidStakeResponse.decode(new BinaryReader(data)));
  }
  LiquidStakeLSM(request: MsgLiquidStakeLSM): Promise<MsgLiquidStakeLSMResponse> {
    const data = MsgLiquidStakeLSM.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "LiquidStakeLSM", data);
    return promise.then((data) => MsgLiquidStakeLSMResponse.decode(new BinaryReader(data)));
  }
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "LiquidUnstake", data);
    return promise.then((data) => MsgLiquidUnstakeResponse.decode(new BinaryReader(data)));
  }
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "Redeem", data);
    return promise.then((data) => MsgRedeemResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
