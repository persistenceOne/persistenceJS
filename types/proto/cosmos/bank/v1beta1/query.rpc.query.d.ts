import { Rpc } from "@osmonauts/helpers";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    totalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    totalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
}
