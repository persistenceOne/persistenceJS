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
exports.Message = exports.PingResponse = exports.PingRequest = exports.SignedProposalResponse = exports.SignProposalRequest = exports.SignedVoteResponse = exports.SignVoteRequest = exports.PubKeyResponse = exports.PubKeyRequest = exports.RemoteSignerError = exports.errorsToJSON = exports.errorsFromJSON = exports.Errors = exports.protobufPackage = void 0;
/* eslint-disable */
var keys_js_1 = require("../crypto/keys.js");
var types_js_1 = require("../types/types.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.privval";
var Errors;
(function (Errors) {
    Errors[Errors["ERRORS_UNKNOWN"] = 0] = "ERRORS_UNKNOWN";
    Errors[Errors["ERRORS_UNEXPECTED_RESPONSE"] = 1] = "ERRORS_UNEXPECTED_RESPONSE";
    Errors[Errors["ERRORS_NO_CONNECTION"] = 2] = "ERRORS_NO_CONNECTION";
    Errors[Errors["ERRORS_CONNECTION_TIMEOUT"] = 3] = "ERRORS_CONNECTION_TIMEOUT";
    Errors[Errors["ERRORS_READ_TIMEOUT"] = 4] = "ERRORS_READ_TIMEOUT";
    Errors[Errors["ERRORS_WRITE_TIMEOUT"] = 5] = "ERRORS_WRITE_TIMEOUT";
    Errors[Errors["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Errors = exports.Errors || (exports.Errors = {}));
function errorsFromJSON(object) {
    switch (object) {
        case 0:
        case "ERRORS_UNKNOWN":
            return Errors.ERRORS_UNKNOWN;
        case 1:
        case "ERRORS_UNEXPECTED_RESPONSE":
            return Errors.ERRORS_UNEXPECTED_RESPONSE;
        case 2:
        case "ERRORS_NO_CONNECTION":
            return Errors.ERRORS_NO_CONNECTION;
        case 3:
        case "ERRORS_CONNECTION_TIMEOUT":
            return Errors.ERRORS_CONNECTION_TIMEOUT;
        case 4:
        case "ERRORS_READ_TIMEOUT":
            return Errors.ERRORS_READ_TIMEOUT;
        case 5:
        case "ERRORS_WRITE_TIMEOUT":
            return Errors.ERRORS_WRITE_TIMEOUT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Errors.UNRECOGNIZED;
    }
}
exports.errorsFromJSON = errorsFromJSON;
function errorsToJSON(object) {
    switch (object) {
        case Errors.ERRORS_UNKNOWN:
            return "ERRORS_UNKNOWN";
        case Errors.ERRORS_UNEXPECTED_RESPONSE:
            return "ERRORS_UNEXPECTED_RESPONSE";
        case Errors.ERRORS_NO_CONNECTION:
            return "ERRORS_NO_CONNECTION";
        case Errors.ERRORS_CONNECTION_TIMEOUT:
            return "ERRORS_CONNECTION_TIMEOUT";
        case Errors.ERRORS_READ_TIMEOUT:
            return "ERRORS_READ_TIMEOUT";
        case Errors.ERRORS_WRITE_TIMEOUT:
            return "ERRORS_WRITE_TIMEOUT";
        case Errors.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.errorsToJSON = errorsToJSON;
function createBaseRemoteSignerError() {
    return { code: 0, description: "" };
}
exports.RemoteSignerError = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRemoteSignerError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.description = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRemoteSignerError();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePubKeyRequest() {
    return { chainId: "" };
}
exports.PubKeyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePubKeyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePubKeyRequest();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePubKeyResponse() {
    return { pubKey: undefined, error: undefined };
}
exports.PubKeyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pubKey !== undefined) {
            keys_js_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePubKeyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_js_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            pubKey: isSet(object.pubKey)
                ? keys_js_1.PublicKey.fromJSON(object.pubKey)
                : undefined,
            error: isSet(object.error)
                ? exports.RemoteSignerError.fromJSON(object.error)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey
                ? keys_js_1.PublicKey.toJSON(message.pubKey)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? exports.RemoteSignerError.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBasePubKeyResponse();
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? keys_js_1.PublicKey.fromPartial(object.pubKey)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? exports.RemoteSignerError.fromPartial(object.error)
                : undefined;
        return message;
    },
};
function createBaseSignVoteRequest() {
    return { vote: undefined, chainId: "" };
}
exports.SignVoteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vote !== undefined) {
            types_js_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignVoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_js_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
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
            vote: isSet(object.vote) ? types_js_1.Vote.fromJSON(object.vote) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? types_js_1.Vote.toJSON(message.vote) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSignVoteRequest();
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? types_js_1.Vote.fromPartial(object.vote)
                : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedVoteResponse() {
    return { vote: undefined, error: undefined };
}
exports.SignedVoteResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vote !== undefined) {
            types_js_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignedVoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_js_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? types_js_1.Vote.fromJSON(object.vote) : undefined,
            error: isSet(object.error)
                ? exports.RemoteSignerError.fromJSON(object.error)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? types_js_1.Vote.toJSON(message.vote) : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? exports.RemoteSignerError.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSignedVoteResponse();
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? types_js_1.Vote.fromPartial(object.vote)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? exports.RemoteSignerError.fromPartial(object.error)
                : undefined;
        return message;
    },
};
function createBaseSignProposalRequest() {
    return { proposal: undefined, chainId: "" };
}
exports.SignProposalRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            types_js_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignProposalRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_js_1.Proposal.decode(reader, reader.uint32());
                    break;
                case 2:
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
            proposal: isSet(object.proposal)
                ? types_js_1.Proposal.fromJSON(object.proposal)
                : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? types_js_1.Proposal.toJSON(message.proposal)
                : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSignProposalRequest();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? types_js_1.Proposal.fromPartial(object.proposal)
                : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedProposalResponse() {
    return { proposal: undefined, error: undefined };
}
exports.SignedProposalResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            types_js_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignedProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_js_1.Proposal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal)
                ? types_js_1.Proposal.fromJSON(object.proposal)
                : undefined,
            error: isSet(object.error)
                ? exports.RemoteSignerError.fromJSON(object.error)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? types_js_1.Proposal.toJSON(message.proposal)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? exports.RemoteSignerError.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSignedProposalResponse();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? types_js_1.Proposal.fromPartial(object.proposal)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? exports.RemoteSignerError.fromPartial(object.error)
                : undefined;
        return message;
    },
};
function createBasePingRequest() {
    return {};
}
exports.PingRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePingRequest();
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
        var message = createBasePingRequest();
        return message;
    },
};
function createBasePingResponse() {
    return {};
}
exports.PingResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePingResponse();
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
        var message = createBasePingResponse();
        return message;
    },
};
function createBaseMessage() {
    return {
        pubKeyRequest: undefined,
        pubKeyResponse: undefined,
        signVoteRequest: undefined,
        signedVoteResponse: undefined,
        signProposalRequest: undefined,
        signedProposalResponse: undefined,
        pingRequest: undefined,
        pingResponse: undefined,
    };
}
exports.Message = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pubKeyRequest !== undefined) {
            exports.PubKeyRequest.encode(message.pubKeyRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.pubKeyResponse !== undefined) {
            exports.PubKeyResponse.encode(message.pubKeyResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.signVoteRequest !== undefined) {
            exports.SignVoteRequest.encode(message.signVoteRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.signedVoteResponse !== undefined) {
            exports.SignedVoteResponse.encode(message.signedVoteResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.signProposalRequest !== undefined) {
            exports.SignProposalRequest.encode(message.signProposalRequest, writer.uint32(42).fork()).ldelim();
        }
        if (message.signedProposalResponse !== undefined) {
            exports.SignedProposalResponse.encode(message.signedProposalResponse, writer.uint32(50).fork()).ldelim();
        }
        if (message.pingRequest !== undefined) {
            exports.PingRequest.encode(message.pingRequest, writer.uint32(58).fork()).ldelim();
        }
        if (message.pingResponse !== undefined) {
            exports.PingResponse.encode(message.pingResponse, writer.uint32(66).fork()).ldelim();
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
                    message.pubKeyRequest = exports.PubKeyRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pubKeyResponse = exports.PubKeyResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signVoteRequest = exports.SignVoteRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signedVoteResponse = exports.SignedVoteResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signProposalRequest = exports.SignProposalRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.signedProposalResponse = exports.SignedProposalResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.pingRequest = exports.PingRequest.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.pingResponse = exports.PingResponse.decode(reader, reader.uint32());
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
            pubKeyRequest: isSet(object.pubKeyRequest)
                ? exports.PubKeyRequest.fromJSON(object.pubKeyRequest)
                : undefined,
            pubKeyResponse: isSet(object.pubKeyResponse)
                ? exports.PubKeyResponse.fromJSON(object.pubKeyResponse)
                : undefined,
            signVoteRequest: isSet(object.signVoteRequest)
                ? exports.SignVoteRequest.fromJSON(object.signVoteRequest)
                : undefined,
            signedVoteResponse: isSet(object.signedVoteResponse)
                ? exports.SignedVoteResponse.fromJSON(object.signedVoteResponse)
                : undefined,
            signProposalRequest: isSet(object.signProposalRequest)
                ? exports.SignProposalRequest.fromJSON(object.signProposalRequest)
                : undefined,
            signedProposalResponse: isSet(object.signedProposalResponse)
                ? exports.SignedProposalResponse.fromJSON(object.signedProposalResponse)
                : undefined,
            pingRequest: isSet(object.pingRequest)
                ? exports.PingRequest.fromJSON(object.pingRequest)
                : undefined,
            pingResponse: isSet(object.pingResponse)
                ? exports.PingResponse.fromJSON(object.pingResponse)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pubKeyRequest !== undefined &&
            (obj.pubKeyRequest = message.pubKeyRequest
                ? exports.PubKeyRequest.toJSON(message.pubKeyRequest)
                : undefined);
        message.pubKeyResponse !== undefined &&
            (obj.pubKeyResponse = message.pubKeyResponse
                ? exports.PubKeyResponse.toJSON(message.pubKeyResponse)
                : undefined);
        message.signVoteRequest !== undefined &&
            (obj.signVoteRequest = message.signVoteRequest
                ? exports.SignVoteRequest.toJSON(message.signVoteRequest)
                : undefined);
        message.signedVoteResponse !== undefined &&
            (obj.signedVoteResponse = message.signedVoteResponse
                ? exports.SignedVoteResponse.toJSON(message.signedVoteResponse)
                : undefined);
        message.signProposalRequest !== undefined &&
            (obj.signProposalRequest = message.signProposalRequest
                ? exports.SignProposalRequest.toJSON(message.signProposalRequest)
                : undefined);
        message.signedProposalResponse !== undefined &&
            (obj.signedProposalResponse = message.signedProposalResponse
                ? exports.SignedProposalResponse.toJSON(message.signedProposalResponse)
                : undefined);
        message.pingRequest !== undefined &&
            (obj.pingRequest = message.pingRequest
                ? exports.PingRequest.toJSON(message.pingRequest)
                : undefined);
        message.pingResponse !== undefined &&
            (obj.pingResponse = message.pingResponse
                ? exports.PingResponse.toJSON(message.pingResponse)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseMessage();
        message.pubKeyRequest =
            object.pubKeyRequest !== undefined && object.pubKeyRequest !== null
                ? exports.PubKeyRequest.fromPartial(object.pubKeyRequest)
                : undefined;
        message.pubKeyResponse =
            object.pubKeyResponse !== undefined && object.pubKeyResponse !== null
                ? exports.PubKeyResponse.fromPartial(object.pubKeyResponse)
                : undefined;
        message.signVoteRequest =
            object.signVoteRequest !== undefined && object.signVoteRequest !== null
                ? exports.SignVoteRequest.fromPartial(object.signVoteRequest)
                : undefined;
        message.signedVoteResponse =
            object.signedVoteResponse !== undefined &&
                object.signedVoteResponse !== null
                ? exports.SignedVoteResponse.fromPartial(object.signedVoteResponse)
                : undefined;
        message.signProposalRequest =
            object.signProposalRequest !== undefined &&
                object.signProposalRequest !== null
                ? exports.SignProposalRequest.fromPartial(object.signProposalRequest)
                : undefined;
        message.signedProposalResponse =
            object.signedProposalResponse !== undefined &&
                object.signedProposalResponse !== null
                ? exports.SignedProposalResponse.fromPartial(object.signedProposalResponse)
                : undefined;
        message.pingRequest =
            object.pingRequest !== undefined && object.pingRequest !== null
                ? exports.PingRequest.fromPartial(object.pingRequest)
                : undefined;
        message.pingResponse =
            object.pingResponse !== undefined && object.pingResponse !== null
                ? exports.PingResponse.fromPartial(object.pingResponse)
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