import { NetAddress } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";

function createBasePexRequest() {
  return {};
}

export const PexRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_) {
    return {};
  },

  toJSON(_) {
    const obj = {};
    return obj;
  },

  fromPartial(_) {
    const message = createBasePexRequest();
    return message;
  }

};

function createBasePexAddrs() {
  return {
    addrs: []
  };
}

export const PexAddrs = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.addrs) {
      NetAddress.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePexAddrs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.addrs.push(NetAddress.decode(reader, reader.uint32()));
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
      addrs: Array.isArray(object === null || object === void 0 ? void 0 : object.addrs) ? object.addrs.map(e => NetAddress.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.addrs) {
      obj.addrs = message.addrs.map(e => e ? NetAddress.toJSON(e) : undefined);
    } else {
      obj.addrs = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$addrs;

    const message = createBasePexAddrs();
    message.addrs = ((_object$addrs = object.addrs) === null || _object$addrs === void 0 ? void 0 : _object$addrs.map(e => NetAddress.fromPartial(e))) || [];
    return message;
  }

};

function createBaseMessage() {
  return {
    pexRequest: undefined,
    pexAddrs: undefined
  };
}

export const Message = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pexRequest !== undefined) {
      PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
    }

    if (message.pexAddrs !== undefined) {
      PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
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
          message.pexRequest = PexRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.pexAddrs = PexAddrs.decode(reader, reader.uint32());
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
      pexRequest: isSet(object.pexRequest) ? PexRequest.fromJSON(object.pexRequest) : undefined,
      pexAddrs: isSet(object.pexAddrs) ? PexAddrs.fromJSON(object.pexAddrs) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.pexRequest !== undefined && (obj.pexRequest = message.pexRequest ? PexRequest.toJSON(message.pexRequest) : undefined);
    message.pexAddrs !== undefined && (obj.pexAddrs = message.pexAddrs ? PexAddrs.toJSON(message.pexAddrs) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseMessage();
    message.pexRequest = object.pexRequest !== undefined && object.pexRequest !== null ? PexRequest.fromPartial(object.pexRequest) : undefined;
    message.pexAddrs = object.pexAddrs !== undefined && object.pexAddrs !== null ? PexAddrs.fromPartial(object.pexAddrs) : undefined;
    return message;
  }

};