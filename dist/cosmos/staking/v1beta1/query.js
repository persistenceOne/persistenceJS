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
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var pagination_js_1 = require("../../base/query/v1beta1/pagination.js");
var staking_js_1 = require("./staking.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseQueryValidatorsRequest() {
    return { status: "", pagination: undefined };
}
exports.QueryValidatorsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
            status: isSet(object.status) ? String(object.status) : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorsResponse() {
    return { validators: [], pagination: undefined };
}
exports.QueryValidatorsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_js_1.Validator.decode(reader, reader.uint32()));
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return staking_js_1.Validator.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(function (e) {
                return e ? staking_js_1.Validator.toJSON(e) : undefined;
            });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_js_1.Validator.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorRequest() {
    return { validatorAddr: "" };
}
exports.QueryValidatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValidatorResponse() {
    return { validator: undefined };
}
exports.QueryValidatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validator !== undefined) {
            staking_js_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_js_1.Validator.decode(reader, reader.uint32());
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
            validator: isSet(object.validator)
                ? staking_js_1.Validator.fromJSON(object.validator)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? staking_js_1.Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryValidatorResponse();
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? staking_js_1.Validator.fromPartial(object.validator)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorDelegationsRequest() {
    return { validatorAddr: "", pagination: undefined };
}
exports.QueryValidatorDelegationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorDelegationsRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorDelegationsResponse() {
    return { delegationResponses: [], pagination: undefined };
}
exports.QueryValidatorDelegationsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.delegationResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(staking_js_1.DelegationResponse.decode(reader, reader.uint32()));
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
            delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationResponses)
                ? object.delegationResponses.map(function (e) {
                    return staking_js_1.DelegationResponse.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.delegationResponses) {
            obj.delegationResponses = message.delegationResponses.map(function (e) {
                return e ? staking_js_1.DelegationResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegationResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorDelegationsResponse();
        message.delegationResponses =
            ((_a = object.delegationResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return staking_js_1.DelegationResponse.fromPartial(e);
            })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return { validatorAddr: "", pagination: undefined };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return { unbondingResponses: [], pagination: undefined };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.unbondingResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(staking_js_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
            unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingResponses)
                ? object.unbondingResponses.map(function (e) {
                    return staking_js_1.UnbondingDelegation.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.unbondingResponses) {
            obj.unbondingResponses = message.unbondingResponses.map(function (e) {
                return e ? staking_js_1.UnbondingDelegation.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbondingResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbondingResponses =
            ((_a = object.unbondingResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return staking_js_1.UnbondingDelegation.fromPartial(e);
            })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegationRequest() {
    return { delegatorAddr: "", validatorAddr: "" };
}
exports.QueryDelegationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegationResponse() {
    return { delegationResponse: undefined };
}
exports.QueryDelegationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegationResponse !== undefined) {
            staking_js_1.DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponse = staking_js_1.DelegationResponse.decode(reader, reader.uint32());
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
            delegationResponse: isSet(object.delegationResponse)
                ? staking_js_1.DelegationResponse.fromJSON(object.delegationResponse)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegationResponse !== undefined &&
            (obj.delegationResponse = message.delegationResponse
                ? staking_js_1.DelegationResponse.toJSON(message.delegationResponse)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDelegationResponse();
        message.delegationResponse =
            object.delegationResponse !== undefined &&
                object.delegationResponse !== null
                ? staking_js_1.DelegationResponse.fromPartial(object.delegationResponse)
                : undefined;
        return message;
    },
};
function createBaseQueryUnbondingDelegationRequest() {
    return { delegatorAddr: "", validatorAddr: "" };
}
exports.QueryUnbondingDelegationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryUnbondingDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryUnbondingDelegationResponse() {
    return { unbond: undefined };
}
exports.QueryUnbondingDelegationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.unbond !== undefined) {
            staking_js_1.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = staking_js_1.UnbondingDelegation.decode(reader, reader.uint32());
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
            unbond: isSet(object.unbond)
                ? staking_js_1.UnbondingDelegation.fromJSON(object.unbond)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.unbond !== undefined &&
            (obj.unbond = message.unbond
                ? staking_js_1.UnbondingDelegation.toJSON(message.unbond)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryUnbondingDelegationResponse();
        message.unbond =
            object.unbond !== undefined && object.unbond !== null
                ? staking_js_1.UnbondingDelegation.fromPartial(object.unbond)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorDelegationsRequest() {
    return { delegatorAddr: "", pagination: undefined };
}
exports.QueryDelegatorDelegationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorDelegationsResponse() {
    return { delegationResponses: [], pagination: undefined };
}
exports.QueryDelegatorDelegationsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.delegationResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(staking_js_1.DelegationResponse.decode(reader, reader.uint32()));
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
            delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationResponses)
                ? object.delegationResponses.map(function (e) {
                    return staking_js_1.DelegationResponse.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.delegationResponses) {
            obj.delegationResponses = message.delegationResponses.map(function (e) {
                return e ? staking_js_1.DelegationResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegationResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorDelegationsResponse();
        message.delegationResponses =
            ((_a = object.delegationResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return staking_js_1.DelegationResponse.fromPartial(e);
            })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return { delegatorAddr: "", pagination: undefined };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return { unbondingResponses: [], pagination: undefined };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.unbondingResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(staking_js_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
            unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingResponses)
                ? object.unbondingResponses.map(function (e) {
                    return staking_js_1.UnbondingDelegation.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.unbondingResponses) {
            obj.unbondingResponses = message.unbondingResponses.map(function (e) {
                return e ? staking_js_1.UnbondingDelegation.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbondingResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbondingResponses =
            ((_a = object.unbondingResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return staking_js_1.UnbondingDelegation.fromPartial(e);
            })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryRedelegationsRequest() {
    return {
        delegatorAddr: "",
        srcValidatorAddr: "",
        dstValidatorAddr: "",
        pagination: undefined,
    };
}
exports.QueryRedelegationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.srcValidatorAddr !== "") {
            writer.uint32(18).string(message.srcValidatorAddr);
        }
        if (message.dstValidatorAddr !== "") {
            writer.uint32(26).string(message.dstValidatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.srcValidatorAddr = reader.string();
                    break;
                case 3:
                    message.dstValidatorAddr = reader.string();
                    break;
                case 4:
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            srcValidatorAddr: isSet(object.srcValidatorAddr)
                ? String(object.srcValidatorAddr)
                : "",
            dstValidatorAddr: isSet(object.dstValidatorAddr)
                ? String(object.dstValidatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.srcValidatorAddr !== undefined &&
            (obj.srcValidatorAddr = message.srcValidatorAddr);
        message.dstValidatorAddr !== undefined &&
            (obj.dstValidatorAddr = message.dstValidatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryRedelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.srcValidatorAddr = (_b = object.srcValidatorAddr) !== null && _b !== void 0 ? _b : "";
        message.dstValidatorAddr = (_c = object.dstValidatorAddr) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryRedelegationsResponse() {
    return { redelegationResponses: [], pagination: undefined };
}
exports.QueryRedelegationsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.redelegationResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationResponses.push(staking_js_1.RedelegationResponse.decode(reader, reader.uint32()));
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
            redelegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegationResponses)
                ? object.redelegationResponses.map(function (e) {
                    return staking_js_1.RedelegationResponse.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.redelegationResponses) {
            obj.redelegationResponses = message.redelegationResponses.map(function (e) {
                return e ? staking_js_1.RedelegationResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.redelegationResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryRedelegationsResponse();
        message.redelegationResponses =
            ((_a = object.redelegationResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return staking_js_1.RedelegationResponse.fromPartial(e);
            })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorsRequest() {
    return { delegatorAddr: "", pagination: undefined };
}
exports.QueryDelegatorValidatorsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorsResponse() {
    return { validators: [], pagination: undefined };
}
exports.QueryDelegatorValidatorsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_js_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_js_1.Validator.decode(reader, reader.uint32()));
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return staking_js_1.Validator.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(function (e) {
                return e ? staking_js_1.Validator.toJSON(e) : undefined;
            });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_js_1.Validator.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorRequest() {
    return { delegatorAddr: "", validatorAddr: "" };
}
exports.QueryDelegatorValidatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
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
            delegatorAddr: isSet(object.delegatorAddr)
                ? String(object.delegatorAddr)
                : "",
            validatorAddr: isSet(object.validatorAddr)
                ? String(object.validatorAddr)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegatorAddr !== undefined &&
            (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined &&
            (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegatorValidatorRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegatorValidatorResponse() {
    return { validator: undefined };
}
exports.QueryDelegatorValidatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validator !== undefined) {
            staking_js_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_js_1.Validator.decode(reader, reader.uint32());
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
            validator: isSet(object.validator)
                ? staking_js_1.Validator.fromJSON(object.validator)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? staking_js_1.Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDelegatorValidatorResponse();
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? staking_js_1.Validator.fromPartial(object.validator)
                : undefined;
        return message;
    },
};
function createBaseQueryHistoricalInfoRequest() {
    return { height: long_1.default.ZERO };
}
exports.QueryHistoricalInfoRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryHistoricalInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryHistoricalInfoRequest();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseQueryHistoricalInfoResponse() {
    return { hist: undefined };
}
exports.QueryHistoricalInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.hist !== undefined) {
            staking_js_1.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = staking_js_1.HistoricalInfo.decode(reader, reader.uint32());
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
            hist: isSet(object.hist)
                ? staking_js_1.HistoricalInfo.fromJSON(object.hist)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.hist !== undefined &&
            (obj.hist = message.hist
                ? staking_js_1.HistoricalInfo.toJSON(message.hist)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryHistoricalInfoResponse();
        message.hist =
            object.hist !== undefined && object.hist !== null
                ? staking_js_1.HistoricalInfo.fromPartial(object.hist)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolRequest();
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
        var message = createBaseQueryPoolRequest();
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool !== undefined) {
            staking_js_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = staking_js_1.Pool.decode(reader, reader.uint32());
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
            pool: isSet(object.pool) ? staking_js_1.Pool.fromJSON(object.pool) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? staking_js_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? staking_js_1.Pool.fromPartial(object.pool)
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
            staking_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = staking_js_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? staking_js_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? staking_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? staking_js_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.Validators = this.Validators.bind(this);
        this.Validator = this.Validator.bind(this);
        this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
        this.ValidatorUnbondingDelegations =
            this.ValidatorUnbondingDelegations.bind(this);
        this.Delegation = this.Delegation.bind(this);
        this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
        this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
        this.DelegatorUnbondingDelegations =
            this.DelegatorUnbondingDelegations.bind(this);
        this.Redelegations = this.Redelegations.bind(this);
        this.DelegatorValidators = this.DelegatorValidators.bind(this);
        this.DelegatorValidator = this.DelegatorValidator.bind(this);
        this.HistoricalInfo = this.HistoricalInfo.bind(this);
        this.Pool = this.Pool.bind(this);
        this.Params = this.Params.bind(this);
    }
    QueryClientImpl.prototype.Validators = function (request) {
        var data = exports.QueryValidatorsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then(function (data) {
            return exports.QueryValidatorsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Validator = function (request) {
        var data = exports.QueryValidatorRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then(function (data) {
            return exports.QueryValidatorResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ValidatorDelegations = function (request) {
        var data = exports.QueryValidatorDelegationsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then(function (data) {
            return exports.QueryValidatorDelegationsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ValidatorUnbondingDelegations = function (request) {
        var data = exports.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then(function (data) {
            return exports.QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Delegation = function (request) {
        var data = exports.QueryDelegationRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then(function (data) {
            return exports.QueryDelegationResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.UnbondingDelegation = function (request) {
        var data = exports.QueryUnbondingDelegationRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then(function (data) {
            return exports.QueryUnbondingDelegationResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DelegatorDelegations = function (request) {
        var data = exports.QueryDelegatorDelegationsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then(function (data) {
            return exports.QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DelegatorUnbondingDelegations = function (request) {
        var data = exports.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then(function (data) {
            return exports.QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Redelegations = function (request) {
        var data = exports.QueryRedelegationsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then(function (data) {
            return exports.QueryRedelegationsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DelegatorValidators = function (request) {
        var data = exports.QueryDelegatorValidatorsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(function (data) {
            return exports.QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DelegatorValidator = function (request) {
        var data = exports.QueryDelegatorValidatorRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then(function (data) {
            return exports.QueryDelegatorValidatorResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.HistoricalInfo = function (request) {
        var data = exports.QueryHistoricalInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then(function (data) {
            return exports.QueryHistoricalInfoResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Pool = function (request) {
        var data = exports.QueryPoolRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then(function (data) {
            return exports.QueryPoolResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
        return promise.then(function (data) {
            return exports.QueryParamsResponse.decode(new _m0.Reader(data));
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