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
exports.BroadcastAPIClientImpl = exports.ResponseBroadcastTx = exports.ResponsePing = exports.RequestBroadcastTx = exports.RequestPing = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("../../abci/types.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.rpc.grpc";
function createBaseRequestPing() {
    return {};
}
exports.RequestPing = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestPing();
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
        var message = createBaseRequestPing();
        return message;
    },
};
function createBaseRequestBroadcastTx() {
    return { tx: new Uint8Array() };
}
exports.RequestBroadcastTx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestBroadcastTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRequestBroadcastTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResponsePing() {
    return {};
}
exports.ResponsePing = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponsePing();
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
        var message = createBaseResponsePing();
        return message;
    },
};
function createBaseResponseBroadcastTx() {
    return { checkTx: undefined, deliverTx: undefined };
}
exports.ResponseBroadcastTx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.checkTx !== undefined) {
            types_js_1.ResponseCheckTx.encode(message.checkTx, writer.uint32(10).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            types_js_1.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseBroadcastTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checkTx = types_js_1.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deliverTx = types_js_1.ResponseDeliverTx.decode(reader, reader.uint32());
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
            checkTx: isSet(object.checkTx)
                ? types_js_1.ResponseCheckTx.fromJSON(object.checkTx)
                : undefined,
            deliverTx: isSet(object.deliverTx)
                ? types_js_1.ResponseDeliverTx.fromJSON(object.deliverTx)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.checkTx !== undefined &&
            (obj.checkTx = message.checkTx
                ? types_js_1.ResponseCheckTx.toJSON(message.checkTx)
                : undefined);
        message.deliverTx !== undefined &&
            (obj.deliverTx = message.deliverTx
                ? types_js_1.ResponseDeliverTx.toJSON(message.deliverTx)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseResponseBroadcastTx();
        message.checkTx =
            object.checkTx !== undefined && object.checkTx !== null
                ? types_js_1.ResponseCheckTx.fromPartial(object.checkTx)
                : undefined;
        message.deliverTx =
            object.deliverTx !== undefined && object.deliverTx !== null
                ? types_js_1.ResponseDeliverTx.fromPartial(object.deliverTx)
                : undefined;
        return message;
    },
};
var BroadcastAPIClientImpl = /** @class */ (function () {
    function BroadcastAPIClientImpl(rpc) {
        this.rpc = rpc;
        this.Ping = this.Ping.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
    }
    BroadcastAPIClientImpl.prototype.Ping = function (request) {
        var data = exports.RequestPing.encode(request).finish();
        var promise = this.rpc.request("tendermint.rpc.grpc.BroadcastAPI", "Ping", data);
        return promise.then(function (data) { return exports.ResponsePing.decode(new _m0.Reader(data)); });
    };
    BroadcastAPIClientImpl.prototype.BroadcastTx = function (request) {
        var data = exports.RequestBroadcastTx.encode(request).finish();
        var promise = this.rpc.request("tendermint.rpc.grpc.BroadcastAPI", "BroadcastTx", data);
        return promise.then(function (data) {
            return exports.ResponseBroadcastTx.decode(new _m0.Reader(data));
        });
    };
    return BroadcastAPIClientImpl;
}());
exports.BroadcastAPIClientImpl = BroadcastAPIClientImpl;
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
//# sourceMappingURL=types.js.map