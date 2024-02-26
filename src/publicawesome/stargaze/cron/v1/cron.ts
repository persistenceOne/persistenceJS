/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
export const protobufPackage = "publicawesome.stargaze.cron.v1";
/** Params holds parameters for the cron module. */
export interface Params {
  /**
   * Addresses which act as admins of the module. They can promote and demote
   * contracts without having to go via governance.
   */
  adminAddresses: string[];
}
function createBaseParams(): Params {
  return {
    adminAddresses: [],
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.adminAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adminAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.adminAddresses))
      obj.adminAddresses = object.adminAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.adminAddresses) {
      obj.adminAddresses = message.adminAddresses.map((e) => e);
    } else {
      obj.adminAddresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.adminAddresses = object.adminAddresses?.map((e) => e) || [];
    return message;
  },
};
