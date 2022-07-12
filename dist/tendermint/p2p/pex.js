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
exports.Message = exports.PexAddrs = exports.PexRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var types_js_1 = require("./types.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.p2p";
function createBasePexRequest() {
    return {};
}
exports.PexRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePexRequest();
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
        var message = createBasePexRequest();
        return message;
    },
};
function createBasePexAddrs() {
    return { addrs: [] };
}
exports.PexAddrs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.addrs; _i < _a.length; _i++) {
            var v = _a[_i];
            types_js_1.NetAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePexAddrs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addrs.push(types_js_1.NetAddress.decode(reader, reader.uint32()));
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
            addrs: Array.isArray(object === null || object === void 0 ? void 0 : object.addrs)
                ? object.addrs.map(function (e) { return types_js_1.NetAddress.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.addrs) {
            obj.addrs = message.addrs.map(function (e) {
                return e ? types_js_1.NetAddress.toJSON(e) : undefined;
            });
        }
        else {
            obj.addrs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePexAddrs();
        message.addrs = ((_a = object.addrs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_js_1.NetAddress.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMessage() {
    return { pexRequest: undefined, pexAddrs: undefined };
}
exports.Message = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pexRequest !== undefined) {
            exports.PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.pexAddrs !== undefined) {
            exports.PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
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
                    message.pexRequest = exports.PexRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pexAddrs = exports.PexAddrs.decode(reader, reader.uint32());
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
            pexRequest: isSet(object.pexRequest)
                ? exports.PexRequest.fromJSON(object.pexRequest)
                : undefined,
            pexAddrs: isSet(object.pexAddrs)
                ? exports.PexAddrs.fromJSON(object.pexAddrs)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pexRequest !== undefined &&
            (obj.pexRequest = message.pexRequest
                ? exports.PexRequest.toJSON(message.pexRequest)
                : undefined);
        message.pexAddrs !== undefined &&
            (obj.pexAddrs = message.pexAddrs
                ? exports.PexAddrs.toJSON(message.pexAddrs)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseMessage();
        message.pexRequest =
            object.pexRequest !== undefined && object.pexRequest !== null
                ? exports.PexRequest.fromPartial(object.pexRequest)
                : undefined;
        message.pexAddrs =
            object.pexAddrs !== undefined && object.pexAddrs !== null
                ? exports.PexAddrs.fromPartial(object.pexAddrs)
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
//# sourceMappingURL=pex.js.map