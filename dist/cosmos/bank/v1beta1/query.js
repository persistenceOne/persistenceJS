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
exports.QueryClientImpl = exports.QueryDenomMetadataResponse = exports.QueryDenomMetadataRequest = exports.QueryDenomsMetadataResponse = exports.QueryDenomsMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QuerySupplyOfResponse = exports.QuerySupplyOfRequest = exports.QueryTotalSupplyResponse = exports.QueryTotalSupplyRequest = exports.QueryAllBalancesResponse = exports.QueryAllBalancesRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var coin_js_1 = require("../../base/v1beta1/coin.js");
var pagination_js_1 = require("../../base/query/v1beta1/pagination.js");
var bank_js_1 = require("./bank.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseQueryBalanceRequest() {
    return { address: "", denom: "" };
}
exports.QueryBalanceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryBalanceRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryBalanceResponse() {
    return { balance: undefined };
}
exports.QueryBalanceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.balance !== undefined) {
            coin_js_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = coin_js_1.Coin.decode(reader, reader.uint32());
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
            balance: isSet(object.balance)
                ? coin_js_1.Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_js_1.Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryBalanceResponse();
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? coin_js_1.Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueryAllBalancesRequest() {
    return { address: "", pagination: undefined };
}
exports.QueryAllBalancesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllBalancesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllBalancesRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllBalancesResponse() {
    return { balances: [], pagination: undefined };
}
exports.QueryAllBalancesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.balances; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
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
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances)
                ? object.balances.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(function (e) {
                return e ? coin_js_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.balances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAllBalancesResponse();
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalSupplyRequest() {
    return { pagination: undefined };
}
exports.QueryTotalSupplyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTotalSupplyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryTotalSupplyRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalSupplyResponse() {
    return { supply: [], pagination: undefined };
}
exports.QueryTotalSupplyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.supply; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTotalSupplyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
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
            supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply)
                ? object.supply.map(function (e) { return coin_js_1.Coin.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.supply) {
            obj.supply = message.supply.map(function (e) { return (e ? coin_js_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.supply = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryTotalSupplyResponse();
        message.supply = ((_a = object.supply) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_js_1.Coin.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySupplyOfRequest() {
    return { denom: "" };
}
exports.QuerySupplyOfRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyOfRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySupplyOfRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyOfResponse() {
    return { amount: undefined };
}
exports.QuerySupplyOfResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== undefined) {
            coin_js_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyOfResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_js_1.Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? coin_js_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_js_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySupplyOfResponse();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_js_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            bank_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = bank_js_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? bank_js_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? bank_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? bank_js_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryDenomsMetadataRequest() {
    return { pagination: undefined };
}
exports.QueryDenomsMetadataRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomsMetadataRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDenomsMetadataRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDenomsMetadataResponse() {
    return { metadatas: [], pagination: undefined };
}
exports.QueryDenomsMetadataResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.metadatas; _i < _a.length; _i++) {
            var v = _a[_i];
            bank_js_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomsMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadatas.push(bank_js_1.Metadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
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
            metadatas: Array.isArray(object === null || object === void 0 ? void 0 : object.metadatas)
                ? object.metadatas.map(function (e) { return bank_js_1.Metadata.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.metadatas) {
            obj.metadatas = message.metadatas.map(function (e) {
                return e ? bank_js_1.Metadata.toJSON(e) : undefined;
            });
        }
        else {
            obj.metadatas = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDenomsMetadataResponse();
        message.metadatas =
            ((_a = object.metadatas) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bank_js_1.Metadata.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDenomMetadataRequest() {
    return { denom: "" };
}
exports.QueryDenomMetadataRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomMetadataRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDenomMetadataRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomMetadataResponse() {
    return { metadata: undefined };
}
exports.QueryDenomMetadataResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.metadata !== undefined) {
            bank_js_1.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = bank_js_1.Metadata.decode(reader, reader.uint32());
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
            metadata: isSet(object.metadata)
                ? bank_js_1.Metadata.fromJSON(object.metadata)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? bank_js_1.Metadata.toJSON(message.metadata)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDenomMetadataResponse();
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? bank_js_1.Metadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.Balance = this.Balance.bind(this);
        this.AllBalances = this.AllBalances.bind(this);
        this.TotalSupply = this.TotalSupply.bind(this);
        this.SupplyOf = this.SupplyOf.bind(this);
        this.Params = this.Params.bind(this);
        this.DenomMetadata = this.DenomMetadata.bind(this);
        this.DenomsMetadata = this.DenomsMetadata.bind(this);
    }
    QueryClientImpl.prototype.Balance = function (request) {
        var data = exports.QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
        return promise.then(function (data) {
            return exports.QueryBalanceResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.AllBalances = function (request) {
        var data = exports.QueryAllBalancesRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
        return promise.then(function (data) {
            return exports.QueryAllBalancesResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.TotalSupply = function (request) {
        var data = exports.QueryTotalSupplyRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
        return promise.then(function (data) {
            return exports.QueryTotalSupplyResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.SupplyOf = function (request) {
        var data = exports.QuerySupplyOfRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
        return promise.then(function (data) {
            return exports.QuerySupplyOfResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
        return promise.then(function (data) {
            return exports.QueryParamsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DenomMetadata = function (request) {
        var data = exports.QueryDenomMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
        return promise.then(function (data) {
            return exports.QueryDenomMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DenomsMetadata = function (request) {
        var data = exports.QueryDenomsMetadataRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
        return promise.then(function (data) {
            return exports.QueryDenomsMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map