"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgIBCSend = exports.MsgIBCCloseChannel = void 0;

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseMsgIBCSend() {
  return {
    channel: "",
    timeoutHeight: _helpers.Long.UZERO,
    timeoutTimestamp: _helpers.Long.UZERO,
    data: new Uint8Array()
  };
}

var MsgIBCSend = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIBCSend();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      channel: (0, _helpers.isSet)(object.channel) ? String(object.channel) : "",
      timeoutHeight: (0, _helpers.isSet)(object.timeoutHeight) ? _helpers.Long.fromString(object.timeoutHeight) : _helpers.Long.UZERO,
      timeoutTimestamp: (0, _helpers.isSet)(object.timeoutTimestamp) ? _helpers.Long.fromString(object.timeoutTimestamp) : _helpers.Long.UZERO,
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || _helpers.Long.UZERO).toString());
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || _helpers.Long.UZERO).toString());
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$channel, _object$data;

    var message = createBaseMsgIBCSend();
    message.channel = (_object$channel = object.channel) !== null && _object$channel !== void 0 ? _object$channel : "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? _helpers.Long.fromValue(object.timeoutHeight) : _helpers.Long.UZERO;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? _helpers.Long.fromValue(object.timeoutTimestamp) : _helpers.Long.UZERO;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
exports.MsgIBCSend = MsgIBCSend;

function createBaseMsgIBCCloseChannel() {
  return {
    channel: ""
  };
}

var MsgIBCCloseChannel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgIBCCloseChannel();

    while (reader.pos < end) {
      var tag = reader.uint32();

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
  fromJSON: function fromJSON(object) {
    return {
      channel: (0, _helpers.isSet)(object.channel) ? String(object.channel) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$channel2;

    var message = createBaseMsgIBCCloseChannel();
    message.channel = (_object$channel2 = object.channel) !== null && _object$channel2 !== void 0 ? _object$channel2 : "";
    return message;
  }
};
exports.MsgIBCCloseChannel = MsgIBCCloseChannel;