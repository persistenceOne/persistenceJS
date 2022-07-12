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
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var slashing_js_1 = require("./slashing.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, signingInfos: [], missedBlocks: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            slashing_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signingInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.missedBlocks; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = slashing_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? slashing_js_1.Params.fromJSON(object.params) : undefined,
            signingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signingInfos)
                ? object.signingInfos.map(function (e) { return exports.SigningInfo.fromJSON(e); })
                : [],
            missedBlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missedBlocks)
                ? object.missedBlocks.map(function (e) { return exports.ValidatorMissedBlocks.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? slashing_js_1.Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map(function (e) {
                return e ? exports.SigningInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(function (e) {
                return e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined;
            });
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? slashing_js_1.Params.fromPartial(object.params)
                : undefined;
        message.signingInfos =
            ((_a = object.signingInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningInfo.fromPartial(e); })) || [];
        message.missedBlocks =
            ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ValidatorMissedBlocks.fromPartial(e); })) ||
                [];
        return message;
    },
};
function createBaseSigningInfo() {
    return { address: "", validatorSigningInfo: undefined };
}
exports.SigningInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            slashing_js_1.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = slashing_js_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            validatorSigningInfo: isSet(object.validatorSigningInfo)
                ? slashing_js_1.ValidatorSigningInfo.fromJSON(object.validatorSigningInfo)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validatorSigningInfo !== undefined &&
            (obj.validatorSigningInfo = message.validatorSigningInfo
                ? slashing_js_1.ValidatorSigningInfo.toJSON(message.validatorSigningInfo)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.validatorSigningInfo =
            object.validatorSigningInfo !== undefined &&
                object.validatorSigningInfo !== null
                ? slashing_js_1.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo)
                : undefined;
        return message;
    },
};
function createBaseValidatorMissedBlocks() {
    return { address: "", missedBlocks: [] };
}
exports.ValidatorMissedBlocks = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.missedBlocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missedBlocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
            missedBlocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missedBlocks)
                ? object.missedBlocks.map(function (e) { return exports.MissedBlock.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(function (e) {
                return e ? exports.MissedBlock.toJSON(e) : undefined;
            });
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorMissedBlocks();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.missedBlocks =
            ((_b = object.missedBlocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MissedBlock.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMissedBlock() {
    return { index: long_1.default.ZERO, missed: false };
}
exports.MissedBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.index.isZero()) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMissedBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
            index: isSet(object.index) ? long_1.default.fromValue(object.index) : long_1.default.ZERO,
            missed: isSet(object.missed) ? Boolean(object.missed) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined &&
            (obj.index = (message.index || long_1.default.ZERO).toString());
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMissedBlock();
        message.index =
            object.index !== undefined && object.index !== null
                ? long_1.default.fromValue(object.index)
                : long_1.default.ZERO;
        message.missed = (_a = object.missed) !== null && _a !== void 0 ? _a : false;
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
//# sourceMappingURL=genesis.js.map