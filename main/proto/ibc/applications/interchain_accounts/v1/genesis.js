"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisteredInterchainAccount = exports.HostGenesisState = exports.GenesisState = exports.ControllerGenesisState = exports.ActiveChannel = void 0;

var _controller = require("../controller/v1/controller");

var _host = require("../host/v1/host");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseGenesisState() {
  return {
    controllerGenesisState: undefined,
    hostGenesisState: undefined
  };
}

var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.controllerGenesisState !== undefined) {
      ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
    }

    if (message.hostGenesisState !== undefined) {
      HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
          break;

        case 2:
          message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
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
      controllerGenesisState: (0, _helpers.isSet)(object.controllerGenesisState) ? ControllerGenesisState.fromJSON(object.controllerGenesisState) : undefined,
      hostGenesisState: (0, _helpers.isSet)(object.hostGenesisState) ? HostGenesisState.fromJSON(object.hostGenesisState) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.controllerGenesisState !== undefined && (obj.controllerGenesisState = message.controllerGenesisState ? ControllerGenesisState.toJSON(message.controllerGenesisState) : undefined);
    message.hostGenesisState !== undefined && (obj.hostGenesisState = message.hostGenesisState ? HostGenesisState.toJSON(message.hostGenesisState) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGenesisState();
    message.controllerGenesisState = object.controllerGenesisState !== undefined && object.controllerGenesisState !== null ? ControllerGenesisState.fromPartial(object.controllerGenesisState) : undefined;
    message.hostGenesisState = object.hostGenesisState !== undefined && object.hostGenesisState !== null ? HostGenesisState.fromPartial(object.hostGenesisState) : undefined;
    return message;
  }
};
exports.GenesisState = GenesisState;

function createBaseControllerGenesisState() {
  return {
    activeChannels: [],
    interchainAccounts: [],
    ports: [],
    params: undefined
  };
}

var ControllerGenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator = _createForOfIteratorHelper(message.activeChannels),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(message.interchainAccounts),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        RegisteredInterchainAccount.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(message.ports),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        writer.uint32(26).string(_v2);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (message.params !== undefined) {
      _controller.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseControllerGenesisState();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ports.push(reader.string());
          break;

        case 4:
          message.params = _controller.Params.decode(reader, reader.uint32());
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
      activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels) ? object.activeChannels.map(function (e) {
        return ActiveChannel.fromJSON(e);
      }) : [],
      interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts) ? object.interchainAccounts.map(function (e) {
        return RegisteredInterchainAccount.fromJSON(e);
      }) : [],
      ports: Array.isArray(object === null || object === void 0 ? void 0 : object.ports) ? object.ports.map(function (e) {
        return String(e);
      }) : [],
      params: (0, _helpers.isSet)(object.params) ? _controller.Params.fromJSON(object.params) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map(function (e) {
        return e ? ActiveChannel.toJSON(e) : undefined;
      });
    } else {
      obj.activeChannels = [];
    }

    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map(function (e) {
        return e ? RegisteredInterchainAccount.toJSON(e) : undefined;
      });
    } else {
      obj.interchainAccounts = [];
    }

    if (message.ports) {
      obj.ports = message.ports.map(function (e) {
        return e;
      });
    } else {
      obj.ports = [];
    }

    message.params !== undefined && (obj.params = message.params ? _controller.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$activeChannel, _object$interchainAcc, _object$ports;

    var message = createBaseControllerGenesisState();
    message.activeChannels = ((_object$activeChannel = object.activeChannels) === null || _object$activeChannel === void 0 ? void 0 : _object$activeChannel.map(function (e) {
      return ActiveChannel.fromPartial(e);
    })) || [];
    message.interchainAccounts = ((_object$interchainAcc = object.interchainAccounts) === null || _object$interchainAcc === void 0 ? void 0 : _object$interchainAcc.map(function (e) {
      return RegisteredInterchainAccount.fromPartial(e);
    })) || [];
    message.ports = ((_object$ports = object.ports) === null || _object$ports === void 0 ? void 0 : _object$ports.map(function (e) {
      return e;
    })) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.ControllerGenesisState = ControllerGenesisState;

function createBaseHostGenesisState() {
  return {
    activeChannels: [],
    interchainAccounts: [],
    port: "",
    params: undefined
  };
}

var HostGenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.activeChannels),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var _iterator5 = _createForOfIteratorHelper(message.interchainAccounts),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        RegisteredInterchainAccount.encode(_v3, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }

    if (message.params !== undefined) {
      _host.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHostGenesisState();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.port = reader.string();
          break;

        case 4:
          message.params = _host.Params.decode(reader, reader.uint32());
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
      activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels) ? object.activeChannels.map(function (e) {
        return ActiveChannel.fromJSON(e);
      }) : [],
      interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts) ? object.interchainAccounts.map(function (e) {
        return RegisteredInterchainAccount.fromJSON(e);
      }) : [],
      port: (0, _helpers.isSet)(object.port) ? String(object.port) : "",
      params: (0, _helpers.isSet)(object.params) ? _host.Params.fromJSON(object.params) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map(function (e) {
        return e ? ActiveChannel.toJSON(e) : undefined;
      });
    } else {
      obj.activeChannels = [];
    }

    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map(function (e) {
        return e ? RegisteredInterchainAccount.toJSON(e) : undefined;
      });
    } else {
      obj.interchainAccounts = [];
    }

    message.port !== undefined && (obj.port = message.port);
    message.params !== undefined && (obj.params = message.params ? _host.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$activeChannel2, _object$interchainAcc2, _object$port;

    var message = createBaseHostGenesisState();
    message.activeChannels = ((_object$activeChannel2 = object.activeChannels) === null || _object$activeChannel2 === void 0 ? void 0 : _object$activeChannel2.map(function (e) {
      return ActiveChannel.fromPartial(e);
    })) || [];
    message.interchainAccounts = ((_object$interchainAcc2 = object.interchainAccounts) === null || _object$interchainAcc2 === void 0 ? void 0 : _object$interchainAcc2.map(function (e) {
      return RegisteredInterchainAccount.fromPartial(e);
    })) || [];
    message.port = (_object$port = object.port) !== null && _object$port !== void 0 ? _object$port : "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.HostGenesisState = HostGenesisState;

function createBaseActiveChannel() {
  return {
    connectionId: "",
    portId: "",
    channelId: ""
  };
}

var ActiveChannel = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseActiveChannel();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.portId = reader.string();
          break;

        case 3:
          message.channelId = reader.string();
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
      connectionId: (0, _helpers.isSet)(object.connectionId) ? String(object.connectionId) : "",
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      channelId: (0, _helpers.isSet)(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionId, _object$portId, _object$channelId;

    var message = createBaseActiveChannel();
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }
};
exports.ActiveChannel = ActiveChannel;

function createBaseRegisteredInterchainAccount() {
  return {
    connectionId: "",
    portId: "",
    accountAddress: ""
  };
}

var RegisteredInterchainAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRegisteredInterchainAccount();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.portId = reader.string();
          break;

        case 3:
          message.accountAddress = reader.string();
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
      connectionId: (0, _helpers.isSet)(object.connectionId) ? String(object.connectionId) : "",
      portId: (0, _helpers.isSet)(object.portId) ? String(object.portId) : "",
      accountAddress: (0, _helpers.isSet)(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionId2, _object$portId2, _object$accountAddres;

    var message = createBaseRegisteredInterchainAccount();
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.accountAddress = (_object$accountAddres = object.accountAddress) !== null && _object$accountAddres !== void 0 ? _object$accountAddres : "";
    return message;
  }
};
exports.RegisteredInterchainAccount = RegisteredInterchainAccount;