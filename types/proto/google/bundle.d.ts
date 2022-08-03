import * as _220 from "./api/http";
import * as _221 from "./api/httpbody";
import * as _222 from "./protobuf/any";
import * as _223 from "./protobuf/duration";
import * as _224 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _221.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.HttpBody;
            fromJSON(object: any): _221.HttpBody;
            toJSON(message: _221.HttpBody): unknown;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _221.HttpBody;
        };
        Http: {
            encode(message: _220.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Http;
            fromJSON(object: any): _220.Http;
            toJSON(message: _220.Http): unknown;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _220.Http;
        };
        HttpRule: {
            encode(message: _220.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.HttpRule;
            fromJSON(object: any): _220.HttpRule;
            toJSON(message: _220.HttpRule): unknown;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _220.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _220.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.CustomHttpPattern;
            fromJSON(object: any): _220.CustomHttpPattern;
            toJSON(message: _220.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _220.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _224.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Timestamp;
            fromJSON(object: any): _224.Timestamp;
            toJSON(message: _224.Timestamp): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _224.Timestamp;
        };
        Duration: {
            encode(message: _223.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.Duration;
            fromJSON(object: any): _223.Duration;
            toJSON(message: _223.Duration): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _223.Duration;
        };
        Any: {
            encode(message: _222.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Any;
            fromJSON(object: any): _222.Any;
            toJSON(message: _222.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _222.Any;
        };
    };
}
