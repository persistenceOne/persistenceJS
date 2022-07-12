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
exports.Params = exports.ModuleAccount = exports.BaseAccount = exports.protobufPackage = void 0;
/* eslint-disable */
var any_js_1 = require("../../../google/protobuf/any.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseBaseAccount() {
    return {
        address: "",
        pubKey: undefined,
        accountNumber: long_1.default.UZERO,
        sequence: long_1.default.UZERO,
    };
}
exports.BaseAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_js_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseAccount();
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
                    message.accountNumber = reader.uint64();
                    break;
                case 4:
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
            address: isSet(object.address) ? String(object.address) : "",
            pubKey: isSet(object.pubKey) ? any_js_1.Any.fromJSON(object.pubKey) : undefined,
            accountNumber: isSet(object.accountNumber)
                ? long_1.default.fromValue(object.accountNumber)
                : long_1.default.UZERO,
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey ? any_js_1.Any.toJSON(message.pubKey) : undefined);
        message.accountNumber !== undefined &&
            (obj.accountNumber = (message.accountNumber || long_1.default.UZERO).toString());
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBaseAccount();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? any_js_1.Any.fromPartial(object.pubKey)
                : undefined;
        message.accountNumber =
            object.accountNumber !== undefined && object.accountNumber !== null
                ? long_1.default.fromValue(object.accountNumber)
                : long_1.default.UZERO;
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseModuleAccount() {
    return { baseAccount: undefined, name: "", permissions: [] };
}
exports.ModuleAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseAccount !== undefined) {
            exports.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (var _i = 0, _a = message.permissions; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
            baseAccount: isSet(object.baseAccount)
                ? exports.BaseAccount.fromJSON(object.baseAccount)
                : undefined,
            name: isSet(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions)
                ? object.permissions.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? exports.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map(function (e) { return e; });
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseModuleAccount();
        message.baseAccount =
            object.baseAccount !== undefined && object.baseAccount !== null
                ? exports.BaseAccount.fromPartial(object.baseAccount)
                : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.permissions = ((_b = object.permissions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        maxMemoCharacters: long_1.default.UZERO,
        txSigLimit: long_1.default.UZERO,
        txSizeCostPerByte: long_1.default.UZERO,
        sigVerifyCostEd25519: long_1.default.UZERO,
        sigVerifyCostSecp256k1: long_1.default.UZERO,
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.maxMemoCharacters.isZero()) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (!message.txSigLimit.isZero()) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (!message.txSizeCostPerByte.isZero()) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (!message.sigVerifyCostEd25519.isZero()) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (!message.sigVerifyCostSecp256k1.isZero()) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxMemoCharacters = reader.uint64();
                    break;
                case 2:
                    message.txSigLimit = reader.uint64();
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64();
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64();
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64();
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
            maxMemoCharacters: isSet(object.maxMemoCharacters)
                ? long_1.default.fromValue(object.maxMemoCharacters)
                : long_1.default.UZERO,
            txSigLimit: isSet(object.txSigLimit)
                ? long_1.default.fromValue(object.txSigLimit)
                : long_1.default.UZERO,
            txSizeCostPerByte: isSet(object.txSizeCostPerByte)
                ? long_1.default.fromValue(object.txSizeCostPerByte)
                : long_1.default.UZERO,
            sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519)
                ? long_1.default.fromValue(object.sigVerifyCostEd25519)
                : long_1.default.UZERO,
            sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1)
                ? long_1.default.fromValue(object.sigVerifyCostSecp256k1)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.maxMemoCharacters !== undefined &&
            (obj.maxMemoCharacters = (message.maxMemoCharacters || long_1.default.UZERO).toString());
        message.txSigLimit !== undefined &&
            (obj.txSigLimit = (message.txSigLimit || long_1.default.UZERO).toString());
        message.txSizeCostPerByte !== undefined &&
            (obj.txSizeCostPerByte = (message.txSizeCostPerByte || long_1.default.UZERO).toString());
        message.sigVerifyCostEd25519 !== undefined &&
            (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || long_1.default.UZERO).toString());
        message.sigVerifyCostSecp256k1 !== undefined &&
            (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseParams();
        message.maxMemoCharacters =
            object.maxMemoCharacters !== undefined &&
                object.maxMemoCharacters !== null
                ? long_1.default.fromValue(object.maxMemoCharacters)
                : long_1.default.UZERO;
        message.txSigLimit =
            object.txSigLimit !== undefined && object.txSigLimit !== null
                ? long_1.default.fromValue(object.txSigLimit)
                : long_1.default.UZERO;
        message.txSizeCostPerByte =
            object.txSizeCostPerByte !== undefined &&
                object.txSizeCostPerByte !== null
                ? long_1.default.fromValue(object.txSizeCostPerByte)
                : long_1.default.UZERO;
        message.sigVerifyCostEd25519 =
            object.sigVerifyCostEd25519 !== undefined &&
                object.sigVerifyCostEd25519 !== null
                ? long_1.default.fromValue(object.sigVerifyCostEd25519)
                : long_1.default.UZERO;
        message.sigVerifyCostSecp256k1 =
            object.sigVerifyCostSecp256k1 !== undefined &&
                object.sigVerifyCostSecp256k1 !== null
                ? long_1.default.fromValue(object.sigVerifyCostSecp256k1)
                : long_1.default.UZERO;
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
//# sourceMappingURL=auth.js.map