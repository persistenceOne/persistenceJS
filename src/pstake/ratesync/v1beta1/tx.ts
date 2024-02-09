/* eslint-disable */
import { HostChain } from "./ratesync";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.ratesync.v1beta1";
export interface MsgCreateHostChain {
  authority: string;
  hostChain: HostChain;
}
export interface MsgCreateHostChainResponse {
  iD: bigint;
}
export interface MsgUpdateHostChain {
  authority: string;
  hostChain: HostChain;
}
export interface MsgUpdateHostChainResponse {}
export interface MsgDeleteHostChain {
  authority: string;
  iD: bigint;
}
export interface MsgDeleteHostChainResponse {}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsResponse {}
function createBaseMsgCreateHostChain(): MsgCreateHostChain {
  return {
    authority: "",
    hostChain: HostChain.fromPartial({}),
  };
}
export const MsgCreateHostChain = {
  encode(message: MsgCreateHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateHostChain {
    const obj = createBaseMsgCreateHostChain();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.hostChain)) obj.hostChain = HostChain.fromJSON(object.hostChain);
    return obj;
  },
  toJSON(message: MsgCreateHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.hostChain !== undefined &&
      (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateHostChain>): MsgCreateHostChain {
    const message = createBaseMsgCreateHostChain();
    message.authority = object.authority ?? "";
    if (object.hostChain !== undefined && object.hostChain !== null) {
      message.hostChain = HostChain.fromPartial(object.hostChain);
    }
    return message;
  },
};
function createBaseMsgCreateHostChainResponse(): MsgCreateHostChainResponse {
  return {
    iD: BigInt(0),
  };
}
export const MsgCreateHostChainResponse = {
  encode(message: MsgCreateHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateHostChainResponse {
    const obj = createBaseMsgCreateHostChainResponse();
    if (isSet(object.iD)) obj.iD = BigInt(object.iD.toString());
    return obj;
  },
  toJSON(message: MsgCreateHostChainResponse): unknown {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateHostChainResponse>): MsgCreateHostChainResponse {
    const message = createBaseMsgCreateHostChainResponse();
    if (object.iD !== undefined && object.iD !== null) {
      message.iD = BigInt(object.iD.toString());
    }
    return message;
  },
};
function createBaseMsgUpdateHostChain(): MsgUpdateHostChain {
  return {
    authority: "",
    hostChain: HostChain.fromPartial({}),
  };
}
export const MsgUpdateHostChain = {
  encode(message: MsgUpdateHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateHostChain {
    const obj = createBaseMsgUpdateHostChain();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.hostChain)) obj.hostChain = HostChain.fromJSON(object.hostChain);
    return obj;
  },
  toJSON(message: MsgUpdateHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.hostChain !== undefined &&
      (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateHostChain>): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    message.authority = object.authority ?? "";
    if (object.hostChain !== undefined && object.hostChain !== null) {
      message.hostChain = HostChain.fromPartial(object.hostChain);
    }
    return message;
  },
};
function createBaseMsgUpdateHostChainResponse(): MsgUpdateHostChainResponse {
  return {};
}
export const MsgUpdateHostChainResponse = {
  encode(_: MsgUpdateHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChainResponse();
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
  fromJSON(_: any): MsgUpdateHostChainResponse {
    const obj = createBaseMsgUpdateHostChainResponse();
    return obj;
  },
  toJSON(_: MsgUpdateHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateHostChainResponse>): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
};
function createBaseMsgDeleteHostChain(): MsgDeleteHostChain {
  return {
    authority: "",
    iD: BigInt(0),
  };
}
export const MsgDeleteHostChain = {
  encode(message: MsgDeleteHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteHostChain {
    const obj = createBaseMsgDeleteHostChain();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.iD)) obj.iD = BigInt(object.iD.toString());
    return obj;
  },
  toJSON(message: MsgDeleteHostChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteHostChain>): MsgDeleteHostChain {
    const message = createBaseMsgDeleteHostChain();
    message.authority = object.authority ?? "";
    if (object.iD !== undefined && object.iD !== null) {
      message.iD = BigInt(object.iD.toString());
    }
    return message;
  },
};
function createBaseMsgDeleteHostChainResponse(): MsgDeleteHostChainResponse {
  return {};
}
export const MsgDeleteHostChainResponse = {
  encode(_: MsgDeleteHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteHostChainResponse();
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
  fromJSON(_: any): MsgDeleteHostChainResponse {
    const obj = createBaseMsgDeleteHostChainResponse();
    return obj;
  },
  toJSON(_: MsgDeleteHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDeleteHostChainResponse>): MsgDeleteHostChainResponse {
    const message = createBaseMsgDeleteHostChainResponse();
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
/** Msg defines the Msg service. */
export interface Msg {
  CreateHostChain(request: MsgCreateHostChain): Promise<MsgCreateHostChainResponse>;
  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse>;
  DeleteHostChain(request: MsgDeleteHostChain): Promise<MsgDeleteHostChainResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateHostChain = this.CreateHostChain.bind(this);
    this.UpdateHostChain = this.UpdateHostChain.bind(this);
    this.DeleteHostChain = this.DeleteHostChain.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateHostChain(request: MsgCreateHostChain): Promise<MsgCreateHostChainResponse> {
    const data = MsgCreateHostChain.encode(request).finish();
    const promise = this.rpc.request("pstake.ratesync.v1beta1.Msg", "CreateHostChain", data);
    return promise.then((data) => MsgCreateHostChainResponse.decode(new BinaryReader(data)));
  }
  UpdateHostChain(request: MsgUpdateHostChain): Promise<MsgUpdateHostChainResponse> {
    const data = MsgUpdateHostChain.encode(request).finish();
    const promise = this.rpc.request("pstake.ratesync.v1beta1.Msg", "UpdateHostChain", data);
    return promise.then((data) => MsgUpdateHostChainResponse.decode(new BinaryReader(data)));
  }
  DeleteHostChain(request: MsgDeleteHostChain): Promise<MsgDeleteHostChainResponse> {
    const data = MsgDeleteHostChain.encode(request).finish();
    const promise = this.rpc.request("pstake.ratesync.v1beta1.Msg", "DeleteHostChain", data);
    return promise.then((data) => MsgDeleteHostChainResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pstake.ratesync.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
