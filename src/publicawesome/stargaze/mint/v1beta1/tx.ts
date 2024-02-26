/* eslint-disable */
import { Rpc } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.mint.v1beta1";
/** Msg defines the mint Msg service. */
export interface Msg {}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}
