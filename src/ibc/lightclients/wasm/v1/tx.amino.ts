/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export interface MsgStoreCodeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgStoreCode";
  value: {
    signer: string;
    wasm_byte_code: Uint8Array;
  };
}
export interface MsgRemoveChecksumAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRemoveChecksum";
  value: {
    signer: string;
    checksum: Uint8Array;
  };
}
export interface MsgMigrateContractAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgMigrateContract";
  value: {
    signer: string;
    client_id: string;
    checksum: Uint8Array;
    msg: Uint8Array;
  };
}
export const AminoConverter = {
  "/ibc.lightclients.wasm.v1.MsgStoreCode": {
    aminoType: "cosmos-sdk/MsgStoreCode",
    toAmino: ({ signer, wasmByteCode }: MsgStoreCode): MsgStoreCodeAminoType["value"] => {
      return {
        signer,
        wasm_byte_code: wasmByteCode,
      };
    },
    fromAmino: ({ signer, wasm_byte_code }: MsgStoreCodeAminoType["value"]): MsgStoreCode => {
      return {
        signer,
        wasmByteCode: wasm_byte_code,
      };
    },
  },
  "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
    aminoType: "cosmos-sdk/MsgRemoveChecksum",
    toAmino: ({ signer, checksum }: MsgRemoveChecksum): MsgRemoveChecksumAminoType["value"] => {
      return {
        signer,
        checksum,
      };
    },
    fromAmino: ({ signer, checksum }: MsgRemoveChecksumAminoType["value"]): MsgRemoveChecksum => {
      return {
        signer,
        checksum,
      };
    },
  },
  "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
    aminoType: "cosmos-sdk/MsgMigrateContract",
    toAmino: ({
      signer,
      clientId,
      checksum,
      msg,
    }: MsgMigrateContract): MsgMigrateContractAminoType["value"] => {
      return {
        signer,
        client_id: clientId,
        checksum,
        msg,
      };
    },
    fromAmino: ({
      signer,
      client_id,
      checksum,
      msg,
    }: MsgMigrateContractAminoType["value"]): MsgMigrateContract => {
      return {
        signer,
        clientId: client_id,
        checksum,
        msg,
      };
    },
  },
};
