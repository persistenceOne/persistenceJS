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
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var client_js_1 = require("./client.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.core.client.v1";
function createBaseGenesisState() {
    return {
        clients: [],
        clientsConsensus: [],
        clientsMetadata: [],
        params: undefined,
        createLocalhost: false,
        nextClientSequence: long_1.default.UZERO,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.clients; _i < _a.length; _i++) {
            var v = _a[_i];
            client_js_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.clientsConsensus; _b < _c.length; _b++) {
            var v = _c[_b];
            client_js_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.clientsMetadata; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_js_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (!message.nextClientSequence.isZero()) {
            writer.uint32(48).uint64(message.nextClientSequence);
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
                    message.clients.push(client_js_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientsConsensus.push(client_js_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clientsMetadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createLocalhost = reader.bool();
                    break;
                case 6:
                    message.nextClientSequence = reader.uint64();
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
            clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients)
                ? object.clients.map(function (e) { return client_js_1.IdentifiedClientState.fromJSON(e); })
                : [],
            clientsConsensus: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsConsensus)
                ? object.clientsConsensus.map(function (e) {
                    return client_js_1.ClientConsensusStates.fromJSON(e);
                })
                : [],
            clientsMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsMetadata)
                ? object.clientsMetadata.map(function (e) {
                    return exports.IdentifiedGenesisMetadata.fromJSON(e);
                })
                : [],
            params: isSet(object.params) ? client_js_1.Params.fromJSON(object.params) : undefined,
            createLocalhost: isSet(object.createLocalhost)
                ? Boolean(object.createLocalhost)
                : false,
            nextClientSequence: isSet(object.nextClientSequence)
                ? long_1.default.fromValue(object.nextClientSequence)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(function (e) {
                return e ? client_js_1.IdentifiedClientState.toJSON(e) : undefined;
            });
        }
        else {
            obj.clients = [];
        }
        if (message.clientsConsensus) {
            obj.clientsConsensus = message.clientsConsensus.map(function (e) {
                return e ? client_js_1.ClientConsensusStates.toJSON(e) : undefined;
            });
        }
        else {
            obj.clientsConsensus = [];
        }
        if (message.clientsMetadata) {
            obj.clientsMetadata = message.clientsMetadata.map(function (e) {
                return e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined;
            });
        }
        else {
            obj.clientsMetadata = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? client_js_1.Params.toJSON(message.params) : undefined);
        message.createLocalhost !== undefined &&
            (obj.createLocalhost = message.createLocalhost);
        message.nextClientSequence !== undefined &&
            (obj.nextClientSequence = (message.nextClientSequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGenesisState();
        message.clients =
            ((_a = object.clients) === null || _a === void 0 ? void 0 : _a.map(function (e) { return client_js_1.IdentifiedClientState.fromPartial(e); })) || [];
        message.clientsConsensus =
            ((_b = object.clientsConsensus) === null || _b === void 0 ? void 0 : _b.map(function (e) {
                return client_js_1.ClientConsensusStates.fromPartial(e);
            })) || [];
        message.clientsMetadata =
            ((_c = object.clientsMetadata) === null || _c === void 0 ? void 0 : _c.map(function (e) {
                return exports.IdentifiedGenesisMetadata.fromPartial(e);
            })) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? client_js_1.Params.fromPartial(object.params)
                : undefined;
        message.createLocalhost = (_d = object.createLocalhost) !== null && _d !== void 0 ? _d : false;
        message.nextClientSequence =
            object.nextClientSequence !== undefined &&
                object.nextClientSequence !== null
                ? long_1.default.fromValue(object.nextClientSequence)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseGenesisMetadata() {
    return { key: new Uint8Array(), value: new Uint8Array() };
}
exports.GenesisMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisMetadata();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseIdentifiedGenesisMetadata() {
    return { clientId: "", clientMetadata: [] };
}
exports.IdentifiedGenesisMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (var _i = 0, _a = message.clientMetadata; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIdentifiedGenesisMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientMetadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientMetadata)
                ? object.clientMetadata.map(function (e) { return exports.GenesisMetadata.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.clientMetadata) {
            obj.clientMetadata = message.clientMetadata.map(function (e) {
                return e ? exports.GenesisMetadata.toJSON(e) : undefined;
            });
        }
        else {
            obj.clientMetadata = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseIdentifiedGenesisMetadata();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.clientMetadata =
            ((_b = object.clientMetadata) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.GenesisMetadata.fromPartial(e); })) || [];
        return message;
    },
};
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
//# sourceMappingURL=genesis.js.map