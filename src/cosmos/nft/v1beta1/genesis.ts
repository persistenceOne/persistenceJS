/* eslint-disable */
import { Class, NFT } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** entry defines all nft owned by a person. */
  entries: Entry[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}
function createBaseGenesisState(): GenesisState {
  return {
    classes: [],
    entries: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.classes)) obj.classes = object.classes.map((e: any) => Class.fromJSON(e));
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => Entry.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => (e ? Class.toJSON(e) : undefined));
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? Entry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
    message.entries = object.entries?.map((e) => Entry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseEntry(): Entry {
  return {
    owner: "",
    nfts: [],
  };
}
export const Entry = {
  encode(message: Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Entry {
    const obj = createBaseEntry();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (Array.isArray(object?.nfts)) obj.nfts = object.nfts.map((e: any) => NFT.fromJSON(e));
    return obj;
  },
  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Entry>): Entry {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    return message;
  },
};
