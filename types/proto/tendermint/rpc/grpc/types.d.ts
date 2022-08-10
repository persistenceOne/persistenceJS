import { ResponseCheckTx, ResponseDeliverTx } from "../../abci/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface RequestPing {}
export interface RequestBroadcastTx {
  tx: Uint8Array;
}
export interface ResponsePing {}
export interface ResponseBroadcastTx {
  checkTx: ResponseCheckTx;
  deliverTx: ResponseDeliverTx;
}
export declare const RequestPing: {
  encode(_: RequestPing, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing;
  fromJSON(_: any): RequestPing;
  toJSON(_: RequestPing): unknown;
  fromPartial(_: DeepPartial<RequestPing>): RequestPing;
};
export declare const RequestBroadcastTx: {
  encode(message: RequestBroadcastTx, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx;
  fromJSON(object: any): RequestBroadcastTx;
  toJSON(message: RequestBroadcastTx): unknown;
  fromPartial(object: DeepPartial<RequestBroadcastTx>): RequestBroadcastTx;
};
export declare const ResponsePing: {
  encode(_: ResponsePing, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing;
  fromJSON(_: any): ResponsePing;
  toJSON(_: ResponsePing): unknown;
  fromPartial(_: DeepPartial<ResponsePing>): ResponsePing;
};
export declare const ResponseBroadcastTx: {
  encode(message: ResponseBroadcastTx, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx;
  fromJSON(object: any): ResponseBroadcastTx;
  toJSON(message: ResponseBroadcastTx): unknown;
  fromPartial(object: DeepPartial<ResponseBroadcastTx>): ResponseBroadcastTx;
};
