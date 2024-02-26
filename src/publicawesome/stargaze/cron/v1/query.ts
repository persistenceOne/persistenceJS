/* eslint-disable */
import { Params } from "./cron";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, Rpc } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.cron.v1";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contractAddresses: string[];
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC
 * method.
 */
export interface QueryParamsRequest {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
function createBaseQueryListPrivilegedRequest(): QueryListPrivilegedRequest {
  return {};
}
export const QueryListPrivilegedRequest = {
  encode(_: QueryListPrivilegedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPrivilegedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrivilegedRequest();
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
  fromJSON(_: any): QueryListPrivilegedRequest {
    const obj = createBaseQueryListPrivilegedRequest();
    return obj;
  },
  toJSON(_: QueryListPrivilegedRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
};
function createBaseQueryListPrivilegedResponse(): QueryListPrivilegedResponse {
  return {
    contractAddresses: [],
  };
}
export const QueryListPrivilegedResponse = {
  encode(message: QueryListPrivilegedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPrivilegedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrivilegedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListPrivilegedResponse {
    const obj = createBaseQueryListPrivilegedResponse();
    if (Array.isArray(object?.contractAddresses))
      obj.contractAddresses = object.contractAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryListPrivilegedResponse): unknown {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** ListPrivileged queries the contracts which have the priviledge status */
  ListPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse>;
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListPrivileged = this.ListPrivileged.bind(this);
    this.Params = this.Params.bind(this);
  }
  ListPrivileged(request: QueryListPrivilegedRequest = {}): Promise<QueryListPrivilegedResponse> {
    const data = QueryListPrivilegedRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.cron.v1.Query", "ListPrivileged", data);
    return promise.then((data) => QueryListPrivilegedResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.cron.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
