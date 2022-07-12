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
exports.PacketSequence = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var channel_js_1 = require("./channel.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: long_1.default.UZERO,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.channels; _i < _a.length; _i++) {
            var v = _a[_i];
            channel_js_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.acknowledgements; _b < _c.length; _b++) {
            var v = _c[_b];
            channel_js_1.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.commitments; _d < _e.length; _d++) {
            var v = _e[_d];
            channel_js_1.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _f = 0, _g = message.receipts; _f < _g.length; _f++) {
            var v = _g[_f];
            channel_js_1.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _h = 0, _j = message.sendSequences; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _k = 0, _l = message.recvSequences; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _m = 0, _o = message.ackSequences; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (!message.nextChannelSequence.isZero()) {
            writer.uint32(64).uint64(message.nextChannelSequence);
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
                    message.channels.push(channel_js_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(channel_js_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(channel_js_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(channel_js_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recvSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ackSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nextChannelSequence = reader.uint64();
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels)
                ? object.channels.map(function (e) { return channel_js_1.IdentifiedChannel.fromJSON(e); })
                : [],
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements)
                ? object.acknowledgements.map(function (e) { return channel_js_1.PacketState.fromJSON(e); })
                : [],
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments)
                ? object.commitments.map(function (e) { return channel_js_1.PacketState.fromJSON(e); })
                : [],
            receipts: Array.isArray(object === null || object === void 0 ? void 0 : object.receipts)
                ? object.receipts.map(function (e) { return channel_js_1.PacketState.fromJSON(e); })
                : [],
            sendSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sendSequences)
                ? object.sendSequences.map(function (e) { return exports.PacketSequence.fromJSON(e); })
                : [],
            recvSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.recvSequences)
                ? object.recvSequences.map(function (e) { return exports.PacketSequence.fromJSON(e); })
                : [],
            ackSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.ackSequences)
                ? object.ackSequences.map(function (e) { return exports.PacketSequence.fromJSON(e); })
                : [],
            nextChannelSequence: isSet(object.nextChannelSequence)
                ? long_1.default.fromValue(object.nextChannelSequence)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(function (e) {
                return e ? channel_js_1.IdentifiedChannel.toJSON(e) : undefined;
            });
        }
        else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(function (e) {
                return e ? channel_js_1.PacketState.toJSON(e) : undefined;
            });
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(function (e) {
                return e ? channel_js_1.PacketState.toJSON(e) : undefined;
            });
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(function (e) {
                return e ? channel_js_1.PacketState.toJSON(e) : undefined;
            });
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.sendSequences = message.sendSequences.map(function (e) {
                return e ? exports.PacketSequence.toJSON(e) : undefined;
            });
        }
        else {
            obj.sendSequences = [];
        }
        if (message.recvSequences) {
            obj.recvSequences = message.recvSequences.map(function (e) {
                return e ? exports.PacketSequence.toJSON(e) : undefined;
            });
        }
        else {
            obj.recvSequences = [];
        }
        if (message.ackSequences) {
            obj.ackSequences = message.ackSequences.map(function (e) {
                return e ? exports.PacketSequence.toJSON(e) : undefined;
            });
        }
        else {
            obj.ackSequences = [];
        }
        message.nextChannelSequence !== undefined &&
            (obj.nextChannelSequence = (message.nextChannelSequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseGenesisState();
        message.channels =
            ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map(function (e) { return channel_js_1.IdentifiedChannel.fromPartial(e); })) || [];
        message.acknowledgements =
            ((_b = object.acknowledgements) === null || _b === void 0 ? void 0 : _b.map(function (e) { return channel_js_1.PacketState.fromPartial(e); })) || [];
        message.commitments =
            ((_c = object.commitments) === null || _c === void 0 ? void 0 : _c.map(function (e) { return channel_js_1.PacketState.fromPartial(e); })) || [];
        message.receipts =
            ((_d = object.receipts) === null || _d === void 0 ? void 0 : _d.map(function (e) { return channel_js_1.PacketState.fromPartial(e); })) || [];
        message.sendSequences =
            ((_e = object.sendSequences) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.PacketSequence.fromPartial(e); })) || [];
        message.recvSequences =
            ((_f = object.recvSequences) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.PacketSequence.fromPartial(e); })) || [];
        message.ackSequences =
            ((_g = object.ackSequences) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.PacketSequence.fromPartial(e); })) || [];
        message.nextChannelSequence =
            object.nextChannelSequence !== undefined &&
                object.nextChannelSequence !== null
                ? long_1.default.fromValue(object.nextChannelSequence)
                : long_1.default.UZERO;
        return message;
    },
};
function createBasePacketSequence() {
    return { portId: "", channelId: "", sequence: long_1.default.UZERO };
}
exports.PacketSequence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketSequence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence)
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined &&
            (obj.sequence = (message.sequence || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePacketSequence();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.sequence =
            object.sequence !== undefined && object.sequence !== null
                ? long_1.default.fromValue(object.sequence)
                : long_1.default.UZERO;
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