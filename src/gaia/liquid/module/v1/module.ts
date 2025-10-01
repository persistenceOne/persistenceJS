/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "gaia.liquid.module.v1";
/** Module is the config object of the liquid module. */
export interface Module {
  /**
   * authority defines the custom module authority. If not set, defaults to the
   * governance module.
   */
  authority: string;
  /** bech32_prefix_validator is the bech32 validator prefix for the app. */
  bech32PrefixValidator: string;
  /** bech32_prefix_consensus is the bech32 consensus node prefix for the app. */
  bech32PrefixConsensus: string;
}
function createBaseModule(): Module {
  return {
    authority: "",
    bech32PrefixValidator: "",
    bech32PrefixConsensus: "",
  };
}
export const Module = {
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bech32PrefixValidator !== "") {
      writer.uint32(18).string(message.bech32PrefixValidator);
    }
    if (message.bech32PrefixConsensus !== "") {
      writer.uint32(26).string(message.bech32PrefixConsensus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bech32PrefixValidator = reader.string();
          break;
        case 3:
          message.bech32PrefixConsensus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.bech32PrefixValidator)) obj.bech32PrefixValidator = String(object.bech32PrefixValidator);
    if (isSet(object.bech32PrefixConsensus)) obj.bech32PrefixConsensus = String(object.bech32PrefixConsensus);
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bech32PrefixValidator !== undefined &&
      (obj.bech32PrefixValidator = message.bech32PrefixValidator);
    message.bech32PrefixConsensus !== undefined &&
      (obj.bech32PrefixConsensus = message.bech32PrefixConsensus);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.authority = object.authority ?? "";
    message.bech32PrefixValidator = object.bech32PrefixValidator ?? "";
    message.bech32PrefixConsensus = object.bech32PrefixConsensus ?? "";
    return message;
  },
};
