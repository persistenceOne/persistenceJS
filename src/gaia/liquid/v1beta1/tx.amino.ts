/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import {
  MsgUpdateParams,
  MsgTokenizeShares,
  MsgRedeemTokensForShares,
  MsgTransferTokenizeShareRecord,
  MsgDisableTokenizeShares,
  MsgEnableTokenizeShares,
  MsgWithdrawTokenizeShareRecordReward,
  MsgWithdrawAllTokenizeShareRecordReward,
} from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "gaia/liquid/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      global_liquid_staking_cap: string;
      validator_liquid_staking_cap: string;
    };
  };
}
export interface MsgTokenizeSharesAminoType extends AminoMsg {
  type: "gaia/MsgTokenizeShares";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
    tokenized_share_owner: string;
  };
}
export interface MsgRedeemTokensForSharesAminoType extends AminoMsg {
  type: "gaia/MsgRedeemTokensForShares";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgTransferTokenizeShareRecordAminoType extends AminoMsg {
  type: "gaia/MsgTransferTokenizeRecord";
  value: {
    tokenize_share_record_id: string;
    sender: string;
    new_owner: string;
  };
}
export interface MsgDisableTokenizeSharesAminoType extends AminoMsg {
  type: "gaia/MsgDisableTokenizeShares";
  value: {
    delegator_address: string;
  };
}
export interface MsgEnableTokenizeSharesAminoType extends AminoMsg {
  type: "gaia/MsgEnableTokenizeShares";
  value: {
    delegator_address: string;
  };
}
export interface MsgWithdrawTokenizeShareRecordRewardAminoType extends AminoMsg {
  type: "gaia/MsgWithdrawTokenizeReward";
  value: {
    owner_address: string;
    record_id: string;
  };
}
export interface MsgWithdrawAllTokenizeShareRecordRewardAminoType extends AminoMsg {
  type: "gaia/MsgWithdrawAllTokenizeReward";
  value: {
    owner_address: string;
  };
}
export const AminoConverter = {
  "/gaia.liquid.v1beta1.MsgUpdateParams": {
    aminoType: "gaia/liquid/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          global_liquid_staking_cap: params.globalLiquidStakingCap,
          validator_liquid_staking_cap: params.validatorLiquidStakingCap,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          globalLiquidStakingCap: params.global_liquid_staking_cap,
          validatorLiquidStakingCap: params.validator_liquid_staking_cap,
        },
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgTokenizeShares": {
    aminoType: "gaia/MsgTokenizeShares",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
      tokenizedShareOwner,
    }: MsgTokenizeShares): MsgTokenizeSharesAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        tokenized_share_owner: tokenizedShareOwner,
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      tokenized_share_owner,
    }: MsgTokenizeSharesAminoType["value"]): MsgTokenizeShares => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        tokenizedShareOwner: tokenized_share_owner,
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "gaia/MsgRedeemTokensForShares",
    toAmino: ({
      delegatorAddress,
      amount,
    }: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({
      delegator_address,
      amount,
    }: MsgRedeemTokensForSharesAminoType["value"]): MsgRedeemTokensForShares => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "gaia/MsgTransferTokenizeRecord",
    toAmino: ({
      tokenizeShareRecordId,
      sender,
      newOwner,
    }: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoType["value"] => {
      return {
        tokenize_share_record_id: tokenizeShareRecordId.toString(),
        sender,
        new_owner: newOwner,
      };
    },
    fromAmino: ({
      tokenize_share_record_id,
      sender,
      new_owner,
    }: MsgTransferTokenizeShareRecordAminoType["value"]): MsgTransferTokenizeShareRecord => {
      return {
        tokenizeShareRecordId: BigInt(tokenize_share_record_id),
        sender,
        newOwner: new_owner,
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "gaia/MsgDisableTokenizeShares",
    toAmino: ({ delegatorAddress }: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
      };
    },
    fromAmino: ({
      delegator_address,
    }: MsgDisableTokenizeSharesAminoType["value"]): MsgDisableTokenizeShares => {
      return {
        delegatorAddress: delegator_address,
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "gaia/MsgEnableTokenizeShares",
    toAmino: ({ delegatorAddress }: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
      };
    },
    fromAmino: ({
      delegator_address,
    }: MsgEnableTokenizeSharesAminoType["value"]): MsgEnableTokenizeShares => {
      return {
        delegatorAddress: delegator_address,
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgWithdrawTokenizeShareRecordReward": {
    aminoType: "gaia/MsgWithdrawTokenizeReward",
    toAmino: ({
      ownerAddress,
      recordId,
    }: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAminoType["value"] => {
      return {
        owner_address: ownerAddress,
        record_id: recordId.toString(),
      };
    },
    fromAmino: ({
      owner_address,
      record_id,
    }: MsgWithdrawTokenizeShareRecordRewardAminoType["value"]): MsgWithdrawTokenizeShareRecordReward => {
      return {
        ownerAddress: owner_address,
        recordId: BigInt(record_id),
      };
    },
  },
  "/gaia.liquid.v1beta1.MsgWithdrawAllTokenizeShareRecordReward": {
    aminoType: "gaia/MsgWithdrawAllTokenizeReward",
    toAmino: ({
      ownerAddress,
    }: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAminoType["value"] => {
      return {
        owner_address: ownerAddress,
      };
    },
    fromAmino: ({
      owner_address,
    }: MsgWithdrawAllTokenizeShareRecordRewardAminoType["value"]): MsgWithdrawAllTokenizeShareRecordReward => {
      return {
        ownerAddress: owner_address,
      };
    },
  },
};
