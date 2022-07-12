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
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("./types.js");
var timestamp_js_1 = require("../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var validator_js_1 = require("./validator.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.types";
function createBaseEvidence() {
    return {
        duplicateVoteEvidence: undefined,
        lightClientAttackEvidence: undefined,
    };
}
exports.Evidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.duplicateVoteEvidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.lightClientAttackEvidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicateVoteEvidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lightClientAttackEvidence = exports.LightClientAttackEvidence.decode(reader, reader.uint32());
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
            duplicateVoteEvidence: isSet(object.duplicateVoteEvidence)
                ? exports.DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence)
                : undefined,
            lightClientAttackEvidence: isSet(object.lightClientAttackEvidence)
                ? exports.LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.duplicateVoteEvidence !== undefined &&
            (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
                ? exports.DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
                : undefined);
        message.lightClientAttackEvidence !== undefined &&
            (obj.lightClientAttackEvidence = message.lightClientAttackEvidence
                ? exports.LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseEvidence();
        message.duplicateVoteEvidence =
            object.duplicateVoteEvidence !== undefined &&
                object.duplicateVoteEvidence !== null
                ? exports.DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence)
                : undefined;
        message.lightClientAttackEvidence =
            object.lightClientAttackEvidence !== undefined &&
                object.lightClientAttackEvidence !== null
                ? exports.LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence)
                : undefined;
        return message;
    },
};
function createBaseDuplicateVoteEvidence() {
    return {
        voteA: undefined,
        voteB: undefined,
        totalVotingPower: long_1.default.ZERO,
        validatorPower: long_1.default.ZERO,
        timestamp: undefined,
    };
}
exports.DuplicateVoteEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.voteA !== undefined) {
            types_js_1.Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteB !== undefined) {
            types_js_1.Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        if (!message.validatorPower.isZero()) {
            writer.uint32(32).int64(message.validatorPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteA = types_js_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voteB = types_js_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = reader.int64();
                    break;
                case 4:
                    message.validatorPower = reader.int64();
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            voteA: isSet(object.voteA) ? types_js_1.Vote.fromJSON(object.voteA) : undefined,
            voteB: isSet(object.voteB) ? types_js_1.Vote.fromJSON(object.voteB) : undefined,
            totalVotingPower: isSet(object.totalVotingPower)
                ? long_1.default.fromValue(object.totalVotingPower)
                : long_1.default.ZERO,
            validatorPower: isSet(object.validatorPower)
                ? long_1.default.fromValue(object.validatorPower)
                : long_1.default.ZERO,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.voteA !== undefined &&
            (obj.voteA = message.voteA ? types_js_1.Vote.toJSON(message.voteA) : undefined);
        message.voteB !== undefined &&
            (obj.voteB = message.voteB ? types_js_1.Vote.toJSON(message.voteB) : undefined);
        message.totalVotingPower !== undefined &&
            (obj.totalVotingPower = (message.totalVotingPower || long_1.default.ZERO).toString());
        message.validatorPower !== undefined &&
            (obj.validatorPower = (message.validatorPower || long_1.default.ZERO).toString());
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDuplicateVoteEvidence();
        message.voteA =
            object.voteA !== undefined && object.voteA !== null
                ? types_js_1.Vote.fromPartial(object.voteA)
                : undefined;
        message.voteB =
            object.voteB !== undefined && object.voteB !== null
                ? types_js_1.Vote.fromPartial(object.voteB)
                : undefined;
        message.totalVotingPower =
            object.totalVotingPower !== undefined && object.totalVotingPower !== null
                ? long_1.default.fromValue(object.totalVotingPower)
                : long_1.default.ZERO;
        message.validatorPower =
            object.validatorPower !== undefined && object.validatorPower !== null
                ? long_1.default.fromValue(object.validatorPower)
                : long_1.default.ZERO;
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseLightClientAttackEvidence() {
    return {
        conflictingBlock: undefined,
        commonHeight: long_1.default.ZERO,
        byzantineValidators: [],
        totalVotingPower: long_1.default.ZERO,
        timestamp: undefined,
    };
}
exports.LightClientAttackEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.conflictingBlock !== undefined) {
            types_js_1.LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
        }
        if (!message.commonHeight.isZero()) {
            writer.uint32(16).int64(message.commonHeight);
        }
        for (var _i = 0, _a = message.byzantineValidators; _i < _a.length; _i++) {
            var v = _a[_i];
            validator_js_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(32).int64(message.totalVotingPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflictingBlock = types_js_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commonHeight = reader.int64();
                    break;
                case 3:
                    message.byzantineValidators.push(validator_js_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalVotingPower = reader.int64();
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            conflictingBlock: isSet(object.conflictingBlock)
                ? types_js_1.LightBlock.fromJSON(object.conflictingBlock)
                : undefined,
            commonHeight: isSet(object.commonHeight)
                ? long_1.default.fromValue(object.commonHeight)
                : long_1.default.ZERO,
            byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantineValidators)
                ? object.byzantineValidators.map(function (e) { return validator_js_1.Validator.fromJSON(e); })
                : [],
            totalVotingPower: isSet(object.totalVotingPower)
                ? long_1.default.fromValue(object.totalVotingPower)
                : long_1.default.ZERO,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.conflictingBlock !== undefined &&
            (obj.conflictingBlock = message.conflictingBlock
                ? types_js_1.LightBlock.toJSON(message.conflictingBlock)
                : undefined);
        message.commonHeight !== undefined &&
            (obj.commonHeight = (message.commonHeight || long_1.default.ZERO).toString());
        if (message.byzantineValidators) {
            obj.byzantineValidators = message.byzantineValidators.map(function (e) {
                return e ? validator_js_1.Validator.toJSON(e) : undefined;
            });
        }
        else {
            obj.byzantineValidators = [];
        }
        message.totalVotingPower !== undefined &&
            (obj.totalVotingPower = (message.totalVotingPower || long_1.default.ZERO).toString());
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLightClientAttackEvidence();
        message.conflictingBlock =
            object.conflictingBlock !== undefined && object.conflictingBlock !== null
                ? types_js_1.LightBlock.fromPartial(object.conflictingBlock)
                : undefined;
        message.commonHeight =
            object.commonHeight !== undefined && object.commonHeight !== null
                ? long_1.default.fromValue(object.commonHeight)
                : long_1.default.ZERO;
        message.byzantineValidators =
            ((_a = object.byzantineValidators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return validator_js_1.Validator.fromPartial(e); })) || [];
        message.totalVotingPower =
            object.totalVotingPower !== undefined && object.totalVotingPower !== null
                ? long_1.default.fromValue(object.totalVotingPower)
                : long_1.default.ZERO;
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseEvidenceList() {
    return { evidence: [] };
}
exports.EvidenceList = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.evidence; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidenceList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
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
            evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence)
                ? object.evidence.map(function (e) { return exports.Evidence.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(function (e) {
                return e ? exports.Evidence.toJSON(e) : undefined;
            });
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEvidenceList();
        message.evidence =
            ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Evidence.fromPartial(e); })) || [];
        return message;
    },
};
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
//# sourceMappingURL=evidence.js.map