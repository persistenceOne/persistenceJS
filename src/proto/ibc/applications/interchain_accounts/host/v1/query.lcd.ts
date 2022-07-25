import { Params } from "./host";
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

  /* Params queries all parameters of the ICA host submodule. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `ibc/apps/interchain_accounts/host/v1/params`;
    return await this.request(endpoint);
  }

}