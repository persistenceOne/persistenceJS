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
exports.ServiceClientImpl = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var pagination_js_1 = require("../../query/v1beta1/pagination.js");
var any_js_1 = require("../../../../google/protobuf/any.js");
var types_js_1 = require("../../../../tendermint/types/types.js");
var block_js_1 = require("../../../../tendermint/types/block.js");
var types_js_2 = require("../../../../tendermint/p2p/types.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return { height: long_1.default.ZERO, pagination: undefined };
}
exports.GetValidatorSetByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
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
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetValidatorSetByHeightRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetValidatorSetByHeightResponse() {
    return { blockHeight: long_1.default.ZERO, validators: [], pagination: undefined };
}
exports.GetValidatorSetByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
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
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
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
            blockHeight: isSet(object.blockHeight)
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockHeight !== undefined &&
            (obj.blockHeight = (message.blockHeight || long_1.default.ZERO).toString());
        if (message.validators) {
            obj.validators = message.validators.map(function (e) {
                return e ? exports.Validator.toJSON(e) : undefined;
            });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO;
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetRequest() {
    return { pagination: undefined };
}
exports.GetLatestValidatorSetRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestValidatorSetRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetLatestValidatorSetRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetResponse() {
    return { blockHeight: long_1.default.ZERO, validators: [], pagination: undefined };
}
exports.GetLatestValidatorSetResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.blockHeight.isZero()) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
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
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
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
            blockHeight: isSet(object.blockHeight)
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockHeight !== undefined &&
            (obj.blockHeight = (message.blockHeight || long_1.default.ZERO).toString());
        if (message.validators) {
            obj.validators = message.validators.map(function (e) {
                return e ? exports.Validator.toJSON(e) : undefined;
            });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight =
            object.blockHeight !== undefined && object.blockHeight !== null
                ? long_1.default.fromValue(object.blockHeight)
                : long_1.default.ZERO;
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseValidator() {
    return {
        address: "",
        pubKey: undefined,
        votingPower: long_1.default.ZERO,
        proposerPriority: long_1.default.ZERO,
    };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_js_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.votingPower.isZero()) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (!message.proposerPriority.isZero()) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode: function (input, length) {
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
                    message.pubKey = any_js_1.Any.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            pubKey: isSet(object.pubKey) ? any_js_1.Any.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower)
                ? long_1.default.fromValue(object.votingPower)
                : long_1.default.ZERO,
            proposerPriority: isSet(object.proposerPriority)
                ? long_1.default.fromValue(object.proposerPriority)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey ? any_js_1.Any.toJSON(message.pubKey) : undefined);
        message.votingPower !== undefined &&
            (obj.votingPower = (message.votingPower || long_1.default.ZERO).toString());
        message.proposerPriority !== undefined &&
            (obj.proposerPriority = (message.proposerPriority || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? any_js_1.Any.fromPartial(object.pubKey)
                : undefined;
        message.votingPower =
            object.votingPower !== undefined && object.votingPower !== null
                ? long_1.default.fromValue(object.votingPower)
                : long_1.default.ZERO;
        message.proposerPriority =
            object.proposerPriority !== undefined && object.proposerPriority !== null
                ? long_1.default.fromValue(object.proposerPriority)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseGetBlockByHeightRequest() {
    return { height: long_1.default.ZERO };
}
exports.GetBlockByHeightRequest = {
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
        var message = createBaseGetBlockByHeightRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseGetBlockByHeightResponse() {
    return { blockId: undefined, block: undefined };
}
exports.GetBlockByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.blockId !== undefined) {
            types_js_1.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_js_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = types_js_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
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
            blockId: isSet(object.blockId)
                ? types_js_1.BlockID.fromJSON(object.blockId)
                : undefined,
            block: isSet(object.block) ? block_js_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? types_js_1.BlockID.toJSON(message.blockId)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_js_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetBlockByHeightResponse();
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? types_js_1.BlockID.fromPartial(object.blockId)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? block_js_1.Block.fromPartial(object.block)
                : undefined;
        return message;
    },
};
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
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
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseGetLatestBlockRequest();
        return message;
    },
};
function createBaseGetLatestBlockResponse() {
    return { blockId: undefined, block: undefined };
}
exports.GetLatestBlockResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.blockId !== undefined) {
            types_js_1.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_js_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = types_js_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
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
            blockId: isSet(object.blockId)
                ? types_js_1.BlockID.fromJSON(object.blockId)
                : undefined,
            block: isSet(object.block) ? block_js_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? types_js_1.BlockID.toJSON(message.blockId)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_js_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetLatestBlockResponse();
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? types_js_1.BlockID.fromPartial(object.blockId)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? block_js_1.Block.fromPartial(object.block)
                : undefined;
        return message;
    },
};
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
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
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseGetSyncingRequest();
        return message;
    },
};
function createBaseGetSyncingResponse() {
    return { syncing: false };
}
exports.GetSyncingResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode: function (input, length) {
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
    fromJSON: function (object) {
        return {
            syncing: isSet(object.syncing) ? Boolean(object.syncing) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetSyncingResponse();
        message.syncing = (_a = object.syncing) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
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
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseGetNodeInfoRequest();
        return message;
    },
};
function createBaseGetNodeInfoResponse() {
    return { defaultNodeInfo: undefined, applicationVersion: undefined };
}
exports.GetNodeInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.defaultNodeInfo !== undefined) {
            types_js_2.DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            exports.VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultNodeInfo = types_js_2.DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.applicationVersion = exports.VersionInfo.decode(reader, reader.uint32());
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
            defaultNodeInfo: isSet(object.defaultNodeInfo)
                ? types_js_2.DefaultNodeInfo.fromJSON(object.defaultNodeInfo)
                : undefined,
            applicationVersion: isSet(object.applicationVersion)
                ? exports.VersionInfo.fromJSON(object.applicationVersion)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.defaultNodeInfo !== undefined &&
            (obj.defaultNodeInfo = message.defaultNodeInfo
                ? types_js_2.DefaultNodeInfo.toJSON(message.defaultNodeInfo)
                : undefined);
        message.applicationVersion !== undefined &&
            (obj.applicationVersion = message.applicationVersion
                ? exports.VersionInfo.toJSON(message.applicationVersion)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetNodeInfoResponse();
        message.defaultNodeInfo =
            object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null
                ? types_js_2.DefaultNodeInfo.fromPartial(object.defaultNodeInfo)
                : undefined;
        message.applicationVersion =
            object.applicationVersion !== undefined &&
                object.applicationVersion !== null
                ? exports.VersionInfo.fromPartial(object.applicationVersion)
                : undefined;
        return message;
    },
};
function createBaseVersionInfo() {
    return {
        name: "",
        appName: "",
        version: "",
        gitCommit: "",
        buildTags: "",
        goVersion: "",
        buildDeps: [],
        cosmosSdkVersion: "",
    };
}
exports.VersionInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
        for (var _i = 0, _a = message.buildDeps; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== "") {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    decode: function (input, length) {
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
                    message.buildDeps.push(exports.Module.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            appName: isSet(object.appName) ? String(object.appName) : "",
            version: isSet(object.version) ? String(object.version) : "",
            gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
            buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
            goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
            buildDeps: Array.isArray(object === null || object === void 0 ? void 0 : object.buildDeps)
                ? object.buildDeps.map(function (e) { return exports.Module.fromJSON(e); })
                : [],
            cosmosSdkVersion: isSet(object.cosmosSdkVersion)
                ? String(object.cosmosSdkVersion)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.appName !== undefined && (obj.appName = message.appName);
        message.version !== undefined && (obj.version = message.version);
        message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
        message.buildTags !== undefined && (obj.buildTags = message.buildTags);
        message.goVersion !== undefined && (obj.goVersion = message.goVersion);
        if (message.buildDeps) {
            obj.buildDeps = message.buildDeps.map(function (e) {
                return e ? exports.Module.toJSON(e) : undefined;
            });
        }
        else {
            obj.buildDeps = [];
        }
        message.cosmosSdkVersion !== undefined &&
            (obj.cosmosSdkVersion = message.cosmosSdkVersion);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseVersionInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.appName = (_b = object.appName) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.gitCommit = (_d = object.gitCommit) !== null && _d !== void 0 ? _d : "";
        message.buildTags = (_e = object.buildTags) !== null && _e !== void 0 ? _e : "";
        message.goVersion = (_f = object.goVersion) !== null && _f !== void 0 ? _f : "";
        message.buildDeps =
            ((_g = object.buildDeps) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.Module.fromPartial(e); })) || [];
        message.cosmosSdkVersion = (_h = object.cosmosSdkVersion) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseModule() {
    return { path: "", version: "", sum: "" };
}
exports.Module = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
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
    fromJSON: function (object) {
        return {
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseModule();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.sum = (_c = object.sum) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.GetNodeInfo = this.GetNodeInfo.bind(this);
        this.GetSyncing = this.GetSyncing.bind(this);
        this.GetLatestBlock = this.GetLatestBlock.bind(this);
        this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
        this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
        this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
    }
    ServiceClientImpl.prototype.GetNodeInfo = function (request) {
        var data = exports.GetNodeInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then(function (data) {
            return exports.GetNodeInfoResponse.decode(new _m0.Reader(data));
        });
    };
    ServiceClientImpl.prototype.GetSyncing = function (request) {
        var data = exports.GetSyncingRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then(function (data) {
            return exports.GetSyncingResponse.decode(new _m0.Reader(data));
        });
    };
    ServiceClientImpl.prototype.GetLatestBlock = function (request) {
        var data = exports.GetLatestBlockRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then(function (data) {
            return exports.GetLatestBlockResponse.decode(new _m0.Reader(data));
        });
    };
    ServiceClientImpl.prototype.GetBlockByHeight = function (request) {
        var data = exports.GetBlockByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then(function (data) {
            return exports.GetBlockByHeightResponse.decode(new _m0.Reader(data));
        });
    };
    ServiceClientImpl.prototype.GetLatestValidatorSet = function (request) {
        var data = exports.GetLatestValidatorSetRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then(function (data) {
            return exports.GetLatestValidatorSetResponse.decode(new _m0.Reader(data));
        });
    };
    ServiceClientImpl.prototype.GetValidatorSetByHeight = function (request) {
        var data = exports.GetValidatorSetByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then(function (data) {
            return exports.GetValidatorSetByHeightResponse.decode(new _m0.Reader(data));
        });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map