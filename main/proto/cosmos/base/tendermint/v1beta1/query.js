"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionInfo = exports.Validator = exports.Module = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = void 0;

var _pagination = require("../../query/v1beta1/pagination");

var _any = require("../../../../google/protobuf/any");

var _types = require("../../../../tendermint/types/types");

var _block = require("../../../../tendermint/types/block");

var _types2 = require("../../../../tendermint/p2p/types");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: _helpers.Long.ZERO,
    pagination: undefined
  };
}

var GetValidatorSetByHeightRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetValidatorSetByHeightRequest = GetValidatorSetByHeightRequest;

function createBaseGetValidatorSetByHeightResponse() {
  return {
    blockHeight: _helpers.Long.ZERO,
    validators: [],
    pagination: undefined
  };
}

var GetValidatorSetByHeightResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    var _iterator = _createForOfIteratorHelper(message.validators),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;

        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      blockHeight: (0, _helpers.isSet)(object.blockHeight) ? _helpers.Long.fromString(object.blockHeight) : _helpers.Long.ZERO,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || _helpers.Long.ZERO).toString());

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? Validator.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators;

    var message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? _helpers.Long.fromValue(object.blockHeight) : _helpers.Long.ZERO;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetValidatorSetByHeightResponse = GetValidatorSetByHeightResponse;

function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: undefined
  };
}

var GetLatestValidatorSetRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestValidatorSetRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetLatestValidatorSetRequest = GetLatestValidatorSetRequest;

function createBaseGetLatestValidatorSetResponse() {
  return {
    blockHeight: _helpers.Long.ZERO,
    validators: [],
    pagination: undefined
  };
}

var GetLatestValidatorSetResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    var _iterator2 = _createForOfIteratorHelper(message.validators),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestValidatorSetResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;

        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      blockHeight: (0, _helpers.isSet)(object.blockHeight) ? _helpers.Long.fromString(object.blockHeight) : _helpers.Long.ZERO,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || _helpers.Long.ZERO).toString());

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? Validator.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2;

    var message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? _helpers.Long.fromValue(object.blockHeight) : _helpers.Long.ZERO;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetLatestValidatorSetResponse = GetLatestValidatorSetResponse;

function createBaseValidator() {
  return {
    address: "",
    pubKey: undefined,
    votingPower: _helpers.Long.ZERO,
    proposerPriority: _helpers.Long.ZERO
  };
}

var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pubKey !== undefined) {
      _any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }

    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pubKey = _any.Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.votingPower = reader.int64();
          break;

        case 4:
          message.proposerPriority = reader.int64();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      pubKey: (0, _helpers.isSet)(object.pubKey) ? _any.Any.fromJSON(object.pubKey) : undefined,
      votingPower: (0, _helpers.isSet)(object.votingPower) ? _helpers.Long.fromString(object.votingPower) : _helpers.Long.ZERO,
      proposerPriority: (0, _helpers.isSet)(object.proposerPriority) ? _helpers.Long.fromString(object.proposerPriority) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? _any.Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || _helpers.Long.ZERO).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;

    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _any.Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? _helpers.Long.fromValue(object.votingPower) : _helpers.Long.ZERO;
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? _helpers.Long.fromValue(object.proposerPriority) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Validator = Validator;

function createBaseGetBlockByHeightRequest() {
  return {
    height: _helpers.Long.ZERO
  };
}

var GetBlockByHeightRequest = {
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
    var message = createBaseGetBlockByHeightRequest();

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
    var message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.GetBlockByHeightRequest = GetBlockByHeightRequest;

function createBaseGetBlockByHeightResponse() {
  return {
    blockId: undefined,
    block: undefined
  };
}

var GetBlockByHeightResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }

    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockByHeightResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
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
      blockId: (0, _helpers.isSet)(object.blockId) ? _types.BlockID.fromJSON(object.blockId) : undefined,
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? _types.BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? _block.Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    return message;
  }
};
exports.GetBlockByHeightResponse = GetBlockByHeightResponse;

function createBaseGetLatestBlockRequest() {
  return {};
}

var GetLatestBlockRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockRequest();

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
    var message = createBaseGetLatestBlockRequest();
    return message;
  }
};
exports.GetLatestBlockRequest = GetLatestBlockRequest;

function createBaseGetLatestBlockResponse() {
  return {
    blockId: undefined,
    block: undefined
  };
}

var GetLatestBlockResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }

    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
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
      blockId: (0, _helpers.isSet)(object.blockId) ? _types.BlockID.fromJSON(object.blockId) : undefined,
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? _types.BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? _block.Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    return message;
  }
};
exports.GetLatestBlockResponse = GetLatestBlockResponse;

function createBaseGetSyncingRequest() {
  return {};
}

var GetSyncingRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingRequest();

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
    var message = createBaseGetSyncingRequest();
    return message;
  }
};
exports.GetSyncingRequest = GetSyncingRequest;

function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}

var GetSyncingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
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
      syncing: (0, _helpers.isSet)(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$syncing;

    var message = createBaseGetSyncingResponse();
    message.syncing = (_object$syncing = object.syncing) !== null && _object$syncing !== void 0 ? _object$syncing : false;
    return message;
  }
};
exports.GetSyncingResponse = GetSyncingResponse;

function createBaseGetNodeInfoRequest() {
  return {};
}

var GetNodeInfoRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoRequest();

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
    var message = createBaseGetNodeInfoRequest();
    return message;
  }
};
exports.GetNodeInfoRequest = GetNodeInfoRequest;

function createBaseGetNodeInfoResponse() {
  return {
    defaultNodeInfo: undefined,
    applicationVersion: undefined
  };
}

var GetNodeInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.defaultNodeInfo !== undefined) {
      _types2.DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = _types2.DefaultNodeInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
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
      defaultNodeInfo: (0, _helpers.isSet)(object.defaultNodeInfo) ? _types2.DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : undefined,
      applicationVersion: (0, _helpers.isSet)(object.applicationVersion) ? VersionInfo.fromJSON(object.applicationVersion) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.defaultNodeInfo !== undefined && (obj.defaultNodeInfo = message.defaultNodeInfo ? _types2.DefaultNodeInfo.toJSON(message.defaultNodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion ? VersionInfo.toJSON(message.applicationVersion) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetNodeInfoResponse();
    message.defaultNodeInfo = object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null ? _types2.DefaultNodeInfo.fromPartial(object.defaultNodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
  }
};
exports.GetNodeInfoResponse = GetNodeInfoResponse;

function createBaseVersionInfo() {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}

var VersionInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }

    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }

    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }

    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }

    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }

    var _iterator3 = _createForOfIteratorHelper(message.buildDeps),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        Module.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.appName = reader.string();
          break;

        case 3:
          message.version = reader.string();
          break;

        case 4:
          message.gitCommit = reader.string();
          break;

        case 5:
          message.buildTags = reader.string();
          break;

        case 6:
          message.goVersion = reader.string();
          break;

        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;

        case 8:
          message.cosmosSdkVersion = reader.string();
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
      appName: (0, _helpers.isSet)(object.appName) ? String(object.appName) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      gitCommit: (0, _helpers.isSet)(object.gitCommit) ? String(object.gitCommit) : "",
      buildTags: (0, _helpers.isSet)(object.buildTags) ? String(object.buildTags) : "",
      goVersion: (0, _helpers.isSet)(object.goVersion) ? String(object.goVersion) : "",
      buildDeps: Array.isArray(object === null || object === void 0 ? void 0 : object.buildDeps) ? object.buildDeps.map(function (e) {
        return Module.fromJSON(e);
      }) : [],
      cosmosSdkVersion: (0, _helpers.isSet)(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);

    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map(function (e) {
        return e ? Module.toJSON(e) : undefined;
      });
    } else {
      obj.buildDeps = [];
    }

    message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$appName, _object$version, _object$gitCommit, _object$buildTags, _object$goVersion, _object$buildDeps, _object$cosmosSdkVers;

    var message = createBaseVersionInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.appName = (_object$appName = object.appName) !== null && _object$appName !== void 0 ? _object$appName : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.gitCommit = (_object$gitCommit = object.gitCommit) !== null && _object$gitCommit !== void 0 ? _object$gitCommit : "";
    message.buildTags = (_object$buildTags = object.buildTags) !== null && _object$buildTags !== void 0 ? _object$buildTags : "";
    message.goVersion = (_object$goVersion = object.goVersion) !== null && _object$goVersion !== void 0 ? _object$goVersion : "";
    message.buildDeps = ((_object$buildDeps = object.buildDeps) === null || _object$buildDeps === void 0 ? void 0 : _object$buildDeps.map(function (e) {
      return Module.fromPartial(e);
    })) || [];
    message.cosmosSdkVersion = (_object$cosmosSdkVers = object.cosmosSdkVersion) !== null && _object$cosmosSdkVers !== void 0 ? _object$cosmosSdkVers : "";
    return message;
  }
};
exports.VersionInfo = VersionInfo;

function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}

var Module = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }

    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }

    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModule();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        case 2:
          message.version = reader.string();
          break;

        case 3:
          message.sum = reader.string();
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
      path: (0, _helpers.isSet)(object.path) ? String(object.path) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      sum: (0, _helpers.isSet)(object.sum) ? String(object.sum) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$version2, _object$sum;

    var message = createBaseModule();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.sum = (_object$sum = object.sum) !== null && _object$sum !== void 0 ? _object$sum : "";
    return message;
  }
};
exports.Module = Module;