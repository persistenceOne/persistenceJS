import { Block } from "../types/block";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
    height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
    height: Long;
}
/** BlockResponse returns block to the requested */
export interface BlockResponse {
    block: Block;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequest {
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
    height: Long;
    base: Long;
}
export interface Message {
    blockRequest?: BlockRequest;
    noBlockResponse?: NoBlockResponse;
    blockResponse?: BlockResponse;
    statusRequest?: StatusRequest;
    statusResponse?: StatusResponse;
}
export declare const BlockRequest: {
    encode(message: BlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest;
    fromJSON(object: any): BlockRequest;
    toJSON(message: BlockRequest): unknown;
    fromPartial(object: DeepPartial<BlockRequest>): BlockRequest;
};
export declare const NoBlockResponse: {
    encode(message: NoBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse;
    fromJSON(object: any): NoBlockResponse;
    toJSON(message: NoBlockResponse): unknown;
    fromPartial(object: DeepPartial<NoBlockResponse>): NoBlockResponse;
};
export declare const BlockResponse: {
    encode(message: BlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse;
    fromJSON(object: any): BlockResponse;
    toJSON(message: BlockResponse): unknown;
    fromPartial(object: DeepPartial<BlockResponse>): BlockResponse;
};
export declare const StatusRequest: {
    encode(_: StatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest;
    fromJSON(_: any): StatusRequest;
    toJSON(_: StatusRequest): unknown;
    fromPartial(_: DeepPartial<StatusRequest>): StatusRequest;
};
export declare const StatusResponse: {
    encode(message: StatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse;
    fromJSON(object: any): StatusResponse;
    toJSON(message: StatusResponse): unknown;
    fromPartial(object: DeepPartial<StatusResponse>): StatusResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: DeepPartial<Message>): Message;
};
