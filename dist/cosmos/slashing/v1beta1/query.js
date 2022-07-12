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
exports.QueryClientImpl = exports.QuerySigningInfosResponse = exports.QuerySigningInfosRequest = exports.QuerySigningInfoResponse = exports.QuerySigningInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var slashing_js_1 = require("./slashing.js");
var pagination_js_1 = require("../../base/query/v1beta1/pagination.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.slashing.v1beta1";
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
            slashing_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = slashing_js_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? slashing_js_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? slashing_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? slashing_js_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQuerySigningInfoRequest() {
    return { consAddress: "" };
}
exports.QuerySigningInfoRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consAddress = reader.string();
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
            consAddress: isSet(object.consAddress) ? String(object.consAddress) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.consAddress !== undefined &&
            (obj.consAddress = message.consAddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySigningInfoRequest();
        message.consAddress = (_a = object.consAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySigningInfoResponse() {
    return { valSigningInfo: undefined };
}
exports.QuerySigningInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.valSigningInfo !== undefined) {
            slashing_js_1.ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valSigningInfo = slashing_js_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            valSigningInfo: isSet(object.valSigningInfo)
                ? slashing_js_1.ValidatorSigningInfo.fromJSON(object.valSigningInfo)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.valSigningInfo !== undefined &&
            (obj.valSigningInfo = message.valSigningInfo
                ? slashing_js_1.ValidatorSigningInfo.toJSON(message.valSigningInfo)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySigningInfoResponse();
        message.valSigningInfo =
            object.valSigningInfo !== undefined && object.valSigningInfo !== null
                ? slashing_js_1.ValidatorSigningInfo.fromPartial(object.valSigningInfo)
                : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosRequest() {
    return { pagination: undefined };
}
exports.QuerySigningInfosRequest = {
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
        var message = createBaseQuerySigningInfosRequest();
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
        var message = createBaseQuerySigningInfosRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosResponse() {
    return { info: [], pagination: undefined };
}
exports.QuerySigningInfosResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.info; _i < _a.length; _i++) {
            var v = _a[_i];
            slashing_js_1.ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfosResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info.push(slashing_js_1.ValidatorSigningInfo.decode(reader, reader.uint32()));
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
            info: Array.isArray(object === null || object === void 0 ? void 0 : object.info)
                ? object.info.map(function (e) { return slashing_js_1.ValidatorSigningInfo.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_js_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.info) {
            obj.info = message.info.map(function (e) {
                return e ? slashing_js_1.ValidatorSigningInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_js_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySigningInfosResponse();
        message.info =
            ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map(function (e) { return slashing_js_1.ValidatorSigningInfo.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_js_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.SigningInfo = this.SigningInfo.bind(this);
        this.SigningInfos = this.SigningInfos.bind(this);
    }
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
        return promise.then(function (data) {
            return exports.QueryParamsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.SigningInfo = function (request) {
        var data = exports.QuerySigningInfoRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
        return promise.then(function (data) {
            return exports.QuerySigningInfoResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.SigningInfos = function (request) {
        var data = exports.QuerySigningInfosRequest.encode(request).finish();
        var promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
        return promise.then(function (data) {
            return exports.QuerySigningInfosResponse.decode(new _m0.Reader(data));
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