import { PageRequest, PageResponse } from "../../query/v1beta1/pagination.js";
import { Any } from "../../../../google/protobuf/any.js";
import { BlockID } from "../../../../tendermint/types/types.js";
import { Block } from "../../../../tendermint/types/block.js";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types.js";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
    height: Long;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
    blockHeight: Long;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
    blockHeight: Long;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pubKey?: Any;
    votingPower: Long;
    proposerPriority: Long;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
    height: Long;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
    blockId?: BlockID;
    block?: Block;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
    blockId?: BlockID;
    block?: Block;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
/** GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
    defaultNodeInfo?: DefaultNodeInfo;
    applicationVersion?: VersionInfo;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    appName: string;
    version: string;
    gitCommit: string;
    buildTags: string;
    goVersion: string;
    buildDeps: Module[];
    /** Since: cosmos-sdk 0.43 */
    cosmosSdkVersion: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
export declare const GetValidatorSetByHeightRequest: {
    encode(message: GetValidatorSetByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetValidatorSetByHeightRequest;
    fromJSON(object: any): GetValidatorSetByHeightRequest;
    toJSON(message: GetValidatorSetByHeightRequest): unknown;
    fromPartial<I extends {
        height?: string | number | Long.Long | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
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
        } & Record<Exclude<keyof I["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], "reverse" | "key" | "offset" | "limit" | "countTotal">, never>) | undefined;
    } & Record<Exclude<keyof I, "height" | "pagination">, never>>(object: I): GetValidatorSetByHeightRequest;
};
export declare const GetValidatorSetByHeightResponse: {
    encode(message: GetValidatorSetByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetValidatorSetByHeightResponse;
    fromJSON(object: any): GetValidatorSetByHeightResponse;
    toJSON(message: GetValidatorSetByHeightResponse): unknown;
    fromPartial<I extends {
        blockHeight?: string | number | Long.Long | undefined;
        validators?: {
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        blockHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["blockHeight"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        validators?: ({
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[] & ({
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        } & {
            address?: string | undefined;
            pubKey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], "value" | "typeUrl">, never>) | undefined;
            votingPower?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["validators"][number]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            proposerPriority?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["validators"][number]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        } & Record<Exclude<keyof I["validators"][number], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>)[] & Record<Exclude<keyof I["validators"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["total"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], "total" | "nextKey">, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination" | "validators" | "blockHeight">, never>>(object: I): GetValidatorSetByHeightResponse;
};
export declare const GetLatestValidatorSetRequest: {
    encode(message: GetLatestValidatorSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestValidatorSetRequest;
    fromJSON(object: any): GetLatestValidatorSetRequest;
    toJSON(message: GetLatestValidatorSetRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["offset"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            limit?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["limit"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], "reverse" | "key" | "offset" | "limit" | "countTotal">, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): GetLatestValidatorSetRequest;
};
export declare const GetLatestValidatorSetResponse: {
    encode(message: GetLatestValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestValidatorSetResponse;
    fromJSON(object: any): GetLatestValidatorSetResponse;
    toJSON(message: GetLatestValidatorSetResponse): unknown;
    fromPartial<I extends {
        blockHeight?: string | number | Long.Long | undefined;
        validators?: {
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        blockHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["blockHeight"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        validators?: ({
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        }[] & ({
            address?: string | undefined;
            pubKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            votingPower?: string | number | Long.Long | undefined;
            proposerPriority?: string | number | Long.Long | undefined;
        } & {
            address?: string | undefined;
            pubKey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], "value" | "typeUrl">, never>) | undefined;
            votingPower?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["validators"][number]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            proposerPriority?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["validators"][number]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        } & Record<Exclude<keyof I["validators"][number], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>)[] & Record<Exclude<keyof I["validators"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["pagination"]["total"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        } & Record<Exclude<keyof I["pagination"], "total" | "nextKey">, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination" | "validators" | "blockHeight">, never>>(object: I): GetLatestValidatorSetResponse;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        pubKey?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        votingPower?: string | number | Long.Long | undefined;
        proposerPriority?: string | number | Long.Long | undefined;
    } & {
        address?: string | undefined;
        pubKey?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pubKey"], "value" | "typeUrl">, never>) | undefined;
        votingPower?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
        proposerPriority?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
    } & Record<Exclude<keyof I, "address" | "pubKey" | "votingPower" | "proposerPriority">, never>>(object: I): Validator;
};
export declare const GetBlockByHeightRequest: {
    encode(message: GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBlockByHeightRequest;
    fromJSON(object: any): GetBlockByHeightRequest;
    toJSON(message: GetBlockByHeightRequest): unknown;
    fromPartial<I extends {
        height?: string | number | Long.Long | undefined;
    } & {
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
        } & Record<Exclude<keyof I["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): GetBlockByHeightRequest;
};
export declare const GetBlockByHeightResponse: {
    encode(message: GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBlockByHeightResponse;
    fromJSON(object: any): GetBlockByHeightResponse;
    toJSON(message: GetBlockByHeightResponse): unknown;
    fromPartial<I extends {
        blockId?: {
            hash?: Uint8Array | undefined;
            partSetHeader?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
            header?: {
                version?: {
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long.Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
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
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
        } & Record<Exclude<keyof I["blockId"], "hash" | "partSetHeader">, never>) | undefined;
        block?: ({
            header?: {
                version?: {
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long.Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long.Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } & {
                    block?: string | number | (Long.Long & {
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
                    } & Record<Exclude<keyof I["block"]["header"]["version"]["block"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                    app?: string | number | (Long.Long & {
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
                    } & Record<Exclude<keyof I["block"]["header"]["version"]["app"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["version"], "block" | "app">, never>) | undefined;
                chainId?: string | undefined;
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
                } & Record<Exclude<keyof I["block"]["header"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
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
                    } & Record<Exclude<keyof I["block"]["header"]["lastBlockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["lastBlockId"], "hash" | "partSetHeader">, never>) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["block"]["header"], "time" | "chainId" | "height" | "version" | "lastBlockId" | "lastCommitHash" | "dataHash" | "validatorsHash" | "nextValidatorsHash" | "consensusHash" | "appHash" | "lastResultsHash" | "evidenceHash" | "proposerAddress">, never>) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["block"]["data"]["txs"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["data"], "txs">, never>) | undefined;
            evidence?: ({
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicateVoteEvidence?: ({
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        voteA?: ({
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
                        voteB?: ({
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
                        totalVotingPower?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        validatorPower?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        timestamp?: Date | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"], "totalVotingPower" | "timestamp" | "voteA" | "voteB" | "validatorPower">, never>) | undefined;
                    lightClientAttackEvidence?: ({
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflictingBlock?: ({
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } & {
                            signedHeader?: ({
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } & {
                                        block?: string | number | (Long.Long & {
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                        app?: string | number | (Long.Long & {
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], "block" | "app">, never>) | undefined;
                                    chainId?: string | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: ({
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], "hash" | "partSetHeader">, never>) | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], "time" | "chainId" | "height" | "version" | "lastBlockId" | "lastCommitHash" | "dataHash" | "validatorsHash" | "nextValidatorsHash" | "consensusHash" | "appHash" | "lastResultsHash" | "evidenceHash" | "proposerAddress">, never>) | undefined;
                                commit?: ({
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                                    signatures?: ({
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], "signature" | "validatorAddress" | "timestamp" | "blockIdFlag">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], "round" | "signatures" | "height" | "blockId">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], "header" | "commit">, never>) | undefined;
                            validatorSet?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
                                    votingPower?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    proposerPriority?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
                                    votingPower?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    proposerPriority?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>) | undefined;
                                totalVotingPower?: string | number | (Long.Long & {
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], "validators" | "proposer" | "totalVotingPower">, never>) | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], "signedHeader" | "validatorSet">, never>) | undefined;
                        commonHeight?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        byzantineValidators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
                            votingPower?: string | number | (Long.Long & {
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                            proposerPriority?: string | number | (Long.Long & {
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                        totalVotingPower?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        timestamp?: Date | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"], "totalVotingPower" | "timestamp" | "byzantineValidators" | "conflictingBlock" | "commonHeight">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number], "duplicateVoteEvidence" | "lightClientAttackEvidence">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["evidence"], "evidence">, never>) | undefined;
            lastCommit?: ({
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
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
                } & Record<Exclude<keyof I["block"]["lastCommit"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["lastCommit"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["lastCommit"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                signatures?: ({
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["block"]["lastCommit"]["signatures"][number], "signature" | "validatorAddress" | "timestamp" | "blockIdFlag">, never>)[] & Record<Exclude<keyof I["block"]["lastCommit"]["signatures"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["lastCommit"], "round" | "signatures" | "height" | "blockId">, never>) | undefined;
        } & Record<Exclude<keyof I["block"], "data" | "header" | "evidence" | "lastCommit">, never>) | undefined;
    } & Record<Exclude<keyof I, "block" | "blockId">, never>>(object: I): GetBlockByHeightResponse;
};
export declare const GetLatestBlockRequest: {
    encode(_: GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestBlockRequest;
    fromJSON(_: any): GetLatestBlockRequest;
    toJSON(_: GetLatestBlockRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetLatestBlockRequest;
};
export declare const GetLatestBlockResponse: {
    encode(message: GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestBlockResponse;
    fromJSON(object: any): GetLatestBlockResponse;
    toJSON(message: GetLatestBlockResponse): unknown;
    fromPartial<I extends {
        blockId?: {
            hash?: Uint8Array | undefined;
            partSetHeader?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
            header?: {
                version?: {
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long.Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
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
            } & Record<Exclude<keyof I["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
        } & Record<Exclude<keyof I["blockId"], "hash" | "partSetHeader">, never>) | undefined;
        block?: ({
            header?: {
                version?: {
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long.Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long.Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | number | Long.Long | undefined;
                    app?: string | number | Long.Long | undefined;
                } & {
                    block?: string | number | (Long.Long & {
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
                    } & Record<Exclude<keyof I["block"]["header"]["version"]["block"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                    app?: string | number | (Long.Long & {
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
                    } & Record<Exclude<keyof I["block"]["header"]["version"]["app"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["version"], "block" | "app">, never>) | undefined;
                chainId?: string | undefined;
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
                } & Record<Exclude<keyof I["block"]["header"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
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
                    } & Record<Exclude<keyof I["block"]["header"]["lastBlockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["lastBlockId"], "hash" | "partSetHeader">, never>) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["block"]["header"], "time" | "chainId" | "height" | "version" | "lastBlockId" | "lastCommitHash" | "dataHash" | "validatorsHash" | "nextValidatorsHash" | "consensusHash" | "appHash" | "lastResultsHash" | "evidenceHash" | "proposerAddress">, never>) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["block"]["data"]["txs"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["data"], "txs">, never>) | undefined;
            evidence?: ({
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicateVoteEvidence?: ({
                        voteA?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        voteB?: {
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                        totalVotingPower?: string | number | Long.Long | undefined;
                        validatorPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        voteA?: ({
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
                        voteB?: ({
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types.js").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], "round" | "signature" | "type" | "validatorAddress" | "height" | "blockId" | "timestamp" | "validatorIndex">, never>) | undefined;
                        totalVotingPower?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        validatorPower?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        timestamp?: Date | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"], "totalVotingPower" | "timestamp" | "voteA" | "voteB" | "validatorPower">, never>) | undefined;
                    lightClientAttackEvidence?: ({
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long.Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long.Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflictingBlock?: ({
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } | undefined;
                        } & {
                            signedHeader?: ({
                                header?: {
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long.Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | number | Long.Long | undefined;
                                        app?: string | number | Long.Long | undefined;
                                    } & {
                                        block?: string | number | (Long.Long & {
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                        app?: string | number | (Long.Long & {
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], "block" | "app">, never>) | undefined;
                                    chainId?: string | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: ({
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], "hash" | "partSetHeader">, never>) | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], "time" | "chainId" | "height" | "version" | "lastBlockId" | "lastCommitHash" | "dataHash" | "validatorsHash" | "nextValidatorsHash" | "consensusHash" | "appHash" | "lastResultsHash" | "evidenceHash" | "proposerAddress">, never>) | undefined;
                                commit?: ({
                                    height?: string | number | Long.Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                                    signatures?: ({
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], "signature" | "validatorAddress" | "timestamp" | "blockIdFlag">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], "round" | "signatures" | "height" | "blockId">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], "header" | "commit">, never>) | undefined;
                            validatorSet?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long.Long | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
                                    votingPower?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    proposerPriority?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long.Long | undefined;
                                    proposerPriority?: string | number | Long.Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
                                    votingPower?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                    proposerPriority?: string | number | (Long.Long & {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>) | undefined;
                                totalVotingPower?: string | number | (Long.Long & {
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], "validators" | "proposer" | "totalVotingPower">, never>) | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], "signedHeader" | "validatorSet">, never>) | undefined;
                        commonHeight?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        byzantineValidators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long.Long | undefined;
                            proposerPriority?: string | number | Long.Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
                            votingPower?: string | number | (Long.Long & {
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                            proposerPriority?: string | number | (Long.Long & {
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], "address" | "pubKey" | "votingPower" | "proposerPriority">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                        totalVotingPower?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                        timestamp?: Date | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"], "totalVotingPower" | "timestamp" | "byzantineValidators" | "conflictingBlock" | "commonHeight">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number], "duplicateVoteEvidence" | "lightClientAttackEvidence">, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["evidence"], "evidence">, never>) | undefined;
            lastCommit?: ({
                height?: string | number | Long.Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
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
                } & Record<Exclude<keyof I["block"]["lastCommit"]["height"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["lastCommit"]["blockId"]["partSetHeader"], "hash" | "total">, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["lastCommit"]["blockId"], "hash" | "partSetHeader">, never>) | undefined;
                signatures?: ({
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    blockIdFlag?: import("../../../../tendermint/types/types.js").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["block"]["lastCommit"]["signatures"][number], "signature" | "validatorAddress" | "timestamp" | "blockIdFlag">, never>)[] & Record<Exclude<keyof I["block"]["lastCommit"]["signatures"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["lastCommit"], "round" | "signatures" | "height" | "blockId">, never>) | undefined;
        } & Record<Exclude<keyof I["block"], "data" | "header" | "evidence" | "lastCommit">, never>) | undefined;
    } & Record<Exclude<keyof I, "block" | "blockId">, never>>(object: I): GetLatestBlockResponse;
};
export declare const GetSyncingRequest: {
    encode(_: GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSyncingRequest;
    fromJSON(_: any): GetSyncingRequest;
    toJSON(_: GetSyncingRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetSyncingRequest;
};
export declare const GetSyncingResponse: {
    encode(message: GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSyncingResponse;
    fromJSON(object: any): GetSyncingResponse;
    toJSON(message: GetSyncingResponse): unknown;
    fromPartial<I extends {
        syncing?: boolean | undefined;
    } & {
        syncing?: boolean | undefined;
    } & Record<Exclude<keyof I, "syncing">, never>>(object: I): GetSyncingResponse;
};
export declare const GetNodeInfoRequest: {
    encode(_: GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNodeInfoRequest;
    fromJSON(_: any): GetNodeInfoRequest;
    toJSON(_: GetNodeInfoRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetNodeInfoRequest;
};
export declare const GetNodeInfoResponse: {
    encode(message: GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNodeInfoResponse;
    fromJSON(object: any): GetNodeInfoResponse;
    toJSON(message: GetNodeInfoResponse): unknown;
    fromPartial<I extends {
        defaultNodeInfo?: {
            protocolVersion?: {
                p2p?: string | number | Long.Long | undefined;
                block?: string | number | Long.Long | undefined;
                app?: string | number | Long.Long | undefined;
            } | undefined;
            defaultNodeId?: string | undefined;
            listenAddr?: string | undefined;
            network?: string | undefined;
            version?: string | undefined;
            channels?: Uint8Array | undefined;
            moniker?: string | undefined;
            other?: {
                txIndex?: string | undefined;
                rpcAddress?: string | undefined;
            } | undefined;
        } | undefined;
        applicationVersion?: {
            name?: string | undefined;
            appName?: string | undefined;
            version?: string | undefined;
            gitCommit?: string | undefined;
            buildTags?: string | undefined;
            goVersion?: string | undefined;
            buildDeps?: {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[] | undefined;
            cosmosSdkVersion?: string | undefined;
        } | undefined;
    } & {
        defaultNodeInfo?: ({
            protocolVersion?: {
                p2p?: string | number | Long.Long | undefined;
                block?: string | number | Long.Long | undefined;
                app?: string | number | Long.Long | undefined;
            } | undefined;
            defaultNodeId?: string | undefined;
            listenAddr?: string | undefined;
            network?: string | undefined;
            version?: string | undefined;
            channels?: Uint8Array | undefined;
            moniker?: string | undefined;
            other?: {
                txIndex?: string | undefined;
                rpcAddress?: string | undefined;
            } | undefined;
        } & {
            protocolVersion?: ({
                p2p?: string | number | Long.Long | undefined;
                block?: string | number | Long.Long | undefined;
                app?: string | number | Long.Long | undefined;
            } & {
                p2p?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["defaultNodeInfo"]["protocolVersion"]["p2p"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                block?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["defaultNodeInfo"]["protocolVersion"]["block"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
                app?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["defaultNodeInfo"]["protocolVersion"]["app"], "toString" | "sub" | "add" | "high" | "low" | "div" | "unsigned" | "and" | "compare" | "comp" | "divide" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toUnsigned" | "xor">, never>) | undefined;
            } & Record<Exclude<keyof I["defaultNodeInfo"]["protocolVersion"], "block" | "app" | "p2p">, never>) | undefined;
            defaultNodeId?: string | undefined;
            listenAddr?: string | undefined;
            network?: string | undefined;
            version?: string | undefined;
            channels?: Uint8Array | undefined;
            moniker?: string | undefined;
            other?: ({
                txIndex?: string | undefined;
                rpcAddress?: string | undefined;
            } & {
                txIndex?: string | undefined;
                rpcAddress?: string | undefined;
            } & Record<Exclude<keyof I["defaultNodeInfo"]["other"], "txIndex" | "rpcAddress">, never>) | undefined;
        } & Record<Exclude<keyof I["defaultNodeInfo"], "network" | "other" | "version" | "channels" | "moniker" | "protocolVersion" | "defaultNodeId" | "listenAddr">, never>) | undefined;
        applicationVersion?: ({
            name?: string | undefined;
            appName?: string | undefined;
            version?: string | undefined;
            gitCommit?: string | undefined;
            buildTags?: string | undefined;
            goVersion?: string | undefined;
            buildDeps?: {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[] | undefined;
            cosmosSdkVersion?: string | undefined;
        } & {
            name?: string | undefined;
            appName?: string | undefined;
            version?: string | undefined;
            gitCommit?: string | undefined;
            buildTags?: string | undefined;
            goVersion?: string | undefined;
            buildDeps?: ({
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[] & ({
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            } & {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            } & Record<Exclude<keyof I["applicationVersion"]["buildDeps"][number], "path" | "version" | "sum">, never>)[] & Record<Exclude<keyof I["applicationVersion"]["buildDeps"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            cosmosSdkVersion?: string | undefined;
        } & Record<Exclude<keyof I["applicationVersion"], "name" | "version" | "appName" | "gitCommit" | "buildTags" | "goVersion" | "buildDeps" | "cosmosSdkVersion">, never>) | undefined;
    } & Record<Exclude<keyof I, "defaultNodeInfo" | "applicationVersion">, never>>(object: I): GetNodeInfoResponse;
};
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        appName?: string | undefined;
        version?: string | undefined;
        gitCommit?: string | undefined;
        buildTags?: string | undefined;
        goVersion?: string | undefined;
        buildDeps?: {
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        }[] | undefined;
        cosmosSdkVersion?: string | undefined;
    } & {
        name?: string | undefined;
        appName?: string | undefined;
        version?: string | undefined;
        gitCommit?: string | undefined;
        buildTags?: string | undefined;
        goVersion?: string | undefined;
        buildDeps?: ({
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        }[] & ({
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        } & {
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        } & Record<Exclude<keyof I["buildDeps"][number], "path" | "version" | "sum">, never>)[] & Record<Exclude<keyof I["buildDeps"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        cosmosSdkVersion?: string | undefined;
    } & Record<Exclude<keyof I, "name" | "version" | "appName" | "gitCommit" | "buildTags" | "goVersion" | "buildDeps" | "cosmosSdkVersion">, never>>(object: I): VersionInfo;
};
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        version?: string | undefined;
        sum?: string | undefined;
    } & {
        path?: string | undefined;
        version?: string | undefined;
        sum?: string | undefined;
    } & Record<Exclude<keyof I, "path" | "version" | "sum">, never>>(object: I): Module;
};
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
    /** GetNodeInfo queries the current node info. */
    GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
