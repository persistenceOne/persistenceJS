"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtocolVersion = exports.NetAddress = exports.DefaultNodeInfoOther = exports.DefaultNodeInfo = void 0;

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseNetAddress() {
  return {
    id: "",
    ip: "",
    port: 0
  };
}

var NetAddress = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }

    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNetAddress();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.ip = reader.string();
          break;

        case 3:
          message.port = reader.uint32();
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
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : "",
      ip: (0, _helpers.isSet)(object.ip) ? String(object.ip) : "",
      port: (0, _helpers.isSet)(object.port) ? Number(object.port) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$id, _object$ip, _object$port;

    var message = createBaseNetAddress();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.ip = (_object$ip = object.ip) !== null && _object$ip !== void 0 ? _object$ip : "";
    message.port = (_object$port = object.port) !== null && _object$port !== void 0 ? _object$port : 0;
    return message;
  }
};
exports.NetAddress = NetAddress;

function createBaseProtocolVersion() {
  return {
    p2p: _helpers.Long.UZERO,
    block: _helpers.Long.UZERO,
    app: _helpers.Long.UZERO
  };
}

var ProtocolVersion = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.p2p.isZero()) {
      writer.uint32(8).uint64(message.p2p);
    }

    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }

    if (!message.app.isZero()) {
      writer.uint32(24).uint64(message.app);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProtocolVersion();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;

        case 2:
          message.block = reader.uint64();
          break;

        case 3:
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
      p2p: (0, _helpers.isSet)(object.p2p) ? _helpers.Long.fromString(object.p2p) : _helpers.Long.UZERO,
      block: (0, _helpers.isSet)(object.block) ? _helpers.Long.fromString(object.block) : _helpers.Long.UZERO,
      app: (0, _helpers.isSet)(object.app) ? _helpers.Long.fromString(object.app) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || _helpers.Long.UZERO).toString());
    message.block !== undefined && (obj.block = (message.block || _helpers.Long.UZERO).toString());
    message.app !== undefined && (obj.app = (message.app || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? _helpers.Long.fromValue(object.p2p) : _helpers.Long.UZERO;
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? _helpers.Long.fromValue(object.app) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ProtocolVersion = ProtocolVersion;

function createBaseDefaultNodeInfo() {
  return {
    protocolVersion: undefined,
    defaultNodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: undefined
  };
}

var DefaultNodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }

    if (message.defaultNodeId !== "") {
      writer.uint32(18).string(message.defaultNodeId);
    }

    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }

    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }

    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }

    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }

    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }

    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDefaultNodeInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;

        case 2:
          message.defaultNodeId = reader.string();
          break;

        case 3:
          message.listenAddr = reader.string();
          break;

        case 4:
          message.network = reader.string();
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.channels = reader.bytes();
          break;

        case 7:
          message.moniker = reader.string();
          break;

        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
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
      protocolVersion: (0, _helpers.isSet)(object.protocolVersion) ? ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
      defaultNodeId: (0, _helpers.isSet)(object.defaultNodeId) ? String(object.defaultNodeId) : "",
      listenAddr: (0, _helpers.isSet)(object.listenAddr) ? String(object.listenAddr) : "",
      network: (0, _helpers.isSet)(object.network) ? String(object.network) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      channels: (0, _helpers.isSet)(object.channels) ? (0, _helpers.bytesFromBase64)(object.channels) : new Uint8Array(),
      moniker: (0, _helpers.isSet)(object.moniker) ? String(object.moniker) : "",
      other: (0, _helpers.isSet)(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : undefined);
    message.defaultNodeId !== undefined && (obj.defaultNodeId = message.defaultNodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined && (obj.channels = (0, _helpers.base64FromBytes)(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$defaultNodeId, _object$listenAddr, _object$network, _object$version, _object$channels, _object$moniker;

    var message = createBaseDefaultNodeInfo();
    message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
    message.defaultNodeId = (_object$defaultNodeId = object.defaultNodeId) !== null && _object$defaultNodeId !== void 0 ? _object$defaultNodeId : "";
    message.listenAddr = (_object$listenAddr = object.listenAddr) !== null && _object$listenAddr !== void 0 ? _object$listenAddr : "";
    message.network = (_object$network = object.network) !== null && _object$network !== void 0 ? _object$network : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.channels = (_object$channels = object.channels) !== null && _object$channels !== void 0 ? _object$channels : new Uint8Array();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.other = object.other !== undefined && object.other !== null ? DefaultNodeInfoOther.fromPartial(object.other) : undefined;
    return message;
  }
};
exports.DefaultNodeInfo = DefaultNodeInfo;

function createBaseDefaultNodeInfoOther() {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}

var DefaultNodeInfoOther = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }

    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDefaultNodeInfoOther();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;

        case 2:
          message.rpcAddress = reader.string();
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
      txIndex: (0, _helpers.isSet)(object.txIndex) ? String(object.txIndex) : "",
      rpcAddress: (0, _helpers.isSet)(object.rpcAddress) ? String(object.rpcAddress) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$txIndex, _object$rpcAddress;

    var message = createBaseDefaultNodeInfoOther();
    message.txIndex = (_object$txIndex = object.txIndex) !== null && _object$txIndex !== void 0 ? _object$txIndex : "";
    message.rpcAddress = (_object$rpcAddress = object.rpcAddress) !== null && _object$rpcAddress !== void 0 ? _object$rpcAddress : "";
    return message;
  }
};
exports.DefaultNodeInfoOther = DefaultNodeInfoOther;