/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgPromoteToPrivilegedContract, MsgDemoteFromPrivilegedContract, MsgUpdateParams } from "./tx";
export interface MsgPromoteToPrivilegedContractAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract";
  value: {
    authority: string;
    contract: string;
  };
}
export interface MsgDemoteFromPrivilegedContractAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract";
  value: {
    authority: string;
    contract: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.cron.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      admin_addresses: string[];
    };
  };
}
export const AminoConverter = {
  "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract": {
    aminoType: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract",
    toAmino: ({
      authority,
      contract,
    }: MsgPromoteToPrivilegedContract): MsgPromoteToPrivilegedContractAminoType["value"] => {
      return {
        authority,
        contract,
      };
    },
    fromAmino: ({
      authority,
      contract,
    }: MsgPromoteToPrivilegedContractAminoType["value"]): MsgPromoteToPrivilegedContract => {
      return {
        authority,
        contract,
      };
    },
  },
  "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract": {
    aminoType: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract",
    toAmino: ({
      authority,
      contract,
    }: MsgDemoteFromPrivilegedContract): MsgDemoteFromPrivilegedContractAminoType["value"] => {
      return {
        authority,
        contract,
      };
    },
    fromAmino: ({
      authority,
      contract,
    }: MsgDemoteFromPrivilegedContractAminoType["value"]): MsgDemoteFromPrivilegedContract => {
      return {
        authority,
        contract,
      };
    },
  },
  "/publicawesome.stargaze.cron.v1.MsgUpdateParams": {
    aminoType: "/publicawesome.stargaze.cron.v1.MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          admin_addresses: params.adminAddresses,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          adminAddresses: params.admin_addresses,
        },
      };
    },
  },
};
