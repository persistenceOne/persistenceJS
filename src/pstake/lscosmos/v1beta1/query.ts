/* eslint-disable */
import { Params } from "./params";
import { GenesisState } from "./genesis";
import {
  HostChainParams,
  DelegationState,
  AllowListedValidators,
  IBCAmountTransientStore,
  UnbondingEpochCValue,
  HostAccountUndelegation,
  DelegatorUnbondingEpochEntry,
  HostAccounts,
} from "./lscosmos";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "pstake.lscosmos.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryAllStateRequest is request type for the Query/AllState RPC method. */
export interface QueryAllStateRequest {}
/** QueryAllStateResponse is response type for the Query/AllState RPC method. */
export interface QueryAllStateResponse {
  /** params holds all the parameters of this module. */
  genesis: GenesisState;
}
/** QueryHostChainParamsRequest is request for the Ouery/HostChainParams methods. */
export interface QueryHostChainParamsRequest {}
/**
 * QueryHostChainParamsResponse is response for the Ouery/HostChainParams
 * methods.
 */
export interface QueryHostChainParamsResponse {
  hostChainParams: HostChainParams;
}
/** QueryDelegationStateRequest is request for the Ouery/DelegationState methods. */
export interface QueryDelegationStateRequest {}
/**
 * QueryDelegationStateResponse is response for the Ouery/DelegationState
 * methods.
 */
export interface QueryDelegationStateResponse {
  delegationState: DelegationState;
}
/**
 * QueryListedValidatorsRequest is a request for the Query/AllowListedValidators
 * methods.
 */
export interface QueryAllowListedValidatorsRequest {}
/**
 * QueryListedValidatorsResponse is a response for the
 * Query/AllowListedValidators methods.
 */
export interface QueryAllowListedValidatorsResponse {
  allowListedValidators: AllowListedValidators;
}
/** QueryCValueRequest is a request for the Query/CValue methods. */
export interface QueryCValueRequest {}
/** QueryCValueRequest is a response for the Query/CValue methods. */
export interface QueryCValueResponse {
  cValue: string;
}
/** QueryModuleStateRequest is a request for the Query/ModuleState methods. */
export interface QueryModuleStateRequest {}
/** QueryModuleStateRequest is a response for the Query/ModuleState methods. */
export interface QueryModuleStateResponse {
  /** QueryModuleStateRequest is a response for the Query/ModuleState methods. */
  moduleState: boolean;
}
/**
 * QueryIBCTransientStoreRequest is a request for the Query/IBCTransientStore
 * methods.
 */
export interface QueryIBCTransientStoreRequest {}
/**
 * QueryIBCTransientStoreRequest is a response for the Query/IBCTransientStore
 * methods.
 */
export interface QueryIBCTransientStoreResponse {
  iBCTransientStore: IBCAmountTransientStore;
}
/** QueryUnclaimedRequest is a request for the Query/Unclaimed methods. */
export interface QueryUnclaimedRequest {
  /** QueryUnclaimedRequest is a request for the Query/Unclaimed methods. */
  delegatorAddress: string;
}
/** QueryUnclaimedResponse is a response for the Query/Unclaimed methods. */
export interface QueryUnclaimedResponse {
  unclaimed: UnbondingEpochCValue[];
}
/**
 * QueryFailedUnbondingsRequest is a request for the Query/FailedUnbondings
 * methods.
 */
export interface QueryFailedUnbondingsRequest {
  /**
   * QueryFailedUnbondingsRequest is a request for the Query/FailedUnbondings
   * methods.
   */
  delegatorAddress: string;
}
/**
 * QueryFailedUnbondingsResponse a response for the Query/FailedUnbondings
 * methods.
 */
export interface QueryFailedUnbondingsResponse {
  failedUnbondings: UnbondingEpochCValue[];
}
/**
 * QueryPendingUnbondingsRequest is a request for the Query/PendingUnbondings
 * methods.
 */
export interface QueryPendingUnbondingsRequest {
  /**
   * QueryPendingUnbondingsRequest is a request for the Query/PendingUnbondings
   * methods.
   */
  delegatorAddress: string;
}
/**
 * QueryPendingUnbondingsResponse is a response for the Query/PendingUnbondings
 * methods.
 */
export interface QueryPendingUnbondingsResponse {
  pendingUnbondings: UnbondingEpochCValue[];
}
/**
 * QueryUnbondingEpochCValueRequest is a request for the
 * Query/UnbondingEpochCValue methods.
 */
export interface QueryUnbondingEpochCValueRequest {
  /**
   * QueryUnbondingEpochCValueRequest is a request for the
   * Query/UnbondingEpochCValue methods.
   */
  epochNumber: Long;
}
/**
 * QueryUnbondingEpochCValueResponse is a response for the
 * Query/UnbondingEpochCValue methods.
 */
export interface QueryUnbondingEpochCValueResponse {
  unbondingEpochCValue: UnbondingEpochCValue;
}
/**
 * QueryHostAccountUndelegationRequest is a request for the
 * Query/HostAccountUndelegation methods.
 */
export interface QueryHostAccountUndelegationRequest {
  /**
   * QueryHostAccountUndelegationRequest is a request for the
   * Query/HostAccountUndelegation methods.
   */
  epochNumber: Long;
}
/**
 * QueryHostAccountUndelegationResponse is a response for the
 * Query/HostAccountUndelegation methods.
 */
export interface QueryHostAccountUndelegationResponse {
  hostAccountUndelegation: HostAccountUndelegation;
}
/**
 * QueryDelegatorUnbondingEpochEntryRequest is a request for the
 * Query/DelegatorUnbondingEpochEntry methods.
 */
export interface QueryDelegatorUnbondingEpochEntryRequest {
  delegatorAddress: string;
  epochNumber: Long;
}
/**
 * QueryDelegatorUnbondingEpochEntryResponse is a response for the
 * Query/DelegatorUnbondingEpochEntry methods.
 */
export interface QueryDelegatorUnbondingEpochEntryResponse {
  delegatorUnbodingEpochEntry: DelegatorUnbondingEpochEntry;
}
/** QueryHostAccountsRequest is a request for the Query/HostAccounts methods. */
export interface QueryHostAccountsRequest {}
/** QueryHostAccountsResponse is a response for the Query/HostAccounts methods. */
export interface QueryHostAccountsResponse {
  hostAccounts: HostAccounts;
}
/**
 * QueryDepositModuleAccountRequest is a request for the
 * Query/DepositModuleAccount methods.
 */
export interface QueryDepositModuleAccountRequest {}
/**
 * QueryDepositModuleAccountResponse is a response for the
 * Query/DepositModuleAccount methods.
 */
export interface QueryDepositModuleAccountResponse {
  balance: Coin;
}
/**
 * QueryAllDelegatorUnbondingEpochEntriesRequest is a request for the
 * Query/DelegatorUnbondingEpochEntries methods.
 */
export interface QueryAllDelegatorUnbondingEpochEntriesRequest {
  delegatorAddress: string;
}
/**
 * QueryAllDelegatorUnbondingEpochEntriesResponse is a response for the
 * Query/DelegatorUnbondingEpochEntries methods.
 */
export interface QueryAllDelegatorUnbondingEpochEntriesResponse {
  delegatorUnbondingEpochEntries: DelegatorUnbondingEpochEntry[];
}
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
function createBaseQueryAllStateRequest(): QueryAllStateRequest {
  return {};
}
export const QueryAllStateRequest = {
  encode(_: QueryAllStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStateRequest();
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
  fromJSON(_: any): QueryAllStateRequest {
    const obj = createBaseQueryAllStateRequest();
    return obj;
  },
  toJSON(_: QueryAllStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStateRequest>, I>>(_: I): QueryAllStateRequest {
    const message = createBaseQueryAllStateRequest();
    return message;
  },
};
function createBaseQueryAllStateResponse(): QueryAllStateResponse {
  return {
    genesis: GenesisState.fromPartial({}),
  };
}
export const QueryAllStateResponse = {
  encode(message: QueryAllStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.genesis !== undefined) {
      GenesisState.encode(message.genesis, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesis = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStateResponse {
    const obj = createBaseQueryAllStateResponse();
    if (isSet(object.genesis)) obj.genesis = GenesisState.fromJSON(object.genesis);
    return obj;
  },
  toJSON(message: QueryAllStateResponse): unknown {
    const obj: any = {};
    message.genesis !== undefined &&
      (obj.genesis = message.genesis ? GenesisState.toJSON(message.genesis) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStateResponse>, I>>(object: I): QueryAllStateResponse {
    const message = createBaseQueryAllStateResponse();
    if (object.genesis !== undefined && object.genesis !== null) {
      message.genesis = GenesisState.fromPartial(object.genesis);
    }
    return message;
  },
};
function createBaseQueryHostChainParamsRequest(): QueryHostChainParamsRequest {
  return {};
}
export const QueryHostChainParamsRequest = {
  encode(_: QueryHostChainParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostChainParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainParamsRequest();
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
  fromJSON(_: any): QueryHostChainParamsRequest {
    const obj = createBaseQueryHostChainParamsRequest();
    return obj;
  },
  toJSON(_: QueryHostChainParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostChainParamsRequest>, I>>(
    _: I,
  ): QueryHostChainParamsRequest {
    const message = createBaseQueryHostChainParamsRequest();
    return message;
  },
};
function createBaseQueryHostChainParamsResponse(): QueryHostChainParamsResponse {
  return {
    hostChainParams: HostChainParams.fromPartial({}),
  };
}
export const QueryHostChainParamsResponse = {
  encode(message: QueryHostChainParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChainParams !== undefined) {
      HostChainParams.encode(message.hostChainParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostChainParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainParams = HostChainParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostChainParamsResponse {
    const obj = createBaseQueryHostChainParamsResponse();
    if (isSet(object.hostChainParams)) obj.hostChainParams = HostChainParams.fromJSON(object.hostChainParams);
    return obj;
  },
  toJSON(message: QueryHostChainParamsResponse): unknown {
    const obj: any = {};
    message.hostChainParams !== undefined &&
      (obj.hostChainParams = message.hostChainParams
        ? HostChainParams.toJSON(message.hostChainParams)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostChainParamsResponse>, I>>(
    object: I,
  ): QueryHostChainParamsResponse {
    const message = createBaseQueryHostChainParamsResponse();
    if (object.hostChainParams !== undefined && object.hostChainParams !== null) {
      message.hostChainParams = HostChainParams.fromPartial(object.hostChainParams);
    }
    return message;
  },
};
function createBaseQueryDelegationStateRequest(): QueryDelegationStateRequest {
  return {};
}
export const QueryDelegationStateRequest = {
  encode(_: QueryDelegationStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationStateRequest();
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
  fromJSON(_: any): QueryDelegationStateRequest {
    const obj = createBaseQueryDelegationStateRequest();
    return obj;
  },
  toJSON(_: QueryDelegationStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationStateRequest>, I>>(
    _: I,
  ): QueryDelegationStateRequest {
    const message = createBaseQueryDelegationStateRequest();
    return message;
  },
};
function createBaseQueryDelegationStateResponse(): QueryDelegationStateResponse {
  return {
    delegationState: DelegationState.fromPartial({}),
  };
}
export const QueryDelegationStateResponse = {
  encode(message: QueryDelegationStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationState !== undefined) {
      DelegationState.encode(message.delegationState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationState = DelegationState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationStateResponse {
    const obj = createBaseQueryDelegationStateResponse();
    if (isSet(object.delegationState)) obj.delegationState = DelegationState.fromJSON(object.delegationState);
    return obj;
  },
  toJSON(message: QueryDelegationStateResponse): unknown {
    const obj: any = {};
    message.delegationState !== undefined &&
      (obj.delegationState = message.delegationState
        ? DelegationState.toJSON(message.delegationState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationStateResponse>, I>>(
    object: I,
  ): QueryDelegationStateResponse {
    const message = createBaseQueryDelegationStateResponse();
    if (object.delegationState !== undefined && object.delegationState !== null) {
      message.delegationState = DelegationState.fromPartial(object.delegationState);
    }
    return message;
  },
};
function createBaseQueryAllowListedValidatorsRequest(): QueryAllowListedValidatorsRequest {
  return {};
}
export const QueryAllowListedValidatorsRequest = {
  encode(_: QueryAllowListedValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowListedValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowListedValidatorsRequest();
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
  fromJSON(_: any): QueryAllowListedValidatorsRequest {
    const obj = createBaseQueryAllowListedValidatorsRequest();
    return obj;
  },
  toJSON(_: QueryAllowListedValidatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllowListedValidatorsRequest>, I>>(
    _: I,
  ): QueryAllowListedValidatorsRequest {
    const message = createBaseQueryAllowListedValidatorsRequest();
    return message;
  },
};
function createBaseQueryAllowListedValidatorsResponse(): QueryAllowListedValidatorsResponse {
  return {
    allowListedValidators: AllowListedValidators.fromPartial({}),
  };
}
export const QueryAllowListedValidatorsResponse = {
  encode(message: QueryAllowListedValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowListedValidators !== undefined) {
      AllowListedValidators.encode(message.allowListedValidators, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowListedValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowListedValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowListedValidators = AllowListedValidators.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllowListedValidatorsResponse {
    const obj = createBaseQueryAllowListedValidatorsResponse();
    if (isSet(object.allowListedValidators))
      obj.allowListedValidators = AllowListedValidators.fromJSON(object.allowListedValidators);
    return obj;
  },
  toJSON(message: QueryAllowListedValidatorsResponse): unknown {
    const obj: any = {};
    message.allowListedValidators !== undefined &&
      (obj.allowListedValidators = message.allowListedValidators
        ? AllowListedValidators.toJSON(message.allowListedValidators)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllowListedValidatorsResponse>, I>>(
    object: I,
  ): QueryAllowListedValidatorsResponse {
    const message = createBaseQueryAllowListedValidatorsResponse();
    if (object.allowListedValidators !== undefined && object.allowListedValidators !== null) {
      message.allowListedValidators = AllowListedValidators.fromPartial(object.allowListedValidators);
    }
    return message;
  },
};
function createBaseQueryCValueRequest(): QueryCValueRequest {
  return {};
}
export const QueryCValueRequest = {
  encode(_: QueryCValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCValueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCValueRequest();
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
  fromJSON(_: any): QueryCValueRequest {
    const obj = createBaseQueryCValueRequest();
    return obj;
  },
  toJSON(_: QueryCValueRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCValueRequest>, I>>(_: I): QueryCValueRequest {
    const message = createBaseQueryCValueRequest();
    return message;
  },
};
function createBaseQueryCValueResponse(): QueryCValueResponse {
  return {
    cValue: "",
  };
}
export const QueryCValueResponse = {
  encode(message: QueryCValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cValue !== "") {
      writer.uint32(10).string(message.cValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCValueResponse {
    const obj = createBaseQueryCValueResponse();
    if (isSet(object.cValue)) obj.cValue = String(object.cValue);
    return obj;
  },
  toJSON(message: QueryCValueResponse): unknown {
    const obj: any = {};
    message.cValue !== undefined && (obj.cValue = message.cValue);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCValueResponse>, I>>(object: I): QueryCValueResponse {
    const message = createBaseQueryCValueResponse();
    message.cValue = object.cValue ?? "";
    return message;
  },
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
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
  fromJSON(_: any): QueryModuleStateRequest {
    const obj = createBaseQueryModuleStateRequest();
    return obj;
  },
  toJSON(_: QueryModuleStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModuleStateRequest>, I>>(_: I): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    moduleState: false,
  };
}
export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleState === true) {
      writer.uint32(8).bool(message.moduleState);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleState = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    const obj = createBaseQueryModuleStateResponse();
    if (isSet(object.moduleState)) obj.moduleState = Boolean(object.moduleState);
    return obj;
  },
  toJSON(message: QueryModuleStateResponse): unknown {
    const obj: any = {};
    message.moduleState !== undefined && (obj.moduleState = message.moduleState);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModuleStateResponse>, I>>(
    object: I,
  ): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.moduleState = object.moduleState ?? false;
    return message;
  },
};
function createBaseQueryIBCTransientStoreRequest(): QueryIBCTransientStoreRequest {
  return {};
}
export const QueryIBCTransientStoreRequest = {
  encode(_: QueryIBCTransientStoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCTransientStoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCTransientStoreRequest();
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
  fromJSON(_: any): QueryIBCTransientStoreRequest {
    const obj = createBaseQueryIBCTransientStoreRequest();
    return obj;
  },
  toJSON(_: QueryIBCTransientStoreRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCTransientStoreRequest>, I>>(
    _: I,
  ): QueryIBCTransientStoreRequest {
    const message = createBaseQueryIBCTransientStoreRequest();
    return message;
  },
};
function createBaseQueryIBCTransientStoreResponse(): QueryIBCTransientStoreResponse {
  return {
    iBCTransientStore: IBCAmountTransientStore.fromPartial({}),
  };
}
export const QueryIBCTransientStoreResponse = {
  encode(message: QueryIBCTransientStoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iBCTransientStore !== undefined) {
      IBCAmountTransientStore.encode(message.iBCTransientStore, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIBCTransientStoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIBCTransientStoreResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iBCTransientStore = IBCAmountTransientStore.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIBCTransientStoreResponse {
    const obj = createBaseQueryIBCTransientStoreResponse();
    if (isSet(object.iBCTransientStore))
      obj.iBCTransientStore = IBCAmountTransientStore.fromJSON(object.iBCTransientStore);
    return obj;
  },
  toJSON(message: QueryIBCTransientStoreResponse): unknown {
    const obj: any = {};
    message.iBCTransientStore !== undefined &&
      (obj.iBCTransientStore = message.iBCTransientStore
        ? IBCAmountTransientStore.toJSON(message.iBCTransientStore)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIBCTransientStoreResponse>, I>>(
    object: I,
  ): QueryIBCTransientStoreResponse {
    const message = createBaseQueryIBCTransientStoreResponse();
    if (object.iBCTransientStore !== undefined && object.iBCTransientStore !== null) {
      message.iBCTransientStore = IBCAmountTransientStore.fromPartial(object.iBCTransientStore);
    }
    return message;
  },
};
function createBaseQueryUnclaimedRequest(): QueryUnclaimedRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryUnclaimedRequest = {
  encode(message: QueryUnclaimedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnclaimedRequest {
    const obj = createBaseQueryUnclaimedRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryUnclaimedRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnclaimedRequest>, I>>(object: I): QueryUnclaimedRequest {
    const message = createBaseQueryUnclaimedRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryUnclaimedResponse(): QueryUnclaimedResponse {
  return {
    unclaimed: [],
  };
}
export const QueryUnclaimedResponse = {
  encode(message: QueryUnclaimedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unclaimed) {
      UnbondingEpochCValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unclaimed.push(UnbondingEpochCValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnclaimedResponse {
    const obj = createBaseQueryUnclaimedResponse();
    if (Array.isArray(object?.unclaimed))
      obj.unclaimed = object.unclaimed.map((e: any) => UnbondingEpochCValue.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryUnclaimedResponse): unknown {
    const obj: any = {};
    if (message.unclaimed) {
      obj.unclaimed = message.unclaimed.map((e) => (e ? UnbondingEpochCValue.toJSON(e) : undefined));
    } else {
      obj.unclaimed = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnclaimedResponse>, I>>(object: I): QueryUnclaimedResponse {
    const message = createBaseQueryUnclaimedResponse();
    message.unclaimed = object.unclaimed?.map((e) => UnbondingEpochCValue.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryFailedUnbondingsRequest(): QueryFailedUnbondingsRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryFailedUnbondingsRequest = {
  encode(message: QueryFailedUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFailedUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFailedUnbondingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFailedUnbondingsRequest {
    const obj = createBaseQueryFailedUnbondingsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryFailedUnbondingsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFailedUnbondingsRequest>, I>>(
    object: I,
  ): QueryFailedUnbondingsRequest {
    const message = createBaseQueryFailedUnbondingsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryFailedUnbondingsResponse(): QueryFailedUnbondingsResponse {
  return {
    failedUnbondings: [],
  };
}
export const QueryFailedUnbondingsResponse = {
  encode(message: QueryFailedUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.failedUnbondings) {
      UnbondingEpochCValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFailedUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFailedUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failedUnbondings.push(UnbondingEpochCValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFailedUnbondingsResponse {
    const obj = createBaseQueryFailedUnbondingsResponse();
    if (Array.isArray(object?.failedUnbondings))
      obj.failedUnbondings = object.failedUnbondings.map((e: any) => UnbondingEpochCValue.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryFailedUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.failedUnbondings) {
      obj.failedUnbondings = message.failedUnbondings.map((e) =>
        e ? UnbondingEpochCValue.toJSON(e) : undefined,
      );
    } else {
      obj.failedUnbondings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFailedUnbondingsResponse>, I>>(
    object: I,
  ): QueryFailedUnbondingsResponse {
    const message = createBaseQueryFailedUnbondingsResponse();
    message.failedUnbondings = object.failedUnbondings?.map((e) => UnbondingEpochCValue.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryPendingUnbondingsRequest(): QueryPendingUnbondingsRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryPendingUnbondingsRequest = {
  encode(message: QueryPendingUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingUnbondingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingUnbondingsRequest {
    const obj = createBaseQueryPendingUnbondingsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryPendingUnbondingsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPendingUnbondingsRequest>, I>>(
    object: I,
  ): QueryPendingUnbondingsRequest {
    const message = createBaseQueryPendingUnbondingsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryPendingUnbondingsResponse(): QueryPendingUnbondingsResponse {
  return {
    pendingUnbondings: [],
  };
}
export const QueryPendingUnbondingsResponse = {
  encode(message: QueryPendingUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingUnbondings) {
      UnbondingEpochCValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingUnbondings.push(UnbondingEpochCValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingUnbondingsResponse {
    const obj = createBaseQueryPendingUnbondingsResponse();
    if (Array.isArray(object?.pendingUnbondings))
      obj.pendingUnbondings = object.pendingUnbondings.map((e: any) => UnbondingEpochCValue.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryPendingUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.pendingUnbondings) {
      obj.pendingUnbondings = message.pendingUnbondings.map((e) =>
        e ? UnbondingEpochCValue.toJSON(e) : undefined,
      );
    } else {
      obj.pendingUnbondings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPendingUnbondingsResponse>, I>>(
    object: I,
  ): QueryPendingUnbondingsResponse {
    const message = createBaseQueryPendingUnbondingsResponse();
    message.pendingUnbondings =
      object.pendingUnbondings?.map((e) => UnbondingEpochCValue.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryUnbondingEpochCValueRequest(): QueryUnbondingEpochCValueRequest {
  return {
    epochNumber: Long.ZERO,
  };
}
export const QueryUnbondingEpochCValueRequest = {
  encode(message: QueryUnbondingEpochCValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingEpochCValueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingEpochCValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingEpochCValueRequest {
    const obj = createBaseQueryUnbondingEpochCValueRequest();
    if (isSet(object.epochNumber)) obj.epochNumber = Long.fromValue(object.epochNumber);
    return obj;
  },
  toJSON(message: QueryUnbondingEpochCValueRequest): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnbondingEpochCValueRequest>, I>>(
    object: I,
  ): QueryUnbondingEpochCValueRequest {
    const message = createBaseQueryUnbondingEpochCValueRequest();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromValue(object.epochNumber);
    }
    return message;
  },
};
function createBaseQueryUnbondingEpochCValueResponse(): QueryUnbondingEpochCValueResponse {
  return {
    unbondingEpochCValue: UnbondingEpochCValue.fromPartial({}),
  };
}
export const QueryUnbondingEpochCValueResponse = {
  encode(message: QueryUnbondingEpochCValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbondingEpochCValue !== undefined) {
      UnbondingEpochCValue.encode(message.unbondingEpochCValue, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingEpochCValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingEpochCValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingEpochCValue = UnbondingEpochCValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingEpochCValueResponse {
    const obj = createBaseQueryUnbondingEpochCValueResponse();
    if (isSet(object.unbondingEpochCValue))
      obj.unbondingEpochCValue = UnbondingEpochCValue.fromJSON(object.unbondingEpochCValue);
    return obj;
  },
  toJSON(message: QueryUnbondingEpochCValueResponse): unknown {
    const obj: any = {};
    message.unbondingEpochCValue !== undefined &&
      (obj.unbondingEpochCValue = message.unbondingEpochCValue
        ? UnbondingEpochCValue.toJSON(message.unbondingEpochCValue)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnbondingEpochCValueResponse>, I>>(
    object: I,
  ): QueryUnbondingEpochCValueResponse {
    const message = createBaseQueryUnbondingEpochCValueResponse();
    if (object.unbondingEpochCValue !== undefined && object.unbondingEpochCValue !== null) {
      message.unbondingEpochCValue = UnbondingEpochCValue.fromPartial(object.unbondingEpochCValue);
    }
    return message;
  },
};
function createBaseQueryHostAccountUndelegationRequest(): QueryHostAccountUndelegationRequest {
  return {
    epochNumber: Long.ZERO,
  };
}
export const QueryHostAccountUndelegationRequest = {
  encode(message: QueryHostAccountUndelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostAccountUndelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostAccountUndelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostAccountUndelegationRequest {
    const obj = createBaseQueryHostAccountUndelegationRequest();
    if (isSet(object.epochNumber)) obj.epochNumber = Long.fromValue(object.epochNumber);
    return obj;
  },
  toJSON(message: QueryHostAccountUndelegationRequest): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostAccountUndelegationRequest>, I>>(
    object: I,
  ): QueryHostAccountUndelegationRequest {
    const message = createBaseQueryHostAccountUndelegationRequest();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromValue(object.epochNumber);
    }
    return message;
  },
};
function createBaseQueryHostAccountUndelegationResponse(): QueryHostAccountUndelegationResponse {
  return {
    hostAccountUndelegation: HostAccountUndelegation.fromPartial({}),
  };
}
export const QueryHostAccountUndelegationResponse = {
  encode(
    message: QueryHostAccountUndelegationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hostAccountUndelegation !== undefined) {
      HostAccountUndelegation.encode(message.hostAccountUndelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostAccountUndelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostAccountUndelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostAccountUndelegation = HostAccountUndelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostAccountUndelegationResponse {
    const obj = createBaseQueryHostAccountUndelegationResponse();
    if (isSet(object.hostAccountUndelegation))
      obj.hostAccountUndelegation = HostAccountUndelegation.fromJSON(object.hostAccountUndelegation);
    return obj;
  },
  toJSON(message: QueryHostAccountUndelegationResponse): unknown {
    const obj: any = {};
    message.hostAccountUndelegation !== undefined &&
      (obj.hostAccountUndelegation = message.hostAccountUndelegation
        ? HostAccountUndelegation.toJSON(message.hostAccountUndelegation)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostAccountUndelegationResponse>, I>>(
    object: I,
  ): QueryHostAccountUndelegationResponse {
    const message = createBaseQueryHostAccountUndelegationResponse();
    if (object.hostAccountUndelegation !== undefined && object.hostAccountUndelegation !== null) {
      message.hostAccountUndelegation = HostAccountUndelegation.fromPartial(object.hostAccountUndelegation);
    }
    return message;
  },
};
function createBaseQueryDelegatorUnbondingEpochEntryRequest(): QueryDelegatorUnbondingEpochEntryRequest {
  return {
    delegatorAddress: "",
    epochNumber: Long.ZERO,
  };
}
export const QueryDelegatorUnbondingEpochEntryRequest = {
  encode(
    message: QueryDelegatorUnbondingEpochEntryRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingEpochEntryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingEpochEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingEpochEntryRequest {
    const obj = createBaseQueryDelegatorUnbondingEpochEntryRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.epochNumber)) obj.epochNumber = Long.fromValue(object.epochNumber);
    return obj;
  },
  toJSON(message: QueryDelegatorUnbondingEpochEntryRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingEpochEntryRequest>, I>>(
    object: I,
  ): QueryDelegatorUnbondingEpochEntryRequest {
    const message = createBaseQueryDelegatorUnbondingEpochEntryRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Long.fromValue(object.epochNumber);
    }
    return message;
  },
};
function createBaseQueryDelegatorUnbondingEpochEntryResponse(): QueryDelegatorUnbondingEpochEntryResponse {
  return {
    delegatorUnbodingEpochEntry: DelegatorUnbondingEpochEntry.fromPartial({}),
  };
}
export const QueryDelegatorUnbondingEpochEntryResponse = {
  encode(
    message: QueryDelegatorUnbondingEpochEntryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorUnbodingEpochEntry !== undefined) {
      DelegatorUnbondingEpochEntry.encode(
        message.delegatorUnbodingEpochEntry,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingEpochEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingEpochEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorUnbodingEpochEntry = DelegatorUnbondingEpochEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingEpochEntryResponse {
    const obj = createBaseQueryDelegatorUnbondingEpochEntryResponse();
    if (isSet(object.delegatorUnbodingEpochEntry))
      obj.delegatorUnbodingEpochEntry = DelegatorUnbondingEpochEntry.fromJSON(
        object.delegatorUnbodingEpochEntry,
      );
    return obj;
  },
  toJSON(message: QueryDelegatorUnbondingEpochEntryResponse): unknown {
    const obj: any = {};
    message.delegatorUnbodingEpochEntry !== undefined &&
      (obj.delegatorUnbodingEpochEntry = message.delegatorUnbodingEpochEntry
        ? DelegatorUnbondingEpochEntry.toJSON(message.delegatorUnbodingEpochEntry)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingEpochEntryResponse>, I>>(
    object: I,
  ): QueryDelegatorUnbondingEpochEntryResponse {
    const message = createBaseQueryDelegatorUnbondingEpochEntryResponse();
    if (object.delegatorUnbodingEpochEntry !== undefined && object.delegatorUnbodingEpochEntry !== null) {
      message.delegatorUnbodingEpochEntry = DelegatorUnbondingEpochEntry.fromPartial(
        object.delegatorUnbodingEpochEntry,
      );
    }
    return message;
  },
};
function createBaseQueryHostAccountsRequest(): QueryHostAccountsRequest {
  return {};
}
export const QueryHostAccountsRequest = {
  encode(_: QueryHostAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostAccountsRequest();
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
  fromJSON(_: any): QueryHostAccountsRequest {
    const obj = createBaseQueryHostAccountsRequest();
    return obj;
  },
  toJSON(_: QueryHostAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostAccountsRequest>, I>>(_: I): QueryHostAccountsRequest {
    const message = createBaseQueryHostAccountsRequest();
    return message;
  },
};
function createBaseQueryHostAccountsResponse(): QueryHostAccountsResponse {
  return {
    hostAccounts: HostAccounts.fromPartial({}),
  };
}
export const QueryHostAccountsResponse = {
  encode(message: QueryHostAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostAccounts !== undefined) {
      HostAccounts.encode(message.hostAccounts, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostAccounts = HostAccounts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostAccountsResponse {
    const obj = createBaseQueryHostAccountsResponse();
    if (isSet(object.hostAccounts)) obj.hostAccounts = HostAccounts.fromJSON(object.hostAccounts);
    return obj;
  },
  toJSON(message: QueryHostAccountsResponse): unknown {
    const obj: any = {};
    message.hostAccounts !== undefined &&
      (obj.hostAccounts = message.hostAccounts ? HostAccounts.toJSON(message.hostAccounts) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostAccountsResponse>, I>>(
    object: I,
  ): QueryHostAccountsResponse {
    const message = createBaseQueryHostAccountsResponse();
    if (object.hostAccounts !== undefined && object.hostAccounts !== null) {
      message.hostAccounts = HostAccounts.fromPartial(object.hostAccounts);
    }
    return message;
  },
};
function createBaseQueryDepositModuleAccountRequest(): QueryDepositModuleAccountRequest {
  return {};
}
export const QueryDepositModuleAccountRequest = {
  encode(_: QueryDepositModuleAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositModuleAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositModuleAccountRequest();
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
  fromJSON(_: any): QueryDepositModuleAccountRequest {
    const obj = createBaseQueryDepositModuleAccountRequest();
    return obj;
  },
  toJSON(_: QueryDepositModuleAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositModuleAccountRequest>, I>>(
    _: I,
  ): QueryDepositModuleAccountRequest {
    const message = createBaseQueryDepositModuleAccountRequest();
    return message;
  },
};
function createBaseQueryDepositModuleAccountResponse(): QueryDepositModuleAccountResponse {
  return {
    balance: Coin.fromPartial({}),
  };
}
export const QueryDepositModuleAccountResponse = {
  encode(message: QueryDepositModuleAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositModuleAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositModuleAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositModuleAccountResponse {
    const obj = createBaseQueryDepositModuleAccountResponse();
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    return obj;
  },
  toJSON(message: QueryDepositModuleAccountResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositModuleAccountResponse>, I>>(
    object: I,
  ): QueryDepositModuleAccountResponse {
    const message = createBaseQueryDepositModuleAccountResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    return message;
  },
};
function createBaseQueryAllDelegatorUnbondingEpochEntriesRequest(): QueryAllDelegatorUnbondingEpochEntriesRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryAllDelegatorUnbondingEpochEntriesRequest = {
  encode(
    message: QueryAllDelegatorUnbondingEpochEntriesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDelegatorUnbondingEpochEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDelegatorUnbondingEpochEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDelegatorUnbondingEpochEntriesRequest {
    const obj = createBaseQueryAllDelegatorUnbondingEpochEntriesRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryAllDelegatorUnbondingEpochEntriesRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllDelegatorUnbondingEpochEntriesRequest>, I>>(
    object: I,
  ): QueryAllDelegatorUnbondingEpochEntriesRequest {
    const message = createBaseQueryAllDelegatorUnbondingEpochEntriesRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryAllDelegatorUnbondingEpochEntriesResponse(): QueryAllDelegatorUnbondingEpochEntriesResponse {
  return {
    delegatorUnbondingEpochEntries: [],
  };
}
export const QueryAllDelegatorUnbondingEpochEntriesResponse = {
  encode(
    message: QueryAllDelegatorUnbondingEpochEntriesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.delegatorUnbondingEpochEntries) {
      DelegatorUnbondingEpochEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDelegatorUnbondingEpochEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDelegatorUnbondingEpochEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorUnbondingEpochEntries.push(
            DelegatorUnbondingEpochEntry.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDelegatorUnbondingEpochEntriesResponse {
    const obj = createBaseQueryAllDelegatorUnbondingEpochEntriesResponse();
    if (Array.isArray(object?.delegatorUnbondingEpochEntries))
      obj.delegatorUnbondingEpochEntries = object.delegatorUnbondingEpochEntries.map((e: any) =>
        DelegatorUnbondingEpochEntry.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: QueryAllDelegatorUnbondingEpochEntriesResponse): unknown {
    const obj: any = {};
    if (message.delegatorUnbondingEpochEntries) {
      obj.delegatorUnbondingEpochEntries = message.delegatorUnbondingEpochEntries.map((e) =>
        e ? DelegatorUnbondingEpochEntry.toJSON(e) : undefined,
      );
    } else {
      obj.delegatorUnbondingEpochEntries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllDelegatorUnbondingEpochEntriesResponse>, I>>(
    object: I,
  ): QueryAllDelegatorUnbondingEpochEntriesResponse {
    const message = createBaseQueryAllDelegatorUnbondingEpochEntriesResponse();
    message.delegatorUnbondingEpochEntries =
      object.delegatorUnbondingEpochEntries?.map((e) => DelegatorUnbondingEpochEntry.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** AllState returns all state of module, aka, genesis export. */
  AllState(request?: QueryAllStateRequest): Promise<QueryAllStateResponse>;
  HostChainParams(request?: QueryHostChainParamsRequest): Promise<QueryHostChainParamsResponse>;
  DelegationState(request?: QueryDelegationStateRequest): Promise<QueryDelegationStateResponse>;
  AllowListedValidators(
    request?: QueryAllowListedValidatorsRequest,
  ): Promise<QueryAllowListedValidatorsResponse>;
  CValue(request?: QueryCValueRequest): Promise<QueryCValueResponse>;
  ModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  IBCTransientStore(request?: QueryIBCTransientStoreRequest): Promise<QueryIBCTransientStoreResponse>;
  Unclaimed(request: QueryUnclaimedRequest): Promise<QueryUnclaimedResponse>;
  FailedUnbondings(request: QueryFailedUnbondingsRequest): Promise<QueryFailedUnbondingsResponse>;
  PendingUnbondings(request: QueryPendingUnbondingsRequest): Promise<QueryPendingUnbondingsResponse>;
  UnbondingEpochCValue(request: QueryUnbondingEpochCValueRequest): Promise<QueryUnbondingEpochCValueResponse>;
  HostAccountUndelegation(
    request: QueryHostAccountUndelegationRequest,
  ): Promise<QueryHostAccountUndelegationResponse>;
  DelegatorUnbondingEpochEntry(
    request: QueryDelegatorUnbondingEpochEntryRequest,
  ): Promise<QueryDelegatorUnbondingEpochEntryResponse>;
  HostAccounts(request?: QueryHostAccountsRequest): Promise<QueryHostAccountsResponse>;
  DepositModuleAccount(
    request?: QueryDepositModuleAccountRequest,
  ): Promise<QueryDepositModuleAccountResponse>;
  DelegatorUnbondingEpochEntries(
    request: QueryAllDelegatorUnbondingEpochEntriesRequest,
  ): Promise<QueryAllDelegatorUnbondingEpochEntriesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AllState = this.AllState.bind(this);
    this.HostChainParams = this.HostChainParams.bind(this);
    this.DelegationState = this.DelegationState.bind(this);
    this.AllowListedValidators = this.AllowListedValidators.bind(this);
    this.CValue = this.CValue.bind(this);
    this.ModuleState = this.ModuleState.bind(this);
    this.IBCTransientStore = this.IBCTransientStore.bind(this);
    this.Unclaimed = this.Unclaimed.bind(this);
    this.FailedUnbondings = this.FailedUnbondings.bind(this);
    this.PendingUnbondings = this.PendingUnbondings.bind(this);
    this.UnbondingEpochCValue = this.UnbondingEpochCValue.bind(this);
    this.HostAccountUndelegation = this.HostAccountUndelegation.bind(this);
    this.DelegatorUnbondingEpochEntry = this.DelegatorUnbondingEpochEntry.bind(this);
    this.HostAccounts = this.HostAccounts.bind(this);
    this.DepositModuleAccount = this.DepositModuleAccount.bind(this);
    this.DelegatorUnbondingEpochEntries = this.DelegatorUnbondingEpochEntries.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  AllState(request: QueryAllStateRequest = {}): Promise<QueryAllStateResponse> {
    const data = QueryAllStateRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "AllState", data);
    return promise.then((data) => QueryAllStateResponse.decode(new _m0.Reader(data)));
  }
  HostChainParams(request: QueryHostChainParamsRequest = {}): Promise<QueryHostChainParamsResponse> {
    const data = QueryHostChainParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "HostChainParams", data);
    return promise.then((data) => QueryHostChainParamsResponse.decode(new _m0.Reader(data)));
  }
  DelegationState(request: QueryDelegationStateRequest = {}): Promise<QueryDelegationStateResponse> {
    const data = QueryDelegationStateRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "DelegationState", data);
    return promise.then((data) => QueryDelegationStateResponse.decode(new _m0.Reader(data)));
  }
  AllowListedValidators(
    request: QueryAllowListedValidatorsRequest = {},
  ): Promise<QueryAllowListedValidatorsResponse> {
    const data = QueryAllowListedValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "AllowListedValidators", data);
    return promise.then((data) => QueryAllowListedValidatorsResponse.decode(new _m0.Reader(data)));
  }
  CValue(request: QueryCValueRequest = {}): Promise<QueryCValueResponse> {
    const data = QueryCValueRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "CValue", data);
    return promise.then((data) => QueryCValueResponse.decode(new _m0.Reader(data)));
  }
  ModuleState(request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "ModuleState", data);
    return promise.then((data) => QueryModuleStateResponse.decode(new _m0.Reader(data)));
  }
  IBCTransientStore(request: QueryIBCTransientStoreRequest = {}): Promise<QueryIBCTransientStoreResponse> {
    const data = QueryIBCTransientStoreRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "IBCTransientStore", data);
    return promise.then((data) => QueryIBCTransientStoreResponse.decode(new _m0.Reader(data)));
  }
  Unclaimed(request: QueryUnclaimedRequest): Promise<QueryUnclaimedResponse> {
    const data = QueryUnclaimedRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "Unclaimed", data);
    return promise.then((data) => QueryUnclaimedResponse.decode(new _m0.Reader(data)));
  }
  FailedUnbondings(request: QueryFailedUnbondingsRequest): Promise<QueryFailedUnbondingsResponse> {
    const data = QueryFailedUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "FailedUnbondings", data);
    return promise.then((data) => QueryFailedUnbondingsResponse.decode(new _m0.Reader(data)));
  }
  PendingUnbondings(request: QueryPendingUnbondingsRequest): Promise<QueryPendingUnbondingsResponse> {
    const data = QueryPendingUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "PendingUnbondings", data);
    return promise.then((data) => QueryPendingUnbondingsResponse.decode(new _m0.Reader(data)));
  }
  UnbondingEpochCValue(
    request: QueryUnbondingEpochCValueRequest,
  ): Promise<QueryUnbondingEpochCValueResponse> {
    const data = QueryUnbondingEpochCValueRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "UnbondingEpochCValue", data);
    return promise.then((data) => QueryUnbondingEpochCValueResponse.decode(new _m0.Reader(data)));
  }
  HostAccountUndelegation(
    request: QueryHostAccountUndelegationRequest,
  ): Promise<QueryHostAccountUndelegationResponse> {
    const data = QueryHostAccountUndelegationRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "HostAccountUndelegation", data);
    return promise.then((data) => QueryHostAccountUndelegationResponse.decode(new _m0.Reader(data)));
  }
  DelegatorUnbondingEpochEntry(
    request: QueryDelegatorUnbondingEpochEntryRequest,
  ): Promise<QueryDelegatorUnbondingEpochEntryResponse> {
    const data = QueryDelegatorUnbondingEpochEntryRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "DelegatorUnbondingEpochEntry", data);
    return promise.then((data) => QueryDelegatorUnbondingEpochEntryResponse.decode(new _m0.Reader(data)));
  }
  HostAccounts(request: QueryHostAccountsRequest = {}): Promise<QueryHostAccountsResponse> {
    const data = QueryHostAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "HostAccounts", data);
    return promise.then((data) => QueryHostAccountsResponse.decode(new _m0.Reader(data)));
  }
  DepositModuleAccount(
    request: QueryDepositModuleAccountRequest = {},
  ): Promise<QueryDepositModuleAccountResponse> {
    const data = QueryDepositModuleAccountRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "DepositModuleAccount", data);
    return promise.then((data) => QueryDepositModuleAccountResponse.decode(new _m0.Reader(data)));
  }
  DelegatorUnbondingEpochEntries(
    request: QueryAllDelegatorUnbondingEpochEntriesRequest,
  ): Promise<QueryAllDelegatorUnbondingEpochEntriesResponse> {
    const data = QueryAllDelegatorUnbondingEpochEntriesRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.lscosmos.v1beta1.Query", "DelegatorUnbondingEpochEntries", data);
    return promise.then((data) =>
      QueryAllDelegatorUnbondingEpochEntriesResponse.decode(new _m0.Reader(data)),
    );
  }
}
