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
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = exports.protobufPackage = void 0;
/* eslint-disable */
var duration_js_1 = require("../../google/protobuf/duration.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.types";
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined,
    };
}
exports.ConsensusParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
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
            block: isSet(object.block)
                ? exports.BlockParams.fromJSON(object.block)
                : undefined,
            evidence: isSet(object.evidence)
                ? exports.EvidenceParams.fromJSON(object.evidence)
                : undefined,
            validator: isSet(object.validator)
                ? exports.ValidatorParams.fromJSON(object.validator)
                : undefined,
            version: isSet(object.version)
                ? exports.VersionParams.fromJSON(object.version)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block !== undefined &&
            (obj.block = message.block
                ? exports.BlockParams.toJSON(message.block)
                : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? exports.EvidenceParams.toJSON(message.evidence)
                : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? exports.ValidatorParams.toJSON(message.validator)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? exports.VersionParams.toJSON(message.version)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseConsensusParams();
        message.block =
            object.block !== undefined && object.block !== null
                ? exports.BlockParams.fromPartial(object.block)
                : undefined;
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? exports.EvidenceParams.fromPartial(object.evidence)
                : undefined;
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? exports.ValidatorParams.fromPartial(object.validator)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? exports.VersionParams.fromPartial(object.version)
                : undefined;
        return message;
    },
};
function createBaseBlockParams() {
    return { maxBytes: long_1.default.ZERO, maxGas: long_1.default.ZERO, timeIotaMs: long_1.default.ZERO };
}
exports.BlockParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.maxBytes.isZero()) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (!message.maxGas.isZero()) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (!message.timeIotaMs.isZero()) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    decode: function (input, length) {
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
                case 3:
                    message.timeIotaMs = reader.int64();
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
            maxBytes: isSet(object.maxBytes)
                ? long_1.default.fromValue(object.maxBytes)
                : long_1.default.ZERO,
            maxGas: isSet(object.maxGas) ? long_1.default.fromValue(object.maxGas) : long_1.default.ZERO,
            timeIotaMs: isSet(object.timeIotaMs)
                ? long_1.default.fromValue(object.timeIotaMs)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.maxBytes !== undefined &&
            (obj.maxBytes = (message.maxBytes || long_1.default.ZERO).toString());
        message.maxGas !== undefined &&
            (obj.maxGas = (message.maxGas || long_1.default.ZERO).toString());
        message.timeIotaMs !== undefined &&
            (obj.timeIotaMs = (message.timeIotaMs || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBlockParams();
        message.maxBytes =
            object.maxBytes !== undefined && object.maxBytes !== null
                ? long_1.default.fromValue(object.maxBytes)
                : long_1.default.ZERO;
        message.maxGas =
            object.maxGas !== undefined && object.maxGas !== null
                ? long_1.default.fromValue(object.maxGas)
                : long_1.default.ZERO;
        message.timeIotaMs =
            object.timeIotaMs !== undefined && object.timeIotaMs !== null
                ? long_1.default.fromValue(object.timeIotaMs)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: long_1.default.ZERO,
        maxAgeDuration: undefined,
        maxBytes: long_1.default.ZERO,
    };
}
exports.EvidenceParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.maxAgeNumBlocks.isZero()) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            duration_js_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (!message.maxBytes.isZero()) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidenceParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
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
            maxAgeNumBlocks: isSet(object.maxAgeNumBlocks)
                ? long_1.default.fromValue(object.maxAgeNumBlocks)
                : long_1.default.ZERO,
            maxAgeDuration: isSet(object.maxAgeDuration)
                ? duration_js_1.Duration.fromJSON(object.maxAgeDuration)
                : undefined,
            maxBytes: isSet(object.maxBytes)
                ? long_1.default.fromValue(object.maxBytes)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.maxAgeNumBlocks !== undefined &&
            (obj.maxAgeNumBlocks = (message.maxAgeNumBlocks || long_1.default.ZERO).toString());
        message.maxAgeDuration !== undefined &&
            (obj.maxAgeDuration = message.maxAgeDuration
                ? duration_js_1.Duration.toJSON(message.maxAgeDuration)
                : undefined);
        message.maxBytes !== undefined &&
            (obj.maxBytes = (message.maxBytes || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseEvidenceParams();
        message.maxAgeNumBlocks =
            object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null
                ? long_1.default.fromValue(object.maxAgeNumBlocks)
                : long_1.default.ZERO;
        message.maxAgeDuration =
            object.maxAgeDuration !== undefined && object.maxAgeDuration !== null
                ? duration_js_1.Duration.fromPartial(object.maxAgeDuration)
                : undefined;
        message.maxBytes =
            object.maxBytes !== undefined && object.maxBytes !== null
                ? long_1.default.fromValue(object.maxBytes)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseValidatorParams() {
    return { pubKeyTypes: [] };
}
exports.ValidatorParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.pubKeyTypes; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
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
            pubKeyTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.pubKeyTypes)
                ? object.pubKeyTypes.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pubKeyTypes) {
            obj.pubKeyTypes = message.pubKeyTypes.map(function (e) { return e; });
        }
        else {
            obj.pubKeyTypes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorParams();
        message.pubKeyTypes = ((_a = object.pubKeyTypes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseVersionParams() {
    return { appVersion: long_1.default.UZERO };
}
exports.VersionParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.appVersion.isZero()) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVersionParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appVersion = reader.uint64();
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
            appVersion: isSet(object.appVersion)
                ? long_1.default.fromValue(object.appVersion)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.appVersion !== undefined &&
            (obj.appVersion = (message.appVersion || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseVersionParams();
        message.appVersion =
            object.appVersion !== undefined && object.appVersion !== null
                ? long_1.default.fromValue(object.appVersion)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseHashedParams() {
    return { blockMaxBytes: long_1.default.ZERO, blockMaxGas: long_1.default.ZERO };
}
exports.HashedParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.blockMaxBytes.isZero()) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (!message.blockMaxGas.isZero()) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHashedParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
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
            blockMaxBytes: isSet(object.blockMaxBytes)
                ? long_1.default.fromValue(object.blockMaxBytes)
                : long_1.default.ZERO,
            blockMaxGas: isSet(object.blockMaxGas)
                ? long_1.default.fromValue(object.blockMaxGas)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockMaxBytes !== undefined &&
            (obj.blockMaxBytes = (message.blockMaxBytes || long_1.default.ZERO).toString());
        message.blockMaxGas !== undefined &&
            (obj.blockMaxGas = (message.blockMaxGas || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseHashedParams();
        message.blockMaxBytes =
            object.blockMaxBytes !== undefined && object.blockMaxBytes !== null
                ? long_1.default.fromValue(object.blockMaxBytes)
                : long_1.default.ZERO;
        message.blockMaxGas =
            object.blockMaxGas !== undefined && object.blockMaxGas !== null
                ? long_1.default.fromValue(object.blockMaxGas)
                : long_1.default.ZERO;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map