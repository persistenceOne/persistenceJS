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
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = exports.protobufPackage = void 0;
/* eslint-disable */
var duration_js_1 = require("../../../google/protobuf/duration.js");
var any_js_1 = require("../../../google/protobuf/any.js");
var timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var coin_js_1 = require("../../base/v1beta1/coin.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseBasicAllowance() {
    return { spendLimit: [], expiration: undefined };
}
exports.BasicAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.spendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBasicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            spendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.spendLimit)
                ? object.spendLimit.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            expiration: isSet(object.expiration)
                ? fromJsonTimestamp(object.expiration)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.spendLimit = [];
        }
        message.expiration !== undefined &&
            (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBasicAllowance();
        message.spendLimit =
            ((_a = object.spendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.expiration = (_b = object.expiration) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePeriodicAllowance() {
    return {
        basic: undefined,
        period: undefined,
        periodSpendLimit: [],
        periodCanSpend: [],
        periodReset: undefined,
    };
}
exports.PeriodicAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_js_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.periodSpendLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.periodCanSpend; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_js_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.periodReset !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.periodSpendLimit.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.periodCanSpend.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.periodReset = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            basic: isSet(object.basic)
                ? exports.BasicAllowance.fromJSON(object.basic)
                : undefined,
            period: isSet(object.period)
                ? duration_js_1.Duration.fromJSON(object.period)
                : undefined,
            periodSpendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.periodSpendLimit)
                ? object.periodSpendLimit.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            periodCanSpend: Array.isArray(object === null || object === void 0 ? void 0 : object.periodCanSpend)
                ? object.periodCanSpend.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            periodReset: isSet(object.periodReset)
                ? fromJsonTimestamp(object.periodReset)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.basic !== undefined &&
            (obj.basic = message.basic
                ? exports.BasicAllowance.toJSON(message.basic)
                : undefined);
        message.period !== undefined &&
            (obj.period = message.period
                ? duration_js_1.Duration.toJSON(message.period)
                : undefined);
        if (message.periodSpendLimit) {
            obj.periodSpendLimit = message.periodSpendLimit.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.periodSpendLimit = [];
        }
        if (message.periodCanSpend) {
            obj.periodCanSpend = message.periodCanSpend.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.periodCanSpend = [];
        }
        message.periodReset !== undefined &&
            (obj.periodReset = message.periodReset.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePeriodicAllowance();
        message.basic =
            object.basic !== undefined && object.basic !== null
                ? exports.BasicAllowance.fromPartial(object.basic)
                : undefined;
        message.period =
            object.period !== undefined && object.period !== null
                ? duration_js_1.Duration.fromPartial(object.period)
                : undefined;
        message.periodSpendLimit =
            ((_a = object.periodSpendLimit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.periodCanSpend =
            ((_b = object.periodCanSpend) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.periodReset = (_c = object.periodReset) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseAllowedMsgAllowance() {
    return { allowance: undefined, allowedMessages: [] };
}
exports.AllowedMsgAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.allowance !== undefined) {
            any_js_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.allowedMessages; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowedMessages.push(reader.string());
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
            allowance: isSet(object.allowance)
                ? any_js_1.Any.fromJSON(object.allowance)
                : undefined,
            allowedMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowedMessages)
                ? object.allowedMessages.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.allowance !== undefined &&
            (obj.allowance = message.allowance
                ? any_js_1.Any.toJSON(message.allowance)
                : undefined);
        if (message.allowedMessages) {
            obj.allowedMessages = message.allowedMessages.map(function (e) { return e; });
        }
        else {
            obj.allowedMessages = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAllowedMsgAllowance();
        message.allowance =
            object.allowance !== undefined && object.allowance !== null
                ? any_js_1.Any.fromPartial(object.allowance)
                : undefined;
        message.allowedMessages = ((_a = object.allowedMessages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseGrant() {
    return { granter: "", grantee: "", allowance: undefined };
}
exports.Grant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_js_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = any_js_1.Any.decode(reader, reader.uint32());
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            allowance: isSet(object.allowance)
                ? any_js_1.Any.fromJSON(object.allowance)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined &&
            (obj.allowance = message.allowance
                ? any_js_1.Any.toJSON(message.allowance)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGrant();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.allowance =
            object.allowance !== undefined && object.allowance !== null
                ? any_js_1.Any.fromPartial(object.allowance)
                : undefined;
        return message;
    },
};
function toTimestamp(date) {
    var seconds = numberToLong(date.getTime() / 1000);
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=feegrant.js.map