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
exports.Message = exports.StatusResponse = exports.StatusRequest = exports.BlockResponse = exports.NoBlockResponse = exports.BlockRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var block_js_1 = require("../types/block.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.blockchain";
function createBaseBlockRequest() {
    return { height: long_1.default.ZERO };
}
exports.BlockRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockRequest();
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
    fromJSON: function (object) {
        return {
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBlockRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseNoBlockResponse() {
    return { height: long_1.default.ZERO };
}
exports.NoBlockResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNoBlockResponse();
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
    fromJSON: function (object) {
        return {
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseNoBlockResponse();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseBlockResponse() {
    return { block: undefined };
}
exports.BlockResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.block !== undefined) {
            block_js_1.Block.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = block_js_1.Block.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? block_js_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block !== undefined &&
            (obj.block = message.block ? block_js_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBlockResponse();
        message.block =
            object.block !== undefined && object.block !== null
                ? block_js_1.Block.fromPartial(object.block)
                : undefined;
        return message;
    },
};
function createBaseStatusRequest() {
    return {};
}
exports.StatusRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatusRequest();
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
        var message = createBaseStatusRequest();
        return message;
    },
};
function createBaseStatusResponse() {
    return { height: long_1.default.ZERO, base: long_1.default.ZERO };
}
exports.StatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (!message.base.isZero()) {
            writer.uint32(16).int64(message.base);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.base = reader.int64();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
            base: isSet(object.base) ? long_1.default.fromValue(object.base) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.base !== undefined &&
            (obj.base = (message.base || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseStatusResponse();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.base =
            object.base !== undefined && object.base !== null
                ? long_1.default.fromValue(object.base)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseMessage() {
    return {
        blockRequest: undefined,
        noBlockResponse: undefined,
        blockResponse: undefined,
        statusRequest: undefined,
        statusResponse: undefined,
    };
}
exports.Message = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.blockRequest !== undefined) {
            exports.BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.noBlockResponse !== undefined) {
            exports.NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockResponse !== undefined) {
            exports.BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
        }
        if (message.statusRequest !== undefined) {
            exports.StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
        }
        if (message.statusResponse !== undefined) {
            exports.StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
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
                    message.blockRequest = exports.BlockRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.noBlockResponse = exports.NoBlockResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockResponse = exports.BlockResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.statusRequest = exports.StatusRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.statusResponse = exports.StatusResponse.decode(reader, reader.uint32());
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
            blockRequest: isSet(object.blockRequest)
                ? exports.BlockRequest.fromJSON(object.blockRequest)
                : undefined,
            noBlockResponse: isSet(object.noBlockResponse)
                ? exports.NoBlockResponse.fromJSON(object.noBlockResponse)
                : undefined,
            blockResponse: isSet(object.blockResponse)
                ? exports.BlockResponse.fromJSON(object.blockResponse)
                : undefined,
            statusRequest: isSet(object.statusRequest)
                ? exports.StatusRequest.fromJSON(object.statusRequest)
                : undefined,
            statusResponse: isSet(object.statusResponse)
                ? exports.StatusResponse.fromJSON(object.statusResponse)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockRequest !== undefined &&
            (obj.blockRequest = message.blockRequest
                ? exports.BlockRequest.toJSON(message.blockRequest)
                : undefined);
        message.noBlockResponse !== undefined &&
            (obj.noBlockResponse = message.noBlockResponse
                ? exports.NoBlockResponse.toJSON(message.noBlockResponse)
                : undefined);
        message.blockResponse !== undefined &&
            (obj.blockResponse = message.blockResponse
                ? exports.BlockResponse.toJSON(message.blockResponse)
                : undefined);
        message.statusRequest !== undefined &&
            (obj.statusRequest = message.statusRequest
                ? exports.StatusRequest.toJSON(message.statusRequest)
                : undefined);
        message.statusResponse !== undefined &&
            (obj.statusResponse = message.statusResponse
                ? exports.StatusResponse.toJSON(message.statusResponse)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseMessage();
        message.blockRequest =
            object.blockRequest !== undefined && object.blockRequest !== null
                ? exports.BlockRequest.fromPartial(object.blockRequest)
                : undefined;
        message.noBlockResponse =
            object.noBlockResponse !== undefined && object.noBlockResponse !== null
                ? exports.NoBlockResponse.fromPartial(object.noBlockResponse)
                : undefined;
        message.blockResponse =
            object.blockResponse !== undefined && object.blockResponse !== null
                ? exports.BlockResponse.fromPartial(object.blockResponse)
                : undefined;
        message.statusRequest =
            object.statusRequest !== undefined && object.statusRequest !== null
                ? exports.StatusRequest.fromPartial(object.statusRequest)
                : undefined;
        message.statusResponse =
            object.statusResponse !== undefined && object.statusResponse !== null
                ? exports.StatusResponse.fromPartial(object.statusResponse)
                : undefined;
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
//# sourceMappingURL=types.js.map