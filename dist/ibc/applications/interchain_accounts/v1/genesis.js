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
exports.RegisteredInterchainAccount = exports.ActiveChannel = exports.HostGenesisState = exports.ControllerGenesisState = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var controller_js_1 = require("../controller/v1/controller.js");
var host_js_1 = require("../host/v1/host.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseGenesisState() {
    return { controllerGenesisState: undefined, hostGenesisState: undefined };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.controllerGenesisState !== undefined) {
            exports.ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
        }
        if (message.hostGenesisState !== undefined) {
            exports.HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
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
                    message.controllerGenesisState = exports.ControllerGenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hostGenesisState = exports.HostGenesisState.decode(reader, reader.uint32());
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
            controllerGenesisState: isSet(object.controllerGenesisState)
                ? exports.ControllerGenesisState.fromJSON(object.controllerGenesisState)
                : undefined,
            hostGenesisState: isSet(object.hostGenesisState)
                ? exports.HostGenesisState.fromJSON(object.hostGenesisState)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.controllerGenesisState !== undefined &&
            (obj.controllerGenesisState = message.controllerGenesisState
                ? exports.ControllerGenesisState.toJSON(message.controllerGenesisState)
                : undefined);
        message.hostGenesisState !== undefined &&
            (obj.hostGenesisState = message.hostGenesisState
                ? exports.HostGenesisState.toJSON(message.hostGenesisState)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisState();
        message.controllerGenesisState =
            object.controllerGenesisState !== undefined &&
                object.controllerGenesisState !== null
                ? exports.ControllerGenesisState.fromPartial(object.controllerGenesisState)
                : undefined;
        message.hostGenesisState =
            object.hostGenesisState !== undefined && object.hostGenesisState !== null
                ? exports.HostGenesisState.fromPartial(object.hostGenesisState)
                : undefined;
        return message;
    },
};
function createBaseControllerGenesisState() {
    return {
        activeChannels: [],
        interchainAccounts: [],
        ports: [],
        params: undefined,
    };
}
exports.ControllerGenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.activeChannels; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.interchainAccounts; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.ports; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(26).string(v);
        }
        if (message.params !== undefined) {
            controller_js_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseControllerGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeChannels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchainAccounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ports.push(reader.string());
                    break;
                case 4:
                    message.params = controller_js_1.Params.decode(reader, reader.uint32());
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
            activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels)
                ? object.activeChannels.map(function (e) { return exports.ActiveChannel.fromJSON(e); })
                : [],
            interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts)
                ? object.interchainAccounts.map(function (e) {
                    return exports.RegisteredInterchainAccount.fromJSON(e);
                })
                : [],
            ports: Array.isArray(object === null || object === void 0 ? void 0 : object.ports)
                ? object.ports.map(function (e) { return String(e); })
                : [],
            params: isSet(object.params) ? controller_js_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.activeChannels) {
            obj.activeChannels = message.activeChannels.map(function (e) {
                return e ? exports.ActiveChannel.toJSON(e) : undefined;
            });
        }
        else {
            obj.activeChannels = [];
        }
        if (message.interchainAccounts) {
            obj.interchainAccounts = message.interchainAccounts.map(function (e) {
                return e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined;
            });
        }
        else {
            obj.interchainAccounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map(function (e) { return e; });
        }
        else {
            obj.ports = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? controller_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseControllerGenesisState();
        message.activeChannels =
            ((_a = object.activeChannels) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ActiveChannel.fromPartial(e); })) || [];
        message.interchainAccounts =
            ((_b = object.interchainAccounts) === null || _b === void 0 ? void 0 : _b.map(function (e) {
                return exports.RegisteredInterchainAccount.fromPartial(e);
            })) || [];
        message.ports = ((_c = object.ports) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? controller_js_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseHostGenesisState() {
    return {
        activeChannels: [],
        interchainAccounts: [],
        port: "",
        params: undefined,
    };
}
exports.HostGenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.activeChannels; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.interchainAccounts; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.port !== "") {
            writer.uint32(26).string(message.port);
        }
        if (message.params !== undefined) {
            host_js_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHostGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeChannels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchainAccounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.port = reader.string();
                    break;
                case 4:
                    message.params = host_js_1.Params.decode(reader, reader.uint32());
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
            activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels)
                ? object.activeChannels.map(function (e) { return exports.ActiveChannel.fromJSON(e); })
                : [],
            interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts)
                ? object.interchainAccounts.map(function (e) {
                    return exports.RegisteredInterchainAccount.fromJSON(e);
                })
                : [],
            port: isSet(object.port) ? String(object.port) : "",
            params: isSet(object.params)
                ? host_js_1.Params.fromJSON(object.params)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.activeChannels) {
            obj.activeChannels = message.activeChannels.map(function (e) {
                return e ? exports.ActiveChannel.toJSON(e) : undefined;
            });
        }
        else {
            obj.activeChannels = [];
        }
        if (message.interchainAccounts) {
            obj.interchainAccounts = message.interchainAccounts.map(function (e) {
                return e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined;
            });
        }
        else {
            obj.interchainAccounts = [];
        }
        message.port !== undefined && (obj.port = message.port);
        message.params !== undefined &&
            (obj.params = message.params
                ? host_js_1.Params.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseHostGenesisState();
        message.activeChannels =
            ((_a = object.activeChannels) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ActiveChannel.fromPartial(e); })) || [];
        message.interchainAccounts =
            ((_b = object.interchainAccounts) === null || _b === void 0 ? void 0 : _b.map(function (e) {
                return exports.RegisteredInterchainAccount.fromPartial(e);
            })) || [];
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? host_js_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseActiveChannel() {
    return { connectionId: "", portId: "", channelId: "" };
}
exports.ActiveChannel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseActiveChannel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
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
            connectionId: isSet(object.connectionId)
                ? String(object.connectionId)
                : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseActiveChannel();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.channelId = (_c = object.channelId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisteredInterchainAccount() {
    return { connectionId: "", portId: "", accountAddress: "" };
}
exports.RegisteredInterchainAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisteredInterchainAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.accountAddress = reader.string();
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
            connectionId: isSet(object.connectionId)
                ? String(object.connectionId)
                : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            accountAddress: isSet(object.accountAddress)
                ? String(object.accountAddress)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.connectionId !== undefined &&
            (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.accountAddress !== undefined &&
            (obj.accountAddress = message.accountAddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRegisteredInterchainAccount();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.portId = (_b = object.portId) !== null && _b !== void 0 ? _b : "";
        message.accountAddress = (_c = object.accountAddress) !== null && _c !== void 0 ? _c : "";
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