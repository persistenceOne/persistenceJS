import { Block } from "../types/block";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";
/** BlockRequest requests a block for a specific height */

function createBaseBlockRequest() {
  return {
    height: Long.ZERO
  };
}

export const BlockRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseNoBlockResponse() {
  return {
    height: Long.ZERO
  };
}

export const NoBlockResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseBlockResponse() {
  return {
    block: undefined
  };
}

export const BlockResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = Block.decode(reader, reader.uint32());
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
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  }

};

function createBaseStatusRequest() {
  return {};
}

export const StatusRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();

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
    const message = createBaseStatusRequest();
    return message;
  }

};

function createBaseStatusResponse() {
  return {
    height: Long.ZERO,
    base: Long.ZERO
  };
}

export const StatusResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.base = reader.int64();
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
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      base: isSet(object.base) ? Long.fromString(object.base) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.base !== undefined && (obj.base = (message.base || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    return message;
  }

};

function createBaseMessage() {
  return {
    blockRequest: undefined,
    noBlockResponse: undefined,
    blockResponse: undefined,
    statusRequest: undefined,
    statusResponse: undefined
  };
}

export const Message = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.blockRequest !== undefined) {
      BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
    }

    if (message.noBlockResponse !== undefined) {
      NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
    }

    if (message.blockResponse !== undefined) {
      BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
    }

    if (message.statusRequest !== undefined) {
      StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
    }

    if (message.statusResponse !== undefined) {
      StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
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
          message.blockRequest = BlockRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.noBlockResponse = NoBlockResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.blockResponse = BlockResponse.decode(reader, reader.uint32());
          break;

        case 4:
          message.statusRequest = StatusRequest.decode(reader, reader.uint32());
          break;

        case 5:
          message.statusResponse = StatusResponse.decode(reader, reader.uint32());
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
      blockRequest: isSet(object.blockRequest) ? BlockRequest.fromJSON(object.blockRequest) : undefined,
      noBlockResponse: isSet(object.noBlockResponse) ? NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
      blockResponse: isSet(object.blockResponse) ? BlockResponse.fromJSON(object.blockResponse) : undefined,
      statusRequest: isSet(object.statusRequest) ? StatusRequest.fromJSON(object.statusRequest) : undefined,
      statusResponse: isSet(object.statusResponse) ? StatusResponse.fromJSON(object.statusResponse) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.blockRequest !== undefined && (obj.blockRequest = message.blockRequest ? BlockRequest.toJSON(message.blockRequest) : undefined);
    message.noBlockResponse !== undefined && (obj.noBlockResponse = message.noBlockResponse ? NoBlockResponse.toJSON(message.noBlockResponse) : undefined);
    message.blockResponse !== undefined && (obj.blockResponse = message.blockResponse ? BlockResponse.toJSON(message.blockResponse) : undefined);
    message.statusRequest !== undefined && (obj.statusRequest = message.statusRequest ? StatusRequest.toJSON(message.statusRequest) : undefined);
    message.statusResponse !== undefined && (obj.statusResponse = message.statusResponse ? StatusResponse.toJSON(message.statusResponse) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseMessage();
    message.blockRequest = object.blockRequest !== undefined && object.blockRequest !== null ? BlockRequest.fromPartial(object.blockRequest) : undefined;
    message.noBlockResponse = object.noBlockResponse !== undefined && object.noBlockResponse !== null ? NoBlockResponse.fromPartial(object.noBlockResponse) : undefined;
    message.blockResponse = object.blockResponse !== undefined && object.blockResponse !== null ? BlockResponse.fromPartial(object.blockResponse) : undefined;
    message.statusRequest = object.statusRequest !== undefined && object.statusRequest !== null ? StatusRequest.fromPartial(object.statusRequest) : undefined;
    message.statusResponse = object.statusResponse !== undefined && object.statusResponse !== null ? StatusResponse.fromPartial(object.statusResponse) : undefined;
    return message;
  }

};