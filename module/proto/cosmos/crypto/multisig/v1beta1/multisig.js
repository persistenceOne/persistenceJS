import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, isSet } from "@osmonauts/helpers";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */

function createBaseMultiSignature() {
  return {
    signatures: []
  };
}

export const MultiSignature = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSignature();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatures.push(reader.bytes());
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
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => bytesFromBase64(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$signatures;

    const message = createBaseMultiSignature();
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(e => e)) || [];
    return message;
  }

};

function createBaseCompactBitArray() {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}

export const CompactBitArray = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }

    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;

        case 2:
          message.elems = reader.bytes();
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
      extraBitsStored: isSet(object.extraBitsStored) ? Number(object.extraBitsStored) : 0,
      elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.extraBitsStored !== undefined && (obj.extraBitsStored = Math.round(message.extraBitsStored));
    message.elems !== undefined && (obj.elems = base64FromBytes(message.elems !== undefined ? message.elems : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$extraBitsStor, _object$elems;

    const message = createBaseCompactBitArray();
    message.extraBitsStored = (_object$extraBitsStor = object.extraBitsStored) !== null && _object$extraBitsStor !== void 0 ? _object$extraBitsStor : 0;
    message.elems = (_object$elems = object.elems) !== null && _object$elems !== void 0 ? _object$elems : new Uint8Array();
    return message;
  }

};