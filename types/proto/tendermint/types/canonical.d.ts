import { SignedMsgType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface CanonicalBlockID {
    hash: Uint8Array;
    partSetHeader: CanonicalPartSetHeader;
}
export interface CanonicalPartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalProposal {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    polRound: Long;
    blockId: CanonicalBlockID;
    timestamp: Date;
    chainId: string;
}
export interface CanonicalVote {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    blockId: CanonicalBlockID;
    timestamp: Date;
    chainId: string;
}
export declare const CanonicalBlockID: {
    encode(message: CanonicalBlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalBlockID;
    fromJSON(object: any): CanonicalBlockID;
    toJSON(message: CanonicalBlockID): unknown;
    fromPartial(object: DeepPartial<CanonicalBlockID>): CanonicalBlockID;
};
export declare const CanonicalPartSetHeader: {
    encode(message: CanonicalPartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalPartSetHeader;
    fromJSON(object: any): CanonicalPartSetHeader;
    toJSON(message: CanonicalPartSetHeader): unknown;
    fromPartial(object: DeepPartial<CanonicalPartSetHeader>): CanonicalPartSetHeader;
};
export declare const CanonicalProposal: {
    encode(message: CanonicalProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalProposal;
    fromJSON(object: any): CanonicalProposal;
    toJSON(message: CanonicalProposal): unknown;
    fromPartial(object: DeepPartial<CanonicalProposal>): CanonicalProposal;
};
export declare const CanonicalVote: {
    encode(message: CanonicalVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalVote;
    fromJSON(object: any): CanonicalVote;
    toJSON(message: CanonicalVote): unknown;
    fromPartial(object: DeepPartial<CanonicalVote>): CanonicalVote;
};
