/* eslint-disable */
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v1";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
  /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
  hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
  /** denom_trace returns the requested denomination trace information. */
  denomTrace: DenomTrace;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
  /** denom_traces returns all denominations trace information. */
  denomTraces: DenomTrace[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
  /** The denomination trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
  /** the escrow account address */
  escrowAddress: string;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequest {
  denom: string;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponse {
  amount: Coin;
}
function createBaseQueryDenomTraceRequest(): QueryDenomTraceRequest {
  return {
    hash: "",
  };
}
export const QueryDenomTraceRequest = {
  encode(message: QueryDenomTraceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceRequest {
    const obj = createBaseQueryDenomTraceRequest();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  toJSON(message: QueryDenomTraceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomTraceRequest>, I>>(object: I): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
};
function createBaseQueryDenomTraceResponse(): QueryDenomTraceResponse {
  return {
    denomTrace: DenomTrace.fromPartial({}),
  };
}
export const QueryDenomTraceResponse = {
  encode(message: QueryDenomTraceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceResponse {
    const obj = createBaseQueryDenomTraceResponse();
    if (isSet(object.denomTrace)) obj.denomTrace = DenomTrace.fromJSON(object.denomTrace);
    return obj;
  },
  toJSON(message: QueryDenomTraceResponse): unknown {
    const obj: any = {};
    message.denomTrace !== undefined &&
      (obj.denomTrace = message.denomTrace ? DenomTrace.toJSON(message.denomTrace) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomTraceResponse>, I>>(object: I): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    if (object.denomTrace !== undefined && object.denomTrace !== null) {
      message.denomTrace = DenomTrace.fromPartial(object.denomTrace);
    }
    return message;
  },
};
function createBaseQueryDenomTracesRequest(): QueryDenomTracesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryDenomTracesRequest = {
  encode(message: QueryDenomTracesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTracesRequest {
    const obj = createBaseQueryDenomTracesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDenomTracesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomTracesRequest>, I>>(object: I): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDenomTracesResponse(): QueryDenomTracesResponse {
  return {
    denomTraces: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryDenomTracesResponse = {
  encode(message: QueryDenomTracesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTracesResponse {
    const obj = createBaseQueryDenomTracesResponse();
    if (Array.isArray(object?.denomTraces))
      obj.denomTraces = object.denomTraces.map((e: any) => DenomTrace.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDenomTracesResponse): unknown {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map((e) => (e ? DenomTrace.toJSON(e) : undefined));
    } else {
      obj.denomTraces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomTracesResponse>, I>>(
    object: I,
  ): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denomTraces?.map((e) => DenomTrace.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
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
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryDenomHashRequest(): QueryDenomHashRequest {
  return {
    trace: "",
  };
}
export const QueryDenomHashRequest = {
  encode(message: QueryDenomHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomHashRequest {
    const obj = createBaseQueryDenomHashRequest();
    if (isSet(object.trace)) obj.trace = String(object.trace);
    return obj;
  },
  toJSON(message: QueryDenomHashRequest): unknown {
    const obj: any = {};
    message.trace !== undefined && (obj.trace = message.trace);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomHashRequest>, I>>(object: I): QueryDenomHashRequest {
    const message = createBaseQueryDenomHashRequest();
    message.trace = object.trace ?? "";
    return message;
  },
};
function createBaseQueryDenomHashResponse(): QueryDenomHashResponse {
  return {
    hash: "",
  };
}
export const QueryDenomHashResponse = {
  encode(message: QueryDenomHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomHashResponse {
    const obj = createBaseQueryDenomHashResponse();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  toJSON(message: QueryDenomHashResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomHashResponse>, I>>(object: I): QueryDenomHashResponse {
    const message = createBaseQueryDenomHashResponse();
    message.hash = object.hash ?? "";
    return message;
  },
};
function createBaseQueryEscrowAddressRequest(): QueryEscrowAddressRequest {
  return {
    portId: "",
    channelId: "",
  };
}
export const QueryEscrowAddressRequest = {
  encode(message: QueryEscrowAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEscrowAddressRequest {
    const obj = createBaseQueryEscrowAddressRequest();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: QueryEscrowAddressRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEscrowAddressRequest>, I>>(
    object: I,
  ): QueryEscrowAddressRequest {
    const message = createBaseQueryEscrowAddressRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};
function createBaseQueryEscrowAddressResponse(): QueryEscrowAddressResponse {
  return {
    escrowAddress: "",
  };
}
export const QueryEscrowAddressResponse = {
  encode(message: QueryEscrowAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.escrowAddress !== "") {
      writer.uint32(10).string(message.escrowAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrowAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEscrowAddressResponse {
    const obj = createBaseQueryEscrowAddressResponse();
    if (isSet(object.escrowAddress)) obj.escrowAddress = String(object.escrowAddress);
    return obj;
  },
  toJSON(message: QueryEscrowAddressResponse): unknown {
    const obj: any = {};
    message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEscrowAddressResponse>, I>>(
    object: I,
  ): QueryEscrowAddressResponse {
    const message = createBaseQueryEscrowAddressResponse();
    message.escrowAddress = object.escrowAddress ?? "";
    return message;
  },
};
function createBaseQueryTotalEscrowForDenomRequest(): QueryTotalEscrowForDenomRequest {
  return {
    denom: "",
  };
}
export const QueryTotalEscrowForDenomRequest = {
  encode(message: QueryTotalEscrowForDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalEscrowForDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalEscrowForDenomRequest {
    const obj = createBaseQueryTotalEscrowForDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryTotalEscrowForDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalEscrowForDenomRequest>, I>>(
    object: I,
  ): QueryTotalEscrowForDenomRequest {
    const message = createBaseQueryTotalEscrowForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryTotalEscrowForDenomResponse(): QueryTotalEscrowForDenomResponse {
  return {
    amount: Coin.fromPartial({}),
  };
}
export const QueryTotalEscrowForDenomResponse = {
  encode(message: QueryTotalEscrowForDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalEscrowForDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalEscrowForDenomResponse {
    const obj = createBaseQueryTotalEscrowForDenomResponse();
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: QueryTotalEscrowForDenomResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalEscrowForDenomResponse>, I>>(
    object: I,
  ): QueryTotalEscrowForDenomResponse {
    const message = createBaseQueryTotalEscrowForDenomResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  DenomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
  /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomTrace = this.DenomTrace.bind(this);
    this.DenomTraces = this.DenomTraces.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomHash = this.DenomHash.bind(this);
    this.EscrowAddress = this.EscrowAddress.bind(this);
    this.TotalEscrowForDenom = this.TotalEscrowForDenom.bind(this);
  }
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then((data) => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  }
  DenomTraces(
    request: QueryDenomTracesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then((data) => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
    return promise.then((data) => QueryDenomHashResponse.decode(new _m0.Reader(data)));
  }
  EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
    return promise.then((data) => QueryEscrowAddressResponse.decode(new _m0.Reader(data)));
  }
  TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse> {
    const data = QueryTotalEscrowForDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "TotalEscrowForDenom", data);
    return promise.then((data) => QueryTotalEscrowForDenomResponse.decode(new _m0.Reader(data)));
  }
}
