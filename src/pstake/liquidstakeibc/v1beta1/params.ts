/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adminAddress !== "") {
      writer.uint32(10).string(message.adminAddress);
    }
    if (message.feeAddress !== "") {
      writer.uint32(18).string(message.feeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.adminAddress = object.adminAddress ?? "";
    message.feeAddress = object.feeAddress ?? "";
    return message;
  },
};
