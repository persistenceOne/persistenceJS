/* eslint-disable */
import { Params } from "./params";
import { HostChain, Deposit, Unbonding, UserUnbonding, ValidatorUnbonding } from "./liquidstakeibc";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "pstake.liquidstakeibc.v1beta1";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryHostChainRequest {
  chainId: string;
}
export interface QueryHostChainResponse {
  hostChain?: HostChain;
}
export interface QueryHostChainsRequest {}
export interface QueryHostChainsResponse {
  hostChains: HostChain[];
}
export interface QueryDepositsRequest {
  chainId: string;
}
export interface QueryDepositsResponse {
  deposits: Deposit[];
}
export interface QueryUnbondingsRequest {
  chainId: string;
}
export interface QueryUnbondingsResponse {
  unbondings: Unbonding[];
}
export interface QueryUnbondingRequest {
  chainId: string;
  epoch: Long;
}
export interface QueryUnbondingResponse {
  unbonding?: Unbonding;
}
export interface QueryUserUnbondingsRequest {
  address: string;
}
export interface QueryUserUnbondingsResponse {
  userUnbondings: UserUnbonding[];
}
export interface QueryValidatorUnbondingRequest {
  chainId: string;
}
export interface QueryValidatorUnbondingResponse {
  validatorUnbondings: ValidatorUnbonding[];
}
export interface QueryDepositAccountBalanceRequest {
  chainId: string;
}
export interface QueryDepositAccountBalanceResponse {
  balance?: Coin;
}
export interface QueryExchangeRateRequest {
  chainId: string;
}
export interface QueryExchangeRateResponse {
  rate: string;
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
function createBaseQueryHostChainRequest(): QueryHostChainRequest {
  return {
    chainId: "",
  };
}
export const QueryHostChainRequest = {
  encode(message: QueryHostChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostChainRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },
  toJSON(message: QueryHostChainRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostChainRequest>, I>>(object: I): QueryHostChainRequest {
    const message = createBaseQueryHostChainRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryHostChainResponse(): QueryHostChainResponse {
  return {
    hostChain: undefined,
  };
}
export const QueryHostChainResponse = {
  encode(message: QueryHostChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChain = HostChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostChainResponse {
    return {
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined,
    };
  },
  toJSON(message: QueryHostChainResponse): unknown {
    const obj: any = {};
    message.hostChain !== undefined &&
      (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostChainResponse>, I>>(object: I): QueryHostChainResponse {
    const message = createBaseQueryHostChainResponse();
    message.hostChain =
      object.hostChain !== undefined && object.hostChain !== null
        ? HostChain.fromPartial(object.hostChain)
        : undefined;
    return message;
  },
};
function createBaseQueryHostChainsRequest(): QueryHostChainsRequest {
  return {};
}
export const QueryHostChainsRequest = {
  encode(_: QueryHostChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostChainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainsRequest();
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
  fromJSON(_: any): QueryHostChainsRequest {
    return {};
  },
  toJSON(_: QueryHostChainsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostChainsRequest>, I>>(_: I): QueryHostChainsRequest {
    const message = createBaseQueryHostChainsRequest();
    return message;
  },
};
function createBaseQueryHostChainsResponse(): QueryHostChainsResponse {
  return {
    hostChains: [],
  };
}
export const QueryHostChainsResponse = {
  encode(message: QueryHostChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hostChains) {
      HostChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHostChainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChains.push(HostChain.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostChainsResponse {
    return {
      hostChains: Array.isArray(object?.hostChains)
        ? object.hostChains.map((e: any) => HostChain.fromJSON(e))
        : [],
    };
  },
  toJSON(message: QueryHostChainsResponse): unknown {
    const obj: any = {};
    if (message.hostChains) {
      obj.hostChains = message.hostChains.map((e) => (e ? HostChain.toJSON(e) : undefined));
    } else {
      obj.hostChains = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryHostChainsResponse>, I>>(object: I): QueryHostChainsResponse {
    const message = createBaseQueryHostChainsResponse();
    message.hostChains = object.hostChains?.map((e) => HostChain.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    chainId: "",
  };
}
export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },
  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositsRequest>, I>>(object: I): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
  };
}
export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
    };
  },
  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? Deposit.toJSON(e) : undefined));
    } else {
      obj.deposits = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositsResponse>, I>>(object: I): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryUnbondingsRequest(): QueryUnbondingsRequest {
  return {
    chainId: "",
  };
}
export const QueryUnbondingsRequest = {
  encode(message: QueryUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },
  toJSON(message: QueryUnbondingsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnbondingsRequest>, I>>(object: I): QueryUnbondingsRequest {
    const message = createBaseQueryUnbondingsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryUnbondingsResponse(): QueryUnbondingsResponse {
  return {
    unbondings: [],
  };
}
export const QueryUnbondingsResponse = {
  encode(message: QueryUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(Unbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings)
        ? object.unbondings.map((e: any) => Unbonding.fromJSON(e))
        : [],
    };
  },
  toJSON(message: QueryUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) => (e ? Unbonding.toJSON(e) : undefined));
    } else {
      obj.unbondings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnbondingsResponse>, I>>(object: I): QueryUnbondingsResponse {
    const message = createBaseQueryUnbondingsResponse();
    message.unbondings = object.unbondings?.map((e) => Unbonding.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryUnbondingRequest(): QueryUnbondingRequest {
  return {
    chainId: "",
    epoch: Long.ZERO,
  };
}
export const QueryUnbondingRequest = {
  encode(message: QueryUnbondingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).int64(message.epoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epoch = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.ZERO,
    };
  },
  toJSON(message: QueryUnbondingRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnbondingRequest>, I>>(object: I): QueryUnbondingRequest {
    const message = createBaseQueryUnbondingRequest();
    message.chainId = object.chainId ?? "";
    message.epoch =
      object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.ZERO;
    return message;
  },
};
function createBaseQueryUnbondingResponse(): QueryUnbondingResponse {
  return {
    unbonding: undefined,
  };
}
export const QueryUnbondingResponse = {
  encode(message: QueryUnbondingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbonding = Unbonding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingResponse {
    return {
      unbonding: isSet(object.unbonding) ? Unbonding.fromJSON(object.unbonding) : undefined,
    };
  },
  toJSON(message: QueryUnbondingResponse): unknown {
    const obj: any = {};
    message.unbonding !== undefined &&
      (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUnbondingResponse>, I>>(object: I): QueryUnbondingResponse {
    const message = createBaseQueryUnbondingResponse();
    message.unbonding =
      object.unbonding !== undefined && object.unbonding !== null
        ? Unbonding.fromPartial(object.unbonding)
        : undefined;
    return message;
  },
};
function createBaseQueryUserUnbondingsRequest(): QueryUserUnbondingsRequest {
  return {
    address: "",
  };
}
export const QueryUserUnbondingsRequest = {
  encode(message: QueryUserUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserUnbondingsRequest();
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
  fromJSON(object: any): QueryUserUnbondingsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },
  toJSON(message: QueryUserUnbondingsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUserUnbondingsRequest>, I>>(
    object: I,
  ): QueryUserUnbondingsRequest {
    const message = createBaseQueryUserUnbondingsRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryUserUnbondingsResponse(): QueryUserUnbondingsResponse {
  return {
    userUnbondings: [],
  };
}
export const QueryUserUnbondingsResponse = {
  encode(message: QueryUserUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userUnbondings) {
      UserUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userUnbondings.push(UserUnbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserUnbondingsResponse {
    return {
      userUnbondings: Array.isArray(object?.userUnbondings)
        ? object.userUnbondings.map((e: any) => UserUnbonding.fromJSON(e))
        : [],
    };
  },
  toJSON(message: QueryUserUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.userUnbondings) {
      obj.userUnbondings = message.userUnbondings.map((e) => (e ? UserUnbonding.toJSON(e) : undefined));
    } else {
      obj.userUnbondings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUserUnbondingsResponse>, I>>(
    object: I,
  ): QueryUserUnbondingsResponse {
    const message = createBaseQueryUserUnbondingsResponse();
    message.userUnbondings = object.userUnbondings?.map((e) => UserUnbonding.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryValidatorUnbondingRequest(): QueryValidatorUnbondingRequest {
  return {
    chainId: "",
  };
}
export const QueryValidatorUnbondingRequest = {
  encode(message: QueryValidatorUnbondingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },
  toJSON(message: QueryValidatorUnbondingRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingRequest>, I>>(
    object: I,
  ): QueryValidatorUnbondingRequest {
    const message = createBaseQueryValidatorUnbondingRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryValidatorUnbondingResponse(): QueryValidatorUnbondingResponse {
  return {
    validatorUnbondings: [],
  };
}
export const QueryValidatorUnbondingResponse = {
  encode(message: QueryValidatorUnbondingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validatorUnbondings) {
      ValidatorUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUnbondings.push(ValidatorUnbonding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingResponse {
    return {
      validatorUnbondings: Array.isArray(object?.validatorUnbondings)
        ? object.validatorUnbondings.map((e: any) => ValidatorUnbonding.fromJSON(e))
        : [],
    };
  },
  toJSON(message: QueryValidatorUnbondingResponse): unknown {
    const obj: any = {};
    if (message.validatorUnbondings) {
      obj.validatorUnbondings = message.validatorUnbondings.map((e) =>
        e ? ValidatorUnbonding.toJSON(e) : undefined,
      );
    } else {
      obj.validatorUnbondings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingResponse>, I>>(
    object: I,
  ): QueryValidatorUnbondingResponse {
    const message = createBaseQueryValidatorUnbondingResponse();
    message.validatorUnbondings =
      object.validatorUnbondings?.map((e) => ValidatorUnbonding.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryDepositAccountBalanceRequest(): QueryDepositAccountBalanceRequest {
  return {
    chainId: "",
  };
}
export const QueryDepositAccountBalanceRequest = {
  encode(message: QueryDepositAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositAccountBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositAccountBalanceRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },
  toJSON(message: QueryDepositAccountBalanceRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositAccountBalanceRequest>, I>>(
    object: I,
  ): QueryDepositAccountBalanceRequest {
    const message = createBaseQueryDepositAccountBalanceRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryDepositAccountBalanceResponse(): QueryDepositAccountBalanceResponse {
  return {
    balance: undefined,
  };
}
export const QueryDepositAccountBalanceResponse = {
  encode(message: QueryDepositAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositAccountBalanceResponse();
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
  fromJSON(object: any): QueryDepositAccountBalanceResponse {
    return {
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },
  toJSON(message: QueryDepositAccountBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositAccountBalanceResponse>, I>>(
    object: I,
  ): QueryDepositAccountBalanceResponse {
    const message = createBaseQueryDepositAccountBalanceResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
};
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    chainId: "",
  };
}
export const QueryExchangeRateRequest = {
  encode(message: QueryExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExchangeRateRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },
  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(
    object: I,
  ): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    rate: "",
  };
}
export const QueryExchangeRateResponse = {
  encode(message: QueryExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExchangeRateResponse {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
    };
  },
  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(
    object: I,
  ): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.rate = object.rate ?? "";
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a HostChain by id. */
  HostChain(request: QueryHostChainRequest): Promise<QueryHostChainResponse>;
  /** Queries for all the HostChains. */
  HostChains(request?: QueryHostChainsRequest): Promise<QueryHostChainsResponse>;
  /** Queries for all the deposits for a host chain. */
  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** Queries all unbondings for a host chain. */
  Unbondings(request: QueryUnbondingsRequest): Promise<QueryUnbondingsResponse>;
  /** Queries an unbonding for a host chain. */
  Unbonding(request: QueryUnbondingRequest): Promise<QueryUnbondingResponse>;
  /** Queries all unbondings for a delegator address. */
  UserUnbondings(request: QueryUserUnbondingsRequest): Promise<QueryUserUnbondingsResponse>;
  /** Queries all validator unbondings for a host chain. */
  ValidatorUnbondings(request: QueryValidatorUnbondingRequest): Promise<QueryValidatorUnbondingResponse>;
  /** Queries for a host chain deposit account balance. */
  DepositAccountBalance(
    request: QueryDepositAccountBalanceRequest,
  ): Promise<QueryDepositAccountBalanceResponse>;
  /** Queries for a host chain exchange rate between the host token and the stk token. */
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.HostChain = this.HostChain.bind(this);
    this.HostChains = this.HostChains.bind(this);
    this.Deposits = this.Deposits.bind(this);
    this.Unbondings = this.Unbondings.bind(this);
    this.Unbonding = this.Unbonding.bind(this);
    this.UserUnbondings = this.UserUnbondings.bind(this);
    this.ValidatorUnbondings = this.ValidatorUnbondings.bind(this);
    this.DepositAccountBalance = this.DepositAccountBalance.bind(this);
    this.ExchangeRate = this.ExchangeRate.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  HostChain(request: QueryHostChainRequest): Promise<QueryHostChainResponse> {
    const data = QueryHostChainRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "HostChain", data);
    return promise.then((data) => QueryHostChainResponse.decode(new _m0.Reader(data)));
  }
  HostChains(request: QueryHostChainsRequest = {}): Promise<QueryHostChainsResponse> {
    const data = QueryHostChainsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "HostChains", data);
    return promise.then((data) => QueryHostChainsResponse.decode(new _m0.Reader(data)));
  }
  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Deposits", data);
    return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }
  Unbondings(request: QueryUnbondingsRequest): Promise<QueryUnbondingsResponse> {
    const data = QueryUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Unbondings", data);
    return promise.then((data) => QueryUnbondingsResponse.decode(new _m0.Reader(data)));
  }
  Unbonding(request: QueryUnbondingRequest): Promise<QueryUnbondingResponse> {
    const data = QueryUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Unbonding", data);
    return promise.then((data) => QueryUnbondingResponse.decode(new _m0.Reader(data)));
  }
  UserUnbondings(request: QueryUserUnbondingsRequest): Promise<QueryUserUnbondingsResponse> {
    const data = QueryUserUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "UserUnbondings", data);
    return promise.then((data) => QueryUserUnbondingsResponse.decode(new _m0.Reader(data)));
  }
  ValidatorUnbondings(request: QueryValidatorUnbondingRequest): Promise<QueryValidatorUnbondingResponse> {
    const data = QueryValidatorUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "ValidatorUnbondings", data);
    return promise.then((data) => QueryValidatorUnbondingResponse.decode(new _m0.Reader(data)));
  }
  DepositAccountBalance(
    request: QueryDepositAccountBalanceRequest,
  ): Promise<QueryDepositAccountBalanceResponse> {
    const data = QueryDepositAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "DepositAccountBalance", data);
    return promise.then((data) => QueryDepositAccountBalanceResponse.decode(new _m0.Reader(data)));
  }
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "ExchangeRate", data);
    return promise.then((data) => QueryExchangeRateResponse.decode(new _m0.Reader(data)));
  }
}
