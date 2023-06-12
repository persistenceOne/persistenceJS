/* eslint-disable */
import { Params, LiquidValidator } from "./liquidstaking";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "pstake.lspersistence.v1beta1";
/** GenesisState defines the liquidstaking module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the liquidstaking module */
  params?: Params;
  liquidValidators: LiquidValidator[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    liquidValidators: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.liquidValidators) {
      LiquidValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.liquidValidators.push(LiquidValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      liquidValidators: Array.isArray(object?.liquidValidators)
        ? object.liquidValidators.map((e: any) => LiquidValidator.fromJSON(e))
        : [],
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.liquidValidators) {
      obj.liquidValidators = message.liquidValidators.map((e) => (e ? LiquidValidator.toJSON(e) : undefined));
    } else {
      obj.liquidValidators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.liquidValidators = object.liquidValidators?.map((e) => LiquidValidator.fromPartial(e)) || [];
    return message;
  },
};
