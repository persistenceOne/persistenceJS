/* eslint-disable */
import { Action, actionFromJSON, actionToJSON } from "./claim_record";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.claim.v1beta1";
export interface ClaimAuthorization {
  contractAddress: string;
  action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
  airdropEnabled: boolean;
  airdropStartTime: Timestamp;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** list of contracts and their allowed claim actions */
  allowedClaimers: ClaimAuthorization[];
}
function createBaseClaimAuthorization(): ClaimAuthorization {
  return {
    contractAddress: "",
    action: 0,
  };
}
export const ClaimAuthorization = {
  encode(message: ClaimAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimAuthorization {
    const obj = createBaseClaimAuthorization();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (isSet(object.action)) obj.action = actionFromJSON(object.action);
    return obj;
  },
  toJSON(message: ClaimAuthorization): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromPartial(object: Partial<ClaimAuthorization>): ClaimAuthorization {
    const message = createBaseClaimAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.action = object.action ?? 0;
    return message;
  },
};
function createBaseParams(): Params {
  return {
    airdropEnabled: false,
    airdropStartTime: Timestamp.fromPartial({}),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: "",
    allowedClaimers: [],
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropEnabled === true) {
      writer.uint32(8).bool(message.airdropEnabled);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(message.airdropStartTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(42).string(message.claimDenom);
    }
    for (const v of message.allowedClaimers) {
      ClaimAuthorization.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropEnabled = reader.bool();
          break;
        case 2:
          message.airdropStartTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimDenom = reader.string();
          break;
        case 6:
          message.allowedClaimers.push(ClaimAuthorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.airdropEnabled)) obj.airdropEnabled = Boolean(object.airdropEnabled);
    if (isSet(object.airdropStartTime)) obj.airdropStartTime = fromJsonTimestamp(object.airdropStartTime);
    if (isSet(object.durationUntilDecay))
      obj.durationUntilDecay = Duration.fromJSON(object.durationUntilDecay);
    if (isSet(object.durationOfDecay)) obj.durationOfDecay = Duration.fromJSON(object.durationOfDecay);
    if (isSet(object.claimDenom)) obj.claimDenom = String(object.claimDenom);
    if (Array.isArray(object?.allowedClaimers))
      obj.allowedClaimers = object.allowedClaimers.map((e: any) => ClaimAuthorization.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.airdropEnabled !== undefined && (obj.airdropEnabled = message.airdropEnabled);
    message.airdropStartTime !== undefined &&
      (obj.airdropStartTime = fromTimestamp(message.airdropStartTime).toISOString());
    message.durationUntilDecay !== undefined &&
      (obj.durationUntilDecay = message.durationUntilDecay
        ? Duration.toJSON(message.durationUntilDecay)
        : undefined);
    message.durationOfDecay !== undefined &&
      (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    if (message.allowedClaimers) {
      obj.allowedClaimers = message.allowedClaimers.map((e) =>
        e ? ClaimAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.allowedClaimers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.airdropEnabled = object.airdropEnabled ?? false;
    if (object.airdropStartTime !== undefined && object.airdropStartTime !== null) {
      message.airdropStartTime = Timestamp.fromPartial(object.airdropStartTime);
    }
    if (object.durationUntilDecay !== undefined && object.durationUntilDecay !== null) {
      message.durationUntilDecay = Duration.fromPartial(object.durationUntilDecay);
    }
    if (object.durationOfDecay !== undefined && object.durationOfDecay !== null) {
      message.durationOfDecay = Duration.fromPartial(object.durationOfDecay);
    }
    message.claimDenom = object.claimDenom ?? "";
    message.allowedClaimers = object.allowedClaimers?.map((e) => ClaimAuthorization.fromPartial(e)) || [];
    return message;
  },
};
