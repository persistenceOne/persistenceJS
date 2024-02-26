/* eslint-disable */
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual expected provisions */
  annualProvisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** the time the chain starts */
  startTime: Timestamp;
  /** initial annual provisions */
  initialAnnualProvisions: string;
  /** factor to reduce inflation by each year */
  reductionFactor: string;
  /** expected blocks per year */
  blocksPerYear: bigint;
}
function createBaseMinter(): Minter {
  return {
    annualProvisions: "",
  };
}
export const Minter = {
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions !== "") {
      writer.uint32(10).string(message.annualProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Minter {
    const obj = createBaseMinter();
    if (isSet(object.annualProvisions)) obj.annualProvisions = String(object.annualProvisions);
    return obj;
  },
  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    startTime: Timestamp.fromPartial({}),
    initialAnnualProvisions: "",
    reductionFactor: "",
    blocksPerYear: BigInt(0),
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialAnnualProvisions !== "") {
      writer.uint32(26).string(message.initialAnnualProvisions);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(34).string(message.reductionFactor);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(40).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialAnnualProvisions = reader.string();
          break;
        case 4:
          message.reductionFactor = reader.string();
          break;
        case 5:
          message.blocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    if (isSet(object.initialAnnualProvisions))
      obj.initialAnnualProvisions = String(object.initialAnnualProvisions);
    if (isSet(object.reductionFactor)) obj.reductionFactor = String(object.reductionFactor);
    if (isSet(object.blocksPerYear)) obj.blocksPerYear = BigInt(object.blocksPerYear.toString());
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.initialAnnualProvisions !== undefined &&
      (obj.initialAnnualProvisions = message.initialAnnualProvisions);
    message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
    message.blocksPerYear !== undefined &&
      (obj.blocksPerYear = (message.blocksPerYear || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
    message.reductionFactor = object.reductionFactor ?? "";
    if (object.blocksPerYear !== undefined && object.blocksPerYear !== null) {
      message.blocksPerYear = BigInt(object.blocksPerYear.toString());
    }
    return message;
  },
};
