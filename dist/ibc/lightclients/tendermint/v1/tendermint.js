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
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = exports.protobufPackage = void 0;
/* eslint-disable */
var duration_js_1 = require("../../../../google/protobuf/duration.js");
var client_js_1 = require("../../../core/client/v1/client.js");
var commitment_js_1 = require("../../../core/commitment/v1/commitment.js");
var types_js_1 = require("../../../../tendermint/types/types.js");
var validator_js_1 = require("../../../../tendermint/types/validator.js");
var timestamp_js_1 = require("../../../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var proofs_js_1 = require("../../../../confio/proofs.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.lightclients.tendermint.v1";
function createBaseClientState() {
    return {
        chainId: "",
        trustLevel: undefined,
        trustingPeriod: undefined,
        unbondingPeriod: undefined,
        maxClockDrift: undefined,
        frozenHeight: undefined,
        latestHeight: undefined,
        proofSpecs: [],
        upgradePath: [],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false,
    };
}
exports.ClientState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.trustLevel !== undefined) {
            exports.Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustingPeriod !== undefined) {
            duration_js_1.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbondingPeriod !== undefined) {
            duration_js_1.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxClockDrift !== undefined) {
            duration_js_1.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozenHeight !== undefined) {
            client_js_1.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestHeight !== undefined) {
            client_js_1.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
        }
        for (var _i = 0, _a = message.proofSpecs; _i < _a.length; _i++) {
            var v = _a[_i];
            proofs_js_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _b = 0, _c = message.upgradePath; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(74).string(v);
        }
        if (message.allowUpdateAfterExpiry === true) {
            writer.uint32(80).bool(message.allowUpdateAfterExpiry);
        }
        if (message.allowUpdateAfterMisbehaviour === true) {
            writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClientState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.trustLevel = exports.Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustingPeriod = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbondingPeriod = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxClockDrift = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozenHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latestHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proofSpecs.push(proofs_js_1.ProofSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.upgradePath.push(reader.string());
                    break;
                case 10:
                    message.allowUpdateAfterExpiry = reader.bool();
                    break;
                case 11:
                    message.allowUpdateAfterMisbehaviour = reader.bool();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            trustLevel: isSet(object.trustLevel)
                ? exports.Fraction.fromJSON(object.trustLevel)
                : undefined,
            trustingPeriod: isSet(object.trustingPeriod)
                ? duration_js_1.Duration.fromJSON(object.trustingPeriod)
                : undefined,
            unbondingPeriod: isSet(object.unbondingPeriod)
                ? duration_js_1.Duration.fromJSON(object.unbondingPeriod)
                : undefined,
            maxClockDrift: isSet(object.maxClockDrift)
                ? duration_js_1.Duration.fromJSON(object.maxClockDrift)
                : undefined,
            frozenHeight: isSet(object.frozenHeight)
                ? client_js_1.Height.fromJSON(object.frozenHeight)
                : undefined,
            latestHeight: isSet(object.latestHeight)
                ? client_js_1.Height.fromJSON(object.latestHeight)
                : undefined,
            proofSpecs: Array.isArray(object === null || object === void 0 ? void 0 : object.proofSpecs)
                ? object.proofSpecs.map(function (e) { return proofs_js_1.ProofSpec.fromJSON(e); })
                : [],
            upgradePath: Array.isArray(object === null || object === void 0 ? void 0 : object.upgradePath)
                ? object.upgradePath.map(function (e) { return String(e); })
                : [],
            allowUpdateAfterExpiry: isSet(object.allowUpdateAfterExpiry)
                ? Boolean(object.allowUpdateAfterExpiry)
                : false,
            allowUpdateAfterMisbehaviour: isSet(object.allowUpdateAfterMisbehaviour)
                ? Boolean(object.allowUpdateAfterMisbehaviour)
                : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.trustLevel !== undefined &&
            (obj.trustLevel = message.trustLevel
                ? exports.Fraction.toJSON(message.trustLevel)
                : undefined);
        message.trustingPeriod !== undefined &&
            (obj.trustingPeriod = message.trustingPeriod
                ? duration_js_1.Duration.toJSON(message.trustingPeriod)
                : undefined);
        message.unbondingPeriod !== undefined &&
            (obj.unbondingPeriod = message.unbondingPeriod
                ? duration_js_1.Duration.toJSON(message.unbondingPeriod)
                : undefined);
        message.maxClockDrift !== undefined &&
            (obj.maxClockDrift = message.maxClockDrift
                ? duration_js_1.Duration.toJSON(message.maxClockDrift)
                : undefined);
        message.frozenHeight !== undefined &&
            (obj.frozenHeight = message.frozenHeight
                ? client_js_1.Height.toJSON(message.frozenHeight)
                : undefined);
        message.latestHeight !== undefined &&
            (obj.latestHeight = message.latestHeight
                ? client_js_1.Height.toJSON(message.latestHeight)
                : undefined);
        if (message.proofSpecs) {
            obj.proofSpecs = message.proofSpecs.map(function (e) {
                return e ? proofs_js_1.ProofSpec.toJSON(e) : undefined;
            });
        }
        else {
            obj.proofSpecs = [];
        }
        if (message.upgradePath) {
            obj.upgradePath = message.upgradePath.map(function (e) { return e; });
        }
        else {
            obj.upgradePath = [];
        }
        message.allowUpdateAfterExpiry !== undefined &&
            (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
        message.allowUpdateAfterMisbehaviour !== undefined &&
            (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseClientState();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.trustLevel =
            object.trustLevel !== undefined && object.trustLevel !== null
                ? exports.Fraction.fromPartial(object.trustLevel)
                : undefined;
        message.trustingPeriod =
            object.trustingPeriod !== undefined && object.trustingPeriod !== null
                ? duration_js_1.Duration.fromPartial(object.trustingPeriod)
                : undefined;
        message.unbondingPeriod =
            object.unbondingPeriod !== undefined && object.unbondingPeriod !== null
                ? duration_js_1.Duration.fromPartial(object.unbondingPeriod)
                : undefined;
        message.maxClockDrift =
            object.maxClockDrift !== undefined && object.maxClockDrift !== null
                ? duration_js_1.Duration.fromPartial(object.maxClockDrift)
                : undefined;
        message.frozenHeight =
            object.frozenHeight !== undefined && object.frozenHeight !== null
                ? client_js_1.Height.fromPartial(object.frozenHeight)
                : undefined;
        message.latestHeight =
            object.latestHeight !== undefined && object.latestHeight !== null
                ? client_js_1.Height.fromPartial(object.latestHeight)
                : undefined;
        message.proofSpecs =
            ((_b = object.proofSpecs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return proofs_js_1.ProofSpec.fromPartial(e); })) || [];
        message.upgradePath = ((_c = object.upgradePath) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.allowUpdateAfterExpiry = (_d = object.allowUpdateAfterExpiry) !== null && _d !== void 0 ? _d : false;
        message.allowUpdateAfterMisbehaviour = (_e = object.allowUpdateAfterMisbehaviour) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseConsensusState() {
    return {
        timestamp: undefined,
        root: undefined,
        nextValidatorsHash: new Uint8Array(),
    };
}
exports.ConsensusState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_js_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(26).bytes(message.nextValidatorsHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.root = commitment_js_1.MerkleRoot.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextValidatorsHash = reader.bytes();
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
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            root: isSet(object.root) ? commitment_js_1.MerkleRoot.fromJSON(object.root) : undefined,
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.root !== undefined &&
            (obj.root = message.root ? commitment_js_1.MerkleRoot.toJSON(message.root) : undefined);
        message.nextValidatorsHash !== undefined &&
            (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined
                ? message.nextValidatorsHash
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseConsensusState();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : undefined;
        message.root =
            object.root !== undefined && object.root !== null
                ? commitment_js_1.MerkleRoot.fromPartial(object.root)
                : undefined;
        message.nextValidatorsHash = (_b = object.nextValidatorsHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMisbehaviour() {
    return { clientId: "", header1: undefined, header2: undefined };
}
exports.Misbehaviour = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header1 !== undefined) {
            exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMisbehaviour();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.header1 = exports.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header2 = exports.Header.decode(reader, reader.uint32());
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            header1: isSet(object.header1)
                ? exports.Header.fromJSON(object.header1)
                : undefined,
            header2: isSet(object.header2)
                ? exports.Header.fromJSON(object.header2)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.header1 !== undefined &&
            (obj.header1 = message.header1
                ? exports.Header.toJSON(message.header1)
                : undefined);
        message.header2 !== undefined &&
            (obj.header2 = message.header2
                ? exports.Header.toJSON(message.header2)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMisbehaviour();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.header1 =
            object.header1 !== undefined && object.header1 !== null
                ? exports.Header.fromPartial(object.header1)
                : undefined;
        message.header2 =
            object.header2 !== undefined && object.header2 !== null
                ? exports.Header.fromPartial(object.header2)
                : undefined;
        return message;
    },
};
function createBaseHeader() {
    return {
        signedHeader: undefined,
        validatorSet: undefined,
        trustedHeight: undefined,
        trustedValidators: undefined,
    };
}
exports.Header = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signedHeader !== undefined) {
            types_js_1.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_js_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustedHeight !== undefined) {
            client_js_1.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.trustedValidators !== undefined) {
            validator_js_1.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = types_js_1.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_js_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustedHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trustedValidators = validator_js_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: isSet(object.signedHeader)
                ? types_js_1.SignedHeader.fromJSON(object.signedHeader)
                : undefined,
            validatorSet: isSet(object.validatorSet)
                ? validator_js_1.ValidatorSet.fromJSON(object.validatorSet)
                : undefined,
            trustedHeight: isSet(object.trustedHeight)
                ? client_js_1.Height.fromJSON(object.trustedHeight)
                : undefined,
            trustedValidators: isSet(object.trustedValidators)
                ? validator_js_1.ValidatorSet.fromJSON(object.trustedValidators)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signedHeader !== undefined &&
            (obj.signedHeader = message.signedHeader
                ? types_js_1.SignedHeader.toJSON(message.signedHeader)
                : undefined);
        message.validatorSet !== undefined &&
            (obj.validatorSet = message.validatorSet
                ? validator_js_1.ValidatorSet.toJSON(message.validatorSet)
                : undefined);
        message.trustedHeight !== undefined &&
            (obj.trustedHeight = message.trustedHeight
                ? client_js_1.Height.toJSON(message.trustedHeight)
                : undefined);
        message.trustedValidators !== undefined &&
            (obj.trustedValidators = message.trustedValidators
                ? validator_js_1.ValidatorSet.toJSON(message.trustedValidators)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseHeader();
        message.signedHeader =
            object.signedHeader !== undefined && object.signedHeader !== null
                ? types_js_1.SignedHeader.fromPartial(object.signedHeader)
                : undefined;
        message.validatorSet =
            object.validatorSet !== undefined && object.validatorSet !== null
                ? validator_js_1.ValidatorSet.fromPartial(object.validatorSet)
                : undefined;
        message.trustedHeight =
            object.trustedHeight !== undefined && object.trustedHeight !== null
                ? client_js_1.Height.fromPartial(object.trustedHeight)
                : undefined;
        message.trustedValidators =
            object.trustedValidators !== undefined &&
                object.trustedValidators !== null
                ? validator_js_1.ValidatorSet.fromPartial(object.trustedValidators)
                : undefined;
        return message;
    },
};
function createBaseFraction() {
    return { numerator: long_1.default.UZERO, denominator: long_1.default.UZERO };
}
exports.Fraction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.numerator.isZero()) {
            writer.uint32(8).uint64(message.numerator);
        }
        if (!message.denominator.isZero()) {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFraction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = reader.uint64();
                    break;
                case 2:
                    message.denominator = reader.uint64();
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
            numerator: isSet(object.numerator)
                ? long_1.default.fromValue(object.numerator)
                : long_1.default.UZERO,
            denominator: isSet(object.denominator)
                ? long_1.default.fromValue(object.denominator)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.numerator !== undefined &&
            (obj.numerator = (message.numerator || long_1.default.UZERO).toString());
        message.denominator !== undefined &&
            (obj.denominator = (message.denominator || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseFraction();
        message.numerator =
            object.numerator !== undefined && object.numerator !== null
                ? long_1.default.fromValue(object.numerator)
                : long_1.default.UZERO;
        message.denominator =
            object.denominator !== undefined && object.denominator !== null
                ? long_1.default.fromValue(object.denominator)
                : long_1.default.UZERO;
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
//# sourceMappingURL=tendermint.js.map