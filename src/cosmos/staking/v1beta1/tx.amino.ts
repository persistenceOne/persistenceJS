//@ts-nocheck
/* eslint-disable */
import { AminoMsg, Pubkey } from "@cosmjs/amino";
import { decodePubkey, encodePubkey } from "@cosmjs/proto-signing";
import {
  MsgCreateValidator,
  MsgEditValidator,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgUpdateParams,
  MsgUnbondValidator,
  MsgTokenizeShares,
  MsgRedeemTokensForShares,
  MsgTransferTokenizeShareRecord,
  MsgDisableTokenizeShares,
  MsgEnableTokenizeShares,
  MsgValidatorBond,
} from "./tx";
export interface MsgCreateValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    commission: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: Pubkey;
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgEditValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgEditValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
  };
}
export interface MsgDelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgDelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBeginRedelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegate";
  value: {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUndelegateAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUndelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgCancelUnbondingDelegationAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCancelUnbondingDelegation";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
    creation_height: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/staking/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      unbonding_time: {
        seconds: string;
        nanos: number;
      };
      max_validators: number;
      max_entries: number;
      historical_entries: number;
      bond_denom: string;
      min_commission_rate: string;
      validator_bond_factor: string;
      global_liquid_staking_cap: string;
      validator_liquid_staking_cap: string;
    };
  };
}
export interface MsgUnbondValidatorAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUnbondValidator";
  value: {
    validator_address: string;
  };
}
export interface MsgTokenizeSharesAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTokenizeShares";
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
  type: "cosmos-sdk/MsgRedeemTokensForShares";
  value: {
    delegator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgTransferTokenizeShareRecordAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTransferTokenizeRecord";
  value: {
    tokenize_share_record_id: string;
    sender: string;
    new_owner: string;
  };
}
export interface MsgDisableTokenizeSharesAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeShares";
  value: {
    delegator_address: string;
  };
}
export interface MsgEnableTokenizeSharesAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgEnableTokenizeShares";
  value: {
    delegator_address: string;
  };
}
export interface MsgValidatorBondAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgValidatorBond";
  value: {
    delegator_address: string;
    validator_address: string;
  };
}
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: ({
      description,
      commission,
      minSelfDelegation,
      delegatorAddress,
      validatorAddress,
      pubkey,
      value,
    }: MsgCreateValidator): MsgCreateValidatorAminoType["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details,
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.maxRate,
          max_change_rate: commission.maxChangeRate,
        },
        min_self_delegation: minSelfDelegation,
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        pubkey: decodePubkey(pubkey)!,
        value: {
          denom: value.denom,
          amount: value.amount,
        },
      };
    },
    fromAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value,
    }: MsgCreateValidatorAminoType["value"]): MsgCreateValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details,
        },
        commission: {
          rate: commission.rate,
          maxRate: commission.max_rate,
          maxChangeRate: commission.max_change_rate,
        },
        minSelfDelegation: min_self_delegation,
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        pubkey: encodePubkey(pubkey),
        value: {
          denom: value.denom,
          amount: value.amount,
        },
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: ({
      description,
      validatorAddress,
      commissionRate,
      minSelfDelegation,
    }: MsgEditValidator): MsgEditValidatorAminoType["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details,
        },
        validator_address: validatorAddress,
        commission_rate: commissionRate,
        min_self_delegation: minSelfDelegation,
      };
    },
    fromAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation,
    }: MsgEditValidatorAminoType["value"]): MsgEditValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details,
        },
        validatorAddress: validator_address,
        commissionRate: commission_rate,
        minSelfDelegation: min_self_delegation,
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: ({ delegatorAddress, validatorAddress, amount }: MsgDelegate): MsgDelegateAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
    }: MsgDelegateAminoType["value"]): MsgDelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: ({
      delegatorAddress,
      validatorSrcAddress,
      validatorDstAddress,
      amount,
    }: MsgBeginRedelegate): MsgBeginRedelegateAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_src_address: validatorSrcAddress,
        validator_dst_address: validatorDstAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount,
    }: MsgBeginRedelegateAminoType["value"]): MsgBeginRedelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorSrcAddress: validator_src_address,
        validatorDstAddress: validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
    }: MsgUndelegate): MsgUndelegateAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
    }: MsgUndelegateAminoType["value"]): MsgUndelegate => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
      amount,
      creationHeight,
    }: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        creation_height: creationHeight.toString(),
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount,
      creation_height,
    }: MsgCancelUnbondingDelegationAminoType["value"]): MsgCancelUnbondingDelegation => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount,
        },
        creationHeight: BigInt(creation_height),
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/staking/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          unbonding_time: (params.unbondingTime * 1_000_000_000).toString(),
          max_validators: params.maxValidators,
          max_entries: params.maxEntries,
          historical_entries: params.historicalEntries,
          bond_denom: params.bondDenom,
          min_commission_rate: params.minCommissionRate,
          validator_bond_factor: params.validatorBondFactor,
          global_liquid_staking_cap: params.globalLiquidStakingCap,
          validator_liquid_staking_cap: params.validatorLiquidStakingCap,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          unbondingTime: {
            seconds: BigInt(Math.floor(parseInt(params.unbonding_time) / 1_000_000_000)),
            nanos: parseInt(params.unbonding_time) % 1_000_000_000,
          },
          maxValidators: params.max_validators,
          maxEntries: params.max_entries,
          historicalEntries: params.historical_entries,
          bondDenom: params.bond_denom,
          minCommissionRate: params.min_commission_rate,
          validatorBondFactor: params.validator_bond_factor,
          globalLiquidStakingCap: params.global_liquid_staking_cap,
          validatorLiquidStakingCap: params.validator_liquid_staking_cap,
        },
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgUnbondValidator": {
    aminoType: "cosmos-sdk/MsgUnbondValidator",
    toAmino: ({ validatorAddress }: MsgUnbondValidator): MsgUnbondValidatorAminoType["value"] => {
      return {
        validator_address: validatorAddress,
      };
    },
    fromAmino: ({ validator_address }: MsgUnbondValidatorAminoType["value"]): MsgUnbondValidator => {
      return {
        validatorAddress: validator_address,
      };
    },
  },
  "/cosmos.staking.v1beta1.MsgTokenizeShares": {
    aminoType: "cosmos-sdk/MsgTokenizeShares",
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
  "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
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
  "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord": {
    aminoType: "cosmos-sdk/MsgTransferTokenizeRecord",
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
  "/cosmos.staking.v1beta1.MsgDisableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
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
  "/cosmos.staking.v1beta1.MsgEnableTokenizeShares": {
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
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
  "/cosmos.staking.v1beta1.MsgValidatorBond": {
    aminoType: "cosmos-sdk/MsgValidatorBond",
    toAmino: ({
      delegatorAddress,
      validatorAddress,
    }: MsgValidatorBond): MsgValidatorBondAminoType["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
    }: MsgValidatorBondAminoType["value"]): MsgValidatorBond => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
      };
    },
  },
};
