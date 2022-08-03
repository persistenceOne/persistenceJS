"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.Snapshot = exports.ResponseSetOption = exports.ResponseQuery = exports.ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot = exports.ResponseLoadSnapshotChunk = exports.ResponseListSnapshots = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseException = exports.ResponseEndBlock = exports.ResponseEcho = exports.ResponseDeliverTx = exports.ResponseCommit = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk = exports.Response = exports.RequestSetOption = exports.RequestQuery = exports.RequestOfferSnapshot = exports.RequestLoadSnapshotChunk = exports.RequestListSnapshots = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEndBlock = exports.RequestEcho = exports.RequestDeliverTx = exports.RequestCommit = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestApplySnapshotChunk = exports.Request = exports.LastCommitInfo = exports.EvidenceType = exports.Evidence = exports.EventAttribute = exports.Event = exports.ConsensusParams = exports.CheckTxType = exports.BlockParams = void 0;
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
exports.checkTxTypeToJSON = checkTxTypeToJSON;
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
exports.evidenceTypeToJSON = evidenceTypeToJSON;
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;

var _timestamp = require("../../google/protobuf/timestamp");

var _types = require("../types/types");

var _proof = require("../crypto/proof");

var _params = require("../types/params");

var _keys = require("../crypto/keys");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CheckTxType;
exports.CheckTxType = CheckTxType;

(function (CheckTxType) {
  CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
  CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
  CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));

function checkTxTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;

    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}

function checkTxTypeToJSON(object) {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";

    case CheckTxType.RECHECK:
      return "RECHECK";

    default:
      return "UNKNOWN";
  }
}

var ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result;

(function (ResponseOfferSnapshot_Result) {
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
  ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));

function responseOfferSnapshot_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;

    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;

    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;

    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;

    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;

    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}

function responseOfferSnapshot_ResultToJSON(object) {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";

    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";

    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";

    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";

    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";

    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";

    default:
      return "UNKNOWN";
  }
}

var ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result;

(function (ResponseApplySnapshotChunk_Result) {
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
  ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));

function responseApplySnapshotChunk_ResultFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;

    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;

    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;

    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;

    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;

    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}

function responseApplySnapshotChunk_ResultToJSON(object) {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";

    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";

    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";

    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";

    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";

    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";

    default:
      return "UNKNOWN";
  }
}

var EvidenceType;
exports.EvidenceType = EvidenceType;

(function (EvidenceType) {
  EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
  EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
  EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
  EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType || (exports.EvidenceType = EvidenceType = {}));

function evidenceTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return EvidenceType.UNKNOWN;

    case 1:
    case "DUPLICATE_VOTE":
      return EvidenceType.DUPLICATE_VOTE;

    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return EvidenceType.LIGHT_CLIENT_ATTACK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}

function evidenceTypeToJSON(object) {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return "UNKNOWN";

    case EvidenceType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";

    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";

    default:
      return "UNKNOWN";
  }
}

function createBaseRequest() {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}

var Request = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }

    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }

    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }

    if (message.setOption !== undefined) {
      RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
    }

    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }

    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }

    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }

    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }

    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }

    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }

    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }

    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }

    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }

    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;

        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;

        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32());
          break;

        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;

        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;

        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32());
          break;

        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;

        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;

        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;

        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;

        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;

        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;

        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;

        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
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
      echo: (0, _helpers.isSet)(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
      flush: (0, _helpers.isSet)(object.flush) ? RequestFlush.fromJSON(object.flush) : undefined,
      info: (0, _helpers.isSet)(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
      setOption: (0, _helpers.isSet)(object.setOption) ? RequestSetOption.fromJSON(object.setOption) : undefined,
      initChain: (0, _helpers.isSet)(object.initChain) ? RequestInitChain.fromJSON(object.initChain) : undefined,
      query: (0, _helpers.isSet)(object.query) ? RequestQuery.fromJSON(object.query) : undefined,
      beginBlock: (0, _helpers.isSet)(object.beginBlock) ? RequestBeginBlock.fromJSON(object.beginBlock) : undefined,
      checkTx: (0, _helpers.isSet)(object.checkTx) ? RequestCheckTx.fromJSON(object.checkTx) : undefined,
      deliverTx: (0, _helpers.isSet)(object.deliverTx) ? RequestDeliverTx.fromJSON(object.deliverTx) : undefined,
      endBlock: (0, _helpers.isSet)(object.endBlock) ? RequestEndBlock.fromJSON(object.endBlock) : undefined,
      commit: (0, _helpers.isSet)(object.commit) ? RequestCommit.fromJSON(object.commit) : undefined,
      listSnapshots: (0, _helpers.isSet)(object.listSnapshots) ? RequestListSnapshots.fromJSON(object.listSnapshots) : undefined,
      offerSnapshot: (0, _helpers.isSet)(object.offerSnapshot) ? RequestOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
      loadSnapshotChunk: (0, _helpers.isSet)(object.loadSnapshotChunk) ? RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : undefined,
      applySnapshotChunk: (0, _helpers.isSet)(object.applySnapshotChunk) ? RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.echo !== undefined && (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined && (obj.flush = message.flush ? RequestFlush.toJSON(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined && (obj.setOption = message.setOption ? RequestSetOption.toJSON(message.setOption) : undefined);
    message.initChain !== undefined && (obj.initChain = message.initChain ? RequestInitChain.toJSON(message.initChain) : undefined);
    message.query !== undefined && (obj.query = message.query ? RequestQuery.toJSON(message.query) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? RequestBeginBlock.toJSON(message.beginBlock) : undefined);
    message.checkTx !== undefined && (obj.checkTx = message.checkTx ? RequestCheckTx.toJSON(message.checkTx) : undefined);
    message.deliverTx !== undefined && (obj.deliverTx = message.deliverTx ? RequestDeliverTx.toJSON(message.deliverTx) : undefined);
    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? RequestEndBlock.toJSON(message.endBlock) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? RequestCommit.toJSON(message.commit) : undefined);
    message.listSnapshots !== undefined && (obj.listSnapshots = message.listSnapshots ? RequestListSnapshots.toJSON(message.listSnapshots) : undefined);
    message.offerSnapshot !== undefined && (obj.offerSnapshot = message.offerSnapshot ? RequestOfferSnapshot.toJSON(message.offerSnapshot) : undefined);
    message.loadSnapshotChunk !== undefined && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : undefined);
    message.applySnapshotChunk !== undefined && (obj.applySnapshotChunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? RequestSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? RequestInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? RequestCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? RequestEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  }
};
exports.Request = Request;

function createBaseRequestEcho() {
  return {
    message: ""
  };
}

var RequestEcho = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestEcho();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
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
      message: (0, _helpers.isSet)(object.message) ? String(object.message) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$message;

    var message = createBaseRequestEcho();
    message.message = (_object$message = object.message) !== null && _object$message !== void 0 ? _object$message : "";
    return message;
  }
};
exports.RequestEcho = RequestEcho;

function createBaseRequestFlush() {
  return {};
}

var RequestFlush = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestFlush();

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
    var message = createBaseRequestFlush();
    return message;
  }
};
exports.RequestFlush = RequestFlush;

function createBaseRequestInfo() {
  return {
    version: "",
    blockVersion: _helpers.Long.UZERO,
    p2pVersion: _helpers.Long.UZERO
  };
}

var RequestInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }

    if (!message.blockVersion.isZero()) {
      writer.uint32(16).uint64(message.blockVersion);
    }

    if (!message.p2pVersion.isZero()) {
      writer.uint32(24).uint64(message.p2pVersion);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;

        case 2:
          message.blockVersion = reader.uint64();
          break;

        case 3:
          message.p2pVersion = reader.uint64();
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
      blockVersion: (0, _helpers.isSet)(object.blockVersion) ? _helpers.Long.fromString(object.blockVersion) : _helpers.Long.UZERO,
      p2pVersion: (0, _helpers.isSet)(object.p2pVersion) ? _helpers.Long.fromString(object.p2pVersion) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.version !== undefined && (obj.version = message.version);
    message.blockVersion !== undefined && (obj.blockVersion = (message.blockVersion || _helpers.Long.UZERO).toString());
    message.p2pVersion !== undefined && (obj.p2pVersion = (message.p2pVersion || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$version;

    var message = createBaseRequestInfo();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? _helpers.Long.fromValue(object.blockVersion) : _helpers.Long.UZERO;
    message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? _helpers.Long.fromValue(object.p2pVersion) : _helpers.Long.UZERO;
    return message;
  }
};
exports.RequestInfo = RequestInfo;

function createBaseRequestSetOption() {
  return {
    key: "",
    value: ""
  };
}

var RequestSetOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestSetOption();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
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
      key: (0, _helpers.isSet)(object.key) ? String(object.key) : "",
      value: (0, _helpers.isSet)(object.value) ? String(object.value) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$value;

    var message = createBaseRequestSetOption();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
exports.RequestSetOption = RequestSetOption;

function createBaseRequestInitChain() {
  return {
    time: undefined,
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: _helpers.Long.ZERO
  };
}

var RequestInitChain = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }

    var _iterator = _createForOfIteratorHelper(message.validators),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }

    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestInitChain();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 5:
          message.appStateBytes = reader.bytes();
          break;

        case 6:
          message.initialHeight = reader.int64();
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
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : "",
      consensusParams: (0, _helpers.isSet)(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return ValidatorUpdate.fromJSON(e);
      }) : [],
      appStateBytes: (0, _helpers.isSet)(object.appStateBytes) ? (0, _helpers.bytesFromBase64)(object.appStateBytes) : new Uint8Array(),
      initialHeight: (0, _helpers.isSet)(object.initialHeight) ? _helpers.Long.fromString(object.initialHeight) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? ValidatorUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.appStateBytes !== undefined && (obj.appStateBytes = (0, _helpers.base64FromBytes)(message.appStateBytes !== undefined ? message.appStateBytes : new Uint8Array()));
    message.initialHeight !== undefined && (obj.initialHeight = (message.initialHeight || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$time, _object$chainId, _object$validators, _object$appStateBytes;

    var message = createBaseRequestInitChain();
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.appStateBytes = (_object$appStateBytes = object.appStateBytes) !== null && _object$appStateBytes !== void 0 ? _object$appStateBytes : new Uint8Array();
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? _helpers.Long.fromValue(object.initialHeight) : _helpers.Long.ZERO;
    return message;
  }
};
exports.RequestInitChain = RequestInitChain;

function createBaseRequestQuery() {
  return {
    data: new Uint8Array(),
    path: "",
    height: _helpers.Long.ZERO,
    prove: false
  };
}

var RequestQuery = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestQuery();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.path = reader.string();
          break;

        case 3:
          message.height = reader.int64();
          break;

        case 4:
          message.prove = reader.bool();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      path: (0, _helpers.isSet)(object.path) ? String(object.path) : "",
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      prove: (0, _helpers.isSet)(object.prove) ? Boolean(object.prove) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$data, _object$path, _object$prove;

    var message = createBaseRequestQuery();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.prove = (_object$prove = object.prove) !== null && _object$prove !== void 0 ? _object$prove : false;
    return message;
  }
};
exports.RequestQuery = RequestQuery;

function createBaseRequestBeginBlock() {
  return {
    hash: new Uint8Array(),
    header: undefined,
    lastCommitInfo: undefined,
    byzantineValidators: []
  };
}

var RequestBeginBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }

    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }

    var _iterator2 = _createForOfIteratorHelper(message.byzantineValidators),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Evidence.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseRequestBeginBlock();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;

        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.byzantineValidators.push(Evidence.decode(reader, reader.uint32()));
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
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array(),
      header: (0, _helpers.isSet)(object.header) ? _types.Header.fromJSON(object.header) : undefined,
      lastCommitInfo: (0, _helpers.isSet)(object.lastCommitInfo) ? LastCommitInfo.fromJSON(object.lastCommitInfo) : undefined,
      byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantineValidators) ? object.byzantineValidators.map(function (e) {
        return Evidence.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.header !== undefined && (obj.header = message.header ? _types.Header.toJSON(message.header) : undefined);
    message.lastCommitInfo !== undefined && (obj.lastCommitInfo = message.lastCommitInfo ? LastCommitInfo.toJSON(message.lastCommitInfo) : undefined);

    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map(function (e) {
        return e ? Evidence.toJSON(e) : undefined;
      });
    } else {
      obj.byzantineValidators = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash, _object$byzantineVali;

    var message = createBaseRequestBeginBlock();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? LastCommitInfo.fromPartial(object.lastCommitInfo) : undefined;
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map(function (e) {
      return Evidence.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.RequestBeginBlock = RequestBeginBlock;

function createBaseRequestCheckTx() {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}

var RequestCheckTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestCheckTx();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;

        case 2:
          message.type = reader.int32();
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
      tx: (0, _helpers.isSet)(object.tx) ? (0, _helpers.bytesFromBase64)(object.tx) : new Uint8Array(),
      type: (0, _helpers.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = (0, _helpers.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$tx, _object$type;

    var message = createBaseRequestCheckTx();
    message.tx = (_object$tx = object.tx) !== null && _object$tx !== void 0 ? _object$tx : new Uint8Array();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    return message;
  }
};
exports.RequestCheckTx = RequestCheckTx;

function createBaseRequestDeliverTx() {
  return {
    tx: new Uint8Array()
  };
}

var RequestDeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestDeliverTx();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
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
      tx: (0, _helpers.isSet)(object.tx) ? (0, _helpers.bytesFromBase64)(object.tx) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = (0, _helpers.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$tx2;

    var message = createBaseRequestDeliverTx();
    message.tx = (_object$tx2 = object.tx) !== null && _object$tx2 !== void 0 ? _object$tx2 : new Uint8Array();
    return message;
  }
};
exports.RequestDeliverTx = RequestDeliverTx;

function createBaseRequestEndBlock() {
  return {
    height: _helpers.Long.ZERO
  };
}

var RequestEndBlock = {
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
    var message = createBaseRequestEndBlock();

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
    var message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    return message;
  }
};
exports.RequestEndBlock = RequestEndBlock;

function createBaseRequestCommit() {
  return {};
}

var RequestCommit = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestCommit();

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
    var message = createBaseRequestCommit();
    return message;
  }
};
exports.RequestCommit = RequestCommit;

function createBaseRequestListSnapshots() {
  return {};
}

var RequestListSnapshots = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestListSnapshots();

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
    var message = createBaseRequestListSnapshots();
    return message;
  }
};
exports.RequestListSnapshots = RequestListSnapshots;

function createBaseRequestOfferSnapshot() {
  return {
    snapshot: undefined,
    appHash: new Uint8Array()
  };
}

var RequestOfferSnapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }

    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestOfferSnapshot();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;

        case 2:
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
      snapshot: (0, _helpers.isSet)(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      appHash: (0, _helpers.isSet)(object.appHash) ? (0, _helpers.bytesFromBase64)(object.appHash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.snapshot !== undefined && (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
    message.appHash !== undefined && (obj.appHash = (0, _helpers.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$appHash;

    var message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    return message;
  }
};
exports.RequestOfferSnapshot = RequestOfferSnapshot;

function createBaseRequestLoadSnapshotChunk() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    chunk: 0
  };
}

var RequestLoadSnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestLoadSnapshotChunk();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunk = reader.uint32();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.UZERO,
      format: (0, _helpers.isSet)(object.format) ? Number(object.format) : 0,
      chunk: (0, _helpers.isSet)(object.chunk) ? Number(object.chunk) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$format, _object$chunk;

    var message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format = object.format) !== null && _object$format !== void 0 ? _object$format : 0;
    message.chunk = (_object$chunk = object.chunk) !== null && _object$chunk !== void 0 ? _object$chunk : 0;
    return message;
  }
};
exports.RequestLoadSnapshotChunk = RequestLoadSnapshotChunk;

function createBaseRequestApplySnapshotChunk() {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}

var RequestApplySnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRequestApplySnapshotChunk();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.chunk = reader.bytes();
          break;

        case 3:
          message.sender = reader.string();
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
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0,
      chunk: (0, _helpers.isSet)(object.chunk) ? (0, _helpers.bytesFromBase64)(object.chunk) : new Uint8Array(),
      sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.chunk !== undefined && (obj.chunk = (0, _helpers.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$chunk2, _object$sender;

    var message = createBaseRequestApplySnapshotChunk();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.chunk = (_object$chunk2 = object.chunk) !== null && _object$chunk2 !== void 0 ? _object$chunk2 : new Uint8Array();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    return message;
  }
};
exports.RequestApplySnapshotChunk = RequestApplySnapshotChunk;

function createBaseResponse() {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}

var Response = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }

    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }

    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    if (message.setOption !== undefined) {
      ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
    }

    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }

    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }

    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }

    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }

    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }

    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }

    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }

    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }

    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }

    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;

        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;

        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;

        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;

        case 5:
          message.setOption = ResponseSetOption.decode(reader, reader.uint32());
          break;

        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;

        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;

        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;

        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;

        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;

        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;

        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;

        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;

        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;

        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
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
      exception: (0, _helpers.isSet)(object.exception) ? ResponseException.fromJSON(object.exception) : undefined,
      echo: (0, _helpers.isSet)(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
      flush: (0, _helpers.isSet)(object.flush) ? ResponseFlush.fromJSON(object.flush) : undefined,
      info: (0, _helpers.isSet)(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
      setOption: (0, _helpers.isSet)(object.setOption) ? ResponseSetOption.fromJSON(object.setOption) : undefined,
      initChain: (0, _helpers.isSet)(object.initChain) ? ResponseInitChain.fromJSON(object.initChain) : undefined,
      query: (0, _helpers.isSet)(object.query) ? ResponseQuery.fromJSON(object.query) : undefined,
      beginBlock: (0, _helpers.isSet)(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined,
      checkTx: (0, _helpers.isSet)(object.checkTx) ? ResponseCheckTx.fromJSON(object.checkTx) : undefined,
      deliverTx: (0, _helpers.isSet)(object.deliverTx) ? ResponseDeliverTx.fromJSON(object.deliverTx) : undefined,
      endBlock: (0, _helpers.isSet)(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      commit: (0, _helpers.isSet)(object.commit) ? ResponseCommit.fromJSON(object.commit) : undefined,
      listSnapshots: (0, _helpers.isSet)(object.listSnapshots) ? ResponseListSnapshots.fromJSON(object.listSnapshots) : undefined,
      offerSnapshot: (0, _helpers.isSet)(object.offerSnapshot) ? ResponseOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
      loadSnapshotChunk: (0, _helpers.isSet)(object.loadSnapshotChunk) ? ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk) : undefined,
      applySnapshotChunk: (0, _helpers.isSet)(object.applySnapshotChunk) ? ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.exception !== undefined && (obj.exception = message.exception ? ResponseException.toJSON(message.exception) : undefined);
    message.echo !== undefined && (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined && (obj.flush = message.flush ? ResponseFlush.toJSON(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
    message.setOption !== undefined && (obj.setOption = message.setOption ? ResponseSetOption.toJSON(message.setOption) : undefined);
    message.initChain !== undefined && (obj.initChain = message.initChain ? ResponseInitChain.toJSON(message.initChain) : undefined);
    message.query !== undefined && (obj.query = message.query ? ResponseQuery.toJSON(message.query) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
    message.checkTx !== undefined && (obj.checkTx = message.checkTx ? ResponseCheckTx.toJSON(message.checkTx) : undefined);
    message.deliverTx !== undefined && (obj.deliverTx = message.deliverTx ? ResponseDeliverTx.toJSON(message.deliverTx) : undefined);
    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? ResponseEndBlock.toJSON(message.endBlock) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? ResponseCommit.toJSON(message.commit) : undefined);
    message.listSnapshots !== undefined && (obj.listSnapshots = message.listSnapshots ? ResponseListSnapshots.toJSON(message.listSnapshots) : undefined);
    message.offerSnapshot !== undefined && (obj.offerSnapshot = message.offerSnapshot ? ResponseOfferSnapshot.toJSON(message.offerSnapshot) : undefined);
    message.loadSnapshotChunk !== undefined && (obj.loadSnapshotChunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk) : undefined);
    message.applySnapshotChunk !== undefined && (obj.applySnapshotChunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.setOption = object.setOption !== undefined && object.setOption !== null ? ResponseSetOption.fromPartial(object.setOption) : undefined;
    message.initChain = object.initChain !== undefined && object.initChain !== null ? ResponseInitChain.fromPartial(object.initChain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
    message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
    message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
    message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
    return message;
  }
};
exports.Response = Response;

function createBaseResponseException() {
  return {
    error: ""
  };
}

var ResponseException = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseException();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
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
      error: (0, _helpers.isSet)(object.error) ? String(object.error) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$error;

    var message = createBaseResponseException();
    message.error = (_object$error = object.error) !== null && _object$error !== void 0 ? _object$error : "";
    return message;
  }
};
exports.ResponseException = ResponseException;

function createBaseResponseEcho() {
  return {
    message: ""
  };
}

var ResponseEcho = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseEcho();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
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
      message: (0, _helpers.isSet)(object.message) ? String(object.message) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$message2;

    var message = createBaseResponseEcho();
    message.message = (_object$message2 = object.message) !== null && _object$message2 !== void 0 ? _object$message2 : "";
    return message;
  }
};
exports.ResponseEcho = ResponseEcho;

function createBaseResponseFlush() {
  return {};
}

var ResponseFlush = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseFlush();

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
    var message = createBaseResponseFlush();
    return message;
  }
};
exports.ResponseFlush = ResponseFlush;

function createBaseResponseInfo() {
  return {
    data: "",
    version: "",
    appVersion: _helpers.Long.UZERO,
    lastBlockHeight: _helpers.Long.ZERO,
    lastBlockAppHash: new Uint8Array()
  };
}

var ResponseInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }

    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }

    if (!message.appVersion.isZero()) {
      writer.uint32(24).uint64(message.appVersion);
    }

    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }

    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;

        case 2:
          message.version = reader.string();
          break;

        case 3:
          message.appVersion = reader.uint64();
          break;

        case 4:
          message.lastBlockHeight = reader.int64();
          break;

        case 5:
          message.lastBlockAppHash = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? String(object.data) : "",
      version: (0, _helpers.isSet)(object.version) ? String(object.version) : "",
      appVersion: (0, _helpers.isSet)(object.appVersion) ? _helpers.Long.fromString(object.appVersion) : _helpers.Long.UZERO,
      lastBlockHeight: (0, _helpers.isSet)(object.lastBlockHeight) ? _helpers.Long.fromString(object.lastBlockHeight) : _helpers.Long.ZERO,
      lastBlockAppHash: (0, _helpers.isSet)(object.lastBlockAppHash) ? (0, _helpers.bytesFromBase64)(object.lastBlockAppHash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = message.data);
    message.version !== undefined && (obj.version = message.version);
    message.appVersion !== undefined && (obj.appVersion = (message.appVersion || _helpers.Long.UZERO).toString());
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || _helpers.Long.ZERO).toString());
    message.lastBlockAppHash !== undefined && (obj.lastBlockAppHash = (0, _helpers.base64FromBytes)(message.lastBlockAppHash !== undefined ? message.lastBlockAppHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$version2, _object$lastBlockAppH;

    var message = createBaseResponseInfo();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? _helpers.Long.fromValue(object.appVersion) : _helpers.Long.UZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? _helpers.Long.fromValue(object.lastBlockHeight) : _helpers.Long.ZERO;
    message.lastBlockAppHash = (_object$lastBlockAppH = object.lastBlockAppHash) !== null && _object$lastBlockAppH !== void 0 ? _object$lastBlockAppH : new Uint8Array();
    return message;
  }
};
exports.ResponseInfo = ResponseInfo;

function createBaseResponseSetOption() {
  return {
    code: 0,
    log: "",
    info: ""
  };
}

var ResponseSetOption = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseSetOption();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      info: (0, _helpers.isSet)(object.info) ? String(object.info) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$log, _object$info;

    var message = createBaseResponseSetOption();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.log = (_object$log = object.log) !== null && _object$log !== void 0 ? _object$log : "";
    message.info = (_object$info = object.info) !== null && _object$info !== void 0 ? _object$info : "";
    return message;
  }
};
exports.ResponseSetOption = ResponseSetOption;

function createBaseResponseInitChain() {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array()
  };
}

var ResponseInitChain = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }

    var _iterator3 = _createForOfIteratorHelper(message.validators),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseInitChain();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 3:
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
      consensusParams: (0, _helpers.isSet)(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return ValidatorUpdate.fromJSON(e);
      }) : [],
      appHash: (0, _helpers.isSet)(object.appHash) ? (0, _helpers.bytesFromBase64)(object.appHash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);

    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? ValidatorUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.validators = [];
    }

    message.appHash !== undefined && (obj.appHash = (0, _helpers.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2, _object$appHash2;

    var message = createBaseResponseInitChain();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.appHash = (_object$appHash2 = object.appHash) !== null && _object$appHash2 !== void 0 ? _object$appHash2 : new Uint8Array();
    return message;
  }
};
exports.ResponseInitChain = ResponseInitChain;

function createBaseResponseQuery() {
  return {
    code: 0,
    log: "",
    info: "",
    index: _helpers.Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: _helpers.Long.ZERO,
    codespace: ""
  };
}

var ResponseQuery = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }

    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }

    if (message.proofOps !== undefined) {
      _proof.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }

    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseQuery();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.index = reader.int64();
          break;

        case 6:
          message.key = reader.bytes();
          break;

        case 7:
          message.value = reader.bytes();
          break;

        case 8:
          message.proofOps = _proof.ProofOps.decode(reader, reader.uint32());
          break;

        case 9:
          message.height = reader.int64();
          break;

        case 10:
          message.codespace = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      info: (0, _helpers.isSet)(object.info) ? String(object.info) : "",
      index: (0, _helpers.isSet)(object.index) ? _helpers.Long.fromString(object.index) : _helpers.Long.ZERO,
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array(),
      proofOps: (0, _helpers.isSet)(object.proofOps) ? _proof.ProofOps.fromJSON(object.proofOps) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      codespace: (0, _helpers.isSet)(object.codespace) ? String(object.codespace) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined && (obj.index = (message.index || _helpers.Long.ZERO).toString());
    message.key !== undefined && (obj.key = (0, _helpers.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = (0, _helpers.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
    message.proofOps !== undefined && (obj.proofOps = message.proofOps ? _proof.ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$code2, _object$log2, _object$info2, _object$key2, _object$value2, _object$codespace;

    var message = createBaseResponseQuery();
    message.code = (_object$code2 = object.code) !== null && _object$code2 !== void 0 ? _object$code2 : 0;
    message.log = (_object$log2 = object.log) !== null && _object$log2 !== void 0 ? _object$log2 : "";
    message.info = (_object$info2 = object.info) !== null && _object$info2 !== void 0 ? _object$info2 : "";
    message.index = object.index !== undefined && object.index !== null ? _helpers.Long.fromValue(object.index) : _helpers.Long.ZERO;
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? _proof.ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.codespace = (_object$codespace = object.codespace) !== null && _object$codespace !== void 0 ? _object$codespace : "";
    return message;
  }
};
exports.ResponseQuery = ResponseQuery;

function createBaseResponseBeginBlock() {
  return {
    events: []
  };
}

var ResponseBeginBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator4 = _createForOfIteratorHelper(message.events),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        Event.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseBeginBlock();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$events;

    var message = createBaseResponseBeginBlock();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ResponseBeginBlock = ResponseBeginBlock;

function createBaseResponseCheckTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: _helpers.Long.ZERO,
    gasUsed: _helpers.Long.ZERO,
    events: [],
    codespace: ""
  };
}

var ResponseCheckTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }

    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }

    var _iterator5 = _createForOfIteratorHelper(message.events),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseCheckTx();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gasWanted = reader.int64();
          break;

        case 6:
          message.gasUsed = reader.int64();
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      info: (0, _helpers.isSet)(object.info) ? String(object.info) : "",
      gasWanted: (0, _helpers.isSet)(object.gasWanted) ? _helpers.Long.fromString(object.gasWanted) : _helpers.Long.ZERO,
      gasUsed: (0, _helpers.isSet)(object.gasUsed) ? _helpers.Long.fromString(object.gasUsed) : _helpers.Long.ZERO,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromJSON(e);
      }) : [],
      codespace: (0, _helpers.isSet)(object.codespace) ? String(object.codespace) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || _helpers.Long.ZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || _helpers.Long.ZERO).toString());

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$code3, _object$data3, _object$log3, _object$info3, _object$events2, _object$codespace2;

    var message = createBaseResponseCheckTx();
    message.code = (_object$code3 = object.code) !== null && _object$code3 !== void 0 ? _object$code3 : 0;
    message.data = (_object$data3 = object.data) !== null && _object$data3 !== void 0 ? _object$data3 : new Uint8Array();
    message.log = (_object$log3 = object.log) !== null && _object$log3 !== void 0 ? _object$log3 : "";
    message.info = (_object$info3 = object.info) !== null && _object$info3 !== void 0 ? _object$info3 : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? _helpers.Long.fromValue(object.gasWanted) : _helpers.Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? _helpers.Long.fromValue(object.gasUsed) : _helpers.Long.ZERO;
    message.events = ((_object$events2 = object.events) === null || _object$events2 === void 0 ? void 0 : _object$events2.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    message.codespace = (_object$codespace2 = object.codespace) !== null && _object$codespace2 !== void 0 ? _object$codespace2 : "";
    return message;
  }
};
exports.ResponseCheckTx = ResponseCheckTx;

function createBaseResponseDeliverTx() {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: _helpers.Long.ZERO,
    gasUsed: _helpers.Long.ZERO,
    events: [],
    codespace: ""
  };
}

var ResponseDeliverTx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }

    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }

    var _iterator6 = _createForOfIteratorHelper(message.events),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        Event.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseDeliverTx();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gasWanted = reader.int64();
          break;

        case 6:
          message.gasUsed = reader.int64();
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      log: (0, _helpers.isSet)(object.log) ? String(object.log) : "",
      info: (0, _helpers.isSet)(object.info) ? String(object.info) : "",
      gasWanted: (0, _helpers.isSet)(object.gasWanted) ? _helpers.Long.fromString(object.gasWanted) : _helpers.Long.ZERO,
      gasUsed: (0, _helpers.isSet)(object.gasUsed) ? _helpers.Long.fromString(object.gasUsed) : _helpers.Long.ZERO,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromJSON(e);
      }) : [],
      codespace: (0, _helpers.isSet)(object.codespace) ? String(object.codespace) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || _helpers.Long.ZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || _helpers.Long.ZERO).toString());

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$code4, _object$data4, _object$log4, _object$info4, _object$events3, _object$codespace3;

    var message = createBaseResponseDeliverTx();
    message.code = (_object$code4 = object.code) !== null && _object$code4 !== void 0 ? _object$code4 : 0;
    message.data = (_object$data4 = object.data) !== null && _object$data4 !== void 0 ? _object$data4 : new Uint8Array();
    message.log = (_object$log4 = object.log) !== null && _object$log4 !== void 0 ? _object$log4 : "";
    message.info = (_object$info4 = object.info) !== null && _object$info4 !== void 0 ? _object$info4 : "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? _helpers.Long.fromValue(object.gasWanted) : _helpers.Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? _helpers.Long.fromValue(object.gasUsed) : _helpers.Long.ZERO;
    message.events = ((_object$events3 = object.events) === null || _object$events3 === void 0 ? void 0 : _object$events3.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    message.codespace = (_object$codespace3 = object.codespace) !== null && _object$codespace3 !== void 0 ? _object$codespace3 : "";
    return message;
  }
};
exports.ResponseDeliverTx = ResponseDeliverTx;

function createBaseResponseEndBlock() {
  return {
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: []
  };
}

var ResponseEndBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator7 = _createForOfIteratorHelper(message.validatorUpdates),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }

    var _iterator8 = _createForOfIteratorHelper(message.events),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v = _step8.value;
        Event.encode(_v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseResponseEndBlock();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
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
      validatorUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorUpdates) ? object.validatorUpdates.map(function (e) {
        return ValidatorUpdate.fromJSON(e);
      }) : [],
      consensusParamUpdates: (0, _helpers.isSet)(object.consensusParamUpdates) ? ConsensusParams.fromJSON(object.consensusParamUpdates) : undefined,
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return Event.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map(function (e) {
        return e ? ValidatorUpdate.toJSON(e) : undefined;
      });
    } else {
      obj.validatorUpdates = [];
    }

    message.consensusParamUpdates !== undefined && (obj.consensusParamUpdates = message.consensusParamUpdates ? ConsensusParams.toJSON(message.consensusParamUpdates) : undefined);

    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e ? Event.toJSON(e) : undefined;
      });
    } else {
      obj.events = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorUpda, _object$events4;

    var message = createBaseResponseEndBlock();
    message.validatorUpdates = ((_object$validatorUpda = object.validatorUpdates) === null || _object$validatorUpda === void 0 ? void 0 : _object$validatorUpda.map(function (e) {
      return ValidatorUpdate.fromPartial(e);
    })) || [];
    message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
    message.events = ((_object$events4 = object.events) === null || _object$events4 === void 0 ? void 0 : _object$events4.map(function (e) {
      return Event.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ResponseEndBlock = ResponseEndBlock;

function createBaseResponseCommit() {
  return {
    data: new Uint8Array(),
    retainHeight: _helpers.Long.ZERO
  };
}

var ResponseCommit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseCommit();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.retainHeight = reader.int64();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      retainHeight: (0, _helpers.isSet)(object.retainHeight) ? _helpers.Long.fromString(object.retainHeight) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    message.retainHeight !== undefined && (obj.retainHeight = (message.retainHeight || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$data5;

    var message = createBaseResponseCommit();
    message.data = (_object$data5 = object.data) !== null && _object$data5 !== void 0 ? _object$data5 : new Uint8Array();
    message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? _helpers.Long.fromValue(object.retainHeight) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ResponseCommit = ResponseCommit;

function createBaseResponseListSnapshots() {
  return {
    snapshots: []
  };
}

var ResponseListSnapshots = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    var _iterator9 = _createForOfIteratorHelper(message.snapshots),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseListSnapshots();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
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
      snapshots: Array.isArray(object === null || object === void 0 ? void 0 : object.snapshots) ? object.snapshots.map(function (e) {
        return Snapshot.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};

    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(function (e) {
        return e ? Snapshot.toJSON(e) : undefined;
      });
    } else {
      obj.snapshots = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$snapshots;

    var message = createBaseResponseListSnapshots();
    message.snapshots = ((_object$snapshots = object.snapshots) === null || _object$snapshots === void 0 ? void 0 : _object$snapshots.map(function (e) {
      return Snapshot.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ResponseListSnapshots = ResponseListSnapshots;

function createBaseResponseOfferSnapshot() {
  return {
    result: 0
  };
}

var ResponseOfferSnapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseOfferSnapshot();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
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
      result: (0, _helpers.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$result;

    var message = createBaseResponseOfferSnapshot();
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
exports.ResponseOfferSnapshot = ResponseOfferSnapshot;

function createBaseResponseLoadSnapshotChunk() {
  return {
    chunk: new Uint8Array()
  };
}

var ResponseLoadSnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseLoadSnapshotChunk();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
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
      chunk: (0, _helpers.isSet)(object.chunk) ? (0, _helpers.bytesFromBase64)(object.chunk) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chunk !== undefined && (obj.chunk = (0, _helpers.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chunk3;

    var message = createBaseResponseLoadSnapshotChunk();
    message.chunk = (_object$chunk3 = object.chunk) !== null && _object$chunk3 !== void 0 ? _object$chunk3 : new Uint8Array();
    return message;
  }
};
exports.ResponseLoadSnapshotChunk = ResponseLoadSnapshotChunk;

function createBaseResponseApplySnapshotChunk() {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}

var ResponseApplySnapshotChunk = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }

    writer.uint32(18).fork();

    var _iterator10 = _createForOfIteratorHelper(message.refetchChunks),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var v = _step10.value;
        writer.uint32(v);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    writer.ldelim();

    var _iterator11 = _createForOfIteratorHelper(message.rejectSenders),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _v2 = _step11.value;
        writer.uint32(26).string(_v2);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseApplySnapshotChunk();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }

          break;

        case 3:
          message.rejectSenders.push(reader.string());
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
      result: (0, _helpers.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : 0,
      refetchChunks: Array.isArray(object === null || object === void 0 ? void 0 : object.refetchChunks) ? object.refetchChunks.map(function (e) {
        return Number(e);
      }) : [],
      rejectSenders: Array.isArray(object === null || object === void 0 ? void 0 : object.rejectSenders) ? object.rejectSenders.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));

    if (message.refetchChunks) {
      obj.refetchChunks = message.refetchChunks.map(function (e) {
        return Math.round(e);
      });
    } else {
      obj.refetchChunks = [];
    }

    if (message.rejectSenders) {
      obj.rejectSenders = message.rejectSenders.map(function (e) {
        return e;
      });
    } else {
      obj.rejectSenders = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$result2, _object$refetchChunks, _object$rejectSenders;

    var message = createBaseResponseApplySnapshotChunk();
    message.result = (_object$result2 = object.result) !== null && _object$result2 !== void 0 ? _object$result2 : 0;
    message.refetchChunks = ((_object$refetchChunks = object.refetchChunks) === null || _object$refetchChunks === void 0 ? void 0 : _object$refetchChunks.map(function (e) {
      return e;
    })) || [];
    message.rejectSenders = ((_object$rejectSenders = object.rejectSenders) === null || _object$rejectSenders === void 0 ? void 0 : _object$rejectSenders.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ResponseApplySnapshotChunk = ResponseApplySnapshotChunk;

function createBaseConsensusParams() {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}

var ConsensusParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }

    if (message.evidence !== undefined) {
      _params.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }

    if (message.validator !== undefined) {
      _params.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }

    if (message.version !== undefined) {
      _params.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParams();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.evidence = _params.EvidenceParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = _params.ValidatorParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.version = _params.VersionParams.decode(reader, reader.uint32());
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
      block: (0, _helpers.isSet)(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: (0, _helpers.isSet)(object.evidence) ? _params.EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: (0, _helpers.isSet)(object.validator) ? _params.ValidatorParams.fromJSON(object.validator) : undefined,
      version: (0, _helpers.isSet)(object.version) ? _params.VersionParams.fromJSON(object.version) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? _params.EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? _params.ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? _params.VersionParams.toJSON(message.version) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _params.EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? _params.ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? _params.VersionParams.fromPartial(object.version) : undefined;
    return message;
  }
};
exports.ConsensusParams = ConsensusParams;

function createBaseBlockParams() {
  return {
    maxBytes: _helpers.Long.ZERO,
    maxGas: _helpers.Long.ZERO
  };
}

var BlockParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }

    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockParams();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;

        case 2:
          message.maxGas = reader.int64();
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
      maxBytes: (0, _helpers.isSet)(object.maxBytes) ? _helpers.Long.fromString(object.maxBytes) : _helpers.Long.ZERO,
      maxGas: (0, _helpers.isSet)(object.maxGas) ? _helpers.Long.fromString(object.maxGas) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || _helpers.Long.ZERO).toString());
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? _helpers.Long.fromValue(object.maxBytes) : _helpers.Long.ZERO;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? _helpers.Long.fromValue(object.maxGas) : _helpers.Long.ZERO;
    return message;
  }
};
exports.BlockParams = BlockParams;

function createBaseLastCommitInfo() {
  return {
    round: 0,
    votes: []
  };
}

var LastCommitInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }

    var _iterator12 = _createForOfIteratorHelper(message.votes),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var v = _step12.value;
        VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLastCommitInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;

        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
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
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return VoteInfo.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.round !== undefined && (obj.round = Math.round(message.round));

    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? VoteInfo.toJSON(e) : undefined;
      });
    } else {
      obj.votes = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round, _object$votes;

    var message = createBaseLastCommitInfo();
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return VoteInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.LastCommitInfo = LastCommitInfo;

function createBaseEvent() {
  return {
    type: "",
    attributes: []
  };
}

var Event = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    var _iterator13 = _createForOfIteratorHelper(message.attributes),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var v = _step13.value;
        EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvent();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
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
      type: (0, _helpers.isSet)(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(function (e) {
        return EventAttribute.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = message.type);

    if (message.attributes) {
      obj.attributes = message.attributes.map(function (e) {
        return e ? EventAttribute.toJSON(e) : undefined;
      });
    } else {
      obj.attributes = [];
    }

    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$attributes;

    var message = createBaseEvent();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : "";
    message.attributes = ((_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.map(function (e) {
      return EventAttribute.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Event = Event;

function createBaseEventAttribute() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false
  };
}

var EventAttribute = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventAttribute();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.index = reader.bool();
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
      key: (0, _helpers.isSet)(object.key) ? (0, _helpers.bytesFromBase64)(object.key) : new Uint8Array(),
      value: (0, _helpers.isSet)(object.value) ? (0, _helpers.bytesFromBase64)(object.value) : new Uint8Array(),
      index: (0, _helpers.isSet)(object.index) ? Boolean(object.index) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = (0, _helpers.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = (0, _helpers.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$key3, _object$value3, _object$index2;

    var message = createBaseEventAttribute();
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.value = (_object$value3 = object.value) !== null && _object$value3 !== void 0 ? _object$value3 : new Uint8Array();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : false;
    return message;
  }
};
exports.EventAttribute = EventAttribute;

function createBaseTxResult() {
  return {
    height: _helpers.Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: undefined
  };
}

var TxResult = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }

    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }

    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxResult();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.index = reader.uint32();
          break;

        case 3:
          message.tx = reader.bytes();
          break;

        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
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
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0,
      tx: (0, _helpers.isSet)(object.tx) ? (0, _helpers.bytesFromBase64)(object.tx) : new Uint8Array(),
      result: (0, _helpers.isSet)(object.result) ? ResponseDeliverTx.fromJSON(object.result) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.tx !== undefined && (obj.tx = (0, _helpers.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.result !== undefined && (obj.result = message.result ? ResponseDeliverTx.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index3, _object$tx3;

    var message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : 0;
    message.tx = (_object$tx3 = object.tx) !== null && _object$tx3 !== void 0 ? _object$tx3 : new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  }
};
exports.TxResult = TxResult;

function createBaseValidator() {
  return {
    address: new Uint8Array(),
    power: _helpers.Long.ZERO
  };
}

var Validator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
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
          message.address = reader.bytes();
          break;

        case 3:
          message.power = reader.int64();
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
      address: (0, _helpers.isSet)(object.address) ? (0, _helpers.bytesFromBase64)(object.address) : new Uint8Array(),
      power: (0, _helpers.isSet)(object.power) ? _helpers.Long.fromString(object.power) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = (0, _helpers.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
    message.power !== undefined && (obj.power = (message.power || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;

    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Validator = Validator;

function createBaseValidatorUpdate() {
  return {
    pubKey: undefined,
    power: _helpers.Long.ZERO
  };
}

var ValidatorUpdate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.pubKey !== undefined) {
      _keys.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorUpdate();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = _keys.PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.power = reader.int64();
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
      power: (0, _helpers.isSet)(object.power) ? _helpers.Long.fromString(object.power) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? _keys.PublicKey.toJSON(message.pubKey) : undefined);
    message.power !== undefined && (obj.power = (message.power || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _keys.PublicKey.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? _helpers.Long.fromValue(object.power) : _helpers.Long.ZERO;
    return message;
  }
};
exports.ValidatorUpdate = ValidatorUpdate;

function createBaseVoteInfo() {
  return {
    validator: undefined,
    signedLastBlock: false
  };
}

var VoteInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteInfo();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        case 2:
          message.signedLastBlock = reader.bool();
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
      validator: (0, _helpers.isSet)(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      signedLastBlock: (0, _helpers.isSet)(object.signedLastBlock) ? Boolean(object.signedLastBlock) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.signedLastBlock !== undefined && (obj.signedLastBlock = message.signedLastBlock);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$signedLastBlo;

    var message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signedLastBlock = (_object$signedLastBlo = object.signedLastBlock) !== null && _object$signedLastBlo !== void 0 ? _object$signedLastBlo : false;
    return message;
  }
};
exports.VoteInfo = VoteInfo;

function createBaseEvidence() {
  return {
    type: 0,
    validator: undefined,
    height: _helpers.Long.ZERO,
    time: undefined,
    totalVotingPower: _helpers.Long.ZERO
  };
}

var Evidence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
    }

    if (!message.totalVotingPower.isZero()) {
      writer.uint32(40).int64(message.totalVotingPower);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidence();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;

        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = reader.int64();
          break;

        case 4:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.totalVotingPower = reader.int64();
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
      type: (0, _helpers.isSet)(object.type) ? evidenceTypeFromJSON(object.type) : 0,
      validator: (0, _helpers.isSet)(object.validator) ? Validator.fromJSON(object.validator) : undefined,
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      time: (0, _helpers.isSet)(object.time) ? (0, _helpers.fromJsonTimestamp)(object.time) : undefined,
      totalVotingPower: (0, _helpers.isSet)(object.totalVotingPower) ? _helpers.Long.fromString(object.totalVotingPower) : _helpers.Long.ZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || _helpers.Long.ZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$type3, _object$time2;

    var message = createBaseEvidence();
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.time = (_object$time2 = object.time) !== null && _object$time2 !== void 0 ? _object$time2 : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? _helpers.Long.fromValue(object.totalVotingPower) : _helpers.Long.ZERO;
    return message;
  }
};
exports.Evidence = Evidence;

function createBaseSnapshot() {
  return {
    height: _helpers.Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}

var Snapshot = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }

    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSnapshot();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunks = reader.uint32();
          break;

        case 4:
          message.hash = reader.bytes();
          break;

        case 5:
          message.metadata = reader.bytes();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.UZERO,
      format: (0, _helpers.isSet)(object.format) ? Number(object.format) : 0,
      chunks: (0, _helpers.isSet)(object.chunks) ? Number(object.chunks) : 0,
      hash: (0, _helpers.isSet)(object.hash) ? (0, _helpers.bytesFromBase64)(object.hash) : new Uint8Array(),
      metadata: (0, _helpers.isSet)(object.metadata) ? (0, _helpers.bytesFromBase64)(object.metadata) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined && (obj.hash = (0, _helpers.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = (0, _helpers.base64FromBytes)(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$format2, _object$chunks, _object$hash2, _object$metadata;

    var message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.UZERO;
    message.format = (_object$format2 = object.format) !== null && _object$format2 !== void 0 ? _object$format2 : 0;
    message.chunks = (_object$chunks = object.chunks) !== null && _object$chunks !== void 0 ? _object$chunks : 0;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : new Uint8Array();
    return message;
  }
};
exports.Snapshot = Snapshot;