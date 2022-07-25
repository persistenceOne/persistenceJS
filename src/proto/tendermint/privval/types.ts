import { PublicKey } from "../crypto/keys";
import { Vote, Proposal } from "../types/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export enum Errors {
  ERRORS_UNKNOWN = 0,
  ERRORS_UNEXPECTED_RESPONSE = 1,
  ERRORS_NO_CONNECTION = 2,
  ERRORS_CONNECTION_TIMEOUT = 3,
  ERRORS_READ_TIMEOUT = 4,
  ERRORS_WRITE_TIMEOUT = 5,
  UNRECOGNIZED = -1,
}
export function errorsFromJSON(object: any): Errors {
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
export function errorsToJSON(object: Errors): string {
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
export interface RemoteSignerError {
  code: number;
  description: string;
}

/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
  chainId: string;
}

/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
  pubKey: PublicKey;
  error: RemoteSignerError;
}

/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
  vote: Vote;
  chainId: string;
}

/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
  vote: Vote;
  error: RemoteSignerError;
}

/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
  proposal: Proposal;
  chainId: string;
}

/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
  proposal: Proposal;
  error: RemoteSignerError;
}

/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {}

/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {}
export interface Message {
  pubKeyRequest?: PubKeyRequest;
  pubKeyResponse?: PubKeyResponse;
  signVoteRequest?: SignVoteRequest;
  signedVoteResponse?: SignedVoteResponse;
  signProposalRequest?: SignProposalRequest;
  signedProposalResponse?: SignedProposalResponse;
  pingRequest?: PingRequest;
  pingResponse?: PingResponse;
}

function createBaseRemoteSignerError(): RemoteSignerError {
  return {
    code: 0,
    description: ""
  };
}

export const RemoteSignerError = {
  encode(message: RemoteSignerError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSignerError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteSignerError();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object: any): RemoteSignerError {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: RemoteSignerError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoteSignerError>): RemoteSignerError {
    const message = createBaseRemoteSignerError();
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    return message;
  }

};

function createBasePubKeyRequest(): PubKeyRequest {
  return {
    chainId: ""
  };
}

export const PubKeyRequest = {
  encode(message: PubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object: any): PubKeyRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },

  toJSON(message: PubKeyRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<PubKeyRequest>): PubKeyRequest {
    const message = createBasePubKeyRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBasePubKeyResponse(): PubKeyResponse {
  return {
    pubKey: undefined,
    error: undefined
  };
}

export const PubKeyResponse = {
  encode(message: PubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
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

  fromJSON(object: any): PubKeyResponse {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },

  toJSON(message: PubKeyResponse): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PubKeyResponse>): PubKeyResponse {
    const message = createBasePubKeyResponse();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }

};

function createBaseSignVoteRequest(): SignVoteRequest {
  return {
    vote: undefined,
    chainId: ""
  };
}

export const SignVoteRequest = {
  encode(message: SignVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignVoteRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
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

  fromJSON(object: any): SignVoteRequest {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },

  toJSON(message: SignVoteRequest): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<SignVoteRequest>): SignVoteRequest {
    const message = createBaseSignVoteRequest();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseSignedVoteResponse(): SignedVoteResponse {
  return {
    vote: undefined,
    error: undefined
  };
}

export const SignedVoteResponse = {
  encode(message: SignedVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
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

  fromJSON(object: any): SignedVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },

  toJSON(message: SignedVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedVoteResponse>): SignedVoteResponse {
    const message = createBaseSignedVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }

};

function createBaseSignProposalRequest(): SignProposalRequest {
  return {
    proposal: undefined,
    chainId: ""
  };
}

export const SignProposalRequest = {
  encode(message: SignProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignProposalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
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

  fromJSON(object: any): SignProposalRequest {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },

  toJSON(message: SignProposalRequest): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<SignProposalRequest>): SignProposalRequest {
    const message = createBaseSignProposalRequest();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseSignedProposalResponse(): SignedProposalResponse {
  return {
    proposal: undefined,
    error: undefined
  };
}

export const SignedProposalResponse = {
  encode(message: SignedProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
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

  fromJSON(object: any): SignedProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined
    };
  },

  toJSON(message: SignedProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    message.error !== undefined && (obj.error = message.error ? RemoteSignerError.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedProposalResponse>): SignedProposalResponse {
    const message = createBaseSignedProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    message.error = object.error !== undefined && object.error !== null ? RemoteSignerError.fromPartial(object.error) : undefined;
    return message;
  }

};

function createBasePingRequest(): PingRequest {
  return {};
}

export const PingRequest = {
  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): PingRequest {
    return {};
  },

  toJSON(_: PingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PingRequest>): PingRequest {
    const message = createBasePingRequest();
    return message;
  }

};

function createBasePingResponse(): PingResponse {
  return {};
}

export const PingResponse = {
  encode(_: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): PingResponse {
    return {};
  },

  toJSON(_: PingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PingResponse>): PingResponse {
    const message = createBasePingResponse();
    return message;
  }

};

function createBaseMessage(): Message {
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

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

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

  fromJSON(object: any): Message {
    return {
      pubKeyRequest: isSet(object.pubKeyRequest) ? PubKeyRequest.fromJSON(object.pubKeyRequest) : undefined,
      pubKeyResponse: isSet(object.pubKeyResponse) ? PubKeyResponse.fromJSON(object.pubKeyResponse) : undefined,
      signVoteRequest: isSet(object.signVoteRequest) ? SignVoteRequest.fromJSON(object.signVoteRequest) : undefined,
      signedVoteResponse: isSet(object.signedVoteResponse) ? SignedVoteResponse.fromJSON(object.signedVoteResponse) : undefined,
      signProposalRequest: isSet(object.signProposalRequest) ? SignProposalRequest.fromJSON(object.signProposalRequest) : undefined,
      signedProposalResponse: isSet(object.signedProposalResponse) ? SignedProposalResponse.fromJSON(object.signedProposalResponse) : undefined,
      pingRequest: isSet(object.pingRequest) ? PingRequest.fromJSON(object.pingRequest) : undefined,
      pingResponse: isSet(object.pingResponse) ? PingResponse.fromJSON(object.pingResponse) : undefined
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
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