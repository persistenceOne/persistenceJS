import { ResponseDeliverTx, ResponseEndBlock, ResponseBeginBlock } from "../abci/types";
import { ValidatorSet } from "../types/validator";
import { ConsensusParams } from "../types/params";
import { Consensus } from "../version/types";
import { BlockID } from "../types/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
    deliverTxs: ResponseDeliverTx[];
    endBlock: ResponseEndBlock;
    beginBlock: ResponseBeginBlock;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
    validatorSet: ValidatorSet;
    lastHeightChanged: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
    consensusParams: ConsensusParams;
    lastHeightChanged: Long;
}
export interface Version {
    consensus: Consensus;
    software: string;
}
export interface State {
    version: Version;
    /** immutable */
    chainId: string;
    initialHeight: Long;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    lastBlockHeight: Long;
    lastBlockId: BlockID;
    lastBlockTime: Date;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    nextValidators: ValidatorSet;
    validators: ValidatorSet;
    lastValidators: ValidatorSet;
    lastHeightValidatorsChanged: Long;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensusParams: ConsensusParams;
    lastHeightConsensusParamsChanged: Long;
    /** Merkle root of the results from executing prev block */
    lastResultsHash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    appHash: Uint8Array;
}
export declare const ABCIResponses: {
    encode(message: ABCIResponses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses;
    fromJSON(object: any): ABCIResponses;
    toJSON(message: ABCIResponses): unknown;
    fromPartial(object: DeepPartial<ABCIResponses>): ABCIResponses;
};
export declare const ValidatorsInfo: {
    encode(message: ValidatorsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo;
    fromJSON(object: any): ValidatorsInfo;
    toJSON(message: ValidatorsInfo): unknown;
    fromPartial(object: DeepPartial<ValidatorsInfo>): ValidatorsInfo;
};
export declare const ConsensusParamsInfo: {
    encode(message: ConsensusParamsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo;
    fromJSON(object: any): ConsensusParamsInfo;
    toJSON(message: ConsensusParamsInfo): unknown;
    fromPartial(object: DeepPartial<ConsensusParamsInfo>): ConsensusParamsInfo;
};
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial(object: DeepPartial<Version>): Version;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    fromPartial(object: DeepPartial<State>): State;
};
