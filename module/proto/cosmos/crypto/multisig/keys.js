import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */

function createBaseLegacyAminoPubKey() {
  return {
    threshold: 0,
    publicKeys: []
  };
}

export const LegacyAminoPubKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }

    for (const v of message.publicKeys) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.uint32();
          break;

        case 2:
          message.publicKeys.push(Any.decode(reader, reader.uint32()));
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
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
      publicKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.publicKeys) ? object.publicKeys.map(e => Any.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));

    if (message.publicKeys) {
      obj.publicKeys = message.publicKeys.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.publicKeys = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$threshold, _object$publicKeys;

    const message = createBaseLegacyAminoPubKey();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : 0;
    message.publicKeys = ((_object$publicKeys = object.publicKeys) === null || _object$publicKeys === void 0 ? void 0 : _object$publicKeys.map(e => Any.fromPartial(e))) || [];
    return message;
  }

};