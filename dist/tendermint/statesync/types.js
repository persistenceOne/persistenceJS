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
exports.ChunkResponse = exports.ChunkRequest = exports.SnapshotsResponse = exports.SnapshotsRequest = exports.Message = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.statesync";
function createBaseMessage() {
    return {
        snapshotsRequest: undefined,
        snapshotsResponse: undefined,
        chunkRequest: undefined,
        chunkResponse: undefined,
    };
}
exports.Message = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.snapshotsRequest !== undefined) {
            exports.SnapshotsRequest.encode(message.snapshotsRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.snapshotsResponse !== undefined) {
            exports.SnapshotsResponse.encode(message.snapshotsResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.chunkRequest !== undefined) {
            exports.ChunkRequest.encode(message.chunkRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.chunkResponse !== undefined) {
            exports.ChunkResponse.encode(message.chunkResponse, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotsRequest = exports.SnapshotsRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.snapshotsResponse = exports.SnapshotsResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chunkRequest = exports.ChunkRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.chunkResponse = exports.ChunkResponse.decode(reader, reader.uint32());
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
            snapshotsRequest: isSet(object.snapshotsRequest)
                ? exports.SnapshotsRequest.fromJSON(object.snapshotsRequest)
                : undefined,
            snapshotsResponse: isSet(object.snapshotsResponse)
                ? exports.SnapshotsResponse.fromJSON(object.snapshotsResponse)
                : undefined,
            chunkRequest: isSet(object.chunkRequest)
                ? exports.ChunkRequest.fromJSON(object.chunkRequest)
                : undefined,
            chunkResponse: isSet(object.chunkResponse)
                ? exports.ChunkResponse.fromJSON(object.chunkResponse)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.snapshotsRequest !== undefined &&
            (obj.snapshotsRequest = message.snapshotsRequest
                ? exports.SnapshotsRequest.toJSON(message.snapshotsRequest)
                : undefined);
        message.snapshotsResponse !== undefined &&
            (obj.snapshotsResponse = message.snapshotsResponse
                ? exports.SnapshotsResponse.toJSON(message.snapshotsResponse)
                : undefined);
        message.chunkRequest !== undefined &&
            (obj.chunkRequest = message.chunkRequest
                ? exports.ChunkRequest.toJSON(message.chunkRequest)
                : undefined);
        message.chunkResponse !== undefined &&
            (obj.chunkResponse = message.chunkResponse
                ? exports.ChunkResponse.toJSON(message.chunkResponse)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseMessage();
        message.snapshotsRequest =
            object.snapshotsRequest !== undefined && object.snapshotsRequest !== null
                ? exports.SnapshotsRequest.fromPartial(object.snapshotsRequest)
                : undefined;
        message.snapshotsResponse =
            object.snapshotsResponse !== undefined &&
                object.snapshotsResponse !== null
                ? exports.SnapshotsResponse.fromPartial(object.snapshotsResponse)
                : undefined;
        message.chunkRequest =
            object.chunkRequest !== undefined && object.chunkRequest !== null
                ? exports.ChunkRequest.fromPartial(object.chunkRequest)
                : undefined;
        message.chunkResponse =
            object.chunkResponse !== undefined && object.chunkResponse !== null
                ? exports.ChunkResponse.fromPartial(object.chunkResponse)
                : undefined;
        return message;
    },
};
function createBaseSnapshotsRequest() {
    return {};
}
exports.SnapshotsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotsRequest();
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
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseSnapshotsRequest();
        return message;
    },
};
function createBaseSnapshotsResponse() {
    return {
        height: long_1.default.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array(),
    };
}
exports.SnapshotsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotsResponse();
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
    fromJSON: function (object) {
        return {
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
            metadata: isSet(object.metadata)
                ? bytesFromBase64(object.metadata)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSnapshotsResponse();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.UZERO;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.chunks = (_b = object.chunks) !== null && _b !== void 0 ? _b : 0;
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseChunkRequest() {
    return { height: long_1.default.UZERO, format: 0, index: 0 };
}
exports.ChunkRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.index !== 0) {
            writer.uint32(24).uint32(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChunkRequest();
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
                    message.index = reader.uint32();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
            format: isSet(object.format) ? Number(object.format) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseChunkRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.UZERO;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseChunkResponse() {
    return {
        height: long_1.default.UZERO,
        format: 0,
        index: 0,
        chunk: new Uint8Array(),
        missing: false,
    };
}
exports.ChunkResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.index !== 0) {
            writer.uint32(24).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(34).bytes(message.chunk);
        }
        if (message.missing === true) {
            writer.uint32(40).bool(message.missing);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChunkResponse();
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
                    message.index = reader.uint32();
                    break;
                case 4:
                    message.chunk = reader.bytes();
                    break;
                case 5:
                    message.missing = reader.bool();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
            format: isSet(object.format) ? Number(object.format) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
            chunk: isSet(object.chunk)
                ? bytesFromBase64(object.chunk)
                : new Uint8Array(),
            missing: isSet(object.missing) ? Boolean(object.missing) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.missing !== undefined && (obj.missing = message.missing);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseChunkResponse();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.UZERO;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : 0;
        message.chunk = (_c = object.chunk) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.missing = (_d = object.missing) !== null && _d !== void 0 ? _d : false;
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map