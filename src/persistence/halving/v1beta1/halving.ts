/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "persistence.halving.v1beta1";
/** Params holds parameters for the halving module. */
export interface Params {
  /** periodic height at which inflation decreases */
  blockHeight: bigint;
}
function createBaseParams(): Params {
  return {
    blockHeight: BigInt(0),
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
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
          message.blockHeight = reader.uint64();
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
    if (isSet(object.blockHeight)) obj.blockHeight = BigInt(object.blockHeight.toString());
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    return message;
  },
};
