import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */

function createBaseParams() {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}

export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }

    for (const v of message.allowMessages) {
      writer.uint32(18).string(v);
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
          message.hostEnabled = reader.bool();
          break;

        case 2:
          message.allowMessages.push(reader.string());
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
      hostEnabled: isSet(object.hostEnabled) ? Boolean(object.hostEnabled) : false,
      allowMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowMessages) ? object.allowMessages.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.hostEnabled !== undefined && (obj.hostEnabled = message.hostEnabled);

    if (message.allowMessages) {
      obj.allowMessages = message.allowMessages.map(e => e);
    } else {
      obj.allowMessages = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$hostEnabled, _object$allowMessages;

    const message = createBaseParams();
    message.hostEnabled = (_object$hostEnabled = object.hostEnabled) !== null && _object$hostEnabled !== void 0 ? _object$hostEnabled : false;
    message.allowMessages = ((_object$allowMessages = object.allowMessages) === null || _object$allowMessages === void 0 ? void 0 : _object$allowMessages.map(e => e)) || [];
    return message;
  }

};