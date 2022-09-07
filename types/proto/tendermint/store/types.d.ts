import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface BlockStoreState {
    base: Long;
    height: Long;
}
export declare const BlockStoreState: {
    encode(message: BlockStoreState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockStoreState;
    fromJSON(object: any): BlockStoreState;
    toJSON(message: BlockStoreState): unknown;
    fromPartial(object: DeepPartial<BlockStoreState>): BlockStoreState;
};
