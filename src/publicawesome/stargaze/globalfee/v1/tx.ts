/* eslint-disable */
import { CodeAuthorization, ContractAuthorization, Params } from "./globalfee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, Rpc } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.globalfee.v1";
export interface MsgSetCodeAuthorization {
  sender: string;
  codeAuthorization: CodeAuthorization;
}
export interface MsgSetCodeAuthorizationResponse {}
export interface MsgRemoveCodeAuthorization {
  sender: string;
  codeId: bigint;
}
export interface MsgRemoveCodeAuthorizationResponse {}
export interface MsgSetContractAuthorization {
  sender: string;
  contractAuthorization: ContractAuthorization;
}
export interface MsgSetContractAuthorizationResponse {}
export interface MsgRemoveContractAuthorization {
  sender: string;
  contractAddress: string;
}
export interface MsgRemoveContractAuthorizationResponse {}
export interface MsgUpdateParams {
  sender: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsResponse {}
function createBaseMsgSetCodeAuthorization(): MsgSetCodeAuthorization {
  return {
    sender: "",
    codeAuthorization: CodeAuthorization.fromPartial({}),
  };
}
export const MsgSetCodeAuthorization = {
  encode(message: MsgSetCodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeAuthorization !== undefined) {
      CodeAuthorization.encode(message.codeAuthorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeAuthorization = CodeAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetCodeAuthorization {
    const obj = createBaseMsgSetCodeAuthorization();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.codeAuthorization))
      obj.codeAuthorization = CodeAuthorization.fromJSON(object.codeAuthorization);
    return obj;
  },
  toJSON(message: MsgSetCodeAuthorization): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.codeAuthorization !== undefined &&
      (obj.codeAuthorization = message.codeAuthorization
        ? CodeAuthorization.toJSON(message.codeAuthorization)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetCodeAuthorization>): MsgSetCodeAuthorization {
    const message = createBaseMsgSetCodeAuthorization();
    message.sender = object.sender ?? "";
    if (object.codeAuthorization !== undefined && object.codeAuthorization !== null) {
      message.codeAuthorization = CodeAuthorization.fromPartial(object.codeAuthorization);
    }
    return message;
  },
};
function createBaseMsgSetCodeAuthorizationResponse(): MsgSetCodeAuthorizationResponse {
  return {};
}
export const MsgSetCodeAuthorizationResponse = {
  encode(_: MsgSetCodeAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetCodeAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCodeAuthorizationResponse();
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
  fromJSON(_: any): MsgSetCodeAuthorizationResponse {
    const obj = createBaseMsgSetCodeAuthorizationResponse();
    return obj;
  },
  toJSON(_: MsgSetCodeAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetCodeAuthorizationResponse>): MsgSetCodeAuthorizationResponse {
    const message = createBaseMsgSetCodeAuthorizationResponse();
    return message;
  },
};
function createBaseMsgRemoveCodeAuthorization(): MsgRemoveCodeAuthorization {
  return {
    sender: "",
    codeId: BigInt(0),
  };
}
export const MsgRemoveCodeAuthorization = {
  encode(message: MsgRemoveCodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveCodeAuthorization {
    const obj = createBaseMsgRemoveCodeAuthorization();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    return obj;
  },
  toJSON(message: MsgRemoveCodeAuthorization): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveCodeAuthorization>): MsgRemoveCodeAuthorization {
    const message = createBaseMsgRemoveCodeAuthorization();
    message.sender = object.sender ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
};
function createBaseMsgRemoveCodeAuthorizationResponse(): MsgRemoveCodeAuthorizationResponse {
  return {};
}
export const MsgRemoveCodeAuthorizationResponse = {
  encode(_: MsgRemoveCodeAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCodeAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCodeAuthorizationResponse();
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
  fromJSON(_: any): MsgRemoveCodeAuthorizationResponse {
    const obj = createBaseMsgRemoveCodeAuthorizationResponse();
    return obj;
  },
  toJSON(_: MsgRemoveCodeAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRemoveCodeAuthorizationResponse>): MsgRemoveCodeAuthorizationResponse {
    const message = createBaseMsgRemoveCodeAuthorizationResponse();
    return message;
  },
};
function createBaseMsgSetContractAuthorization(): MsgSetContractAuthorization {
  return {
    sender: "",
    contractAuthorization: ContractAuthorization.fromPartial({}),
  };
}
export const MsgSetContractAuthorization = {
  encode(message: MsgSetContractAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAuthorization !== undefined) {
      ContractAuthorization.encode(message.contractAuthorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContractAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAuthorization = ContractAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetContractAuthorization {
    const obj = createBaseMsgSetContractAuthorization();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contractAuthorization))
      obj.contractAuthorization = ContractAuthorization.fromJSON(object.contractAuthorization);
    return obj;
  },
  toJSON(message: MsgSetContractAuthorization): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAuthorization !== undefined &&
      (obj.contractAuthorization = message.contractAuthorization
        ? ContractAuthorization.toJSON(message.contractAuthorization)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetContractAuthorization>): MsgSetContractAuthorization {
    const message = createBaseMsgSetContractAuthorization();
    message.sender = object.sender ?? "";
    if (object.contractAuthorization !== undefined && object.contractAuthorization !== null) {
      message.contractAuthorization = ContractAuthorization.fromPartial(object.contractAuthorization);
    }
    return message;
  },
};
function createBaseMsgSetContractAuthorizationResponse(): MsgSetContractAuthorizationResponse {
  return {};
}
export const MsgSetContractAuthorizationResponse = {
  encode(_: MsgSetContractAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContractAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractAuthorizationResponse();
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
  fromJSON(_: any): MsgSetContractAuthorizationResponse {
    const obj = createBaseMsgSetContractAuthorizationResponse();
    return obj;
  },
  toJSON(_: MsgSetContractAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetContractAuthorizationResponse>): MsgSetContractAuthorizationResponse {
    const message = createBaseMsgSetContractAuthorizationResponse();
    return message;
  },
};
function createBaseMsgRemoveContractAuthorization(): MsgRemoveContractAuthorization {
  return {
    sender: "",
    contractAddress: "",
  };
}
export const MsgRemoveContractAuthorization = {
  encode(
    message: MsgRemoveContractAuthorization,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveContractAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveContractAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveContractAuthorization {
    const obj = createBaseMsgRemoveContractAuthorization();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: MsgRemoveContractAuthorization): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveContractAuthorization>): MsgRemoveContractAuthorization {
    const message = createBaseMsgRemoveContractAuthorization();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseMsgRemoveContractAuthorizationResponse(): MsgRemoveContractAuthorizationResponse {
  return {};
}
export const MsgRemoveContractAuthorizationResponse = {
  encode(
    _: MsgRemoveContractAuthorizationResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveContractAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveContractAuthorizationResponse();
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
  fromJSON(_: any): MsgRemoveContractAuthorizationResponse {
    const obj = createBaseMsgRemoveContractAuthorizationResponse();
    return obj;
  },
  toJSON(_: MsgRemoveContractAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRemoveContractAuthorizationResponse>): MsgRemoveContractAuthorizationResponse {
    const message = createBaseMsgRemoveContractAuthorizationResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    sender: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
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
          message.sender = reader.string();
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
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.sender = object.sender ?? "";
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
/** Msg defines the alloc Msg service. */
export interface Msg {
  SetCodeAuthorization(request: MsgSetCodeAuthorization): Promise<MsgSetCodeAuthorizationResponse>;
  RemoveCodeAuthorization(request: MsgRemoveCodeAuthorization): Promise<MsgRemoveCodeAuthorizationResponse>;
  SetContractAuthorization(
    request: MsgSetContractAuthorization,
  ): Promise<MsgSetContractAuthorizationResponse>;
  RemoveContractAuthorization(
    request: MsgRemoveContractAuthorization,
  ): Promise<MsgRemoveContractAuthorizationResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetCodeAuthorization = this.SetCodeAuthorization.bind(this);
    this.RemoveCodeAuthorization = this.RemoveCodeAuthorization.bind(this);
    this.SetContractAuthorization = this.SetContractAuthorization.bind(this);
    this.RemoveContractAuthorization = this.RemoveContractAuthorization.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SetCodeAuthorization(request: MsgSetCodeAuthorization): Promise<MsgSetCodeAuthorizationResponse> {
    const data = MsgSetCodeAuthorization.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.globalfee.v1.Msg", "SetCodeAuthorization", data);
    return promise.then((data) => MsgSetCodeAuthorizationResponse.decode(new BinaryReader(data)));
  }
  RemoveCodeAuthorization(request: MsgRemoveCodeAuthorization): Promise<MsgRemoveCodeAuthorizationResponse> {
    const data = MsgRemoveCodeAuthorization.encode(request).finish();
    const promise = this.rpc.request(
      "publicawesome.stargaze.globalfee.v1.Msg",
      "RemoveCodeAuthorization",
      data,
    );
    return promise.then((data) => MsgRemoveCodeAuthorizationResponse.decode(new BinaryReader(data)));
  }
  SetContractAuthorization(
    request: MsgSetContractAuthorization,
  ): Promise<MsgSetContractAuthorizationResponse> {
    const data = MsgSetContractAuthorization.encode(request).finish();
    const promise = this.rpc.request(
      "publicawesome.stargaze.globalfee.v1.Msg",
      "SetContractAuthorization",
      data,
    );
    return promise.then((data) => MsgSetContractAuthorizationResponse.decode(new BinaryReader(data)));
  }
  RemoveContractAuthorization(
    request: MsgRemoveContractAuthorization,
  ): Promise<MsgRemoveContractAuthorizationResponse> {
    const data = MsgRemoveContractAuthorization.encode(request).finish();
    const promise = this.rpc.request(
      "publicawesome.stargaze.globalfee.v1.Msg",
      "RemoveContractAuthorization",
      data,
    );
    return promise.then((data) => MsgRemoveContractAuthorizationResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.globalfee.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
