import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, isSet } from "@osmonauts/helpers";

function createBaseTxs() {
  return {
    txs: []
  };
}

export const Txs = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(e => bytesFromBase64(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$txs;

    const message = createBaseTxs();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(e => e)) || [];
    return message;
  }

};

function createBaseMessage() {
  return {
    txs: undefined
  };
}

export const Message = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.txs !== undefined) {
      Txs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs = Txs.decode(reader, reader.uint32());
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
      txs: isSet(object.txs) ? Txs.fromJSON(object.txs) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.txs !== undefined && (obj.txs = message.txs ? Txs.toJSON(message.txs) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseMessage();
    message.txs = object.txs !== undefined && object.txs !== null ? Txs.fromPartial(object.txs) : undefined;
    return message;
  }

};