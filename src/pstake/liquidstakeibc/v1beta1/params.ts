/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.liquidstakeibc.v1beta1";
/** Params defines the parameters for the module. */
export interface Params {
  adminAddress: string;
  feeAddress: string;
}
function createBaseParams(): Params {
  return {
    adminAddress: "",
    feeAddress: "",
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.adminAddress !== "") {
      writer.uint32(10).string(message.adminAddress);
    }
    if (message.feeAddress !== "") {
      writer.uint32(18).string(message.feeAddress);
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
          message.adminAddress = reader.string();
          break;
        case 2:
          message.feeAddress = reader.string();
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
    if (isSet(object.adminAddress)) obj.adminAddress = String(object.adminAddress);
    if (isSet(object.feeAddress)) obj.feeAddress = String(object.feeAddress);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.adminAddress = object.adminAddress ?? "";
    message.feeAddress = object.feeAddress ?? "";
    return message;
  },
};
