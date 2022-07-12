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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var auth_js_1 = require("./auth.js");
var long_1 = __importDefault(require("long"));
var any_js_1 = require("../../../google/protobuf/any.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, accounts: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            auth_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.accounts; _i < _a.length; _i++) {
            var v = _a[_i];
            any_js_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = auth_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accounts.push(any_js_1.Any.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? auth_js_1.Params.fromJSON(object.params) : undefined,
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts)
                ? object.accounts.map(function (e) { return any_js_1.Any.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? auth_js_1.Params.toJSON(message.params) : undefined);
        if (message.accounts) {
            obj.accounts = message.accounts.map(function (e) {
                return e ? any_js_1.Any.toJSON(e) : undefined;
            });
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? auth_js_1.Params.fromPartial(object.params)
                : undefined;
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_js_1.Any.fromPartial(e); })) || [];
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