/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "pstake.lscosmos.v1beta1";

export interface AllowListedValidators {
  allowListedValidators: AllowListedValidator[];
}

export interface AllowListedValidator {
  /** validator_address defines the bech32-encoded address the allowlisted validator */
  validatorAddress: string;
  /**
   * target_weight specifies the target weight for liquid staking, unstaking amount, which is a value for calculating
   * the real weight to be derived according to the active status
   */
  targetWeight: string;
}

export interface PstakeParams {
  /** protocol fee in percentage */
  pstakeDepositFee: string;
  /** protocol fee in percentage */
  pstakeRestakeFee: string;
  /** protocol fee in percentage */
  pstakeUnstakeFee: string;
  /** protocol fee in percentage */
  pstakeRedemptionFee: string;
  pstakeFeeAddress: string;
}

/** HostChainParams go into the DB */
export interface HostChainParams {
  chainID: string;
  connectionID: string;
  transferChannel: string;
  transferPort: string;
  baseDenom: string;
  mintDenom: string;
  minDeposit: string;
  pstakeParams?: PstakeParams;
}

/** DelegationState stores module account balance, ica account balance, delegation state, undelegation state */
export interface DelegationState {
  /**
   * This field is necessary as the address of not blocked for send coins,
   * we only should care about funds that have come via proper channels.
   */
  hostDelegationAccountBalance: Coin[];
  hostChainDelegationAddress: string;
  hostAccountDelegations: HostAccountDelegation[];
  hostAccountUndelegations: HostAccountUndelegation[];
}

export interface HostAccountDelegation {
  validatorAddress: string;
  amount?: Coin;
}

export interface HostAccountUndelegation {
  epochNumber: Long;
  totalUndelegationAmount?: Coin;
  completionTime?: Date;
  undelegationEntries: UndelegationEntry[];
}

export interface UndelegationEntry {
  validatorAddress: string;
  amount?: Coin;
}

export interface HostChainRewardAddress {
  address: string;
}

export interface IBCAmountTransientStore {
  /** ibc_transfer stores only tokens which have ibc denoms "ibc/HEXHASH" */
  iBCTransfer: Coin[];
  /** ica_delegate stores only token which has staking baseDenom */
  iCADelegate?: Coin;
  undelegatonCompleteIBCTransfer: TransientUndelegationTransfer[];
}

export interface TransientUndelegationTransfer {
  epochNumber: Long;
  amountUnbonded?: Coin;
}

export interface UnbondingEpochCValue {
  epochNumber: Long;
  /** c_value = stk_burn.Amount/amount_unbonded.Amount */
  sTKBurn?: Coin;
  amountUnbonded?: Coin;
  isMatured: boolean;
  isFailed: boolean;
}

export interface DelegatorUnbondingEpochEntry {
  delegatorAddress: string;
  epochNumber: Long;
  amount?: Coin;
}

export interface HostAccounts {
  delegatorAccountOwnerID: string;
  rewardsAccountOwnerID: string;
}

function createBaseAllowListedValidators(): AllowListedValidators {
  return { allowListedValidators: [] };
}

export const AllowListedValidators = {
  encode(
    message: AllowListedValidators,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowListedValidators) {
      AllowListedValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllowListedValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowListedValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowListedValidators.push(
            AllowListedValidator.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowListedValidators {
    return {
      allowListedValidators: Array.isArray(object?.allowListedValidators)
        ? object.allowListedValidators.map((e: any) =>
            AllowListedValidator.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: AllowListedValidators): unknown {
    const obj: any = {};
    if (message.allowListedValidators) {
      obj.allowListedValidators = message.allowListedValidators.map((e) =>
        e ? AllowListedValidator.toJSON(e) : undefined
      );
    } else {
      obj.allowListedValidators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowListedValidators>, I>>(
    object: I
  ): AllowListedValidators {
    const message = createBaseAllowListedValidators();
    message.allowListedValidators =
      object.allowListedValidators?.map((e) =>
        AllowListedValidator.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseAllowListedValidator(): AllowListedValidator {
  return { validatorAddress: "", targetWeight: "" };
}

export const AllowListedValidator = {
  encode(
    message: AllowListedValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.targetWeight !== "") {
      writer.uint32(18).string(message.targetWeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllowListedValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowListedValidator();
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

  fromJSON(object: any): AllowListedValidator {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      targetWeight: isSet(object.targetWeight)
        ? String(object.targetWeight)
        : "",
    };
  },

  toJSON(message: AllowListedValidator): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.targetWeight !== undefined &&
      (obj.targetWeight = message.targetWeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowListedValidator>, I>>(
    object: I
  ): AllowListedValidator {
    const message = createBaseAllowListedValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    message.targetWeight = object.targetWeight ?? "";
    return message;
  },
};

function createBasePstakeParams(): PstakeParams {
  return {
    pstakeDepositFee: "",
    pstakeRestakeFee: "",
    pstakeUnstakeFee: "",
    pstakeRedemptionFee: "",
    pstakeFeeAddress: "",
  };
}

export const PstakeParams = {
  encode(
    message: PstakeParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pstakeDepositFee !== "") {
      writer.uint32(10).string(message.pstakeDepositFee);
    }
    if (message.pstakeRestakeFee !== "") {
      writer.uint32(18).string(message.pstakeRestakeFee);
    }
    if (message.pstakeUnstakeFee !== "") {
      writer.uint32(26).string(message.pstakeUnstakeFee);
    }
    if (message.pstakeRedemptionFee !== "") {
      writer.uint32(34).string(message.pstakeRedemptionFee);
    }
    if (message.pstakeFeeAddress !== "") {
      writer.uint32(42).string(message.pstakeFeeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PstakeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePstakeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pstakeDepositFee = reader.string();
          break;
        case 2:
          message.pstakeRestakeFee = reader.string();
          break;
        case 3:
          message.pstakeUnstakeFee = reader.string();
          break;
        case 4:
          message.pstakeRedemptionFee = reader.string();
          break;
        case 5:
          message.pstakeFeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PstakeParams {
    return {
      pstakeDepositFee: isSet(object.pstakeDepositFee)
        ? String(object.pstakeDepositFee)
        : "",
      pstakeRestakeFee: isSet(object.pstakeRestakeFee)
        ? String(object.pstakeRestakeFee)
        : "",
      pstakeUnstakeFee: isSet(object.pstakeUnstakeFee)
        ? String(object.pstakeUnstakeFee)
        : "",
      pstakeRedemptionFee: isSet(object.pstakeRedemptionFee)
        ? String(object.pstakeRedemptionFee)
        : "",
      pstakeFeeAddress: isSet(object.pstakeFeeAddress)
        ? String(object.pstakeFeeAddress)
        : "",
    };
  },

  toJSON(message: PstakeParams): unknown {
    const obj: any = {};
    message.pstakeDepositFee !== undefined &&
      (obj.pstakeDepositFee = message.pstakeDepositFee);
    message.pstakeRestakeFee !== undefined &&
      (obj.pstakeRestakeFee = message.pstakeRestakeFee);
    message.pstakeUnstakeFee !== undefined &&
      (obj.pstakeUnstakeFee = message.pstakeUnstakeFee);
    message.pstakeRedemptionFee !== undefined &&
      (obj.pstakeRedemptionFee = message.pstakeRedemptionFee);
    message.pstakeFeeAddress !== undefined &&
      (obj.pstakeFeeAddress = message.pstakeFeeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PstakeParams>, I>>(
    object: I
  ): PstakeParams {
    const message = createBasePstakeParams();
    message.pstakeDepositFee = object.pstakeDepositFee ?? "";
    message.pstakeRestakeFee = object.pstakeRestakeFee ?? "";
    message.pstakeUnstakeFee = object.pstakeUnstakeFee ?? "";
    message.pstakeRedemptionFee = object.pstakeRedemptionFee ?? "";
    message.pstakeFeeAddress = object.pstakeFeeAddress ?? "";
    return message;
  },
};

function createBaseHostChainParams(): HostChainParams {
  return {
    chainID: "",
    connectionID: "",
    transferChannel: "",
    transferPort: "",
    baseDenom: "",
    mintDenom: "",
    minDeposit: "",
    pstakeParams: undefined,
  };
}

export const HostChainParams = {
  encode(
    message: HostChainParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.connectionID !== "") {
      writer.uint32(18).string(message.connectionID);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.transferPort !== "") {
      writer.uint32(34).string(message.transferPort);
    }
    if (message.baseDenom !== "") {
      writer.uint32(42).string(message.baseDenom);
    }
    if (message.mintDenom !== "") {
      writer.uint32(50).string(message.mintDenom);
    }
    if (message.minDeposit !== "") {
      writer.uint32(58).string(message.minDeposit);
    }
    if (message.pstakeParams !== undefined) {
      PstakeParams.encode(
        message.pstakeParams,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.connectionID = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.transferPort = reader.string();
          break;
        case 5:
          message.baseDenom = reader.string();
          break;
        case 6:
          message.mintDenom = reader.string();
          break;
        case 7:
          message.minDeposit = reader.string();
          break;
        case 8:
          message.pstakeParams = PstakeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostChainParams {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      connectionID: isSet(object.connectionID)
        ? String(object.connectionID)
        : "",
      transferChannel: isSet(object.transferChannel)
        ? String(object.transferChannel)
        : "",
      transferPort: isSet(object.transferPort)
        ? String(object.transferPort)
        : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      minDeposit: isSet(object.minDeposit) ? String(object.minDeposit) : "",
      pstakeParams: isSet(object.pstakeParams)
        ? PstakeParams.fromJSON(object.pstakeParams)
        : undefined,
    };
  },

  toJSON(message: HostChainParams): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.connectionID !== undefined &&
      (obj.connectionID = message.connectionID);
    message.transferChannel !== undefined &&
      (obj.transferChannel = message.transferChannel);
    message.transferPort !== undefined &&
      (obj.transferPort = message.transferPort);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    message.pstakeParams !== undefined &&
      (obj.pstakeParams = message.pstakeParams
        ? PstakeParams.toJSON(message.pstakeParams)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostChainParams>, I>>(
    object: I
  ): HostChainParams {
    const message = createBaseHostChainParams();
    message.chainID = object.chainID ?? "";
    message.connectionID = object.connectionID ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.transferPort = object.transferPort ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.mintDenom = object.mintDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    message.pstakeParams =
      object.pstakeParams !== undefined && object.pstakeParams !== null
        ? PstakeParams.fromPartial(object.pstakeParams)
        : undefined;
    return message;
  },
};

function createBaseDelegationState(): DelegationState {
  return {
    hostDelegationAccountBalance: [],
    hostChainDelegationAddress: "",
    hostAccountDelegations: [],
    hostAccountUndelegations: [],
  };
}

export const DelegationState = {
  encode(
    message: DelegationState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.hostDelegationAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostChainDelegationAddress !== "") {
      writer.uint32(18).string(message.hostChainDelegationAddress);
    }
    for (const v of message.hostAccountDelegations) {
      HostAccountDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hostAccountUndelegations) {
      HostAccountUndelegation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostDelegationAccountBalance.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.hostChainDelegationAddress = reader.string();
          break;
        case 3:
          message.hostAccountDelegations.push(
            HostAccountDelegation.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.hostAccountUndelegations.push(
            HostAccountUndelegation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationState {
    return {
      hostDelegationAccountBalance: Array.isArray(
        object?.hostDelegationAccountBalance
      )
        ? object.hostDelegationAccountBalance.map((e: any) => Coin.fromJSON(e))
        : [],
      hostChainDelegationAddress: isSet(object.hostChainDelegationAddress)
        ? String(object.hostChainDelegationAddress)
        : "",
      hostAccountDelegations: Array.isArray(object?.hostAccountDelegations)
        ? object.hostAccountDelegations.map((e: any) =>
            HostAccountDelegation.fromJSON(e)
          )
        : [],
      hostAccountUndelegations: Array.isArray(object?.hostAccountUndelegations)
        ? object.hostAccountUndelegations.map((e: any) =>
            HostAccountUndelegation.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: DelegationState): unknown {
    const obj: any = {};
    if (message.hostDelegationAccountBalance) {
      obj.hostDelegationAccountBalance =
        message.hostDelegationAccountBalance.map((e) =>
          e ? Coin.toJSON(e) : undefined
        );
    } else {
      obj.hostDelegationAccountBalance = [];
    }
    message.hostChainDelegationAddress !== undefined &&
      (obj.hostChainDelegationAddress = message.hostChainDelegationAddress);
    if (message.hostAccountDelegations) {
      obj.hostAccountDelegations = message.hostAccountDelegations.map((e) =>
        e ? HostAccountDelegation.toJSON(e) : undefined
      );
    } else {
      obj.hostAccountDelegations = [];
    }
    if (message.hostAccountUndelegations) {
      obj.hostAccountUndelegations = message.hostAccountUndelegations.map((e) =>
        e ? HostAccountUndelegation.toJSON(e) : undefined
      );
    } else {
      obj.hostAccountUndelegations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationState>, I>>(
    object: I
  ): DelegationState {
    const message = createBaseDelegationState();
    message.hostDelegationAccountBalance =
      object.hostDelegationAccountBalance?.map((e) => Coin.fromPartial(e)) ||
      [];
    message.hostChainDelegationAddress =
      object.hostChainDelegationAddress ?? "";
    message.hostAccountDelegations =
      object.hostAccountDelegations?.map((e) =>
        HostAccountDelegation.fromPartial(e)
      ) || [];
    message.hostAccountUndelegations =
      object.hostAccountUndelegations?.map((e) =>
        HostAccountUndelegation.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseHostAccountDelegation(): HostAccountDelegation {
  return { validatorAddress: "", amount: undefined };
}

export const HostAccountDelegation = {
  encode(
    message: HostAccountDelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HostAccountDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccountDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostAccountDelegation {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: HostAccountDelegation): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostAccountDelegation>, I>>(
    object: I
  ): HostAccountDelegation {
    const message = createBaseHostAccountDelegation();
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseHostAccountUndelegation(): HostAccountUndelegation {
  return {
    epochNumber: Long.ZERO,
    totalUndelegationAmount: undefined,
    completionTime: undefined,
    undelegationEntries: [],
  };
}

export const HostAccountUndelegation = {
  encode(
    message: HostAccountUndelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.totalUndelegationAmount !== undefined) {
      Coin.encode(
        message.totalUndelegationAmount,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.undelegationEntries) {
      UndelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HostAccountUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccountUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        case 2:
          message.totalUndelegationAmount = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.undelegationEntries.push(
            UndelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostAccountUndelegation {
    return {
      epochNumber: isSet(object.epochNumber)
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO,
      totalUndelegationAmount: isSet(object.totalUndelegationAmount)
        ? Coin.fromJSON(object.totalUndelegationAmount)
        : undefined,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
      undelegationEntries: Array.isArray(object?.undelegationEntries)
        ? object.undelegationEntries.map((e: any) =>
            UndelegationEntry.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: HostAccountUndelegation): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.totalUndelegationAmount !== undefined &&
      (obj.totalUndelegationAmount = message.totalUndelegationAmount
        ? Coin.toJSON(message.totalUndelegationAmount)
        : undefined);
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    if (message.undelegationEntries) {
      obj.undelegationEntries = message.undelegationEntries.map((e) =>
        e ? UndelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.undelegationEntries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostAccountUndelegation>, I>>(
    object: I
  ): HostAccountUndelegation {
    const message = createBaseHostAccountUndelegation();
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.totalUndelegationAmount =
      object.totalUndelegationAmount !== undefined &&
      object.totalUndelegationAmount !== null
        ? Coin.fromPartial(object.totalUndelegationAmount)
        : undefined;
    message.completionTime = object.completionTime ?? undefined;
    message.undelegationEntries =
      object.undelegationEntries?.map((e) =>
        UndelegationEntry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseUndelegationEntry(): UndelegationEntry {
  return { validatorAddress: "", amount: undefined };
}

export const UndelegationEntry = {
  encode(
    message: UndelegationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegationEntry {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: UndelegationEntry): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegationEntry>, I>>(
    object: I
  ): UndelegationEntry {
    const message = createBaseUndelegationEntry();
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseHostChainRewardAddress(): HostChainRewardAddress {
  return { address: "" };
}

export const HostChainRewardAddress = {
  encode(
    message: HostChainRewardAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HostChainRewardAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainRewardAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostChainRewardAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: HostChainRewardAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostChainRewardAddress>, I>>(
    object: I
  ): HostChainRewardAddress {
    const message = createBaseHostChainRewardAddress();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseIBCAmountTransientStore(): IBCAmountTransientStore {
  return {
    iBCTransfer: [],
    iCADelegate: undefined,
    undelegatonCompleteIBCTransfer: [],
  };
}

export const IBCAmountTransientStore = {
  encode(
    message: IBCAmountTransientStore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.iBCTransfer) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.iCADelegate !== undefined) {
      Coin.encode(message.iCADelegate, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.undelegatonCompleteIBCTransfer) {
      TransientUndelegationTransfer.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IBCAmountTransientStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCAmountTransientStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iBCTransfer.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.iCADelegate = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.undelegatonCompleteIBCTransfer.push(
            TransientUndelegationTransfer.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCAmountTransientStore {
    return {
      iBCTransfer: Array.isArray(object?.iBCTransfer)
        ? object.iBCTransfer.map((e: any) => Coin.fromJSON(e))
        : [],
      iCADelegate: isSet(object.iCADelegate)
        ? Coin.fromJSON(object.iCADelegate)
        : undefined,
      undelegatonCompleteIBCTransfer: Array.isArray(
        object?.undelegatonCompleteIBCTransfer
      )
        ? object.undelegatonCompleteIBCTransfer.map((e: any) =>
            TransientUndelegationTransfer.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: IBCAmountTransientStore): unknown {
    const obj: any = {};
    if (message.iBCTransfer) {
      obj.iBCTransfer = message.iBCTransfer.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.iBCTransfer = [];
    }
    message.iCADelegate !== undefined &&
      (obj.iCADelegate = message.iCADelegate
        ? Coin.toJSON(message.iCADelegate)
        : undefined);
    if (message.undelegatonCompleteIBCTransfer) {
      obj.undelegatonCompleteIBCTransfer =
        message.undelegatonCompleteIBCTransfer.map((e) =>
          e ? TransientUndelegationTransfer.toJSON(e) : undefined
        );
    } else {
      obj.undelegatonCompleteIBCTransfer = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCAmountTransientStore>, I>>(
    object: I
  ): IBCAmountTransientStore {
    const message = createBaseIBCAmountTransientStore();
    message.iBCTransfer =
      object.iBCTransfer?.map((e) => Coin.fromPartial(e)) || [];
    message.iCADelegate =
      object.iCADelegate !== undefined && object.iCADelegate !== null
        ? Coin.fromPartial(object.iCADelegate)
        : undefined;
    message.undelegatonCompleteIBCTransfer =
      object.undelegatonCompleteIBCTransfer?.map((e) =>
        TransientUndelegationTransfer.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseTransientUndelegationTransfer(): TransientUndelegationTransfer {
  return { epochNumber: Long.ZERO, amountUnbonded: undefined };
}

export const TransientUndelegationTransfer = {
  encode(
    message: TransientUndelegationTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.amountUnbonded !== undefined) {
      Coin.encode(message.amountUnbonded, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransientUndelegationTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransientUndelegationTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        case 2:
          message.amountUnbonded = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransientUndelegationTransfer {
    return {
      epochNumber: isSet(object.epochNumber)
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO,
      amountUnbonded: isSet(object.amountUnbonded)
        ? Coin.fromJSON(object.amountUnbonded)
        : undefined,
    };
  },

  toJSON(message: TransientUndelegationTransfer): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.amountUnbonded !== undefined &&
      (obj.amountUnbonded = message.amountUnbonded
        ? Coin.toJSON(message.amountUnbonded)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransientUndelegationTransfer>, I>>(
    object: I
  ): TransientUndelegationTransfer {
    const message = createBaseTransientUndelegationTransfer();
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.amountUnbonded =
      object.amountUnbonded !== undefined && object.amountUnbonded !== null
        ? Coin.fromPartial(object.amountUnbonded)
        : undefined;
    return message;
  },
};

function createBaseUnbondingEpochCValue(): UnbondingEpochCValue {
  return {
    epochNumber: Long.ZERO,
    sTKBurn: undefined,
    amountUnbonded: undefined,
    isMatured: false,
    isFailed: false,
  };
}

export const UnbondingEpochCValue = {
  encode(
    message: UnbondingEpochCValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.sTKBurn !== undefined) {
      Coin.encode(message.sTKBurn, writer.uint32(18).fork()).ldelim();
    }
    if (message.amountUnbonded !== undefined) {
      Coin.encode(message.amountUnbonded, writer.uint32(26).fork()).ldelim();
    }
    if (message.isMatured === true) {
      writer.uint32(32).bool(message.isMatured);
    }
    if (message.isFailed === true) {
      writer.uint32(40).bool(message.isFailed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnbondingEpochCValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingEpochCValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64() as Long;
          break;
        case 2:
          message.sTKBurn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.amountUnbonded = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.isMatured = reader.bool();
          break;
        case 5:
          message.isFailed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingEpochCValue {
    return {
      epochNumber: isSet(object.epochNumber)
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO,
      sTKBurn: isSet(object.sTKBurn)
        ? Coin.fromJSON(object.sTKBurn)
        : undefined,
      amountUnbonded: isSet(object.amountUnbonded)
        ? Coin.fromJSON(object.amountUnbonded)
        : undefined,
      isMatured: isSet(object.isMatured) ? Boolean(object.isMatured) : false,
      isFailed: isSet(object.isFailed) ? Boolean(object.isFailed) : false,
    };
  },

  toJSON(message: UnbondingEpochCValue): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.sTKBurn !== undefined &&
      (obj.sTKBurn = message.sTKBurn
        ? Coin.toJSON(message.sTKBurn)
        : undefined);
    message.amountUnbonded !== undefined &&
      (obj.amountUnbonded = message.amountUnbonded
        ? Coin.toJSON(message.amountUnbonded)
        : undefined);
    message.isMatured !== undefined && (obj.isMatured = message.isMatured);
    message.isFailed !== undefined && (obj.isFailed = message.isFailed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingEpochCValue>, I>>(
    object: I
  ): UnbondingEpochCValue {
    const message = createBaseUnbondingEpochCValue();
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.sTKBurn =
      object.sTKBurn !== undefined && object.sTKBurn !== null
        ? Coin.fromPartial(object.sTKBurn)
        : undefined;
    message.amountUnbonded =
      object.amountUnbonded !== undefined && object.amountUnbonded !== null
        ? Coin.fromPartial(object.amountUnbonded)
        : undefined;
    message.isMatured = object.isMatured ?? false;
    message.isFailed = object.isFailed ?? false;
    return message;
  },
};

function createBaseDelegatorUnbondingEpochEntry(): DelegatorUnbondingEpochEntry {
  return { delegatorAddress: "", epochNumber: Long.ZERO, amount: undefined };
}

export const DelegatorUnbondingEpochEntry = {
  encode(
    message: DelegatorUnbondingEpochEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (!message.epochNumber.isZero()) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DelegatorUnbondingEpochEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorUnbondingEpochEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegatorUnbondingEpochEntry {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      epochNumber: isSet(object.epochNumber)
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: DelegatorUnbondingEpochEntry): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.epochNumber !== undefined &&
      (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorUnbondingEpochEntry>, I>>(
    object: I
  ): DelegatorUnbondingEpochEntry {
    const message = createBaseDelegatorUnbondingEpochEntry();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseHostAccounts(): HostAccounts {
  return { delegatorAccountOwnerID: "", rewardsAccountOwnerID: "" };
}

export const HostAccounts = {
  encode(
    message: HostAccounts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAccountOwnerID !== "") {
      writer.uint32(10).string(message.delegatorAccountOwnerID);
    }
    if (message.rewardsAccountOwnerID !== "") {
      writer.uint32(18).string(message.rewardsAccountOwnerID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HostAccounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAccountOwnerID = reader.string();
          break;
        case 2:
          message.rewardsAccountOwnerID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HostAccounts {
    return {
      delegatorAccountOwnerID: isSet(object.delegatorAccountOwnerID)
        ? String(object.delegatorAccountOwnerID)
        : "",
      rewardsAccountOwnerID: isSet(object.rewardsAccountOwnerID)
        ? String(object.rewardsAccountOwnerID)
        : "",
    };
  },

  toJSON(message: HostAccounts): unknown {
    const obj: any = {};
    message.delegatorAccountOwnerID !== undefined &&
      (obj.delegatorAccountOwnerID = message.delegatorAccountOwnerID);
    message.rewardsAccountOwnerID !== undefined &&
      (obj.rewardsAccountOwnerID = message.rewardsAccountOwnerID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HostAccounts>, I>>(
    object: I
  ): HostAccounts {
    const message = createBaseHostAccounts();
    message.delegatorAccountOwnerID = object.delegatorAccountOwnerID ?? "";
    message.rewardsAccountOwnerID = object.rewardsAccountOwnerID ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
