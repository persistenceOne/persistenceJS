import { ParamChange } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */
  key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** param defines the queried parameter. */
  param: ParamChange;
}
export declare const QueryParamsRequest: {
  encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
  fromJSON(object: any): QueryParamsRequest;
  toJSON(message: QueryParamsRequest): unknown;
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
  encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
  fromJSON(object: any): QueryParamsResponse;
  toJSON(message: QueryParamsResponse): unknown;
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
