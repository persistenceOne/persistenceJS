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
exports.MsgClientImpl = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = exports.protobufPackage = void 0;
/* eslint-disable */
var connection_js_1 = require("./connection.js");
var any_js_1 = require("../../../../google/protobuf/any.js");
var client_js_1 = require("../../client/v1/client.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseMsgConnectionOpenInit() {
    return {
        clientId: "",
        counterparty: undefined,
        version: undefined,
        delayPeriod: long_1.default.UZERO,
        signer: "",
    };
}
exports.MsgConnectionOpenInit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.counterparty !== undefined) {
            connection_js_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            connection_js_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (!message.delayPeriod.isZero()) {
            writer.uint32(32).uint64(message.delayPeriod);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.counterparty = connection_js_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = connection_js_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.delayPeriod = reader.uint64();
                    break;
                case 5:
                    message.signer = reader.string();
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
            counterparty: isSet(object.counterparty)
                ? connection_js_1.Counterparty.fromJSON(object.counterparty)
                : undefined,
            version: isSet(object.version)
                ? connection_js_1.Version.fromJSON(object.version)
                : undefined,
            delayPeriod: isSet(object.delayPeriod)
                ? long_1.default.fromValue(object.delayPeriod)
                : long_1.default.UZERO,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? connection_js_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? connection_js_1.Version.toJSON(message.version)
                : undefined);
        message.delayPeriod !== undefined &&
            (obj.delayPeriod = (message.delayPeriod || long_1.default.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgConnectionOpenInit();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? connection_js_1.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? connection_js_1.Version.fromPartial(object.version)
                : undefined;
        message.delayPeriod =
            object.delayPeriod !== undefined && object.delayPeriod !== null
                ? long_1.default.fromValue(object.delayPeriod)
                : long_1.default.UZERO;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
exports.MsgConnectionOpenInitResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenInitResponse();
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
        var message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenTry() {
    return {
        clientId: "",
        previousConnectionId: "",
        clientState: undefined,
        counterparty: undefined,
        delayPeriod: long_1.default.UZERO,
        counterpartyVersions: [],
        proofHeight: undefined,
        proofInit: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: undefined,
        signer: "",
    };
}
exports.MsgConnectionOpenTry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.previousConnectionId !== "") {
            writer.uint32(18).string(message.previousConnectionId);
        }
        if (message.clientState !== undefined) {
            any_js_1.Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            connection_js_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (!message.delayPeriod.isZero()) {
            writer.uint32(40).uint64(message.delayPeriod);
        }
        for (var _i = 0, _a = message.counterpartyVersions; _i < _a.length; _i++) {
            var v = _a[_i];
            connection_js_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(66).bytes(message.proofInit);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(74).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(82).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            client_js_1.Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenTry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.previousConnectionId = reader.string();
                    break;
                case 3:
                    message.clientState = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = connection_js_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delayPeriod = reader.uint64();
                    break;
                case 6:
                    message.counterpartyVersions.push(connection_js_1.Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proofInit = reader.bytes();
                    break;
                case 9:
                    message.proofClient = reader.bytes();
                    break;
                case 10:
                    message.proofConsensus = reader.bytes();
                    break;
                case 11:
                    message.consensusHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.signer = reader.string();
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
            previousConnectionId: isSet(object.previousConnectionId)
                ? String(object.previousConnectionId)
                : "",
            clientState: isSet(object.clientState)
                ? any_js_1.Any.fromJSON(object.clientState)
                : undefined,
            counterparty: isSet(object.counterparty)
                ? connection_js_1.Counterparty.fromJSON(object.counterparty)
                : undefined,
            delayPeriod: isSet(object.delayPeriod)
                ? long_1.default.fromValue(object.delayPeriod)
                : long_1.default.UZERO,
            counterpartyVersions: Array.isArray(object === null || object === void 0 ? void 0 : object.counterpartyVersions)
                ? object.counterpartyVersions.map(function (e) { return connection_js_1.Version.fromJSON(e); })
                : [],
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            proofInit: isSet(object.proofInit)
                ? bytesFromBase64(object.proofInit)
                : new Uint8Array(),
            proofClient: isSet(object.proofClient)
                ? bytesFromBase64(object.proofClient)
                : new Uint8Array(),
            proofConsensus: isSet(object.proofConsensus)
                ? bytesFromBase64(object.proofConsensus)
                : new Uint8Array(),
            consensusHeight: isSet(object.consensusHeight)
                ? client_js_1.Height.fromJSON(object.consensusHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.previousConnectionId !== undefined &&
            (obj.previousConnectionId = message.previousConnectionId);
        message.clientState !== undefined &&
            (obj.clientState = message.clientState
                ? any_js_1.Any.toJSON(message.clientState)
                : undefined);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? connection_js_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delayPeriod !== undefined &&
            (obj.delayPeriod = (message.delayPeriod || long_1.default.UZERO).toString());
        if (message.counterpartyVersions) {
            obj.counterpartyVersions = message.counterpartyVersions.map(function (e) {
                return e ? connection_js_1.Version.toJSON(e) : undefined;
            });
        }
        else {
            obj.counterpartyVersions = [];
        }
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.proofInit !== undefined &&
            (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
        message.proofClient !== undefined &&
            (obj.proofClient = base64FromBytes(message.proofClient !== undefined
                ? message.proofClient
                : new Uint8Array()));
        message.proofConsensus !== undefined &&
            (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined
                ? message.proofConsensus
                : new Uint8Array()));
        message.consensusHeight !== undefined &&
            (obj.consensusHeight = message.consensusHeight
                ? client_js_1.Height.toJSON(message.consensusHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseMsgConnectionOpenTry();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.previousConnectionId = (_b = object.previousConnectionId) !== null && _b !== void 0 ? _b : "";
        message.clientState =
            object.clientState !== undefined && object.clientState !== null
                ? any_js_1.Any.fromPartial(object.clientState)
                : undefined;
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? connection_js_1.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.delayPeriod =
            object.delayPeriod !== undefined && object.delayPeriod !== null
                ? long_1.default.fromValue(object.delayPeriod)
                : long_1.default.UZERO;
        message.counterpartyVersions =
            ((_c = object.counterpartyVersions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return connection_js_1.Version.fromPartial(e); })) || [];
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.proofInit = (_d = object.proofInit) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proofClient = (_e = object.proofClient) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proofConsensus = (_f = object.proofConsensus) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.consensusHeight =
            object.consensusHeight !== undefined && object.consensusHeight !== null
                ? client_js_1.Height.fromPartial(object.consensusHeight)
                : undefined;
        message.signer = (_g = object.signer) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
exports.MsgConnectionOpenTryResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenTryResponse();
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
        var message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenAck() {
    return {
        connectionId: "",
        counterpartyConnectionId: "",
        version: undefined,
        clientState: undefined,
        proofHeight: undefined,
        proofTry: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: undefined,
        signer: "",
    };
}
exports.MsgConnectionOpenAck = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.counterpartyConnectionId !== "") {
            writer.uint32(18).string(message.counterpartyConnectionId);
        }
        if (message.version !== undefined) {
            connection_js_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.clientState !== undefined) {
            any_js_1.Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(50).bytes(message.proofTry);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(58).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(66).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            client_js_1.Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.counterpartyConnectionId = reader.string();
                    break;
                case 3:
                    message.version = connection_js_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.clientState = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proofTry = reader.bytes();
                    break;
                case 7:
                    message.proofClient = reader.bytes();
                    break;
                case 8:
                    message.proofConsensus = reader.bytes();
                    break;
                case 9:
                    message.consensusHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.signer = reader.string();
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
            connectionId: isSet(object.connectionId)
                ? String(object.connectionId)
                : "",
            counterpartyConnectionId: isSet(object.counterpartyConnectionId)
                ? String(object.counterpartyConnectionId)
                : "",
            version: isSet(object.version)
                ? connection_js_1.Version.fromJSON(object.version)
                : undefined,
            clientState: isSet(object.clientState)
                ? any_js_1.Any.fromJSON(object.clientState)
                : undefined,
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            proofTry: isSet(object.proofTry)
                ? bytesFromBase64(object.proofTry)
                : new Uint8Array(),
            proofClient: isSet(object.proofClient)
                ? bytesFromBase64(object.proofClient)
                : new Uint8Array(),
            proofConsensus: isSet(object.proofConsensus)
                ? bytesFromBase64(object.proofConsensus)
                : new Uint8Array(),
            consensusHeight: isSet(object.consensusHeight)
                ? client_js_1.Height.fromJSON(object.consensusHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        message.counterpartyConnectionId !== undefined &&
            (obj.counterpartyConnectionId = message.counterpartyConnectionId);
        message.version !== undefined &&
            (obj.version = message.version
                ? connection_js_1.Version.toJSON(message.version)
                : undefined);
        message.clientState !== undefined &&
            (obj.clientState = message.clientState
                ? any_js_1.Any.toJSON(message.clientState)
                : undefined);
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.proofTry !== undefined &&
            (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
        message.proofClient !== undefined &&
            (obj.proofClient = base64FromBytes(message.proofClient !== undefined
                ? message.proofClient
                : new Uint8Array()));
        message.proofConsensus !== undefined &&
            (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined
                ? message.proofConsensus
                : new Uint8Array()));
        message.consensusHeight !== undefined &&
            (obj.consensusHeight = message.consensusHeight
                ? client_js_1.Height.toJSON(message.consensusHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMsgConnectionOpenAck();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.counterpartyConnectionId = (_b = object.counterpartyConnectionId) !== null && _b !== void 0 ? _b : "";
        message.version =
            object.version !== undefined && object.version !== null
                ? connection_js_1.Version.fromPartial(object.version)
                : undefined;
        message.clientState =
            object.clientState !== undefined && object.clientState !== null
                ? any_js_1.Any.fromPartial(object.clientState)
                : undefined;
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.proofTry = (_c = object.proofTry) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proofClient = (_d = object.proofClient) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proofConsensus = (_e = object.proofConsensus) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.consensusHeight =
            object.consensusHeight !== undefined && object.consensusHeight !== null
                ? client_js_1.Height.fromPartial(object.consensusHeight)
                : undefined;
        message.signer = (_f = object.signer) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
exports.MsgConnectionOpenAckResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenAckResponse();
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
        var message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenConfirm() {
    return {
        connectionId: "",
        proofAck: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgConnectionOpenConfirm = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(18).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenConfirm();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.proofAck = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
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
            connectionId: isSet(object.connectionId)
                ? String(object.connectionId)
                : "",
            proofAck: isSet(object.proofAck)
                ? bytesFromBase64(object.proofAck)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        message.proofAck !== undefined &&
            (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgConnectionOpenConfirm();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.proofAck = (_b = object.proofAck) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
exports.MsgConnectionOpenConfirmResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgConnectionOpenConfirmResponse();
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
        var message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this);
        this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this);
        this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this);
        this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this);
    }
    MsgClientImpl.prototype.ConnectionOpenInit = function (request) {
        var data = exports.MsgConnectionOpenInit.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
        return promise.then(function (data) {
            return exports.MsgConnectionOpenInitResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ConnectionOpenTry = function (request) {
        var data = exports.MsgConnectionOpenTry.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
        return promise.then(function (data) {
            return exports.MsgConnectionOpenTryResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ConnectionOpenAck = function (request) {
        var data = exports.MsgConnectionOpenAck.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
        return promise.then(function (data) {
            return exports.MsgConnectionOpenAckResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ConnectionOpenConfirm = function (request) {
        var data = exports.MsgConnectionOpenConfirm.encode(request).finish();
        var promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
        return promise.then(function (data) {
            return exports.MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data));
        });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map