"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.ValidatorsInfo = exports.State = exports.ConsensusParamsInfo = exports.ABCIResponses = void 0;

var _types = require("../abci/types");

var _validator = require("../types/validator");

var _params = require("../types/params");

var _types2 = require("../version/types");

var _types3 = require("../types/types");

var _timestamp = require("../../google/protobuf/timestamp");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseABCIResponses() {
  return {
    deliverTxs: [],
    endBlock: undefined,
    beginBlock: undefined
  };
}

var ABCIResponses = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator = _createForOfIteratorHelper(message.deliverTxs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;

        _types.ResponseDeliverTx.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.endBlock !== undefined) {
      _types.ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.beginBlock !== undefined) {
      _types.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseABCIResponses();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deliverTxs.push(_types.ResponseDeliverTx.decode(reader, reader.uint32()));
          break;

        case 2:
          message.endBlock = _types.ResponseEndBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.beginBlock = _types.ResponseBeginBlock.decode(reader, reader.uint32());
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
      deliverTxs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliverTxs) ? object.deliverTxs.map(function (e) {
        return _types.ResponseDeliverTx.fromJSON(e);
      }) : [],
      endBlock: (0, _helpers.isSet)(object.endBlock) ? _types.ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      beginBlock: (0, _helpers.isSet)(object.beginBlock) ? _types.ResponseBeginBlock.fromJSON(object.beginBlock) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.deliverTxs) {
      obj.deliverTxs = message.deliverTxs.map(function (e) {
        return e ? _types.ResponseDeliverTx.toJSON(e) : undefined;
      });
    } else {
      obj.deliverTxs = [];
    }

    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? _types.ResponseEndBlock.toJSON(message.endBlock) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? _types.ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$deliverTxs;

    var message = createBaseABCIResponses();
    message.deliverTxs = ((_object$deliverTxs = object.deliverTxs) === null || _object$deliverTxs === void 0 ? void 0 : _object$deliverTxs.map(function (e) {
      return _types.ResponseDeliverTx.fromPartial(e);
    })) || [];
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? _types.ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? _types.ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    return message;
  }
};
exports.ABCIResponses = ABCIResponses;

function createBaseValidatorsInfo() {
  return {
    validatorSet: undefined,
    lastHeightChanged: _helpers.Long.ZERO
  };
}

var ValidatorsInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.validatorSet !== undefined) {
      _validator.ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorsInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorSet = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastHeightChanged = reader.int64();
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
      validatorSet: (0, _helpers.isSet)(object.validatorSet) ? _validator.ValidatorSet.fromJSON(object.validatorSet) : undefined,
      lastHeightChanged: (0, _helpers.isSet)(object.lastHeightChanged) ? _helpers.Long.fromString(object.lastHeightChanged) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? _validator.ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.lastHeightChanged !== undefined && (obj.lastHeightChanged = (message.lastHeightChanged || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseValidatorsInfo();
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? _validator.ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? _helpers.Long.fromValue(object.lastHeightChanged) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorsInfo = ValidatorsInfo;

function createBaseConsensusParamsInfo() {
  return {
    consensusParams: undefined,
    lastHeightChanged: _helpers.Long.ZERO
  };
}

var ConsensusParamsInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.consensusParams !== undefined) {
      _params.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParamsInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusParams = _params.ConsensusParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastHeightChanged = reader.int64();
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
      consensusParams: (0, _helpers.isSet)(object.consensusParams) ? _params.ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightChanged: (0, _helpers.isSet)(object.lastHeightChanged) ? _helpers.Long.fromString(object.lastHeightChanged) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? _params.ConsensusParams.toJSON(message.consensusParams) : undefined);
    message.lastHeightChanged !== undefined && (obj.lastHeightChanged = (message.lastHeightChanged || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParamsInfo();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? _params.ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? _helpers.Long.fromValue(object.lastHeightChanged) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ConsensusParamsInfo = ConsensusParamsInfo;

function createBaseVersion() {
  return {
    consensus: undefined,
    software: ""
  };
}

var Version = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.consensus !== undefined) {
      _types2.Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }

    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersion();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensus = _types2.Consensus.decode(reader, reader.uint32());
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
      consensus: (0, _helpers.isSet)(object.consensus) ? _types2.Consensus.fromJSON(object.consensus) : undefined,
      software: (0, _helpers.isSet)(object.software) ? String(object.software) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.consensus !== undefined && (obj.consensus = message.consensus ? _types2.Consensus.toJSON(message.consensus) : undefined);
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$software;

    var message = createBaseVersion();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? _types2.Consensus.fromPartial(object.consensus) : undefined;
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  }
};
exports.Version = Version;

function createBaseState() {
  return {
    version: undefined,
    chainId: "",
    initialHeight: _helpers.Long.ZERO,
    lastBlockHeight: _helpers.Long.ZERO,
    lastBlockId: undefined,
    lastBlockTime: undefined,
    nextValidators: undefined,
    validators: undefined,
    lastValidators: undefined,
    lastHeightValidatorsChanged: _helpers.Long.ZERO,
    consensusParams: undefined,
    lastHeightConsensusParamsChanged: _helpers.Long.ZERO,
    lastResultsHash: new Uint8Array(),
    appHash: new Uint8Array()
  };
}

var State = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.initialHeight.isZero()) {
      writer.uint32(112).int64(message.initialHeight);
    }

    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(24).int64(message.lastBlockHeight);
    }

    if (message.lastBlockId !== undefined) {
      _types3.BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.lastBlockTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.lastBlockTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.nextValidators !== undefined) {
      _validator.ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
    }

    if (message.validators !== undefined) {
      _validator.ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }

    if (message.lastValidators !== undefined) {
      _validator.ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
    }

    if (!message.lastHeightValidatorsChanged.isZero()) {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }

    if (message.consensusParams !== undefined) {
      _params.ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
    }

    if (!message.lastHeightConsensusParamsChanged.isZero()) {
      writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
    }

    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(106).bytes(message.appHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseState();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 14:
          message.initialHeight = reader.int64();
          break;

        case 3:
          message.lastBlockHeight = reader.int64();
          break;

        case 4:
          message.lastBlockId = _types3.BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.lastBlockTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.nextValidators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;

        case 7:
          message.validators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;

        case 8:
          message.lastValidators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;

        case 9:
          message.lastHeightValidatorsChanged = reader.int64();
          break;

        case 10:
          message.consensusParams = _params.ConsensusParams.decode(reader, reader.uint32());
          break;

        case 11:
          message.lastHeightConsensusParamsChanged = reader.int64();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.appHash = reader.bytes();
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
      version: (0, _helpers.isSet)(object.version) ? Version.fromJSON(object.version) : undefined,
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : "",
      initialHeight: (0, _helpers.isSet)(object.initialHeight) ? _helpers.Long.fromString(object.initialHeight) : _helpers.Long.ZERO,
      lastBlockHeight: (0, _helpers.isSet)(object.lastBlockHeight) ? _helpers.Long.fromString(object.lastBlockHeight) : _helpers.Long.ZERO,
      lastBlockId: (0, _helpers.isSet)(object.lastBlockId) ? _types3.BlockID.fromJSON(object.lastBlockId) : undefined,
      lastBlockTime: (0, _helpers.isSet)(object.lastBlockTime) ? (0, _helpers.fromJsonTimestamp)(object.lastBlockTime) : undefined,
      nextValidators: (0, _helpers.isSet)(object.nextValidators) ? _validator.ValidatorSet.fromJSON(object.nextValidators) : undefined,
      validators: (0, _helpers.isSet)(object.validators) ? _validator.ValidatorSet.fromJSON(object.validators) : undefined,
      lastValidators: (0, _helpers.isSet)(object.lastValidators) ? _validator.ValidatorSet.fromJSON(object.lastValidators) : undefined,
      lastHeightValidatorsChanged: (0, _helpers.isSet)(object.lastHeightValidatorsChanged) ? _helpers.Long.fromString(object.lastHeightValidatorsChanged) : _helpers.Long.ZERO,
      consensusParams: (0, _helpers.isSet)(object.consensusParams) ? _params.ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightConsensusParamsChanged: (0, _helpers.isSet)(object.lastHeightConsensusParamsChanged) ? _helpers.Long.fromString(object.lastHeightConsensusParamsChanged) : _helpers.Long.ZERO,
      lastResultsHash: (0, _helpers.isSet)(object.lastResultsHash) ? (0, _helpers.bytesFromBase64)(object.lastResultsHash) : new Uint8Array(),
      appHash: (0, _helpers.isSet)(object.appHash) ? (0, _helpers.bytesFromBase64)(object.appHash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.initialHeight !== undefined && (obj.initialHeight = (message.initialHeight || _helpers.Long.ZERO).toString());
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || _helpers.Long.ZERO).toString());
    message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? _types3.BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
    message.nextValidators !== undefined && (obj.nextValidators = message.nextValidators ? _validator.ValidatorSet.toJSON(message.nextValidators) : undefined);
    message.validators !== undefined && (obj.validators = message.validators ? _validator.ValidatorSet.toJSON(message.validators) : undefined);
    message.lastValidators !== undefined && (obj.lastValidators = message.lastValidators ? _validator.ValidatorSet.toJSON(message.lastValidators) : undefined);
    message.lastHeightValidatorsChanged !== undefined && (obj.lastHeightValidatorsChanged = (message.lastHeightValidatorsChanged || _helpers.Long.ZERO).toString());
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? _params.ConsensusParams.toJSON(message.consensusParams) : undefined);
    message.lastHeightConsensusParamsChanged !== undefined && (obj.lastHeightConsensusParamsChanged = (message.lastHeightConsensusParamsChanged || _helpers.Long.ZERO).toString());
    message.lastResultsHash !== undefined && (obj.lastResultsHash = (0, _helpers.base64FromBytes)(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
    message.appHash !== undefined && (obj.appHash = (0, _helpers.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId, _object$lastBlockTime, _object$lastResultsHa, _object$appHash;

    var message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? _helpers.Long.fromValue(object.initialHeight) : _helpers.Long.ZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? _helpers.Long.fromValue(object.lastBlockHeight) : _helpers.Long.ZERO;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? _types3.BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastBlockTime = (_object$lastBlockTime = object.lastBlockTime) !== null && _object$lastBlockTime !== void 0 ? _object$lastBlockTime : undefined;
    message.nextValidators = object.nextValidators !== undefined && object.nextValidators !== null ? _validator.ValidatorSet.fromPartial(object.nextValidators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? _validator.ValidatorSet.fromPartial(object.validators) : undefined;
    message.lastValidators = object.lastValidators !== undefined && object.lastValidators !== null ? _validator.ValidatorSet.fromPartial(object.lastValidators) : undefined;
    message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged !== undefined && object.lastHeightValidatorsChanged !== null ? _helpers.Long.fromValue(object.lastHeightValidatorsChanged) : _helpers.Long.ZERO;
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? _params.ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightConsensusParamsChanged = object.lastHeightConsensusParamsChanged !== undefined && object.lastHeightConsensusParamsChanged !== null ? _helpers.Long.fromValue(object.lastHeightConsensusParamsChanged) : _helpers.Long.ZERO;
    message.lastResultsHash = (_object$lastResultsHa = object.lastResultsHash) !== null && _object$lastResultsHa !== void 0 ? _object$lastResultsHa : new Uint8Array();
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    return message;
  }
};
exports.State = State;