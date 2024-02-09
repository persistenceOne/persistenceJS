/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.ratesync.v1beta1";
/** msg blob for instantiate contract. */
export interface InstantiateLiquidStakeRateContract {
  admin: string;
  transferChannelID: string;
  transferPortID: string;
}
/**
 * wrapper for liquidstakerate as wasm msg should be marshalled as encodedMsg =
 * { wasmMsg: { wasm MsgDetails } }
 */
export interface ExecuteLiquidStakeRate {
  liquidStakeRate: LiquidStakeRate;
}
/** msg blob for execute contract. */
export interface LiquidStakeRate {
  defaultBondDenom: string;
  stkDenom: string;
  /**
   * cvalue = default_bond_denom_price/stk_denom_price
   * cvalue = stk_denom_supply/default_bond_denom_supply
   */
  cValue: string;
  controllerChainTime: bigint;
}
function createBaseInstantiateLiquidStakeRateContract(): InstantiateLiquidStakeRateContract {
  return {
    admin: "",
    transferChannelID: "",
    transferPortID: "",
  };
}
export const InstantiateLiquidStakeRateContract = {
  encode(
    message: InstantiateLiquidStakeRateContract,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.transferChannelID !== "") {
      writer.uint32(18).string(message.transferChannelID);
    }
    if (message.transferPortID !== "") {
      writer.uint32(26).string(message.transferPortID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InstantiateLiquidStakeRateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateLiquidStakeRateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.transferChannelID = reader.string();
          break;
        case 3:
          message.transferPortID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InstantiateLiquidStakeRateContract {
    const obj = createBaseInstantiateLiquidStakeRateContract();
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.transferChannelID)) obj.transferChannelID = String(object.transferChannelID);
    if (isSet(object.transferPortID)) obj.transferPortID = String(object.transferPortID);
    return obj;
  },
  toJSON(message: InstantiateLiquidStakeRateContract): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.transferChannelID !== undefined && (obj.transferChannelID = message.transferChannelID);
    message.transferPortID !== undefined && (obj.transferPortID = message.transferPortID);
    return obj;
  },
  fromPartial(object: Partial<InstantiateLiquidStakeRateContract>): InstantiateLiquidStakeRateContract {
    const message = createBaseInstantiateLiquidStakeRateContract();
    message.admin = object.admin ?? "";
    message.transferChannelID = object.transferChannelID ?? "";
    message.transferPortID = object.transferPortID ?? "";
    return message;
  },
};
function createBaseExecuteLiquidStakeRate(): ExecuteLiquidStakeRate {
  return {
    liquidStakeRate: LiquidStakeRate.fromPartial({}),
  };
}
export const ExecuteLiquidStakeRate = {
  encode(message: ExecuteLiquidStakeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidStakeRate !== undefined) {
      LiquidStakeRate.encode(message.liquidStakeRate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecuteLiquidStakeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteLiquidStakeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidStakeRate = LiquidStakeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteLiquidStakeRate {
    const obj = createBaseExecuteLiquidStakeRate();
    if (isSet(object.liquidStakeRate)) obj.liquidStakeRate = LiquidStakeRate.fromJSON(object.liquidStakeRate);
    return obj;
  },
  toJSON(message: ExecuteLiquidStakeRate): unknown {
    const obj: any = {};
    message.liquidStakeRate !== undefined &&
      (obj.liquidStakeRate = message.liquidStakeRate
        ? LiquidStakeRate.toJSON(message.liquidStakeRate)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<ExecuteLiquidStakeRate>): ExecuteLiquidStakeRate {
    const message = createBaseExecuteLiquidStakeRate();
    if (object.liquidStakeRate !== undefined && object.liquidStakeRate !== null) {
      message.liquidStakeRate = LiquidStakeRate.fromPartial(object.liquidStakeRate);
    }
    return message;
  },
};
function createBaseLiquidStakeRate(): LiquidStakeRate {
  return {
    defaultBondDenom: "",
    stkDenom: "",
    cValue: "",
    controllerChainTime: BigInt(0),
  };
}
export const LiquidStakeRate = {
  encode(message: LiquidStakeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultBondDenom !== "") {
      writer.uint32(10).string(message.defaultBondDenom);
    }
    if (message.stkDenom !== "") {
      writer.uint32(18).string(message.stkDenom);
    }
    if (message.cValue !== "") {
      writer.uint32(26).string(message.cValue);
    }
    if (message.controllerChainTime !== BigInt(0)) {
      writer.uint32(32).int64(message.controllerChainTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidStakeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidStakeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultBondDenom = reader.string();
          break;
        case 2:
          message.stkDenom = reader.string();
          break;
        case 3:
          message.cValue = reader.string();
          break;
        case 4:
          message.controllerChainTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidStakeRate {
    const obj = createBaseLiquidStakeRate();
    if (isSet(object.defaultBondDenom)) obj.defaultBondDenom = String(object.defaultBondDenom);
    if (isSet(object.stkDenom)) obj.stkDenom = String(object.stkDenom);
    if (isSet(object.cValue)) obj.cValue = String(object.cValue);
    if (isSet(object.controllerChainTime))
      obj.controllerChainTime = BigInt(object.controllerChainTime.toString());
    return obj;
  },
  toJSON(message: LiquidStakeRate): unknown {
    const obj: any = {};
    message.defaultBondDenom !== undefined && (obj.defaultBondDenom = message.defaultBondDenom);
    message.stkDenom !== undefined && (obj.stkDenom = message.stkDenom);
    message.cValue !== undefined && (obj.cValue = message.cValue);
    message.controllerChainTime !== undefined &&
      (obj.controllerChainTime = (message.controllerChainTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<LiquidStakeRate>): LiquidStakeRate {
    const message = createBaseLiquidStakeRate();
    message.defaultBondDenom = object.defaultBondDenom ?? "";
    message.stkDenom = object.stkDenom ?? "";
    message.cValue = object.cValue ?? "";
    if (object.controllerChainTime !== undefined && object.controllerChainTime !== null) {
      message.controllerChainTime = BigInt(object.controllerChainTime.toString());
    }
    return message;
  },
};
