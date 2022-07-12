import { PublicKey } from "../crypto/keys.js";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.p2p";
export interface PacketPing {
}
export interface PacketPong {
}
export interface PacketMsg {
    channelId: number;
    eof: boolean;
    data: Uint8Array;
}
export interface Packet {
    packetPing?: PacketPing | undefined;
    packetPong?: PacketPong | undefined;
    packetMsg?: PacketMsg | undefined;
}
export interface AuthSigMessage {
    pubKey?: PublicKey;
    sig: Uint8Array;
}
export declare const PacketPing: {
    encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketPing;
    fromJSON(_: any): PacketPing;
    toJSON(_: PacketPing): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PacketPing;
};
export declare const PacketPong: {
    encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketPong;
    fromJSON(_: any): PacketPong;
    toJSON(_: PacketPong): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PacketPong;
};
export declare const PacketMsg: {
    encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketMsg;
    fromJSON(object: any): PacketMsg;
    toJSON(message: PacketMsg): unknown;
    fromPartial<I extends {
        channelId?: number | undefined;
        eof?: boolean | undefined;
        data?: Uint8Array | undefined;
    } & {
        channelId?: number | undefined;
        eof?: boolean | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data" | "channelId" | "eof">, never>>(object: I): PacketMsg;
};
export declare const Packet: {
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Packet;
    fromJSON(object: any): Packet;
    toJSON(message: Packet): unknown;
    fromPartial<I extends {
        packetPing?: {} | undefined;
        packetPong?: {} | undefined;
        packetMsg?: {
            channelId?: number | undefined;
            eof?: boolean | undefined;
            data?: Uint8Array | undefined;
        } | undefined;
    } & {
        packetPing?: ({} & {} & Record<Exclude<keyof I["packetPing"], never>, never>) | undefined;
        packetPong?: ({} & {} & Record<Exclude<keyof I["packetPong"], never>, never>) | undefined;
        packetMsg?: ({
            channelId?: number | undefined;
            eof?: boolean | undefined;
            data?: Uint8Array | undefined;
        } & {
            channelId?: number | undefined;
            eof?: boolean | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["packetMsg"], "data" | "channelId" | "eof">, never>) | undefined;
    } & Record<Exclude<keyof I, "packetPing" | "packetPong" | "packetMsg">, never>>(object: I): Packet;
};
export declare const AuthSigMessage: {
    encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthSigMessage;
    fromJSON(object: any): AuthSigMessage;
    toJSON(message: AuthSigMessage): unknown;
    fromPartial<I extends {
        pubKey?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        sig?: Uint8Array | undefined;
    } & {
        pubKey?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pubKey"], "secp256k1" | "ed25519">, never>) | undefined;
        sig?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "pubKey" | "sig">, never>>(object: I): AuthSigMessage;
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
