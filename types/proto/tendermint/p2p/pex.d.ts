import { NetAddress } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface PexRequest {
}
export interface PexAddrs {
    addrs: NetAddress[];
}
export interface Message {
    pexRequest?: PexRequest;
    pexAddrs?: PexAddrs;
}
export declare const PexRequest: {
    encode(_: PexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PexRequest;
    fromJSON(_: any): PexRequest;
    toJSON(_: PexRequest): unknown;
    fromPartial(_: DeepPartial<PexRequest>): PexRequest;
};
export declare const PexAddrs: {
    encode(message: PexAddrs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PexAddrs;
    fromJSON(object: any): PexAddrs;
    toJSON(message: PexAddrs): unknown;
    fromPartial(object: DeepPartial<PexAddrs>): PexAddrs;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: DeepPartial<Message>): Message;
};
