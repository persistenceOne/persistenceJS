/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { LiquidValidator, Params, TokenizeShareRecord, TokenizeShareRecordReward } from "./liquid";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "gaia.liquid.v1beta1";
/**
 * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
 * RPC method.
 */
export interface QueryLiquidValidatorRequest {
  /**
   * QueryLiquidValidatorRequest is the request type for the Query/LiquidValidator
   * RPC method.
   */
  validatorAddr: string;
}
/**
 * QueryLiquidValidatorResponse is the response type for the
 * Query/LiquidValidator RPC method.
 */
export interface QueryLiquidValidatorResponse {
  liquidValidator: LiquidValidator;
}
/**
 * QueryLiquidValidatorsRequest is request type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryLiquidValidatorsResponse is response type for the
 * Query/QueryLiquidValidators RPC method.
 */
export interface QueryLiquidValidatorsResponse {
  liquidValidators: LiquidValidator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  /**
   * QueryTokenizeShareRecordByIdRequest is request type for the
   * Query/QueryTokenizeShareRecordById RPC method.
   */
  id: bigint;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record: TokenizeShareRecord;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  /**
   * QueryTokenizeShareRecordByDenomRequest is request type for the
   * Query/QueryTokenizeShareRecordByDenom RPC method.
   */
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record: TokenizeShareRecord;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  /**
   * QueryTokenizeShareRecordsOwnedRequest is request type for the
   * Query/QueryTokenizeShareRecordsOwned RPC method.
   */
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  /**
   * QueryLastTokenizeShareRecordIdResponse is response type for the
   * Query/QueryLastTokenizeShareRecordId RPC method.
   */
  id: bigint;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value: Coin;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  /**
   * QueryTotalLiquidStakedResponse is response type for the
   * Query/QueryQueryTotalLiquidStaked RPC method.
   */
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  /**
   * QueryTokenizeShareLockInfo queries the tokenize share lock information
   * associated with given account
   */
  address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
  ownerAddress: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
function createBaseQueryLiquidValidatorRequest(): QueryLiquidValidatorRequest {
  return {
    validatorAddr: "",
  };
}
export const QueryLiquidValidatorRequest = {
  encode(message: QueryLiquidValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorRequest {
    const obj = createBaseQueryLiquidValidatorRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryLiquidValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorRequest>): QueryLiquidValidatorRequest {
    const message = createBaseQueryLiquidValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};
function createBaseQueryLiquidValidatorResponse(): QueryLiquidValidatorResponse {
  return {
    liquidValidator: LiquidValidator.fromPartial({}),
  };
}
export const QueryLiquidValidatorResponse = {
  encode(message: QueryLiquidValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidValidator !== undefined) {
      LiquidValidator.encode(message.liquidValidator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidValidator = LiquidValidator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidValidatorResponse {
    const obj = createBaseQueryLiquidValidatorResponse();
    if (isSet(object.liquidValidator)) obj.liquidValidator = LiquidValidator.fromJSON(object.liquidValidator);
    return obj;
  },
  toJSON(message: QueryLiquidValidatorResponse): unknown {
    const obj: any = {};
    message.liquidValidator !== undefined &&
      (obj.liquidValidator = message.liquidValidator
        ? LiquidValidator.toJSON(message.liquidValidator)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorResponse>): QueryLiquidValidatorResponse {
    const message = createBaseQueryLiquidValidatorResponse();
    if (object.liquidValidator !== undefined && object.liquidValidator !== null) {
      message.liquidValidator = LiquidValidator.fromPartial(object.liquidValidator);
    }
    return message;
  },
};
function createBaseQueryLiquidValidatorsRequest(): QueryLiquidValidatorsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryLiquidValidatorsRequest = {
  encode(message: QueryLiquidValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidValidatorsRequest();
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
  fromJSON(object: any): QueryLiquidValidatorsRequest {
    const obj = createBaseQueryLiquidValidatorsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryLiquidValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsRequest>): QueryLiquidValidatorsRequest {
    const message = createBaseQueryLiquidValidatorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryLiquidValidatorsResponse(): QueryLiquidValidatorsResponse {
  return {
    liquidValidators: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryLiquidValidatorsResponse = {
  encode(message: QueryLiquidValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidValidators) {
      LiquidValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.liquidValidators.push(LiquidValidator.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryLiquidValidatorsResponse {
    const obj = createBaseQueryLiquidValidatorsResponse();
    if (Array.isArray(object?.liquidValidators))
      obj.liquidValidators = object.liquidValidators.map((e: any) => LiquidValidator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryLiquidValidatorsResponse): unknown {
    const obj: any = {};
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map((e) => (e ? LiquidValidator.toJSON(e) : undefined));
    } else {
      obj.liquidValidators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLiquidValidatorsResponse>): QueryLiquidValidatorsResponse {
    const message = createBaseQueryLiquidValidatorsResponse();
    message.liquidValidators = object.liquidValidators?.map((e) => LiquidValidator.fromPartial(e)) || [];
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
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: BigInt(0),
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  encode(
    message: QueryTokenizeShareRecordByIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdRequest {
    const obj = createBaseQueryTokenizeShareRecordByIdRequest();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: TokenizeShareRecord.fromPartial({}),
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  encode(
    message: QueryTokenizeShareRecordByIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdResponse {
    const obj = createBaseQueryTokenizeShareRecordByIdResponse();
    if (isSet(object.record)) obj.record = TokenizeShareRecord.fromJSON(object.record);
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordByIdResponse): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromPartial(object.record);
    }
    return message;
  },
};
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: "",
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  encode(
    message: QueryTokenizeShareRecordByDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
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
  fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest {
    const obj = createBaseQueryTokenizeShareRecordByDenomRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(
    object: Partial<QueryTokenizeShareRecordByDenomRequest>,
  ): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: TokenizeShareRecord.fromPartial({}),
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  encode(
    message: QueryTokenizeShareRecordByDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse {
    const obj = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (isSet(object.record)) obj.record = TokenizeShareRecord.fromJSON(object.record);
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordByDenomResponse): unknown {
    const obj: any = {};
    message.record !== undefined &&
      (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryTokenizeShareRecordByDenomResponse>,
  ): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromPartial(object.record);
    }
    return message;
  },
};
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: "",
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  encode(
    message: QueryTokenizeShareRecordsOwnedRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest {
    const obj = createBaseQueryTokenizeShareRecordsOwnedRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordsOwnedRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: [],
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  encode(
    message: QueryTokenizeShareRecordsOwnedResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse {
    const obj = createBaseQueryTokenizeShareRecordsOwnedResponse();
    if (Array.isArray(object?.records))
      obj.records = object.records.map((e: any) => TokenizeShareRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordsOwnedResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => (e ? TokenizeShareRecord.toJSON(e) : undefined));
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial(
    object: Partial<QueryTokenizeShareRecordsOwnedResponse>,
  ): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map((e) => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  encode(
    message: QueryAllTokenizeShareRecordsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
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
  fromJSON(object: any): QueryAllTokenizeShareRecordsRequest {
    const obj = createBaseQueryAllTokenizeShareRecordsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllTokenizeShareRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  encode(
    message: QueryAllTokenizeShareRecordsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllTokenizeShareRecordsResponse {
    const obj = createBaseQueryAllTokenizeShareRecordsResponse();
    if (Array.isArray(object?.records))
      obj.records = object.records.map((e: any) => TokenizeShareRecord.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllTokenizeShareRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => (e ? TokenizeShareRecord.toJSON(e) : undefined));
    } else {
      obj.records = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map((e) => TokenizeShareRecord.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  encode(
    _: QueryLastTokenizeShareRecordIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
  fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest {
    const obj = createBaseQueryLastTokenizeShareRecordIdRequest();
    return obj;
  },
  toJSON(_: QueryLastTokenizeShareRecordIdRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
};
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: BigInt(0),
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  encode(
    message: QueryLastTokenizeShareRecordIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse {
    const obj = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: QueryLastTokenizeShareRecordIdResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(
    object: Partial<QueryLastTokenizeShareRecordIdResponse>,
  ): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  encode(
    _: QueryTotalTokenizeSharedAssetsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
  fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest {
    const obj = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return obj;
  },
  toJSON(_: QueryTotalTokenizeSharedAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
};
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: Coin.fromPartial({}),
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  encode(
    message: QueryTotalTokenizeSharedAssetsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse {
    const obj = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (isSet(object.value)) obj.value = Coin.fromJSON(object.value);
    return obj;
  },
  toJSON(message: QueryTotalTokenizeSharedAssetsResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryTotalTokenizeSharedAssetsResponse>,
  ): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromPartial(object.value);
    }
    return message;
  },
};
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  encode(_: QueryTotalLiquidStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
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
  fromJSON(_: any): QueryTotalLiquidStaked {
    const obj = createBaseQueryTotalLiquidStaked();
    return obj;
  },
  toJSON(_: QueryTotalLiquidStaked): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
};
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: "",
  };
}
export const QueryTotalLiquidStakedResponse = {
  encode(
    message: QueryTotalLiquidStakedResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidStakedResponse {
    const obj = createBaseQueryTotalLiquidStakedResponse();
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    return obj;
  },
  toJSON(message: QueryTotalLiquidStakedResponse): unknown {
    const obj: any = {};
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
};
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: "",
  };
}
export const QueryTokenizeShareLockInfo = {
  encode(message: QueryTokenizeShareLockInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfo {
    const obj = createBaseQueryTokenizeShareLockInfo();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryTokenizeShareLockInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expirationTime: "",
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  encode(
    message: QueryTokenizeShareLockInfoResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfoResponse {
    const obj = createBaseQueryTokenizeShareLockInfoResponse();
    if (isSet(object.status)) obj.status = String(object.status);
    if (isSet(object.expirationTime)) obj.expirationTime = String(object.expirationTime);
    return obj;
  },
  toJSON(message: QueryTokenizeShareLockInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
};
function createBaseQueryTokenizeShareRecordRewardRequest(): QueryTokenizeShareRecordRewardRequest {
  return {
    ownerAddress: "",
  };
}
export const QueryTokenizeShareRecordRewardRequest = {
  encode(
    message: QueryTokenizeShareRecordRewardRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardRequest {
    const obj = createBaseQueryTokenizeShareRecordRewardRequest();
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordRewardRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};
function createBaseQueryTokenizeShareRecordRewardResponse(): QueryTokenizeShareRecordRewardResponse {
  return {
    rewards: [],
    total: [],
  };
}
export const QueryTokenizeShareRecordRewardResponse = {
  encode(
    message: QueryTokenizeShareRecordRewardResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardResponse {
    const obj = createBaseQueryTokenizeShareRecordRewardResponse();
    if (Array.isArray(object?.rewards))
      obj.rewards = object.rewards.map((e: any) => TokenizeShareRecordReward.fromJSON(e));
    if (Array.isArray(object?.total)) obj.total = object.total.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? TokenizeShareRecordReward.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial(
    object: Partial<QueryTokenizeShareRecordRewardResponse>,
  ): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map((e) => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * LiquidValidators queries all liquid validators.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  LiquidValidators(request?: QueryLiquidValidatorsRequest): Promise<QueryLiquidValidatorsResponse>;
  /** Query for an individual liquid validator by validator address */
  LiquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse>;
  /** Query for individual tokenize share record information by share by id */
  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest,
  ): Promise<QueryTokenizeShareRecordByIdResponse>;
  /** Query for individual tokenize share record information by share denom */
  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest,
  ): Promise<QueryTokenizeShareRecordByDenomResponse>;
  /** Query tokenize share records by address */
  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest,
  ): Promise<QueryTokenizeShareRecordsOwnedResponse>;
  /** Query for all tokenize share records */
  AllTokenizeShareRecords(
    request?: QueryAllTokenizeShareRecordsRequest,
  ): Promise<QueryAllTokenizeShareRecordsResponse>;
  /** Query for last tokenize share record id */
  LastTokenizeShareRecordId(
    request?: QueryLastTokenizeShareRecordIdRequest,
  ): Promise<QueryLastTokenizeShareRecordIdResponse>;
  /** Query for total tokenized staked assets */
  TotalTokenizeSharedAssets(
    request?: QueryTotalTokenizeSharedAssetsRequest,
  ): Promise<QueryTotalTokenizeSharedAssetsResponse>;
  /**
   * Query for total liquid staked (including tokenized shares or owned by an
   * liquid staking provider)
   */
  TotalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
  /** Query tokenize share locks */
  TokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
  /** Parameters queries the liquid parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** TokenizeShareRecordReward queries the tokenize share record rewards */
  TokenizeShareRecordReward(
    request: QueryTokenizeShareRecordRewardRequest,
  ): Promise<QueryTokenizeShareRecordRewardResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidValidators = this.LiquidValidators.bind(this);
    this.LiquidValidator = this.LiquidValidator.bind(this);
    this.TokenizeShareRecordById = this.TokenizeShareRecordById.bind(this);
    this.TokenizeShareRecordByDenom = this.TokenizeShareRecordByDenom.bind(this);
    this.TokenizeShareRecordsOwned = this.TokenizeShareRecordsOwned.bind(this);
    this.AllTokenizeShareRecords = this.AllTokenizeShareRecords.bind(this);
    this.LastTokenizeShareRecordId = this.LastTokenizeShareRecordId.bind(this);
    this.TotalTokenizeSharedAssets = this.TotalTokenizeSharedAssets.bind(this);
    this.TotalLiquidStaked = this.TotalLiquidStaked.bind(this);
    this.TokenizeShareLockInfo = this.TokenizeShareLockInfo.bind(this);
    this.Params = this.Params.bind(this);
    this.TokenizeShareRecordReward = this.TokenizeShareRecordReward.bind(this);
  }
  LiquidValidators(
    request: QueryLiquidValidatorsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryLiquidValidatorsResponse> {
    const data = QueryLiquidValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LiquidValidators", data);
    return promise.then((data) => QueryLiquidValidatorsResponse.decode(new BinaryReader(data)));
  }
  LiquidValidator(request: QueryLiquidValidatorRequest): Promise<QueryLiquidValidatorResponse> {
    const data = QueryLiquidValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LiquidValidator", data);
    return promise.then((data) => QueryLiquidValidatorResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest,
  ): Promise<QueryTokenizeShareRecordByIdResponse> {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then((data) => QueryTokenizeShareRecordByIdResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest,
  ): Promise<QueryTokenizeShareRecordByDenomResponse> {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then((data) => QueryTokenizeShareRecordByDenomResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest,
  ): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then((data) => QueryTokenizeShareRecordsOwnedResponse.decode(new BinaryReader(data)));
  }
  AllTokenizeShareRecords(
    request: QueryAllTokenizeShareRecordsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllTokenizeShareRecordsResponse> {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then((data) => QueryAllTokenizeShareRecordsResponse.decode(new BinaryReader(data)));
  }
  LastTokenizeShareRecordId(
    request: QueryLastTokenizeShareRecordIdRequest = {},
  ): Promise<QueryLastTokenizeShareRecordIdResponse> {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then((data) => QueryLastTokenizeShareRecordIdResponse.decode(new BinaryReader(data)));
  }
  TotalTokenizeSharedAssets(
    request: QueryTotalTokenizeSharedAssetsRequest = {},
  ): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then((data) => QueryTotalTokenizeSharedAssetsResponse.decode(new BinaryReader(data)));
  }
  TotalLiquidStaked(request: QueryTotalLiquidStaked = {}): Promise<QueryTotalLiquidStakedResponse> {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then((data) => QueryTotalLiquidStakedResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse> {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then((data) => QueryTokenizeShareLockInfoResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordReward(
    request: QueryTokenizeShareRecordRewardRequest,
  ): Promise<QueryTokenizeShareRecordRewardResponse> {
    const data = QueryTokenizeShareRecordRewardRequest.encode(request).finish();
    const promise = this.rpc.request("gaia.liquid.v1beta1.Query", "TokenizeShareRecordReward", data);
    return promise.then((data) => QueryTokenizeShareRecordRewardResponse.decode(new BinaryReader(data)));
  }
}
