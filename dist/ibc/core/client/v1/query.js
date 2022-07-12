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
exports.QueryClientImpl = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var any_js_1 = require("../../../../google/protobuf/any.js");
var client_js_1 = require("./client.js");
var pagination_js_1 = require("../../../../cosmos/base/query/v1beta1/pagination.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.core.client.v1";
function createBaseQueryClientStateRequest() {
    return { clientId: "" };
}
exports.QueryClientStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClientStateRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientStateResponse() {
    return {
        clientState: undefined,
        proof: new Uint8Array(),
        proofHeight: undefined,
    };
}
exports.QueryClientStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientState !== undefined) {
            any_js_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientState = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
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
            clientState: isSet(object.clientState)
                ? any_js_1.Any.fromJSON(object.clientState)
                : undefined,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientState !== undefined &&
            (obj.clientState = message.clientState
                ? any_js_1.Any.toJSON(message.clientState)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClientStateResponse();
        message.clientState =
            object.clientState !== undefined && object.clientState !== null
                ? any_js_1.Any.fromPartial(object.clientState)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        return message;
    },
};
function createBaseQueryClientStatesRequest() {
    return { pagination: undefined };
}
exports.QueryClientStatesRequest = {
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
        var message = createBaseQueryClientStatesRequest();
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
        var message = createBaseQueryClientStatesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryClientStatesResponse() {
    return { clientStates: [], pagination: undefined };
}
exports.QueryClientStatesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.clientStates; _i < _a.length; _i++) {
            var v = _a[_i];
            client_js_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientStates.push(client_js_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
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
            clientStates: Array.isArray(object === null || object === void 0 ? void 0 : object.clientStates)
                ? object.clientStates.map(function (e) { return client_js_1.IdentifiedClientState.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.clientStates) {
            obj.clientStates = message.clientStates.map(function (e) {
                return e ? client_js_1.IdentifiedClientState.toJSON(e) : undefined;
            });
        }
        else {
            obj.clientStates = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClientStatesResponse();
        message.clientStates =
            ((_a = object.clientStates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return client_js_1.IdentifiedClientState.fromPartial(e); })) ||
                [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateRequest() {
    return {
        clientId: "",
        revisionNumber: long_1.default.UZERO,
        revisionHeight: long_1.default.UZERO,
        latestHeight: false,
    };
}
exports.QueryConsensusStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.revisionNumber.isZero()) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (!message.revisionHeight.isZero()) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
                    break;
                case 4:
                    message.latestHeight = reader.bool();
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
            revisionNumber: isSet(object.revisionNumber)
                ? long_1.default.fromValue(object.revisionNumber)
                : long_1.default.UZERO,
            revisionHeight: isSet(object.revisionHeight)
                ? long_1.default.fromValue(object.revisionHeight)
                : long_1.default.UZERO,
            latestHeight: isSet(object.latestHeight)
                ? Boolean(object.latestHeight)
                : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.revisionNumber !== undefined &&
            (obj.revisionNumber = (message.revisionNumber || long_1.default.UZERO).toString());
        message.revisionHeight !== undefined &&
            (obj.revisionHeight = (message.revisionHeight || long_1.default.UZERO).toString());
        message.latestHeight !== undefined &&
            (obj.latestHeight = message.latestHeight);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryConsensusStateRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.revisionNumber =
            object.revisionNumber !== undefined && object.revisionNumber !== null
                ? long_1.default.fromValue(object.revisionNumber)
                : long_1.default.UZERO;
        message.revisionHeight =
            object.revisionHeight !== undefined && object.revisionHeight !== null
                ? long_1.default.fromValue(object.revisionHeight)
                : long_1.default.UZERO;
        message.latestHeight = (_b = object.latestHeight) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseQueryConsensusStateResponse() {
    return {
        consensusState: undefined,
        proof: new Uint8Array(),
        proofHeight: undefined,
    };
}
exports.QueryConsensusStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.consensusState !== undefined) {
            any_js_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState)
                ? any_js_1.Any.fromJSON(object.consensusState)
                : undefined,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState
                ? any_js_1.Any.toJSON(message.consensusState)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryConsensusStateResponse();
        message.consensusState =
            object.consensusState !== undefined && object.consensusState !== null
                ? any_js_1.Any.fromPartial(object.consensusState)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        return message;
    },
};
function createBaseQueryConsensusStatesRequest() {
    return { clientId: "", pagination: undefined };
}
exports.QueryConsensusStatesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryConsensusStatesRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryConsensusStatesResponse() {
    return { consensusStates: [], pagination: undefined };
}
exports.QueryConsensusStatesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.consensusStates; _i < _a.length; _i++) {
            var v = _a[_i];
            client_js_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusStates.push(client_js_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
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
            consensusStates: Array.isArray(object === null || object === void 0 ? void 0 : object.consensusStates)
                ? object.consensusStates.map(function (e) {
                    return client_js_1.ConsensusStateWithHeight.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.consensusStates) {
            obj.consensusStates = message.consensusStates.map(function (e) {
                return e ? client_js_1.ConsensusStateWithHeight.toJSON(e) : undefined;
            });
        }
        else {
            obj.consensusStates = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryConsensusStatesResponse();
        message.consensusStates =
            ((_a = object.consensusStates) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return client_js_1.ConsensusStateWithHeight.fromPartial(e);
            })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryClientStatusRequest() {
    return { clientId: "" };
}
exports.QueryClientStatusRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatusRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClientStatusRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientStatusResponse() {
    return { status: "" };
}
exports.QueryClientStatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClientStatusResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientParamsRequest() {
    return {};
}
exports.QueryClientParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientParamsRequest();
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
        var message = createBaseQueryClientParamsRequest();
        return message;
    },
};
function createBaseQueryClientParamsResponse() {
    return { params: undefined };
}
exports.QueryClientParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            client_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClientParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_js_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? client_js_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? client_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryClientParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? client_js_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
exports.QueryUpgradedClientStateRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedClientStateRequest();
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
        var message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
};
function createBaseQueryUpgradedClientStateResponse() {
    return { upgradedClientState: undefined };
}
exports.QueryUpgradedClientStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.upgradedClientState !== undefined) {
            any_js_1.Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedClientState = any_js_1.Any.decode(reader, reader.uint32());
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
            upgradedClientState: isSet(object.upgradedClientState)
                ? any_js_1.Any.fromJSON(object.upgradedClientState)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.upgradedClientState !== undefined &&
            (obj.upgradedClientState = message.upgradedClientState
                ? any_js_1.Any.toJSON(message.upgradedClientState)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState =
            object.upgradedClientState !== undefined &&
                object.upgradedClientState !== null
                ? any_js_1.Any.fromPartial(object.upgradedClientState)
                : undefined;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
exports.QueryUpgradedConsensusStateRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedConsensusStateRequest();
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
        var message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return { upgradedConsensusState: undefined };
}
exports.QueryUpgradedConsensusStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.upgradedConsensusState !== undefined) {
            any_js_1.Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedConsensusState = any_js_1.Any.decode(reader, reader.uint32());
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
            upgradedConsensusState: isSet(object.upgradedConsensusState)
                ? any_js_1.Any.fromJSON(object.upgradedConsensusState)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.upgradedConsensusState !== undefined &&
            (obj.upgradedConsensusState = message.upgradedConsensusState
                ? any_js_1.Any.toJSON(message.upgradedConsensusState)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState =
            object.upgradedConsensusState !== undefined &&
                object.upgradedConsensusState !== null
                ? any_js_1.Any.fromPartial(object.upgradedConsensusState)
                : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.ClientState = this.ClientState.bind(this);
        this.ClientStates = this.ClientStates.bind(this);
        this.ConsensusState = this.ConsensusState.bind(this);
        this.ConsensusStates = this.ConsensusStates.bind(this);
        this.ClientStatus = this.ClientStatus.bind(this);
        this.ClientParams = this.ClientParams.bind(this);
        this.UpgradedClientState = this.UpgradedClientState.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    }
    QueryClientImpl.prototype.ClientState = function (request) {
        var data = exports.QueryClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then(function (data) {
            return exports.QueryClientStateResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ClientStates = function (request) {
        var data = exports.QueryClientStatesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then(function (data) {
            return exports.QueryClientStatesResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ConsensusState = function (request) {
        var data = exports.QueryConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then(function (data) {
            return exports.QueryConsensusStateResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ConsensusStates = function (request) {
        var data = exports.QueryConsensusStatesRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then(function (data) {
            return exports.QueryConsensusStatesResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ClientStatus = function (request) {
        var data = exports.QueryClientStatusRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then(function (data) {
            return exports.QueryClientStatusResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ClientParams = function (request) {
        var data = exports.QueryClientParamsRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then(function (data) {
            return exports.QueryClientParamsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.UpgradedClientState = function (request) {
        var data = exports.QueryUpgradedClientStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then(function (data) {
            return exports.QueryUpgradedClientStateResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.UpgradedConsensusState = function (request) {
        var data = exports.QueryUpgradedConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then(function (data) {
            return exports.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map