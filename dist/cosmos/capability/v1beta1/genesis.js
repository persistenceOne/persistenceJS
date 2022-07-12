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
exports.GenesisState = exports.GenesisOwners = exports.protobufPackage = void 0;
/* eslint-disable */
var capability_js_1 = require("./capability.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.capability.v1beta1";
function createBaseGenesisOwners() {
    return { index: long_1.default.UZERO, indexOwners: undefined };
}
exports.GenesisOwners = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            capability_js_1.CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisOwners();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.indexOwners = capability_js_1.CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? long_1.default.fromValue(object.index) : long_1.default.UZERO,
            indexOwners: isSet(object.indexOwners)
                ? capability_js_1.CapabilityOwners.fromJSON(object.indexOwners)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined &&
            (obj.index = (message.index || long_1.default.UZERO).toString());
        message.indexOwners !== undefined &&
            (obj.indexOwners = message.indexOwners
                ? capability_js_1.CapabilityOwners.toJSON(message.indexOwners)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisOwners();
        message.index =
            object.index !== undefined && object.index !== null
                ? long_1.default.fromValue(object.index)
                : long_1.default.UZERO;
        message.indexOwners =
            object.indexOwners !== undefined && object.indexOwners !== null
                ? capability_js_1.CapabilityOwners.fromPartial(object.indexOwners)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { index: long_1.default.UZERO, owners: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        for (var _i = 0, _a = message.owners; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(exports.GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? long_1.default.fromValue(object.index) : long_1.default.UZERO,
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners)
                ? object.owners.map(function (e) { return exports.GenesisOwners.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined &&
            (obj.index = (message.index || long_1.default.UZERO).toString());
        if (message.owners) {
            obj.owners = message.owners.map(function (e) {
                return e ? exports.GenesisOwners.toJSON(e) : undefined;
            });
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.index =
            object.index !== undefined && object.index !== null
                ? long_1.default.fromValue(object.index)
                : long_1.default.UZERO;
        message.owners =
            ((_a = object.owners) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GenesisOwners.fromPartial(e); })) || [];
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