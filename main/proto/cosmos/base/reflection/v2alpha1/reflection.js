"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxDescriptor = exports.SigningModeDescriptor = exports.QueryServicesDescriptor = exports.QueryServiceDescriptor = exports.QueryMethodDescriptor = exports.MsgDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.ConfigurationDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.AuthnDescriptor = exports.AppDescriptor = void 0;

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseAppDescriptor() {
  return {
    authn: undefined,
    chain: undefined,
    codec: undefined,
    configuration: undefined,
    queryServices: undefined,
    tx: undefined
  };
}

var AppDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }

    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }

    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }

    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }

    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }

    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAppDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;

        case 5:
          message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;

        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
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
      authn: (0, _helpers.isSet)(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
      chain: (0, _helpers.isSet)(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
      codec: (0, _helpers.isSet)(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
      configuration: (0, _helpers.isSet)(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
      queryServices: (0, _helpers.isSet)(object.queryServices) ? QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
      tx: (0, _helpers.isSet)(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    message.configuration !== undefined && (obj.configuration = message.configuration ? ConfigurationDescriptor.toJSON(message.configuration) : undefined);
    message.queryServices !== undefined && (obj.queryServices = message.queryServices ? QueryServicesDescriptor.toJSON(message.queryServices) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
exports.AppDescriptor = AppDescriptor;

function createBaseTxDescriptor() {
  return {
    fullname: "",
    msgs: []
  };
}

var TxDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    var _iterator = _createForOfIteratorHelper(message.msgs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(function (e) {
        return MsgDescriptor.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);

    if (message.msgs) {
      obj.msgs = message.msgs.map(function (e) {
        return e ? MsgDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.msgs = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname, _object$msgs;

    var message = createBaseTxDescriptor();
    message.fullname = (_object$fullname = object.fullname) !== null && _object$fullname !== void 0 ? _object$fullname : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map(function (e) {
      return MsgDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxDescriptor = TxDescriptor;

function createBaseAuthnDescriptor() {
  return {
    signModes: []
  };
}

var AuthnDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator2 = _createForOfIteratorHelper(message.signModes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthnDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
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
      signModes: Array.isArray(object === null || object === void 0 ? void 0 : object.signModes) ? object.signModes.map(function (e) {
        return SigningModeDescriptor.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.signModes) {
      obj.signModes = message.signModes.map(function (e) {
        return e ? SigningModeDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.signModes = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$signModes;

    var message = createBaseAuthnDescriptor();
    message.signModes = ((_object$signModes = object.signModes) === null || _object$signModes === void 0 ? void 0 : _object$signModes.map(function (e) {
      return SigningModeDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.AuthnDescriptor = AuthnDescriptor;

function createBaseSigningModeDescriptor() {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}

var SigningModeDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }

    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSigningModeDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.number = reader.int32();
          break;

        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
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
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      number: (0, _helpers.isSet)(object.number) ? Number(object.number) : 0,
      authnInfoProviderMethodFullname: (0, _helpers.isSet)(object.authnInfoProviderMethodFullname) ? String(object.authnInfoProviderMethodFullname) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.authnInfoProviderMethodFullname !== undefined && (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$number, _object$authnInfoProv;

    var message = createBaseSigningModeDescriptor();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.authnInfoProviderMethodFullname = (_object$authnInfoProv = object.authnInfoProviderMethodFullname) !== null && _object$authnInfoProv !== void 0 ? _object$authnInfoProv : "";
    return message;
  }
};
exports.SigningModeDescriptor = SigningModeDescriptor;

function createBaseChainDescriptor() {
  return {
    id: ""
  };
}

var ChainDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChainDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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
      id: (0, _helpers.isSet)(object.id) ? String(object.id) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$id;

    var message = createBaseChainDescriptor();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  }
};
exports.ChainDescriptor = ChainDescriptor;

function createBaseCodecDescriptor() {
  return {
    interfaces: []
  };
}

var CodecDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator3 = _createForOfIteratorHelper(message.interfaces),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCodecDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
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
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(function (e) {
        return InterfaceDescriptor.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(function (e) {
        return e ? InterfaceDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.interfaces = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$interfaces;

    var message = createBaseCodecDescriptor();
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(function (e) {
      return InterfaceDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.CodecDescriptor = CodecDescriptor;

function createBaseInterfaceDescriptor() {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}

var InterfaceDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    var _iterator4 = _createForOfIteratorHelper(message.interfaceAcceptingMessages),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var _iterator5 = _createForOfIteratorHelper(message.interfaceImplementers),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v = _step5.value;
        InterfaceImplementerDescriptor.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      interfaceAcceptingMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaceAcceptingMessages) ? object.interfaceAcceptingMessages.map(function (e) {
        return InterfaceAcceptingMessageDescriptor.fromJSON(e);
      }) : [],
      interfaceImplementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaceImplementers) ? object.interfaceImplementers.map(function (e) {
        return InterfaceImplementerDescriptor.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);

    if (message.interfaceAcceptingMessages) {
      obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(function (e) {
        return e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.interfaceAcceptingMessages = [];
    }

    if (message.interfaceImplementers) {
      obj.interfaceImplementers = message.interfaceImplementers.map(function (e) {
        return e ? InterfaceImplementerDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.interfaceImplementers = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname2, _object$interfaceAcce, _object$interfaceImpl;

    var message = createBaseInterfaceDescriptor();
    message.fullname = (_object$fullname2 = object.fullname) !== null && _object$fullname2 !== void 0 ? _object$fullname2 : "";
    message.interfaceAcceptingMessages = ((_object$interfaceAcce = object.interfaceAcceptingMessages) === null || _object$interfaceAcce === void 0 ? void 0 : _object$interfaceAcce.map(function (e) {
      return InterfaceAcceptingMessageDescriptor.fromPartial(e);
    })) || [];
    message.interfaceImplementers = ((_object$interfaceImpl = object.interfaceImplementers) === null || _object$interfaceImpl === void 0 ? void 0 : _object$interfaceImpl.map(function (e) {
      return InterfaceImplementerDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.InterfaceDescriptor = InterfaceDescriptor;

function createBaseInterfaceImplementerDescriptor() {
  return {
    fullname: "",
    typeUrl: ""
  };
}

var InterfaceImplementerDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceImplementerDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.typeUrl = reader.string();
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      typeUrl: (0, _helpers.isSet)(object.typeUrl) ? String(object.typeUrl) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname3, _object$typeUrl;

    var message = createBaseInterfaceImplementerDescriptor();
    message.fullname = (_object$fullname3 = object.fullname) !== null && _object$fullname3 !== void 0 ? _object$fullname3 : "";
    message.typeUrl = (_object$typeUrl = object.typeUrl) !== null && _object$typeUrl !== void 0 ? _object$typeUrl : "";
    return message;
  }
};
exports.InterfaceImplementerDescriptor = InterfaceImplementerDescriptor;

function createBaseInterfaceAcceptingMessageDescriptor() {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}

var InterfaceAcceptingMessageDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    var _iterator6 = _createForOfIteratorHelper(message.fieldDescriptorNames),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceAcceptingMessageDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.fieldDescriptorNames.push(reader.string());
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      fieldDescriptorNames: Array.isArray(object === null || object === void 0 ? void 0 : object.fieldDescriptorNames) ? object.fieldDescriptorNames.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);

    if (message.fieldDescriptorNames) {
      obj.fieldDescriptorNames = message.fieldDescriptorNames.map(function (e) {
        return e;
      });
    } else {
      obj.fieldDescriptorNames = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname4, _object$fieldDescript;

    var message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = (_object$fullname4 = object.fullname) !== null && _object$fullname4 !== void 0 ? _object$fullname4 : "";
    message.fieldDescriptorNames = ((_object$fieldDescript = object.fieldDescriptorNames) === null || _object$fieldDescript === void 0 ? void 0 : _object$fieldDescript.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.InterfaceAcceptingMessageDescriptor = InterfaceAcceptingMessageDescriptor;

function createBaseConfigurationDescriptor() {
  return {
    bech32AccountAddressPrefix: ""
  };
}

var ConfigurationDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConfigurationDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
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
      bech32AccountAddressPrefix: (0, _helpers.isSet)(object.bech32AccountAddressPrefix) ? String(object.bech32AccountAddressPrefix) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bech32AccountAddressPrefix !== undefined && (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bech32Account;

    var message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = (_object$bech32Account = object.bech32AccountAddressPrefix) !== null && _object$bech32Account !== void 0 ? _object$bech32Account : "";
    return message;
  }
};
exports.ConfigurationDescriptor = ConfigurationDescriptor;

function createBaseMsgDescriptor() {
  return {
    msgTypeUrl: ""
  };
}

var MsgDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
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
      msgTypeUrl: (0, _helpers.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgTypeUrl;

    var message = createBaseMsgDescriptor();
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    return message;
  }
};
exports.MsgDescriptor = MsgDescriptor;

function createBaseGetAuthnDescriptorRequest() {
  return {};
}

var GetAuthnDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAuthnDescriptorRequest();

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
    var message = createBaseGetAuthnDescriptorRequest();
    return message;
  }
};
exports.GetAuthnDescriptorRequest = GetAuthnDescriptorRequest;

function createBaseGetAuthnDescriptorResponse() {
  return {
    authn: undefined
  };
}

var GetAuthnDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetAuthnDescriptorResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
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
      authn: (0, _helpers.isSet)(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  }
};
exports.GetAuthnDescriptorResponse = GetAuthnDescriptorResponse;

function createBaseGetChainDescriptorRequest() {
  return {};
}

var GetChainDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetChainDescriptorRequest();

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
    var message = createBaseGetChainDescriptorRequest();
    return message;
  }
};
exports.GetChainDescriptorRequest = GetChainDescriptorRequest;

function createBaseGetChainDescriptorResponse() {
  return {
    chain: undefined
  };
}

var GetChainDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetChainDescriptorResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
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
      chain: (0, _helpers.isSet)(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  }
};
exports.GetChainDescriptorResponse = GetChainDescriptorResponse;

function createBaseGetCodecDescriptorRequest() {
  return {};
}

var GetCodecDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetCodecDescriptorRequest();

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
    var message = createBaseGetCodecDescriptorRequest();
    return message;
  }
};
exports.GetCodecDescriptorRequest = GetCodecDescriptorRequest;

function createBaseGetCodecDescriptorResponse() {
  return {
    codec: undefined
  };
}

var GetCodecDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetCodecDescriptorResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
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
      codec: (0, _helpers.isSet)(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  }
};
exports.GetCodecDescriptorResponse = GetCodecDescriptorResponse;

function createBaseGetConfigurationDescriptorRequest() {
  return {};
}

var GetConfigurationDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetConfigurationDescriptorRequest();

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
    var message = createBaseGetConfigurationDescriptorRequest();
    return message;
  }
};
exports.GetConfigurationDescriptorRequest = GetConfigurationDescriptorRequest;

function createBaseGetConfigurationDescriptorResponse() {
  return {
    config: undefined
  };
}

var GetConfigurationDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetConfigurationDescriptorResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
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
      config: (0, _helpers.isSet)(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.config !== undefined && (obj.config = message.config ? ConfigurationDescriptor.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  }
};
exports.GetConfigurationDescriptorResponse = GetConfigurationDescriptorResponse;

function createBaseGetQueryServicesDescriptorRequest() {
  return {};
}

var GetQueryServicesDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetQueryServicesDescriptorRequest();

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
    var message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  }
};
exports.GetQueryServicesDescriptorRequest = GetQueryServicesDescriptorRequest;

function createBaseGetQueryServicesDescriptorResponse() {
  return {
    queries: undefined
  };
}

var GetQueryServicesDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetQueryServicesDescriptorResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
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
      queries: (0, _helpers.isSet)(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.queries !== undefined && (obj.queries = message.queries ? QueryServicesDescriptor.toJSON(message.queries) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  }
};
exports.GetQueryServicesDescriptorResponse = GetQueryServicesDescriptorResponse;

function createBaseGetTxDescriptorRequest() {
  return {};
}

var GetTxDescriptorRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxDescriptorRequest();

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
    var message = createBaseGetTxDescriptorRequest();
    return message;
  }
};
exports.GetTxDescriptorRequest = GetTxDescriptorRequest;

function createBaseGetTxDescriptorResponse() {
  return {
    tx: undefined
  };
}

var GetTxDescriptorResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxDescriptorResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
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
      tx: (0, _helpers.isSet)(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
exports.GetTxDescriptorResponse = GetTxDescriptorResponse;

function createBaseQueryServicesDescriptor() {
  return {
    queryServices: []
  };
}

var QueryServicesDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator7 = _createForOfIteratorHelper(message.queryServices),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryServicesDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
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
      queryServices: Array.isArray(object === null || object === void 0 ? void 0 : object.queryServices) ? object.queryServices.map(function (e) {
        return QueryServiceDescriptor.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.queryServices) {
      obj.queryServices = message.queryServices.map(function (e) {
        return e ? QueryServiceDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.queryServices = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$queryServices;

    var message = createBaseQueryServicesDescriptor();
    message.queryServices = ((_object$queryServices = object.queryServices) === null || _object$queryServices === void 0 ? void 0 : _object$queryServices.map(function (e) {
      return QueryServiceDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryServicesDescriptor = QueryServicesDescriptor;

function createBaseQueryServiceDescriptor() {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}

var QueryServiceDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }

    var _iterator8 = _createForOfIteratorHelper(message.methods),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryServiceDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.isModule = reader.bool();
          break;

        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
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
      fullname: (0, _helpers.isSet)(object.fullname) ? String(object.fullname) : "",
      isModule: (0, _helpers.isSet)(object.isModule) ? Boolean(object.isModule) : false,
      methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(function (e) {
        return QueryMethodDescriptor.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.isModule !== undefined && (obj.isModule = message.isModule);

    if (message.methods) {
      obj.methods = message.methods.map(function (e) {
        return e ? QueryMethodDescriptor.toJSON(e) : undefined;
      });
    } else {
      obj.methods = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$fullname5, _object$isModule, _object$methods;

    var message = createBaseQueryServiceDescriptor();
    message.fullname = (_object$fullname5 = object.fullname) !== null && _object$fullname5 !== void 0 ? _object$fullname5 : "";
    message.isModule = (_object$isModule = object.isModule) !== null && _object$isModule !== void 0 ? _object$isModule : false;
    message.methods = ((_object$methods = object.methods) === null || _object$methods === void 0 ? void 0 : _object$methods.map(function (e) {
      return QueryMethodDescriptor.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryServiceDescriptor = QueryServiceDescriptor;

function createBaseQueryMethodDescriptor() {
  return {
    name: "",
    fullQueryPath: ""
  };
}

var QueryMethodDescriptor = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryMethodDescriptor();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.fullQueryPath = reader.string();
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
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      fullQueryPath: (0, _helpers.isSet)(object.fullQueryPath) ? String(object.fullQueryPath) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$fullQueryPath;

    var message = createBaseQueryMethodDescriptor();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.fullQueryPath = (_object$fullQueryPath = object.fullQueryPath) !== null && _object$fullQueryPath !== void 0 ? _object$fullQueryPath : "";
    return message;
  }
};
exports.QueryMethodDescriptor = QueryMethodDescriptor;