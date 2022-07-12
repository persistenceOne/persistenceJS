import { PublicKey } from "../crypto/keys.js";
import { Vote, Proposal } from "../types/types.js";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.privval";
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
    pubKey?: PublicKey;
    error?: RemoteSignerError;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
    vote?: Vote;
    chainId: string;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
    vote?: Vote;
    error?: RemoteSignerError;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
    proposal?: Proposal;
    chainId: string;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
    proposal?: Proposal;
    error?: RemoteSignerError;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {
}
export interface Message {
    pubKeyRequest?: PubKeyRequest | undefined;
    pubKeyResponse?: PubKeyResponse | undefined;
    signVoteRequest?: SignVoteRequest | undefined;
    signedVoteResponse?: SignedVoteResponse | undefined;
    signProposalRequest?: SignProposalRequest | undefined;
    signedProposalResponse?: SignedProposalResponse | undefined;
    pingRequest?: PingRequest | undefined;
    pingResponse?: PingResponse | undefined;
}
export declare const RemoteSignerError: {
    encode(message: RemoteSignerError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoteSignerError;
    fromJSON(object: any): RemoteSignerError;
    toJSON(message: RemoteSignerError): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        description?: string | undefined;
    } & {
        code?: number | undefined;
        description?: string | undefined;
    } & Record<Exclude<keyof I, "code" | "description">, never>>(object: I): RemoteSignerError;
};
export declare const PubKeyRequest: {
    encode(message: PubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeyRequest;
    fromJSON(object: any): PubKeyRequest;
    toJSON(message: PubKeyRequest): unknown;
    fromPartial<I extends {
        chainId?: string | undefined;
    } & {
        chainId?: string | undefined;
    } & Record<Exclude<keyof I, "chainId">, never>>(object: I): PubKeyRequest;
};
export declare const PubKeyResponse: {
    encode(message: PubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeyResponse;
    fromJSON(object: any): PubKeyResponse;
    toJSON(message: PubKeyResponse): unknown;
    fromPartial<I extends {
        pubKey?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        error?: {
            code?: number | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        pubKey?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
        error?: ({
            code?: number | undefined;
            description?: string | undefined;
        } & {
            code?: number | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I["error"], "code" | "description">, never>) | undefined;
    } & Record<Exclude<keyof I, "error" | "pubKey">, never>>(object: I): PubKeyResponse;
};
export declare const SignVoteRequest: {
    encode(message: SignVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignVoteRequest;
    fromJSON(object: any): SignVoteRequest;
    toJSON(message: SignVoteRequest): unknown;
    fromPartial<I extends {
        vote?: {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        chainId?: string | undefined;
    } & {
        vote?: ({
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["vote"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            round?: number | undefined;
            blockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["vote"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
            } & Record<Exclude<keyof I["vote"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
            timestamp?: Date | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["vote"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
        chainId?: string | undefined;
    } & Record<Exclude<keyof I, "chainId" | "vote">, never>>(object: I): SignVoteRequest;
};
export declare const SignedVoteResponse: {
    encode(message: SignedVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedVoteResponse;
    fromJSON(object: any): SignedVoteResponse;
    toJSON(message: SignedVoteResponse): unknown;
    fromPartial<I extends {
        vote?: {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        error?: {
            code?: number | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        vote?: ({
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["vote"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            round?: number | undefined;
            blockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["vote"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
            } & Record<Exclude<keyof I["vote"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
            timestamp?: Date | undefined;
            validatorAddress?: Uint8Array | undefined;
            validatorIndex?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["vote"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
        error?: ({
            code?: number | undefined;
            description?: string | undefined;
        } & {
            code?: number | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I["error"], "code" | "description">, never>) | undefined;
    } & Record<Exclude<keyof I, "error" | "vote">, never>>(object: I): SignedVoteResponse;
};
export declare const SignProposalRequest: {
    encode(message: SignProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignProposalRequest;
    fromJSON(object: any): SignProposalRequest;
    toJSON(message: SignProposalRequest): unknown;
    fromPartial<I extends {
        proposal?: {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            polRound?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        chainId?: string | undefined;
    } & {
        proposal?: ({
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            polRound?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["proposal"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            round?: number | undefined;
            polRound?: number | undefined;
            blockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proposal"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
            } & Record<Exclude<keyof I["proposal"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
            timestamp?: Date | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["proposal"], "round" | "signature" | "type" | "height" | "blockId" | "timestamp" | "polRound">, never>) | undefined;
        chainId?: string | undefined;
    } & Record<Exclude<keyof I, "chainId" | "proposal">, never>>(object: I): SignProposalRequest;
};
export declare const SignedProposalResponse: {
    encode(message: SignedProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedProposalResponse;
    fromJSON(object: any): SignedProposalResponse;
    toJSON(message: SignedProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            polRound?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        error?: {
            code?: number | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        proposal?: ({
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | Long.Long | undefined;
            round?: number | undefined;
            polRound?: number | undefined;
            blockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: Date | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types.js").SignedMsgType | undefined;
            height?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["proposal"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            round?: number | undefined;
            polRound?: number | undefined;
            blockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proposal"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
            } & Record<Exclude<keyof I["proposal"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
            timestamp?: Date | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["proposal"], "round" | "signature" | "type" | "height" | "blockId" | "timestamp" | "polRound">, never>) | undefined;
        error?: ({
            code?: number | undefined;
            description?: string | undefined;
        } & {
            code?: number | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I["error"], "code" | "description">, never>) | undefined;
    } & Record<Exclude<keyof I, "error" | "proposal">, never>>(object: I): SignedProposalResponse;
};
export declare const PingRequest: {
    encode(_: PingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PingRequest;
    fromJSON(_: any): PingRequest;
    toJSON(_: PingRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PingRequest;
};
export declare const PingResponse: {
    encode(_: PingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PingResponse;
    fromJSON(_: any): PingResponse;
    toJSON(_: PingResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PingResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        pubKeyRequest?: {
            chainId?: string | undefined;
        } | undefined;
        pubKeyResponse?: {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } | undefined;
        signVoteRequest?: {
            vote?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chainId?: string | undefined;
        } | undefined;
        signedVoteResponse?: {
            vote?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } | undefined;
        signProposalRequest?: {
            proposal?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chainId?: string | undefined;
        } | undefined;
        signedProposalResponse?: {
            proposal?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } | undefined;
        pingRequest?: {} | undefined;
        pingResponse?: {} | undefined;
    } & {
        pubKeyRequest?: ({
            chainId?: string | undefined;
        } & {
            chainId?: string | undefined;
        } & Record<Exclude<keyof I["pubKeyRequest"], "chainId">, never>) | undefined;
        pubKeyResponse?: ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } & {
            pubKey?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["pubKeyResponse"]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                description?: string | undefined;
            } & {
                code?: number | undefined;
                description?: string | undefined;
            } & Record<Exclude<keyof I["pubKeyResponse"]["error"], "code" | "description">, never>) | undefined;
        } & Record<Exclude<keyof I["pubKeyResponse"], "error" | "pubKey">, never>) | undefined;
        signVoteRequest?: ({
            vote?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chainId?: string | undefined;
        } & {
            vote?: ({
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["signVoteRequest"]["vote"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["signVoteRequest"]["vote"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["signVoteRequest"]["vote"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["signVoteRequest"]["vote"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
            chainId?: string | undefined;
        } & Record<Exclude<keyof I["signVoteRequest"], "chainId" | "vote">, never>) | undefined;
        signedVoteResponse?: ({
            vote?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } & {
            vote?: ({
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["signedVoteResponse"]["vote"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["signedVoteResponse"]["vote"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["signedVoteResponse"]["vote"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                timestamp?: Date | undefined;
                validatorAddress?: Uint8Array | undefined;
                validatorIndex?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["signedVoteResponse"]["vote"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                description?: string | undefined;
            } & {
                code?: number | undefined;
                description?: string | undefined;
            } & Record<Exclude<keyof I["signedVoteResponse"]["error"], "code" | "description">, never>) | undefined;
        } & Record<Exclude<keyof I["signedVoteResponse"], "error" | "vote">, never>) | undefined;
        signProposalRequest?: ({
            proposal?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chainId?: string | undefined;
        } & {
            proposal?: ({
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["signProposalRequest"]["proposal"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["signProposalRequest"]["proposal"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["signProposalRequest"]["proposal"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["signProposalRequest"]["proposal"], "round" | "signature" | "type" | "height" | "blockId" | "timestamp" | "polRound">, never>) | undefined;
            chainId?: string | undefined;
        } & Record<Exclude<keyof I["signProposalRequest"], "chainId" | "proposal">, never>) | undefined;
        signedProposalResponse?: ({
            proposal?: {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } & {
            proposal?: ({
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types.js").SignedMsgType | undefined;
                height?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & Record<Exclude<keyof I["signedProposalResponse"]["proposal"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                round?: number | undefined;
                polRound?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["signedProposalResponse"]["proposal"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["signedProposalResponse"]["proposal"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["signedProposalResponse"]["proposal"], "round" | "signature" | "type" | "height" | "blockId" | "timestamp" | "polRound">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                description?: string | undefined;
            } & {
                code?: number | undefined;
                description?: string | undefined;
            } & Record<Exclude<keyof I["signedProposalResponse"]["error"], "code" | "description">, never>) | undefined;
        } & Record<Exclude<keyof I["signedProposalResponse"], "error" | "proposal">, never>) | undefined;
        pingRequest?: ({} & {} & Record<Exclude<keyof I["pingRequest"], never>, never>) | undefined;
        pingResponse?: ({} & {} & Record<Exclude<keyof I["pingResponse"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, "pubKeyRequest" | "pubKeyResponse" | "signVoteRequest" | "signedVoteResponse" | "signProposalRequest" | "signedProposalResponse" | "pingRequest" | "pingResponse">, never>>(object: I): Message;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
