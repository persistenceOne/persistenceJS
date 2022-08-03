"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterchainAccount = void 0;

var _auth = require("../../../../cosmos/auth/v1beta1/auth");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseInterchainAccount() {
  return {
    baseAccount: undefined,
    accountOwner: ""
  };
}

var InterchainAccount = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.baseAccount !== undefined) {
      _auth.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }

    if (message.accountOwner !== "") {
      writer.uint32(18).string(message.accountOwner);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterchainAccount();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseAccount = _auth.BaseAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.accountOwner = reader.string();
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
      baseAccount: (0, _helpers.isSet)(object.baseAccount) ? _auth.BaseAccount.fromJSON(object.baseAccount) : undefined,
      accountOwner: (0, _helpers.isSet)(object.accountOwner) ? String(object.accountOwner) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? _auth.BaseAccount.toJSON(message.baseAccount) : undefined);
    message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$accountOwner;

    var message = createBaseInterchainAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? _auth.BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.accountOwner = (_object$accountOwner = object.accountOwner) !== null && _object$accountOwner !== void 0 ? _object$accountOwner : "";
    return message;
  }
};
exports.InterchainAccount = InterchainAccount;