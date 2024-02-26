/* eslint-disable */
import { Params, CodeAuthorization, ContractAuthorization } from "./globalfee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.globalfee.v1";
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisState {
  /** Module params */
  params: Params;
  /** Authorizations configured by code id */
  codeAuthorizations: CodeAuthorization[];
  /** Authorizations configured by contract addresses */
  contractAuthorizations: ContractAuthorization[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codeAuthorizations: [],
    contractAuthorizations: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codeAuthorizations) {
      CodeAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractAuthorizations) {
      ContractAuthorization.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.codeAuthorizations.push(CodeAuthorization.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contractAuthorizations.push(ContractAuthorization.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.codeAuthorizations))
      obj.codeAuthorizations = object.codeAuthorizations.map((e: any) => CodeAuthorization.fromJSON(e));
    if (Array.isArray(object?.contractAuthorizations))
      obj.contractAuthorizations = object.contractAuthorizations.map((e: any) =>
        ContractAuthorization.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codeAuthorizations) {
      obj.codeAuthorizations = message.codeAuthorizations.map((e) =>
        e ? CodeAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.codeAuthorizations = [];
    }
    if (message.contractAuthorizations) {
      obj.contractAuthorizations = message.contractAuthorizations.map((e) =>
        e ? ContractAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.contractAuthorizations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.codeAuthorizations =
      object.codeAuthorizations?.map((e) => CodeAuthorization.fromPartial(e)) || [];
    message.contractAuthorizations =
      object.contractAuthorizations?.map((e) => ContractAuthorization.fromPartial(e)) || [];
    return message;
  },
};
