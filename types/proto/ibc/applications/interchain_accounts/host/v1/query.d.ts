import { Params } from "./host";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
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
