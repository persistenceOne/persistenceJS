import Long from "long";
import { NetAddress } from "./types.js";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.p2p";
export interface PexRequest {
}
export interface PexAddrs {
    addrs: NetAddress[];
}
export interface Message {
    pexRequest?: PexRequest | undefined;
    pexAddrs?: PexAddrs | undefined;
}
export declare const PexRequest: {
    encode(_: PexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PexRequest;
    fromJSON(_: any): PexRequest;
    toJSON(_: PexRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PexRequest;
};
export declare const PexAddrs: {
    encode(message: PexAddrs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PexAddrs;
    fromJSON(object: any): PexAddrs;
    toJSON(message: PexAddrs): unknown;
    fromPartial<I extends {
        addrs?: {
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        }[] | undefined;
    } & {
        addrs?: ({
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        }[] & ({
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        } & {
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        } & Record<Exclude<keyof I["addrs"][number], "id" | "ip" | "port">, never>)[] & Record<Exclude<keyof I["addrs"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
    } & Record<Exclude<keyof I, "addrs">, never>>(object: I): PexAddrs;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        pexRequest?: {} | undefined;
        pexAddrs?: {
            addrs?: {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        pexRequest?: ({} & {} & Record<Exclude<keyof I["pexRequest"], never>, never>) | undefined;
        pexAddrs?: ({
            addrs?: {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[] | undefined;
        } & {
            addrs?: ({
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[] & ({
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            } & {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            } & Record<Exclude<keyof I["pexAddrs"]["addrs"][number], "id" | "ip" | "port">, never>)[] & Record<Exclude<keyof I["pexAddrs"]["addrs"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        } & Record<Exclude<keyof I["pexAddrs"], "addrs">, never>) | undefined;
    } & Record<Exclude<keyof I, "pexRequest" | "pexAddrs">, never>>(object: I): Message;
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
