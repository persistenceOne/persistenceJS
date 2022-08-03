"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanonicalVote = exports.CanonicalProposal = exports.CanonicalPartSetHeader = exports.CanonicalBlockID = void 0;

var _types = require("./types");

var _timestamp = require("../../google/protobuf/timestamp");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseCanonicalBlockID() {
  return {
    hash: new Uint8Array(),
    partSetHeader: undefined
  };
}

var CanonicalBlockID = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.partSetHeader !== undefined) {
      CanonicalPartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalBlockID();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.partSetHeader = CanonicalPartSetHeader.decode(reader, reader.uint32());
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
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array(),
      partSetHeader: (0, _helpers.isSet)(object.partSetHeader) ? CanonicalPartSetHeader.fromJSON(object.partSetHeader) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partSetHeader !== undefined && (obj.partSetHeader = message.partSetHeader ? CanonicalPartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash;

    var message = createBaseCanonicalBlockID();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? CanonicalPartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  }
};
exports.CanonicalBlockID = CanonicalBlockID;

function createBaseCanonicalPartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}

var CanonicalPartSetHeader = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalPartSetHeader();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;

        case 2:
          message.hash = reader.bytes();
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
      total: (0, _helpers.isSet)(object.total) ? Number(object.total) : 0,
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$total, _object$hash2;

    var message = createBaseCanonicalPartSetHeader();
    message.total = (_object$total = object.total) !== null && _object$total !== void 0 ? _object$total : 0;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  }
};
exports.CanonicalPartSetHeader = CanonicalPartSetHeader;

function createBaseCanonicalProposal() {
  return {
    type: 0,
    height: _helpers.Long.ZERO,
    round: _helpers.Long.ZERO,
    polRound: _helpers.Long.ZERO,
    blockId: undefined,
    timestamp: undefined,
    chainId: ""
  };
}

var CanonicalProposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }

    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }

    if (!message.polRound.isZero()) {
      writer.uint32(32).int64(message.polRound);
    }

    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;

        case 2:
          message.height = reader.sfixed64();
          break;

        case 3:
          message.round = reader.sfixed64();
          break;

        case 4:
          message.polRound = reader.int64();
          break;

        case 5:
          message.blockId = CanonicalBlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.chainId = reader.string();
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
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : 0,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? _helpers.Long.fromString(object.round) : _helpers.Long.ZERO,
      polRound: (0, _helpers.isSet)(object.polRound) ? _helpers.Long.fromString(object.polRound) : _helpers.Long.ZERO,
      blockId: (0, _helpers.isSet)(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = (0, _types.signedMsgTypeToJSON)(message.type));
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = (message.round || _helpers.Long.ZERO).toString());
    message.polRound !== undefined && (obj.polRound = (message.polRound || _helpers.Long.ZERO).toString());
    message.blockId !== undefined && (obj.blockId = message.blockId ? CanonicalBlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$timestamp, _object$chainId;

    var message = createBaseCanonicalProposal();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? _helpers.Long.fromValue(object.round) : _helpers.Long.ZERO;
    message.polRound = object.polRound !== undefined && object.polRound !== null ? _helpers.Long.fromValue(object.polRound) : _helpers.Long.ZERO;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    return message;
  }
};
exports.CanonicalProposal = CanonicalProposal;

function createBaseCanonicalVote() {
  return {
    type: 0,
    height: _helpers.Long.ZERO,
    round: _helpers.Long.ZERO,
    blockId: undefined,
    timestamp: undefined,
    chainId: ""
  };
}

var CanonicalVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }

    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }

    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCanonicalVote();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;

        case 2:
          message.height = reader.sfixed64();
          break;

        case 3:
          message.round = reader.sfixed64();
          break;

        case 4:
          message.blockId = CanonicalBlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.chainId = reader.string();
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
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : 0,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? _helpers.Long.fromString(object.round) : _helpers.Long.ZERO,
      blockId: (0, _helpers.isSet)(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: (0, _helpers.isSet)(object.timestamp) ? (0, _helpers.fromJsonTimestamp)(object.timestamp) : undefined,
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = (0, _types.signedMsgTypeToJSON)(message.type));
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = (message.round || _helpers.Long.ZERO).toString());
    message.blockId !== undefined && (obj.blockId = message.blockId ? CanonicalBlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$timestamp2, _object$chainId2;

    var message = createBaseCanonicalVote();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? _helpers.Long.fromValue(object.round) : _helpers.Long.ZERO;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : undefined;
    message.chainId = (_object$chainId2 = object.chainId) !== null && _object$chainId2 !== void 0 ? _object$chainId2 : "";
    return message;
  }
};
exports.CanonicalVote = CanonicalVote;