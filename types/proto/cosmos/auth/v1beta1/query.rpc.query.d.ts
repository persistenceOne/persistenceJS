import { Rpc } from "@osmonauts/helpers";
import {
  QueryAccountsRequest,
  QueryAccountsResponse,
  QueryAccountRequest,
  QueryAccountResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "./query";
/** Query defines the RPC service */
export interface Query {
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
  private readonly rpc;
  constructor(rpc: Rpc);
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
