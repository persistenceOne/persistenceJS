/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.genutil.v1beta1";
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisState {
  /** gen_txs defines the genesis transactions. */
  genTxs: Uint8Array[];
}
function createBaseGenesisState(): GenesisState {
  return {
    genTxs: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v!);
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
          message.genTxs.push(reader.bytes());
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
    if (Array.isArray(object?.genTxs)) obj.genTxs = object.genTxs.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.genTxs) {
      obj.genTxs = message.genTxs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genTxs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.genTxs = object.genTxs?.map((e) => e) || [];
    return message;
  },
};
