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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var genesis_js_1 = require("../../client/v1/genesis.js");
var genesis_js_2 = require("../../connection/v1/genesis.js");
var genesis_js_3 = require("../../channel/v1/genesis.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.core.types.v1";
function createBaseGenesisState() {
    return {
        clientGenesis: undefined,
        connectionGenesis: undefined,
        channelGenesis: undefined,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.clientGenesis !== undefined) {
            genesis_js_1.GenesisState.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionGenesis !== undefined) {
            genesis_js_2.GenesisState.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channelGenesis !== undefined) {
            genesis_js_3.GenesisState.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
                    message.clientGenesis = genesis_js_1.GenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connectionGenesis = genesis_js_2.GenesisState.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.channelGenesis = genesis_js_3.GenesisState.decode(reader, reader.uint32());
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
            clientGenesis: isSet(object.clientGenesis)
                ? genesis_js_1.GenesisState.fromJSON(object.clientGenesis)
                : undefined,
            connectionGenesis: isSet(object.connectionGenesis)
                ? genesis_js_2.GenesisState.fromJSON(object.connectionGenesis)
                : undefined,
            channelGenesis: isSet(object.channelGenesis)
                ? genesis_js_3.GenesisState.fromJSON(object.channelGenesis)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientGenesis !== undefined &&
            (obj.clientGenesis = message.clientGenesis
                ? genesis_js_1.GenesisState.toJSON(message.clientGenesis)
                : undefined);
        message.connectionGenesis !== undefined &&
            (obj.connectionGenesis = message.connectionGenesis
                ? genesis_js_2.GenesisState.toJSON(message.connectionGenesis)
                : undefined);
        message.channelGenesis !== undefined &&
            (obj.channelGenesis = message.channelGenesis
                ? genesis_js_3.GenesisState.toJSON(message.channelGenesis)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisState();
        message.clientGenesis =
            object.clientGenesis !== undefined && object.clientGenesis !== null
                ? genesis_js_1.GenesisState.fromPartial(object.clientGenesis)
                : undefined;
        message.connectionGenesis =
            object.connectionGenesis !== undefined &&
                object.connectionGenesis !== null
                ? genesis_js_2.GenesisState.fromPartial(object.connectionGenesis)
                : undefined;
        message.channelGenesis =
            object.channelGenesis !== undefined && object.channelGenesis !== null
                ? genesis_js_3.GenesisState.fromPartial(object.channelGenesis)
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
//# sourceMappingURL=genesis.js.map