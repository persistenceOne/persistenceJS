import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account: Any;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export declare const QueryAccountsRequest: {
  encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
  fromJSON(object: any): QueryAccountsRequest;
  toJSON(message: QueryAccountsRequest): unknown;
  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
  encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
  fromJSON(object: any): QueryAccountsResponse;
  toJSON(message: QueryAccountsResponse): unknown;
  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryAccountRequest: {
  encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
  fromJSON(object: any): QueryAccountRequest;
  toJSON(message: QueryAccountRequest): unknown;
  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
  encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
  fromJSON(object: any): QueryAccountResponse;
  toJSON(message: QueryAccountResponse): unknown;
  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryParamsRequest: {
  encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
  fromJSON(_: any): QueryParamsRequest;
  toJSON(_: QueryParamsRequest): unknown;
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
  encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
  fromJSON(object: any): QueryParamsResponse;
  toJSON(message: QueryParamsResponse): unknown;
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
