/* eslint-disable */
import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  /** Vesting end time, as unix timestamp (in seconds). */
  endTime: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
  baseVestingAccount: BaseVestingAccount;
  /** Vesting start time, as unix timestamp (in seconds). */
  startTime: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
  baseVestingAccount: BaseVestingAccount;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  /** Period duration in seconds. */
  length: bigint;
  amount: Coin[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
  baseVestingAccount: BaseVestingAccount;
  startTime: bigint;
  vestingPeriods: Period[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
  baseVestingAccount: BaseVestingAccount;
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: BaseAccount.fromPartial({}),
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt(0),
  };
}
export const BaseVestingAccount = {
  encode(message: BaseVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseVestingAccount {
    const obj = createBaseBaseVestingAccount();
    if (isSet(object.baseAccount)) obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    if (Array.isArray(object?.originalVesting))
      obj.originalVesting = object.originalVesting.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.delegatedFree))
      obj.delegatedFree = object.delegatedFree.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.delegatedVesting))
      obj.delegatedVesting = object.delegatedVesting.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.endTime)) obj.endTime = BigInt(object.endTime.toString());
    return obj;
  },
  toJSON(message: BaseVestingAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
    }
    message.originalVesting = object.originalVesting?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map((e) => Coin.fromPartial(e)) || [];
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = BigInt(object.endTime.toString());
    }
    return message;
  },
};
function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    baseVestingAccount: BaseVestingAccount.fromPartial({}),
    startTime: BigInt(0),
  };
}
export const ContinuousVestingAccount = {
  encode(message: ContinuousVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContinuousVestingAccount {
    const obj = createBaseContinuousVestingAccount();
    if (isSet(object.baseVestingAccount))
      obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    if (isSet(object.startTime)) obj.startTime = BigInt(object.startTime.toString());
    return obj;
  },
  toJSON(message: ContinuousVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ContinuousVestingAccount>): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = BigInt(object.startTime.toString());
    }
    return message;
  },
};
function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    baseVestingAccount: BaseVestingAccount.fromPartial({}),
  };
}
export const DelayedVestingAccount = {
  encode(message: DelayedVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelayedVestingAccount {
    const obj = createBaseDelayedVestingAccount();
    if (isSet(object.baseVestingAccount))
      obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    return obj;
  },
  toJSON(message: DelayedVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<DelayedVestingAccount>): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    return message;
  },
};
function createBasePeriod(): Period {
  return {
    length: BigInt(0),
    amount: [],
  };
}
export const Period = {
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Period {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Period {
    const obj = createBasePeriod();
    if (isSet(object.length)) obj.length = BigInt(object.length.toString());
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Period): unknown {
    const obj: any = {};
    message.length !== undefined && (obj.length = (message.length || BigInt(0)).toString());
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Period>): Period {
    const message = createBasePeriod();
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length.toString());
    }
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    baseVestingAccount: BaseVestingAccount.fromPartial({}),
    startTime: BigInt(0),
    vestingPeriods: [],
  };
}
export const PeriodicVestingAccount = {
  encode(message: PeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64();
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicVestingAccount {
    const obj = createBasePeriodicVestingAccount();
    if (isSet(object.baseVestingAccount))
      obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    if (isSet(object.startTime)) obj.startTime = BigInt(object.startTime.toString());
    if (Array.isArray(object?.vestingPeriods))
      obj.vestingPeriods = object.vestingPeriods.map((e: any) => Period.fromJSON(e));
    return obj;
  },
  toJSON(message: PeriodicVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PeriodicVestingAccount>): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = BigInt(object.startTime.toString());
    }
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
};
function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    baseVestingAccount: BaseVestingAccount.fromPartial({}),
  };
}
export const PermanentLockedAccount = {
  encode(message: PermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PermanentLockedAccount {
    const obj = createBasePermanentLockedAccount();
    if (isSet(object.baseVestingAccount))
      obj.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
    return obj;
  },
  toJSON(message: PermanentLockedAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<PermanentLockedAccount>): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    if (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
    }
    return message;
  },
};
