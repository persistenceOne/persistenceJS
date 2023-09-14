/* eslint-disable */
import { Params } from "./params";
import {
  HostChain,
  Deposit,
  LSMDeposit,
  Unbonding,
  UserUnbonding,
  ValidatorUnbonding,
} from "./liquidstakeibc";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "pstake.liquidstakeibc.v1beta1";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryHostChainRequest {
  chainId: string;
}
export interface QueryHostChainResponse {
  hostChain: HostChain;
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
export interface QueryLSMDepositsRequest {
  chainId: string;
}
export interface QueryLSMDepositsResponse {
  deposits: LSMDeposit[];
}
export interface QueryUnbondingsRequest {
  chainId: string;
}
export interface QueryUnbondingsResponse {
  unbondings: Unbonding[];
}
export interface QueryUnbondingRequest {
  chainId: string;
  epoch: bigint;
}
export interface QueryUnbondingResponse {
  unbonding: Unbonding;
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
  balance: Coin;
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
function createBaseQueryHostChainRequest(): QueryHostChainRequest {
  return {
    chainId: "",
  };
}
export const QueryHostChainRequest = {
  encode(message: QueryHostChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryHostChainRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryHostChainRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainRequest>): QueryHostChainRequest {
    const message = createBaseQueryHostChainRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryHostChainResponse(): QueryHostChainResponse {
  return {
    hostChain: HostChain.fromPartial({}),
  };
}
export const QueryHostChainResponse = {
  encode(message: QueryHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryHostChainResponse();
    if (isSet(object.hostChain)) obj.hostChain = HostChain.fromJSON(object.hostChain);
    return obj;
  },
  toJSON(message: QueryHostChainResponse): unknown {
    const obj: any = {};
    message.hostChain !== undefined &&
      (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostChainResponse>): QueryHostChainResponse {
    const message = createBaseQueryHostChainResponse();
    if (object.hostChain !== undefined && object.hostChain !== null) {
      message.hostChain = HostChain.fromPartial(object.hostChain);
    }
    return message;
  },
};
function createBaseQueryHostChainsRequest(): QueryHostChainsRequest {
  return {};
}
export const QueryHostChainsRequest = {
  encode(_: QueryHostChainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostChainsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryHostChainsRequest();
    return obj;
  },
  toJSON(_: QueryHostChainsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryHostChainsRequest>): QueryHostChainsRequest {
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
  encode(message: QueryHostChainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostChains) {
      HostChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostChainsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryHostChainsResponse();
    if (Array.isArray(object?.hostChains))
      obj.hostChains = object.hostChains.map((e: any) => HostChain.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<QueryHostChainsResponse>): QueryHostChainsResponse {
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
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryDepositsRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
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
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryDepositsResponse();
    if (Array.isArray(object?.deposits)) obj.deposits = object.deposits.map((e: any) => Deposit.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryLSMDepositsRequest(): QueryLSMDepositsRequest {
  return {
    chainId: "",
  };
}
export const QueryLSMDepositsRequest = {
  encode(message: QueryLSMDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositsRequest();
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
  fromJSON(object: any): QueryLSMDepositsRequest {
    const obj = createBaseQueryLSMDepositsRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryLSMDepositsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryLSMDepositsRequest>): QueryLSMDepositsRequest {
    const message = createBaseQueryLSMDepositsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryLSMDepositsResponse(): QueryLSMDepositsResponse {
  return {
    deposits: [],
  };
}
export const QueryLSMDepositsResponse = {
  encode(message: QueryLSMDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      LSMDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLSMDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLSMDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(LSMDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLSMDepositsResponse {
    const obj = createBaseQueryLSMDepositsResponse();
    if (Array.isArray(object?.deposits))
      obj.deposits = object.deposits.map((e: any) => LSMDeposit.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryLSMDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? LSMDeposit.toJSON(e) : undefined));
    } else {
      obj.deposits = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLSMDepositsResponse>): QueryLSMDepositsResponse {
    const message = createBaseQueryLSMDepositsResponse();
    message.deposits = object.deposits?.map((e) => LSMDeposit.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryUnbondingsRequest(): QueryUnbondingsRequest {
  return {
    chainId: "",
  };
}
export const QueryUnbondingsRequest = {
  encode(message: QueryUnbondingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryUnbondingsRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryUnbondingsRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryUnbondingsRequest>): QueryUnbondingsRequest {
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
  encode(message: QueryUnbondingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryUnbondingsResponse();
    if (Array.isArray(object?.unbondings))
      obj.unbondings = object.unbondings.map((e: any) => Unbonding.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<QueryUnbondingsResponse>): QueryUnbondingsResponse {
    const message = createBaseQueryUnbondingsResponse();
    message.unbondings = object.unbondings?.map((e) => Unbonding.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryUnbondingRequest(): QueryUnbondingRequest {
  return {
    chainId: "",
    epoch: BigInt(0),
  };
}
export const QueryUnbondingRequest = {
  encode(message: QueryUnbondingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).int64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingRequest {
    const obj = createBaseQueryUnbondingRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.epoch)) obj.epoch = BigInt(object.epoch.toString());
    return obj;
  },
  toJSON(message: QueryUnbondingRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryUnbondingRequest>): QueryUnbondingRequest {
    const message = createBaseQueryUnbondingRequest();
    message.chainId = object.chainId ?? "";
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch.toString());
    }
    return message;
  },
};
function createBaseQueryUnbondingResponse(): QueryUnbondingResponse {
  return {
    unbonding: Unbonding.fromPartial({}),
  };
}
export const QueryUnbondingResponse = {
  encode(message: QueryUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryUnbondingResponse();
    if (isSet(object.unbonding)) obj.unbonding = Unbonding.fromJSON(object.unbonding);
    return obj;
  },
  toJSON(message: QueryUnbondingResponse): unknown {
    const obj: any = {};
    message.unbonding !== undefined &&
      (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUnbondingResponse>): QueryUnbondingResponse {
    const message = createBaseQueryUnbondingResponse();
    if (object.unbonding !== undefined && object.unbonding !== null) {
      message.unbonding = Unbonding.fromPartial(object.unbonding);
    }
    return message;
  },
};
function createBaseQueryUserUnbondingsRequest(): QueryUserUnbondingsRequest {
  return {
    address: "",
  };
}
export const QueryUserUnbondingsRequest = {
  encode(message: QueryUserUnbondingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserUnbondingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryUserUnbondingsRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryUserUnbondingsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryUserUnbondingsRequest>): QueryUserUnbondingsRequest {
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
  encode(message: QueryUserUnbondingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userUnbondings) {
      UserUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserUnbondingsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryUserUnbondingsResponse();
    if (Array.isArray(object?.userUnbondings))
      obj.userUnbondings = object.userUnbondings.map((e: any) => UserUnbonding.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<QueryUserUnbondingsResponse>): QueryUserUnbondingsResponse {
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
  encode(
    message: QueryValidatorUnbondingRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryValidatorUnbondingRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryValidatorUnbondingRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorUnbondingRequest>): QueryValidatorUnbondingRequest {
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
  encode(
    message: QueryValidatorUnbondingResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.validatorUnbondings) {
      ValidatorUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryValidatorUnbondingResponse();
    if (Array.isArray(object?.validatorUnbondings))
      obj.validatorUnbondings = object.validatorUnbondings.map((e: any) => ValidatorUnbonding.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<QueryValidatorUnbondingResponse>): QueryValidatorUnbondingResponse {
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
  encode(
    message: QueryDepositAccountBalanceRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositAccountBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryDepositAccountBalanceRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryDepositAccountBalanceRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositAccountBalanceRequest>): QueryDepositAccountBalanceRequest {
    const message = createBaseQueryDepositAccountBalanceRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryDepositAccountBalanceResponse(): QueryDepositAccountBalanceResponse {
  return {
    balance: Coin.fromPartial({}),
  };
}
export const QueryDepositAccountBalanceResponse = {
  encode(
    message: QueryDepositAccountBalanceResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositAccountBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryDepositAccountBalanceResponse();
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    return obj;
  },
  toJSON(message: QueryDepositAccountBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositAccountBalanceResponse>): QueryDepositAccountBalanceResponse {
    const message = createBaseQueryDepositAccountBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    return message;
  },
};
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    chainId: "",
  };
}
export const QueryExchangeRateRequest = {
  encode(message: QueryExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryExchangeRateRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
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
  encode(message: QueryExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQueryExchangeRateResponse();
    if (isSet(object.rate)) obj.rate = String(object.rate);
    return obj;
  },
  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },
  fromPartial(object: Partial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
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
  /** Queries for all the deposits for a host chain. */
  LSMDeposits(request: QueryLSMDepositsRequest): Promise<QueryLSMDepositsResponse>;
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
    this.LSMDeposits = this.LSMDeposits.bind(this);
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
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  HostChain(request: QueryHostChainRequest): Promise<QueryHostChainResponse> {
    const data = QueryHostChainRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "HostChain", data);
    return promise.then((data) => QueryHostChainResponse.decode(new BinaryReader(data)));
  }
  HostChains(request: QueryHostChainsRequest = {}): Promise<QueryHostChainsResponse> {
    const data = QueryHostChainsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "HostChains", data);
    return promise.then((data) => QueryHostChainsResponse.decode(new BinaryReader(data)));
  }
  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Deposits", data);
    return promise.then((data) => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  LSMDeposits(request: QueryLSMDepositsRequest): Promise<QueryLSMDepositsResponse> {
    const data = QueryLSMDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "LSMDeposits", data);
    return promise.then((data) => QueryLSMDepositsResponse.decode(new BinaryReader(data)));
  }
  Unbondings(request: QueryUnbondingsRequest): Promise<QueryUnbondingsResponse> {
    const data = QueryUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Unbondings", data);
    return promise.then((data) => QueryUnbondingsResponse.decode(new BinaryReader(data)));
  }
  Unbonding(request: QueryUnbondingRequest): Promise<QueryUnbondingResponse> {
    const data = QueryUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "Unbonding", data);
    return promise.then((data) => QueryUnbondingResponse.decode(new BinaryReader(data)));
  }
  UserUnbondings(request: QueryUserUnbondingsRequest): Promise<QueryUserUnbondingsResponse> {
    const data = QueryUserUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "UserUnbondings", data);
    return promise.then((data) => QueryUserUnbondingsResponse.decode(new BinaryReader(data)));
  }
  ValidatorUnbondings(request: QueryValidatorUnbondingRequest): Promise<QueryValidatorUnbondingResponse> {
    const data = QueryValidatorUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "ValidatorUnbondings", data);
    return promise.then((data) => QueryValidatorUnbondingResponse.decode(new BinaryReader(data)));
  }
  DepositAccountBalance(
    request: QueryDepositAccountBalanceRequest,
  ): Promise<QueryDepositAccountBalanceResponse> {
    const data = QueryDepositAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "DepositAccountBalance", data);
    return promise.then((data) => QueryDepositAccountBalanceResponse.decode(new BinaryReader(data)));
  }
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("pstake.liquidstakeibc.v1beta1.Query", "ExchangeRate", data);
    return promise.then((data) => QueryExchangeRateResponse.decode(new BinaryReader(data)));
  }
}
