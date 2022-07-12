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
exports.Block = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("./types.js");
var evidence_js_1 = require("./evidence.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.types";
function createBaseBlock() {
    return {
        header: undefined,
        data: undefined,
        evidence: undefined,
        lastCommit: undefined,
    };
}
exports.Block = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.header !== undefined) {
            types_js_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_js_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_js_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            types_js_1.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_js_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_js_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_js_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastCommit = types_js_1.Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? types_js_1.Header.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? types_js_1.Data.fromJSON(object.data) : undefined,
            evidence: isSet(object.evidence)
                ? evidence_js_1.EvidenceList.fromJSON(object.evidence)
                : undefined,
            lastCommit: isSet(object.lastCommit)
                ? types_js_1.Commit.fromJSON(object.lastCommit)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? types_js_1.Header.toJSON(message.header) : undefined);
        message.data !== undefined &&
            (obj.data = message.data ? types_js_1.Data.toJSON(message.data) : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? evidence_js_1.EvidenceList.toJSON(message.evidence)
                : undefined);
        message.lastCommit !== undefined &&
            (obj.lastCommit = message.lastCommit
                ? types_js_1.Commit.toJSON(message.lastCommit)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBlock();
        message.header =
            object.header !== undefined && object.header !== null
                ? types_js_1.Header.fromPartial(object.header)
                : undefined;
        message.data =
            object.data !== undefined && object.data !== null
                ? types_js_1.Data.fromPartial(object.data)
                : undefined;
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? evidence_js_1.EvidenceList.fromPartial(object.evidence)
                : undefined;
        message.lastCommit =
            object.lastCommit !== undefined && object.lastCommit !== null
                ? types_js_1.Commit.fromPartial(object.lastCommit)
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
//# sourceMappingURL=block.js.map