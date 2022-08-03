"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnapshotsResponse = exports.SnapshotsRequest = exports.Message = exports.ChunkResponse = exports.ChunkRequest = void 0;

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseMessage() {
  return {
    snapshotsRequest: undefined,
    snapshotsResponse: undefined,
    chunkRequest: undefined,
    chunkResponse: undefined
  };
}

var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.snapshotsRequest !== undefined) {
      SnapshotsRequest.encode(message.snapshotsRequest, writer.uint32(10).fork()).ldelim();
    }

    if (message.snapshotsResponse !== undefined) {
      SnapshotsResponse.encode(message.snapshotsResponse, writer.uint32(18).fork()).ldelim();
    }

    if (message.chunkRequest !== undefined) {
      ChunkRequest.encode(message.chunkRequest, writer.uint32(26).fork()).ldelim();
    }

    if (message.chunkResponse !== undefined) {
      ChunkResponse.encode(message.chunkResponse, writer.uint32(34).fork()).ldelim();
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
          message.snapshotsRequest = SnapshotsRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.snapshotsResponse = SnapshotsResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.chunkRequest = ChunkRequest.decode(reader, reader.uint32());
          break;

        case 4:
          message.chunkResponse = ChunkResponse.decode(reader, reader.uint32());
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
      snapshotsRequest: (0, _helpers.isSet)(object.snapshotsRequest) ? SnapshotsRequest.fromJSON(object.snapshotsRequest) : undefined,
      snapshotsResponse: (0, _helpers.isSet)(object.snapshotsResponse) ? SnapshotsResponse.fromJSON(object.snapshotsResponse) : undefined,
      chunkRequest: (0, _helpers.isSet)(object.chunkRequest) ? ChunkRequest.fromJSON(object.chunkRequest) : undefined,
      chunkResponse: (0, _helpers.isSet)(object.chunkResponse) ? ChunkResponse.fromJSON(object.chunkResponse) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.snapshotsRequest !== undefined && (obj.snapshotsRequest = message.snapshotsRequest ? SnapshotsRequest.toJSON(message.snapshotsRequest) : undefined);
    message.snapshotsResponse !== undefined && (obj.snapshotsResponse = message.snapshotsResponse ? SnapshotsResponse.toJSON(message.snapshotsResponse) : undefined);
    message.chunkRequest !== undefined && (obj.chunkRequest = message.chunkRequest ? ChunkRequest.toJSON(message.chunkRequest) : undefined);
    message.chunkResponse !== undefined && (obj.chunkResponse = message.chunkResponse ? ChunkResponse.toJSON(message.chunkResponse) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
    message.snapshotsRequest = object.snapshotsRequest !== undefined && object.snapshotsRequest !== null ? SnapshotsRequest.fromPartial(object.snapshotsRequest) : undefined;
    message.snapshotsResponse = object.snapshotsResponse !== undefined && object.snapshotsResponse !== null ? SnapshotsResponse.fromPartial(object.snapshotsResponse) : undefined;
    message.chunkRequest = object.chunkRequest !== undefined && object.chunkRequest !== null ? ChunkRequest.fromPartial(object.chunkRequest) : undefined;
    message.chunkResponse = object.chunkResponse !== undefined && object.chunkResponse !== null ? ChunkResponse.fromPartial(object.chunkResponse) : undefined;
    return message;
  }
};
exports.Message = Message;

function createBaseSnapshotsRequest() {
  return {};
}

var SnapshotsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSnapshotsRequest();

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
    var message = createBaseSnapshotsRequest();
    return message;
  }
};
exports.SnapshotsRequest = SnapshotsRequest;

function createBaseSnapshotsResponse() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}

var SnapshotsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }

    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSnapshotsResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunks = reader.uint32();
          break;

        case 4:
          message.hash = reader.bytes();
          break;

        case 5:
          message.metadata = reader.bytes();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.UZERO,
      format: (0, _helpers.isSet)(object.format) ? Number(object.format) : 0,
      chunks: (0, _helpers.isSet)(object.chunks) ? Number(object.chunks) : 0,
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array(),
      metadata: (0, _helpers.isSet)(object.metadata) ? (0, _helpers.bytesFromBase64)(object.metadata) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = (0, _helpers.base64FromBytes)(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$format, _object$chunks, _object$hash, _object$metadata;

    var message = createBaseSnapshotsResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  }
};
exports.SnapshotsResponse = SnapshotsResponse;

function createBaseChunkRequest() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    index: 0
  };
}

var ChunkRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChunkRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.index = reader.uint32();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.UZERO,
      format: (0, _helpers.isSet)(object.format) ? Number(object.format) : 0,
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$format2, _object$index;

    var message = createBaseChunkRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    return message;
  }
};
exports.ChunkRequest = ChunkRequest;

function createBaseChunkResponse() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    index: 0,
    chunk: new Uint8Array(),
    missing: false
  };
}

var ChunkResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }

    if (message.chunk.length !== 0) {
      writer.uint32(34).bytes(message.chunk);
    }

    if (message.missing === true) {
      writer.uint32(40).bool(message.missing);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChunkResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.index = reader.uint32();
          break;

        case 4:
          message.chunk = reader.bytes();
          break;

        case 5:
          message.missing = reader.bool();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.UZERO,
      format: (0, _helpers.isSet)(object.format) ? Number(object.format) : 0,
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0,
      chunk: (0, _helpers.isSet)(object.chunk) ? (0, _helpers.bytesFromBase64)(object.chunk) : new Uint8Array(),
      missing: (0, _helpers.isSet)(object.missing) ? Boolean(object.missing) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.chunk !== undefined && (obj.chunk = (0, _helpers.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    message.missing !== undefined && (obj.missing = message.missing);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$format3, _object$index2, _object$chunk, _object$missing;

    var message = createBaseChunkResponse();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format3 = object.format) !== null && _object$format3 !== void 0 ? _object$format3 : 0;
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : new Uint8Array();
    message.missing = (_object$missing = object.missing) !== null && _object$missing !== void 0 ? _object$missing : false;
    return message;
  }
};
exports.ChunkResponse = ChunkResponse;