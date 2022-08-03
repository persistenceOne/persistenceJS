"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consensus = exports.App = void 0;

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseApp() {
  return {
    protocol: _helpers.Long.UZERO,
    software: ""
  };
}

var App = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.protocol.isZero()) {
      writer.uint32(8).uint64(message.protocol);
    }

    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseApp();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      protocol: (0, _helpers.isSet)(object.protocol) ? _helpers.Long.fromString(object.protocol) : _helpers.Long.UZERO,
      software: (0, _helpers.isSet)(object.software) ? String(object.software) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.protocol !== undefined && (obj.protocol = (message.protocol || _helpers.Long.UZERO).toString());
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$software;

    var message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? _helpers.Long.fromValue(object.protocol) : _helpers.Long.UZERO;
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  }
};
exports.App = App;

function createBaseConsensus() {
  return {
    block: _helpers.Long.UZERO,
    app: _helpers.Long.UZERO
  };
}

var Consensus = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }

    if (!message.app.isZero()) {
      writer.uint32(16).uint64(message.app);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensus();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      block: (0, _helpers.isSet)(object.block) ? _helpers.Long.fromString(object.block) : _helpers.Long.UZERO,
      app: (0, _helpers.isSet)(object.app) ? _helpers.Long.fromString(object.app) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.block !== undefined && (obj.block = (message.block || _helpers.Long.UZERO).toString());
    message.app !== undefined && (obj.app = (message.app || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? _helpers.Long.fromValue(object.app) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Consensus = Consensus;