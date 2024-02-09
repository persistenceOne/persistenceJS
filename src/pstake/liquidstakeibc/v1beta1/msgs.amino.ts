/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import {
  MsgRegisterHostChain,
  MsgUpdateHostChain,
  MsgLiquidStake,
  MsgLiquidStakeLSM,
  MsgLiquidUnstake,
  MsgRedeem,
  MsgUpdateParams,
} from "./msgs";
export interface MsgRegisterHostChainAminoType extends AminoMsg {
  type: "pstake/MsgRegisterHostChain";
  value: {
    authority: string;
    connection_id: string;
    deposit_fee: string;
    restake_fee: string;
    unstake_fee: string;
    redemption_fee: string;
    channel_id: string;
    port_id: string;
    host_denom: string;
    minimum_deposit: string;
    unbonding_factor: string;
    auto_compound_factor: string;
  };
}
export interface MsgUpdateHostChainAminoType extends AminoMsg {
  type: "pstake/MsgUpdateHostChain";
  value: {
    authority: string;
    chain_id: string;
    updates: {
      key: string;
      value: string;
    }[];
  };
}
export interface MsgLiquidStakeAminoType extends AminoMsg {
  type: "pstake/MsgLiquidStake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgLiquidStakeLSMAminoType extends AminoMsg {
  type: "pstake/MsgLiquidStakeLSM";
  value: {
    delegator_address: string;
    delegations: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgLiquidUnstakeAminoType extends AminoMsg {
  type: "pstake/MsgLiquidUnstake";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRedeemAminoType extends AminoMsg {
  type: "pstake/MsgRedeem";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "pstake/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      admin_address: string;
      fee_address: string;
    };
  };
}
export const AminoConverter = {
  "/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain": {
    aminoType: "pstake/MsgRegisterHostChain",
    toAmino: ({
      authority,
      connectionId,
      depositFee,
      restakeFee,
      unstakeFee,
      redemptionFee,
      channelId,
      portId,
      hostDenom,
      minimumDeposit,
      unbondingFactor,
      autoCompoundFactor,
    }: MsgRegisterHostChain): MsgRegisterHostChainAminoType["value"] => {
      return {
        authority,
        connection_id: connectionId,
        deposit_fee: depositFee,
        restake_fee: restakeFee,
        unstake_fee: unstakeFee,
        redemption_fee: redemptionFee,
        channel_id: channelId,
        port_id: portId,
        host_denom: hostDenom,
        minimum_deposit: minimumDeposit,
        unbonding_factor: unbondingFactor.toString(),
        auto_compound_factor: autoCompoundFactor.toString(),
      };
    },
    fromAmino: ({
      authority,
      connection_id,
      deposit_fee,
      restake_fee,
      unstake_fee,
      redemption_fee,
      channel_id,
      port_id,
      host_denom,
      minimum_deposit,
      unbonding_factor,
      auto_compound_factor,
    }: MsgRegisterHostChainAminoType["value"]): MsgRegisterHostChain => {
      return {
        authority,
        connectionId: connection_id,
        depositFee: deposit_fee,
        restakeFee: restake_fee,
        unstakeFee: unstake_fee,
        redemptionFee: redemption_fee,
        channelId: channel_id,
        portId: port_id,
        hostDenom: host_denom,
        minimumDeposit: minimum_deposit,
        unbondingFactor: BigInt(unbonding_factor),
        autoCompoundFactor: BigInt(auto_compound_factor),
      };
    },
  },
  "/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain": {
    aminoType: "pstake/MsgUpdateHostChain",
    toAmino: ({ authority, chainId, updates }: MsgUpdateHostChain): MsgUpdateHostChainAminoType["value"] => {
      return {
        authority,
        chain_id: chainId,
        updates: updates.map((el0) => ({
          key: el0.key,
          value: el0.value,
        })),
      };
    },
    fromAmino: ({
      authority,
      chain_id,
      updates,
    }: MsgUpdateHostChainAminoType["value"]): MsgUpdateHostChain => {
      return {
        authority,
        chainId: chain_id,
        updates: updates.map((el0) => ({
          key: el0.key,
          value: el0.value,
        })),
      };
    },
  },
  "/pstake.liquidstakeibc.v1beta1.MsgLiquidStake": {
    aminoType: "pstake/MsgLiquidStake",
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
  "/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM": {
    aminoType: "pstake/MsgLiquidStakeLSM",
    toAmino: ({ delegatorAddress, delegations }: MsgLiquidStakeLSM): MsgLiquidStakeLSMAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        delegations: delegations.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
    fromAmino: ({
      delegator_address,
      delegations,
    }: MsgLiquidStakeLSMAminoType["value"]): MsgLiquidStakeLSM => {
      return {
        delegatorAddress: delegator_address,
        delegations: delegations.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
  },
  "/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake": {
    aminoType: "pstake/MsgLiquidUnstake",
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
  "/pstake.liquidstakeibc.v1beta1.MsgRedeem": {
    aminoType: "pstake/MsgRedeem",
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
  "/pstake.liquidstakeibc.v1beta1.MsgUpdateParams": {
    aminoType: "pstake/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          admin_address: params.adminAddress,
          fee_address: params.feeAddress,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          adminAddress: params.admin_address,
          feeAddress: params.fee_address,
        },
      };
    },
  },
};
