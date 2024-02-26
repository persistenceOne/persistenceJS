/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.claim.v1beta1";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * balance of the claim module's account
   */
  moduleAccountBalance: Coin;
  /** params defines all the parameters of the module. */
  params: Params;
  /** list of claim records, one for every airdrop recipient */
  claimRecords: ClaimRecord[];
}
function createBaseGenesisState(): GenesisState {
  return {
    moduleAccountBalance: Coin.fromPartial({}),
    params: Params.fromPartial({}),
    claimRecords: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleAccountBalance !== undefined) {
      Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.moduleAccountBalance = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
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
    if (isSet(object.moduleAccountBalance))
      obj.moduleAccountBalance = Coin.fromJSON(object.moduleAccountBalance);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.claimRecords))
      obj.claimRecords = object.claimRecords.map((e: any) => ClaimRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.moduleAccountBalance !== undefined &&
      (obj.moduleAccountBalance = message.moduleAccountBalance
        ? Coin.toJSON(message.moduleAccountBalance)
        : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.claimRecords) {
      obj.claimRecords = message.claimRecords.map((e) => (e ? ClaimRecord.toJSON(e) : undefined));
    } else {
      obj.claimRecords = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null) {
      message.moduleAccountBalance = Coin.fromPartial(object.moduleAccountBalance);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.claimRecords = object.claimRecords?.map((e) => ClaimRecord.fromPartial(e)) || [];
    return message;
  },
};
