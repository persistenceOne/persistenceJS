/* eslint-disable */
import { Params, CodeAuthorization, ContractAuthorization } from "./globalfee";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.globalfee.v1";
export interface QueryCodeAuthorizationRequest {
  codeId: bigint;
}
export interface QueryCodeAuthorizationResponse {
  methods: string[];
}
export interface QueryContractAuthorizationRequest {
  contractAddress: string;
}
export interface QueryContractAuthorizationResponse {
  methods: string[];
}
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryAuthorizationsRequest {}
export interface QueryAuthorizationsResponse {
  codeAuthorizations: CodeAuthorization[];
  contractAuthorizations: ContractAuthorization[];
}
function createBaseQueryCodeAuthorizationRequest(): QueryCodeAuthorizationRequest {
  return {
    codeId: BigInt(0),
  };
}
export const QueryCodeAuthorizationRequest = {
  encode(message: QueryCodeAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeAuthorizationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeAuthorizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeAuthorizationRequest {
    const obj = createBaseQueryCodeAuthorizationRequest();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    return obj;
  },
  toJSON(message: QueryCodeAuthorizationRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryCodeAuthorizationRequest>): QueryCodeAuthorizationRequest {
    const message = createBaseQueryCodeAuthorizationRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
};
function createBaseQueryCodeAuthorizationResponse(): QueryCodeAuthorizationResponse {
  return {
    methods: [],
  };
}
export const QueryCodeAuthorizationResponse = {
  encode(
    message: QueryCodeAuthorizationResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.methods) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeAuthorizationResponse {
    const obj = createBaseQueryCodeAuthorizationResponse();
    if (Array.isArray(object?.methods)) obj.methods = object.methods.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryCodeAuthorizationResponse): unknown {
    const obj: any = {};
    if (message.methods) {
      obj.methods = message.methods.map((e) => e);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCodeAuthorizationResponse>): QueryCodeAuthorizationResponse {
    const message = createBaseQueryCodeAuthorizationResponse();
    message.methods = object.methods?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryContractAuthorizationRequest(): QueryContractAuthorizationRequest {
  return {
    contractAddress: "",
  };
}
export const QueryContractAuthorizationRequest = {
  encode(
    message: QueryContractAuthorizationRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractAuthorizationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAuthorizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractAuthorizationRequest {
    const obj = createBaseQueryContractAuthorizationRequest();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: QueryContractAuthorizationRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryContractAuthorizationRequest>): QueryContractAuthorizationRequest {
    const message = createBaseQueryContractAuthorizationRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseQueryContractAuthorizationResponse(): QueryContractAuthorizationResponse {
  return {
    methods: [],
  };
}
export const QueryContractAuthorizationResponse = {
  encode(
    message: QueryContractAuthorizationResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.methods) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractAuthorizationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractAuthorizationResponse {
    const obj = createBaseQueryContractAuthorizationResponse();
    if (Array.isArray(object?.methods)) obj.methods = object.methods.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryContractAuthorizationResponse): unknown {
    const obj: any = {};
    if (message.methods) {
      obj.methods = message.methods.map((e) => e);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryContractAuthorizationResponse>): QueryContractAuthorizationResponse {
    const message = createBaseQueryContractAuthorizationResponse();
    message.methods = object.methods?.map((e) => e) || [];
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
function createBaseQueryAuthorizationsRequest(): QueryAuthorizationsRequest {
  return {};
}
export const QueryAuthorizationsRequest = {
  encode(_: QueryAuthorizationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorizationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizationsRequest();
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
  fromJSON(_: any): QueryAuthorizationsRequest {
    const obj = createBaseQueryAuthorizationsRequest();
    return obj;
  },
  toJSON(_: QueryAuthorizationsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryAuthorizationsRequest>): QueryAuthorizationsRequest {
    const message = createBaseQueryAuthorizationsRequest();
    return message;
  },
};
function createBaseQueryAuthorizationsResponse(): QueryAuthorizationsResponse {
  return {
    codeAuthorizations: [],
    contractAuthorizations: [],
  };
}
export const QueryAuthorizationsResponse = {
  encode(message: QueryAuthorizationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeAuthorizations) {
      CodeAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractAuthorizations) {
      ContractAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorizationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeAuthorizations.push(CodeAuthorization.decode(reader, reader.uint32()));
          break;
        case 2:
          message.contractAuthorizations.push(ContractAuthorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuthorizationsResponse {
    const obj = createBaseQueryAuthorizationsResponse();
    if (Array.isArray(object?.codeAuthorizations))
      obj.codeAuthorizations = object.codeAuthorizations.map((e: any) => CodeAuthorization.fromJSON(e));
    if (Array.isArray(object?.contractAuthorizations))
      obj.contractAuthorizations = object.contractAuthorizations.map((e: any) =>
        ContractAuthorization.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: QueryAuthorizationsResponse): unknown {
    const obj: any = {};
    if (message.codeAuthorizations) {
      obj.codeAuthorizations = message.codeAuthorizations.map((e) =>
        e ? CodeAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.codeAuthorizations = [];
    }
    if (message.contractAuthorizations) {
      obj.contractAuthorizations = message.contractAuthorizations.map((e) =>
        e ? ContractAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.contractAuthorizations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAuthorizationsResponse>): QueryAuthorizationsResponse {
    const message = createBaseQueryAuthorizationsResponse();
    message.codeAuthorizations =
      object.codeAuthorizations?.map((e) => CodeAuthorization.fromPartial(e)) || [];
    message.contractAuthorizations =
      object.contractAuthorizations?.map((e) => ContractAuthorization.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  CodeAuthorization(request: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponse>;
  ContractAuthorization(
    request: QueryContractAuthorizationRequest,
  ): Promise<QueryContractAuthorizationResponse>;
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  Authorizations(request?: QueryAuthorizationsRequest): Promise<QueryAuthorizationsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CodeAuthorization = this.CodeAuthorization.bind(this);
    this.ContractAuthorization = this.ContractAuthorization.bind(this);
    this.Params = this.Params.bind(this);
    this.Authorizations = this.Authorizations.bind(this);
  }
  CodeAuthorization(request: QueryCodeAuthorizationRequest): Promise<QueryCodeAuthorizationResponse> {
    const data = QueryCodeAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.globalfee.v1.Query", "CodeAuthorization", data);
    return promise.then((data) => QueryCodeAuthorizationResponse.decode(new BinaryReader(data)));
  }
  ContractAuthorization(
    request: QueryContractAuthorizationRequest,
  ): Promise<QueryContractAuthorizationResponse> {
    const data = QueryContractAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "publicawesome.stargaze.globalfee.v1.Query",
      "ContractAuthorization",
      data,
    );
    return promise.then((data) => QueryContractAuthorizationResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.globalfee.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Authorizations(request: QueryAuthorizationsRequest = {}): Promise<QueryAuthorizationsResponse> {
    const data = QueryAuthorizationsRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.globalfee.v1.Query", "Authorizations", data);
    return promise.then((data) => QueryAuthorizationsResponse.decode(new BinaryReader(data)));
  }
}
