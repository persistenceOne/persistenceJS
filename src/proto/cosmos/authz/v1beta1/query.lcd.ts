import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./authz";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGrantsRequest, QueryGrantsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  async grants(params: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.granter !== "undefined") {
      options.params.granter = params.granter;
    }

    if (typeof params?.grantee !== "undefined") {
      options.params.grantee = params.grantee;
    }

    if (typeof params?.msgTypeUrl !== "undefined") {
      options.params.msg_type_url = params.msgTypeUrl;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/authz/v1beta1/grants`;
    return await this.request(endpoint, options);
  }

}