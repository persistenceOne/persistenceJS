/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, Params, voteOptionFromJSON, voteOptionToJSON } from "./gov";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  /** messages are the arbitrary messages to be executed if proposal passes. */
  messages: Any[];
  /** initial_deposit is the deposit value that must be paid at proposal submission. */
  initialDeposit: Coin[];
  /** proposer is the account address of the proposer. */
  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /**
   * title is the title of the proposal.
   *
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * expedited defines if the proposal is expedited or not
   *
   * Since: cosmos-sdk 0.50
   */
  expedited: boolean;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
  /** content is the proposal's content. */
  content: Any;
  /** authority must be the gov module address. */
  authority: string;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** option defines the vote option. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the Vote. */
  metadata: string;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}
/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** options defines the weighted vote options. */
  options: WeightedVoteOption[];
  /** metadata is any arbitrary metadata attached to the VoteWeighted. */
  metadata: string;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/gov parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
/**
 * MsgCancelProposal is the Msg/CancelProposal request type.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgCancelProposal {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** proposer is the account address of the proposer. */
  proposer: string;
}
/**
 * MsgCancelProposalResponse defines the response structure for executing a
 * MsgCancelProposal message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgCancelProposalResponse {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** canceled_time is the time when proposal is canceled. */
  canceledTime: Timestamp;
  /** canceled_height defines the block height at which the proposal is canceled. */
  canceledHeight: bigint;
}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: "",
    title: "",
    summary: "",
    expedited: false,
  };
}
export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(50).string(message.summary);
    }
    if (message.expedited === true) {
      writer.uint32(56).bool(message.expedited);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.summary = reader.string();
          break;
        case 7:
          message.expedited = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    const obj = createBaseMsgSubmitProposal();
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    if (Array.isArray(object?.initialDeposit))
      obj.initialDeposit = object.initialDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.summary)) obj.summary = String(object.summary);
    if (isSet(object.expedited)) obj.expedited = Boolean(object.expedited);
    return obj;
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.expedited !== undefined && (obj.expedited = message.expedited);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.initialDeposit = object.initialDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.expedited = object.expedited ?? false;
    return message;
  },
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0),
  };
}
export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    const obj = createBaseMsgSubmitProposalResponse();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseMsgExecLegacyContent(): MsgExecLegacyContent {
  return {
    content: Any.fromPartial({}),
    authority: "",
  };
}
export const MsgExecLegacyContent = {
  encode(message: MsgExecLegacyContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecLegacyContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecLegacyContent {
    const obj = createBaseMsgExecLegacyContent();
    if (isSet(object.content)) obj.content = Any.fromJSON(object.content);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgExecLegacyContent): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<MsgExecLegacyContent>): MsgExecLegacyContent {
    const message = createBaseMsgExecLegacyContent();
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content);
    }
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgExecLegacyContentResponse(): MsgExecLegacyContentResponse {
  return {};
}
export const MsgExecLegacyContentResponse = {
  encode(_: MsgExecLegacyContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecLegacyContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgExecLegacyContentResponse {
    const obj = createBaseMsgExecLegacyContentResponse();
    return obj;
  },
  toJSON(_: MsgExecLegacyContentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse {
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
  };
}
export const MsgVote = {
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    const obj = createBaseMsgVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.option)) obj.option = voteOptionFromJSON(object.option);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    return message;
  },
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgVoteResponse {
    const obj = createBaseMsgVoteResponse();
    return obj;
  },
  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
};
function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: "",
  };
}
export const MsgVoteWeighted = {
  encode(message: MsgVoteWeighted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVoteWeighted {
    const obj = createBaseMsgVoteWeighted();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (Array.isArray(object?.options))
      obj.options = object.options.map((e: any) => WeightedVoteOption.fromJSON(e));
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgVoteWeighted): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) => (e ? WeightedVoteOption.toJSON(e) : undefined));
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
};
function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}
export const MsgVoteWeightedResponse = {
  encode(_: MsgVoteWeightedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgVoteWeightedResponse {
    const obj = createBaseMsgVoteWeightedResponse();
    return obj;
  },
  toJSON(_: MsgVoteWeightedResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: [],
  };
}
export const MsgDeposit = {
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    const obj = createBaseMsgDeposit();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDepositResponse {
    const obj = createBaseMsgDepositResponse();
    return obj;
  },
  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
function createBaseMsgCancelProposal(): MsgCancelProposal {
  return {
    proposalId: BigInt(0),
    proposer: "",
  };
}
export const MsgCancelProposal = {
  encode(message: MsgCancelProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelProposal {
    const obj = createBaseMsgCancelProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    return obj;
  },
  toJSON(message: MsgCancelProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelProposal>): MsgCancelProposal {
    const message = createBaseMsgCancelProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.proposer = object.proposer ?? "";
    return message;
  },
};
function createBaseMsgCancelProposalResponse(): MsgCancelProposalResponse {
  return {
    proposalId: BigInt(0),
    canceledTime: Timestamp.fromPartial({}),
    canceledHeight: BigInt(0),
  };
}
export const MsgCancelProposalResponse = {
  encode(message: MsgCancelProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.canceledTime !== undefined) {
      Timestamp.encode(message.canceledTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.canceledHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.canceledHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.canceledTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.canceledHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelProposalResponse {
    const obj = createBaseMsgCancelProposalResponse();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.canceledTime)) obj.canceledTime = fromJsonTimestamp(object.canceledTime);
    if (isSet(object.canceledHeight)) obj.canceledHeight = BigInt(object.canceledHeight.toString());
    return obj;
  },
  toJSON(message: MsgCancelProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.canceledTime !== undefined &&
      (obj.canceledTime = fromTimestamp(message.canceledTime).toISOString());
    message.canceledHeight !== undefined &&
      (obj.canceledHeight = (message.canceledHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelProposalResponse>): MsgCancelProposalResponse {
    const message = createBaseMsgCancelProposalResponse();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.canceledTime !== undefined && object.canceledTime !== null) {
      message.canceledTime = Timestamp.fromPartial(object.canceledTime);
    }
    if (object.canceledHeight !== undefined && object.canceledHeight !== null) {
      message.canceledHeight = BigInt(object.canceledHeight.toString());
    }
    return message;
  },
};
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given the messages. */
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/gov module
   * parameters. The authority is defined in the keeper.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CancelProposal defines a method to cancel governance proposal
   *
   * Since: cosmos-sdk 0.50
   */
  CancelProposal(request: MsgCancelProposal): Promise<MsgCancelProposalResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.ExecLegacyContent = this.ExecLegacyContent.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteWeighted = this.VoteWeighted.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CancelProposal = this.CancelProposal.bind(this);
  }
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
    return promise.then((data) => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
  }
  ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse> {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
    return promise.then((data) => MsgExecLegacyContentResponse.decode(new BinaryReader(data)));
  }
  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
    return promise.then((data) => MsgVoteResponse.decode(new BinaryReader(data)));
  }
  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
    return promise.then((data) => MsgVoteWeightedResponse.decode(new BinaryReader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  CancelProposal(request: MsgCancelProposal): Promise<MsgCancelProposalResponse> {
    const data = MsgCancelProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "CancelProposal", data);
    return promise.then((data) => MsgCancelProposalResponse.decode(new BinaryReader(data)));
  }
}
