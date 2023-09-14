/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
export interface AllowListedValidators {
  allowListedValidators: AllowListedValidator[];
}
export interface AllowListedValidator {
  /**
   * validator_address defines the bech32-encoded address the allowlisted
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
export interface PstakeParams {
  pstakeDepositFee: string;
  pstakeRestakeFee: string;
  pstakeUnstakeFee: string;
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
  pstakeParams: PstakeParams;
}
/**
 * DelegationState stores module account balance, ica account balance,
 * delegation state, undelegation state
 */
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
  amount: Coin;
}
export interface HostAccountUndelegation {
  epochNumber: bigint;
  totalUndelegationAmount: Coin;
  completionTime: Timestamp;
  undelegationEntries: UndelegationEntry[];
}
export interface UndelegationEntry {
  validatorAddress: string;
  amount: Coin;
}
export interface HostChainRewardAddress {
  address: string;
}
export interface IBCAmountTransientStore {
  /** ibc_transfer stores only tokens which have ibc denoms "ibc/HEXHASH" */
  iBCTransfer: Coin[];
  /** ica_delegate stores only token which has staking baseDenom */
  iCADelegate: Coin;
  undelegatonCompleteIBCTransfer: TransientUndelegationTransfer[];
}
export interface TransientUndelegationTransfer {
  epochNumber: bigint;
  amountUnbonded: Coin;
}
export interface UnbondingEpochCValue {
  epochNumber: bigint;
  /** c_value = stk_burn.Amount/amount_unbonded.Amount */
  sTKBurn: Coin;
  amountUnbonded: Coin;
  isMatured: boolean;
  isFailed: boolean;
}
export interface DelegatorUnbondingEpochEntry {
  delegatorAddress: string;
  epochNumber: bigint;
  amount: Coin;
}
export interface HostAccounts {
  delegatorAccountOwnerID: string;
  rewardsAccountOwnerID: string;
}
function createBaseAllowListedValidators(): AllowListedValidators {
  return {
    allowListedValidators: [],
  };
}
export const AllowListedValidators = {
  encode(message: AllowListedValidators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowListedValidators) {
      AllowListedValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowListedValidators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowListedValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowListedValidators.push(AllowListedValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllowListedValidators {
    const obj = createBaseAllowListedValidators();
    if (Array.isArray(object?.allowListedValidators))
      obj.allowListedValidators = object.allowListedValidators.map((e: any) =>
        AllowListedValidator.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: AllowListedValidators): unknown {
    const obj: any = {};
    if (message.allowListedValidators) {
      obj.allowListedValidators = message.allowListedValidators.map((e) =>
        e ? AllowListedValidator.toJSON(e) : undefined,
      );
    } else {
      obj.allowListedValidators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AllowListedValidators>): AllowListedValidators {
    const message = createBaseAllowListedValidators();
    message.allowListedValidators =
      object.allowListedValidators?.map((e) => AllowListedValidator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseAllowListedValidator(): AllowListedValidator {
  return {
    validatorAddress: "",
    targetWeight: "",
  };
}
export const AllowListedValidator = {
  encode(message: AllowListedValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.targetWeight !== "") {
      writer.uint32(18).string(message.targetWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowListedValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseAllowListedValidator();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.targetWeight)) obj.targetWeight = String(object.targetWeight);
    return obj;
  },
  toJSON(message: AllowListedValidator): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.targetWeight !== undefined && (obj.targetWeight = message.targetWeight);
    return obj;
  },
  fromPartial(object: Partial<AllowListedValidator>): AllowListedValidator {
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
  encode(message: PstakeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PstakeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBasePstakeParams();
    if (isSet(object.pstakeDepositFee)) obj.pstakeDepositFee = String(object.pstakeDepositFee);
    if (isSet(object.pstakeRestakeFee)) obj.pstakeRestakeFee = String(object.pstakeRestakeFee);
    if (isSet(object.pstakeUnstakeFee)) obj.pstakeUnstakeFee = String(object.pstakeUnstakeFee);
    if (isSet(object.pstakeRedemptionFee)) obj.pstakeRedemptionFee = String(object.pstakeRedemptionFee);
    if (isSet(object.pstakeFeeAddress)) obj.pstakeFeeAddress = String(object.pstakeFeeAddress);
    return obj;
  },
  toJSON(message: PstakeParams): unknown {
    const obj: any = {};
    message.pstakeDepositFee !== undefined && (obj.pstakeDepositFee = message.pstakeDepositFee);
    message.pstakeRestakeFee !== undefined && (obj.pstakeRestakeFee = message.pstakeRestakeFee);
    message.pstakeUnstakeFee !== undefined && (obj.pstakeUnstakeFee = message.pstakeUnstakeFee);
    message.pstakeRedemptionFee !== undefined && (obj.pstakeRedemptionFee = message.pstakeRedemptionFee);
    message.pstakeFeeAddress !== undefined && (obj.pstakeFeeAddress = message.pstakeFeeAddress);
    return obj;
  },
  fromPartial(object: Partial<PstakeParams>): PstakeParams {
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
    pstakeParams: PstakeParams.fromPartial({}),
  };
}
export const HostChainParams = {
  encode(message: HostChainParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      PstakeParams.encode(message.pstakeParams, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChainParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseHostChainParams();
    if (isSet(object.chainID)) obj.chainID = String(object.chainID);
    if (isSet(object.connectionID)) obj.connectionID = String(object.connectionID);
    if (isSet(object.transferChannel)) obj.transferChannel = String(object.transferChannel);
    if (isSet(object.transferPort)) obj.transferPort = String(object.transferPort);
    if (isSet(object.baseDenom)) obj.baseDenom = String(object.baseDenom);
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (isSet(object.minDeposit)) obj.minDeposit = String(object.minDeposit);
    if (isSet(object.pstakeParams)) obj.pstakeParams = PstakeParams.fromJSON(object.pstakeParams);
    return obj;
  },
  toJSON(message: HostChainParams): unknown {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.connectionID !== undefined && (obj.connectionID = message.connectionID);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.transferPort !== undefined && (obj.transferPort = message.transferPort);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    message.pstakeParams !== undefined &&
      (obj.pstakeParams = message.pstakeParams ? PstakeParams.toJSON(message.pstakeParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HostChainParams>): HostChainParams {
    const message = createBaseHostChainParams();
    message.chainID = object.chainID ?? "";
    message.connectionID = object.connectionID ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.transferPort = object.transferPort ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.mintDenom = object.mintDenom ?? "";
    message.minDeposit = object.minDeposit ?? "";
    if (object.pstakeParams !== undefined && object.pstakeParams !== null) {
      message.pstakeParams = PstakeParams.fromPartial(object.pstakeParams);
    }
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
  encode(message: DelegationState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostDelegationAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.hostChainDelegationAddress = reader.string();
          break;
        case 3:
          message.hostAccountDelegations.push(HostAccountDelegation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hostAccountUndelegations.push(HostAccountUndelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationState {
    const obj = createBaseDelegationState();
    if (Array.isArray(object?.hostDelegationAccountBalance))
      obj.hostDelegationAccountBalance = object.hostDelegationAccountBalance.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (isSet(object.hostChainDelegationAddress))
      obj.hostChainDelegationAddress = String(object.hostChainDelegationAddress);
    if (Array.isArray(object?.hostAccountDelegations))
      obj.hostAccountDelegations = object.hostAccountDelegations.map((e: any) =>
        HostAccountDelegation.fromJSON(e),
      );
    if (Array.isArray(object?.hostAccountUndelegations))
      obj.hostAccountUndelegations = object.hostAccountUndelegations.map((e: any) =>
        HostAccountUndelegation.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: DelegationState): unknown {
    const obj: any = {};
    if (message.hostDelegationAccountBalance) {
      obj.hostDelegationAccountBalance = message.hostDelegationAccountBalance.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.hostDelegationAccountBalance = [];
    }
    message.hostChainDelegationAddress !== undefined &&
      (obj.hostChainDelegationAddress = message.hostChainDelegationAddress);
    if (message.hostAccountDelegations) {
      obj.hostAccountDelegations = message.hostAccountDelegations.map((e) =>
        e ? HostAccountDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.hostAccountDelegations = [];
    }
    if (message.hostAccountUndelegations) {
      obj.hostAccountUndelegations = message.hostAccountUndelegations.map((e) =>
        e ? HostAccountUndelegation.toJSON(e) : undefined,
      );
    } else {
      obj.hostAccountUndelegations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DelegationState>): DelegationState {
    const message = createBaseDelegationState();
    message.hostDelegationAccountBalance =
      object.hostDelegationAccountBalance?.map((e) => Coin.fromPartial(e)) || [];
    message.hostChainDelegationAddress = object.hostChainDelegationAddress ?? "";
    message.hostAccountDelegations =
      object.hostAccountDelegations?.map((e) => HostAccountDelegation.fromPartial(e)) || [];
    message.hostAccountUndelegations =
      object.hostAccountUndelegations?.map((e) => HostAccountUndelegation.fromPartial(e)) || [];
    return message;
  },
};
function createBaseHostAccountDelegation(): HostAccountDelegation {
  return {
    validatorAddress: "",
    amount: Coin.fromPartial({}),
  };
}
export const HostAccountDelegation = {
  encode(message: HostAccountDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostAccountDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseHostAccountDelegation();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: HostAccountDelegation): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HostAccountDelegation>): HostAccountDelegation {
    const message = createBaseHostAccountDelegation();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseHostAccountUndelegation(): HostAccountUndelegation {
  return {
    epochNumber: BigInt(0),
    totalUndelegationAmount: Coin.fromPartial({}),
    completionTime: Timestamp.fromPartial({}),
    undelegationEntries: [],
  };
}
export const HostAccountUndelegation = {
  encode(message: HostAccountUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.totalUndelegationAmount !== undefined) {
      Coin.encode(message.totalUndelegationAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.undelegationEntries) {
      UndelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostAccountUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccountUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
          break;
        case 2:
          message.totalUndelegationAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.undelegationEntries.push(UndelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostAccountUndelegation {
    const obj = createBaseHostAccountUndelegation();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.totalUndelegationAmount))
      obj.totalUndelegationAmount = Coin.fromJSON(object.totalUndelegationAmount);
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    if (Array.isArray(object?.undelegationEntries))
      obj.undelegationEntries = object.undelegationEntries.map((e: any) => UndelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: HostAccountUndelegation): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.totalUndelegationAmount !== undefined &&
      (obj.totalUndelegationAmount = message.totalUndelegationAmount
        ? Coin.toJSON(message.totalUndelegationAmount)
        : undefined);
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    if (message.undelegationEntries) {
      obj.undelegationEntries = message.undelegationEntries.map((e) =>
        e ? UndelegationEntry.toJSON(e) : undefined,
      );
    } else {
      obj.undelegationEntries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<HostAccountUndelegation>): HostAccountUndelegation {
    const message = createBaseHostAccountUndelegation();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.totalUndelegationAmount !== undefined && object.totalUndelegationAmount !== null) {
      message.totalUndelegationAmount = Coin.fromPartial(object.totalUndelegationAmount);
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    message.undelegationEntries =
      object.undelegationEntries?.map((e) => UndelegationEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUndelegationEntry(): UndelegationEntry {
  return {
    validatorAddress: "",
    amount: Coin.fromPartial({}),
  };
}
export const UndelegationEntry = {
  encode(message: UndelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseUndelegationEntry();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: UndelegationEntry): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UndelegationEntry>): UndelegationEntry {
    const message = createBaseUndelegationEntry();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseHostChainRewardAddress(): HostChainRewardAddress {
  return {
    address: "",
  };
}
export const HostChainRewardAddress = {
  encode(message: HostChainRewardAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChainRewardAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseHostChainRewardAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: HostChainRewardAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<HostChainRewardAddress>): HostChainRewardAddress {
    const message = createBaseHostChainRewardAddress();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseIBCAmountTransientStore(): IBCAmountTransientStore {
  return {
    iBCTransfer: [],
    iCADelegate: Coin.fromPartial({}),
    undelegatonCompleteIBCTransfer: [],
  };
}
export const IBCAmountTransientStore = {
  encode(message: IBCAmountTransientStore, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.iBCTransfer) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.iCADelegate !== undefined) {
      Coin.encode(message.iCADelegate, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.undelegatonCompleteIBCTransfer) {
      TransientUndelegationTransfer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IBCAmountTransientStore {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            TransientUndelegationTransfer.decode(reader, reader.uint32()),
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
    const obj = createBaseIBCAmountTransientStore();
    if (Array.isArray(object?.iBCTransfer))
      obj.iBCTransfer = object.iBCTransfer.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.iCADelegate)) obj.iCADelegate = Coin.fromJSON(object.iCADelegate);
    if (Array.isArray(object?.undelegatonCompleteIBCTransfer))
      obj.undelegatonCompleteIBCTransfer = object.undelegatonCompleteIBCTransfer.map((e: any) =>
        TransientUndelegationTransfer.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: IBCAmountTransientStore): unknown {
    const obj: any = {};
    if (message.iBCTransfer) {
      obj.iBCTransfer = message.iBCTransfer.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.iBCTransfer = [];
    }
    message.iCADelegate !== undefined &&
      (obj.iCADelegate = message.iCADelegate ? Coin.toJSON(message.iCADelegate) : undefined);
    if (message.undelegatonCompleteIBCTransfer) {
      obj.undelegatonCompleteIBCTransfer = message.undelegatonCompleteIBCTransfer.map((e) =>
        e ? TransientUndelegationTransfer.toJSON(e) : undefined,
      );
    } else {
      obj.undelegatonCompleteIBCTransfer = [];
    }
    return obj;
  },
  fromPartial(object: Partial<IBCAmountTransientStore>): IBCAmountTransientStore {
    const message = createBaseIBCAmountTransientStore();
    message.iBCTransfer = object.iBCTransfer?.map((e) => Coin.fromPartial(e)) || [];
    if (object.iCADelegate !== undefined && object.iCADelegate !== null) {
      message.iCADelegate = Coin.fromPartial(object.iCADelegate);
    }
    message.undelegatonCompleteIBCTransfer =
      object.undelegatonCompleteIBCTransfer?.map((e) => TransientUndelegationTransfer.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTransientUndelegationTransfer(): TransientUndelegationTransfer {
  return {
    epochNumber: BigInt(0),
    amountUnbonded: Coin.fromPartial({}),
  };
}
export const TransientUndelegationTransfer = {
  encode(message: TransientUndelegationTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.amountUnbonded !== undefined) {
      Coin.encode(message.amountUnbonded, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransientUndelegationTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransientUndelegationTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
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
    const obj = createBaseTransientUndelegationTransfer();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.amountUnbonded)) obj.amountUnbonded = Coin.fromJSON(object.amountUnbonded);
    return obj;
  },
  toJSON(message: TransientUndelegationTransfer): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.amountUnbonded !== undefined &&
      (obj.amountUnbonded = message.amountUnbonded ? Coin.toJSON(message.amountUnbonded) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TransientUndelegationTransfer>): TransientUndelegationTransfer {
    const message = createBaseTransientUndelegationTransfer();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.amountUnbonded !== undefined && object.amountUnbonded !== null) {
      message.amountUnbonded = Coin.fromPartial(object.amountUnbonded);
    }
    return message;
  },
};
function createBaseUnbondingEpochCValue(): UnbondingEpochCValue {
  return {
    epochNumber: BigInt(0),
    sTKBurn: Coin.fromPartial({}),
    amountUnbonded: Coin.fromPartial({}),
    isMatured: false,
    isFailed: false,
  };
}
export const UnbondingEpochCValue = {
  encode(message: UnbondingEpochCValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingEpochCValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingEpochCValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.int64();
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
    const obj = createBaseUnbondingEpochCValue();
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.sTKBurn)) obj.sTKBurn = Coin.fromJSON(object.sTKBurn);
    if (isSet(object.amountUnbonded)) obj.amountUnbonded = Coin.fromJSON(object.amountUnbonded);
    if (isSet(object.isMatured)) obj.isMatured = Boolean(object.isMatured);
    if (isSet(object.isFailed)) obj.isFailed = Boolean(object.isFailed);
    return obj;
  },
  toJSON(message: UnbondingEpochCValue): unknown {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.sTKBurn !== undefined &&
      (obj.sTKBurn = message.sTKBurn ? Coin.toJSON(message.sTKBurn) : undefined);
    message.amountUnbonded !== undefined &&
      (obj.amountUnbonded = message.amountUnbonded ? Coin.toJSON(message.amountUnbonded) : undefined);
    message.isMatured !== undefined && (obj.isMatured = message.isMatured);
    message.isFailed !== undefined && (obj.isFailed = message.isFailed);
    return obj;
  },
  fromPartial(object: Partial<UnbondingEpochCValue>): UnbondingEpochCValue {
    const message = createBaseUnbondingEpochCValue();
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.sTKBurn !== undefined && object.sTKBurn !== null) {
      message.sTKBurn = Coin.fromPartial(object.sTKBurn);
    }
    if (object.amountUnbonded !== undefined && object.amountUnbonded !== null) {
      message.amountUnbonded = Coin.fromPartial(object.amountUnbonded);
    }
    message.isMatured = object.isMatured ?? false;
    message.isFailed = object.isFailed ?? false;
    return message;
  },
};
function createBaseDelegatorUnbondingEpochEntry(): DelegatorUnbondingEpochEntry {
  return {
    delegatorAddress: "",
    epochNumber: BigInt(0),
    amount: Coin.fromPartial({}),
  };
}
export const DelegatorUnbondingEpochEntry = {
  encode(message: DelegatorUnbondingEpochEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorUnbondingEpochEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorUnbondingEpochEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64();
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
    const obj = createBaseDelegatorUnbondingEpochEntry();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: DelegatorUnbondingEpochEntry): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DelegatorUnbondingEpochEntry>): DelegatorUnbondingEpochEntry {
    const message = createBaseDelegatorUnbondingEpochEntry();
    message.delegatorAddress = object.delegatorAddress ?? "";
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseHostAccounts(): HostAccounts {
  return {
    delegatorAccountOwnerID: "",
    rewardsAccountOwnerID: "",
  };
}
export const HostAccounts = {
  encode(message: HostAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAccountOwnerID !== "") {
      writer.uint32(10).string(message.delegatorAccountOwnerID);
    }
    if (message.rewardsAccountOwnerID !== "") {
      writer.uint32(18).string(message.rewardsAccountOwnerID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseHostAccounts();
    if (isSet(object.delegatorAccountOwnerID))
      obj.delegatorAccountOwnerID = String(object.delegatorAccountOwnerID);
    if (isSet(object.rewardsAccountOwnerID)) obj.rewardsAccountOwnerID = String(object.rewardsAccountOwnerID);
    return obj;
  },
  toJSON(message: HostAccounts): unknown {
    const obj: any = {};
    message.delegatorAccountOwnerID !== undefined &&
      (obj.delegatorAccountOwnerID = message.delegatorAccountOwnerID);
    message.rewardsAccountOwnerID !== undefined &&
      (obj.rewardsAccountOwnerID = message.rewardsAccountOwnerID);
    return obj;
  },
  fromPartial(object: Partial<HostAccounts>): HostAccounts {
    const message = createBaseHostAccounts();
    message.delegatorAccountOwnerID = object.delegatorAccountOwnerID ?? "";
    message.rewardsAccountOwnerID = object.rewardsAccountOwnerID ?? "";
    return message;
  },
};
