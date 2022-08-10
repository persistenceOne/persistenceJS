import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization: Any;
  expiration: Date;
}
export declare const GenericAuthorization: {
  encode(message: GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GenericAuthorization;
  fromJSON(object: any): GenericAuthorization;
  toJSON(message: GenericAuthorization): unknown;
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization;
};
export declare const Grant: {
  encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
  fromJSON(object: any): Grant;
  toJSON(message: Grant): unknown;
  fromPartial(object: DeepPartial<Grant>): Grant;
};
