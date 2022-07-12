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
exports.BlockStoreState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.store";
function createBaseBlockStoreState() {
    return { base: long_1.default.ZERO, height: long_1.default.ZERO };
}
exports.BlockStoreState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.base.isZero()) {
            writer.uint32(8).int64(message.base);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockStoreState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = reader.int64();
                    break;
                case 2:
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
            base: isSet(object.base) ? long_1.default.fromValue(object.base) : long_1.default.ZERO,
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base !== undefined &&
            (obj.base = (message.base || long_1.default.ZERO).toString());
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBlockStoreState();
        message.base =
            object.base !== undefined && object.base !== null
                ? long_1.default.fromValue(object.base)
                : long_1.default.ZERO;
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
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