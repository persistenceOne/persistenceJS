import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/** MsgIBCSend */

function createBaseMsgIBCSend() {
  return {
    channel: "",
    timeoutHeight: Long.UZERO,
    timeoutTimestamp: Long.UZERO,
    data: new Uint8Array()
  };
}

export const MsgIBCSend = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    if (!message.timeoutHeight.isZero()) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        case 4:
          message.timeoutHeight = reader.uint64();
          break;

        case 5:
          message.timeoutTimestamp = reader.uint64();
          break;

        case 6:
          message.data = reader.bytes();
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
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Long.fromString(object.timeoutHeight) : Long.UZERO,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromString(object.timeoutTimestamp) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || Long.UZERO).toString());
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || Long.UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$channel, _object$data;

    const message = createBaseMsgIBCSend();
    message.channel = (_object$channel = object.channel) !== null && _object$channel !== void 0 ? _object$channel : "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Long.fromValue(object.timeoutHeight) : Long.UZERO;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }

};

function createBaseMsgIBCCloseChannel() {
  return {
    channel: ""
  };
}

export const MsgIBCCloseChannel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
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
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(object) {
    var _object$channel2;

    const message = createBaseMsgIBCCloseChannel();
    message.channel = (_object$channel2 = object.channel) !== null && _object$channel2 !== void 0 ? _object$channel2 : "";
    return message;
  }

};