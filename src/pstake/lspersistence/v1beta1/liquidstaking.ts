/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "pstake.lspersistence.v1beta1";
/** ValidatorStatus enumerates the status of a liquid validator. */
export enum ValidatorStatus {
  /** VALIDATOR_STATUS_UNSPECIFIED - VALIDATOR_STATUS_UNSPECIFIED defines the unspecified invalid status. */
  VALIDATOR_STATUS_UNSPECIFIED = 0,
  /** VALIDATOR_STATUS_ACTIVE - VALIDATOR_STATUS_ACTIVE defines the active, valid status */
  VALIDATOR_STATUS_ACTIVE = 1,
  /** VALIDATOR_STATUS_INACTIVE - VALIDATOR_STATUS_INACTIVE defines the inactive, invalid status */
  VALIDATOR_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export function validatorStatusFromJSON(object: any): ValidatorStatus {
  switch (object) {
    case 0:
    case "VALIDATOR_STATUS_UNSPECIFIED":
      return ValidatorStatus.VALIDATOR_STATUS_UNSPECIFIED;
    case 1:
    case "VALIDATOR_STATUS_ACTIVE":
      return ValidatorStatus.VALIDATOR_STATUS_ACTIVE;
    case 2:
    case "VALIDATOR_STATUS_INACTIVE":
      return ValidatorStatus.VALIDATOR_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorStatus.UNRECOGNIZED;
  }
}
export function validatorStatusToJSON(object: ValidatorStatus): string {
  switch (object) {
    case ValidatorStatus.VALIDATOR_STATUS_UNSPECIFIED:
      return "VALIDATOR_STATUS_UNSPECIFIED";
    case ValidatorStatus.VALIDATOR_STATUS_ACTIVE:
      return "VALIDATOR_STATUS_ACTIVE";
    case ValidatorStatus.VALIDATOR_STATUS_INACTIVE:
      return "VALIDATOR_STATUS_INACTIVE";
    case ValidatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the set of params for the liquidstaking module. */
export interface Params {
  /**
   * LiquidBondDenom specifies the denomination of the token receiving after LiquidStaking, The value is calculated
   * through NetAmount.
   */
  liquidBondDenom: string;
  /** WhitelistedValidators specifies the validators elected to become Active Liquid Validators. */
  whitelistedValidators: WhitelistedValidator[];
  stakeFeeRate: string;
  /**
   * UnstakeFeeRate specifies the fee rate when liquid unstake is requested, unbonded by subtracting it from
   * unbondingAmount
   */
  unstakeFeeRate: string;
  redemptionFeeRate: string;
  restakeFeeRate: string;
  /**
   * MinLiquidStakingAmount specifies the minimum number of coins to be staked to the active liquid validators on liquid
   * staking to minimize decimal loss and consider gas efficiency.
   */
  minLiquidStakingAmount: string;
  adminAddress: string;
  feeAddress: string;
}
/**
 * WhitelistedValidator consists of the validator operator address and the target weight, which is a value for
 * calculating the real weight to be derived according to the active status. In the case of inactive, it is calculated
 * as zero.
 */
export interface WhitelistedValidator {
  /** validator_address defines the bech32-encoded address that whitelisted validator */
  validatorAddress: string;
  /**
   * target_weight specifies the target weight for liquid staking, unstaking amount, which is a value for calculating
   * the real weight to be derived according to the active status
   */
  targetWeight: string;
}
/**
 * LiquidValidator defines a Validator that can be the target of LiquidStaking and LiquidUnstaking, Active, Weight, etc.
 * fields are derived as functions to deal with by maintaining consistency with the state of the staking module.
 */
export interface LiquidValidator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
}
/** LiquidValidatorState is type LiquidValidator with state added to return to query results. */
export interface LiquidValidatorState {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
  /** weight specifies the weight for liquid staking, unstaking amount */
  weight: string;
  /** status is the liquid validator status */
  status: ValidatorStatus;
  /** del_shares define the delegation shares of the validator */
  delShares: string;
  /** liquid_tokens define the token amount worth of delegation shares of the validator (slashing applied amount) */
  liquidTokens: string;
}
/**
 * NetAmountState is type for net amount raw data and mint rate, This is a value that depends on the several module
 * state every time, so it is used only for calculation and query and is not stored in kv.
 */
export interface NetAmountState {
  /** mint_rate is bTokenTotalSupply / NetAmount */
  mintRate: string;
  /** btoken_total_supply returns the total supply of btoken(liquid_bond_denom) */
  btokenTotalSupply: string;
  /**
   * net_amount is proxy account's native token balance + total liquid tokens + total remaining rewards + total
   * unbonding balance
   */
  netAmount: string;
  /** total_del_shares define the delegation shares of all liquid validators */
  totalDelShares: string;
  /**
   * total_liquid_tokens define the token amount worth of delegation shares of all liquid validator (slashing applied
   * amount)
   */
  totalLiquidTokens: string;
  /** total_remaining_rewards define the sum of remaining rewards of proxy account by all liquid validators */
  totalRemainingRewards: string;
  /**
   * total_unbonding_balance define the unbonding balance of proxy account by all liquid validator (slashing applied
   * amount)
   */
  totalUnbondingBalance: string;
  /** proxy_acc_balance define the balance of proxy account for the native token */
  proxyAccBalance: string;
}
/**
 * VotingPower is type for current voting power of the voter including staking module's voting power and liquid staking
 * module's voting power, It depends on the amount of delegation of staking module, the bonded state of the delegated
 * validator, the value of btoken(liquid_bond_denom), and the pool coin and farming position containing btoken..
 */
export interface VotingPower {
  /** voter defines the address of the voter; bech encoded in JSON. */
  voter: string;
  /** staking_voting_power return the voting power of staking that can be exercised. */
  stakingVotingPower: string;
  /** liquid_staking_voting_power return the voting power of liquid staking that can be exercised. */
  liquidStakingVotingPower: string;
  /**
   * validator_voting_power return the voting power of the validator if the voter is the validator operator that can be
   * exercised.
   */
  validatorVotingPower: string;
}
function createBaseParams(): Params {
  return {
    liquidBondDenom: "",
    whitelistedValidators: [],
    stakeFeeRate: "",
    unstakeFeeRate: "",
    redemptionFeeRate: "",
    restakeFeeRate: "",
    minLiquidStakingAmount: "",
    adminAddress: "",
    feeAddress: "",
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidBondDenom !== "") {
      writer.uint32(10).string(message.liquidBondDenom);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.stakeFeeRate !== "") {
      writer.uint32(26).string(message.stakeFeeRate);
    }
    if (message.unstakeFeeRate !== "") {
      writer.uint32(34).string(message.unstakeFeeRate);
    }
    if (message.redemptionFeeRate !== "") {
      writer.uint32(42).string(message.redemptionFeeRate);
    }
    if (message.restakeFeeRate !== "") {
      writer.uint32(50).string(message.restakeFeeRate);
    }
    if (message.minLiquidStakingAmount !== "") {
      writer.uint32(58).string(message.minLiquidStakingAmount);
    }
    if (message.adminAddress !== "") {
      writer.uint32(66).string(message.adminAddress);
    }
    if (message.feeAddress !== "") {
      writer.uint32(74).string(message.feeAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidBondDenom = reader.string();
          break;
        case 2:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.stakeFeeRate = reader.string();
          break;
        case 4:
          message.unstakeFeeRate = reader.string();
          break;
        case 5:
          message.redemptionFeeRate = reader.string();
          break;
        case 6:
          message.restakeFeeRate = reader.string();
          break;
        case 7:
          message.minLiquidStakingAmount = reader.string();
          break;
        case 8:
          message.adminAddress = reader.string();
          break;
        case 9:
          message.feeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      liquidBondDenom: isSet(object.liquidBondDenom) ? String(object.liquidBondDenom) : "",
      whitelistedValidators: Array.isArray(object?.whitelistedValidators)
        ? object.whitelistedValidators.map((e: any) => WhitelistedValidator.fromJSON(e))
        : [],
      stakeFeeRate: isSet(object.stakeFeeRate) ? String(object.stakeFeeRate) : "",
      unstakeFeeRate: isSet(object.unstakeFeeRate) ? String(object.unstakeFeeRate) : "",
      redemptionFeeRate: isSet(object.redemptionFeeRate) ? String(object.redemptionFeeRate) : "",
      restakeFeeRate: isSet(object.restakeFeeRate) ? String(object.restakeFeeRate) : "",
      minLiquidStakingAmount: isSet(object.minLiquidStakingAmount)
        ? String(object.minLiquidStakingAmount)
        : "",
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.liquidBondDenom !== undefined && (obj.liquidBondDenom = message.liquidBondDenom);
    if (message.whitelistedValidators) {
      obj.whitelistedValidators = message.whitelistedValidators.map((e) =>
        e ? WhitelistedValidator.toJSON(e) : undefined,
      );
    } else {
      obj.whitelistedValidators = [];
    }
    message.stakeFeeRate !== undefined && (obj.stakeFeeRate = message.stakeFeeRate);
    message.unstakeFeeRate !== undefined && (obj.unstakeFeeRate = message.unstakeFeeRate);
    message.redemptionFeeRate !== undefined && (obj.redemptionFeeRate = message.redemptionFeeRate);
    message.restakeFeeRate !== undefined && (obj.restakeFeeRate = message.restakeFeeRate);
    message.minLiquidStakingAmount !== undefined &&
      (obj.minLiquidStakingAmount = message.minLiquidStakingAmount);
    message.adminAddress !== undefined && (obj.adminAddress = message.adminAddress);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.liquidBondDenom = object.liquidBondDenom ?? "";
    message.whitelistedValidators =
      object.whitelistedValidators?.map((e) => WhitelistedValidator.fromPartial(e)) || [];
    message.stakeFeeRate = object.stakeFeeRate ?? "";
    message.unstakeFeeRate = object.unstakeFeeRate ?? "";
    message.redemptionFeeRate = object.redemptionFeeRate ?? "";
    message.restakeFeeRate = object.restakeFeeRate ?? "";
    message.minLiquidStakingAmount = object.minLiquidStakingAmount ?? "";
    message.adminAddress = object.adminAddress ?? "";
    message.feeAddress = object.feeAddress ?? "";
    return message;
  },
};
function createBaseWhitelistedValidator(): WhitelistedValidator {
  return {
    validatorAddress: "",
    targetWeight: "",
  };
}
export const WhitelistedValidator = {
  encode(message: WhitelistedValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.targetWeight !== "") {
      writer.uint32(18).string(message.targetWeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.targetWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WhitelistedValidator {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      targetWeight: isSet(object.targetWeight) ? String(object.targetWeight) : "",
    };
  },
  toJSON(message: WhitelistedValidator): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.targetWeight !== undefined && (obj.targetWeight = message.targetWeight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WhitelistedValidator>, I>>(object: I): WhitelistedValidator {
    const message = createBaseWhitelistedValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    message.targetWeight = object.targetWeight ?? "";
    return message;
  },
};
function createBaseLiquidValidator(): LiquidValidator {
  return {
    operatorAddress: "",
  };
}
export const LiquidValidator = {
  encode(message: LiquidValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidValidator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
    };
  },
  toJSON(message: LiquidValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidValidator>, I>>(object: I): LiquidValidator {
    const message = createBaseLiquidValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
};
function createBaseLiquidValidatorState(): LiquidValidatorState {
  return {
    operatorAddress: "",
    weight: "",
    status: 0,
    delShares: "",
    liquidTokens: "",
  };
}
export const LiquidValidatorState = {
  encode(message: LiquidValidatorState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.delShares !== "") {
      writer.uint32(34).string(message.delShares);
    }
    if (message.liquidTokens !== "") {
      writer.uint32(42).string(message.liquidTokens);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidatorState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.delShares = reader.string();
          break;
        case 5:
          message.liquidTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidValidatorState {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      status: isSet(object.status) ? validatorStatusFromJSON(object.status) : 0,
      delShares: isSet(object.delShares) ? String(object.delShares) : "",
      liquidTokens: isSet(object.liquidTokens) ? String(object.liquidTokens) : "",
    };
  },
  toJSON(message: LiquidValidatorState): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.weight !== undefined && (obj.weight = message.weight);
    message.status !== undefined && (obj.status = validatorStatusToJSON(message.status));
    message.delShares !== undefined && (obj.delShares = message.delShares);
    message.liquidTokens !== undefined && (obj.liquidTokens = message.liquidTokens);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidValidatorState>, I>>(object: I): LiquidValidatorState {
    const message = createBaseLiquidValidatorState();
    message.operatorAddress = object.operatorAddress ?? "";
    message.weight = object.weight ?? "";
    message.status = object.status ?? 0;
    message.delShares = object.delShares ?? "";
    message.liquidTokens = object.liquidTokens ?? "";
    return message;
  },
};
function createBaseNetAmountState(): NetAmountState {
  return {
    mintRate: "",
    btokenTotalSupply: "",
    netAmount: "",
    totalDelShares: "",
    totalLiquidTokens: "",
    totalRemainingRewards: "",
    totalUnbondingBalance: "",
    proxyAccBalance: "",
  };
}
export const NetAmountState = {
  encode(message: NetAmountState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRate !== "") {
      writer.uint32(10).string(message.mintRate);
    }
    if (message.btokenTotalSupply !== "") {
      writer.uint32(18).string(message.btokenTotalSupply);
    }
    if (message.netAmount !== "") {
      writer.uint32(26).string(message.netAmount);
    }
    if (message.totalDelShares !== "") {
      writer.uint32(34).string(message.totalDelShares);
    }
    if (message.totalLiquidTokens !== "") {
      writer.uint32(42).string(message.totalLiquidTokens);
    }
    if (message.totalRemainingRewards !== "") {
      writer.uint32(50).string(message.totalRemainingRewards);
    }
    if (message.totalUnbondingBalance !== "") {
      writer.uint32(58).string(message.totalUnbondingBalance);
    }
    if (message.proxyAccBalance !== "") {
      writer.uint32(66).string(message.proxyAccBalance);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NetAmountState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAmountState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRate = reader.string();
          break;
        case 2:
          message.btokenTotalSupply = reader.string();
          break;
        case 3:
          message.netAmount = reader.string();
          break;
        case 4:
          message.totalDelShares = reader.string();
          break;
        case 5:
          message.totalLiquidTokens = reader.string();
          break;
        case 6:
          message.totalRemainingRewards = reader.string();
          break;
        case 7:
          message.totalUnbondingBalance = reader.string();
          break;
        case 8:
          message.proxyAccBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NetAmountState {
    return {
      mintRate: isSet(object.mintRate) ? String(object.mintRate) : "",
      btokenTotalSupply: isSet(object.btokenTotalSupply) ? String(object.btokenTotalSupply) : "",
      netAmount: isSet(object.netAmount) ? String(object.netAmount) : "",
      totalDelShares: isSet(object.totalDelShares) ? String(object.totalDelShares) : "",
      totalLiquidTokens: isSet(object.totalLiquidTokens) ? String(object.totalLiquidTokens) : "",
      totalRemainingRewards: isSet(object.totalRemainingRewards) ? String(object.totalRemainingRewards) : "",
      totalUnbondingBalance: isSet(object.totalUnbondingBalance) ? String(object.totalUnbondingBalance) : "",
      proxyAccBalance: isSet(object.proxyAccBalance) ? String(object.proxyAccBalance) : "",
    };
  },
  toJSON(message: NetAmountState): unknown {
    const obj: any = {};
    message.mintRate !== undefined && (obj.mintRate = message.mintRate);
    message.btokenTotalSupply !== undefined && (obj.btokenTotalSupply = message.btokenTotalSupply);
    message.netAmount !== undefined && (obj.netAmount = message.netAmount);
    message.totalDelShares !== undefined && (obj.totalDelShares = message.totalDelShares);
    message.totalLiquidTokens !== undefined && (obj.totalLiquidTokens = message.totalLiquidTokens);
    message.totalRemainingRewards !== undefined &&
      (obj.totalRemainingRewards = message.totalRemainingRewards);
    message.totalUnbondingBalance !== undefined &&
      (obj.totalUnbondingBalance = message.totalUnbondingBalance);
    message.proxyAccBalance !== undefined && (obj.proxyAccBalance = message.proxyAccBalance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NetAmountState>, I>>(object: I): NetAmountState {
    const message = createBaseNetAmountState();
    message.mintRate = object.mintRate ?? "";
    message.btokenTotalSupply = object.btokenTotalSupply ?? "";
    message.netAmount = object.netAmount ?? "";
    message.totalDelShares = object.totalDelShares ?? "";
    message.totalLiquidTokens = object.totalLiquidTokens ?? "";
    message.totalRemainingRewards = object.totalRemainingRewards ?? "";
    message.totalUnbondingBalance = object.totalUnbondingBalance ?? "";
    message.proxyAccBalance = object.proxyAccBalance ?? "";
    return message;
  },
};
function createBaseVotingPower(): VotingPower {
  return {
    voter: "",
    stakingVotingPower: "",
    liquidStakingVotingPower: "",
    validatorVotingPower: "",
  };
}
export const VotingPower = {
  encode(message: VotingPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.stakingVotingPower !== "") {
      writer.uint32(18).string(message.stakingVotingPower);
    }
    if (message.liquidStakingVotingPower !== "") {
      writer.uint32(26).string(message.liquidStakingVotingPower);
    }
    if (message.validatorVotingPower !== "") {
      writer.uint32(34).string(message.validatorVotingPower);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VotingPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.stakingVotingPower = reader.string();
          break;
        case 3:
          message.liquidStakingVotingPower = reader.string();
          break;
        case 4:
          message.validatorVotingPower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotingPower {
    return {
      voter: isSet(object.voter) ? String(object.voter) : "",
      stakingVotingPower: isSet(object.stakingVotingPower) ? String(object.stakingVotingPower) : "",
      liquidStakingVotingPower: isSet(object.liquidStakingVotingPower)
        ? String(object.liquidStakingVotingPower)
        : "",
      validatorVotingPower: isSet(object.validatorVotingPower) ? String(object.validatorVotingPower) : "",
    };
  },
  toJSON(message: VotingPower): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.stakingVotingPower !== undefined && (obj.stakingVotingPower = message.stakingVotingPower);
    message.liquidStakingVotingPower !== undefined &&
      (obj.liquidStakingVotingPower = message.liquidStakingVotingPower);
    message.validatorVotingPower !== undefined && (obj.validatorVotingPower = message.validatorVotingPower);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VotingPower>, I>>(object: I): VotingPower {
    const message = createBaseVotingPower();
    message.voter = object.voter ?? "";
    message.stakingVotingPower = object.stakingVotingPower ?? "";
    message.liquidStakingVotingPower = object.liquidStakingVotingPower ?? "";
    message.validatorVotingPower = object.validatorVotingPower ?? "";
    return message;
  },
};
