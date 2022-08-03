import * as _115 from "./halving/v1beta1/genesis";
import * as _116 from "./halving/v1beta1/halving";
import * as _117 from "./halving/v1beta1/query";
import * as _138 from "./halving/v1beta1/query.rpc.query";
export declare namespace persistence {
    namespace halving {
        const v1beta1: {
            QueryClientImpl: typeof _138.QueryClientImpl;
            QueryParamsRequest: {
                encode(_: _117.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryParamsRequest;
                fromJSON(_: any): _117.QueryParamsRequest;
                toJSON(_: _117.QueryParamsRequest): unknown;
                fromPartial(_: {}): _117.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _117.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryParamsResponse;
                fromJSON(object: any): _117.QueryParamsResponse;
                toJSON(message: _117.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        blockHeight?: any;
                    };
                }): _117.QueryParamsResponse;
            };
            Params: {
                encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Params;
                fromJSON(object: any): _116.Params;
                toJSON(message: _116.Params): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                }): _116.Params;
            };
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GenesisState;
                fromJSON(object: any): _115.GenesisState;
                toJSON(message: _115.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        blockHeight?: any;
                    };
                }): _115.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            persistence: {
                halving: {
                    v1beta1: _138.QueryClientImpl;
                };
            };
        }>;
    };
}
