"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PacketPong = exports.PacketPing = exports.PacketMsg = exports.Packet = exports.AuthSigMessage = void 0;

var _keys = require("../crypto/keys");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBasePacketPing() {
  return {};
}

var PacketPing = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketPing();

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
    var message = createBasePacketPing();
    return message;
  }
};
exports.PacketPing = PacketPing;

function createBasePacketPong() {
  return {};
}

var PacketPong = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketPong();

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
    var message = createBasePacketPong();
    return message;
  }
};
exports.PacketPong = PacketPong;

function createBasePacketMsg() {
  return {
    channelId: 0,
    eof: false,
    data: new Uint8Array()
  };
}

var PacketMsg = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.channelId !== 0) {
      writer.uint32(8).int32(message.channelId);
    }

    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketMsg();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.int32();
          break;

        case 2:
          message.eof = reader.bool();
          break;

        case 3:
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
      channelId: (0, _helpers.isSet)(object.channelId) ? Number(object.channelId) : 0,
      eof: (0, _helpers.isSet)(object.eof) ? Boolean(object.eof) : false,
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.eof !== undefined && (obj.eof = message.eof);
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$channelId, _object$eof, _object$data;

    var message = createBasePacketMsg();
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : 0;
    message.eof = (_object$eof = object.eof) !== null && _object$eof !== void 0 ? _object$eof : false;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};
exports.PacketMsg = PacketMsg;

function createBasePacket() {
  return {
    packetPing: undefined,
    packetPong: undefined,
    packetMsg: undefined
  };
}

var Packet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.packetPing !== undefined) {
      PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
    }

    if (message.packetPong !== undefined) {
      PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
    }

    if (message.packetMsg !== undefined) {
      PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacket();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packetPing = PacketPing.decode(reader, reader.uint32());
          break;

        case 2:
          message.packetPong = PacketPong.decode(reader, reader.uint32());
          break;

        case 3:
          message.packetMsg = PacketMsg.decode(reader, reader.uint32());
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
      packetPing: (0, _helpers.isSet)(object.packetPing) ? PacketPing.fromJSON(object.packetPing) : undefined,
      packetPong: (0, _helpers.isSet)(object.packetPong) ? PacketPong.fromJSON(object.packetPong) : undefined,
      packetMsg: (0, _helpers.isSet)(object.packetMsg) ? PacketMsg.fromJSON(object.packetMsg) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.packetPing !== undefined && (obj.packetPing = message.packetPing ? PacketPing.toJSON(message.packetPing) : undefined);
    message.packetPong !== undefined && (obj.packetPong = message.packetPong ? PacketPong.toJSON(message.packetPong) : undefined);
    message.packetMsg !== undefined && (obj.packetMsg = message.packetMsg ? PacketMsg.toJSON(message.packetMsg) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePacket();
    message.packetPing = object.packetPing !== undefined && object.packetPing !== null ? PacketPing.fromPartial(object.packetPing) : undefined;
    message.packetPong = object.packetPong !== undefined && object.packetPong !== null ? PacketPong.fromPartial(object.packetPong) : undefined;
    message.packetMsg = object.packetMsg !== undefined && object.packetMsg !== null ? PacketMsg.fromPartial(object.packetMsg) : undefined;
    return message;
  }
};
exports.Packet = Packet;

function createBaseAuthSigMessage() {
  return {
    pubKey: undefined,
    sig: new Uint8Array()
  };
}

var AuthSigMessage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.pubKey !== undefined) {
      _keys.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthSigMessage();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = _keys.PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.sig = reader.bytes();
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
      pubKey: (0, _helpers.isSet)(object.pubKey) ? _keys.PublicKey.fromJSON(object.pubKey) : undefined,
      sig: (0, _helpers.isSet)(object.sig) ? (0, _helpers.bytesFromBase64)(object.sig) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? _keys.PublicKey.toJSON(message.pubKey) : undefined);
    message.sig !== undefined && (obj.sig = (0, _helpers.base64FromBytes)(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$sig;

    var message = createBaseAuthSigMessage();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _keys.PublicKey.fromPartial(object.pubKey) : undefined;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  }
};
exports.AuthSigMessage = AuthSigMessage;