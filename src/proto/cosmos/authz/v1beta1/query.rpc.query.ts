import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./authz";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryGrantsRequest, QueryGrantsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
  /*Returns list of `Authorization`, granted to the grantee by the granter.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grants = this.grants.bind(this);
  }

  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
  }

}