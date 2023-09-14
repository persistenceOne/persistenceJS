/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.crisis.module.v1";
/** Module is the config object of the crisis module. */
export interface Module {
  /** fee_collector_name is the name of the FeeCollector ModuleAccount. */
  feeCollectorName: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
function createBaseModule(): Module {
  return {
    feeCollectorName: "",
    authority: "",
  };
}
export const Module = {
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeCollectorName !== "") {
      writer.uint32(10).string(message.feeCollectorName);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
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
          message.feeCollectorName = reader.string();
          break;
        case 2:
          message.authority = reader.string();
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
    if (isSet(object.feeCollectorName)) obj.feeCollectorName = String(object.feeCollectorName);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.feeCollectorName !== undefined && (obj.feeCollectorName = message.feeCollectorName);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.feeCollectorName = object.feeCollectorName ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
};
