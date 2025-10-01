/* eslint-disable */
import {
  ProposalExecutorResult,
  ProposalStatus,
  TallyResult,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  proposalStatusFromJSON,
  proposalStatusToJSON,
} from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** address is the account address of the group member. */
  address: string;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tallyResult: TallyResult;
}
/** EventTallyError is an event emitted when a proposal tally failed with an error. */
export interface EventTallyError {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** error_message is the raw error output */
  errorMessage: string;
}
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: BigInt(0),
  };
}
export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateGroup {
    const obj = createBaseEventCreateGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
};
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: BigInt(0),
  };
}
export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateGroup {
    const obj = createBaseEventUpdateGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
};
function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: "",
  };
}
export const EventCreateGroupPolicy = {
  encode(message: EventCreateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateGroupPolicy {
    const obj = createBaseEventCreateGroupPolicy();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: "",
  };
}
export const EventUpdateGroupPolicy = {
  encode(message: EventUpdateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateGroupPolicy {
    const obj = createBaseEventUpdateGroupPolicy();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: BigInt(0),
  };
}
export const EventSubmitProposal = {
  encode(message: EventSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
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
  fromJSON(object: any): EventSubmitProposal {
    const obj = createBaseEventSubmitProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: BigInt(0),
  };
}
export const EventWithdrawProposal = {
  encode(message: EventWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
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
  fromJSON(object: any): EventWithdrawProposal {
    const obj = createBaseEventWithdrawProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt(0),
  };
}
export const EventVote = {
  encode(message: EventVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
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
  fromJSON(object: any): EventVote {
    const obj = createBaseEventVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
};
function createBaseEventExec(): EventExec {
  return {
    proposalId: BigInt(0),
    result: 0,
    logs: "",
  };
}
export const EventExec = {
  encode(message: EventExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExec {
    const obj = createBaseEventExec();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.result)) obj.result = proposalExecutorResultFromJSON(object.result);
    if (isSet(object.logs)) obj.logs = String(object.logs);
    return obj;
  },
  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },
  fromPartial(object: Partial<EventExec>): EventExec {
    const message = createBaseEventExec();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
};
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: BigInt(0),
    address: "",
  };
}
export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventLeaveGroup {
    const obj = createBaseEventLeaveGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseEventProposalPruned(): EventProposalPruned {
  return {
    proposalId: BigInt(0),
    status: 0,
    tallyResult: TallyResult.fromPartial({}),
  };
}
export const EventProposalPruned = {
  encode(message: EventProposalPruned, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tallyResult !== undefined) {
      TallyResult.encode(message.tallyResult, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalPruned {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.tallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventProposalPruned {
    const obj = createBaseEventProposalPruned();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.status)) obj.status = proposalStatusFromJSON(object.status);
    if (isSet(object.tallyResult)) obj.tallyResult = TallyResult.fromJSON(object.tallyResult);
    return obj;
  },
  toJSON(message: EventProposalPruned): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.tallyResult !== undefined &&
      (obj.tallyResult = message.tallyResult ? TallyResult.toJSON(message.tallyResult) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventProposalPruned>): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.status = object.status ?? 0;
    if (object.tallyResult !== undefined && object.tallyResult !== null) {
      message.tallyResult = TallyResult.fromPartial(object.tallyResult);
    }
    return message;
  },
};
function createBaseEventTallyError(): EventTallyError {
  return {
    proposalId: BigInt(0),
    errorMessage: "",
  };
}
export const EventTallyError = {
  encode(message: EventTallyError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTallyError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTallyError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTallyError {
    const obj = createBaseEventTallyError();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.errorMessage)) obj.errorMessage = String(object.errorMessage);
    return obj;
  },
  toJSON(message: EventTallyError): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },
  fromPartial(object: Partial<EventTallyError>): EventTallyError {
    const message = createBaseEventTallyError();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};
