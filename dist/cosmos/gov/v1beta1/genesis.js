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
var gov_js_1 = require("./gov.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.gov.v1beta1";
function createBaseGenesisState() {
    return {
        startingProposalId: long_1.default.UZERO,
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: undefined,
        votingParams: undefined,
        tallyParams: undefined,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.startingProposalId.isZero()) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (var _i = 0, _a = message.deposits; _i < _a.length; _i++) {
            var v = _a[_i];
            gov_js_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.votes; _b < _c.length; _b++) {
            var v = _c[_b];
            gov_js_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.proposals; _d < _e.length; _d++) {
            var v = _e[_d];
            gov_js_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_js_1.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            gov_js_1.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_js_1.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
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
                    message.startingProposalId = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(gov_js_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_js_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_js_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = gov_js_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = gov_js_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tallyParams = gov_js_1.TallyParams.decode(reader, reader.uint32());
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
            startingProposalId: isSet(object.startingProposalId)
                ? long_1.default.fromValue(object.startingProposalId)
                : long_1.default.UZERO,
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits)
                ? object.deposits.map(function (e) { return gov_js_1.Deposit.fromJSON(e); })
                : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes)
                ? object.votes.map(function (e) { return gov_js_1.Vote.fromJSON(e); })
                : [],
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals)
                ? object.proposals.map(function (e) { return gov_js_1.Proposal.fromJSON(e); })
                : [],
            depositParams: isSet(object.depositParams)
                ? gov_js_1.DepositParams.fromJSON(object.depositParams)
                : undefined,
            votingParams: isSet(object.votingParams)
                ? gov_js_1.VotingParams.fromJSON(object.votingParams)
                : undefined,
            tallyParams: isSet(object.tallyParams)
                ? gov_js_1.TallyParams.fromJSON(object.tallyParams)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.startingProposalId !== undefined &&
            (obj.startingProposalId = (message.startingProposalId || long_1.default.UZERO).toString());
        if (message.deposits) {
            obj.deposits = message.deposits.map(function (e) {
                return e ? gov_js_1.Deposit.toJSON(e) : undefined;
            });
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return (e ? gov_js_1.Vote.toJSON(e) : undefined); });
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) {
                return e ? gov_js_1.Proposal.toJSON(e) : undefined;
            });
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined &&
            (obj.depositParams = message.depositParams
                ? gov_js_1.DepositParams.toJSON(message.depositParams)
                : undefined);
        message.votingParams !== undefined &&
            (obj.votingParams = message.votingParams
                ? gov_js_1.VotingParams.toJSON(message.votingParams)
                : undefined);
        message.tallyParams !== undefined &&
            (obj.tallyParams = message.tallyParams
                ? gov_js_1.TallyParams.toJSON(message.tallyParams)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGenesisState();
        message.startingProposalId =
            object.startingProposalId !== undefined &&
                object.startingProposalId !== null
                ? long_1.default.fromValue(object.startingProposalId)
                : long_1.default.UZERO;
        message.deposits =
            ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map(function (e) { return gov_js_1.Deposit.fromPartial(e); })) || [];
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return gov_js_1.Vote.fromPartial(e); })) || [];
        message.proposals =
            ((_c = object.proposals) === null || _c === void 0 ? void 0 : _c.map(function (e) { return gov_js_1.Proposal.fromPartial(e); })) || [];
        message.depositParams =
            object.depositParams !== undefined && object.depositParams !== null
                ? gov_js_1.DepositParams.fromPartial(object.depositParams)
                : undefined;
        message.votingParams =
            object.votingParams !== undefined && object.votingParams !== null
                ? gov_js_1.VotingParams.fromPartial(object.votingParams)
                : undefined;
        message.tallyParams =
            object.tallyParams !== undefined && object.tallyParams !== null
                ? gov_js_1.TallyParams.fromPartial(object.tallyParams)
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