/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.cron.v1";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
  /**
   * contract_addresses holds all the smart contract addresses which have
   * privilege status.
   */
  contractAddresses: string[];
}
function createBaseQueryListPrivilegedRequest(): QueryListPrivilegedRequest {
  return {};
}
export const QueryListPrivilegedRequest = {
  encode(_: QueryListPrivilegedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPrivilegedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrivilegedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryListPrivilegedRequest {
    const obj = createBaseQueryListPrivilegedRequest();
    return obj;
  },
  toJSON(_: QueryListPrivilegedRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest {
    const message = createBaseQueryListPrivilegedRequest();
    return message;
  },
};
function createBaseQueryListPrivilegedResponse(): QueryListPrivilegedResponse {
  return {
    contractAddresses: [],
  };
}
export const QueryListPrivilegedResponse = {
  encode(message: QueryListPrivilegedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPrivilegedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPrivilegedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListPrivilegedResponse {
    const obj = createBaseQueryListPrivilegedResponse();
    if (Array.isArray(object?.contractAddresses))
      obj.contractAddresses = object.contractAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryListPrivilegedResponse): unknown {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse {
    const message = createBaseQueryListPrivilegedResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** ListPrivileged queries the contracts which have the priviledge status */
  ListPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListPrivileged = this.ListPrivileged.bind(this);
  }
  ListPrivileged(request: QueryListPrivilegedRequest = {}): Promise<QueryListPrivilegedResponse> {
    const data = QueryListPrivilegedRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.cron.v1.Query", "ListPrivileged", data);
    return promise.then((data) => QueryListPrivilegedResponse.decode(new BinaryReader(data)));
  }
}
