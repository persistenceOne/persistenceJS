/* eslint-disable */
import { Plan } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** plan is the upgrade plan. */
  plan: Plan;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {}
function createBaseMsgSoftwareUpgrade(): MsgSoftwareUpgrade {
  return {
    authority: "",
    plan: Plan.fromPartial({}),
  };
}
export const MsgSoftwareUpgrade = {
  encode(message: MsgSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSoftwareUpgrade {
    const obj = createBaseMsgSoftwareUpgrade();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    return obj;
  },
  toJSON(message: MsgSoftwareUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = object.authority ?? "";
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    }
    return message;
  },
};
function createBaseMsgSoftwareUpgradeResponse(): MsgSoftwareUpgradeResponse {
  return {};
}
export const MsgSoftwareUpgradeResponse = {
  encode(_: MsgSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
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
  fromJSON(_: any): MsgSoftwareUpgradeResponse {
    const obj = createBaseMsgSoftwareUpgradeResponse();
    return obj;
  },
  toJSON(_: MsgSoftwareUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
};
function createBaseMsgCancelUpgrade(): MsgCancelUpgrade {
  return {
    authority: "",
  };
}
export const MsgCancelUpgrade = {
  encode(message: MsgCancelUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUpgrade {
    const obj = createBaseMsgCancelUpgrade();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgCancelUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUpgrade>): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgCancelUpgradeResponse(): MsgCancelUpgradeResponse {
  return {};
}
export const MsgCancelUpgradeResponse = {
  encode(_: MsgCancelUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
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
  fromJSON(_: any): MsgCancelUpgradeResponse {
    const obj = createBaseMsgCancelUpgradeResponse();
    return obj;
  },
  toJSON(_: MsgCancelUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
};
/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   *
   * Since: cosmos-sdk 0.46
   */
  SoftwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approved software upgrade.
   *
   * Since: cosmos-sdk 0.46
   */
  CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SoftwareUpgrade = this.SoftwareUpgrade.bind(this);
    this.CancelUpgrade = this.CancelUpgrade.bind(this);
  }
  SoftwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse> {
    const data = MsgSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
    return promise.then((data) => MsgSoftwareUpgradeResponse.decode(new BinaryReader(data)));
  }
  CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse> {
    const data = MsgCancelUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
    return promise.then((data) => MsgCancelUpgradeResponse.decode(new BinaryReader(data)));
  }
}
