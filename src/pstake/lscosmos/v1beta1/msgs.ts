/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AllowListedValidators, PstakeParams, HostAccounts } from "./lscosmos";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
export interface MsgLiquidStake {
  delegatorAddress: string;
  amount: Coin;
}
export interface MsgLiquidStakeResponse {}
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
export interface MsgClaim {
  delegatorAddress: string;
}
export interface MsgClaimResponse {}
export interface MsgRecreateICA {
  fromAddress: string;
}
export interface MsgRecreateICAResponse {}
export interface MsgJumpStart {
  pstakeAddress: string;
  chainID: string;
  connectionID: string;
  transferChannel: string;
  transferPort: string;
  baseDenom: string;
  mintDenom: string;
  minDeposit: string;
  allowListedValidators: AllowListedValidators;
  pstakeParams: PstakeParams;
  hostAccounts: HostAccounts;
}
export interface MsgJumpStartResponse {}
export interface MsgChangeModuleState {
  pstakeAddress: string;
  moduleState: boolean;
}
export interface MsgChangeModuleStateResponse {}
export interface MsgReportSlashing {
  pstakeAddress: string;
  validatorAddress: string;
}
export interface MsgReportSlashingResponse {}
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
function createBaseMsgClaim(): MsgClaim {
  return {
    delegatorAddress: "",
  };
}
export const MsgClaim = {
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
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
  fromJSON(object: any): MsgClaim {
    const obj = createBaseMsgClaim();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
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
  fromJSON(_: any): MsgClaimResponse {
    const obj = createBaseMsgClaimResponse();
    return obj;
  },
  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
};
function createBaseMsgRecreateICA(): MsgRecreateICA {
  return {
    fromAddress: "",
  };
}
export const MsgRecreateICA = {
  encode(message: MsgRecreateICA, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecreateICA {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecreateICA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecreateICA {
    const obj = createBaseMsgRecreateICA();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    return obj;
  },
  toJSON(message: MsgRecreateICA): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgRecreateICA>): MsgRecreateICA {
    const message = createBaseMsgRecreateICA();
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
};
function createBaseMsgRecreateICAResponse(): MsgRecreateICAResponse {
  return {};
}
export const MsgRecreateICAResponse = {
  encode(_: MsgRecreateICAResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecreateICAResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecreateICAResponse();
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
  fromJSON(_: any): MsgRecreateICAResponse {
    const obj = createBaseMsgRecreateICAResponse();
    return obj;
  },
  toJSON(_: MsgRecreateICAResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRecreateICAResponse>): MsgRecreateICAResponse {
    const message = createBaseMsgRecreateICAResponse();
    return message;
  },
};
function createBaseMsgJumpStart(): MsgJumpStart {
  return {
    pstakeAddress: "",
    chainID: "",
    connectionID: "",
    transferChannel: "",
    transferPort: "",
    baseDenom: "",
    mintDenom: "",
    minDeposit: "",
    allowListedValidators: AllowListedValidators.fromPartial({}),
    pstakeParams: PstakeParams.fromPartial({}),
    hostAccounts: HostAccounts.fromPartial({}),
  };
}
export const MsgJumpStart = {
  encode(message: MsgJumpStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pstakeAddress !== "") {
      writer.uint32(10).string(message.pstakeAddress);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.connectionID !== "") {
      writer.uint32(26).string(message.connectionID);
    }
    if (message.transferChannel !== "") {
      writer.uint32(34).string(message.transferChannel);
    }
    if (message.transferPort !== "") {
      writer.uint32(42).string(message.transferPort);
    }
    if (message.baseDenom !== "") {
      writer.uint32(50).string(message.baseDenom);
    }
    if (message.mintDenom !== "") {
      writer.uint32(58).string(message.mintDenom);
    }
    if (message.minDeposit !== "") {
      writer.uint32(66).string(message.minDeposit);
    }
    if (message.allowListedValidators !== undefined) {
      AllowListedValidators.encode(message.allowListedValidators, writer.uint32(74).fork()).ldelim();
    }
    if (message.pstakeParams !== undefined) {
      PstakeParams.encode(message.pstakeParams, writer.uint32(82).fork()).ldelim();
    }
    if (message.hostAccounts !== undefined) {
      HostAccounts.encode(message.hostAccounts, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJumpStart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJumpStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pstakeAddress = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.connectionID = reader.string();
          break;
        case 4:
          message.transferChannel = reader.string();
          break;
        case 5:
          message.transferPort = reader.string();
          break;
        case 6:
          message.baseDenom = reader.string();
          break;
        case 7:
          message.mintDenom = reader.string();
          break;
        case 8:
          message.minDeposit = reader.string();
          break;
        case 9:
          message.allowListedValidators = AllowListedValidators.decode(reader, reader.uint32());
          break;
        case 10:
          message.pstakeParams = PstakeParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.hostAccounts = HostAccounts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJumpStart {
    const obj = createBaseMsgJumpStart();
    if (isSet(object.pstakeAddress)) obj.pstakeAddress = String(object.pstakeAddress);
    if (isSet(object.chainID)) obj.chainID = String(object.chainID);
    if (isSet(object.connectionID)) obj.connectionID = String(object.connectionID);
    if (isSet(object.transferChannel)) obj.transferChannel = String(object.transferChannel);
    if (isSet(object.transferPort)) obj.transferPort = String(object.transferPort);
    if (isSet(object.baseDenom)) obj.baseDenom = String(object.baseDenom);
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (isSet(object.minDeposit)) obj.minDeposit = String(object.minDeposit);
    if (isSet(object.allowListedValidators))
      obj.allowListedValidators = AllowListedValidators.fromJSON(object.allowListedValidators);
    if (isSet(object.pstakeParams)) obj.pstakeParams = PstakeParams.fromJSON(object.pstakeParams);
    if (isSet(object.hostAccounts)) obj.hostAccounts = HostAccounts.fromJSON(object.hostAccounts);
    return obj;
  },
  toJSON(message: MsgJumpStart): unknown {
    const obj: any = {};
    message.pstakeAddress !== undefined && (obj.pstakeAddress = message.pstakeAddress);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.connectionID !== undefined && (obj.connectionID = message.connectionID);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.transferPort !== undefined && (obj.transferPort = message.transferPort);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    message.allowListedValidators !== undefined &&
      (obj.allowListedValidators = message.allowListedValidators
        ? AllowListedValidators.toJSON(message.allowListedValidators)
        : undefined);
    message.pstakeParams !== undefined &&
      (obj.pstakeParams = message.pstakeParams ? PstakeParams.toJSON(message.pstakeParams) : undefined);
    message.hostAccounts !== undefined &&
      (obj.hostAccounts = message.hostAccounts ? HostAccounts.toJSON(message.hostAccounts) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgJumpStart>): MsgJumpStart {
    const message = createBaseMsgJumpStart();
    message.pstakeAddress = object.pstakeAddress ?? "";
    message.chainID = object.chainID ?? "";
    message.connectionID = object.connectionID ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.transferPort = object.transferPort ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.mintDenom = object.mintDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    if (object.allowListedValidators !== undefined && object.allowListedValidators !== null) {
      message.allowListedValidators = AllowListedValidators.fromPartial(object.allowListedValidators);
    }
    if (object.pstakeParams !== undefined && object.pstakeParams !== null) {
      message.pstakeParams = PstakeParams.fromPartial(object.pstakeParams);
    }
    if (object.hostAccounts !== undefined && object.hostAccounts !== null) {
      message.hostAccounts = HostAccounts.fromPartial(object.hostAccounts);
    }
    return message;
  },
};
function createBaseMsgJumpStartResponse(): MsgJumpStartResponse {
  return {};
}
export const MsgJumpStartResponse = {
  encode(_: MsgJumpStartResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJumpStartResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJumpStartResponse();
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
  fromJSON(_: any): MsgJumpStartResponse {
    const obj = createBaseMsgJumpStartResponse();
    return obj;
  },
  toJSON(_: MsgJumpStartResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgJumpStartResponse>): MsgJumpStartResponse {
    const message = createBaseMsgJumpStartResponse();
    return message;
  },
};
function createBaseMsgChangeModuleState(): MsgChangeModuleState {
  return {
    pstakeAddress: "",
    moduleState: false,
  };
}
export const MsgChangeModuleState = {
  encode(message: MsgChangeModuleState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pstakeAddress !== "") {
      writer.uint32(10).string(message.pstakeAddress);
    }
    if (message.moduleState === true) {
      writer.uint32(16).bool(message.moduleState);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeModuleState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeModuleState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pstakeAddress = reader.string();
          break;
        case 2:
          message.moduleState = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChangeModuleState {
    const obj = createBaseMsgChangeModuleState();
    if (isSet(object.pstakeAddress)) obj.pstakeAddress = String(object.pstakeAddress);
    if (isSet(object.moduleState)) obj.moduleState = Boolean(object.moduleState);
    return obj;
  },
  toJSON(message: MsgChangeModuleState): unknown {
    const obj: any = {};
    message.pstakeAddress !== undefined && (obj.pstakeAddress = message.pstakeAddress);
    message.moduleState !== undefined && (obj.moduleState = message.moduleState);
    return obj;
  },
  fromPartial(object: Partial<MsgChangeModuleState>): MsgChangeModuleState {
    const message = createBaseMsgChangeModuleState();
    message.pstakeAddress = object.pstakeAddress ?? "";
    message.moduleState = object.moduleState ?? false;
    return message;
  },
};
function createBaseMsgChangeModuleStateResponse(): MsgChangeModuleStateResponse {
  return {};
}
export const MsgChangeModuleStateResponse = {
  encode(_: MsgChangeModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeModuleStateResponse();
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
  fromJSON(_: any): MsgChangeModuleStateResponse {
    const obj = createBaseMsgChangeModuleStateResponse();
    return obj;
  },
  toJSON(_: MsgChangeModuleStateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgChangeModuleStateResponse>): MsgChangeModuleStateResponse {
    const message = createBaseMsgChangeModuleStateResponse();
    return message;
  },
};
function createBaseMsgReportSlashing(): MsgReportSlashing {
  return {
    pstakeAddress: "",
    validatorAddress: "",
  };
}
export const MsgReportSlashing = {
  encode(message: MsgReportSlashing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pstakeAddress !== "") {
      writer.uint32(10).string(message.pstakeAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportSlashing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportSlashing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pstakeAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgReportSlashing {
    const obj = createBaseMsgReportSlashing();
    if (isSet(object.pstakeAddress)) obj.pstakeAddress = String(object.pstakeAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: MsgReportSlashing): unknown {
    const obj: any = {};
    message.pstakeAddress !== undefined && (obj.pstakeAddress = message.pstakeAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgReportSlashing>): MsgReportSlashing {
    const message = createBaseMsgReportSlashing();
    message.pstakeAddress = object.pstakeAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseMsgReportSlashingResponse(): MsgReportSlashingResponse {
  return {};
}
export const MsgReportSlashingResponse = {
  encode(_: MsgReportSlashingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportSlashingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportSlashingResponse();
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
  fromJSON(_: any): MsgReportSlashingResponse {
    const obj = createBaseMsgReportSlashingResponse();
    return obj;
  },
  toJSON(_: MsgReportSlashingResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgReportSlashingResponse>): MsgReportSlashingResponse {
    const message = createBaseMsgReportSlashingResponse();
    return message;
  },
};
/** Msg defines the lsCosmos services. */
export interface Msg {
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
  Claim(request: MsgClaim): Promise<MsgClaimResponse>;
  RecreateICA(request: MsgRecreateICA): Promise<MsgRecreateICAResponse>;
  JumpStart(request: MsgJumpStart): Promise<MsgJumpStartResponse>;
  ChangeModuleState(request: MsgChangeModuleState): Promise<MsgChangeModuleStateResponse>;
  ReportSlashing(request: MsgReportSlashing): Promise<MsgReportSlashingResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidStake = this.LiquidStake.bind(this);
    this.LiquidUnstake = this.LiquidUnstake.bind(this);
    this.Redeem = this.Redeem.bind(this);
    this.Claim = this.Claim.bind(this);
    this.RecreateICA = this.RecreateICA.bind(this);
    this.JumpStart = this.JumpStart.bind(this);
    this.ChangeModuleState = this.ChangeModuleState.bind(this);
    this.ReportSlashing = this.ReportSlashing.bind(this);
  }
  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "LiquidStake", data);
    return promise.then((data) => MsgLiquidStakeResponse.decode(new BinaryReader(data)));
  }
  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "LiquidUnstake", data);
    return promise.then((data) => MsgLiquidUnstakeResponse.decode(new BinaryReader(data)));
  }
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "Redeem", data);
    return promise.then((data) => MsgRedeemResponse.decode(new BinaryReader(data)));
  }
  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "Claim", data);
    return promise.then((data) => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  RecreateICA(request: MsgRecreateICA): Promise<MsgRecreateICAResponse> {
    const data = MsgRecreateICA.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "RecreateICA", data);
    return promise.then((data) => MsgRecreateICAResponse.decode(new BinaryReader(data)));
  }
  JumpStart(request: MsgJumpStart): Promise<MsgJumpStartResponse> {
    const data = MsgJumpStart.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "JumpStart", data);
    return promise.then((data) => MsgJumpStartResponse.decode(new BinaryReader(data)));
  }
  ChangeModuleState(request: MsgChangeModuleState): Promise<MsgChangeModuleStateResponse> {
    const data = MsgChangeModuleState.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "ChangeModuleState", data);
    return promise.then((data) => MsgChangeModuleStateResponse.decode(new BinaryReader(data)));
  }
  ReportSlashing(request: MsgReportSlashing): Promise<MsgReportSlashingResponse> {
    const data = MsgReportSlashing.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "ReportSlashing", data);
    return promise.then((data) => MsgReportSlashingResponse.decode(new BinaryReader(data)));
  }
}
