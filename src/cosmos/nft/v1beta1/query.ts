/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  /** class_id associated with the nft */
  classId: string;
  /** owner is the owner address of the nft */
  owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  /** amount is the number of all NFTs of a given class owned by the owner */
  amount: bigint;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  /** owner is the owner address of the nft */
  owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  /** class_id associated with the nft */
  classId: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  /** amount is the number of all NFTs from the given class */
  amount: bigint;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
  /** class_id associated with the nft */
  classId: string;
  /** owner is the owner address of the nft */
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
  /** NFT defines the NFT */
  nfts: NFT[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  /** owner is the owner address of the nft */
  nft: NFT;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
  /** class_id associated with the nft */
  classId: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
  /** class defines the class of the nft type. */
  class: Class;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: "",
  };
}
export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    const obj = createBaseQueryBalanceRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: BigInt(0),
  };
}
export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    const obj = createBaseQueryBalanceResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
};
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: "",
  };
}
export const QueryOwnerRequest = {
  encode(message: QueryOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwnerRequest {
    const obj = createBaseQueryOwnerRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: "",
  };
}
export const QueryOwnerResponse = {
  encode(message: QueryOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
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
  fromJSON(object: any): QueryOwnerResponse {
    const obj = createBaseQueryOwnerResponse();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: "",
  };
}
export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyRequest {
    const obj = createBaseQuerySupplyRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0),
  };
}
export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    const obj = createBaseQuerySupplyResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
};
function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryNFTsRequest = {
  encode(message: QueryNFTsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTsRequest {
    const obj = createBaseQueryNFTsRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryNFTsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryNFTsResponse = {
  encode(message: QueryNFTsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryNFTsResponse {
    const obj = createBaseQueryNFTsResponse();
    if (Array.isArray(object?.nfts)) obj.nfts = object.nfts.map((e: any) => NFT.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryNFTsResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: "",
  };
}
export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTRequest {
    const obj = createBaseQueryNFTRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: NFT.fromPartial({}),
  };
}
export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTResponse {
    const obj = createBaseQueryNFTResponse();
    if (isSet(object.nft)) obj.nft = NFT.fromJSON(object.nft);
    return obj;
  },
  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    }
    return message;
  },
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: "",
  };
}
export const QueryClassRequest = {
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassRequest {
    const obj = createBaseQueryClassRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: Partial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: Class.fromPartial({}),
  };
}
export const QueryClassResponse = {
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassResponse {
    const obj = createBaseQueryClassResponse();
    if (isSet(object.class)) obj.class = Class.fromJSON(object.class);
    return obj;
  },
  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromPartial(object.class);
    }
    return message;
  },
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryClassesRequest = {
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromJSON(object: any): QueryClassesRequest {
    const obj = createBaseQueryClassesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryClassesResponse = {
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClassesResponse {
    const obj = createBaseQueryClassesResponse();
    if (Array.isArray(object?.classes)) obj.classes = object.classes.map((e: any) => Class.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => (e ? Class.toJSON(e) : undefined));
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  Class(request: QueryClassRequest): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  Classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Owner = this.Owner.bind(this);
    this.Supply = this.Supply.bind(this);
    this.NFTs = this.NFTs.bind(this);
    this.NFT = this.NFT.bind(this);
    this.Class = this.Class.bind(this);
    this.Classes = this.Classes.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
    return promise.then((data) => QueryOwnerResponse.decode(new BinaryReader(data)));
  }
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const data = QueryNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
    return promise.then((data) => QueryNFTsResponse.decode(new BinaryReader(data)));
  }
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
    return promise.then((data) => QueryNFTResponse.decode(new BinaryReader(data)));
  }
  Class(request: QueryClassRequest): Promise<QueryClassResponse> {
    const data = QueryClassRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
    return promise.then((data) => QueryClassResponse.decode(new BinaryReader(data)));
  }
  Classes(
    request: QueryClassesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
    return promise.then((data) => QueryClassesResponse.decode(new BinaryReader(data)));
  }
}
