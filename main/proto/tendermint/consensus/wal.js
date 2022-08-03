"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WALMessage = exports.TimeoutInfo = exports.TimedWALMessage = exports.MsgInfo = exports.EndHeight = void 0;

var _types = require("./types");

var _duration = require("../../google/protobuf/duration");

var _events = require("../types/events");

var _timestamp = require("../../google/protobuf/timestamp");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseMsgInfo() {
  return {
    msg: undefined,
    peerId: ""
  };
}

var MsgInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.msg !== undefined) {
      _types.Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }

    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msg = _types.Message.decode(reader, reader.uint32());
          break;

        case 2:
          message.peerId = reader.string();
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
      msg: (0, _helpers.isSet)(object.msg) ? _types.Message.fromJSON(object.msg) : undefined,
      peerId: (0, _helpers.isSet)(object.peerId) ? String(object.peerId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.msg !== undefined && (obj.msg = message.msg ? _types.Message.toJSON(message.msg) : undefined);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$peerId;

    var message = createBaseMsgInfo();
    message.msg = object.msg !== undefined && object.msg !== null ? _types.Message.fromPartial(object.msg) : undefined;
    message.peerId = (_object$peerId = object.peerId) !== null && _object$peerId !== void 0 ? _object$peerId : "";
    return message;
  }
};
exports.MsgInfo = MsgInfo;

function createBaseTimeoutInfo() {
  return {
    duration: undefined,
    height: _helpers.Long.ZERO,
    round: 0,
    step: 0
  };
}

var TimeoutInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimeoutInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.height = reader.int64();
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.step = reader.uint32();
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
      duration: (0, _helpers.isSet)(object.duration) ? _duration.Duration.fromJSON(object.duration) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      step: (0, _helpers.isSet)(object.step) ? Number(object.step) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.duration !== undefined && (obj.duration = message.duration);
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.step !== undefined && (obj.step = Math.round(message.step));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$duration, _object$round, _object$step;

    var message = createBaseTimeoutInfo();
    message.duration = (_object$duration = object.duration) !== null && _object$duration !== void 0 ? _object$duration : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    return message;
  }
};
exports.TimeoutInfo = TimeoutInfo;

function createBaseEndHeight() {
  return {
    height: _helpers.Long.ZERO
  };
}

var EndHeight = {
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
    var message = createBaseEndHeight();

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
    var message = createBaseEndHeight();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.EndHeight = EndHeight;

function createBaseWALMessage() {
  return {
    eventDataRoundState: undefined,
    msgInfo: undefined,
    timeoutInfo: undefined,
    endHeight: undefined
  };
}

var WALMessage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.eventDataRoundState !== undefined) {
      _events.EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
    }

    if (message.msgInfo !== undefined) {
      MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.timeoutInfo !== undefined) {
      TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
    }

    if (message.endHeight !== undefined) {
      EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWALMessage();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventDataRoundState = _events.EventDataRoundState.decode(reader, reader.uint32());
          break;

        case 2:
          message.msgInfo = MsgInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.timeoutInfo = TimeoutInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.endHeight = EndHeight.decode(reader, reader.uint32());
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
      eventDataRoundState: (0, _helpers.isSet)(object.eventDataRoundState) ? _events.EventDataRoundState.fromJSON(object.eventDataRoundState) : undefined,
      msgInfo: (0, _helpers.isSet)(object.msgInfo) ? MsgInfo.fromJSON(object.msgInfo) : undefined,
      timeoutInfo: (0, _helpers.isSet)(object.timeoutInfo) ? TimeoutInfo.fromJSON(object.timeoutInfo) : undefined,
      endHeight: (0, _helpers.isSet)(object.endHeight) ? EndHeight.fromJSON(object.endHeight) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.eventDataRoundState !== undefined && (obj.eventDataRoundState = message.eventDataRoundState ? _events.EventDataRoundState.toJSON(message.eventDataRoundState) : undefined);
    message.msgInfo !== undefined && (obj.msgInfo = message.msgInfo ? MsgInfo.toJSON(message.msgInfo) : undefined);
    message.timeoutInfo !== undefined && (obj.timeoutInfo = message.timeoutInfo ? TimeoutInfo.toJSON(message.timeoutInfo) : undefined);
    message.endHeight !== undefined && (obj.endHeight = message.endHeight ? EndHeight.toJSON(message.endHeight) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseWALMessage();
    message.eventDataRoundState = object.eventDataRoundState !== undefined && object.eventDataRoundState !== null ? _events.EventDataRoundState.fromPartial(object.eventDataRoundState) : undefined;
    message.msgInfo = object.msgInfo !== undefined && object.msgInfo !== null ? MsgInfo.fromPartial(object.msgInfo) : undefined;
    message.timeoutInfo = object.timeoutInfo !== undefined && object.timeoutInfo !== null ? TimeoutInfo.fromPartial(object.timeoutInfo) : undefined;
    message.endHeight = object.endHeight !== undefined && object.endHeight !== null ? EndHeight.fromPartial(object.endHeight) : undefined;
    return message;
  }
};
exports.WALMessage = WALMessage;

function createBaseTimedWALMessage() {
  return {
    time: undefined,
    msg: undefined
  };
}

var TimedWALMessage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
    }

    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTimedWALMessage();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.msg = WALMessage.decode(reader, reader.uint32());
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
      time: (0, _helpers.isSet)(object.time) ? (0, _helpers.fromJsonTimestamp)(object.time) : undefined,
      msg: (0, _helpers.isSet)(object.msg) ? WALMessage.fromJSON(object.msg) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.msg !== undefined && (obj.msg = message.msg ? WALMessage.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$time;

    var message = createBaseTimedWALMessage();
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.msg = object.msg !== undefined && object.msg !== null ? WALMessage.fromPartial(object.msg) : undefined;
    return message;
  }
};
exports.TimedWALMessage = TimedWALMessage;