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
exports.InterchainAccount = exports.protobufPackage = void 0;
/* eslint-disable */
var auth_js_1 = require("../../../../cosmos/auth/v1beta1/auth.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseInterchainAccount() {
    return { baseAccount: undefined, accountOwner: "" };
}
exports.InterchainAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseAccount !== undefined) {
            auth_js_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.accountOwner !== "") {
            writer.uint32(18).string(message.accountOwner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterchainAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_js_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accountOwner = reader.string();
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
                ? auth_js_1.BaseAccount.fromJSON(object.baseAccount)
                : undefined,
            accountOwner: isSet(object.accountOwner)
                ? String(object.accountOwner)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? auth_js_1.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        message.accountOwner !== undefined &&
            (obj.accountOwner = message.accountOwner);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInterchainAccount();
        message.baseAccount =
            object.baseAccount !== undefined && object.baseAccount !== null
                ? auth_js_1.BaseAccount.fromPartial(object.baseAccount)
                : undefined;
        message.accountOwner = (_a = object.accountOwner) !== null && _a !== void 0 ? _a : "";
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
//# sourceMappingURL=account.js.map