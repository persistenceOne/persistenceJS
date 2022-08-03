import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/** PublicKey defines the keys available for use with Tendermint Validators */

function createBasePublicKey() {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}

export const PublicKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }

    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;

        case 2:
          message.secp256k1 = reader.bytes();
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
      ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined,
      secp256k1: isSet(object.secp256k1) ? bytesFromBase64(object.secp256k1) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.ed25519 !== undefined && (obj.ed25519 = message.ed25519 !== undefined ? base64FromBytes(message.ed25519) : undefined);
    message.secp256k1 !== undefined && (obj.secp256k1 = message.secp256k1 !== undefined ? base64FromBytes(message.secp256k1) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$ed, _object$secp256k;

    const message = createBasePublicKey();
    message.ed25519 = (_object$ed = object.ed25519) !== null && _object$ed !== void 0 ? _object$ed : undefined;
    message.secp256k1 = (_object$secp256k = object.secp256k1) !== null && _object$secp256k !== void 0 ? _object$secp256k : undefined;
    return message;
  }

};