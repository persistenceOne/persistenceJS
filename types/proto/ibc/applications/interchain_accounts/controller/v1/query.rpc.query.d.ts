import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
  private readonly rpc;
  constructor(rpc: Rpc);
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
