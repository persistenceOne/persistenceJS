/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  Validator,
  DelegationResponse,
  UnbondingDelegation,
  RedelegationResponse,
  HistoricalInfo,
  Pool,
  Params,
  TokenizeShareRecord,
} from "./staking";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse: DelegationResponse;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist: HistoricalInfo;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool;
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
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
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
function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsRequest {
    const obj = createBaseQueryValidatorsRequest();
    if (isSet(object.status)) obj.status = String(object.status);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryValidatorsResponse {
    const obj = createBaseQueryValidatorsResponse();
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddr: "",
  };
}
export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
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
  fromJSON(object: any): QueryValidatorRequest {
    const obj = createBaseQueryValidatorRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};
function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: Validator.fromPartial({}),
  };
}
export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorResponse {
    const obj = createBaseQueryValidatorResponse();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    return obj;
  },
  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    return message;
  },
};
function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryValidatorDelegationsRequest = {
  encode(
    message: QueryValidatorDelegationsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDelegationsRequest {
    const obj = createBaseQueryValidatorDelegationsRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryValidatorDelegationsResponse = {
  encode(
    message: QueryValidatorDelegationsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryValidatorDelegationsResponse {
    const obj = createBaseQueryValidatorDelegationsResponse();
    if (Array.isArray(object?.delegationResponses))
      obj.delegationResponses = object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined,
      );
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses =
      object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryValidatorUnbondingDelegationsRequest = {
  encode(
    message: QueryValidatorUnbondingDelegationsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    const obj = createBaseQueryValidatorUnbondingDelegationsRequest();
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryValidatorUnbondingDelegationsRequest>,
  ): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryValidatorUnbondingDelegationsResponse = {
  encode(
    message: QueryValidatorUnbondingDelegationsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    const obj = createBaseQueryValidatorUnbondingDelegationsResponse();
    if (Array.isArray(object?.unbondingResponses))
      obj.unbondingResponses = object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryValidatorUnbondingDelegationsResponse>,
  ): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses =
      object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
  };
}
export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRequest {
    const obj = createBaseQueryDelegationRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};
function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegationResponse: DelegationResponse.fromPartial({}),
  };
}
export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationResponse {
    const obj = createBaseQueryDelegationResponse();
    if (isSet(object.delegationResponse))
      obj.delegationResponse = DelegationResponse.fromJSON(object.delegationResponse);
    return obj;
  },
  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined &&
      (obj.delegationResponse = message.delegationResponse
        ? DelegationResponse.toJSON(message.delegationResponse)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    if (object.delegationResponse !== undefined && object.delegationResponse !== null) {
      message.delegationResponse = DelegationResponse.fromPartial(object.delegationResponse);
    }
    return message;
  },
};
function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
  };
}
export const QueryUnbondingDelegationRequest = {
  encode(
    message: QueryUnbondingDelegationRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingDelegationRequest {
    const obj = createBaseQueryUnbondingDelegationRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};
function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: UnbondingDelegation.fromPartial({}),
  };
}
export const QueryUnbondingDelegationResponse = {
  encode(
    message: QueryUnbondingDelegationResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingDelegationResponse {
    const obj = createBaseQueryUnbondingDelegationResponse();
    if (isSet(object.unbond)) obj.unbond = UnbondingDelegation.fromJSON(object.unbond);
    return obj;
  },
  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined &&
      (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = UnbondingDelegation.fromPartial(object.unbond);
    }
    return message;
  },
};
function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryDelegatorDelegationsRequest = {
  encode(
    message: QueryDelegatorDelegationsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    const obj = createBaseQueryDelegatorDelegationsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryDelegatorDelegationsResponse = {
  encode(
    message: QueryDelegatorDelegationsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    const obj = createBaseQueryDelegatorDelegationsResponse();
    if (Array.isArray(object?.delegationResponses))
      obj.delegationResponses = object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined,
      );
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses =
      object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(
    message: QueryDelegatorUnbondingDelegationsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    const obj = createBaseQueryDelegatorUnbondingDelegationsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryDelegatorUnbondingDelegationsRequest>,
  ): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(
    message: QueryDelegatorUnbondingDelegationsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    const obj = createBaseQueryDelegatorUnbondingDelegationsResponse();
    if (Array.isArray(object?.unbondingResponses))
      obj.unbondingResponses = object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryDelegatorUnbondingDelegationsResponse>,
  ): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses =
      object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationsRequest {
    const obj = createBaseQueryRedelegationsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.srcValidatorAddr)) obj.srcValidatorAddr = String(object.srcValidatorAddr);
    if (isSet(object.dstValidatorAddr)) obj.dstValidatorAddr = String(object.dstValidatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegationResponses: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryRedelegationsResponse {
    const obj = createBaseQueryRedelegationsResponse();
    if (Array.isArray(object?.redelegationResponses))
      obj.redelegationResponses = object.redelegationResponses.map((e: any) =>
        RedelegationResponse.fromJSON(e),
      );
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map((e) =>
        e ? RedelegationResponse.toJSON(e) : undefined,
      );
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses =
      object.redelegationResponses?.map((e) => RedelegationResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddr: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryDelegatorValidatorsRequest = {
  encode(
    message: QueryDelegatorValidatorsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const obj = createBaseQueryDelegatorValidatorsRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryDelegatorValidatorsResponse = {
  encode(
    message: QueryDelegatorValidatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const obj = createBaseQueryDelegatorValidatorsResponse();
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: "",
  };
}
export const QueryDelegatorValidatorRequest = {
  encode(
    message: QueryDelegatorValidatorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorRequest {
    const obj = createBaseQueryDelegatorValidatorRequest();
    if (isSet(object.delegatorAddr)) obj.delegatorAddr = String(object.delegatorAddr);
    if (isSet(object.validatorAddr)) obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};
function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: Validator.fromPartial({}),
  };
}
export const QueryDelegatorValidatorResponse = {
  encode(
    message: QueryDelegatorValidatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorResponse {
    const obj = createBaseQueryDelegatorValidatorResponse();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    return message;
  },
};
function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: BigInt(0),
  };
}
export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalInfoRequest {
    const obj = createBaseQueryHistoricalInfoRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: HistoricalInfo.fromPartial({}),
  };
}
export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalInfoResponse {
    const obj = createBaseQueryHistoricalInfoResponse();
    if (isSet(object.hist)) obj.hist = HistoricalInfo.fromJSON(object.hist);
    return obj;
  },
  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    if (object.hist !== undefined && object.hist !== null) {
      message.hist = HistoricalInfo.fromPartial(object.hist);
    }
    return message;
  },
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}
export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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
  fromJSON(_: any): QueryPoolRequest {
    const obj = createBaseQueryPoolRequest();
    return obj;
  },
  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({}),
  };
}
export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    const obj = createBaseQueryPoolResponse();
    if (isSet(object.pool)) obj.pool = Pool.fromJSON(object.pool);
    return obj;
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
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
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Validators queries all validators that match the given status.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /**
   * ValidatorDelegations queries delegate info for given validator.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /**
   * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  ValidatorUnbondingDelegations(
    request: QueryValidatorUnbondingDelegationsRequest,
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /**
   * DelegatorDelegations queries all delegations of a given delegator address.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  DelegatorUnbondingDelegations(
    request: QueryDelegatorUnbondingDelegationsRequest,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /**
   * Redelegations queries redelegations of given address.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
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
  /** Query for total liquid staked (including tokenized shares or owned by an liquid staking provider) */
  TotalLiquidStaked(request?: QueryTotalLiquidStaked): Promise<QueryTotalLiquidStakedResponse>;
  /** Query tokenize share locks */
  TokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  Pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Validators = this.Validators.bind(this);
    this.Validator = this.Validator.bind(this);
    this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
    this.ValidatorUnbondingDelegations = this.ValidatorUnbondingDelegations.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
    this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
    this.DelegatorUnbondingDelegations = this.DelegatorUnbondingDelegations.bind(this);
    this.Redelegations = this.Redelegations.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorValidator = this.DelegatorValidator.bind(this);
    this.TokenizeShareRecordById = this.TokenizeShareRecordById.bind(this);
    this.TokenizeShareRecordByDenom = this.TokenizeShareRecordByDenom.bind(this);
    this.TokenizeShareRecordsOwned = this.TokenizeShareRecordsOwned.bind(this);
    this.AllTokenizeShareRecords = this.AllTokenizeShareRecords.bind(this);
    this.LastTokenizeShareRecordId = this.LastTokenizeShareRecordId.bind(this);
    this.TotalTokenizeSharedAssets = this.TotalTokenizeSharedAssets.bind(this);
    this.TotalLiquidStaked = this.TotalLiquidStaked.bind(this);
    this.TokenizeShareLockInfo = this.TokenizeShareLockInfo.bind(this);
    this.HistoricalInfo = this.HistoricalInfo.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Params = this.Params.bind(this);
  }
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then((data) => QueryValidatorsResponse.decode(new BinaryReader(data)));
  }
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then((data) => QueryValidatorResponse.decode(new BinaryReader(data)));
  }
  ValidatorDelegations(
    request: QueryValidatorDelegationsRequest,
  ): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then((data) => QueryValidatorDelegationsResponse.decode(new BinaryReader(data)));
  }
  ValidatorUnbondingDelegations(
    request: QueryValidatorUnbondingDelegationsRequest,
  ): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then((data) => QueryValidatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then((data) => QueryDelegationResponse.decode(new BinaryReader(data)));
  }
  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then((data) => QueryUnbondingDelegationResponse.decode(new BinaryReader(data)));
  }
  DelegatorDelegations(
    request: QueryDelegatorDelegationsRequest,
  ): Promise<QueryDelegatorDelegationsResponse> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then((data) => QueryDelegatorDelegationsResponse.decode(new BinaryReader(data)));
  }
  DelegatorUnbondingDelegations(
    request: QueryDelegatorUnbondingDelegationsRequest,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then((data) => QueryDelegatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then((data) => QueryRedelegationsResponse.decode(new BinaryReader(data)));
  }
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  }
  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then((data) => QueryDelegatorValidatorResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordById(
    request: QueryTokenizeShareRecordByIdRequest,
  ): Promise<QueryTokenizeShareRecordByIdResponse> {
    const data = QueryTokenizeShareRecordByIdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordById", data);
    return promise.then((data) => QueryTokenizeShareRecordByIdResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordByDenom(
    request: QueryTokenizeShareRecordByDenomRequest,
  ): Promise<QueryTokenizeShareRecordByDenomResponse> {
    const data = QueryTokenizeShareRecordByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordByDenom", data);
    return promise.then((data) => QueryTokenizeShareRecordByDenomResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareRecordsOwned(
    request: QueryTokenizeShareRecordsOwnedRequest,
  ): Promise<QueryTokenizeShareRecordsOwnedResponse> {
    const data = QueryTokenizeShareRecordsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareRecordsOwned", data);
    return promise.then((data) => QueryTokenizeShareRecordsOwnedResponse.decode(new BinaryReader(data)));
  }
  AllTokenizeShareRecords(
    request: QueryAllTokenizeShareRecordsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllTokenizeShareRecordsResponse> {
    const data = QueryAllTokenizeShareRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "AllTokenizeShareRecords", data);
    return promise.then((data) => QueryAllTokenizeShareRecordsResponse.decode(new BinaryReader(data)));
  }
  LastTokenizeShareRecordId(
    request: QueryLastTokenizeShareRecordIdRequest = {},
  ): Promise<QueryLastTokenizeShareRecordIdResponse> {
    const data = QueryLastTokenizeShareRecordIdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "LastTokenizeShareRecordId", data);
    return promise.then((data) => QueryLastTokenizeShareRecordIdResponse.decode(new BinaryReader(data)));
  }
  TotalTokenizeSharedAssets(
    request: QueryTotalTokenizeSharedAssetsRequest = {},
  ): Promise<QueryTotalTokenizeSharedAssetsResponse> {
    const data = QueryTotalTokenizeSharedAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TotalTokenizeSharedAssets", data);
    return promise.then((data) => QueryTotalTokenizeSharedAssetsResponse.decode(new BinaryReader(data)));
  }
  TotalLiquidStaked(request: QueryTotalLiquidStaked = {}): Promise<QueryTotalLiquidStakedResponse> {
    const data = QueryTotalLiquidStaked.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TotalLiquidStaked", data);
    return promise.then((data) => QueryTotalLiquidStakedResponse.decode(new BinaryReader(data)));
  }
  TokenizeShareLockInfo(request: QueryTokenizeShareLockInfo): Promise<QueryTokenizeShareLockInfoResponse> {
    const data = QueryTokenizeShareLockInfo.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "TokenizeShareLockInfo", data);
    return promise.then((data) => QueryTokenizeShareLockInfoResponse.decode(new BinaryReader(data)));
  }
  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then((data) => QueryHistoricalInfoResponse.decode(new BinaryReader(data)));
  }
  Pool(request: QueryPoolRequest = {}): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
