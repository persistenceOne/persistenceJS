/* eslint-disable */
import { actionFromJSON } from "./claim_record";
import { AminoMsg } from "@cosmjs/amino";
import { MsgInitialClaim, MsgClaimFor } from "./tx";
export interface MsgInitialClaimAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
  value: {
    sender: string;
  };
}
export interface MsgClaimForAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
  value: {
    sender: string;
    address: string;
    action: number;
  };
}
export const AminoConverter = {
  "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
    aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
    toAmino: ({ sender }: MsgInitialClaim): MsgInitialClaimAminoType["value"] => {
      return {
        sender,
      };
    },
    fromAmino: ({ sender }: MsgInitialClaimAminoType["value"]): MsgInitialClaim => {
      return {
        sender,
      };
    },
  },
  "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
    aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
    toAmino: ({ sender, address, action }: MsgClaimFor): MsgClaimForAminoType["value"] => {
      return {
        sender,
        address,
        action,
      };
    },
    fromAmino: ({ sender, address, action }: MsgClaimForAminoType["value"]): MsgClaimFor => {
      return {
        sender,
        address,
        action: actionFromJSON(action),
      };
    },
  },
};
