import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
  authorization: GrantAuthorization[];
}
/** GrantAuthorization defines the GenesisState/GrantAuthorization type. */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization: Any;
  expiration: Date;
}
export declare const GenesisState: {
  encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
  fromJSON(object: any): GenesisState;
  toJSON(message: GenesisState): unknown;
  fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GrantAuthorization: {
  encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization;
  fromJSON(object: any): GrantAuthorization;
  toJSON(message: GrantAuthorization): unknown;
  fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization;
};
