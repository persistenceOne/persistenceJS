"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteSetMaj23 = exports.VoteSetBits = exports.Vote = exports.ProposalPOL = exports.Proposal = exports.NewValidBlock = exports.NewRoundStep = exports.Message = exports.HasVote = exports.BlockPart = void 0;

var _types = require("../types/types");

var _types2 = require("../libs/bits/types");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function createBaseNewRoundStep() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    step: 0,
    secondsSinceStartTime: _helpers.Long.ZERO,
    lastCommitRound: 0
  };
}

var NewRoundStep = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.step !== 0) {
      writer.uint32(24).uint32(message.step);
    }

    if (!message.secondsSinceStartTime.isZero()) {
      writer.uint32(32).int64(message.secondsSinceStartTime);
    }

    if (message.lastCommitRound !== 0) {
      writer.uint32(40).int32(message.lastCommitRound);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNewRoundStep();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.step = reader.uint32();
          break;

        case 4:
          message.secondsSinceStartTime = reader.int64();
          break;

        case 5:
          message.lastCommitRound = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      step: (0, _helpers.isSet)(object.step) ? Number(object.step) : 0,
      secondsSinceStartTime: (0, _helpers.isSet)(object.secondsSinceStartTime) ? _helpers.Long.fromString(object.secondsSinceStartTime) : _helpers.Long.ZERO,
      lastCommitRound: (0, _helpers.isSet)(object.lastCommitRound) ? Number(object.lastCommitRound) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.step !== undefined && (obj.step = Math.round(message.step));
    message.secondsSinceStartTime !== undefined && (obj.secondsSinceStartTime = (message.secondsSinceStartTime || _helpers.Long.ZERO).toString());
    message.lastCommitRound !== undefined && (obj.lastCommitRound = Math.round(message.lastCommitRound));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round, _object$step, _object$lastCommitRou;

    var message = createBaseNewRoundStep();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.step = (_object$step = object.step) !== null && _object$step !== void 0 ? _object$step : 0;
    message.secondsSinceStartTime = object.secondsSinceStartTime !== undefined && object.secondsSinceStartTime !== null ? _helpers.Long.fromValue(object.secondsSinceStartTime) : _helpers.Long.ZERO;
    message.lastCommitRound = (_object$lastCommitRou = object.lastCommitRound) !== null && _object$lastCommitRou !== void 0 ? _object$lastCommitRou : 0;
    return message;
  }
};
exports.NewRoundStep = NewRoundStep;

function createBaseNewValidBlock() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    blockPartSetHeader: undefined,
    blockParts: undefined,
    isCommit: false
  };
}

var NewValidBlock = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.blockPartSetHeader !== undefined) {
      _types.PartSetHeader.encode(message.blockPartSetHeader, writer.uint32(26).fork()).ldelim();
    }

    if (message.blockParts !== undefined) {
      _types2.BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
    }

    if (message.isCommit === true) {
      writer.uint32(40).bool(message.isCommit);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNewValidBlock();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.blockPartSetHeader = _types.PartSetHeader.decode(reader, reader.uint32());
          break;

        case 4:
          message.blockParts = _types2.BitArray.decode(reader, reader.uint32());
          break;

        case 5:
          message.isCommit = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      blockPartSetHeader: (0, _helpers.isSet)(object.blockPartSetHeader) ? _types.PartSetHeader.fromJSON(object.blockPartSetHeader) : undefined,
      blockParts: (0, _helpers.isSet)(object.blockParts) ? _types2.BitArray.fromJSON(object.blockParts) : undefined,
      isCommit: (0, _helpers.isSet)(object.isCommit) ? Boolean(object.isCommit) : false
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockPartSetHeader !== undefined && (obj.blockPartSetHeader = message.blockPartSetHeader ? _types.PartSetHeader.toJSON(message.blockPartSetHeader) : undefined);
    message.blockParts !== undefined && (obj.blockParts = message.blockParts ? _types2.BitArray.toJSON(message.blockParts) : undefined);
    message.isCommit !== undefined && (obj.isCommit = message.isCommit);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round2, _object$isCommit;

    var message = createBaseNewValidBlock();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.blockPartSetHeader = object.blockPartSetHeader !== undefined && object.blockPartSetHeader !== null ? _types.PartSetHeader.fromPartial(object.blockPartSetHeader) : undefined;
    message.blockParts = object.blockParts !== undefined && object.blockParts !== null ? _types2.BitArray.fromPartial(object.blockParts) : undefined;
    message.isCommit = (_object$isCommit = object.isCommit) !== null && _object$isCommit !== void 0 ? _object$isCommit : false;
    return message;
  }
};
exports.NewValidBlock = NewValidBlock;

function createBaseProposal() {
  return {
    proposal: undefined
  };
}

var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? _types.Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }
};
exports.Proposal = Proposal;

function createBaseProposalPOL() {
  return {
    height: _helpers.Long.ZERO,
    proposalPolRound: 0,
    proposalPol: undefined
  };
}

var ProposalPOL = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.proposalPolRound !== 0) {
      writer.uint32(16).int32(message.proposalPolRound);
    }

    if (message.proposalPol !== undefined) {
      _types2.BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposalPOL();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.proposalPolRound = reader.int32();
          break;

        case 3:
          message.proposalPol = _types2.BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      proposalPolRound: (0, _helpers.isSet)(object.proposalPolRound) ? Number(object.proposalPolRound) : 0,
      proposalPol: (0, _helpers.isSet)(object.proposalPol) ? _types2.BitArray.fromJSON(object.proposalPol) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.proposalPolRound !== undefined && (obj.proposalPolRound = Math.round(message.proposalPolRound));
    message.proposalPol !== undefined && (obj.proposalPol = message.proposalPol ? _types2.BitArray.toJSON(message.proposalPol) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$proposalPolRo;

    var message = createBaseProposalPOL();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.proposalPolRound = (_object$proposalPolRo = object.proposalPolRound) !== null && _object$proposalPolRo !== void 0 ? _object$proposalPolRo : 0;
    message.proposalPol = object.proposalPol !== undefined && object.proposalPol !== null ? _types2.BitArray.fromPartial(object.proposalPol) : undefined;
    return message;
  }
};
exports.ProposalPOL = ProposalPOL;

function createBaseBlockPart() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    part: undefined
  };
}

var BlockPart = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.part !== undefined) {
      _types.Part.encode(message.part, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockPart();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.part = _types.Part.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      part: (0, _helpers.isSet)(object.part) ? _types.Part.fromJSON(object.part) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.part !== undefined && (obj.part = message.part ? _types.Part.toJSON(message.part) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round3;

    var message = createBaseBlockPart();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.part = object.part !== undefined && object.part !== null ? _types.Part.fromPartial(object.part) : undefined;
    return message;
  }
};
exports.BlockPart = BlockPart;

function createBaseVote() {
  return {
    vote: undefined
  };
}

var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = _types.Vote.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.vote !== undefined && (obj.vote = message.vote ? _types.Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVote();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  }
};
exports.Vote = Vote;

function createBaseHasVote() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    type: 0,
    index: 0
  };
}

var HasVote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.index !== 0) {
      writer.uint32(32).int32(message.index);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHasVote();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.type = reader.int32();
          break;

        case 4:
          message.index = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : 0,
      index: (0, _helpers.isSet)(object.index) ? Number(object.index) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.type !== undefined && (obj.type = (0, _types.signedMsgTypeToJSON)(message.type));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round4, _object$type, _object$index;

    var message = createBaseHasVote();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round4 = object.round) !== null && _object$round4 !== void 0 ? _object$round4 : 0;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    return message;
  }
};
exports.HasVote = HasVote;

function createBaseVoteSetMaj23() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    type: 0,
    blockId: undefined
  };
}

var VoteSetMaj23 = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteSetMaj23();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.type = reader.int32();
          break;

        case 4:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : 0,
      blockId: (0, _helpers.isSet)(object.blockId) ? _types.BlockID.fromJSON(object.blockId) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.type !== undefined && (obj.type = (0, _types.signedMsgTypeToJSON)(message.type));
    message.blockId !== undefined && (obj.blockId = message.blockId ? _types.BlockID.toJSON(message.blockId) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round5, _object$type2;

    var message = createBaseVoteSetMaj23();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round5 = object.round) !== null && _object$round5 !== void 0 ? _object$round5 : 0;
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    return message;
  }
};
exports.VoteSetMaj23 = VoteSetMaj23;

function createBaseVoteSetBits() {
  return {
    height: _helpers.Long.ZERO,
    round: 0,
    type: 0,
    blockId: undefined,
    votes: undefined
  };
}

var VoteSetBits = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.votes !== undefined) {
      _types2.BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVoteSetBits();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.type = reader.int32();
          break;

        case 4:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.votes = _types2.BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromString(object.height) : _helpers.Long.ZERO,
      round: (0, _helpers.isSet)(object.round) ? Number(object.round) : 0,
      type: (0, _helpers.isSet)(object.type) ? (0, _types.signedMsgTypeFromJSON)(object.type) : 0,
      blockId: (0, _helpers.isSet)(object.blockId) ? _types.BlockID.fromJSON(object.blockId) : undefined,
      votes: (0, _helpers.isSet)(object.votes) ? _types2.BitArray.fromJSON(object.votes) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.type !== undefined && (obj.type = (0, _types.signedMsgTypeToJSON)(message.type));
    message.blockId !== undefined && (obj.blockId = message.blockId ? _types.BlockID.toJSON(message.blockId) : undefined);
    message.votes !== undefined && (obj.votes = message.votes ? _types2.BitArray.toJSON(message.votes) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$round6, _object$type3;

    var message = createBaseVoteSetBits();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.round = (_object$round6 = object.round) !== null && _object$round6 !== void 0 ? _object$round6 : 0;
    message.type = (_object$type3 = object.type) !== null && _object$type3 !== void 0 ? _object$type3 : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.votes = object.votes !== undefined && object.votes !== null ? _types2.BitArray.fromPartial(object.votes) : undefined;
    return message;
  }
};
exports.VoteSetBits = VoteSetBits;

function createBaseMessage() {
  return {
    newRoundStep: undefined,
    newValidBlock: undefined,
    proposal: undefined,
    proposalPol: undefined,
    blockPart: undefined,
    vote: undefined,
    hasVote: undefined,
    voteSetMaj23: undefined,
    voteSetBits: undefined
  };
}

var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.newRoundStep !== undefined) {
      NewRoundStep.encode(message.newRoundStep, writer.uint32(10).fork()).ldelim();
    }

    if (message.newValidBlock !== undefined) {
      NewValidBlock.encode(message.newValidBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
    }

    if (message.proposalPol !== undefined) {
      ProposalPOL.encode(message.proposalPol, writer.uint32(34).fork()).ldelim();
    }

    if (message.blockPart !== undefined) {
      BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
    }

    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
    }

    if (message.hasVote !== undefined) {
      HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
    }

    if (message.voteSetMaj23 !== undefined) {
      VoteSetMaj23.encode(message.voteSetMaj23, writer.uint32(66).fork()).ldelim();
    }

    if (message.voteSetBits !== undefined) {
      VoteSetBits.encode(message.voteSetBits, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessage();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newRoundStep = NewRoundStep.decode(reader, reader.uint32());
          break;

        case 2:
          message.newValidBlock = NewValidBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;

        case 4:
          message.proposalPol = ProposalPOL.decode(reader, reader.uint32());
          break;

        case 5:
          message.blockPart = BlockPart.decode(reader, reader.uint32());
          break;

        case 6:
          message.vote = Vote.decode(reader, reader.uint32());
          break;

        case 7:
          message.hasVote = HasVote.decode(reader, reader.uint32());
          break;

        case 8:
          message.voteSetMaj23 = VoteSetMaj23.decode(reader, reader.uint32());
          break;

        case 9:
          message.voteSetBits = VoteSetBits.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      newRoundStep: (0, _helpers.isSet)(object.newRoundStep) ? NewRoundStep.fromJSON(object.newRoundStep) : undefined,
      newValidBlock: (0, _helpers.isSet)(object.newValidBlock) ? NewValidBlock.fromJSON(object.newValidBlock) : undefined,
      proposal: (0, _helpers.isSet)(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      proposalPol: (0, _helpers.isSet)(object.proposalPol) ? ProposalPOL.fromJSON(object.proposalPol) : undefined,
      blockPart: (0, _helpers.isSet)(object.blockPart) ? BlockPart.fromJSON(object.blockPart) : undefined,
      vote: (0, _helpers.isSet)(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      hasVote: (0, _helpers.isSet)(object.hasVote) ? HasVote.fromJSON(object.hasVote) : undefined,
      voteSetMaj23: (0, _helpers.isSet)(object.voteSetMaj23) ? VoteSetMaj23.fromJSON(object.voteSetMaj23) : undefined,
      voteSetBits: (0, _helpers.isSet)(object.voteSetBits) ? VoteSetBits.fromJSON(object.voteSetBits) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.newRoundStep !== undefined && (obj.newRoundStep = message.newRoundStep ? NewRoundStep.toJSON(message.newRoundStep) : undefined);
    message.newValidBlock !== undefined && (obj.newValidBlock = message.newValidBlock ? NewValidBlock.toJSON(message.newValidBlock) : undefined);
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    message.proposalPol !== undefined && (obj.proposalPol = message.proposalPol ? ProposalPOL.toJSON(message.proposalPol) : undefined);
    message.blockPart !== undefined && (obj.blockPart = message.blockPart ? BlockPart.toJSON(message.blockPart) : undefined);
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.hasVote !== undefined && (obj.hasVote = message.hasVote ? HasVote.toJSON(message.hasVote) : undefined);
    message.voteSetMaj23 !== undefined && (obj.voteSetMaj23 = message.voteSetMaj23 ? VoteSetMaj23.toJSON(message.voteSetMaj23) : undefined);
    message.voteSetBits !== undefined && (obj.voteSetBits = message.voteSetBits ? VoteSetBits.toJSON(message.voteSetBits) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
    message.newRoundStep = object.newRoundStep !== undefined && object.newRoundStep !== null ? NewRoundStep.fromPartial(object.newRoundStep) : undefined;
    message.newValidBlock = object.newValidBlock !== undefined && object.newValidBlock !== null ? NewValidBlock.fromPartial(object.newValidBlock) : undefined;
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.proposalPol = object.proposalPol !== undefined && object.proposalPol !== null ? ProposalPOL.fromPartial(object.proposalPol) : undefined;
    message.blockPart = object.blockPart !== undefined && object.blockPart !== null ? BlockPart.fromPartial(object.blockPart) : undefined;
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.hasVote = object.hasVote !== undefined && object.hasVote !== null ? HasVote.fromPartial(object.hasVote) : undefined;
    message.voteSetMaj23 = object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null ? VoteSetMaj23.fromPartial(object.voteSetMaj23) : undefined;
    message.voteSetBits = object.voteSetBits !== undefined && object.voteSetBits !== null ? VoteSetBits.fromPartial(object.voteSetBits) : undefined;
    return message;
  }
};
exports.Message = Message;