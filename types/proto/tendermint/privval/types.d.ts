import { PublicKey } from "../crypto/keys";
import { Vote, Proposal } from "../types/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum Errors {
    ERRORS_UNKNOWN = 0,
    ERRORS_UNEXPECTED_RESPONSE = 1,
    ERRORS_NO_CONNECTION = 2,
    ERRORS_CONNECTION_TIMEOUT = 3,
    ERRORS_READ_TIMEOUT = 4,
    ERRORS_WRITE_TIMEOUT = 5,
    UNRECOGNIZED = -1
}
export declare function errorsFromJSON(object: any): Errors;
export declare function errorsToJSON(object: Errors): string;
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
export interface PingRequest {
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {
}
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
export declare const RemoteSignerError: {
    encode(message: RemoteSignerError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSignerError;
    fromJSON(object: any): RemoteSignerError;
    toJSON(message: RemoteSignerError): unknown;
    fromPartial(object: DeepPartial<RemoteSignerError>): RemoteSignerError;
};
export declare const PubKeyRequest: {
    encode(message: PubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyRequest;
    fromJSON(object: any): PubKeyRequest;
    toJSON(message: PubKeyRequest): unknown;
    fromPartial(object: DeepPartial<PubKeyRequest>): PubKeyRequest;
};
export declare const PubKeyResponse: {
    encode(message: PubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyResponse;
    fromJSON(object: any): PubKeyResponse;
    toJSON(message: PubKeyResponse): unknown;
    fromPartial(object: DeepPartial<PubKeyResponse>): PubKeyResponse;
};
export declare const SignVoteRequest: {
    encode(message: SignVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignVoteRequest;
    fromJSON(object: any): SignVoteRequest;
    toJSON(message: SignVoteRequest): unknown;
    fromPartial(object: DeepPartial<SignVoteRequest>): SignVoteRequest;
};
export declare const SignedVoteResponse: {
    encode(message: SignedVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedVoteResponse;
    fromJSON(object: any): SignedVoteResponse;
    toJSON(message: SignedVoteResponse): unknown;
    fromPartial(object: DeepPartial<SignedVoteResponse>): SignedVoteResponse;
};
export declare const SignProposalRequest: {
    encode(message: SignProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignProposalRequest;
    fromJSON(object: any): SignProposalRequest;
    toJSON(message: SignProposalRequest): unknown;
    fromPartial(object: DeepPartial<SignProposalRequest>): SignProposalRequest;
};
export declare const SignedProposalResponse: {
    encode(message: SignedProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedProposalResponse;
    fromJSON(object: any): SignedProposalResponse;
    toJSON(message: SignedProposalResponse): unknown;
    fromPartial(object: DeepPartial<SignedProposalResponse>): SignedProposalResponse;
};
export declare const PingRequest: {
    encode(_: PingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest;
    fromJSON(_: any): PingRequest;
    toJSON(_: PingRequest): unknown;
    fromPartial(_: DeepPartial<PingRequest>): PingRequest;
};
export declare const PingResponse: {
    encode(_: PingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse;
    fromJSON(_: any): PingResponse;
    toJSON(_: PingResponse): unknown;
    fromPartial(_: DeepPartial<PingResponse>): PingResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: DeepPartial<Message>): Message;
};
