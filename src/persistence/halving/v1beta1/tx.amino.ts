/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/persistence.halving.v1beta1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      blockHeight: string;
    };
  };
}
export const AminoConverter = {
  "/persistence.halving.v1beta1.MsgUpdateParams": {
    aminoType: "/persistence.halving.v1beta1.MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          blockHeight: params.blockHeight.toString(),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          blockHeight: BigInt(params.blockHeight),
        },
      };
    },
  },
};
