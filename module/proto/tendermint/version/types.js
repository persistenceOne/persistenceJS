import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */

function createBaseApp() {
  return {
    protocol: Long.UZERO,
    software: ""
  };
}

export const App = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.protocol.isZero()) {
      writer.uint32(8).uint64(message.protocol);
    }

    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
          break;

        case 2:
          message.software = reader.string();
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
      protocol: isSet(object.protocol) ? Long.fromString(object.protocol) : Long.UZERO,
      software: isSet(object.software) ? String(object.software) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.protocol !== undefined && (obj.protocol = (message.protocol || Long.UZERO).toString());
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },

  fromPartial(object) {
    var _object$software;

    const message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? Long.fromValue(object.protocol) : Long.UZERO;
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  }

};

function createBaseConsensus() {
  return {
    block: Long.UZERO,
    app: Long.UZERO
  };
}

export const Consensus = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }

    if (!message.app.isZero()) {
      writer.uint32(16).uint64(message.app);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;

        case 2:
          message.app = reader.uint64();
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
      block: isSet(object.block) ? Long.fromString(object.block) : Long.UZERO,
      app: isSet(object.app) ? Long.fromString(object.app) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.app !== undefined && (obj.app = (message.app || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  }

};