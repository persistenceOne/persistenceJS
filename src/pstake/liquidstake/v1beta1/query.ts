/* eslint-disable */
import { Params, LiquidValidatorState, NetAmountState } from "./liquidstake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.liquidstake.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
/**
 * QueryLiquidValidatorsRequest is the request type for the
 * Query/LiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsRequest {}
/**
 * QueryLiquidValidatorsResponse is the response type for the
 * Query/LiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsResponse {
  liquidValidators: LiquidValidatorState[];
}
/** QueryStatesRequest is the request type for the Query/States RPC method. */
export interface QueryStatesRequest {}
/** QueryStatesResponse is the response type for the Query/States RPC method. */
export interface QueryStatesResponse {
  netAmountState: NetAmountState;
}
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
function createBaseQueryLiquidValidatorsRequest(): QueryLiquidValidatorsRequest {
  return {};
}
export const QueryLiquidValidatorsRequest = {
  encode(_: QueryLiquidValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsRequest();
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
  fromJSON(_: any): QueryLiquidValidatorsRequest {
    const obj = createBaseQueryLiquidValidatorsRequest();
    return obj;
  },
  toJSON(_: QueryLiquidValidatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest {
    const message = createBaseQueryLiquidValidatorsRequest();
    return message;
  },
};
function createBaseQueryLiquidValidatorsResponse(): QueryLiquidValidatorsResponse {
  return {
    liquidValidators: [],
  };
}
export const QueryLiquidValidatorsResponse = {
  encode(message: QueryLiquidValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidValidators) {
      LiquidValidatorState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidators.push(LiquidValidatorState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorsResponse {
    const obj = createBaseQueryLiquidValidatorsResponse();
    if (Array.isArray(object?.liquidValidators))
      obj.liquidValidators = object.liquidValidators.map((e: any) => LiquidValidatorState.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryLiquidValidatorsResponse): unknown {
    const obj: any = {};
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map((e) =>
        e ? LiquidValidatorState.toJSON(e) : undefined,
      );
    } else {
      obj.liquidValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsResponse>): QueryLiquidValidatorsResponse {
    const message = createBaseQueryLiquidValidatorsResponse();
    message.liquidValidators = object.liquidValidators?.map((e) => LiquidValidatorState.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryStatesRequest(): QueryStatesRequest {
  return {};
}
export const QueryStatesRequest = {
  encode(_: QueryStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatesRequest();
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
  fromJSON(_: any): QueryStatesRequest {
    const obj = createBaseQueryStatesRequest();
    return obj;
  },
  toJSON(_: QueryStatesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryStatesRequest>): QueryStatesRequest {
    const message = createBaseQueryStatesRequest();
    return message;
  },
};
function createBaseQueryStatesResponse(): QueryStatesResponse {
  return {
    netAmountState: NetAmountState.fromPartial({}),
  };
}
export const QueryStatesResponse = {
  encode(message: QueryStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.netAmountState !== undefined) {
      NetAmountState.encode(message.netAmountState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.netAmountState = NetAmountState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStatesResponse {
    const obj = createBaseQueryStatesResponse();
    if (isSet(object.netAmountState)) obj.netAmountState = NetAmountState.fromJSON(object.netAmountState);
    return obj;
  },
  toJSON(message: QueryStatesResponse): unknown {
    const obj: any = {};
    message.netAmountState !== undefined &&
      (obj.netAmountState = message.netAmountState
        ? NetAmountState.toJSON(message.netAmountState)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryStatesResponse>): QueryStatesResponse {
    const message = createBaseQueryStatesResponse();
    if (object.netAmountState !== undefined && object.netAmountState !== null) {
      message.netAmountState = NetAmountState.fromPartial(object.netAmountState);
    }
    return message;
  },
};
/** Query defines the gRPC query service for the liquidstake module. */
export interface Query {
  /** Params returns parameters of the liquidstake module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * LiquidValidators returns liquid validators with states of the liquidstake
   * module.
   */
  LiquidValidators(request?: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
  /** States returns states of the liquidstake module. */
  States(request?: QueryStatesRequest): Promise<QueryStatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.LiquidValidators = this.LiquidValidators.bind(this);
    this.States = this.States.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  LiquidValidators(request: QueryLiquidValidatorsRequest = {}): Promise<QueryLiquidValidatorsResponse> {
    const data = QueryLiquidValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Query", "LiquidValidators", data);
    return promise.then((data) => QueryLiquidValidatorsResponse.decode(new BinaryReader(data)));
  }
  States(request: QueryStatesRequest = {}): Promise<QueryStatesResponse> {
    const data = QueryStatesRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstake.v1beta1.Query", "States", data);
    return promise.then((data) => QueryStatesResponse.decode(new BinaryReader(data)));
  }
}
