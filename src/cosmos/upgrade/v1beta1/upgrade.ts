//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   */
  /** @deprecated */
  time: Timestamp;
  /** The height at which the upgrade must be performed. */
  height: bigint;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   */
  /** @deprecated */
  upgradedClientState: Any;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 */
/** @deprecated */
export interface SoftwareUpgradeProposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */
  description: string;
  /** plan of the proposal */
  plan: Plan;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 */
/** @deprecated */
export interface CancelSoftwareUpgradeProposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */
  description: string;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersion {
  /** name of the app module */
  name: string;
  /** consensus version of the app module */
  version: bigint;
}
function createBasePlan(): Plan {
  return {
    name: "",
    time: Timestamp.fromPartial({}),
    height: BigInt(0),
    info: "",
    upgradedClientState: Any.fromPartial({}),
  };
}
export const Plan = {
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Plan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Plan {
    const obj = createBasePlan();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.upgradedClientState)) obj.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    return obj;
  },
  toJSON(message: Plan): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.info !== undefined && (obj.info = message.info);
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.name = object.name ?? "";
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.info = object.info ?? "";
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    }
    return message;
  },
};
function createBaseSoftwareUpgradeProposal(): SoftwareUpgradeProposal {
  return {
    title: "",
    description: "",
    plan: Plan.fromPartial({}),
  };
}
export const SoftwareUpgradeProposal = {
  encode(message: SoftwareUpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SoftwareUpgradeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSoftwareUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SoftwareUpgradeProposal {
    const obj = createBaseSoftwareUpgradeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    return obj;
  },
  toJSON(message: SoftwareUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal {
    const message = createBaseSoftwareUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    }
    return message;
  },
};
function createBaseCancelSoftwareUpgradeProposal(): CancelSoftwareUpgradeProposal {
  return {
    title: "",
    description: "",
  };
}
export const CancelSoftwareUpgradeProposal = {
  encode(message: CancelSoftwareUpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelSoftwareUpgradeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSoftwareUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CancelSoftwareUpgradeProposal {
    const obj = createBaseCancelSoftwareUpgradeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: CancelSoftwareUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: Partial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal {
    const message = createBaseCancelSoftwareUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};
function createBaseModuleVersion(): ModuleVersion {
  return {
    name: "",
    version: BigInt(0),
  };
}
export const ModuleVersion = {
  encode(message: ModuleVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleVersion {
    const obj = createBaseModuleVersion();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.version)) obj.version = BigInt(object.version.toString());
    return obj;
  },
  toJSON(message: ModuleVersion): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ModuleVersion>): ModuleVersion {
    const message = createBaseModuleVersion();
    message.name = object.name ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version.toString());
    }
    return message;
  },
};
