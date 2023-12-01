/* eslint-disable */
import { Params, LiquidValidator } from "./liquidstake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.liquidstake.v1beta1";
/** GenesisState defines the liquidstake module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the liquidstake module */
  params: Params;
  liquidValidators: LiquidValidator[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    liquidValidators: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.liquidValidators) {
      LiquidValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.liquidValidators))
      obj.liquidValidators = object.liquidValidators.map((e: any) => LiquidValidator.fromJSON(e));
    return obj;
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.liquidValidators = object.liquidValidators?.map((e) => LiquidValidator.fromPartial(e)) || [];
    return message;
  },
};
