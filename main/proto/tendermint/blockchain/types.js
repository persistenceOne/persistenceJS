"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusResponse = exports.StatusRequest = exports.NoBlockResponse = exports.Message = exports.BlockResponse = exports.BlockRequest = void 0;

var _block = require("../types/block");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseBlockRequest() {
  return {
    height: _helpers.Long.ZERO
  };
}

var BlockRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BlockRequest = BlockRequest;

function createBaseNoBlockResponse() {
  return {
    height: _helpers.Long.ZERO
  };
}

var NoBlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNoBlockResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.NoBlockResponse = NoBlockResponse;

function createBaseBlockResponse() {
  return {
    block: undefined
  };
}

var BlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.block !== undefined && (obj.block = message.block ? _block.Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    return message;
  }
};
exports.BlockResponse = BlockResponse;

function createBaseStatusRequest() {
  return {};
}

var StatusRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStatusRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseStatusRequest();
    return message;
  }
};
exports.StatusRequest = StatusRequest;

function createBaseStatusResponse() {
  return {
    height: _helpers.Long.ZERO,
    base: _helpers.Long.ZERO
  };
}

var StatusResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStatusResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      base: (0, _helpers.isSet)(object.base) ? _helpers.Long.fromString(object.base) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.base !== undefined && (obj.base = (message.base || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? _helpers.Long.fromValue(object.base) : _helpers.Long.ZERO;
    return message;
  }
};
exports.StatusResponse = StatusResponse;

function createBaseMessage() {
  return {
    blockRequest: undefined,
    noBlockResponse: undefined,
    blockResponse: undefined,
    statusRequest: undefined,
    statusResponse: undefined
  };
}

var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessage();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      blockRequest: (0, _helpers.isSet)(object.blockRequest) ? BlockRequest.fromJSON(object.blockRequest) : undefined,
      noBlockResponse: (0, _helpers.isSet)(object.noBlockResponse) ? NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
      blockResponse: (0, _helpers.isSet)(object.blockResponse) ? BlockResponse.fromJSON(object.blockResponse) : undefined,
      statusRequest: (0, _helpers.isSet)(object.statusRequest) ? StatusRequest.fromJSON(object.statusRequest) : undefined,
      statusResponse: (0, _helpers.isSet)(object.statusResponse) ? StatusResponse.fromJSON(object.statusResponse) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockRequest !== undefined && (obj.blockRequest = message.blockRequest ? BlockRequest.toJSON(message.blockRequest) : undefined);
    message.noBlockResponse !== undefined && (obj.noBlockResponse = message.noBlockResponse ? NoBlockResponse.toJSON(message.noBlockResponse) : undefined);
    message.blockResponse !== undefined && (obj.blockResponse = message.blockResponse ? BlockResponse.toJSON(message.blockResponse) : undefined);
    message.statusRequest !== undefined && (obj.statusRequest = message.statusRequest ? StatusRequest.toJSON(message.statusRequest) : undefined);
    message.statusResponse !== undefined && (obj.statusResponse = message.statusResponse ? StatusResponse.toJSON(message.statusResponse) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
    message.blockRequest = object.blockRequest !== undefined && object.blockRequest !== null ? BlockRequest.fromPartial(object.blockRequest) : undefined;
    message.noBlockResponse = object.noBlockResponse !== undefined && object.noBlockResponse !== null ? NoBlockResponse.fromPartial(object.noBlockResponse) : undefined;
    message.blockResponse = object.blockResponse !== undefined && object.blockResponse !== null ? BlockResponse.fromPartial(object.blockResponse) : undefined;
    message.statusRequest = object.statusRequest !== undefined && object.statusRequest !== null ? StatusRequest.fromPartial(object.statusRequest) : undefined;
    message.statusResponse = object.statusResponse !== undefined && object.statusResponse !== null ? StatusResponse.fromPartial(object.statusResponse) : undefined;
    return message;
  }
};
exports.Message = Message;