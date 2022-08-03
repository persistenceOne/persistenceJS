import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the RPC service */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);

    this.rpc = rpc;
    this.params = this.params.bind(this);
  }

  params(request) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("persistence.halving.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}