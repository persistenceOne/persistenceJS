/* eslint-disable */
import { EpochInfo } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "persistence.epochs.v1beta1";
export interface QueryEpochsInfoRequest {}
export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
}
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochResponse {
  currentEpoch: bigint;
}
function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {};
}
export const QueryEpochsInfoRequest = {
  encode(_: QueryEpochsInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoRequest();
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
  fromJSON(_: any): QueryEpochsInfoRequest {
    const obj = createBaseQueryEpochsInfoRequest();
    return obj;
  },
  toJSON(_: QueryEpochsInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    return message;
  },
};
function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return {
    epochs: [],
  };
}
export const QueryEpochsInfoResponse = {
  encode(message: QueryEpochsInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochsInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochsInfoResponse {
    const obj = createBaseQueryEpochsInfoResponse();
    if (Array.isArray(object?.epochs)) obj.epochs = object.epochs.map((e: any) => EpochInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryEpochsInfoResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => (e ? EpochInfo.toJSON(e) : undefined));
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: "",
  };
}
export const QueryCurrentEpochRequest = {
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentEpochRequest {
    const obj = createBaseQueryCurrentEpochRequest();
    if (isSet(object.identifier)) obj.identifier = String(object.identifier);
    return obj;
  },
  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: BigInt(0),
  };
}
export const QueryCurrentEpochResponse = {
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentEpochResponse {
    const obj = createBaseQueryCurrentEpochResponse();
    if (isSet(object.currentEpoch)) obj.currentEpoch = BigInt(object.currentEpoch.toString());
    return obj;
  },
  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = BigInt(object.currentEpoch.toString());
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EpochInfos = this.EpochInfos.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
  }
  EpochInfos(request: QueryEpochsInfoRequest = {}): Promise<QueryEpochsInfoResponse> {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.epochs.v1beta1.Query", "EpochInfos", data);
    return promise.then((data) => QueryEpochsInfoResponse.decode(new BinaryReader(data)));
  }
  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.epochs.v1beta1.Query", "CurrentEpoch", data);
    return promise.then((data) => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
  }
}
