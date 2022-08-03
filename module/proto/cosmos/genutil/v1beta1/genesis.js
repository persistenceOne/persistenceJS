import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/** GenesisState defines the raw genesis transaction in JSON. */

function createBaseGenesisState() {
  return {
    genTxs: []
  };
}

export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.genTxs.push(reader.bytes());
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
      genTxs: Array.isArray(object === null || object === void 0 ? void 0 : object.genTxs) ? object.genTxs.map(e => bytesFromBase64(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.genTxs) {
      obj.genTxs = message.genTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genTxs = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$genTxs;

    const message = createBaseGenesisState();
    message.genTxs = ((_object$genTxs = object.genTxs) === null || _object$genTxs === void 0 ? void 0 : _object$genTxs.map(e => e)) || [];
    return message;
  }

};