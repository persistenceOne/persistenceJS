"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Version = exports.ConsensusParamsInfo = exports.ValidatorsInfo = exports.ABCIResponses = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("../abci/types.js");
var validator_js_1 = require("../types/validator.js");
var params_js_1 = require("../types/params.js");
var types_js_2 = require("../version/types.js");
var types_js_3 = require("../types/types.js");
var timestamp_js_1 = require("../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.state";
function createBaseABCIResponses() {
    return { deliverTxs: [], endBlock: undefined, beginBlock: undefined };
}
exports.ABCIResponses = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.deliverTxs; _i < _a.length; _i++) {
            var v = _a[_i];
            types_js_1.ResponseDeliverTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            types_js_1.ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            types_js_1.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseABCIResponses();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deliverTxs.push(types_js_1.ResponseDeliverTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.endBlock = types_js_1.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.beginBlock = types_js_1.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            deliverTxs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliverTxs)
                ? object.deliverTxs.map(function (e) { return types_js_1.ResponseDeliverTx.fromJSON(e); })
                : [],
            endBlock: isSet(object.endBlock)
                ? types_js_1.ResponseEndBlock.fromJSON(object.endBlock)
                : undefined,
            beginBlock: isSet(object.beginBlock)
                ? types_js_1.ResponseBeginBlock.fromJSON(object.beginBlock)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.deliverTxs) {
            obj.deliverTxs = message.deliverTxs.map(function (e) {
                return e ? types_js_1.ResponseDeliverTx.toJSON(e) : undefined;
            });
        }
        else {
            obj.deliverTxs = [];
        }
        message.endBlock !== undefined &&
            (obj.endBlock = message.endBlock
                ? types_js_1.ResponseEndBlock.toJSON(message.endBlock)
                : undefined);
        message.beginBlock !== undefined &&
            (obj.beginBlock = message.beginBlock
                ? types_js_1.ResponseBeginBlock.toJSON(message.beginBlock)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseABCIResponses();
        message.deliverTxs =
            ((_a = object.deliverTxs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_js_1.ResponseDeliverTx.fromPartial(e); })) || [];
        message.endBlock =
            object.endBlock !== undefined && object.endBlock !== null
                ? types_js_1.ResponseEndBlock.fromPartial(object.endBlock)
                : undefined;
        message.beginBlock =
            object.beginBlock !== undefined && object.beginBlock !== null
                ? types_js_1.ResponseBeginBlock.fromPartial(object.beginBlock)
                : undefined;
        return message;
    },
};
function createBaseValidatorsInfo() {
    return { validatorSet: undefined, lastHeightChanged: long_1.default.ZERO };
}
exports.ValidatorsInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorSet !== undefined) {
            validator_js_1.ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
        }
        if (!message.lastHeightChanged.isZero()) {
            writer.uint32(16).int64(message.lastHeightChanged);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorsInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSet = validator_js_1.ValidatorSet.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            validatorSet: isSet(object.validatorSet)
                ? validator_js_1.ValidatorSet.fromJSON(object.validatorSet)
                : undefined,
            lastHeightChanged: isSet(object.lastHeightChanged)
                ? long_1.default.fromValue(object.lastHeightChanged)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorSet !== undefined &&
            (obj.validatorSet = message.validatorSet
                ? validator_js_1.ValidatorSet.toJSON(message.validatorSet)
                : undefined);
        message.lastHeightChanged !== undefined &&
            (obj.lastHeightChanged = (message.lastHeightChanged || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseValidatorsInfo();
        message.validatorSet =
            object.validatorSet !== undefined && object.validatorSet !== null
                ? validator_js_1.ValidatorSet.fromPartial(object.validatorSet)
                : undefined;
        message.lastHeightChanged =
            object.lastHeightChanged !== undefined &&
                object.lastHeightChanged !== null
                ? long_1.default.fromValue(object.lastHeightChanged)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseConsensusParamsInfo() {
    return { consensusParams: undefined, lastHeightChanged: long_1.default.ZERO };
}
exports.ConsensusParamsInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.consensusParams !== undefined) {
            params_js_1.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        if (!message.lastHeightChanged.isZero()) {
            writer.uint32(16).int64(message.lastHeightChanged);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusParamsInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusParams = params_js_1.ConsensusParams.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            consensusParams: isSet(object.consensusParams)
                ? params_js_1.ConsensusParams.fromJSON(object.consensusParams)
                : undefined,
            lastHeightChanged: isSet(object.lastHeightChanged)
                ? long_1.default.fromValue(object.lastHeightChanged)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.consensusParams !== undefined &&
            (obj.consensusParams = message.consensusParams
                ? params_js_1.ConsensusParams.toJSON(message.consensusParams)
                : undefined);
        message.lastHeightChanged !== undefined &&
            (obj.lastHeightChanged = (message.lastHeightChanged || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseConsensusParamsInfo();
        message.consensusParams =
            object.consensusParams !== undefined && object.consensusParams !== null
                ? params_js_1.ConsensusParams.fromPartial(object.consensusParams)
                : undefined;
        message.lastHeightChanged =
            object.lastHeightChanged !== undefined &&
                object.lastHeightChanged !== null
                ? long_1.default.fromValue(object.lastHeightChanged)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseVersion() {
    return { consensus: undefined, software: "" };
}
exports.Version = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.consensus !== undefined) {
            types_js_2.Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus = types_js_2.Consensus.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            consensus: isSet(object.consensus)
                ? types_js_2.Consensus.fromJSON(object.consensus)
                : undefined,
            software: isSet(object.software) ? String(object.software) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.consensus !== undefined &&
            (obj.consensus = message.consensus
                ? types_js_2.Consensus.toJSON(message.consensus)
                : undefined);
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseVersion();
        message.consensus =
            object.consensus !== undefined && object.consensus !== null
                ? types_js_2.Consensus.fromPartial(object.consensus)
                : undefined;
        message.software = (_a = object.software) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseState() {
    return {
        version: undefined,
        chainId: "",
        initialHeight: long_1.default.ZERO,
        lastBlockHeight: long_1.default.ZERO,
        lastBlockId: undefined,
        lastBlockTime: undefined,
        nextValidators: undefined,
        validators: undefined,
        lastValidators: undefined,
        lastHeightValidatorsChanged: long_1.default.ZERO,
        consensusParams: undefined,
        lastHeightConsensusParamsChanged: long_1.default.ZERO,
        lastResultsHash: new Uint8Array(),
        appHash: new Uint8Array(),
    };
}
exports.State = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== undefined) {
            exports.Version.encode(message.version, writer.uint32(10).fork()).ldelim();
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
            types_js_3.BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockTime !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.nextValidators !== undefined) {
            validator_js_1.ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
        }
        if (message.validators !== undefined) {
            validator_js_1.ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
        }
        if (message.lastValidators !== undefined) {
            validator_js_1.ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
        }
        if (!message.lastHeightValidatorsChanged.isZero()) {
            writer.uint32(72).int64(message.lastHeightValidatorsChanged);
        }
        if (message.consensusParams !== undefined) {
            params_js_1.ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = exports.Version.decode(reader, reader.uint32());
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
                    message.lastBlockId = types_js_3.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.lastBlockTime = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.nextValidators = validator_js_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.validators = validator_js_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.lastValidators = validator_js_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.lastHeightValidatorsChanged = reader.int64();
                    break;
                case 10:
                    message.consensusParams = params_js_1.ConsensusParams.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            version: isSet(object.version)
                ? exports.Version.fromJSON(object.version)
                : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            initialHeight: isSet(object.initialHeight)
                ? long_1.default.fromValue(object.initialHeight)
                : long_1.default.ZERO,
            lastBlockHeight: isSet(object.lastBlockHeight)
                ? long_1.default.fromValue(object.lastBlockHeight)
                : long_1.default.ZERO,
            lastBlockId: isSet(object.lastBlockId)
                ? types_js_3.BlockID.fromJSON(object.lastBlockId)
                : undefined,
            lastBlockTime: isSet(object.lastBlockTime)
                ? fromJsonTimestamp(object.lastBlockTime)
                : undefined,
            nextValidators: isSet(object.nextValidators)
                ? validator_js_1.ValidatorSet.fromJSON(object.nextValidators)
                : undefined,
            validators: isSet(object.validators)
                ? validator_js_1.ValidatorSet.fromJSON(object.validators)
                : undefined,
            lastValidators: isSet(object.lastValidators)
                ? validator_js_1.ValidatorSet.fromJSON(object.lastValidators)
                : undefined,
            lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged)
                ? long_1.default.fromValue(object.lastHeightValidatorsChanged)
                : long_1.default.ZERO,
            consensusParams: isSet(object.consensusParams)
                ? params_js_1.ConsensusParams.fromJSON(object.consensusParams)
                : undefined,
            lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged)
                ? long_1.default.fromValue(object.lastHeightConsensusParamsChanged)
                : long_1.default.ZERO,
            lastResultsHash: isSet(object.lastResultsHash)
                ? bytesFromBase64(object.lastResultsHash)
                : new Uint8Array(),
            appHash: isSet(object.appHash)
                ? bytesFromBase64(object.appHash)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined &&
            (obj.version = message.version
                ? exports.Version.toJSON(message.version)
                : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.initialHeight !== undefined &&
            (obj.initialHeight = (message.initialHeight || long_1.default.ZERO).toString());
        message.lastBlockHeight !== undefined &&
            (obj.lastBlockHeight = (message.lastBlockHeight || long_1.default.ZERO).toString());
        message.lastBlockId !== undefined &&
            (obj.lastBlockId = message.lastBlockId
                ? types_js_3.BlockID.toJSON(message.lastBlockId)
                : undefined);
        message.lastBlockTime !== undefined &&
            (obj.lastBlockTime = message.lastBlockTime.toISOString());
        message.nextValidators !== undefined &&
            (obj.nextValidators = message.nextValidators
                ? validator_js_1.ValidatorSet.toJSON(message.nextValidators)
                : undefined);
        message.validators !== undefined &&
            (obj.validators = message.validators
                ? validator_js_1.ValidatorSet.toJSON(message.validators)
                : undefined);
        message.lastValidators !== undefined &&
            (obj.lastValidators = message.lastValidators
                ? validator_js_1.ValidatorSet.toJSON(message.lastValidators)
                : undefined);
        message.lastHeightValidatorsChanged !== undefined &&
            (obj.lastHeightValidatorsChanged = (message.lastHeightValidatorsChanged || long_1.default.ZERO).toString());
        message.consensusParams !== undefined &&
            (obj.consensusParams = message.consensusParams
                ? params_js_1.ConsensusParams.toJSON(message.consensusParams)
                : undefined);
        message.lastHeightConsensusParamsChanged !== undefined &&
            (obj.lastHeightConsensusParamsChanged = (message.lastHeightConsensusParamsChanged || long_1.default.ZERO).toString());
        message.lastResultsHash !== undefined &&
            (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined
                ? message.lastResultsHash
                : new Uint8Array()));
        message.appHash !== undefined &&
            (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseState();
        message.version =
            object.version !== undefined && object.version !== null
                ? exports.Version.fromPartial(object.version)
                : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.initialHeight =
            object.initialHeight !== undefined && object.initialHeight !== null
                ? long_1.default.fromValue(object.initialHeight)
                : long_1.default.ZERO;
        message.lastBlockHeight =
            object.lastBlockHeight !== undefined && object.lastBlockHeight !== null
                ? long_1.default.fromValue(object.lastBlockHeight)
                : long_1.default.ZERO;
        message.lastBlockId =
            object.lastBlockId !== undefined && object.lastBlockId !== null
                ? types_js_3.BlockID.fromPartial(object.lastBlockId)
                : undefined;
        message.lastBlockTime = (_b = object.lastBlockTime) !== null && _b !== void 0 ? _b : undefined;
        message.nextValidators =
            object.nextValidators !== undefined && object.nextValidators !== null
                ? validator_js_1.ValidatorSet.fromPartial(object.nextValidators)
                : undefined;
        message.validators =
            object.validators !== undefined && object.validators !== null
                ? validator_js_1.ValidatorSet.fromPartial(object.validators)
                : undefined;
        message.lastValidators =
            object.lastValidators !== undefined && object.lastValidators !== null
                ? validator_js_1.ValidatorSet.fromPartial(object.lastValidators)
                : undefined;
        message.lastHeightValidatorsChanged =
            object.lastHeightValidatorsChanged !== undefined &&
                object.lastHeightValidatorsChanged !== null
                ? long_1.default.fromValue(object.lastHeightValidatorsChanged)
                : long_1.default.ZERO;
        message.consensusParams =
            object.consensusParams !== undefined && object.consensusParams !== null
                ? params_js_1.ConsensusParams.fromPartial(object.consensusParams)
                : undefined;
        message.lastHeightConsensusParamsChanged =
            object.lastHeightConsensusParamsChanged !== undefined &&
                object.lastHeightConsensusParamsChanged !== null
                ? long_1.default.fromValue(object.lastHeightConsensusParamsChanged)
                : long_1.default.ZERO;
        message.lastResultsHash = (_c = object.lastResultsHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.appHash = (_d = object.appHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    arr.forEach(function (byte) {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    var seconds = numberToLong(date.getTime() / 1000);
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map