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
exports.NextSequenceRecvData = exports.PacketReceiptAbsenceData = exports.PacketAcknowledgementData = exports.PacketCommitmentData = exports.ChannelStateData = exports.ConnectionStateData = exports.ConsensusStateData = exports.ClientStateData = exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.dataTypeToJSON = exports.dataTypeFromJSON = exports.DataType = exports.protobufPackage = void 0;
/* eslint-disable */
var any_js_1 = require("../../../../google/protobuf/any.js");
var connection_js_1 = require("../../../core/connection/v1/connection.js");
var channel_js_1 = require("../../../core/channel/v1/channel.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType = exports.DataType || (exports.DataType = {}));
function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
exports.dataTypeFromJSON = dataTypeFromJSON;
function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        case DataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.dataTypeToJSON = dataTypeToJSON;
function createBaseClientState() {
    return {
        sequence: long_1.default.UZERO,
        isFrozen: false,
        consensusState: undefined,
        allowUpdateAfterProposal: false,
    };
}
exports.ClientState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.isFrozen === true) {
            writer.uint32(16).bool(message.isFrozen);
        }
        if (message.consensusState !== undefined) {
            exports.ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.allowUpdateAfterProposal === true) {
            writer.uint32(32).bool(message.allowUpdateAfterProposal);
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
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.isFrozen = reader.bool();
                    break;
                case 3:
                    message.consensusState = exports.ConsensusState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.allowUpdateAfterProposal = reader.bool();
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
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
            isFrozen: isSet(object.isFrozen) ? Boolean(object.isFrozen) : false,
            consensusState: isSet(object.consensusState)
                ? exports.ConsensusState.fromJSON(object.consensusState)
                : undefined,
            allowUpdateAfterProposal: isSet(object.allowUpdateAfterProposal)
                ? Boolean(object.allowUpdateAfterProposal)
                : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.isFrozen !== undefined && (obj.isFrozen = message.isFrozen);
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState
                ? exports.ConsensusState.toJSON(message.consensusState)
                : undefined);
        message.allowUpdateAfterProposal !== undefined &&
            (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseClientState();
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.isFrozen = (_a = object.isFrozen) !== null && _a !== void 0 ? _a : false;
        message.consensusState =
            object.consensusState !== undefined && object.consensusState !== null
                ? exports.ConsensusState.fromPartial(object.consensusState)
                : undefined;
        message.allowUpdateAfterProposal = (_b = object.allowUpdateAfterProposal) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseConsensusState() {
    return { publicKey: undefined, diversifier: "", timestamp: long_1.default.UZERO };
}
exports.ConsensusState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publicKey !== undefined) {
            any_js_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(24).uint64(message.timestamp);
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
                    message.publicKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diversifier = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
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
            publicKey: isSet(object.publicKey)
                ? any_js_1.Any.fromJSON(object.publicKey)
                : undefined,
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            timestamp: isSet(object.timestamp)
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.publicKey !== undefined &&
            (obj.publicKey = message.publicKey
                ? any_js_1.Any.toJSON(message.publicKey)
                : undefined);
        message.diversifier !== undefined &&
            (obj.diversifier = message.diversifier);
        message.timestamp !== undefined &&
            (obj.timestamp = (message.timestamp || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConsensusState();
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? any_js_1.Any.fromPartial(object.publicKey)
                : undefined;
        message.diversifier = (_a = object.diversifier) !== null && _a !== void 0 ? _a : "";
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseHeader() {
    return {
        sequence: long_1.default.UZERO,
        timestamp: long_1.default.UZERO,
        signature: new Uint8Array(),
        newPublicKey: undefined,
        newDiversifier: "",
    };
}
exports.Header = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.newPublicKey !== undefined) {
            any_js_1.Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(42).string(message.newDiversifier);
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
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.newPublicKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.newDiversifier = reader.string();
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
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
            timestamp: isSet(object.timestamp)
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO,
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
            newPublicKey: isSet(object.newPublicKey)
                ? any_js_1.Any.fromJSON(object.newPublicKey)
                : undefined,
            newDiversifier: isSet(object.newDiversifier)
                ? String(object.newDiversifier)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.timestamp !== undefined &&
            (obj.timestamp = (message.timestamp || long_1.default.UZERO).toString());
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.newPublicKey !== undefined &&
            (obj.newPublicKey = message.newPublicKey
                ? any_js_1.Any.toJSON(message.newPublicKey)
                : undefined);
        message.newDiversifier !== undefined &&
            (obj.newDiversifier = message.newDiversifier);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseHeader();
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO;
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.newPublicKey =
            object.newPublicKey !== undefined && object.newPublicKey !== null
                ? any_js_1.Any.fromPartial(object.newPublicKey)
                : undefined;
        message.newDiversifier = (_b = object.newDiversifier) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        sequence: long_1.default.UZERO,
        signatureOne: undefined,
        signatureTwo: undefined,
    };
}
exports.Misbehaviour = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signatureOne !== undefined) {
            exports.SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
        }
        if (message.signatureTwo !== undefined) {
            exports.SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
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
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.signatureOne = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatureTwo = exports.SignatureAndData.decode(reader, reader.uint32());
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
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
            signatureOne: isSet(object.signatureOne)
                ? exports.SignatureAndData.fromJSON(object.signatureOne)
                : undefined,
            signatureTwo: isSet(object.signatureTwo)
                ? exports.SignatureAndData.fromJSON(object.signatureTwo)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.signatureOne !== undefined &&
            (obj.signatureOne = message.signatureOne
                ? exports.SignatureAndData.toJSON(message.signatureOne)
                : undefined);
        message.signatureTwo !== undefined &&
            (obj.signatureTwo = message.signatureTwo
                ? exports.SignatureAndData.toJSON(message.signatureTwo)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMisbehaviour();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.signatureOne =
            object.signatureOne !== undefined && object.signatureOne !== null
                ? exports.SignatureAndData.fromPartial(object.signatureOne)
                : undefined;
        message.signatureTwo =
            object.signatureTwo !== undefined && object.signatureTwo !== null
                ? exports.SignatureAndData.fromPartial(object.signatureTwo)
                : undefined;
        return message;
    },
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        dataType: 0,
        data: new Uint8Array(),
        timestamp: long_1.default.UZERO,
    };
}
exports.SignatureAndData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.dataType !== 0) {
            writer.uint32(16).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureAndData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.dataType = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
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
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
            dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
            timestamp: isSet(object.timestamp)
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.dataType !== undefined &&
            (obj.dataType = dataTypeToJSON(message.dataType));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined &&
            (obj.timestamp = (message.timestamp || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSignatureAndData();
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.dataType = (_b = object.dataType) !== null && _b !== void 0 ? _b : 0;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseTimestampedSignatureData() {
    return { signatureData: new Uint8Array(), timestamp: long_1.default.UZERO };
}
exports.TimestampedSignatureData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signatureData.length !== 0) {
            writer.uint32(10).bytes(message.signatureData);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimestampedSignatureData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureData = reader.bytes();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
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
            signatureData: isSet(object.signatureData)
                ? bytesFromBase64(object.signatureData)
                : new Uint8Array(),
            timestamp: isSet(object.timestamp)
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signatureData !== undefined &&
            (obj.signatureData = base64FromBytes(message.signatureData !== undefined
                ? message.signatureData
                : new Uint8Array()));
        message.timestamp !== undefined &&
            (obj.timestamp = (message.timestamp || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTimestampedSignatureData();
        message.signatureData = (_a = object.signatureData) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseSignBytes() {
    return {
        sequence: long_1.default.UZERO,
        timestamp: long_1.default.UZERO,
        diversifier: "",
        dataType: 0,
        data: new Uint8Array(),
    };
}
exports.SignBytes = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.dataType !== 0) {
            writer.uint32(32).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignBytes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.diversifier = reader.string();
                    break;
                case 4:
                    message.dataType = reader.int32();
                    break;
                case 5:
                    message.data = reader.bytes();
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
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
            timestamp: isSet(object.timestamp)
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO,
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        message.timestamp !== undefined &&
            (obj.timestamp = (message.timestamp || long_1.default.UZERO).toString());
        message.diversifier !== undefined &&
            (obj.diversifier = message.diversifier);
        message.dataType !== undefined &&
            (obj.dataType = dataTypeToJSON(message.dataType));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSignBytes();
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? long_1.default.fromValue(object.timestamp)
                : long_1.default.UZERO;
        message.diversifier = (_a = object.diversifier) !== null && _a !== void 0 ? _a : "";
        message.dataType = (_b = object.dataType) !== null && _b !== void 0 ? _b : 0;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseHeaderData() {
    return { newPubKey: undefined, newDiversifier: "" };
}
exports.HeaderData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.newPubKey !== undefined) {
            any_js_1.Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(18).string(message.newDiversifier);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHeaderData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPubKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.newDiversifier = reader.string();
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
            newPubKey: isSet(object.newPubKey)
                ? any_js_1.Any.fromJSON(object.newPubKey)
                : undefined,
            newDiversifier: isSet(object.newDiversifier)
                ? String(object.newDiversifier)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.newPubKey !== undefined &&
            (obj.newPubKey = message.newPubKey
                ? any_js_1.Any.toJSON(message.newPubKey)
                : undefined);
        message.newDiversifier !== undefined &&
            (obj.newDiversifier = message.newDiversifier);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseHeaderData();
        message.newPubKey =
            object.newPubKey !== undefined && object.newPubKey !== null
                ? any_js_1.Any.fromPartial(object.newPubKey)
                : undefined;
        message.newDiversifier = (_a = object.newDiversifier) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseClientStateData() {
    return { path: new Uint8Array(), clientState: undefined };
}
exports.ClientStateData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.clientState !== undefined) {
            any_js_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClientStateData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.clientState = any_js_1.Any.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            clientState: isSet(object.clientState)
                ? any_js_1.Any.fromJSON(object.clientState)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.clientState !== undefined &&
            (obj.clientState = message.clientState
                ? any_js_1.Any.toJSON(message.clientState)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseClientStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.clientState =
            object.clientState !== undefined && object.clientState !== null
                ? any_js_1.Any.fromPartial(object.clientState)
                : undefined;
        return message;
    },
};
function createBaseConsensusStateData() {
    return { path: new Uint8Array(), consensusState: undefined };
}
exports.ConsensusStateData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensusState !== undefined) {
            any_js_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusStateData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.consensusState = any_js_1.Any.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            consensusState: isSet(object.consensusState)
                ? any_js_1.Any.fromJSON(object.consensusState)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState
                ? any_js_1.Any.toJSON(message.consensusState)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConsensusStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.consensusState =
            object.consensusState !== undefined && object.consensusState !== null
                ? any_js_1.Any.fromPartial(object.consensusState)
                : undefined;
        return message;
    },
};
function createBaseConnectionStateData() {
    return { path: new Uint8Array(), connection: undefined };
}
exports.ConnectionStateData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            connection_js_1.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConnectionStateData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.connection = connection_js_1.ConnectionEnd.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            connection: isSet(object.connection)
                ? connection_js_1.ConnectionEnd.fromJSON(object.connection)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? connection_js_1.ConnectionEnd.toJSON(message.connection)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConnectionStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? connection_js_1.ConnectionEnd.fromPartial(object.connection)
                : undefined;
        return message;
    },
};
function createBaseChannelStateData() {
    return { path: new Uint8Array(), channel: undefined };
}
exports.ChannelStateData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            channel_js_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChannelStateData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.channel = channel_js_1.Channel.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            channel: isSet(object.channel)
                ? channel_js_1.Channel.fromJSON(object.channel)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_js_1.Channel.toJSON(message.channel)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseChannelStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_js_1.Channel.fromPartial(object.channel)
                : undefined;
        return message;
    },
};
function createBasePacketCommitmentData() {
    return { path: new Uint8Array(), commitment: new Uint8Array() };
}
exports.PacketCommitmentData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketCommitmentData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.commitment = reader.bytes();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            commitment: isSet(object.commitment)
                ? bytesFromBase64(object.commitment)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.commitment !== undefined &&
            (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePacketCommitmentData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.commitment = (_b = object.commitment) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBasePacketAcknowledgementData() {
    return { path: new Uint8Array(), acknowledgement: new Uint8Array() };
}
exports.PacketAcknowledgementData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketAcknowledgementData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            acknowledgement: isSet(object.acknowledgement)
                ? bytesFromBase64(object.acknowledgement)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined
                ? message.acknowledgement
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePacketAcknowledgementData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.acknowledgement = (_b = object.acknowledgement) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBasePacketReceiptAbsenceData() {
    return { path: new Uint8Array() };
}
exports.PacketReceiptAbsenceData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketReceiptAbsenceData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePacketReceiptAbsenceData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseNextSequenceRecvData() {
    return { path: new Uint8Array(), nextSeqRecv: long_1.default.UZERO };
}
exports.NextSequenceRecvData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (!message.nextSeqRecv.isZero()) {
            writer.uint32(16).uint64(message.nextSeqRecv);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNextSequenceRecvData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.nextSeqRecv = reader.uint64();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            nextSeqRecv: isSet(object.nextSeqRecv)
                ? long_1.default.fromValue(object.nextSeqRecv)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.nextSeqRecv !== undefined &&
            (obj.nextSeqRecv = (message.nextSeqRecv || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseNextSequenceRecvData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.nextSeqRecv =
            object.nextSeqRecv !== undefined && object.nextSeqRecv !== null
                ? long_1.default.fromValue(object.nextSeqRecv)
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=solomachine.js.map