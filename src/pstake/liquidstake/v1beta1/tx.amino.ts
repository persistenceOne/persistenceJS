/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgLiquidUnstake, MsgStakeToLP, MsgUpdateParams } from "./tx";
export interface MsgLiquidStakeAminoType extends AminoMsg {
  type: "/pstake.liquidstake.v1beta1.MsgLiquidStake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgLiquidUnstakeAminoType extends AminoMsg {
  type: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgStakeToLPAminoType extends AminoMsg {
  type: "/pstake.liquidstake.v1beta1.MsgStakeToLP";
  value: {
    delegator_address: string;
    validator_address: string;
    staked_amount: {
      denom: string;
      amount: string;
    };
    liquid_amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/pstake.liquidstake.v1beta1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      liquid_bond_denom: string;
      whitelisted_validators: {
        validator_address: string;
        target_weight: string;
      }[];
      unstake_fee_rate: string;
      lsm_disabled: boolean;
      min_liquid_stake_amount: string;
      cw_locked_pool_address: string;
    };
  };
}
export const AminoConverter = {
  "/pstake.liquidstake.v1beta1.MsgLiquidStake": {
    aminoType: "/pstake.liquidstake.v1beta1.MsgLiquidStake",
    toAmino: ({ delegatorAddress, amount }: MsgLiquidStake): MsgLiquidStakeAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({ delegator_address, amount }: MsgLiquidStakeAminoType["value"]): MsgLiquidStake => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/pstake.liquidstake.v1beta1.MsgLiquidUnstake": {
    aminoType: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake",
    toAmino: ({ delegatorAddress, amount }: MsgLiquidUnstake): MsgLiquidUnstakeAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({ delegator_address, amount }: MsgLiquidUnstakeAminoType["value"]): MsgLiquidUnstake => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/pstake.liquidstake.v1beta1.MsgStakeToLP": {
    aminoType: "/pstake.liquidstake.v1beta1.MsgStakeToLP",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      stakedAmount,
      liquidAmount,
    }: MsgStakeToLP): MsgStakeToLPAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        staked_amount: {
          denom: stakedAmount.denom,
          amount: stakedAmount.amount,
        },
        liquid_amount: {
          denom: liquidAmount.denom,
          amount: liquidAmount.amount,
        },
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      staked_amount,
      liquid_amount,
    }: MsgStakeToLPAminoType["value"]): MsgStakeToLP => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        stakedAmount: {
          denom: staked_amount.denom,
          amount: staked_amount.amount,
        },
        liquidAmount: {
          denom: liquid_amount.denom,
          amount: liquid_amount.amount,
        },
      };
    },
  },
  "/pstake.liquidstake.v1beta1.MsgUpdateParams": {
    aminoType: "/pstake.liquidstake.v1beta1.MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          liquid_bond_denom: params.liquidBondDenom,
          whitelisted_validators: params.whitelistedValidators.map((el0) => ({
            validator_address: el0.validatorAddress,
            target_weight: el0.targetWeight,
          })),
          unstake_fee_rate: params.unstakeFeeRate,
          lsm_disabled: params.lsmDisabled,
          min_liquid_stake_amount: params.minLiquidStakeAmount,
          cw_locked_pool_address: params.cwLockedPoolAddress,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          liquidBondDenom: params.liquid_bond_denom,
          whitelistedValidators: params.whitelisted_validators.map((el1) => ({
            validatorAddress: el1.validator_address,
            targetWeight: el1.target_weight,
          })),
          unstakeFeeRate: params.unstake_fee_rate,
          lsmDisabled: params.lsm_disabled,
          minLiquidStakeAmount: params.min_liquid_stake_amount,
          cwLockedPoolAddress: params.cw_locked_pool_address,
        },
      };
    },
  },
};
