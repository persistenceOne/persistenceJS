/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "gaia.liquid.v1beta1";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export enum TokenizeShareLockStatus {
  /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
  TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
  /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
  /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
  /**
   * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
   * will be able to tokenize shortly (after 1 unbonding period)
   */
  TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
  UNRECOGNIZED = -1,
}
export function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenizeShareLockStatus.UNRECOGNIZED;
  }
}
export function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string {
  switch (object) {
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case TokenizeShareLockStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the parameters for the x/liquid module. */
export interface Params {
  /**
   * global_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers
   */
  globalLiquidStakingCap: string;
  /**
   * validator_liquid_staking_cap represents a cap on the portion of stake that
   * comes from liquid staking providers for a specific validator
   */
  validatorLiquidStakingCap: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
  id: bigint;
  owner: string;
  /** module account take the role of delegator */
  moduleAccount: string;
  /** validator delegated to for tokenize share record creation */
  validator: string;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
  /**
   * PendingTokenizeShareAuthorizations stores a list of addresses that have their
   * tokenize share enablement in progress
   */
  addresses: string[];
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
  recordId: bigint;
  reward: DecCoin[];
}
/**
 * LiquidValidator is the storage layout for details about a validator's liquid
 * stake.
 */
export interface LiquidValidator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}
function createBaseParams(): Params {
  return {
    globalLiquidStakingCap: "",
    validatorLiquidStakingCap: "",
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.globalLiquidStakingCap !== "") {
      writer.uint32(66).string(message.globalLiquidStakingCap);
    }
    if (message.validatorLiquidStakingCap !== "") {
      writer.uint32(74).string(message.validatorLiquidStakingCap);
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
        case 8:
          message.globalLiquidStakingCap = reader.string();
          break;
        case 9:
          message.validatorLiquidStakingCap = reader.string();
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
    if (isSet(object.globalLiquidStakingCap))
      obj.globalLiquidStakingCap = String(object.globalLiquidStakingCap);
    if (isSet(object.validatorLiquidStakingCap))
      obj.validatorLiquidStakingCap = String(object.validatorLiquidStakingCap);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.globalLiquidStakingCap !== undefined &&
      (obj.globalLiquidStakingCap = message.globalLiquidStakingCap);
    message.validatorLiquidStakingCap !== undefined &&
      (obj.validatorLiquidStakingCap = message.validatorLiquidStakingCap);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.globalLiquidStakingCap = object.globalLiquidStakingCap ?? "";
    message.validatorLiquidStakingCap = object.validatorLiquidStakingCap ?? "";
    return message;
  },
};
function createBaseTokenizeShareRecord(): TokenizeShareRecord {
  return {
    id: BigInt(0),
    owner: "",
    moduleAccount: "",
    validator: "",
  };
}
export const TokenizeShareRecord = {
  encode(message: TokenizeShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.moduleAccount = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenizeShareRecord {
    const obj = createBaseTokenizeShareRecord();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.moduleAccount)) obj.moduleAccount = String(object.moduleAccount);
    if (isSet(object.validator)) obj.validator = String(object.validator);
    return obj;
  },
  toJSON(message: TokenizeShareRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.moduleAccount !== undefined && (obj.moduleAccount = message.moduleAccount);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },
  fromPartial(object: Partial<TokenizeShareRecord>): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.owner = object.owner ?? "";
    message.moduleAccount = object.moduleAccount ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};
function createBasePendingTokenizeShareAuthorizations(): PendingTokenizeShareAuthorizations {
  return {
    addresses: [],
  };
}
export const PendingTokenizeShareAuthorizations = {
  encode(
    message: PendingTokenizeShareAuthorizations,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingTokenizeShareAuthorizations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenizeShareAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PendingTokenizeShareAuthorizations {
    const obj = createBasePendingTokenizeShareAuthorizations();
    if (Array.isArray(object?.addresses)) obj.addresses = object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: PendingTokenizeShareAuthorizations): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseTokenizeShareRecordReward(): TokenizeShareRecordReward {
  return {
    recordId: BigInt(0),
    reward: [],
  };
}
export const TokenizeShareRecordReward = {
  encode(message: TokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.recordId);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareRecordReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = reader.uint64();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenizeShareRecordReward {
    const obj = createBaseTokenizeShareRecordReward();
    if (isSet(object.recordId)) obj.recordId = BigInt(object.recordId.toString());
    if (Array.isArray(object?.reward)) obj.reward = object.reward.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: TokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.recordId !== undefined && (obj.recordId = (message.recordId || BigInt(0)).toString());
    if (message.reward) {
      obj.reward = message.reward.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TokenizeShareRecordReward>): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    if (object.recordId !== undefined && object.recordId !== null) {
      message.recordId = BigInt(object.recordId.toString());
    }
    message.reward = object.reward?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseLiquidValidator(): LiquidValidator {
  return {
    operatorAddress: "",
    liquidShares: "",
  };
}
export const LiquidValidator = {
  encode(message: LiquidValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.liquidShares !== "") {
      writer.uint32(26).string(message.liquidShares);
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
        case 3:
          message.liquidShares = reader.string();
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
    if (isSet(object.liquidShares)) obj.liquidShares = String(object.liquidShares);
    return obj;
  },
  toJSON(message: LiquidValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.liquidShares !== undefined && (obj.liquidShares = message.liquidShares);
    return obj;
  },
  fromPartial(object: Partial<LiquidValidator>): LiquidValidator {
    const message = createBaseLiquidValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
};
