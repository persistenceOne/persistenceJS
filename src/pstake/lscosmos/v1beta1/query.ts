/* eslint-disable */
import { Params } from "./params";
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
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Long, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryHostChainParamsRequest is request for the Ouery/HostChainParams methods. */

export interface QueryHostChainParamsRequest {}
/** QueryHostChainParamsResponse is response for the Ouery/HostChainParams methods. */

export interface QueryHostChainParamsResponse {
  hostChainParams?: HostChainParams;
}
/** QueryDelegationStateRequest is request for the Ouery/DelegationState methods. */

export interface QueryDelegationStateRequest {}
/** QueryDelegationStateResponse is response for the Ouery/DelegationState methods. */

export interface QueryDelegationStateResponse {
  delegationState?: DelegationState;
}
/** QueryListedValidatorsRequest is a request for the Query/AllowListedValidators methods. */

export interface QueryAllowListedValidatorsRequest {}
/** QueryListedValidatorsResponse is a response for the Query/AllowListedValidators methods. */

export interface QueryAllowListedValidatorsResponse {
  allowListedValidators?: AllowListedValidators;
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
  moduleState: boolean;
}
/** QueryIBCTransientStoreRequest is a request for the Query/IBCTransientStore methods. */

export interface QueryIBCTransientStoreRequest {}
/** QueryIBCTransientStoreRequest is a response for the Query/IBCTransientStore methods. */

export interface QueryIBCTransientStoreResponse {
  iBCTransientStore?: IBCAmountTransientStore;
}
/** QueryUnclaimedRequest is a request for the Query/Unclaimed methods. */

export interface QueryUnclaimedRequest {
  delegatorAddress: string;
}
/** QueryUnclaimedResponse is a response for the Query/Unclaimed methods. */

export interface QueryUnclaimedResponse {
  unclaimed: UnbondingEpochCValue[];
}
/** QueryFailedUnbondingsRequest is a request for the Query/FailedUnbondings methods. */

export interface QueryFailedUnbondingsRequest {
  delegatorAddress: string;
}
/** QueryFailedUnbondingsResponse a response for the Query/FailedUnbondings methods. */

export interface QueryFailedUnbondingsResponse {
  failedUnbondings: UnbondingEpochCValue[];
}
/** QueryPendingUnbondingsRequest is a request for the Query/PendingUnbondings methods. */

export interface QueryPendingUnbondingsRequest {
  delegatorAddress: string;
}
/** QueryPendingUnbondingsResponse is a response for the Query/PendingUnbondings methods. */

export interface QueryPendingUnbondingsResponse {
  pendingUnbondings: UnbondingEpochCValue[];
}
/** QueryUnbondingEpochCValueRequest is a request for the Query/UnbondingEpochCValue methods. */

export interface QueryUnbondingEpochCValueRequest {
  epochNumber: Long;
}
/** QueryUnbondingEpochCValueResponse is a response for the Query/UnbondingEpochCValue methods. */

export interface QueryUnbondingEpochCValueResponse {
  unbondingEpochCValue?: UnbondingEpochCValue;
}
/** QueryHostAccountUndelegationRequest is a request for the Query/HostAccountUndelegation methods. */

export interface QueryHostAccountUndelegationRequest {
  epochNumber: Long;
}
/** QueryHostAccountUndelegationResponse is a response for the Query/HostAccountUndelegation methods. */

export interface QueryHostAccountUndelegationResponse {
  hostAccountUndelegation?: HostAccountUndelegation;
}
/** QueryDelegatorUnbondingEpochEntryRequest is a request for the Query/DelegatorUnbondingEpochEntry methods. */

export interface QueryDelegatorUnbondingEpochEntryRequest {
  delegatorAddress: string;
  epochNumber: Long;
}
/** QueryDelegatorUnbondingEpochEntryResponse is a response for the Query/DelegatorUnbondingEpochEntry methods. */

export interface QueryDelegatorUnbondingEpochEntryResponse {
  delegatorUnbodingEpochEntry?: DelegatorUnbondingEpochEntry;
}
/** QueryHostAccountsRequest is a request for the Query/HostAccounts methods. */

export interface QueryHostAccountsRequest {}
/** QueryHostAccountsResponse is a response for the Query/HostAccounts methods. */

export interface QueryHostAccountsResponse {
  hostAccounts?: HostAccounts;
}
/** QueryDepositModuleAccountRequest is a request for the Query/DepositModuleAccount methods. */

export interface QueryDepositModuleAccountRequest {}
/** QueryDepositModuleAccountResponse is a response for the Query/DepositModuleAccount methods. */

export interface QueryDepositModuleAccountResponse {
  balance?: Coin;
}
/** QueryAllDelegatorUnbondingEpochEntriesRequest is a request for the Query/DelegatorUnbondingEpochEntries methods. */

export interface QueryAllDelegatorUnbondingEpochEntriesRequest {
  delegatorAddress: string;
}
/** QueryAllDelegatorUnbondingEpochEntriesResponse is a response for the Query/DelegatorUnbondingEpochEntries methods. */

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
    return {};
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
    params: undefined,
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
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
    return {};
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
    hostChainParams: undefined,
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
    return {
      hostChainParams: isSet(object.hostChainParams)
        ? HostChainParams.fromJSON(object.hostChainParams)
        : undefined,
    };
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
    message.hostChainParams =
      object.hostChainParams !== undefined && object.hostChainParams !== null
        ? HostChainParams.fromPartial(object.hostChainParams)
        : undefined;
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
    return {};
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
    delegationState: undefined,
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
    return {
      delegationState: isSet(object.delegationState)
        ? DelegationState.fromJSON(object.delegationState)
        : undefined,
    };
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
    message.delegationState =
      object.delegationState !== undefined && object.delegationState !== null
        ? DelegationState.fromPartial(object.delegationState)
        : undefined;
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
    return {};
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
    allowListedValidators: undefined,
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
    return {
      allowListedValidators: isSet(object.allowListedValidators)
        ? AllowListedValidators.fromJSON(object.allowListedValidators)
        : undefined,
    };
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
    message.allowListedValidators =
      object.allowListedValidators !== undefined && object.allowListedValidators !== null
        ? AllowListedValidators.fromPartial(object.allowListedValidators)
        : undefined;
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
    return {};
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
    return {
      cValue: isSet(object.cValue) ? String(object.cValue) : "",
    };
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
    return {};
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
    return {
      moduleState: isSet(object.moduleState) ? Boolean(object.moduleState) : false,
    };
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
    return {};
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
    iBCTransientStore: undefined,
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
    return {
      iBCTransientStore: isSet(object.iBCTransientStore)
        ? IBCAmountTransientStore.fromJSON(object.iBCTransientStore)
        : undefined,
    };
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
    message.iBCTransientStore =
      object.iBCTransientStore !== undefined && object.iBCTransientStore !== null
        ? IBCAmountTransientStore.fromPartial(object.iBCTransientStore)
        : undefined;
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
    };
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
    return {
      unclaimed: Array.isArray(object?.unclaimed)
        ? object.unclaimed.map((e: any) => UnbondingEpochCValue.fromJSON(e))
        : [],
    };
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
    };
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
    return {
      failedUnbondings: Array.isArray(object?.failedUnbondings)
        ? object.failedUnbondings.map((e: any) => UnbondingEpochCValue.fromJSON(e))
        : [],
    };
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
    };
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
    return {
      pendingUnbondings: Array.isArray(object?.pendingUnbondings)
        ? object.pendingUnbondings.map((e: any) => UnbondingEpochCValue.fromJSON(e))
        : [],
    };
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
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
    };
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
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    return message;
  },
};

function createBaseQueryUnbondingEpochCValueResponse(): QueryUnbondingEpochCValueResponse {
  return {
    unbondingEpochCValue: undefined,
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
    return {
      unbondingEpochCValue: isSet(object.unbondingEpochCValue)
        ? UnbondingEpochCValue.fromJSON(object.unbondingEpochCValue)
        : undefined,
    };
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
    message.unbondingEpochCValue =
      object.unbondingEpochCValue !== undefined && object.unbondingEpochCValue !== null
        ? UnbondingEpochCValue.fromPartial(object.unbondingEpochCValue)
        : undefined;
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
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
    };
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
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    return message;
  },
};

function createBaseQueryHostAccountUndelegationResponse(): QueryHostAccountUndelegationResponse {
  return {
    hostAccountUndelegation: undefined,
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
    return {
      hostAccountUndelegation: isSet(object.hostAccountUndelegation)
        ? HostAccountUndelegation.fromJSON(object.hostAccountUndelegation)
        : undefined,
    };
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
    message.hostAccountUndelegation =
      object.hostAccountUndelegation !== undefined && object.hostAccountUndelegation !== null
        ? HostAccountUndelegation.fromPartial(object.hostAccountUndelegation)
        : undefined;
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
    };
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
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    return message;
  },
};

function createBaseQueryDelegatorUnbondingEpochEntryResponse(): QueryDelegatorUnbondingEpochEntryResponse {
  return {
    delegatorUnbodingEpochEntry: undefined,
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
    return {
      delegatorUnbodingEpochEntry: isSet(object.delegatorUnbodingEpochEntry)
        ? DelegatorUnbondingEpochEntry.fromJSON(object.delegatorUnbodingEpochEntry)
        : undefined,
    };
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
    message.delegatorUnbodingEpochEntry =
      object.delegatorUnbodingEpochEntry !== undefined && object.delegatorUnbodingEpochEntry !== null
        ? DelegatorUnbondingEpochEntry.fromPartial(object.delegatorUnbodingEpochEntry)
        : undefined;
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
    return {};
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
    hostAccounts: undefined,
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
    return {
      hostAccounts: isSet(object.hostAccounts) ? HostAccounts.fromJSON(object.hostAccounts) : undefined,
    };
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
    message.hostAccounts =
      object.hostAccounts !== undefined && object.hostAccounts !== null
        ? HostAccounts.fromPartial(object.hostAccounts)
        : undefined;
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
    return {};
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
    balance: undefined,
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
    return {
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
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
    message.balance =
      object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
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
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
    };
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
    return {
      delegatorUnbondingEpochEntries: Array.isArray(object?.delegatorUnbondingEpochEntries)
        ? object.delegatorUnbondingEpochEntries.map((e: any) => DelegatorUnbondingEpochEntry.fromJSON(e))
        : [],
    };
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
