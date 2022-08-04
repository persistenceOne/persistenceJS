import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */

function createBaseDenomTrace() {
  return {
    path: "",
    baseDenom: ""
  };
}

export const DenomTrace = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }

    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        case 2:
          message.baseDenom = reader.string();
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
      path: isSet(object.path) ? String(object.path) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.path !== undefined && (obj.path = message.path);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object) {
    var _object$path, _object$baseDenom;

    const message = createBaseDenomTrace();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.baseDenom = (_object$baseDenom = object.baseDenom) !== null && _object$baseDenom !== void 0 ? _object$baseDenom : "";
    return message;
  }

};

function createBaseParams() {
  return {
    sendEnabled: false,
    receiveEnabled: false
  };
}

export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }

    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sendEnabled = reader.bool();
          break;

        case 2:
          message.receiveEnabled = reader.bool();
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
      sendEnabled: isSet(object.sendEnabled) ? Boolean(object.sendEnabled) : false,
      receiveEnabled: isSet(object.receiveEnabled) ? Boolean(object.receiveEnabled) : false
    };
  },

  toJSON(message) {
    const obj = {};
    message.sendEnabled !== undefined && (obj.sendEnabled = message.sendEnabled);
    message.receiveEnabled !== undefined && (obj.receiveEnabled = message.receiveEnabled);
    return obj;
  },

  fromPartial(object) {
    var _object$sendEnabled, _object$receiveEnable;

    const message = createBaseParams();
    message.sendEnabled = (_object$sendEnabled = object.sendEnabled) !== null && _object$sendEnabled !== void 0 ? _object$sendEnabled : false;
    message.receiveEnabled = (_object$receiveEnable = object.receiveEnabled) !== null && _object$receiveEnable !== void 0 ? _object$receiveEnable : false;
    return message;
  }

};