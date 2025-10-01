/* eslint-disable */
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BlockIDFlag, ValidatorSet, blockIDFlagFromJSON, blockIDFlagToJSON } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.types";
/** SignedMsgType is a type of signed message in the consensus. */
export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** PartsetHeader */
export interface PartSetHeader {
  total: number;
  hash: Uint8Array;
}
export interface Part {
  index: number;
  bytes: Uint8Array;
  proof: Proof;
}
/** BlockID */
export interface BlockID {
  hash: Uint8Array;
  partSetHeader: PartSetHeader;
}
/** Header defines the structure of a block header. */
export interface Header {
  /** basic block info */
  version: Consensus;
  chainId: string;
  height: bigint;
  time: Timestamp;
  /** prev block info */
  lastBlockId: BlockID;
  /** hashes of block data */
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  /** hashes from the app output from the prev block */
  validatorsHash: Uint8Array;
  /** validators for the next block */
  nextValidatorsHash: Uint8Array;
  /** consensus params for current block */
  consensusHash: Uint8Array;
  /** state after txs from the previous block */
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  /** consensus info */
  evidenceHash: Uint8Array;
  /** original proposer of the block */
  proposerAddress: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
  type: SignedMsgType;
  height: bigint;
  round: number;
  /** zero if vote is nil. */
  blockId: BlockID;
  timestamp: Timestamp;
  validatorAddress: Uint8Array;
  validatorIndex: number;
  /**
   * Vote signature by the validator if they participated in consensus for the
   * associated block.
   */
  signature: Uint8Array;
  /**
   * Vote extension provided by the application. Only valid for precommit
   * messages.
   */
  extension: Uint8Array;
  /**
   * Vote extension signature by the validator if they participated in
   * consensus for the associated block.
   * Only valid for precommit messages.
   */
  extensionSignature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
  height: bigint;
  round: number;
  blockId: BlockID;
  signatures: CommitSig[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp: Timestamp;
  signature: Uint8Array;
}
export interface ExtendedCommit {
  height: bigint;
  round: number;
  blockId: BlockID;
  extendedSignatures: ExtendedCommitSig[];
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp: Timestamp;
  signature: Uint8Array;
  /** Vote extension data */
  extension: Uint8Array;
  /** Vote extension signature */
  extensionSignature: Uint8Array;
}
export interface Proposal {
  type: SignedMsgType;
  height: bigint;
  round: number;
  polRound: number;
  blockId: BlockID;
  timestamp: Timestamp;
  signature: Uint8Array;
}
export interface SignedHeader {
  header: Header;
  commit: Commit;
}
export interface LightBlock {
  signedHeader: SignedHeader;
  validatorSet: ValidatorSet;
}
export interface BlockMeta {
  blockId: BlockID;
  blockSize: bigint;
  header: Header;
  numTxs: bigint;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
  rootHash: Uint8Array;
  data: Uint8Array;
  proof: Proof;
}
function createBasePartSetHeader(): PartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array(),
  };
}
export const PartSetHeader = {
  encode(message: PartSetHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PartSetHeader {
    const obj = createBasePartSetHeader();
    if (isSet(object.total)) obj.total = Number(object.total);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: PartSetHeader): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};
function createBasePart(): Part {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: Proof.fromPartial({}),
  };
}
export const Part = {
  encode(message: Part, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Part {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.bytes = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Part {
    const obj = createBasePart();
    if (isSet(object.index)) obj.index = Number(object.index);
    if (isSet(object.bytes)) obj.bytes = bytesFromBase64(object.bytes);
    if (isSet(object.proof)) obj.proof = Proof.fromJSON(object.proof);
    return obj;
  },
  toJSON(message: Part): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.bytes !== undefined &&
      (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Part>): Part {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    return message;
  },
};
function createBaseBlockID(): BlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: PartSetHeader.fromPartial({}),
  };
}
export const BlockID = {
  encode(message: BlockID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockID {
    const obj = createBaseBlockID();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.partSetHeader)) obj.partSetHeader = PartSetHeader.fromJSON(object.partSetHeader);
    return obj;
  },
  toJSON(message: BlockID): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partSetHeader !== undefined &&
      (obj.partSetHeader = message.partSetHeader ? PartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    if (object.partSetHeader !== undefined && object.partSetHeader !== null) {
      message.partSetHeader = PartSetHeader.fromPartial(object.partSetHeader);
    }
    return message;
  },
};
function createBaseHeader(): Header {
  return {
    version: Consensus.fromPartial({}),
    chainId: "",
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    lastBlockId: BlockID.fromPartial({}),
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}
export const Header = {
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.version)) obj.version = Consensus.fromJSON(object.version);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.lastBlockId)) obj.lastBlockId = BlockID.fromJSON(object.lastBlockId);
    if (isSet(object.lastCommitHash)) obj.lastCommitHash = bytesFromBase64(object.lastCommitHash);
    if (isSet(object.dataHash)) obj.dataHash = bytesFromBase64(object.dataHash);
    if (isSet(object.validatorsHash)) obj.validatorsHash = bytesFromBase64(object.validatorsHash);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.consensusHash)) obj.consensusHash = bytesFromBase64(object.consensusHash);
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    if (isSet(object.lastResultsHash)) obj.lastResultsHash = bytesFromBase64(object.lastResultsHash);
    if (isSet(object.evidenceHash)) obj.evidenceHash = bytesFromBase64(object.evidenceHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = bytesFromBase64(object.proposerAddress);
    return obj;
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.lastBlockId !== undefined &&
      (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash = base64FromBytes(
        message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array(),
      ));
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined &&
      (obj.validatorsHash = base64FromBytes(
        message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array(),
      ));
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.consensusHash !== undefined &&
      (obj.consensusHash = base64FromBytes(
        message.consensusHash !== undefined ? message.consensusHash : new Uint8Array(),
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array(),
      ));
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<Header>): Header {
    const message = createBaseHeader();
    if (object.version !== undefined && object.version !== null) {
      message.version = Consensus.fromPartial(object.version);
    }
    message.chainId = object.chainId ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = BlockID.fromPartial(object.lastBlockId);
    }
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};
function createBaseData(): Data {
  return {
    txs: [],
  };
}
export const Data = {
  encode(message: Data, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Data {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Data {
    const obj = createBaseData();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Data): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map((e) => e) || [];
    return message;
  },
};
function createBaseVote(): Vote {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extensionSignature: new Uint8Array(),
  };
}
export const Vote = {
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(74).bytes(message.extension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(82).bytes(message.extensionSignature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.validatorAddress = reader.bytes();
          break;
        case 7:
          message.validatorIndex = reader.int32();
          break;
        case 8:
          message.signature = reader.bytes();
          break;
        case 9:
          message.extension = reader.bytes();
          break;
        case 10:
          message.extensionSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    const obj = createBaseVote();
    if (isSet(object.type)) obj.type = signedMsgTypeFromJSON(object.type);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.round)) obj.round = Number(object.round);
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.validatorAddress)) obj.validatorAddress = bytesFromBase64(object.validatorAddress);
    if (isSet(object.validatorIndex)) obj.validatorIndex = Number(object.validatorIndex);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.extension)) obj.extension = bytesFromBase64(object.extension);
    if (isSet(object.extensionSignature)) obj.extensionSignature = bytesFromBase64(object.extensionSignature);
    return obj;
  },
  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.extension !== undefined &&
      (obj.extension = base64FromBytes(
        message.extension !== undefined ? message.extension : new Uint8Array(),
      ));
    message.extensionSignature !== undefined &&
      (obj.extensionSignature = base64FromBytes(
        message.extensionSignature !== undefined ? message.extensionSignature : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.round = object.round ?? 0;
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    return message;
  },
};
function createBaseCommit(): Commit {
  return {
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    signatures: [],
  };
}
export const Commit = {
  encode(message: Commit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commit {
    const obj = createBaseCommit();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.round)) obj.round = Number(object.round);
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (Array.isArray(object?.signatures))
      obj.signatures = object.signatures.map((e: any) => CommitSig.fromJSON(e));
    return obj;
  },
  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => (e ? CommitSig.toJSON(e) : undefined));
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Commit>): Commit {
    const message = createBaseCommit();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.round = object.round ?? 0;
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    message.signatures = object.signatures?.map((e) => CommitSig.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCommitSig(): CommitSig {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: Timestamp.fromPartial({}),
    signature: new Uint8Array(),
  };
}
export const CommitSig = {
  encode(message: CommitSig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32() as any;
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitSig {
    const obj = createBaseCommitSig();
    if (isSet(object.blockIdFlag)) obj.blockIdFlag = blockIDFlagFromJSON(object.blockIdFlag);
    if (isSet(object.validatorAddress)) obj.validatorAddress = bytesFromBase64(object.validatorAddress);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  toJSON(message: CommitSig): unknown {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};
function createBaseExtendedCommit(): ExtendedCommit {
  return {
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    extendedSignatures: [],
  };
}
export const ExtendedCommit = {
  encode(message: ExtendedCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.extendedSignatures) {
      ExtendedCommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.extendedSignatures.push(ExtendedCommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtendedCommit {
    const obj = createBaseExtendedCommit();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.round)) obj.round = Number(object.round);
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (Array.isArray(object?.extendedSignatures))
      obj.extendedSignatures = object.extendedSignatures.map((e: any) => ExtendedCommitSig.fromJSON(e));
    return obj;
  },
  toJSON(message: ExtendedCommit): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    if (message.extendedSignatures) {
      obj.extendedSignatures = message.extendedSignatures.map((e) =>
        e ? ExtendedCommitSig.toJSON(e) : undefined,
      );
    } else {
      obj.extendedSignatures = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ExtendedCommit>): ExtendedCommit {
    const message = createBaseExtendedCommit();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.round = object.round ?? 0;
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    message.extendedSignatures =
      object.extendedSignatures?.map((e) => ExtendedCommitSig.fromPartial(e)) || [];
    return message;
  },
};
function createBaseExtendedCommitSig(): ExtendedCommitSig {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: Timestamp.fromPartial({}),
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extensionSignature: new Uint8Array(),
  };
}
export const ExtendedCommitSig = {
  encode(message: ExtendedCommitSig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(42).bytes(message.extension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(50).bytes(message.extensionSignature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitSig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32() as any;
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        case 5:
          message.extension = reader.bytes();
          break;
        case 6:
          message.extensionSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtendedCommitSig {
    const obj = createBaseExtendedCommitSig();
    if (isSet(object.blockIdFlag)) obj.blockIdFlag = blockIDFlagFromJSON(object.blockIdFlag);
    if (isSet(object.validatorAddress)) obj.validatorAddress = bytesFromBase64(object.validatorAddress);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.extension)) obj.extension = bytesFromBase64(object.extension);
    if (isSet(object.extensionSignature)) obj.extensionSignature = bytesFromBase64(object.extensionSignature);
    return obj;
  },
  toJSON(message: ExtendedCommitSig): unknown {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.extension !== undefined &&
      (obj.extension = base64FromBytes(
        message.extension !== undefined ? message.extension : new Uint8Array(),
      ));
    message.extensionSignature !== undefined &&
      (obj.extensionSignature = base64FromBytes(
        message.extensionSignature !== undefined ? message.extensionSignature : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<ExtendedCommitSig>): ExtendedCommitSig {
    const message = createBaseExtendedCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    return message;
  },
};
function createBaseProposal(): Proposal {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    polRound: 0,
    blockId: BlockID.fromPartial({}),
    timestamp: Timestamp.fromPartial({}),
    signature: new Uint8Array(),
  };
}
export const Proposal = {
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.polRound = reader.int32();
          break;
        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    const obj = createBaseProposal();
    if (isSet(object.type)) obj.type = signedMsgTypeFromJSON(object.type);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.round)) obj.round = Number(object.round);
    if (isSet(object.polRound)) obj.polRound = Number(object.polRound);
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.polRound !== undefined && (obj.polRound = Math.round(message.polRound));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.round = object.round ?? 0;
    message.polRound = object.polRound ?? 0;
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};
function createBaseSignedHeader(): SignedHeader {
  return {
    header: Header.fromPartial({}),
    commit: Commit.fromPartial({}),
  };
}
export const SignedHeader = {
  encode(message: SignedHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignedHeader {
    const obj = createBaseSignedHeader();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.commit)) obj.commit = Commit.fromJSON(object.commit);
    return obj;
  },
  toJSON(message: SignedHeader): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = Commit.fromPartial(object.commit);
    }
    return message;
  },
};
function createBaseLightBlock(): LightBlock {
  return {
    signedHeader: SignedHeader.fromPartial({}),
    validatorSet: ValidatorSet.fromPartial({}),
  };
}
export const LightBlock = {
  encode(message: LightBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LightBlock {
    const obj = createBaseLightBlock();
    if (isSet(object.signedHeader)) obj.signedHeader = SignedHeader.fromJSON(object.signedHeader);
    if (isSet(object.validatorSet)) obj.validatorSet = ValidatorSet.fromJSON(object.validatorSet);
    return obj;
  },
  toJSON(message: LightBlock): unknown {
    const obj: any = {};
    message.signedHeader !== undefined &&
      (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined &&
      (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    return obj;
  },
  fromPartial(object: Partial<LightBlock>): LightBlock {
    const message = createBaseLightBlock();
    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = SignedHeader.fromPartial(object.signedHeader);
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet);
    }
    return message;
  },
};
function createBaseBlockMeta(): BlockMeta {
  return {
    blockId: BlockID.fromPartial({}),
    blockSize: BigInt(0),
    header: Header.fromPartial({}),
    numTxs: BigInt(0),
  };
}
export const BlockMeta = {
  encode(message: BlockMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockSize !== BigInt(0)) {
      writer.uint32(16).int64(message.blockSize);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.numTxs !== BigInt(0)) {
      writer.uint32(32).int64(message.numTxs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockSize = reader.int64();
          break;
        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 4:
          message.numTxs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockMeta {
    const obj = createBaseBlockMeta();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.blockSize)) obj.blockSize = BigInt(object.blockSize.toString());
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.numTxs)) obj.numTxs = BigInt(object.numTxs.toString());
    return obj;
  },
  toJSON(message: BlockMeta): unknown {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.blockSize !== undefined && (obj.blockSize = (message.blockSize || BigInt(0)).toString());
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockMeta>): BlockMeta {
    const message = createBaseBlockMeta();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.blockSize !== undefined && object.blockSize !== null) {
      message.blockSize = BigInt(object.blockSize.toString());
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.numTxs !== undefined && object.numTxs !== null) {
      message.numTxs = BigInt(object.numTxs.toString());
    }
    return message;
  },
};
function createBaseTxProof(): TxProof {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: Proof.fromPartial({}),
  };
}
export const TxProof = {
  encode(message: TxProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxProof {
    const obj = createBaseTxProof();
    if (isSet(object.rootHash)) obj.rootHash = bytesFromBase64(object.rootHash);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.proof)) obj.proof = Proof.fromJSON(object.proof);
    return obj;
  },
  toJSON(message: TxProof): unknown {
    const obj: any = {};
    message.rootHash !== undefined &&
      (obj.rootHash = base64FromBytes(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TxProof>): TxProof {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    return message;
  },
};
