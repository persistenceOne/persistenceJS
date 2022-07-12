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
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var coin_js_1 = require("../../base/v1beta1/coin.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false,
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.communityTax !== "") {
            writer.uint32(10).string(message.communityTax);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(message.baseProposerReward);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(message.bonusProposerReward);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityTax = reader.string();
                    break;
                case 2:
                    message.baseProposerReward = reader.string();
                    break;
                case 3:
                    message.bonusProposerReward = reader.string();
                    break;
                case 4:
                    message.withdrawAddrEnabled = reader.bool();
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
            communityTax: isSet(object.communityTax)
                ? String(object.communityTax)
                : "",
            baseProposerReward: isSet(object.baseProposerReward)
                ? String(object.baseProposerReward)
                : "",
            bonusProposerReward: isSet(object.bonusProposerReward)
                ? String(object.bonusProposerReward)
                : "",
            withdrawAddrEnabled: isSet(object.withdrawAddrEnabled)
                ? Boolean(object.withdrawAddrEnabled)
                : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.communityTax !== undefined &&
            (obj.communityTax = message.communityTax);
        message.baseProposerReward !== undefined &&
            (obj.baseProposerReward = message.baseProposerReward);
        message.bonusProposerReward !== undefined &&
            (obj.bonusProposerReward = message.bonusProposerReward);
        message.withdrawAddrEnabled !== undefined &&
            (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseParams();
        message.communityTax = (_a = object.communityTax) !== null && _a !== void 0 ? _a : "";
        message.baseProposerReward = (_b = object.baseProposerReward) !== null && _b !== void 0 ? _b : "";
        message.bonusProposerReward = (_c = object.bonusProposerReward) !== null && _c !== void 0 ? _c : "";
        message.withdrawAddrEnabled = (_d = object.withdrawAddrEnabled) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseValidatorHistoricalRewards() {
    return { cumulativeRewardRatio: [], referenceCount: 0 };
}
exports.ValidatorHistoricalRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.cumulativeRewardRatio; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeRewardRatio.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.referenceCount = reader.uint32();
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
            cumulativeRewardRatio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulativeRewardRatio)
                ? object.cumulativeRewardRatio.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
            referenceCount: isSet(object.referenceCount)
                ? Number(object.referenceCount)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.cumulativeRewardRatio) {
            obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.cumulativeRewardRatio = [];
        }
        message.referenceCount !== undefined &&
            (obj.referenceCount = Math.round(message.referenceCount));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio =
            ((_a = object.cumulativeRewardRatio) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        message.referenceCount = (_b = object.referenceCount) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseValidatorCurrentRewards() {
    return { rewards: [], period: long_1.default.UZERO };
}
exports.ValidatorCurrentRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
            period: isSet(object.period) ? long_1.default.fromValue(object.period) : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.rewards = [];
        }
        message.period !== undefined &&
            (obj.period = (message.period || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorCurrentRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        message.period =
            object.period !== undefined && object.period !== null
                ? long_1.default.fromValue(object.period)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseValidatorAccumulatedCommission() {
    return { commission: [] };
}
exports.ValidatorAccumulatedCommission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.commission; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission)
                ? object.commission.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorAccumulatedCommission();
        message.commission =
            ((_a = object.commission) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseValidatorOutstandingRewards() {
    return { rewards: [] };
}
exports.ValidatorOutstandingRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorOutstandingRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseValidatorSlashEvent() {
    return { validatorPeriod: long_1.default.UZERO, fraction: "" };
}
exports.ValidatorSlashEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.validatorPeriod.isZero()) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorPeriod = reader.uint64();
                    break;
                case 2:
                    message.fraction = reader.string();
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
            validatorPeriod: isSet(object.validatorPeriod)
                ? long_1.default.fromValue(object.validatorPeriod)
                : long_1.default.UZERO,
            fraction: isSet(object.fraction) ? String(object.fraction) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorPeriod !== undefined &&
            (obj.validatorPeriod = (message.validatorPeriod || long_1.default.UZERO).toString());
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorSlashEvent();
        message.validatorPeriod =
            object.validatorPeriod !== undefined && object.validatorPeriod !== null
                ? long_1.default.fromValue(object.validatorPeriod)
                : long_1.default.UZERO;
        message.fraction = (_a = object.fraction) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseValidatorSlashEvents() {
    return { validatorSlashEvents: [] };
}
exports.ValidatorSlashEvents = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.validatorSlashEvents; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSlashEvents.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents)
                ? object.validatorSlashEvents.map(function (e) {
                    return exports.ValidatorSlashEvent.fromJSON(e);
                })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map(function (e) {
                return e ? exports.ValidatorSlashEvent.toJSON(e) : undefined;
            });
        }
        else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents =
            ((_a = object.validatorSlashEvents) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return exports.ValidatorSlashEvent.fromPartial(e);
            })) || [];
        return message;
    },
};
function createBaseFeePool() {
    return { communityPool: [] };
}
exports.FeePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.communityPool; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFeePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityPool.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
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
            communityPool: Array.isArray(object === null || object === void 0 ? void 0 : object.communityPool)
                ? object.communityPool.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.communityPool) {
            obj.communityPool = message.communityPool.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.communityPool = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFeePool();
        message.communityPool =
            ((_a = object.communityPool) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposal() {
    return { title: "", description: "", recipient: "", amount: [] };
}
exports.CommunityPoolSpendProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return (e ? coin_js_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCommunityPoolSpendProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = ((_d = object.amount) === null || _d === void 0 ? void 0 : _d.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseDelegatorStartingInfo() {
    return { previousPeriod: long_1.default.UZERO, stake: "", height: long_1.default.UZERO };
}
exports.DelegatorStartingInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.previousPeriod.isZero()) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previousPeriod = reader.uint64();
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = reader.uint64();
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
            previousPeriod: isSet(object.previousPeriod)
                ? long_1.default.fromValue(object.previousPeriod)
                : long_1.default.UZERO,
            stake: isSet(object.stake) ? String(object.stake) : "",
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.previousPeriod !== undefined &&
            (obj.previousPeriod = (message.previousPeriod || long_1.default.UZERO).toString());
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDelegatorStartingInfo();
        message.previousPeriod =
            object.previousPeriod !== undefined && object.previousPeriod !== null
                ? long_1.default.fromValue(object.previousPeriod)
                : long_1.default.UZERO;
        message.stake = (_a = object.stake) !== null && _a !== void 0 ? _a : "";
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseDelegationDelegatorReward() {
    return { validatorAddress: "", reward: [] };
}
exports.DelegationDelegatorReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (var _i = 0, _a = message.reward; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
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
            reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward)
                ? object.reward.map(function (e) { return coin_js_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        if (message.reward) {
            obj.reward = message.reward.map(function (e) {
                return e ? coin_js_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegationDelegatorReward();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.reward = ((_b = object.reward) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_js_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return { title: "", description: "", recipient: "", amount: "", deposit: "" };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.deposit = (_e = object.deposit) !== null && _e !== void 0 ? _e : "";
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
//# sourceMappingURL=distribution.js.map