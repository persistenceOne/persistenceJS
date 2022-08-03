"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignedVoteResponse = exports.SignedProposalResponse = exports.SignVoteRequest = exports.SignProposalRequest = exports.RemoteSignerError = exports.PubKeyResponse = exports.PubKeyRequest = exports.PingResponse = exports.PingRequest = exports.Message = exports.Errors = void 0;
exports.errorsFromJSON = errorsFromJSON;
exports.errorsToJSON = errorsToJSON;

var _keys = require("../crypto/keys");

var _types = require("../types/types");

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _helpers = require("@osmonauts/helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Errors;
exports.Errors = Errors;

(function (Errors) {
  Errors[Errors["ERRORS_UNKNOWN"] = 0] = "ERRORS_UNKNOWN";
  Errors[Errors["ERRORS_UNEXPECTED_RESPONSE"] = 1] = "ERRORS_UNEXPECTED_RESPONSE";
  Errors[Errors["ERRORS_NO_CONNECTION"] = 2] = "ERRORS_NO_CONNECTION";
  Errors[Errors["ERRORS_CONNECTION_TIMEOUT"] = 3] = "ERRORS_CONNECTION_TIMEOUT";
  Errors[Errors["ERRORS_READ_TIMEOUT"] = 4] = "ERRORS_READ_TIMEOUT";
  Errors[Errors["ERRORS_WRITE_TIMEOUT"] = 5] = "ERRORS_WRITE_TIMEOUT";
  Errors[Errors["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Errors || (exports.Errors = Errors = {}));

function errorsFromJSON(object) {
  switch (object) {
    case 0:
    case "ERRORS_UNKNOWN":
      return Errors.ERRORS_UNKNOWN;

    case 1:
    case "ERRORS_UNEXPECTED_RESPONSE":
      return Errors.ERRORS_UNEXPECTED_RESPONSE;

    case 2:
    case "ERRORS_NO_CONNECTION":
      return Errors.ERRORS_NO_CONNECTION;

    case 3:
    case "ERRORS_CONNECTION_TIMEOUT":
      return Errors.ERRORS_CONNECTION_TIMEOUT;

    case 4:
    case "ERRORS_READ_TIMEOUT":
      return Errors.ERRORS_READ_TIMEOUT;

    case 5:
    case "ERRORS_WRITE_TIMEOUT":
      return Errors.ERRORS_WRITE_TIMEOUT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Errors.UNRECOGNIZED;
  }
}

function errorsToJSON(object) {
  switch (object) {
    case Errors.ERRORS_UNKNOWN:
      return "ERRORS_UNKNOWN";

    case Errors.ERRORS_UNEXPECTED_RESPONSE:
      return "ERRORS_UNEXPECTED_RESPONSE";

    case Errors.ERRORS_NO_CONNECTION:
      return "ERRORS_NO_CONNECTION";

    case Errors.ERRORS_CONNECTION_TIMEOUT:
      return "ERRORS_CONNECTION_TIMEOUT";

    case Errors.ERRORS_READ_TIMEOUT:
      return "ERRORS_READ_TIMEOUT";

    case Errors.ERRORS_WRITE_TIMEOUT:
      return "ERRORS_WRITE_TIMEOUT";

    default:
      return "UNKNOWN";
  }
}

function createBaseRemoteSignerError() {
  return {
    code: 0,
    description: ""
  };
}

var RemoteSignerError = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRemoteSignerError();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;

        case 2:
          message.description = reader.string();
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
      code: (0, _helpers.isSet)(object.code) ? Number(object.code) : 0,
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$code, _object$description;

    var message = createBaseRemoteSignerError();
    message.code = (_object$code = object.code) !== null && _object$code !== void 0 ? _object$code : 0;
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    return message;
  }
};
exports.RemoteSignerError = RemoteSignerError;

function createBasePubKeyRequest() {
  return {
    chainId: ""
  };
}

var PubKeyRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePubKeyRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
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
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId;

    var message = createBasePubKeyRequest();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    return message;
  }
};
exports.PubKeyRequest = PubKeyRequest;

function createBasePubKeyResponse() {
  return {
    pubKey: undefined,
    error: undefined
  };
}

var PubKeyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.pubKey !== undefined) {
      _keys.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePubKeyResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = _keys.PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
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
      pubKey: (0, _helpers.isSet)(object.pubKey) ? _keys.PublicKey.fromJSON(object.pubKey) : undefined,
      error: (0, _helpers.isSet)(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? _keys.PublicKey.toJSON(message.pubKey) : undefined);
    message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBasePubKeyResponse();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _keys.PublicKey.fromPartial(object.pubKey) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
exports.PubKeyResponse = PubKeyResponse;

function createBaseSignVoteRequest() {
  return {
    vote: undefined,
    chainId: ""
  };
}

var SignVoteRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignVoteRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = _types.Vote.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
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
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined,
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.vote !== undefined && (obj.vote = message.vote ? _types.Vote.toJSON(message.vote) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId2;

    var message = createBaseSignVoteRequest();
    message.vote = object.vote !== undefined && object.vote !== null ? _types.Vote.fromPartial(object.vote) : undefined;
    message.chainId = (_object$chainId2 = object.chainId) !== null && _object$chainId2 !== void 0 ? _object$chainId2 : "";
    return message;
  }
};
exports.SignVoteRequest = SignVoteRequest;

function createBaseSignedVoteResponse() {
  return {
    vote: undefined,
    error: undefined
  };
}

var SignedVoteResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignedVoteResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = _types.Vote.decode(reader, reader.uint32());
          break;

        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
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
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined,
      error: (0, _helpers.isSet)(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.vote !== undefined && (obj.vote = message.vote ? _types.Vote.toJSON(message.vote) : undefined);
    message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignedVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? _types.Vote.fromPartial(object.vote) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
exports.SignedVoteResponse = SignedVoteResponse;

function createBaseSignProposalRequest() {
  return {
    proposal: undefined,
    chainId: ""
  };
}

var SignProposalRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignProposalRequest();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
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
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined,
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? _types.Proposal.toJSON(message.proposal) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId3;

    var message = createBaseSignProposalRequest();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? _types.Proposal.fromPartial(object.proposal) : undefined;
    message.chainId = (_object$chainId3 = object.chainId) !== null && _object$chainId3 !== void 0 ? _object$chainId3 : "";
    return message;
  }
};
exports.SignProposalRequest = SignProposalRequest;

function createBaseSignedProposalResponse() {
  return {
    proposal: undefined,
    error: undefined
  };
}

var SignedProposalResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignedProposalResponse();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
          break;

        case 2:
          message.error = RemoteSignerError.decode(reader, reader.uint32());
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
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined,
      error: (0, _helpers.isSet)(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? _types.Proposal.toJSON(message.proposal) : undefined);
    message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignedProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? _types.Proposal.fromPartial(object.proposal) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }
};
exports.SignedProposalResponse = SignedProposalResponse;

function createBasePingRequest() {
  return {};
}

var PingRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePingRequest();

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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBasePingRequest();
    return message;
  }
};
exports.PingRequest = PingRequest;

function createBasePingResponse() {
  return {};
}

var PingResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePingResponse();

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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBasePingResponse();
    return message;
  }
};
exports.PingResponse = PingResponse;

function createBaseMessage() {
  return {
    pubKeyRequest: undefined,
    pubKeyResponse: undefined,
    signVoteRequest: undefined,
    signedVoteResponse: undefined,
    signProposalRequest: undefined,
    signedProposalResponse: undefined,
    pingRequest: undefined,
    pingResponse: undefined
  };
}

var Message = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();

    if (message.pubKeyRequest !== undefined) {
      PubKeyRequest.encode(message.pubKeyRequest, writer.uint32(10).fork()).ldelim();
    }

    if (message.pubKeyResponse !== undefined) {
      PubKeyResponse.encode(message.pubKeyResponse, writer.uint32(18).fork()).ldelim();
    }

    if (message.signVoteRequest !== undefined) {
      SignVoteRequest.encode(message.signVoteRequest, writer.uint32(26).fork()).ldelim();
    }

    if (message.signedVoteResponse !== undefined) {
      SignedVoteResponse.encode(message.signedVoteResponse, writer.uint32(34).fork()).ldelim();
    }

    if (message.signProposalRequest !== undefined) {
      SignProposalRequest.encode(message.signProposalRequest, writer.uint32(42).fork()).ldelim();
    }

    if (message.signedProposalResponse !== undefined) {
      SignedProposalResponse.encode(message.signedProposalResponse, writer.uint32(50).fork()).ldelim();
    }

    if (message.pingRequest !== undefined) {
      PingRequest.encode(message.pingRequest, writer.uint32(58).fork()).ldelim();
    }

    if (message.pingResponse !== undefined) {
      PingResponse.encode(message.pingResponse, writer.uint32(66).fork()).ldelim();
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
          message.pubKeyRequest = PubKeyRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.pubKeyResponse = PubKeyResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.signVoteRequest = SignVoteRequest.decode(reader, reader.uint32());
          break;

        case 4:
          message.signedVoteResponse = SignedVoteResponse.decode(reader, reader.uint32());
          break;

        case 5:
          message.signProposalRequest = SignProposalRequest.decode(reader, reader.uint32());
          break;

        case 6:
          message.signedProposalResponse = SignedProposalResponse.decode(reader, reader.uint32());
          break;

        case 7:
          message.pingRequest = PingRequest.decode(reader, reader.uint32());
          break;

        case 8:
          message.pingResponse = PingResponse.decode(reader, reader.uint32());
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
      pubKeyRequest: (0, _helpers.isSet)(object.pubKeyRequest) ? PubKeyRequest.fromJSON(object.pubKeyRequest) : undefined,
      pubKeyResponse: (0, _helpers.isSet)(object.pubKeyResponse) ? PubKeyResponse.fromJSON(object.pubKeyResponse) : undefined,
      signVoteRequest: (0, _helpers.isSet)(object.signVoteRequest) ? SignVoteRequest.fromJSON(object.signVoteRequest) : undefined,
      signedVoteResponse: (0, _helpers.isSet)(object.signedVoteResponse) ? SignedVoteResponse.fromJSON(object.signedVoteResponse) : undefined,
      signProposalRequest: (0, _helpers.isSet)(object.signProposalRequest) ? SignProposalRequest.fromJSON(object.signProposalRequest) : undefined,
      signedProposalResponse: (0, _helpers.isSet)(object.signedProposalResponse) ? SignedProposalResponse.fromJSON(object.signedProposalResponse) : undefined,
      pingRequest: (0, _helpers.isSet)(object.pingRequest) ? PingRequest.fromJSON(object.pingRequest) : undefined,
      pingResponse: (0, _helpers.isSet)(object.pingResponse) ? PingResponse.fromJSON(object.pingResponse) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pubKeyRequest !== undefined && (obj.pubKeyRequest = message.pubKeyRequest ? PubKeyRequest.toJSON(message.pubKeyRequest) : undefined);
    message.pubKeyResponse !== undefined && (obj.pubKeyResponse = message.pubKeyResponse ? PubKeyResponse.toJSON(message.pubKeyResponse) : undefined);
    message.signVoteRequest !== undefined && (obj.signVoteRequest = message.signVoteRequest ? SignVoteRequest.toJSON(message.signVoteRequest) : undefined);
    message.signedVoteResponse !== undefined && (obj.signedVoteResponse = message.signedVoteResponse ? SignedVoteResponse.toJSON(message.signedVoteResponse) : undefined);
    message.signProposalRequest !== undefined && (obj.signProposalRequest = message.signProposalRequest ? SignProposalRequest.toJSON(message.signProposalRequest) : undefined);
    message.signedProposalResponse !== undefined && (obj.signedProposalResponse = message.signedProposalResponse ? SignedProposalResponse.toJSON(message.signedProposalResponse) : undefined);
    message.pingRequest !== undefined && (obj.pingRequest = message.pingRequest ? PingRequest.toJSON(message.pingRequest) : undefined);
    message.pingResponse !== undefined && (obj.pingResponse = message.pingResponse ? PingResponse.toJSON(message.pingResponse) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMessage();
    message.pubKeyRequest = object.pubKeyRequest !== undefined && object.pubKeyRequest !== null ? PubKeyRequest.fromPartial(object.pubKeyRequest) : undefined;
    message.pubKeyResponse = object.pubKeyResponse !== undefined && object.pubKeyResponse !== null ? PubKeyResponse.fromPartial(object.pubKeyResponse) : undefined;
    message.signVoteRequest = object.signVoteRequest !== undefined && object.signVoteRequest !== null ? SignVoteRequest.fromPartial(object.signVoteRequest) : undefined;
    message.signedVoteResponse = object.signedVoteResponse !== undefined && object.signedVoteResponse !== null ? SignedVoteResponse.fromPartial(object.signedVoteResponse) : undefined;
    message.signProposalRequest = object.signProposalRequest !== undefined && object.signProposalRequest !== null ? SignProposalRequest.fromPartial(object.signProposalRequest) : undefined;
    message.signedProposalResponse = object.signedProposalResponse !== undefined && object.signedProposalResponse !== null ? SignedProposalResponse.fromPartial(object.signedProposalResponse) : undefined;
    message.pingRequest = object.pingRequest !== undefined && object.pingRequest !== null ? PingRequest.fromPartial(object.pingRequest) : undefined;
    message.pingResponse = object.pingResponse !== undefined && object.pingResponse !== null ? PingResponse.fromPartial(object.pingResponse) : undefined;
    return message;
  }
};
exports.Message = Message;