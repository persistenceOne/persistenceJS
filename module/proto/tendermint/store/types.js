import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";

function createBaseBlockStoreState() {
  return {
    base: Long.ZERO,
    height: Long.ZERO
  };
}

export const BlockStoreState = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.base.isZero()) {
      writer.uint32(8).int64(message.base);
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStoreState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base = reader.int64();
          break;

        case 2:
          message.height = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      base: isSet(object.base) ? Long.fromString(object.base) : Long.ZERO,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.base !== undefined && (obj.base = (message.base || Long.ZERO).toString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseBlockStoreState();
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};