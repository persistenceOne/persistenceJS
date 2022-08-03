"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metadata = void 0;

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseMetadata() {
  return {
    version: "",
    controllerConnectionId: "",
    hostConnectionId: "",
    address: "",
    encoding: "",
    txType: ""
  };
}

var Metadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }

    if (message.controllerConnectionId !== "") {
      writer.uint32(18).string(message.controllerConnectionId);
    }

    if (message.hostConnectionId !== "") {
      writer.uint32(26).string(message.hostConnectionId);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    if (message.encoding !== "") {
      writer.uint32(42).string(message.encoding);
    }

    if (message.txType !== "") {
      writer.uint32(50).string(message.txType);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMetadata();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;

        case 2:
          message.controllerConnectionId = reader.string();
          break;

        case 3:
          message.hostConnectionId = reader.string();
          break;

        case 4:
          message.address = reader.string();
          break;

        case 5:
          message.encoding = reader.string();
          break;

        case 6:
          message.txType = reader.string();
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
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      controllerConnectionId: (0, _helpers.isSet)(object.controllerConnectionId) ? String(object.controllerConnectionId) : "",
      hostConnectionId: (0, _helpers.isSet)(object.hostConnectionId) ? String(object.hostConnectionId) : "",
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      encoding: (0, _helpers.isSet)(object.encoding) ? String(object.encoding) : "",
      txType: (0, _helpers.isSet)(object.txType) ? String(object.txType) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.version !== undefined && (obj.version = message.version);
    message.controllerConnectionId !== undefined && (obj.controllerConnectionId = message.controllerConnectionId);
    message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
    message.address !== undefined && (obj.address = message.address);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.txType !== undefined && (obj.txType = message.txType);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$version, _object$controllerCon, _object$hostConnectio, _object$address, _object$encoding, _object$txType;

    var message = createBaseMetadata();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.controllerConnectionId = (_object$controllerCon = object.controllerConnectionId) !== null && _object$controllerCon !== void 0 ? _object$controllerCon : "";
    message.hostConnectionId = (_object$hostConnectio = object.hostConnectionId) !== null && _object$hostConnectio !== void 0 ? _object$hostConnectio : "";
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.encoding = (_object$encoding = object.encoding) !== null && _object$encoding !== void 0 ? _object$encoding : "";
    message.txType = (_object$txType = object.txType) !== null && _object$txType !== void 0 ? _object$txType : "";
    return message;
  }
};
exports.Metadata = Metadata;