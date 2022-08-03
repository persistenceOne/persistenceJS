import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 */

export let Type;

(function (Type) {
  Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
  Type[Type["TYPE_EXECUTE_TX"] = 1] = "TYPE_EXECUTE_TX";
  Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type || (Type = {}));

export function typeFromJSON(object) {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Type.TYPE_UNSPECIFIED;

    case 1:
    case "TYPE_EXECUTE_TX":
      return Type.TYPE_EXECUTE_TX;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Type.UNRECOGNIZED;
  }
}
export function typeToJSON(object) {
  switch (object) {
    case Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";

    case Type.TYPE_EXECUTE_TX:
      return "TYPE_EXECUTE_TX";

    default:
      return "UNKNOWN";
  }
}
/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */

function createBaseInterchainAccountPacketData() {
  return {
    type: 0,
    data: new Uint8Array(),
    memo: ""
  };
}

export const InterchainAccountPacketData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.memo !== "") {
      writer.uint32(26).string(message.memo);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccountPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.memo = reader.string();
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
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.type !== undefined && (obj.type = typeToJSON(message.type));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  fromPartial(object) {
    var _object$type, _object$data, _object$memo;

    const message = createBaseInterchainAccountPacketData();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    return message;
  }

};

function createBaseCosmosTx() {
  return {
    messages: []
  };
}

export const CosmosTx = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
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
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(e => Any.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$messages;

    const message = createBaseCosmosTx();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => Any.fromPartial(e))) || [];
    return message;
  }

};