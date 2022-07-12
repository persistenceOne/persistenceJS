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
exports.MsgClientImpl = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.responseResultTypeToJSON = exports.responseResultTypeFromJSON = exports.ResponseResultType = exports.protobufPackage = void 0;
/* eslint-disable */
var channel_js_1 = require("./channel.js");
var client_js_1 = require("../../client/v1/client.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_UNSPECIFIED";
    /** RESPONSE_RESULT_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_NOOP"] = 1] = "RESPONSE_RESULT_NOOP";
    /** RESPONSE_RESULT_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_SUCCESS"] = 2] = "RESPONSE_RESULT_SUCCESS";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType = exports.ResponseResultType || (exports.ResponseResultType = {}));
function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_NOOP":
            return ResponseResultType.RESPONSE_RESULT_NOOP;
        case 2:
        case "RESPONSE_RESULT_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_SUCCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
exports.responseResultTypeFromJSON = responseResultTypeFromJSON;
function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_UNSPECIFIED:
            return "RESPONSE_RESULT_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_NOOP:
            return "RESPONSE_RESULT_NOOP";
        case ResponseResultType.RESPONSE_RESULT_SUCCESS:
            return "RESPONSE_RESULT_SUCCESS";
        case ResponseResultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseResultTypeToJSON = responseResultTypeToJSON;
function createBaseMsgChannelOpenInit() {
    return { portId: "", channel: undefined, signer: "" };
}
exports.MsgChannelOpenInit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channel !== undefined) {
            channel_js_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channel = channel_js_1.Channel.decode(reader, reader.uint32());
                    break;
                case 3:
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channel: isSet(object.channel)
                ? channel_js_1.Channel.fromJSON(object.channel)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_js_1.Channel.toJSON(message.channel)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgChannelOpenInit();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_js_1.Channel.fromPartial(object.channel)
                : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgChannelOpenInitResponse() {
    return { channelId: "" };
}
exports.MsgChannelOpenInitResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenInitResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgChannelOpenInitResponse();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgChannelOpenTry() {
    return {
        portId: "",
        previousChannelId: "",
        channel: undefined,
        counterpartyVersion: "",
        proofInit: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenTry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.previousChannelId !== "") {
            writer.uint32(18).string(message.previousChannelId);
        }
        if (message.channel !== undefined) {
            channel_js_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(42).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenTry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.previousChannelId = reader.string();
                    break;
                case 3:
                    message.channel = channel_js_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterpartyVersion = reader.string();
                    break;
                case 5:
                    message.proofInit = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            previousChannelId: isSet(object.previousChannelId)
                ? String(object.previousChannelId)
                : "",
            channel: isSet(object.channel)
                ? channel_js_1.Channel.fromJSON(object.channel)
                : undefined,
            counterpartyVersion: isSet(object.counterpartyVersion)
                ? String(object.counterpartyVersion)
                : "",
            proofInit: isSet(object.proofInit)
                ? bytesFromBase64(object.proofInit)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.previousChannelId !== undefined &&
            (obj.previousChannelId = message.previousChannelId);
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_js_1.Channel.toJSON(message.channel)
                : undefined);
        message.counterpartyVersion !== undefined &&
            (obj.counterpartyVersion = message.counterpartyVersion);
        message.proofInit !== undefined &&
            (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgChannelOpenTry();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.previousChannelId = (_b = object.previousChannelId) !== null && _b !== void 0 ? _b : "";
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_js_1.Channel.fromPartial(object.channel)
                : undefined;
        message.counterpartyVersion = (_c = object.counterpartyVersion) !== null && _c !== void 0 ? _c : "";
        message.proofInit = (_d = object.proofInit) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_e = object.signer) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgChannelOpenTryResponse() {
    return {};
}
exports.MsgChannelOpenTryResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenTryResponse();
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
        var message = createBaseMsgChannelOpenTryResponse();
        return message;
    },
};
function createBaseMsgChannelOpenAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelId: "",
        counterpartyVersion: "",
        proofTry: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenAck = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelId !== "") {
            writer.uint32(26).string(message.counterpartyChannelId);
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(42).bytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyChannelId = reader.string();
                    break;
                case 4:
                    message.counterpartyVersion = reader.string();
                    break;
                case 5:
                    message.proofTry = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            counterpartyChannelId: isSet(object.counterpartyChannelId)
                ? String(object.counterpartyChannelId)
                : "",
            counterpartyVersion: isSet(object.counterpartyVersion)
                ? String(object.counterpartyVersion)
                : "",
            proofTry: isSet(object.proofTry)
                ? bytesFromBase64(object.proofTry)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.counterpartyChannelId !== undefined &&
            (obj.counterpartyChannelId = message.counterpartyChannelId);
        message.counterpartyVersion !== undefined &&
            (obj.counterpartyVersion = message.counterpartyVersion);
        message.proofTry !== undefined &&
            (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMsgChannelOpenAck();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.counterpartyChannelId = (_c = object.counterpartyChannelId) !== null && _c !== void 0 ? _c : "";
        message.counterpartyVersion = (_d = object.counterpartyVersion) !== null && _d !== void 0 ? _d : "";
        message.proofTry = (_e = object.proofTry) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_f = object.signer) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenAckResponse();
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
        var message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
};
function createBaseMsgChannelOpenConfirm() {
    return {
        portId: "",
        channelId: "",
        proofAck: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenConfirm = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(26).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenConfirm();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proofAck = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
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
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
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
        var _a, _b, _c, _d;
        var message = createBaseMsgChannelOpenConfirm();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.proofAck = (_c = object.proofAck) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelOpenConfirmResponse();
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
        var message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
};
function createBaseMsgChannelCloseInit() {
    return { portId: "", channelId: "", signer: "" };
}
exports.MsgChannelCloseInit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelCloseInit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgChannelCloseInit();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelCloseInitResponse();
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
        var message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
};
function createBaseMsgChannelCloseConfirm() {
    return {
        portId: "",
        channelId: "",
        proofInit: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelCloseConfirm = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(26).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelCloseConfirm();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proofInit = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            proofInit: isSet(object.proofInit)
                ? bytesFromBase64(object.proofInit)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.proofInit !== undefined &&
            (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgChannelCloseConfirm();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.proofInit = (_c = object.proofInit) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgChannelCloseConfirmResponse();
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
        var message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
};
function createBaseMsgRecvPacket() {
    return {
        packet: undefined,
        proofCommitment: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgRecvPacket = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.packet !== undefined) {
            channel_js_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofCommitment.length !== 0) {
            writer.uint32(18).bytes(message.proofCommitment);
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
        var message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_js_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofCommitment = reader.bytes();
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
            packet: isSet(object.packet) ? channel_js_1.Packet.fromJSON(object.packet) : undefined,
            proofCommitment: isSet(object.proofCommitment)
                ? bytesFromBase64(object.proofCommitment)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_js_1.Packet.toJSON(message.packet) : undefined);
        message.proofCommitment !== undefined &&
            (obj.proofCommitment = base64FromBytes(message.proofCommitment !== undefined
                ? message.proofCommitment
                : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgRecvPacket();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_js_1.Packet.fromPartial(object.packet)
                : undefined;
        message.proofCommitment = (_a = object.proofCommitment) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRecvPacketResponse() {
    return { result: 0 };
}
exports.MsgRecvPacketResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRecvPacketResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgRecvPacketResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgTimeout() {
    return {
        packet: undefined,
        proofUnreceived: new Uint8Array(),
        proofHeight: undefined,
        nextSequenceRecv: long_1.default.UZERO,
        signer: "",
    };
}
exports.MsgTimeout = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.packet !== undefined) {
            channel_js_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (!message.nextSequenceRecv.isZero()) {
            writer.uint32(32).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTimeout();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_js_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofUnreceived = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nextSequenceRecv = reader.uint64();
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
            packet: isSet(object.packet) ? channel_js_1.Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived)
                ? bytesFromBase64(object.proofUnreceived)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv)
                ? long_1.default.fromValue(object.nextSequenceRecv)
                : long_1.default.UZERO,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_js_1.Packet.toJSON(message.packet) : undefined);
        message.proofUnreceived !== undefined &&
            (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined
                ? message.proofUnreceived
                : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.nextSequenceRecv !== undefined &&
            (obj.nextSequenceRecv = (message.nextSequenceRecv || long_1.default.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgTimeout();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_js_1.Packet.fromPartial(object.packet)
                : undefined;
        message.proofUnreceived = (_a = object.proofUnreceived) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.nextSequenceRecv =
            object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
                ? long_1.default.fromValue(object.nextSequenceRecv)
                : long_1.default.UZERO;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgTimeoutResponse() {
    return { result: 0 };
}
exports.MsgTimeoutResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTimeoutResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgTimeoutResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: undefined,
        proofUnreceived: new Uint8Array(),
        proofClose: new Uint8Array(),
        proofHeight: undefined,
        nextSequenceRecv: long_1.default.UZERO,
        signer: "",
    };
}
exports.MsgTimeoutOnClose = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.packet !== undefined) {
            channel_js_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            writer.uint32(26).bytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (!message.nextSequenceRecv.isZero()) {
            writer.uint32(40).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_js_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofUnreceived = reader.bytes();
                    break;
                case 3:
                    message.proofClose = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.nextSequenceRecv = reader.uint64();
                    break;
                case 6:
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
            packet: isSet(object.packet) ? channel_js_1.Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived)
                ? bytesFromBase64(object.proofUnreceived)
                : new Uint8Array(),
            proofClose: isSet(object.proofClose)
                ? bytesFromBase64(object.proofClose)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv)
                ? long_1.default.fromValue(object.nextSequenceRecv)
                : long_1.default.UZERO,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_js_1.Packet.toJSON(message.packet) : undefined);
        message.proofUnreceived !== undefined &&
            (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined
                ? message.proofUnreceived
                : new Uint8Array()));
        message.proofClose !== undefined &&
            (obj.proofClose = base64FromBytes(message.proofClose !== undefined ? message.proofClose : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.nextSequenceRecv !== undefined &&
            (obj.nextSequenceRecv = (message.nextSequenceRecv || long_1.default.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgTimeoutOnClose();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_js_1.Packet.fromPartial(object.packet)
                : undefined;
        message.proofUnreceived = (_a = object.proofUnreceived) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofClose = (_b = object.proofClose) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.nextSequenceRecv =
            object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
                ? long_1.default.fromValue(object.nextSequenceRecv)
                : long_1.default.UZERO;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgTimeoutOnCloseResponse() {
    return { result: 0 };
}
exports.MsgTimeoutOnCloseResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgTimeoutOnCloseResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgTimeoutOnCloseResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgAcknowledgement() {
    return {
        packet: undefined,
        acknowledgement: new Uint8Array(),
        proofAcked: new Uint8Array(),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgAcknowledgement = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.packet !== undefined) {
            channel_js_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            writer.uint32(26).bytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            client_js_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_js_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proofAcked = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_js_1.Height.decode(reader, reader.uint32());
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
            packet: isSet(object.packet) ? channel_js_1.Packet.fromJSON(object.packet) : undefined,
            acknowledgement: isSet(object.acknowledgement)
                ? bytesFromBase64(object.acknowledgement)
                : new Uint8Array(),
            proofAcked: isSet(object.proofAcked)
                ? bytesFromBase64(object.proofAcked)
                : new Uint8Array(),
            proofHeight: isSet(object.proofHeight)
                ? client_js_1.Height.fromJSON(object.proofHeight)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_js_1.Packet.toJSON(message.packet) : undefined);
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined
                ? message.acknowledgement
                : new Uint8Array()));
        message.proofAcked !== undefined &&
            (obj.proofAcked = base64FromBytes(message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight
                ? client_js_1.Height.toJSON(message.proofHeight)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgAcknowledgement();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_js_1.Packet.fromPartial(object.packet)
                : undefined;
        message.acknowledgement = (_a = object.acknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofAcked = (_b = object.proofAcked) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight =
            object.proofHeight !== undefined && object.proofHeight !== null
                ? client_js_1.Height.fromPartial(object.proofHeight)
                : undefined;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgAcknowledgementResponse() {
    return { result: 0 };
}
exports.MsgAcknowledgementResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgAcknowledgementResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgAcknowledgementResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
        this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
        this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
        this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
        this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
        this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
        this.RecvPacket = this.RecvPacket.bind(this);
        this.Timeout = this.Timeout.bind(this);
        this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
        this.Acknowledgement = this.Acknowledgement.bind(this);
    }
    MsgClientImpl.prototype.ChannelOpenInit = function (request) {
        var data = exports.MsgChannelOpenInit.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
        return promise.then(function (data) {
            return exports.MsgChannelOpenInitResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ChannelOpenTry = function (request) {
        var data = exports.MsgChannelOpenTry.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
        return promise.then(function (data) {
            return exports.MsgChannelOpenTryResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ChannelOpenAck = function (request) {
        var data = exports.MsgChannelOpenAck.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
        return promise.then(function (data) {
            return exports.MsgChannelOpenAckResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ChannelOpenConfirm = function (request) {
        var data = exports.MsgChannelOpenConfirm.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
        return promise.then(function (data) {
            return exports.MsgChannelOpenConfirmResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ChannelCloseInit = function (request) {
        var data = exports.MsgChannelCloseInit.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
        return promise.then(function (data) {
            return exports.MsgChannelCloseInitResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ChannelCloseConfirm = function (request) {
        var data = exports.MsgChannelCloseConfirm.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
        return promise.then(function (data) {
            return exports.MsgChannelCloseConfirmResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.RecvPacket = function (request) {
        var data = exports.MsgRecvPacket.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
        return promise.then(function (data) {
            return exports.MsgRecvPacketResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.Timeout = function (request) {
        var data = exports.MsgTimeout.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
        return promise.then(function (data) {
            return exports.MsgTimeoutResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.TimeoutOnClose = function (request) {
        var data = exports.MsgTimeoutOnClose.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
        return promise.then(function (data) {
            return exports.MsgTimeoutOnCloseResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.Acknowledgement = function (request) {
        var data = exports.MsgAcknowledgement.encode(request).finish();
        var promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
        return promise.then(function (data) {
            return exports.MsgAcknowledgementResponse.decode(new _m0.Reader(data));
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