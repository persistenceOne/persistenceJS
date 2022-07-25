import { ParamChange } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params queries a specific parameter of a module, given its subspace and
  key. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.subspace !== "undefined") {
      options.params.subspace = params.subspace;
    }

    if (typeof params?.key !== "undefined") {
      options.params.key = params.key;
    }

    const endpoint = `cosmos/params/v1beta1/params`;
    return await this.request(endpoint, options);
  }

}