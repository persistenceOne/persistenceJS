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
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
var auth_js_1 = require("../../auth/v1beta1/auth.js");
var long_1 = __importDefault(require("long"));
var coin_js_1 = require("../../base/v1beta1/coin.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseBaseVestingAccount() {
    return {
        baseAccount: undefined,
        originalVesting: [],
        delegatedFree: [],
        delegatedVesting: [],
        endTime: long_1.default.ZERO,
    };
}
exports.BaseVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseAccount !== undefined) {
            auth_js_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.originalVesting; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.delegatedFree; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_js_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegatedVesting; _d < _e.length; _d++) {
            var v = _e[_d];
            coin_js_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (!message.endTime.isZero()) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_js_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.originalVesting.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegatedFree.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegatedVesting.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = reader.int64();
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
            originalVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.originalVesting)
                ? object.originalVesting.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            delegatedFree: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedFree)
                ? object.delegatedFree.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            delegatedVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedVesting)
                ? object.delegatedVesting.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            endTime: isSet(object.endTime)
                ? long_1.default.fromValue(object.endTime)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? auth_js_1.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        if (message.originalVesting) {
            obj.originalVesting = message.originalVesting.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.originalVesting = [];
        }
        if (message.delegatedFree) {
            obj.delegatedFree = message.delegatedFree.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegatedFree = [];
        }
        if (message.delegatedVesting) {
            obj.delegatedVesting = message.delegatedVesting.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegatedVesting = [];
        }
        message.endTime !== undefined &&
            (obj.endTime = (message.endTime || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseBaseVestingAccount();
        message.baseAccount =
            object.baseAccount !== undefined && object.baseAccount !== null
                ? auth_js_1.BaseAccount.fromPartial(object.baseAccount)
                : undefined;
        message.originalVesting =
            ((_a = object.originalVesting) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.delegatedFree =
            ((_b = object.delegatedFree) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.delegatedVesting =
            ((_c = object.delegatedVesting) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.endTime =
            object.endTime !== undefined && object.endTime !== null
                ? long_1.default.fromValue(object.endTime)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseContinuousVestingAccount() {
    return { baseVestingAccount: undefined, startTime: long_1.default.ZERO };
}
exports.ContinuousVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (!message.startTime.isZero()) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
            startTime: isSet(object.startTime)
                ? long_1.default.fromValue(object.startTime)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.startTime !== undefined &&
            (obj.startTime = (message.startTime || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseContinuousVestingAccount();
        message.baseVestingAccount =
            object.baseVestingAccount !== undefined &&
                object.baseVestingAccount !== null
                ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
                : undefined;
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? long_1.default.fromValue(object.startTime)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseDelayedVestingAccount() {
    return { baseVestingAccount: undefined };
}
exports.DelayedVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseDelayedVestingAccount();
        message.baseVestingAccount =
            object.baseVestingAccount !== undefined &&
                object.baseVestingAccount !== null
                ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
                : undefined;
        return message;
    },
};
function createBasePeriod() {
    return { length: long_1.default.ZERO, amount: [] };
}
exports.Period = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.length.isZero()) {
            writer.uint32(8).int64(message.length);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = reader.int64();
                    break;
                case 2:
                    message.amount.push(coin_js_1.Coin.decode(reader, reader.uint32()));
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
            length: isSet(object.length) ? long_1.default.fromValue(object.length) : long_1.default.ZERO,
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.length !== undefined &&
            (obj.length = (message.length || long_1.default.ZERO).toString());
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return (e ? coin_js_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePeriod();
        message.length =
            object.length !== undefined && object.length !== null
                ? long_1.default.fromValue(object.length)
                : long_1.default.ZERO;
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        startTime: long_1.default.ZERO,
        vestingPeriods: [],
    };
}
exports.PeriodicVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (!message.startTime.isZero()) {
            writer.uint32(16).int64(message.startTime);
        }
        for (var _i = 0, _a = message.vestingPeriods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                case 3:
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
            startTime: isSet(object.startTime)
                ? long_1.default.fromValue(object.startTime)
                : long_1.default.ZERO,
            vestingPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.vestingPeriods)
                ? object.vestingPeriods.map(function (e) { return exports.Period.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.startTime !== undefined &&
            (obj.startTime = (message.startTime || long_1.default.ZERO).toString());
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map(function (e) {
                return e ? exports.Period.toJSON(e) : undefined;
            });
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePeriodicVestingAccount();
        message.baseVestingAccount =
            object.baseVestingAccount !== undefined &&
                object.baseVestingAccount !== null
                ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
                : undefined;
        message.startTime =
            object.startTime !== undefined && object.startTime !== null
                ? long_1.default.fromValue(object.startTime)
                : long_1.default.ZERO;
        message.vestingPeriods =
            ((_a = object.vestingPeriods) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Period.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePermanentLockedAccount() {
    return { baseVestingAccount: undefined };
}
exports.PermanentLockedAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBasePermanentLockedAccount();
        message.baseVestingAccount =
            object.baseVestingAccount !== undefined &&
                object.baseVestingAccount !== null
                ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
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
//# sourceMappingURL=vesting.js.map