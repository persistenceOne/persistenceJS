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
exports.Consensus = exports.App = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.version";
function createBaseApp() {
    return { protocol: long_1.default.UZERO, software: "" };
}
exports.App = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.protocol.isZero()) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseApp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.uint64();
                    break;
                case 2:
                    message.software = reader.string();
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
            protocol: isSet(object.protocol)
                ? long_1.default.fromValue(object.protocol)
                : long_1.default.UZERO,
            software: isSet(object.software) ? String(object.software) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.protocol !== undefined &&
            (obj.protocol = (message.protocol || long_1.default.UZERO).toString());
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseApp();
        message.protocol =
            object.protocol !== undefined && object.protocol !== null
                ? long_1.default.fromValue(object.protocol)
                : long_1.default.UZERO;
        message.software = (_a = object.software) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConsensus() {
    return { block: long_1.default.UZERO, app: long_1.default.UZERO };
}
exports.Consensus = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.block.isZero()) {
            writer.uint32(8).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
                    break;
                case 2:
                    message.app = reader.uint64();
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
            block: isSet(object.block) ? long_1.default.fromValue(object.block) : long_1.default.UZERO,
            app: isSet(object.app) ? long_1.default.fromValue(object.app) : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block !== undefined &&
            (obj.block = (message.block || long_1.default.UZERO).toString());
        message.app !== undefined &&
            (obj.app = (message.app || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseConsensus();
        message.block =
            object.block !== undefined && object.block !== null
                ? long_1.default.fromValue(object.block)
                : long_1.default.UZERO;
        message.app =
            object.app !== undefined && object.app !== null
                ? long_1.default.fromValue(object.app)
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
//# sourceMappingURL=types.js.map