/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.liquidstake.v1beta1";
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
/** Params defines the set of params for the liquidstake module. */
export interface Params {
  /**
   * LiquidBondDenom specifies the denomination of the token receiving after
   * liquid stake, The value is calculated through NetAmount.
   */
  liquidBondDenom: string;
  /**
   * WhitelistedValidators specifies the validators elected to become Active
   * Liquid Validators.
   */
  whitelistedValidators: WhitelistedValidator[];
  /**
   * UnstakeFeeRate specifies the fee rate when liquid unstake is requested,
   * unbonded by subtracting it from unbondingAmount
   */
  unstakeFeeRate: string;
  /**
   * LsmDisabled allows to block any msgs that convert staked tokens into
   * stkXPRT through LSM.
   */
  lsmDisabled: boolean;
  /**
   * MinLiquidStakingAmount specifies the minimum number of coins to be staked
   * to the active liquid validators on liquid staking to minimize decimal loss
   * and consider gas efficiency.
   */
  minLiquidStakeAmount: string;
  /**
   * CwLockedPoolAddress defines the bech32-encoded address of
   * a CW smart-contract representing a time locked LP (e.g. Superfluid LP).
   */
  cwLockedPoolAddress: string;
  /**
   * FeeAccountAddress defines the bech32-encoded address of
   * a an account responsible for accumulating protocol fees.
   */
  feeAccountAddress: string;
  /**
   * AutocompoundFeeRate specifies the fee rate for auto redelegating the stake
   * rewards. The fee is taken in favour of the fee account (see
   * FeeAccountAddress).
   */
  autocompoundFeeRate: string;
  /**
   * WhitelistAdminAddress the bech32-encoded address of an admin authority
   * that is allowed to update whitelisted validators or pause liquidstaking
   * module entirely. The key is controlled by an offchain process that is
   * selecting validators based on a criteria. Pausing of the module can be
   * required during important migrations or failures.
   */
  whitelistAdminAddress: string;
  /**
   * ModulePaused is a safety toggle that allows to stop main module functions
   * such as stake/unstake/stake-to-lp and the BeginBlocker logic.
   */
  modulePaused: boolean;
}
/**
 * WhitelistedValidator consists of the validator operator address and the
 * target weight, which is a value for calculating the real weight to be derived
 * according to the active status.
 */
export interface WhitelistedValidator {
  /**
   * validator_address defines the bech32-encoded address that whitelisted
   * validator
   */
  validatorAddress: string;
  /**
   * target_weight specifies the target weight for liquid staking, unstaking
   * amount, which is a value for calculating the real weight to be derived
   * according to the active status
   */
  targetWeight: string;
}
/**
 * LiquidValidator defines a Validator that can be the target of LiquidStaking
 * and LiquidUnstaking, Active, Weight, etc. fields are derived as functions to
 * deal with by maintaining consistency with the state of the staking module.
 */
export interface LiquidValidator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
}
/**
 * LiquidValidatorState is type LiquidValidator with state added to return to
 * query results.
 */
export interface LiquidValidatorState {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
  /** weight specifies the weight for liquid staking, unstaking amount */
  weight: string;
  /** status is the liquid validator status */
  status: ValidatorStatus;
  /** del_shares define the delegation shares of the validator */
  delShares: string;
  /**
   * liquid_tokens define the token amount worth of delegation shares of the
   * validator (slashing applied amount)
   */
  liquidTokens: string;
}
/**
 * NetAmountState is type for net amount raw data and mint rate, This is a value
 * that depends on the several module state every time, so it is used only for
 * calculation and query and is not stored in kv.
 */
export interface NetAmountState {
  /** mint_rate is stkXPRTTotalSupply / NetAmount */
  mintRate: string;
  /** btoken_total_supply returns the total supply of stk/uxprt (stkXPRT denom) */
  stkxprtTotalSupply: string;
  /**
   * net_amount is proxy account's native token balance + total liquid tokens +
   * total remaining rewards + total unbonding balance
   */
  netAmount: string;
  /** total_del_shares define the delegation shares of all liquid validators */
  totalDelShares: string;
  /**
   * total_liquid_tokens define the token amount worth of delegation shares of
   * all liquid validator (slashing applied amount)
   */
  totalLiquidTokens: string;
  /**
   * total_remaining_rewards define the sum of remaining rewards of proxy
   * account by all liquid validators
   */
  totalRemainingRewards: string;
  /**
   * total_unbonding_balance define the unbonding balance of proxy account by
   * all liquid validator (slashing applied amount)
   */
  totalUnbondingBalance: string;
  /** proxy_acc_balance define the balance of proxy account for the native token */
  proxyAccBalance: string;
}
function createBaseParams(): Params {
  return {
    liquidBondDenom: "",
    whitelistedValidators: [],
    unstakeFeeRate: "",
    lsmDisabled: false,
    minLiquidStakeAmount: "",
    cwLockedPoolAddress: "",
    feeAccountAddress: "",
    autocompoundFeeRate: "",
    whitelistAdminAddress: "",
    modulePaused: false,
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidBondDenom !== "") {
      writer.uint32(10).string(message.liquidBondDenom);
    }
    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.unstakeFeeRate !== "") {
      writer.uint32(26).string(message.unstakeFeeRate);
    }
    if (message.lsmDisabled === true) {
      writer.uint32(32).bool(message.lsmDisabled);
    }
    if (message.minLiquidStakeAmount !== "") {
      writer.uint32(42).string(message.minLiquidStakeAmount);
    }
    if (message.cwLockedPoolAddress !== "") {
      writer.uint32(50).string(message.cwLockedPoolAddress);
    }
    if (message.feeAccountAddress !== "") {
      writer.uint32(58).string(message.feeAccountAddress);
    }
    if (message.autocompoundFeeRate !== "") {
      writer.uint32(66).string(message.autocompoundFeeRate);
    }
    if (message.whitelistAdminAddress !== "") {
      writer.uint32(74).string(message.whitelistAdminAddress);
    }
    if (message.modulePaused === true) {
      writer.uint32(80).bool(message.modulePaused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.unstakeFeeRate = reader.string();
          break;
        case 4:
          message.lsmDisabled = reader.bool();
          break;
        case 5:
          message.minLiquidStakeAmount = reader.string();
          break;
        case 6:
          message.cwLockedPoolAddress = reader.string();
          break;
        case 7:
          message.feeAccountAddress = reader.string();
          break;
        case 8:
          message.autocompoundFeeRate = reader.string();
          break;
        case 9:
          message.whitelistAdminAddress = reader.string();
          break;
        case 10:
          message.modulePaused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.liquidBondDenom)) obj.liquidBondDenom = String(object.liquidBondDenom);
    if (Array.isArray(object?.whitelistedValidators))
      obj.whitelistedValidators = object.whitelistedValidators.map((e: any) =>
        WhitelistedValidator.fromJSON(e),
      );
    if (isSet(object.unstakeFeeRate)) obj.unstakeFeeRate = String(object.unstakeFeeRate);
    if (isSet(object.lsmDisabled)) obj.lsmDisabled = Boolean(object.lsmDisabled);
    if (isSet(object.minLiquidStakeAmount)) obj.minLiquidStakeAmount = String(object.minLiquidStakeAmount);
    if (isSet(object.cwLockedPoolAddress)) obj.cwLockedPoolAddress = String(object.cwLockedPoolAddress);
    if (isSet(object.feeAccountAddress)) obj.feeAccountAddress = String(object.feeAccountAddress);
    if (isSet(object.autocompoundFeeRate)) obj.autocompoundFeeRate = String(object.autocompoundFeeRate);
    if (isSet(object.whitelistAdminAddress)) obj.whitelistAdminAddress = String(object.whitelistAdminAddress);
    if (isSet(object.modulePaused)) obj.modulePaused = Boolean(object.modulePaused);
    return obj;
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
    message.unstakeFeeRate !== undefined && (obj.unstakeFeeRate = message.unstakeFeeRate);
    message.lsmDisabled !== undefined && (obj.lsmDisabled = message.lsmDisabled);
    message.minLiquidStakeAmount !== undefined && (obj.minLiquidStakeAmount = message.minLiquidStakeAmount);
    message.cwLockedPoolAddress !== undefined && (obj.cwLockedPoolAddress = message.cwLockedPoolAddress);
    message.feeAccountAddress !== undefined && (obj.feeAccountAddress = message.feeAccountAddress);
    message.autocompoundFeeRate !== undefined && (obj.autocompoundFeeRate = message.autocompoundFeeRate);
    message.whitelistAdminAddress !== undefined &&
      (obj.whitelistAdminAddress = message.whitelistAdminAddress);
    message.modulePaused !== undefined && (obj.modulePaused = message.modulePaused);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.liquidBondDenom = object.liquidBondDenom ?? "";
    message.whitelistedValidators =
      object.whitelistedValidators?.map((e) => WhitelistedValidator.fromPartial(e)) || [];
    message.unstakeFeeRate = object.unstakeFeeRate ?? "";
    message.lsmDisabled = object.lsmDisabled ?? false;
    message.minLiquidStakeAmount = object.minLiquidStakeAmount ?? "";
    message.cwLockedPoolAddress = object.cwLockedPoolAddress ?? "";
    message.feeAccountAddress = object.feeAccountAddress ?? "";
    message.autocompoundFeeRate = object.autocompoundFeeRate ?? "";
    message.whitelistAdminAddress = object.whitelistAdminAddress ?? "";
    message.modulePaused = object.modulePaused ?? false;
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
  encode(message: WhitelistedValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.targetWeight !== "") {
      writer.uint32(18).string(message.targetWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistedValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseWhitelistedValidator();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.targetWeight)) obj.targetWeight = String(object.targetWeight);
    return obj;
  },
  toJSON(message: WhitelistedValidator): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.targetWeight !== undefined && (obj.targetWeight = message.targetWeight);
    return obj;
  },
  fromPartial(object: Partial<WhitelistedValidator>): WhitelistedValidator {
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
  encode(message: LiquidValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseLiquidValidator();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    return obj;
  },
  toJSON(message: LiquidValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },
  fromPartial(object: Partial<LiquidValidator>): LiquidValidator {
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
  encode(message: LiquidValidatorState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidValidatorState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseLiquidValidatorState();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    if (isSet(object.status)) obj.status = validatorStatusFromJSON(object.status);
    if (isSet(object.delShares)) obj.delShares = String(object.delShares);
    if (isSet(object.liquidTokens)) obj.liquidTokens = String(object.liquidTokens);
    return obj;
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
  fromPartial(object: Partial<LiquidValidatorState>): LiquidValidatorState {
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
    stkxprtTotalSupply: "",
    netAmount: "",
    totalDelShares: "",
    totalLiquidTokens: "",
    totalRemainingRewards: "",
    totalUnbondingBalance: "",
    proxyAccBalance: "",
  };
}
export const NetAmountState = {
  encode(message: NetAmountState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintRate !== "") {
      writer.uint32(10).string(message.mintRate);
    }
    if (message.stkxprtTotalSupply !== "") {
      writer.uint32(18).string(message.stkxprtTotalSupply);
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
  decode(input: BinaryReader | Uint8Array, length?: number): NetAmountState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAmountState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintRate = reader.string();
          break;
        case 2:
          message.stkxprtTotalSupply = reader.string();
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
    const obj = createBaseNetAmountState();
    if (isSet(object.mintRate)) obj.mintRate = String(object.mintRate);
    if (isSet(object.stkxprtTotalSupply)) obj.stkxprtTotalSupply = String(object.stkxprtTotalSupply);
    if (isSet(object.netAmount)) obj.netAmount = String(object.netAmount);
    if (isSet(object.totalDelShares)) obj.totalDelShares = String(object.totalDelShares);
    if (isSet(object.totalLiquidTokens)) obj.totalLiquidTokens = String(object.totalLiquidTokens);
    if (isSet(object.totalRemainingRewards)) obj.totalRemainingRewards = String(object.totalRemainingRewards);
    if (isSet(object.totalUnbondingBalance)) obj.totalUnbondingBalance = String(object.totalUnbondingBalance);
    if (isSet(object.proxyAccBalance)) obj.proxyAccBalance = String(object.proxyAccBalance);
    return obj;
  },
  toJSON(message: NetAmountState): unknown {
    const obj: any = {};
    message.mintRate !== undefined && (obj.mintRate = message.mintRate);
    message.stkxprtTotalSupply !== undefined && (obj.stkxprtTotalSupply = message.stkxprtTotalSupply);
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
  fromPartial(object: Partial<NetAmountState>): NetAmountState {
    const message = createBaseNetAmountState();
    message.mintRate = object.mintRate ?? "";
    message.stkxprtTotalSupply = object.stkxprtTotalSupply ?? "";
    message.netAmount = object.netAmount ?? "";
    message.totalDelShares = object.totalDelShares ?? "";
    message.totalLiquidTokens = object.totalLiquidTokens ?? "";
    message.totalRemainingRewards = object.totalRemainingRewards ?? "";
    message.totalUnbondingBalance = object.totalUnbondingBalance ?? "";
    message.proxyAccBalance = object.proxyAccBalance ?? "";
    return message;
  },
};
