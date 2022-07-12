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
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var distribution_js_1 = require("./distribution.js");
var long_1 = __importDefault(require("long"));
var coin_js_1 = require("../../base/v1beta1/coin.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return { delegatorAddress: "", withdrawAddress: "" };
}
exports.DelegatorWithdrawInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            withdrawAddress: isSet(object.withdrawAddress)
                ? String(object.withdrawAddress)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined &&
            (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.withdrawAddress = (_b = object.withdrawAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return { validatorAddress: "", outstandingRewards: [] };
}
exports.ValidatorOutstandingRewardsRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (var _i = 0, _a = message.outstandingRewards; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.outstandingRewards.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards)
                ? object.outstandingRewards.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.outstandingRewards = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.outstandingRewards =
            ((_b = object.outstandingRewards) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return { validatorAddress: "", accumulated: undefined };
}
exports.ValidatorAccumulatedCommissionRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            distribution_js_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_js_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            accumulated: isSet(object.accumulated)
                ? distribution_js_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated
                ? distribution_js_1.ValidatorAccumulatedCommission.toJSON(message.accumulated)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.accumulated =
            object.accumulated !== undefined && object.accumulated !== null
                ? distribution_js_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated)
                : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return { validatorAddress: "", period: long_1.default.UZERO, rewards: undefined };
}
exports.ValidatorHistoricalRewardsRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_js_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.rewards = distribution_js_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            period: isSet(object.period) ? long_1.default.fromValue(object.period) : long_1.default.UZERO,
            rewards: isSet(object.rewards)
                ? distribution_js_1.ValidatorHistoricalRewards.fromJSON(object.rewards)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.period !== undefined &&
            (obj.period = (message.period || long_1.default.UZERO).toString());
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? distribution_js_1.ValidatorHistoricalRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.period =
            object.period !== undefined && object.period !== null
                ? long_1.default.fromValue(object.period)
                : long_1.default.UZERO;
        message.rewards =
            object.rewards !== undefined && object.rewards !== null
                ? distribution_js_1.ValidatorHistoricalRewards.fromPartial(object.rewards)
                : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return { validatorAddress: "", rewards: undefined };
}
exports.ValidatorCurrentRewardsRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            distribution_js_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_js_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            rewards: isSet(object.rewards)
                ? distribution_js_1.ValidatorCurrentRewards.fromJSON(object.rewards)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? distribution_js_1.ValidatorCurrentRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.rewards =
            object.rewards !== undefined && object.rewards !== null
                ? distribution_js_1.ValidatorCurrentRewards.fromPartial(object.rewards)
                : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        startingInfo: undefined,
    };
}
exports.DelegatorStartingInfoRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            distribution_js_1.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.startingInfo = distribution_js_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegatorAddress: isSet(object.delegatorAddress)
                ? String(object.delegatorAddress)
                : "",
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            startingInfo: isSet(object.startingInfo)
                ? distribution_js_1.DelegatorStartingInfo.fromJSON(object.startingInfo)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddress !== undefined &&
            (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.startingInfo !== undefined &&
            (obj.startingInfo = message.startingInfo
                ? distribution_js_1.DelegatorStartingInfo.toJSON(message.startingInfo)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.startingInfo =
            object.startingInfo !== undefined && object.startingInfo !== null
                ? distribution_js_1.DelegatorStartingInfo.fromPartial(object.startingInfo)
                : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return {
        validatorAddress: "",
        height: long_1.default.UZERO,
        period: long_1.default.UZERO,
        validatorSlashEvent: undefined,
    };
}
exports.ValidatorSlashEventRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).uint64(message.height);
        }
        if (!message.period.isZero()) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            distribution_js_1.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.validatorSlashEvent = distribution_js_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress)
                ? String(object.validatorAddress)
                : "",
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
            period: isSet(object.period) ? long_1.default.fromValue(object.period) : long_1.default.UZERO,
            validatorSlashEvent: isSet(object.validatorSlashEvent)
                ? distribution_js_1.ValidatorSlashEvent.fromJSON(object.validatorSlashEvent)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        message.period !== undefined &&
            (obj.period = (message.period || long_1.default.UZERO).toString());
        message.validatorSlashEvent !== undefined &&
            (obj.validatorSlashEvent = message.validatorSlashEvent
                ? distribution_js_1.ValidatorSlashEvent.toJSON(message.validatorSlashEvent)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.UZERO;
        message.period =
            object.period !== undefined && object.period !== null
                ? long_1.default.fromValue(object.period)
                : long_1.default.UZERO;
        message.validatorSlashEvent =
            object.validatorSlashEvent !== undefined &&
                object.validatorSlashEvent !== null
                ? distribution_js_1.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        feePool: undefined,
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: [],
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            distribution_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            distribution_js_1.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.delegatorWithdrawInfos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (var _b = 0, _c = message.outstandingRewards; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.validatorAccumulatedCommissions; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _f = 0, _g = message.validatorHistoricalRewards; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _h = 0, _j = message.validatorCurrentRewards; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _k = 0, _l = message.delegatorStartingInfos; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (var _m = 0, _o = message.validatorSlashEvents; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
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
                    message.params = distribution_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feePool = distribution_js_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previousProposer = reader.string();
                    break;
                case 5:
                    message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? distribution_js_1.Params.fromJSON(object.params) : undefined,
            feePool: isSet(object.feePool)
                ? distribution_js_1.FeePool.fromJSON(object.feePool)
                : undefined,
            delegatorWithdrawInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorWithdrawInfos)
                ? object.delegatorWithdrawInfos.map(function (e) {
                    return exports.DelegatorWithdrawInfo.fromJSON(e);
                })
                : [],
            previousProposer: isSet(object.previousProposer)
                ? String(object.previousProposer)
                : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards)
                ? object.outstandingRewards.map(function (e) {
                    return exports.ValidatorOutstandingRewardsRecord.fromJSON(e);
                })
                : [],
            validatorAccumulatedCommissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorAccumulatedCommissions)
                ? object.validatorAccumulatedCommissions.map(function (e) {
                    return exports.ValidatorAccumulatedCommissionRecord.fromJSON(e);
                })
                : [],
            validatorHistoricalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorHistoricalRewards)
                ? object.validatorHistoricalRewards.map(function (e) {
                    return exports.ValidatorHistoricalRewardsRecord.fromJSON(e);
                })
                : [],
            validatorCurrentRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorCurrentRewards)
                ? object.validatorCurrentRewards.map(function (e) {
                    return exports.ValidatorCurrentRewardsRecord.fromJSON(e);
                })
                : [],
            delegatorStartingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorStartingInfos)
                ? object.delegatorStartingInfos.map(function (e) {
                    return exports.DelegatorStartingInfoRecord.fromJSON(e);
                })
                : [],
            validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents)
                ? object.validatorSlashEvents.map(function (e) {
                    return exports.ValidatorSlashEventRecord.fromJSON(e);
                })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? distribution_js_1.Params.toJSON(message.params) : undefined);
        message.feePool !== undefined &&
            (obj.feePool = message.feePool
                ? distribution_js_1.FeePool.toJSON(message.feePool)
                : undefined);
        if (message.delegatorWithdrawInfos) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map(function (e) {
                return e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegatorWithdrawInfos = [];
        }
        message.previousProposer !== undefined &&
            (obj.previousProposer = message.previousProposer);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map(function (e) {
                return e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.outstandingRewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validatorAccumulatedCommissions =
                message.validatorAccumulatedCommissions.map(function (e) {
                    return e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined;
                });
        }
        else {
            obj.validatorAccumulatedCommissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map(function (e) { return (e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined); });
        }
        else {
            obj.validatorHistoricalRewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map(function (e) {
                return e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.validatorCurrentRewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map(function (e) {
                return e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegatorStartingInfos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map(function (e) {
                return e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? distribution_js_1.Params.fromPartial(object.params)
                : undefined;
        message.feePool =
            object.feePool !== undefined && object.feePool !== null
                ? distribution_js_1.FeePool.fromPartial(object.feePool)
                : undefined;
        message.delegatorWithdrawInfos =
            ((_a = object.delegatorWithdrawInfos) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return exports.DelegatorWithdrawInfo.fromPartial(e);
            })) || [];
        message.previousProposer = (_b = object.previousProposer) !== null && _b !== void 0 ? _b : "";
        message.outstandingRewards =
            ((_c = object.outstandingRewards) === null || _c === void 0 ? void 0 : _c.map(function (e) {
                return exports.ValidatorOutstandingRewardsRecord.fromPartial(e);
            })) || [];
        message.validatorAccumulatedCommissions =
            ((_d = object.validatorAccumulatedCommissions) === null || _d === void 0 ? void 0 : _d.map(function (e) {
                return exports.ValidatorAccumulatedCommissionRecord.fromPartial(e);
            })) || [];
        message.validatorHistoricalRewards =
            ((_e = object.validatorHistoricalRewards) === null || _e === void 0 ? void 0 : _e.map(function (e) {
                return exports.ValidatorHistoricalRewardsRecord.fromPartial(e);
            })) || [];
        message.validatorCurrentRewards =
            ((_f = object.validatorCurrentRewards) === null || _f === void 0 ? void 0 : _f.map(function (e) {
                return exports.ValidatorCurrentRewardsRecord.fromPartial(e);
            })) || [];
        message.delegatorStartingInfos =
            ((_g = object.delegatorStartingInfos) === null || _g === void 0 ? void 0 : _g.map(function (e) {
                return exports.DelegatorStartingInfoRecord.fromPartial(e);
            })) || [];
        message.validatorSlashEvents =
            ((_h = object.validatorSlashEvents) === null || _h === void 0 ? void 0 : _h.map(function (e) {
                return exports.ValidatorSlashEventRecord.fromPartial(e);
            })) || [];
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