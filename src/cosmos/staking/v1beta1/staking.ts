//@ts-nocheck
/* eslint-disable */
import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Infraction indicates the infraction a validator commited. */
export enum Infraction {
  /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
  INFRACTION_UNSPECIFIED = 0,
  /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
  INFRACTION_DOUBLE_SIGN = 1,
  /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
  INFRACTION_DOWNTIME = 2,
  UNRECOGNIZED = -1,
}
export function infractionFromJSON(object: any): Infraction {
  switch (object) {
    case 0:
    case "INFRACTION_UNSPECIFIED":
      return Infraction.INFRACTION_UNSPECIFIED;
    case 1:
    case "INFRACTION_DOUBLE_SIGN":
      return Infraction.INFRACTION_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_DOWNTIME":
      return Infraction.INFRACTION_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Infraction.UNRECOGNIZED;
  }
}
export function infractionToJSON(object: Infraction): string {
  switch (object) {
    case Infraction.INFRACTION_UNSPECIFIED:
      return "INFRACTION_UNSPECIFIED";
    case Infraction.INFRACTION_DOUBLE_SIGN:
      return "INFRACTION_DOUBLE_SIGN";
    case Infraction.INFRACTION_DOWNTIME:
      return "INFRACTION_DOWNTIME";
    case Infraction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TokenizeShareLockStatus indicates whether the address is able to tokenize shares */
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
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header: Header;
  valset: Validator[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  maxRate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  maxChangeRate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commissionRates: CommissionRates;
  /** update_time is the last time the commission rate was changed. */
  updateTime: Timestamp;
}
/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  securityContact: string;
  /** details define other optional details. */
  details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensusPubkey: Any;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegatorShares: string;
  /** description defines the description terms for the validator. */
  description: Description;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbondingHeight: bigint;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbondingTime: Timestamp;
  /** commission defines the commission parameters. */
  commission: Commission;
  /**
   * min_self_delegation is the validator's self declared minimum self delegation.
   *
   * Since: cosmos-sdk 0.46
   */
  minSelfDelegation: string;
  /** strictly positive if this validator's unbonding has been stopped by external modules */
  unbondingOnHoldRefCount: bigint;
  /** list of unbonding ids, each uniquely identifing an unbonding of this validator */
  unbondingIds: bigint[];
  /** Number of shares self bonded from the validator */
  validatorBondShares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the encoded address of the validator. */
  validatorAddress: string;
  /** shares define the delegation shares received. */
  shares: string;
  /** has this delegation been marked as a validator self bond. */
  validatorBond: boolean;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the encoded address of the validator. */
  validatorAddress: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: bigint;
  /** completion_time is the unix time for unbonding completion. */
  completionTime: Timestamp;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initialBalance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
  /** Incrementing id that uniquely identifies this entry */
  unbondingId: bigint;
  /** Strictly positive if this entry's unbonding has been stopped by external modules */
  unbondingOnHoldRefCount: bigint;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creationHeight: bigint;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime: Timestamp;
  /** initial_balance defines the initial balance when redelegation started. */
  initialBalance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  sharesDst: string;
  /** Incrementing id that uniquely identifies this entry */
  unbondingId: bigint;
  /** Strictly positive if this entry's unbonding has been stopped by external modules */
  unbondingOnHoldRefCount: bigint;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validatorSrcAddress: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validatorDstAddress: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}
/** Params defines the parameters for the x/staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime: Duration;
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
  /** bond_denom defines the bondable coin denomination. */
  bondDenom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
  /**
   * validator_bond_factor is required as a safety check for tokenizing shares and
   * delegations from liquid staking providers
   */
  validatorBondFactor: string;
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
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry: RedelegationEntry;
  balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation: Redelegation;
  entries: RedelegationEntryResponse[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}
/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 */
export interface ValidatorUpdates {
  updates: ValidatorUpdate[];
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
  addresses: string[];
}
function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    header: Header.fromPartial({}),
    valset: [],
  };
}
export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalInfo {
    const obj = createBaseHistoricalInfo();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (Array.isArray(object?.valset)) obj.valset = object.valset.map((e: any) => Validator.fromJSON(e));
    return obj;
  },
  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.valset = [];
    }
    return obj;
  },
  fromPartial(object: Partial<HistoricalInfo>): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCommissionRates(): CommissionRates {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: "",
  };
}
export const CommissionRates = {
  encode(message: CommissionRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        case 2:
          message.maxRate = reader.string();
          break;
        case 3:
          message.maxChangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommissionRates {
    const obj = createBaseCommissionRates();
    if (isSet(object.rate)) obj.rate = String(object.rate);
    if (isSet(object.maxRate)) obj.maxRate = String(object.maxRate);
    if (isSet(object.maxChangeRate)) obj.maxChangeRate = String(object.maxChangeRate);
    return obj;
  },
  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
  fromPartial(object: Partial<CommissionRates>): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  },
};
function createBaseCommission(): Commission {
  return {
    commissionRates: CommissionRates.fromPartial({}),
    updateTime: Timestamp.fromPartial({}),
  };
}
export const Commission = {
  encode(message: Commission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(message.updateTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commission {
    const obj = createBaseCommission();
    if (isSet(object.commissionRates)) obj.commissionRates = CommissionRates.fromJSON(object.commissionRates);
    if (isSet(object.updateTime)) obj.updateTime = fromJsonTimestamp(object.updateTime);
    return obj;
  },
  toJSON(message: Commission): unknown {
    const obj: any = {};
    message.commissionRates !== undefined &&
      (obj.commissionRates = message.commissionRates
        ? CommissionRates.toJSON(message.commissionRates)
        : undefined);
    message.updateTime !== undefined && (obj.updateTime = fromTimestamp(message.updateTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Commission>): Commission {
    const message = createBaseCommission();
    if (object.commissionRates !== undefined && object.commissionRates !== null) {
      message.commissionRates = CommissionRates.fromPartial(object.commissionRates);
    }
    if (object.updateTime !== undefined && object.updateTime !== null) {
      message.updateTime = Timestamp.fromPartial(object.updateTime);
    }
    return message;
  },
};
function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: "",
  };
}
export const Description = {
  encode(message: Description, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Description {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Description {
    const obj = createBaseDescription();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.identity)) obj.identity = String(object.identity);
    if (isSet(object.website)) obj.website = String(object.website);
    if (isSet(object.securityContact)) obj.securityContact = String(object.securityContact);
    if (isSet(object.details)) obj.details = String(object.details);
    return obj;
  },
  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial(object: Partial<Description>): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: Any.fromPartial({}),
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: BigInt(0),
    unbondingTime: Timestamp.fromPartial({}),
    commission: Commission.fromPartial({}),
    minSelfDelegation: "",
    unbondingOnHoldRefCount: BigInt(0),
    unbondingIds: [],
    validatorBondShares: "",
    liquidShares: "",
  };
}
export const Validator = {
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(message.unbondingTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(96).int64(message.unbondingOnHoldRefCount);
    }
    writer.uint32(106).fork();
    for (const v of message.unbondingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.validatorBondShares !== "") {
      writer.uint32(114).string(message.validatorBondShares);
    }
    if (message.liquidShares !== "") {
      writer.uint32(122).string(message.liquidShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        case 12:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbondingIds.push(reader.uint64());
            }
          } else {
            message.unbondingIds.push(reader.uint64());
          }
          break;
        case 14:
          message.validatorBondShares = reader.string();
          break;
        case 15:
          message.liquidShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    if (isSet(object.consensusPubkey)) obj.consensusPubkey = Any.fromJSON(object.consensusPubkey);
    if (isSet(object.jailed)) obj.jailed = Boolean(object.jailed);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.delegatorShares)) obj.delegatorShares = String(object.delegatorShares);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.unbondingHeight)) obj.unbondingHeight = BigInt(object.unbondingHeight.toString());
    if (isSet(object.unbondingTime)) obj.unbondingTime = fromJsonTimestamp(object.unbondingTime);
    if (isSet(object.commission)) obj.commission = Commission.fromJSON(object.commission);
    if (isSet(object.minSelfDelegation)) obj.minSelfDelegation = String(object.minSelfDelegation);
    if (isSet(object.unbondingOnHoldRefCount))
      obj.unbondingOnHoldRefCount = BigInt(object.unbondingOnHoldRefCount.toString());
    if (Array.isArray(object?.unbondingIds))
      obj.unbondingIds = object.unbondingIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.validatorBondShares)) obj.validatorBondShares = String(object.validatorBondShares);
    if (isSet(object.liquidShares)) obj.liquidShares = String(object.liquidShares);
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.unbondingHeight !== undefined &&
      (obj.unbondingHeight = (message.unbondingHeight || BigInt(0)).toString());
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = fromTimestamp(message.unbondingTime).toISOString());
    message.commission !== undefined &&
      (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.unbondingOnHoldRefCount !== undefined &&
      (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || BigInt(0)).toString());
    if (message.unbondingIds) {
      obj.unbondingIds = message.unbondingIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.unbondingIds = [];
    }
    message.validatorBondShares !== undefined && (obj.validatorBondShares = message.validatorBondShares);
    message.liquidShares !== undefined && (obj.liquidShares = message.liquidShares);
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    if (object.consensusPubkey !== undefined && object.consensusPubkey !== null) {
      message.consensusPubkey = Any.fromPartial(object.consensusPubkey);
    }
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    if (object.unbondingHeight !== undefined && object.unbondingHeight !== null) {
      message.unbondingHeight = BigInt(object.unbondingHeight.toString());
    }
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Timestamp.fromPartial(object.unbondingTime);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromPartial(object.commission);
    }
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    if (object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbondingOnHoldRefCount.toString());
    }
    message.unbondingIds = object.unbondingIds?.map((e) => BigInt(e.toString())) || [];
    message.validatorBondShares = object.validatorBondShares ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
};
function createBaseValAddresses(): ValAddresses {
  return {
    addresses: [],
  };
}
export const ValAddresses = {
  encode(message: ValAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
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
  fromJSON(object: any): ValAddresses {
    const obj = createBaseValAddresses();
    if (Array.isArray(object?.addresses)) obj.addresses = object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValAddresses>): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseDVPair(): DVPair {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}
export const DVPair = {
  encode(message: DVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPair {
    const obj = createBaseDVPair();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<DVPair>): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseDVPairs(): DVPairs {
  return {
    pairs: [],
  };
}
export const DVPairs = {
  encode(message: DVPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPairs {
    const obj = createBaseDVPairs();
    if (Array.isArray(object?.pairs)) obj.pairs = object.pairs.map((e: any) => DVPair.fromJSON(e));
    return obj;
  },
  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? DVPair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DVPairs>): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
  };
}
export const DVVTriplet = {
  encode(message: DVVTriplet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplet {
    const obj = createBaseDVVTriplet();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorSrcAddress)) obj.validatorSrcAddress = String(object.validatorSrcAddress);
    if (isSet(object.validatorDstAddress)) obj.validatorDstAddress = String(object.validatorDstAddress);
    return obj;
  },
  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },
  fromPartial(object: Partial<DVVTriplet>): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },
};
function createBaseDVVTriplets(): DVVTriplets {
  return {
    triplets: [],
  };
}
export const DVVTriplets = {
  encode(message: DVVTriplets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplets {
    const obj = createBaseDVVTriplets();
    if (Array.isArray(object?.triplets))
      obj.triplets = object.triplets.map((e: any) => DVVTriplet.fromJSON(e));
    return obj;
  },
  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map((e) => (e ? DVVTriplet.toJSON(e) : undefined));
    } else {
      obj.triplets = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DVVTriplets>): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
};
function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: "",
    validatorBond: false,
  };
}
export const Delegation = {
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    if (message.validatorBond === true) {
      writer.uint32(32).bool(message.validatorBond);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        case 4:
          message.validatorBond = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    const obj = createBaseDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.shares)) obj.shares = String(object.shares);
    if (isSet(object.validatorBond)) obj.validatorBond = Boolean(object.validatorBond);
    return obj;
  },
  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    message.validatorBond !== undefined && (obj.validatorBond = message.validatorBond);
    return obj;
  },
  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    message.validatorBond = object.validatorBond ?? false;
    return message;
  },
};
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: [],
  };
}
export const UnbondingDelegation = {
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegation {
    const obj = createBaseUnbondingDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? UnbondingDelegationEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: Timestamp.fromPartial({}),
    initialBalance: "",
    balance: "",
    unbondingId: BigInt(0),
    unbondingOnHoldRefCount: BigInt(0),
  };
}
export const UnbondingDelegationEntry = {
  encode(message: UnbondingDelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        case 6:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegationEntry {
    const obj = createBaseUnbondingDelegationEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    if (isSet(object.unbondingId)) obj.unbondingId = BigInt(object.unbondingId.toString());
    if (isSet(object.unbondingOnHoldRefCount))
      obj.unbondingOnHoldRefCount = BigInt(object.unbondingOnHoldRefCount.toString());
    return obj;
  },
  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    message.unbondingOnHoldRefCount !== undefined &&
      (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    if (object.unbondingId !== undefined && object.unbondingId !== null) {
      message.unbondingId = BigInt(object.unbondingId.toString());
    }
    if (object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbondingOnHoldRefCount.toString());
    }
    return message;
  },
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: Timestamp.fromPartial({}),
    initialBalance: "",
    sharesDst: "",
    unbondingId: BigInt(0),
    unbondingOnHoldRefCount: BigInt(0),
  };
}
export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        case 6:
          message.unbondingOnHoldRefCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntry {
    const obj = createBaseRedelegationEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.sharesDst)) obj.sharesDst = String(object.sharesDst);
    if (isSet(object.unbondingId)) obj.unbondingId = BigInt(object.unbondingId.toString());
    if (isSet(object.unbondingOnHoldRefCount))
      obj.unbondingOnHoldRefCount = BigInt(object.unbondingOnHoldRefCount.toString());
    return obj;
  },
  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    message.unbondingOnHoldRefCount !== undefined &&
      (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    if (object.unbondingId !== undefined && object.unbondingId !== null) {
      message.unbondingId = BigInt(object.unbondingId.toString());
    }
    if (object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbondingOnHoldRefCount.toString());
    }
    return message;
  },
};
function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: [],
  };
}
export const Redelegation = {
  encode(message: Redelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Redelegation {
    const obj = createBaseRedelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorSrcAddress)) obj.validatorSrcAddress = String(object.validatorSrcAddress);
    if (isSet(object.validatorDstAddress)) obj.validatorDstAddress = String(object.validatorDstAddress);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => RedelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? RedelegationEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseParams(): Params {
  return {
    unbondingTime: Duration.fromPartial({}),
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: "",
    validatorBondFactor: "",
    globalLiquidStakingCap: "",
    validatorLiquidStakingCap: "",
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(message.minCommissionRate);
    }
    if (message.validatorBondFactor !== "") {
      writer.uint32(58).string(message.validatorBondFactor);
    }
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
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 6:
          message.minCommissionRate = reader.string();
          break;
        case 7:
          message.validatorBondFactor = reader.string();
          break;
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
    if (isSet(object.unbondingTime)) obj.unbondingTime = Duration.fromJSON(object.unbondingTime);
    if (isSet(object.maxValidators)) obj.maxValidators = Number(object.maxValidators);
    if (isSet(object.maxEntries)) obj.maxEntries = Number(object.maxEntries);
    if (isSet(object.historicalEntries)) obj.historicalEntries = Number(object.historicalEntries);
    if (isSet(object.bondDenom)) obj.bondDenom = String(object.bondDenom);
    if (isSet(object.minCommissionRate)) obj.minCommissionRate = String(object.minCommissionRate);
    if (isSet(object.validatorBondFactor)) obj.validatorBondFactor = String(object.validatorBondFactor);
    if (isSet(object.globalLiquidStakingCap))
      obj.globalLiquidStakingCap = String(object.globalLiquidStakingCap);
    if (isSet(object.validatorLiquidStakingCap))
      obj.validatorLiquidStakingCap = String(object.validatorLiquidStakingCap);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : undefined);
    message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = Math.round(message.historicalEntries));
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.minCommissionRate !== undefined && (obj.minCommissionRate = message.minCommissionRate);
    message.validatorBondFactor !== undefined && (obj.validatorBondFactor = message.validatorBondFactor);
    message.globalLiquidStakingCap !== undefined &&
      (obj.globalLiquidStakingCap = message.globalLiquidStakingCap);
    message.validatorLiquidStakingCap !== undefined &&
      (obj.validatorLiquidStakingCap = message.validatorLiquidStakingCap);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Duration.fromPartial(object.unbondingTime);
    }
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.validatorBondFactor = object.validatorBondFactor ?? "";
    message.globalLiquidStakingCap = object.globalLiquidStakingCap ?? "";
    message.validatorLiquidStakingCap = object.validatorLiquidStakingCap ?? "";
    return message;
  },
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({}),
  };
}
export const DelegationResponse = {
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationResponse {
    const obj = createBaseDelegationResponse();
    if (isSet(object.delegation)) obj.delegation = Delegation.fromJSON(object.delegation);
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    return obj;
  },
  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromPartial(object.delegation);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    return message;
  },
};
function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    redelegationEntry: RedelegationEntry.fromPartial({}),
    balance: "",
  };
}
export const RedelegationEntryResponse = {
  encode(message: RedelegationEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntryResponse {
    const obj = createBaseRedelegationEntryResponse();
    if (isSet(object.redelegationEntry))
      obj.redelegationEntry = RedelegationEntry.fromJSON(object.redelegationEntry);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    return obj;
  },
  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined &&
      (obj.redelegationEntry = message.redelegationEntry
        ? RedelegationEntry.toJSON(message.redelegationEntry)
        : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial(object: Partial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    if (object.redelegationEntry !== undefined && object.redelegationEntry !== null) {
      message.redelegationEntry = RedelegationEntry.fromPartial(object.redelegationEntry);
    }
    message.balance = object.balance ?? "";
    return message;
  },
};
function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: [],
  };
}
export const RedelegationResponse = {
  encode(message: RedelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationResponse {
    const obj = createBaseRedelegationResponse();
    if (isSet(object.redelegation)) obj.redelegation = Redelegation.fromJSON(object.redelegation);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e));
    return obj;
  },
  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined &&
      (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? RedelegationEntryResponse.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<RedelegationResponse>): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromPartial(object.redelegation);
    }
    message.entries = object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
};
function createBasePool(): Pool {
  return {
    notBondedTokens: "",
    bondedTokens: "",
  };
}
export const Pool = {
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.notBondedTokens)) obj.notBondedTokens = String(object.notBondedTokens);
    if (isSet(object.bondedTokens)) obj.bondedTokens = String(object.bondedTokens);
    return obj;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
    return message;
  },
};
function createBaseValidatorUpdates(): ValidatorUpdates {
  return {
    updates: [],
  };
}
export const ValidatorUpdates = {
  encode(message: ValidatorUpdates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorUpdates {
    const obj = createBaseValidatorUpdates();
    if (Array.isArray(object?.updates))
      obj.updates = object.updates.map((e: any) => ValidatorUpdate.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorUpdates): unknown {
    const obj: any = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.updates = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ValidatorUpdates>): ValidatorUpdates {
    const message = createBaseValidatorUpdates();
    message.updates = object.updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
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
