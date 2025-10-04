/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    signer: string;
    params: {
      host_enabled: boolean;
      allow_messages: string[];
    };
  };
}
export interface MsgModuleQuerySafeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafe";
  value: {
    signer: string;
    requests: {
      path: string;
      data: Uint8Array;
    }[];
  };
}
export const AminoConverter = {
  "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ signer, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        signer,
        params: {
          host_enabled: params.hostEnabled,
          allow_messages: params.allowMessages,
        },
      };
    },
    fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        signer,
        params: {
          hostEnabled: params.host_enabled,
          allowMessages: params.allow_messages,
        },
      };
    },
  },
  "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
    aminoType: "cosmos-sdk/MsgModuleQuerySafe",
    toAmino: ({ signer, requests }: MsgModuleQuerySafe): MsgModuleQuerySafeAminoType["value"] => {
      return {
        signer,
        requests: requests.map((el0) => ({
          path: el0.path,
          data: el0.data,
        })),
      };
    },
    fromAmino: ({ signer, requests }: MsgModuleQuerySafeAminoType["value"]): MsgModuleQuerySafe => {
      return {
        signer,
        requests: requests.map((el0) => ({
          path: el0.path,
          data: el0.data,
        })),
      };
    },
  },
};
