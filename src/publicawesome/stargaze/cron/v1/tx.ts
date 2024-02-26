/* eslint-disable */
import { Params } from "./cron";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, Rpc } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.cron.v1";
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContract {
  /**
   * Authority is the address of the governance account or any whitelisted
   * address
   */
  authority: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface MsgPromoteToPrivilegedContractResponse {}
export interface MsgDemoteFromPrivilegedContract {
  /**
   * Authority is the address of the governance account or any whitelisted
   * address
   */
  authority: string;
  /** Contract is the bech32 address of the smart contract */
  contract: string;
}
export interface MsgDemoteFromPrivilegedContractResponse {}
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsResponse {}
function createBaseMsgPromoteToPrivilegedContract(): MsgPromoteToPrivilegedContract {
  return {
    authority: "",
    contract: "",
  };
}
export const MsgPromoteToPrivilegedContract = {
  encode(
    message: MsgPromoteToPrivilegedContract,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPromoteToPrivilegedContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPromoteToPrivilegedContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPromoteToPrivilegedContract {
    const obj = createBaseMsgPromoteToPrivilegedContract();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  toJSON(message: MsgPromoteToPrivilegedContract): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: Partial<MsgPromoteToPrivilegedContract>): MsgPromoteToPrivilegedContract {
    const message = createBaseMsgPromoteToPrivilegedContract();
    message.authority = object.authority ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};
function createBaseMsgPromoteToPrivilegedContractResponse(): MsgPromoteToPrivilegedContractResponse {
  return {};
}
export const MsgPromoteToPrivilegedContractResponse = {
  encode(
    _: MsgPromoteToPrivilegedContractResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPromoteToPrivilegedContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPromoteToPrivilegedContractResponse();
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
  fromJSON(_: any): MsgPromoteToPrivilegedContractResponse {
    const obj = createBaseMsgPromoteToPrivilegedContractResponse();
    return obj;
  },
  toJSON(_: MsgPromoteToPrivilegedContractResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgPromoteToPrivilegedContractResponse>): MsgPromoteToPrivilegedContractResponse {
    const message = createBaseMsgPromoteToPrivilegedContractResponse();
    return message;
  },
};
function createBaseMsgDemoteFromPrivilegedContract(): MsgDemoteFromPrivilegedContract {
  return {
    authority: "",
    contract: "",
  };
}
export const MsgDemoteFromPrivilegedContract = {
  encode(
    message: MsgDemoteFromPrivilegedContract,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDemoteFromPrivilegedContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDemoteFromPrivilegedContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDemoteFromPrivilegedContract {
    const obj = createBaseMsgDemoteFromPrivilegedContract();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  toJSON(message: MsgDemoteFromPrivilegedContract): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: Partial<MsgDemoteFromPrivilegedContract>): MsgDemoteFromPrivilegedContract {
    const message = createBaseMsgDemoteFromPrivilegedContract();
    message.authority = object.authority ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};
function createBaseMsgDemoteFromPrivilegedContractResponse(): MsgDemoteFromPrivilegedContractResponse {
  return {};
}
export const MsgDemoteFromPrivilegedContractResponse = {
  encode(
    _: MsgDemoteFromPrivilegedContractResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDemoteFromPrivilegedContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDemoteFromPrivilegedContractResponse();
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
  fromJSON(_: any): MsgDemoteFromPrivilegedContractResponse {
    const obj = createBaseMsgDemoteFromPrivilegedContractResponse();
    return obj;
  },
  toJSON(_: MsgDemoteFromPrivilegedContractResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDemoteFromPrivilegedContractResponse>): MsgDemoteFromPrivilegedContractResponse {
    const message = createBaseMsgDemoteFromPrivilegedContractResponse();
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
/** Msg defines the alloc Msg service. */
export interface Msg {
  /** PromoteToPrivilegedContract promotes a contract to privileged status. */
  PromoteToPrivilegedContract(
    request: MsgPromoteToPrivilegedContract,
  ): Promise<MsgPromoteToPrivilegedContractResponse>;
  /** DemoteFromPrivilegedContract demotes a contract from privileged status. */
  DemoteFromPrivilegedContract(
    request: MsgDemoteFromPrivilegedContract,
  ): Promise<MsgDemoteFromPrivilegedContractResponse>;
  /** UpdateParams updates the cron module's parameters. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PromoteToPrivilegedContract = this.PromoteToPrivilegedContract.bind(this);
    this.DemoteFromPrivilegedContract = this.DemoteFromPrivilegedContract.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  PromoteToPrivilegedContract(
    request: MsgPromoteToPrivilegedContract,
  ): Promise<MsgPromoteToPrivilegedContractResponse> {
    const data = MsgPromoteToPrivilegedContract.encode(request).finish();
    const promise = this.rpc.request(
      "publicawesome.stargaze.cron.v1.Msg",
      "PromoteToPrivilegedContract",
      data,
    );
    return promise.then((data) => MsgPromoteToPrivilegedContractResponse.decode(new BinaryReader(data)));
  }
  DemoteFromPrivilegedContract(
    request: MsgDemoteFromPrivilegedContract,
  ): Promise<MsgDemoteFromPrivilegedContractResponse> {
    const data = MsgDemoteFromPrivilegedContract.encode(request).finish();
    const promise = this.rpc.request(
      "publicawesome.stargaze.cron.v1.Msg",
      "DemoteFromPrivilegedContract",
      data,
    );
    return promise.then((data) => MsgDemoteFromPrivilegedContractResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.cron.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
