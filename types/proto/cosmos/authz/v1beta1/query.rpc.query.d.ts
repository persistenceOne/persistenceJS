import { Rpc } from "@osmonauts/helpers";
import { QueryGrantsRequest, QueryGrantsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
}
