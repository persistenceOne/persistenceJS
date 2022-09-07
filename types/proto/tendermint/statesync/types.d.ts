import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Message {
    snapshotsRequest?: SnapshotsRequest;
    snapshotsResponse?: SnapshotsResponse;
    chunkRequest?: ChunkRequest;
    chunkResponse?: ChunkResponse;
}
export interface SnapshotsRequest {
}
export interface SnapshotsResponse {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface ChunkRequest {
    height: Long;
    format: number;
    index: number;
}
export interface ChunkResponse {
    height: Long;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: DeepPartial<Message>): Message;
};
export declare const SnapshotsRequest: {
    encode(_: SnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsRequest;
    fromJSON(_: any): SnapshotsRequest;
    toJSON(_: SnapshotsRequest): unknown;
    fromPartial(_: DeepPartial<SnapshotsRequest>): SnapshotsRequest;
};
export declare const SnapshotsResponse: {
    encode(message: SnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsResponse;
    fromJSON(object: any): SnapshotsResponse;
    toJSON(message: SnapshotsResponse): unknown;
    fromPartial(object: DeepPartial<SnapshotsResponse>): SnapshotsResponse;
};
export declare const ChunkRequest: {
    encode(message: ChunkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChunkRequest;
    fromJSON(object: any): ChunkRequest;
    toJSON(message: ChunkRequest): unknown;
    fromPartial(object: DeepPartial<ChunkRequest>): ChunkRequest;
};
export declare const ChunkResponse: {
    encode(message: ChunkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChunkResponse;
    fromJSON(object: any): ChunkResponse;
    toJSON(message: ChunkResponse): unknown;
    fromPartial(object: DeepPartial<ChunkResponse>): ChunkResponse;
};
