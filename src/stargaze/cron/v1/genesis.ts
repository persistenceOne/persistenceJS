/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "publicawesome.stargaze.cron.v1";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
  /**
   * List of all the contracts that have been given the privilege status via
   * governance. They can set up hooks to abci.EndBlocker
   */
  privilegedContractAddresses: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    privilegedContractAddresses: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privilegedContractAddresses) {
      writer.uint32(10).string(v!);
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
          message.privilegedContractAddresses.push(reader.string());
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
    if (Array.isArray(object?.privilegedContractAddresses))
      obj.privilegedContractAddresses = object.privilegedContractAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.privilegedContractAddresses) {
      obj.privilegedContractAddresses = message.privilegedContractAddresses.map((e) => e);
    } else {
      obj.privilegedContractAddresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.privilegedContractAddresses = object.privilegedContractAddresses?.map((e) => e) || [];
    return message;
  },
};
