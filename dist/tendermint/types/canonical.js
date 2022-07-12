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
exports.CanonicalVote = exports.CanonicalProposal = exports.CanonicalPartSetHeader = exports.CanonicalBlockID = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("./types.js");
var timestamp_js_1 = require("../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.types";
function createBaseCanonicalBlockID() {
    return { hash: new Uint8Array(), partSetHeader: undefined };
}
exports.CanonicalBlockID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            exports.CanonicalPartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCanonicalBlockID();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.partSetHeader = exports.CanonicalPartSetHeader.decode(reader, reader.uint32());
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
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
            partSetHeader: isSet(object.partSetHeader)
                ? exports.CanonicalPartSetHeader.fromJSON(object.partSetHeader)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.partSetHeader !== undefined &&
            (obj.partSetHeader = message.partSetHeader
                ? exports.CanonicalPartSetHeader.toJSON(message.partSetHeader)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCanonicalBlockID();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.partSetHeader =
            object.partSetHeader !== undefined && object.partSetHeader !== null
                ? exports.CanonicalPartSetHeader.fromPartial(object.partSetHeader)
                : undefined;
        return message;
    },
};
function createBaseCanonicalPartSetHeader() {
    return { total: 0, hash: new Uint8Array() };
}
exports.CanonicalPartSetHeader = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCanonicalPartSetHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            total: isSet(object.total) ? Number(object.total) : 0,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCanonicalPartSetHeader();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : 0;
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseCanonicalProposal() {
    return {
        type: 0,
        height: long_1.default.ZERO,
        round: long_1.default.ZERO,
        polRound: long_1.default.ZERO,
        blockId: undefined,
        timestamp: undefined,
        chainId: "",
    };
}
exports.CanonicalProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(17).sfixed64(message.height);
        }
        if (!message.round.isZero()) {
            writer.uint32(25).sfixed64(message.round);
        }
        if (!message.polRound.isZero()) {
            writer.uint32(32).int64(message.polRound);
        }
        if (message.blockId !== undefined) {
            exports.CanonicalBlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(58).string(message.chainId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCanonicalProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.sfixed64();
                    break;
                case 3:
                    message.round = reader.sfixed64();
                    break;
                case 4:
                    message.polRound = reader.int64();
                    break;
                case 5:
                    message.blockId = exports.CanonicalBlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.chainId = reader.string();
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
            type: isSet(object.type) ? types_js_1.signedMsgTypeFromJSON(object.type) : 0,
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
            round: isSet(object.round) ? long_1.default.fromValue(object.round) : long_1.default.ZERO,
            polRound: isSet(object.polRound)
                ? long_1.default.fromValue(object.polRound)
                : long_1.default.ZERO,
            blockId: isSet(object.blockId)
                ? exports.CanonicalBlockID.fromJSON(object.blockId)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined &&
            (obj.type = types_js_1.signedMsgTypeToJSON(message.type));
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined &&
            (obj.round = (message.round || long_1.default.ZERO).toString());
        message.polRound !== undefined &&
            (obj.polRound = (message.polRound || long_1.default.ZERO).toString());
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? exports.CanonicalBlockID.toJSON(message.blockId)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCanonicalProposal();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round =
            object.round !== undefined && object.round !== null
                ? long_1.default.fromValue(object.round)
                : long_1.default.ZERO;
        message.polRound =
            object.polRound !== undefined && object.polRound !== null
                ? long_1.default.fromValue(object.polRound)
                : long_1.default.ZERO;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? exports.CanonicalBlockID.fromPartial(object.blockId)
                : undefined;
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        message.chainId = (_c = object.chainId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCanonicalVote() {
    return {
        type: 0,
        height: long_1.default.ZERO,
        round: long_1.default.ZERO,
        blockId: undefined,
        timestamp: undefined,
        chainId: "",
    };
}
exports.CanonicalVote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(17).sfixed64(message.height);
        }
        if (!message.round.isZero()) {
            writer.uint32(25).sfixed64(message.round);
        }
        if (message.blockId !== undefined) {
            exports.CanonicalBlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(50).string(message.chainId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCanonicalVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.sfixed64();
                    break;
                case 3:
                    message.round = reader.sfixed64();
                    break;
                case 4:
                    message.blockId = exports.CanonicalBlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.chainId = reader.string();
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
            type: isSet(object.type) ? types_js_1.signedMsgTypeFromJSON(object.type) : 0,
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
            round: isSet(object.round) ? long_1.default.fromValue(object.round) : long_1.default.ZERO,
            blockId: isSet(object.blockId)
                ? exports.CanonicalBlockID.fromJSON(object.blockId)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined &&
            (obj.type = types_js_1.signedMsgTypeToJSON(message.type));
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined &&
            (obj.round = (message.round || long_1.default.ZERO).toString());
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? exports.CanonicalBlockID.toJSON(message.blockId)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCanonicalVote();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round =
            object.round !== undefined && object.round !== null
                ? long_1.default.fromValue(object.round)
                : long_1.default.ZERO;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? exports.CanonicalBlockID.fromPartial(object.blockId)
                : undefined;
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        message.chainId = (_c = object.chainId) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=canonical.js.map