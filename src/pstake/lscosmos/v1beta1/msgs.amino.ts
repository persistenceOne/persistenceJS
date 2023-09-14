/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import {
  MsgLiquidStake,
  MsgLiquidUnstake,
  MsgRedeem,
  MsgClaim,
  MsgRecreateICA,
  MsgJumpStart,
  MsgChangeModuleState,
  MsgReportSlashing,
} from "./msgs";
export interface MsgLiquidStakeAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgLiquidStake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgLiquidUnstakeAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgLiquidUnstake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRedeemAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgRedeem";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgClaimAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgClaim";
  value: {
    delegator_address: string;
  };
}
export interface MsgRecreateICAAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgRecreateICA";
  value: {
    from_address: string;
  };
}
export interface MsgJumpStartAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgJumpStart";
  value: {
    pstake_address: string;
    chain_i_d: string;
    connection_i_d: string;
    transfer_channel: string;
    transfer_port: string;
    base_denom: string;
    mint_denom: string;
    min_deposit: string;
    allow_listed_validators: {
      allow_listed_validators: {
        validator_address: string;
        target_weight: string;
      }[];
    };
    pstake_params: {
      pstake_deposit_fee: string;
      pstake_restake_fee: string;
      pstake_unstake_fee: string;
      pstake_redemption_fee: string;
      pstake_fee_address: string;
    };
    host_accounts: {
      delegator_account_owner_i_d: string;
      rewards_account_owner_i_d: string;
    };
  };
}
export interface MsgChangeModuleStateAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgChangeModuleState";
  value: {
    pstake_address: string;
    module_state: boolean;
  };
}
export interface MsgReportSlashingAminoType extends AminoMsg {
  type: "/pstake.lscosmos.v1beta1.MsgReportSlashing";
  value: {
    pstake_address: string;
    validator_address: string;
  };
}
export const AminoConverter = {
  "/pstake.lscosmos.v1beta1.MsgLiquidStake": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgLiquidStake",
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
  "/pstake.lscosmos.v1beta1.MsgLiquidUnstake": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgLiquidUnstake",
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
  "/pstake.lscosmos.v1beta1.MsgRedeem": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgRedeem",
    toAmino: ({ delegatorAddress, amount }: MsgRedeem): MsgRedeemAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({ delegator_address, amount }: MsgRedeemAminoType["value"]): MsgRedeem => {
      return {
        delegatorAddress: delegator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/pstake.lscosmos.v1beta1.MsgClaim": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgClaim",
    toAmino: ({ delegatorAddress }: MsgClaim): MsgClaimAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
      };
    },
    fromAmino: ({ delegator_address }: MsgClaimAminoType["value"]): MsgClaim => {
      return {
        delegatorAddress: delegator_address,
      };
    },
  },
  "/pstake.lscosmos.v1beta1.MsgRecreateICA": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgRecreateICA",
    toAmino: ({ fromAddress }: MsgRecreateICA): MsgRecreateICAAminoType["value"] => {
      return {
        from_address: fromAddress,
      };
    },
    fromAmino: ({ from_address }: MsgRecreateICAAminoType["value"]): MsgRecreateICA => {
      return {
        fromAddress: from_address,
      };
    },
  },
  "/pstake.lscosmos.v1beta1.MsgJumpStart": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgJumpStart",
    toAmino: ({
      pstakeAddress,
      chainID,
      connectionID,
      transferChannel,
      transferPort,
      baseDenom,
      mintDenom,
      minDeposit,
      allowListedValidators,
      pstakeParams,
      hostAccounts,
    }: MsgJumpStart): MsgJumpStartAminoType["value"] => {
      return {
        pstake_address: pstakeAddress,
        chain_i_d: chainID,
        connection_i_d: connectionID,
        transfer_channel: transferChannel,
        transfer_port: transferPort,
        base_denom: baseDenom,
        mint_denom: mintDenom,
        min_deposit: minDeposit,
        allow_listed_validators: {
          allow_listed_validators: allowListedValidators.allowListedValidators.map((el0) => ({
            validator_address: el0.validatorAddress,
            target_weight: el0.targetWeight,
          })),
        },
        pstake_params: {
          pstake_deposit_fee: pstakeParams.pstakeDepositFee,
          pstake_restake_fee: pstakeParams.pstakeRestakeFee,
          pstake_unstake_fee: pstakeParams.pstakeUnstakeFee,
          pstake_redemption_fee: pstakeParams.pstakeRedemptionFee,
          pstake_fee_address: pstakeParams.pstakeFeeAddress,
        },
        host_accounts: {
          delegator_account_owner_i_d: hostAccounts.delegatorAccountOwnerID,
          rewards_account_owner_i_d: hostAccounts.rewardsAccountOwnerID,
        },
      };
    },
    fromAmino: ({
      pstake_address,
      chain_i_d,
      connection_i_d,
      transfer_channel,
      transfer_port,
      base_denom,
      mint_denom,
      min_deposit,
      allow_listed_validators,
      pstake_params,
      host_accounts,
    }: MsgJumpStartAminoType["value"]): MsgJumpStart => {
      return {
        pstakeAddress: pstake_address,
        chainID: chain_i_d,
        connectionID: connection_i_d,
        transferChannel: transfer_channel,
        transferPort: transfer_port,
        baseDenom: base_denom,
        mintDenom: mint_denom,
        minDeposit: min_deposit,
        allowListedValidators: {
          allowListedValidators: allow_listed_validators.allow_listed_validators.map((el1) => ({
            validatorAddress: el1.validator_address,
            targetWeight: el1.target_weight,
          })),
        },
        pstakeParams: {
          pstakeDepositFee: pstake_params.pstake_deposit_fee,
          pstakeRestakeFee: pstake_params.pstake_restake_fee,
          pstakeUnstakeFee: pstake_params.pstake_unstake_fee,
          pstakeRedemptionFee: pstake_params.pstake_redemption_fee,
          pstakeFeeAddress: pstake_params.pstake_fee_address,
        },
        hostAccounts: {
          delegatorAccountOwnerID: host_accounts.delegator_account_owner_i_d,
          rewardsAccountOwnerID: host_accounts.rewards_account_owner_i_d,
        },
      };
    },
  },
  "/pstake.lscosmos.v1beta1.MsgChangeModuleState": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgChangeModuleState",
    toAmino: ({
      pstakeAddress,
      moduleState,
    }: MsgChangeModuleState): MsgChangeModuleStateAminoType["value"] => {
      return {
        pstake_address: pstakeAddress,
        module_state: moduleState,
      };
    },
    fromAmino: ({
      pstake_address,
      module_state,
    }: MsgChangeModuleStateAminoType["value"]): MsgChangeModuleState => {
      return {
        pstakeAddress: pstake_address,
        moduleState: module_state,
      };
    },
  },
  "/pstake.lscosmos.v1beta1.MsgReportSlashing": {
    aminoType: "/pstake.lscosmos.v1beta1.MsgReportSlashing",
    toAmino: ({
      pstakeAddress,
      validatorAddress,
    }: MsgReportSlashing): MsgReportSlashingAminoType["value"] => {
      return {
        pstake_address: pstakeAddress,
        validator_address: validatorAddress,
      };
    },
    fromAmino: ({
      pstake_address,
      validator_address,
    }: MsgReportSlashingAminoType["value"]): MsgReportSlashing => {
      return {
        pstakeAddress: pstake_address,
        validatorAddress: validator_address,
      };
    },
  },
};
