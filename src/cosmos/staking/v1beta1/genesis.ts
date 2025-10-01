/* eslint-disable */
import {
  Params,
  Validator,
  Delegation,
  UnbondingDelegation,
  Redelegation,
  TokenizeShareRecord,
} from "./staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /** validators defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  /** exported defines a bool to identify whether the chain dealing with exported or initialized genesis. */
  exported: boolean;
  /** store tokenize share records to provide reward to record owners */
  tokenizeShareRecords: TokenizeShareRecord[];
  /** last tokenize share record id, used for next share record id calculation */
  lastTokenizeShareRecordId: bigint;
  /** total number of liquid staked tokens at genesis */
  totalLiquidStakedTokens: Uint8Array;
  /** tokenize shares locks at genesis */
  tokenizeShareLocks: TokenizeShareLock[];
}
/** TokenizeSharesLock required for specifying account locks at genesis */
export interface TokenizeShareLock {
  /** Address of the account that is locked */
  address: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status: string;
  /** Completion time if the lock is expiring */
  completionTime: Timestamp;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
    tokenizeShareRecords: [],
    lastTokenizeShareRecordId: BigInt(0),
    totalLiquidStakedTokens: new Uint8Array(),
    tokenizeShareLocks: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    for (const v of message.tokenizeShareRecords) {
      TokenizeShareRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastTokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
          break;
        case 9:
          message.tokenizeShareRecords.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.lastTokenizeShareRecordId = reader.uint64();
          break;
        case 11:
          message.totalLiquidStakedTokens = reader.bytes();
          break;
        case 12:
          message.tokenizeShareLocks.push(TokenizeShareLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.lastTotalPower)) obj.lastTotalPower = bytesFromBase64(object.lastTotalPower);
    if (Array.isArray(object?.lastValidatorPowers))
      obj.lastValidatorPowers = object.lastValidatorPowers.map((e: any) => LastValidatorPower.fromJSON(e));
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (Array.isArray(object?.delegations))
      obj.delegations = object.delegations.map((e: any) => Delegation.fromJSON(e));
    if (Array.isArray(object?.unbondingDelegations))
      obj.unbondingDelegations = object.unbondingDelegations.map((e: any) => UnbondingDelegation.fromJSON(e));
    if (Array.isArray(object?.redelegations))
      obj.redelegations = object.redelegations.map((e: any) => Redelegation.fromJSON(e));
    if (isSet(object.exported)) obj.exported = Boolean(object.exported);
    if (Array.isArray(object?.tokenizeShareRecords))
      obj.tokenizeShareRecords = object.tokenizeShareRecords.map((e: any) => TokenizeShareRecord.fromJSON(e));
    if (isSet(object.lastTokenizeShareRecordId))
      obj.lastTokenizeShareRecordId = BigInt(object.lastTokenizeShareRecordId.toString());
    if (isSet(object.totalLiquidStakedTokens))
      obj.totalLiquidStakedTokens = bytesFromBase64(object.totalLiquidStakedTokens);
    if (Array.isArray(object?.tokenizeShareLocks))
      obj.tokenizeShareLocks = object.tokenizeShareLocks.map((e: any) => TokenizeShareLock.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastTotalPower !== undefined &&
      (obj.lastTotalPower = base64FromBytes(
        message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array(),
      ));
    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map((e) =>
        e ? LastValidatorPower.toJSON(e) : undefined,
      );
    } else {
      obj.lastValidatorPowers = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => (e ? Delegation.toJSON(e) : undefined));
    } else {
      obj.delegations = [];
    }
    if (message.unbondingDelegations) {
      obj.unbondingDelegations = message.unbondingDelegations.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingDelegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => (e ? Redelegation.toJSON(e) : undefined));
    } else {
      obj.redelegations = [];
    }
    message.exported !== undefined && (obj.exported = message.exported);
    if (message.tokenizeShareRecords) {
      obj.tokenizeShareRecords = message.tokenizeShareRecords.map((e) =>
        e ? TokenizeShareRecord.toJSON(e) : undefined,
      );
    } else {
      obj.tokenizeShareRecords = [];
    }
    message.lastTokenizeShareRecordId !== undefined &&
      (obj.lastTokenizeShareRecordId = (message.lastTokenizeShareRecordId || BigInt(0)).toString());
    message.totalLiquidStakedTokens !== undefined &&
      (obj.totalLiquidStakedTokens = base64FromBytes(
        message.totalLiquidStakedTokens !== undefined ? message.totalLiquidStakedTokens : new Uint8Array(),
      ));
    if (message.tokenizeShareLocks) {
      obj.tokenizeShareLocks = message.tokenizeShareLocks.map((e) =>
        e ? TokenizeShareLock.toJSON(e) : undefined,
      );
    } else {
      obj.tokenizeShareLocks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers =
      object.lastValidatorPowers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations =
      object.unbondingDelegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    message.tokenizeShareRecords =
      object.tokenizeShareRecords?.map((e) => TokenizeShareRecord.fromPartial(e)) || [];
    if (object.lastTokenizeShareRecordId !== undefined && object.lastTokenizeShareRecordId !== null) {
      message.lastTokenizeShareRecordId = BigInt(object.lastTokenizeShareRecordId.toString());
    }
    message.totalLiquidStakedTokens = object.totalLiquidStakedTokens ?? new Uint8Array();
    message.tokenizeShareLocks =
      object.tokenizeShareLocks?.map((e) => TokenizeShareLock.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTokenizeShareLock(): TokenizeShareLock {
  return {
    address: "",
    status: "",
    completionTime: Timestamp.fromPartial({}),
  };
}
export const TokenizeShareLock = {
  encode(message: TokenizeShareLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenizeShareLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenizeShareLock {
    const obj = createBaseTokenizeShareLock();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.status)) obj.status = String(object.status);
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    return obj;
  },
  toJSON(message: TokenizeShareLock): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = message.status);
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<TokenizeShareLock>): TokenizeShareLock {
    const message = createBaseTokenizeShareLock();
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    return message;
  },
};
function createBaseLastValidatorPower(): LastValidatorPower {
  return {
    address: "",
    power: BigInt(0),
  };
}
export const LastValidatorPower = {
  encode(message: LastValidatorPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastValidatorPower {
    const obj = createBaseLastValidatorPower();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  toJSON(message: LastValidatorPower): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
};
