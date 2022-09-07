import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params holds parameters for the halving module. */
export interface Params {
  /** periodic height at which inflation decreases */
  blockHeight: Long;
}
export declare const Params: {
  encode(message: Params, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Params;
  fromJSON(object: any): Params;
  toJSON(message: Params): unknown;
  fromPartial(object: DeepPartial<Params>): Params;
};
