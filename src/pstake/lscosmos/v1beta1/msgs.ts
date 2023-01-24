/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AllowListedValidators, PstakeParams, HostAccounts } from "./lscosmos";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
export interface MsgLiquidStake {
  delegatorAddress: string;
  amount?: Coin;
}
export interface MsgLiquidStakeResponse {}
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
  allowListedValidators?: AllowListedValidators;
  pstakeParams?: PstakeParams;
  hostAccounts?: HostAccounts;
}
export interface MsgJumpStartResponse {}

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

function createBaseMsgClaim(): MsgClaim {
  return {
    delegatorAddress: "",
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(_: I): MsgClaimResponse {
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
  encode(message: MsgRecreateICA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecreateICA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
    };
  },

  toJSON(message: MsgRecreateICA): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecreateICA>, I>>(object: I): MsgRecreateICA {
    const message = createBaseMsgRecreateICA();
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
};

function createBaseMsgRecreateICAResponse(): MsgRecreateICAResponse {
  return {};
}

export const MsgRecreateICAResponse = {
  encode(_: MsgRecreateICAResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecreateICAResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgRecreateICAResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecreateICAResponse>, I>>(_: I): MsgRecreateICAResponse {
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
    allowListedValidators: undefined,
    pstakeParams: undefined,
    hostAccounts: undefined,
  };
}

export const MsgJumpStart = {
  encode(message: MsgJumpStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJumpStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      pstakeAddress: isSet(object.pstakeAddress) ? String(object.pstakeAddress) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      connectionID: isSet(object.connectionID) ? String(object.connectionID) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      transferPort: isSet(object.transferPort) ? String(object.transferPort) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      minDeposit: isSet(object.minDeposit) ? String(object.minDeposit) : "",
      allowListedValidators: isSet(object.allowListedValidators)
        ? AllowListedValidators.fromJSON(object.allowListedValidators)
        : undefined,
      pstakeParams: isSet(object.pstakeParams) ? PstakeParams.fromJSON(object.pstakeParams) : undefined,
      hostAccounts: isSet(object.hostAccounts) ? HostAccounts.fromJSON(object.hostAccounts) : undefined,
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgJumpStart>, I>>(object: I): MsgJumpStart {
    const message = createBaseMsgJumpStart();
    message.pstakeAddress = object.pstakeAddress ?? "";
    message.chainID = object.chainID ?? "";
    message.connectionID = object.connectionID ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.transferPort = object.transferPort ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.mintDenom = object.mintDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    message.allowListedValidators =
      object.allowListedValidators !== undefined && object.allowListedValidators !== null
        ? AllowListedValidators.fromPartial(object.allowListedValidators)
        : undefined;
    message.pstakeParams =
      object.pstakeParams !== undefined && object.pstakeParams !== null
        ? PstakeParams.fromPartial(object.pstakeParams)
        : undefined;
    message.hostAccounts =
      object.hostAccounts !== undefined && object.hostAccounts !== null
        ? HostAccounts.fromPartial(object.hostAccounts)
        : undefined;
    return message;
  },
};

function createBaseMsgJumpStartResponse(): MsgJumpStartResponse {
  return {};
}

export const MsgJumpStartResponse = {
  encode(_: MsgJumpStartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJumpStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgJumpStartResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJumpStartResponse>, I>>(_: I): MsgJumpStartResponse {
    const message = createBaseMsgJumpStartResponse();
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
  }

  LiquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "LiquidStake", data);
    return promise.then((data) => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }

  LiquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "LiquidUnstake", data);
    return promise.then((data) => MsgLiquidUnstakeResponse.decode(new _m0.Reader(data)));
  }

  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "Redeem", data);
    return promise.then((data) => MsgRedeemResponse.decode(new _m0.Reader(data)));
  }

  Claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "Claim", data);
    return promise.then((data) => MsgClaimResponse.decode(new _m0.Reader(data)));
  }

  RecreateICA(request: MsgRecreateICA): Promise<MsgRecreateICAResponse> {
    const data = MsgRecreateICA.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "RecreateICA", data);
    return promise.then((data) => MsgRecreateICAResponse.decode(new _m0.Reader(data)));
  }

  JumpStart(request: MsgJumpStart): Promise<MsgJumpStartResponse> {
    const data = MsgJumpStart.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Msg", "JumpStart", data);
    return promise.then((data) => MsgJumpStartResponse.decode(new _m0.Reader(data)));
  }
}
