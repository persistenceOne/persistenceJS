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
exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDoc = exports.TxRaw = exports.Tx = exports.protobufPackage = void 0;
/* eslint-disable */
var any_js_1 = require("../../../google/protobuf/any.js");
var signing_js_1 = require("../signing/v1beta1/signing.js");
var multisig_js_1 = require("../../crypto/multisig/v1beta1/multisig.js");
var long_1 = __importDefault(require("long"));
var coin_js_1 = require("../../base/v1beta1/coin.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.tx.v1beta1";
function createBaseTx() {
    return { body: undefined, authInfo: undefined, signatures: [] };
}
exports.Tx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.authInfo !== undefined) {
            exports.AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.authInfo = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body: isSet(object.body) ? exports.TxBody.fromJSON(object.body) : undefined,
            authInfo: isSet(object.authInfo)
                ? exports.AuthInfo.fromJSON(object.authInfo)
                : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map(function (e) { return bytesFromBase64(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.body !== undefined &&
            (obj.body = message.body ? exports.TxBody.toJSON(message.body) : undefined);
        message.authInfo !== undefined &&
            (obj.authInfo = message.authInfo
                ? exports.AuthInfo.toJSON(message.authInfo)
                : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) {
                return base64FromBytes(e !== undefined ? e : new Uint8Array());
            });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTx();
        message.body =
            object.body !== undefined && object.body !== null
                ? exports.TxBody.fromPartial(object.body)
                : undefined;
        message.authInfo =
            object.authInfo !== undefined && object.authInfo !== null
                ? exports.AuthInfo.fromPartial(object.authInfo)
                : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseTxRaw() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        signatures: [],
    };
}
exports.TxRaw = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxRaw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            bodyBytes: isSet(object.bodyBytes)
                ? bytesFromBase64(object.bodyBytes)
                : new Uint8Array(),
            authInfoBytes: isSet(object.authInfoBytes)
                ? bytesFromBase64(object.authInfoBytes)
                : new Uint8Array(),
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map(function (e) { return bytesFromBase64(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bodyBytes !== undefined &&
            (obj.bodyBytes = base64FromBytes(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
        message.authInfoBytes !== undefined &&
            (obj.authInfoBytes = base64FromBytes(message.authInfoBytes !== undefined
                ? message.authInfoBytes
                : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) {
                return base64FromBytes(e !== undefined ? e : new Uint8Array());
            });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseTxRaw();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.authInfoBytes = (_b = object.authInfoBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseSignDoc() {
    return {
        bodyBytes: new Uint8Array(),
        authInfoBytes: new Uint8Array(),
        chainId: "",
        accountNumber: long_1.default.UZERO,
    };
}
exports.SignDoc = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bodyBytes.length !== 0) {
            writer.uint32(10).bytes(message.bodyBytes);
        }
        if (message.authInfoBytes.length !== 0) {
            writer.uint32(18).bytes(message.authInfoBytes);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(32).uint64(message.accountNumber);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDoc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                case 4:
                    message.accountNumber = reader.uint64();
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
            bodyBytes: isSet(object.bodyBytes)
                ? bytesFromBase64(object.bodyBytes)
                : new Uint8Array(),
            authInfoBytes: isSet(object.authInfoBytes)
                ? bytesFromBase64(object.authInfoBytes)
                : new Uint8Array(),
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            accountNumber: isSet(object.accountNumber)
                ? long_1.default.fromValue(object.accountNumber)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bodyBytes !== undefined &&
            (obj.bodyBytes = base64FromBytes(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
        message.authInfoBytes !== undefined &&
            (obj.authInfoBytes = base64FromBytes(message.authInfoBytes !== undefined
                ? message.authInfoBytes
                : new Uint8Array()));
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.accountNumber !== undefined &&
            (obj.accountNumber = (message.accountNumber || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSignDoc();
        message.bodyBytes = (_a = object.bodyBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.authInfoBytes = (_b = object.authInfoBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.chainId = (_c = object.chainId) !== null && _c !== void 0 ? _c : "";
        message.accountNumber =
            object.accountNumber !== undefined && object.accountNumber !== null
                ? long_1.default.fromValue(object.accountNumber)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeoutHeight: long_1.default.UZERO,
        extensionOptions: [],
        nonCriticalExtensionOptions: [],
    };
}
exports.TxBody = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            any_js_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (!message.timeoutHeight.isZero()) {
            writer.uint32(24).uint64(message.timeoutHeight);
        }
        for (var _b = 0, _c = message.extensionOptions; _b < _c.length; _b++) {
            var v = _c[_b];
            any_js_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (var _d = 0, _e = message.nonCriticalExtensionOptions; _d < _e.length; _d++) {
            var v = _e[_d];
            any_js_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_js_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 1023:
                    message.extensionOptions.push(any_js_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.nonCriticalExtensionOptions.push(any_js_1.Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages)
                ? object.messages.map(function (e) { return any_js_1.Any.fromJSON(e); })
                : [],
            memo: isSet(object.memo) ? String(object.memo) : "",
            timeoutHeight: isSet(object.timeoutHeight)
                ? long_1.default.fromValue(object.timeoutHeight)
                : long_1.default.UZERO,
            extensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensionOptions)
                ? object.extensionOptions.map(function (e) { return any_js_1.Any.fromJSON(e); })
                : [],
            nonCriticalExtensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.nonCriticalExtensionOptions)
                ? object.nonCriticalExtensionOptions.map(function (e) { return any_js_1.Any.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function (e) {
                return e ? any_js_1.Any.toJSON(e) : undefined;
            });
        }
        else {
            obj.messages = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeoutHeight !== undefined &&
            (obj.timeoutHeight = (message.timeoutHeight || long_1.default.UZERO).toString());
        if (message.extensionOptions) {
            obj.extensionOptions = message.extensionOptions.map(function (e) {
                return e ? any_js_1.Any.toJSON(e) : undefined;
            });
        }
        else {
            obj.extensionOptions = [];
        }
        if (message.nonCriticalExtensionOptions) {
            obj.nonCriticalExtensionOptions = message.nonCriticalExtensionOptions.map(function (e) { return (e ? any_js_1.Any.toJSON(e) : undefined); });
        }
        else {
            obj.nonCriticalExtensionOptions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTxBody();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_js_1.Any.fromPartial(e); })) || [];
        message.memo = (_b = object.memo) !== null && _b !== void 0 ? _b : "";
        message.timeoutHeight =
            object.timeoutHeight !== undefined && object.timeoutHeight !== null
                ? long_1.default.fromValue(object.timeoutHeight)
                : long_1.default.UZERO;
        message.extensionOptions =
            ((_c = object.extensionOptions) === null || _c === void 0 ? void 0 : _c.map(function (e) { return any_js_1.Any.fromPartial(e); })) || [];
        message.nonCriticalExtensionOptions =
            ((_d = object.nonCriticalExtensionOptions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_js_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAuthInfo() {
    return { signerInfos: [], fee: undefined };
}
exports.AuthInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.signerInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signerInfos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
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
            signerInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signerInfos)
                ? object.signerInfos.map(function (e) { return exports.SignerInfo.fromJSON(e); })
                : [],
            fee: isSet(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.signerInfos) {
            obj.signerInfos = message.signerInfos.map(function (e) {
                return e ? exports.SignerInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.signerInfos = [];
        }
        message.fee !== undefined &&
            (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAuthInfo();
        message.signerInfos =
            ((_a = object.signerInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignerInfo.fromPartial(e); })) || [];
        message.fee =
            object.fee !== undefined && object.fee !== null
                ? exports.Fee.fromPartial(object.fee)
                : undefined;
        return message;
    },
};
function createBaseSignerInfo() {
    return { publicKey: undefined, modeInfo: undefined, sequence: long_1.default.UZERO };
}
exports.SignerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.publicKey !== undefined) {
            any_js_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.modeInfo !== undefined) {
            exports.ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfo = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            modeInfo: isSet(object.modeInfo)
                ? exports.ModeInfo.fromJSON(object.modeInfo)
                : undefined,
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.publicKey !== undefined &&
            (obj.publicKey = message.publicKey
                ? any_js_1.Any.toJSON(message.publicKey)
                : undefined);
        message.modeInfo !== undefined &&
            (obj.modeInfo = message.modeInfo
                ? exports.ModeInfo.toJSON(message.modeInfo)
                : undefined);
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSignerInfo();
        message.publicKey =
            object.publicKey !== undefined && object.publicKey !== null
                ? any_js_1.Any.fromPartial(object.publicKey)
                : undefined;
        message.modeInfo =
            object.modeInfo !== undefined && object.modeInfo !== null
                ? exports.ModeInfo.fromPartial(object.modeInfo)
                : undefined;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseModeInfo() {
    return { single: undefined, multi: undefined };
}
exports.ModeInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
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
            single: isSet(object.single)
                ? exports.ModeInfo_Single.fromJSON(object.single)
                : undefined,
            multi: isSet(object.multi)
                ? exports.ModeInfo_Multi.fromJSON(object.multi)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.single !== undefined &&
            (obj.single = message.single
                ? exports.ModeInfo_Single.toJSON(message.single)
                : undefined);
        message.multi !== undefined &&
            (obj.multi = message.multi
                ? exports.ModeInfo_Multi.toJSON(message.multi)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseModeInfo();
        message.single =
            object.single !== undefined && object.single !== null
                ? exports.ModeInfo_Single.fromPartial(object.single)
                : undefined;
        message.multi =
            object.multi !== undefined && object.multi !== null
                ? exports.ModeInfo_Multi.fromPartial(object.multi)
                : undefined;
        return message;
    },
};
function createBaseModeInfo_Single() {
    return { mode: 0 };
}
exports.ModeInfo_Single = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
            mode: isSet(object.mode) ? signing_js_1.signModeFromJSON(object.mode) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.mode !== undefined && (obj.mode = signing_js_1.signModeToJSON(message.mode));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseModeInfo_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseModeInfo_Multi() {
    return { bitarray: undefined, modeInfos: [] };
}
exports.ModeInfo_Multi = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bitarray !== undefined) {
            multisig_js_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.modeInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_js_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.modeInfos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
            bitarray: isSet(object.bitarray)
                ? multisig_js_1.CompactBitArray.fromJSON(object.bitarray)
                : undefined,
            modeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.modeInfos)
                ? object.modeInfos.map(function (e) { return exports.ModeInfo.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bitarray !== undefined &&
            (obj.bitarray = message.bitarray
                ? multisig_js_1.CompactBitArray.toJSON(message.bitarray)
                : undefined);
        if (message.modeInfos) {
            obj.modeInfos = message.modeInfos.map(function (e) {
                return e ? exports.ModeInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.modeInfos = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseModeInfo_Multi();
        message.bitarray =
            object.bitarray !== undefined && object.bitarray !== null
                ? multisig_js_1.CompactBitArray.fromPartial(object.bitarray)
                : undefined;
        message.modeInfos =
            ((_a = object.modeInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModeInfo.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseFee() {
    return { amount: [], gasLimit: long_1.default.UZERO, payer: "", granter: "" };
}
exports.Fee = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.gasLimit.isZero()) {
            writer.uint32(16).uint64(message.gasLimit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gasLimit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            gasLimit: isSet(object.gasLimit)
                ? long_1.default.fromValue(object.gasLimit)
                : long_1.default.UZERO,
            payer: isSet(object.payer) ? String(object.payer) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return (e ? coin_js_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.amount = [];
        }
        message.gasLimit !== undefined &&
            (obj.gasLimit = (message.gasLimit || long_1.default.UZERO).toString());
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.gasLimit =
            object.gasLimit !== undefined && object.gasLimit !== null
                ? long_1.default.fromValue(object.gasLimit)
                : long_1.default.UZERO;
        message.payer = (_b = object.payer) !== null && _b !== void 0 ? _b : "";
        message.granter = (_c = object.granter) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=tx.js.map