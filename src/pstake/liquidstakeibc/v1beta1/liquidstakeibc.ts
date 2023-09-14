/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "pstake.liquidstakeibc.v1beta1";
export enum ICAAccount_ChannelState {
  /** ICA_CHANNEL_CREATING - ICA channel is being created */
  ICA_CHANNEL_CREATING = 0,
  /** ICA_CHANNEL_CREATED - ICA is established and the account can be used */
  ICA_CHANNEL_CREATED = 1,
  UNRECOGNIZED = -1,
}
export function iCAAccount_ChannelStateFromJSON(object: any): ICAAccount_ChannelState {
  switch (object) {
    case 0:
    case "ICA_CHANNEL_CREATING":
      return ICAAccount_ChannelState.ICA_CHANNEL_CREATING;
    case 1:
    case "ICA_CHANNEL_CREATED":
      return ICAAccount_ChannelState.ICA_CHANNEL_CREATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ICAAccount_ChannelState.UNRECOGNIZED;
  }
}
export function iCAAccount_ChannelStateToJSON(object: ICAAccount_ChannelState): string {
  switch (object) {
    case ICAAccount_ChannelState.ICA_CHANNEL_CREATING:
      return "ICA_CHANNEL_CREATING";
    case ICAAccount_ChannelState.ICA_CHANNEL_CREATED:
      return "ICA_CHANNEL_CREATED";
    case ICAAccount_ChannelState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum Deposit_DepositState {
  /** DEPOSIT_PENDING - no action has been initiated on the deposit */
  DEPOSIT_PENDING = 0,
  /** DEPOSIT_SENT - deposit sent to the host chain delegator address */
  DEPOSIT_SENT = 1,
  /** DEPOSIT_RECEIVED - deposit received by the host chain delegator address */
  DEPOSIT_RECEIVED = 2,
  /** DEPOSIT_DELEGATING - delegation submitted for the deposit on the host chain */
  DEPOSIT_DELEGATING = 3,
  UNRECOGNIZED = -1,
}
export function deposit_DepositStateFromJSON(object: any): Deposit_DepositState {
  switch (object) {
    case 0:
    case "DEPOSIT_PENDING":
      return Deposit_DepositState.DEPOSIT_PENDING;
    case 1:
    case "DEPOSIT_SENT":
      return Deposit_DepositState.DEPOSIT_SENT;
    case 2:
    case "DEPOSIT_RECEIVED":
      return Deposit_DepositState.DEPOSIT_RECEIVED;
    case 3:
    case "DEPOSIT_DELEGATING":
      return Deposit_DepositState.DEPOSIT_DELEGATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deposit_DepositState.UNRECOGNIZED;
  }
}
export function deposit_DepositStateToJSON(object: Deposit_DepositState): string {
  switch (object) {
    case Deposit_DepositState.DEPOSIT_PENDING:
      return "DEPOSIT_PENDING";
    case Deposit_DepositState.DEPOSIT_SENT:
      return "DEPOSIT_SENT";
    case Deposit_DepositState.DEPOSIT_RECEIVED:
      return "DEPOSIT_RECEIVED";
    case Deposit_DepositState.DEPOSIT_DELEGATING:
      return "DEPOSIT_DELEGATING";
    case Deposit_DepositState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum LSMDeposit_LSMDepositState {
  /** DEPOSIT_PENDING - no action has been initiated on the deposit */
  DEPOSIT_PENDING = 0,
  /** DEPOSIT_SENT - deposit sent to the host chain delegator address */
  DEPOSIT_SENT = 1,
  /** DEPOSIT_RECEIVED - deposit received by the host chain delegator address */
  DEPOSIT_RECEIVED = 2,
  /** DEPOSIT_UNTOKENIZING - deposit started the untokenization process */
  DEPOSIT_UNTOKENIZING = 3,
  UNRECOGNIZED = -1,
}
export function lSMDeposit_LSMDepositStateFromJSON(object: any): LSMDeposit_LSMDepositState {
  switch (object) {
    case 0:
    case "DEPOSIT_PENDING":
      return LSMDeposit_LSMDepositState.DEPOSIT_PENDING;
    case 1:
    case "DEPOSIT_SENT":
      return LSMDeposit_LSMDepositState.DEPOSIT_SENT;
    case 2:
    case "DEPOSIT_RECEIVED":
      return LSMDeposit_LSMDepositState.DEPOSIT_RECEIVED;
    case 3:
    case "DEPOSIT_UNTOKENIZING":
      return LSMDeposit_LSMDepositState.DEPOSIT_UNTOKENIZING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LSMDeposit_LSMDepositState.UNRECOGNIZED;
  }
}
export function lSMDeposit_LSMDepositStateToJSON(object: LSMDeposit_LSMDepositState): string {
  switch (object) {
    case LSMDeposit_LSMDepositState.DEPOSIT_PENDING:
      return "DEPOSIT_PENDING";
    case LSMDeposit_LSMDepositState.DEPOSIT_SENT:
      return "DEPOSIT_SENT";
    case LSMDeposit_LSMDepositState.DEPOSIT_RECEIVED:
      return "DEPOSIT_RECEIVED";
    case LSMDeposit_LSMDepositState.DEPOSIT_UNTOKENIZING:
      return "DEPOSIT_UNTOKENIZING";
    case LSMDeposit_LSMDepositState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum Unbonding_UnbondingState {
  /** UNBONDING_PENDING - no action has been initiated on the unbonding */
  UNBONDING_PENDING = 0,
  /** UNBONDING_INITIATED - unbonding action has been sent to the host chain */
  UNBONDING_INITIATED = 1,
  /** UNBONDING_MATURING - unbonding is waiting for the maturing period of the host chain */
  UNBONDING_MATURING = 2,
  /** UNBONDING_MATURED - unbonding has matured and is ready to transfer from the host chain */
  UNBONDING_MATURED = 3,
  /** UNBONDING_CLAIMABLE - unbonding is on the persistence chain and can be claimed */
  UNBONDING_CLAIMABLE = 4,
  /** UNBONDING_FAILED - unbonding has failed */
  UNBONDING_FAILED = 5,
  UNRECOGNIZED = -1,
}
export function unbonding_UnbondingStateFromJSON(object: any): Unbonding_UnbondingState {
  switch (object) {
    case 0:
    case "UNBONDING_PENDING":
      return Unbonding_UnbondingState.UNBONDING_PENDING;
    case 1:
    case "UNBONDING_INITIATED":
      return Unbonding_UnbondingState.UNBONDING_INITIATED;
    case 2:
    case "UNBONDING_MATURING":
      return Unbonding_UnbondingState.UNBONDING_MATURING;
    case 3:
    case "UNBONDING_MATURED":
      return Unbonding_UnbondingState.UNBONDING_MATURED;
    case 4:
    case "UNBONDING_CLAIMABLE":
      return Unbonding_UnbondingState.UNBONDING_CLAIMABLE;
    case 5:
    case "UNBONDING_FAILED":
      return Unbonding_UnbondingState.UNBONDING_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Unbonding_UnbondingState.UNRECOGNIZED;
  }
}
export function unbonding_UnbondingStateToJSON(object: Unbonding_UnbondingState): string {
  switch (object) {
    case Unbonding_UnbondingState.UNBONDING_PENDING:
      return "UNBONDING_PENDING";
    case Unbonding_UnbondingState.UNBONDING_INITIATED:
      return "UNBONDING_INITIATED";
    case Unbonding_UnbondingState.UNBONDING_MATURING:
      return "UNBONDING_MATURING";
    case Unbonding_UnbondingState.UNBONDING_MATURED:
      return "UNBONDING_MATURED";
    case Unbonding_UnbondingState.UNBONDING_CLAIMABLE:
      return "UNBONDING_CLAIMABLE";
    case Unbonding_UnbondingState.UNBONDING_FAILED:
      return "UNBONDING_FAILED";
    case Unbonding_UnbondingState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface HostChain {
  /** host chain id */
  chainId: string;
  /** ibc connection id */
  connectionId: string;
  /** module params */
  params: HostChainLSParams;
  /** native token denom */
  hostDenom: string;
  /** ibc connection channel id */
  channelId: string;
  /** ibc connection port id */
  portId: string;
  /** delegation host account */
  delegationAccount: ICAAccount;
  /** reward host account */
  rewardsAccount: ICAAccount;
  /** validator set */
  validators: Validator[];
  /** minimum ls amount */
  minimumDeposit: string;
  /** redemption rate */
  cValue: string;
  /** previous redemption rate */
  lastCValue: string;
  /** undelegation epoch factor */
  unbondingFactor: bigint;
  /** whether the chain is ready to accept delegations or not */
  active: boolean;
  /** factor limit for auto-compounding, daily periodic rate (APY / 365s) */
  autoCompoundFactor: string;
  /** host chain flags */
  flags: HostChainFlags;
}
export interface HostChainFlags {
  lsm: boolean;
}
export interface HostChainLSParams {
  depositFee: string;
  restakeFee: string;
  unstakeFee: string;
  redemptionFee: string;
  lsmValidatorCap: string;
  /**
   * LSM bond factor
   *  Should be used only when HostChainFlag.Lsm == true, orelse default
   */
  lsmBondFactor: string;
}
export interface ICAAccount {
  /** address of the ica on the controller chain */
  address: string;
  /** token balance of the ica */
  balance: Coin;
  /** owner string */
  owner: string;
  channelState: ICAAccount_ChannelState;
}
export interface Validator {
  /** valoper address */
  operatorAddress: string;
  /** validator status */
  status: string;
  /** validator weight in the set */
  weight: string;
  /** amount delegated by the module to the validator */
  delegatedAmount: string;
  /** the validator token exchange rate, total bonded tokens divided by total shares issued */
  exchangeRate: string;
  /** the unbonding epoch number when the validator transitioned into the state */
  unbondingEpoch: bigint;
  /** whether the validator can accept delegations or not, default true for non-lsm chains */
  delegable: boolean;
}
export interface Deposit {
  /** deposit target chain */
  chainId: string;
  amount: Coin;
  /** epoch number of the deposit */
  epoch: bigint;
  /** state */
  state: Deposit_DepositState;
  /** sequence id of the ibc transaction */
  ibcSequenceId: string;
}
export interface LSMDeposit {
  /** deposit target chain */
  chainId: string;
  /** this is calculated when liquid staking [lsm_shares * validator_exchange_rate] */
  amount: string;
  /**
   * LSM token shares, they are mapped 1:1 with the delegator shares that are tokenized
   * https://github.com/iqlusioninc/cosmos-sdk/pull/19
   */
  shares: string;
  /** LSM token denom */
  denom: string;
  /** LSM token ibc denom */
  ibcDenom: string;
  /** address of the delegator */
  delegatorAddress: string;
  /** state o the deposit */
  state: LSMDeposit_LSMDepositState;
  /** sequence id of the ibc transaction */
  ibcSequenceId: string;
}
export interface Unbonding {
  /** unbonding target chain */
  chainId: string;
  /** epoch number of the unbonding record */
  epochNumber: bigint;
  /** time when the unbonding matures and can be collected */
  matureTime: Timestamp;
  /** stk token amount that is burned with the unbonding */
  burnAmount: Coin;
  /** host token amount that is being unbonded */
  unbondAmount: Coin;
  /** sequence id of the ibc transaction */
  ibcSequenceId: string;
  /** state of the unbonding during the process */
  state: Unbonding_UnbondingState;
}
export interface UserUnbonding {
  /** unbonding target chain */
  chainId: string;
  /** epoch when the unbonding started */
  epochNumber: bigint;
  /** address which requested the unbonding */
  address: string;
  /** stk token amount that is being unbonded */
  stkAmount: Coin;
  /** host token amount that is being unbonded */
  unbondAmount: Coin;
}
export interface ValidatorUnbonding {
  /** unbonding target chain */
  chainId: string;
  /** epoch when the unbonding started */
  epochNumber: bigint;
  /** time when the unbonding matures and can be collected */
  matureTime: Timestamp;
  /** address of the validator that is being unbonded */
  validatorAddress: string;
  /** amount unbonded from the validator */
  amount: Coin;
  /** sequence id of the ibc transaction */
  ibcSequenceId: string;
}
export interface KVUpdate {
  key: string;
  value: string;
}
function createBaseHostChain(): HostChain {
  return {
    chainId: "",
    connectionId: "",
    params: HostChainLSParams.fromPartial({}),
    hostDenom: "",
    channelId: "",
    portId: "",
    delegationAccount: ICAAccount.fromPartial({}),
    rewardsAccount: ICAAccount.fromPartial({}),
    validators: [],
    minimumDeposit: "",
    cValue: "",
    lastCValue: "",
    unbondingFactor: BigInt(0),
    active: false,
    autoCompoundFactor: "",
    flags: HostChainFlags.fromPartial({}),
  };
}
export const HostChain = {
  encode(message: HostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.params !== undefined) {
      HostChainLSParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.hostDenom !== "") {
      writer.uint32(34).string(message.hostDenom);
    }
    if (message.channelId !== "") {
      writer.uint32(42).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(50).string(message.portId);
    }
    if (message.delegationAccount !== undefined) {
      ICAAccount.encode(message.delegationAccount, writer.uint32(58).fork()).ldelim();
    }
    if (message.rewardsAccount !== undefined) {
      ICAAccount.encode(message.rewardsAccount, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.minimumDeposit !== "") {
      writer.uint32(82).string(message.minimumDeposit);
    }
    if (message.cValue !== "") {
      writer.uint32(90).string(message.cValue);
    }
    if (message.lastCValue !== "") {
      writer.uint32(98).string(message.lastCValue);
    }
    if (message.unbondingFactor !== BigInt(0)) {
      writer.uint32(104).int64(message.unbondingFactor);
    }
    if (message.active === true) {
      writer.uint32(112).bool(message.active);
    }
    if (message.autoCompoundFactor !== "") {
      writer.uint32(122).string(message.autoCompoundFactor);
    }
    if (message.flags !== undefined) {
      HostChainFlags.encode(message.flags, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.params = HostChainLSParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.hostDenom = reader.string();
          break;
        case 5:
          message.channelId = reader.string();
          break;
        case 6:
          message.portId = reader.string();
          break;
        case 7:
          message.delegationAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 8:
          message.rewardsAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 9:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 10:
          message.minimumDeposit = reader.string();
          break;
        case 11:
          message.cValue = reader.string();
          break;
        case 12:
          message.lastCValue = reader.string();
          break;
        case 13:
          message.unbondingFactor = reader.int64();
          break;
        case 14:
          message.active = reader.bool();
          break;
        case 15:
          message.autoCompoundFactor = reader.string();
          break;
        case 16:
          message.flags = HostChainFlags.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChain {
    const obj = createBaseHostChain();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.params)) obj.params = HostChainLSParams.fromJSON(object.params);
    if (isSet(object.hostDenom)) obj.hostDenom = String(object.hostDenom);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.delegationAccount))
      obj.delegationAccount = ICAAccount.fromJSON(object.delegationAccount);
    if (isSet(object.rewardsAccount)) obj.rewardsAccount = ICAAccount.fromJSON(object.rewardsAccount);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.minimumDeposit)) obj.minimumDeposit = String(object.minimumDeposit);
    if (isSet(object.cValue)) obj.cValue = String(object.cValue);
    if (isSet(object.lastCValue)) obj.lastCValue = String(object.lastCValue);
    if (isSet(object.unbondingFactor)) obj.unbondingFactor = BigInt(object.unbondingFactor.toString());
    if (isSet(object.active)) obj.active = Boolean(object.active);
    if (isSet(object.autoCompoundFactor)) obj.autoCompoundFactor = String(object.autoCompoundFactor);
    if (isSet(object.flags)) obj.flags = HostChainFlags.fromJSON(object.flags);
    return obj;
  },
  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.params !== undefined &&
      (obj.params = message.params ? HostChainLSParams.toJSON(message.params) : undefined);
    message.hostDenom !== undefined && (obj.hostDenom = message.hostDenom);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.delegationAccount !== undefined &&
      (obj.delegationAccount = message.delegationAccount
        ? ICAAccount.toJSON(message.delegationAccount)
        : undefined);
    message.rewardsAccount !== undefined &&
      (obj.rewardsAccount = message.rewardsAccount ? ICAAccount.toJSON(message.rewardsAccount) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.minimumDeposit !== undefined && (obj.minimumDeposit = message.minimumDeposit);
    message.cValue !== undefined && (obj.cValue = message.cValue);
    message.lastCValue !== undefined && (obj.lastCValue = message.lastCValue);
    message.unbondingFactor !== undefined &&
      (obj.unbondingFactor = (message.unbondingFactor || BigInt(0)).toString());
    message.active !== undefined && (obj.active = message.active);
    message.autoCompoundFactor !== undefined && (obj.autoCompoundFactor = message.autoCompoundFactor);
    message.flags !== undefined &&
      (obj.flags = message.flags ? HostChainFlags.toJSON(message.flags) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HostChain>): HostChain {
    const message = createBaseHostChain();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = HostChainLSParams.fromPartial(object.params);
    }
    message.hostDenom = object.hostDenom ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    if (object.delegationAccount !== undefined && object.delegationAccount !== null) {
      message.delegationAccount = ICAAccount.fromPartial(object.delegationAccount);
    }
    if (object.rewardsAccount !== undefined && object.rewardsAccount !== null) {
      message.rewardsAccount = ICAAccount.fromPartial(object.rewardsAccount);
    }
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.minimumDeposit = object.minimumDeposit ?? "";
    message.cValue = object.cValue ?? "";
    message.lastCValue = object.lastCValue ?? "";
    if (object.unbondingFactor !== undefined && object.unbondingFactor !== null) {
      message.unbondingFactor = BigInt(object.unbondingFactor.toString());
    }
    message.active = object.active ?? false;
    message.autoCompoundFactor = object.autoCompoundFactor ?? "";
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = HostChainFlags.fromPartial(object.flags);
    }
    return message;
  },
};
function createBaseHostChainFlags(): HostChainFlags {
  return {
    lsm: false,
  };
}
export const HostChainFlags = {
  encode(message: HostChainFlags, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lsm === true) {
      writer.uint32(8).bool(message.lsm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChainFlags {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lsm = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainFlags {
    const obj = createBaseHostChainFlags();
    if (isSet(object.lsm)) obj.lsm = Boolean(object.lsm);
    return obj;
  },
  toJSON(message: HostChainFlags): unknown {
    const obj: any = {};
    message.lsm !== undefined && (obj.lsm = message.lsm);
    return obj;
  },
  fromPartial(object: Partial<HostChainFlags>): HostChainFlags {
    const message = createBaseHostChainFlags();
    message.lsm = object.lsm ?? false;
    return message;
  },
};
function createBaseHostChainLSParams(): HostChainLSParams {
  return {
    depositFee: "",
    restakeFee: "",
    unstakeFee: "",
    redemptionFee: "",
    lsmValidatorCap: "",
    lsmBondFactor: "",
  };
}
export const HostChainLSParams = {
  encode(message: HostChainLSParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositFee !== "") {
      writer.uint32(10).string(message.depositFee);
    }
    if (message.restakeFee !== "") {
      writer.uint32(18).string(message.restakeFee);
    }
    if (message.unstakeFee !== "") {
      writer.uint32(26).string(message.unstakeFee);
    }
    if (message.redemptionFee !== "") {
      writer.uint32(34).string(message.redemptionFee);
    }
    if (message.lsmValidatorCap !== "") {
      writer.uint32(50).string(message.lsmValidatorCap);
    }
    if (message.lsmBondFactor !== "") {
      writer.uint32(58).string(message.lsmBondFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChainLSParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainLSParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositFee = reader.string();
          break;
        case 2:
          message.restakeFee = reader.string();
          break;
        case 3:
          message.unstakeFee = reader.string();
          break;
        case 4:
          message.redemptionFee = reader.string();
          break;
        case 6:
          message.lsmValidatorCap = reader.string();
          break;
        case 7:
          message.lsmBondFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainLSParams {
    const obj = createBaseHostChainLSParams();
    if (isSet(object.depositFee)) obj.depositFee = String(object.depositFee);
    if (isSet(object.restakeFee)) obj.restakeFee = String(object.restakeFee);
    if (isSet(object.unstakeFee)) obj.unstakeFee = String(object.unstakeFee);
    if (isSet(object.redemptionFee)) obj.redemptionFee = String(object.redemptionFee);
    if (isSet(object.lsmValidatorCap)) obj.lsmValidatorCap = String(object.lsmValidatorCap);
    if (isSet(object.lsmBondFactor)) obj.lsmBondFactor = String(object.lsmBondFactor);
    return obj;
  },
  toJSON(message: HostChainLSParams): unknown {
    const obj: any = {};
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.restakeFee !== undefined && (obj.restakeFee = message.restakeFee);
    message.unstakeFee !== undefined && (obj.unstakeFee = message.unstakeFee);
    message.redemptionFee !== undefined && (obj.redemptionFee = message.redemptionFee);
    message.lsmValidatorCap !== undefined && (obj.lsmValidatorCap = message.lsmValidatorCap);
    message.lsmBondFactor !== undefined && (obj.lsmBondFactor = message.lsmBondFactor);
    return obj;
  },
  fromPartial(object: Partial<HostChainLSParams>): HostChainLSParams {
    const message = createBaseHostChainLSParams();
    message.depositFee = object.depositFee ?? "";
    message.restakeFee = object.restakeFee ?? "";
    message.unstakeFee = object.unstakeFee ?? "";
    message.redemptionFee = object.redemptionFee ?? "";
    message.lsmValidatorCap = object.lsmValidatorCap ?? "";
    message.lsmBondFactor = object.lsmBondFactor ?? "";
    return message;
  },
};
function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    balance: Coin.fromPartial({}),
    owner: "",
    channelState: 0,
  };
}
export const ICAAccount = {
  encode(message: ICAAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.channelState !== 0) {
      writer.uint32(32).int32(message.channelState);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.channelState = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ICAAccount {
    const obj = createBaseICAAccount();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.channelState)) obj.channelState = iCAAccount_ChannelStateFromJSON(object.channelState);
    return obj;
  },
  toJSON(message: ICAAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined &&
      (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    message.channelState !== undefined &&
      (obj.channelState = iCAAccount_ChannelStateToJSON(message.channelState));
    return obj;
  },
  fromPartial(object: Partial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    message.owner = object.owner ?? "";
    message.channelState = object.channelState ?? 0;
    return message;
  },
};
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    status: "",
    weight: "",
    delegatedAmount: "",
    exchangeRate: "",
    unbondingEpoch: BigInt(0),
    delegable: false,
  };
}
export const Validator = {
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }
    if (message.delegatedAmount !== "") {
      writer.uint32(34).string(message.delegatedAmount);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(42).string(message.exchangeRate);
    }
    if (message.unbondingEpoch !== BigInt(0)) {
      writer.uint32(48).int64(message.unbondingEpoch);
    }
    if (message.delegable === true) {
      writer.uint32(56).bool(message.delegable);
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
          message.status = reader.string();
          break;
        case 3:
          message.weight = reader.string();
          break;
        case 4:
          message.delegatedAmount = reader.string();
          break;
        case 5:
          message.exchangeRate = reader.string();
          break;
        case 6:
          message.unbondingEpoch = reader.int64();
          break;
        case 7:
          message.delegable = reader.bool();
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
    if (isSet(object.status)) obj.status = String(object.status);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    if (isSet(object.delegatedAmount)) obj.delegatedAmount = String(object.delegatedAmount);
    if (isSet(object.exchangeRate)) obj.exchangeRate = String(object.exchangeRate);
    if (isSet(object.unbondingEpoch)) obj.unbondingEpoch = BigInt(object.unbondingEpoch.toString());
    if (isSet(object.delegable)) obj.delegable = Boolean(object.delegable);
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.status !== undefined && (obj.status = message.status);
    message.weight !== undefined && (obj.weight = message.weight);
    message.delegatedAmount !== undefined && (obj.delegatedAmount = message.delegatedAmount);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.unbondingEpoch !== undefined &&
      (obj.unbondingEpoch = (message.unbondingEpoch || BigInt(0)).toString());
    message.delegable !== undefined && (obj.delegable = message.delegable);
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.status = object.status ?? "";
    message.weight = object.weight ?? "";
    message.delegatedAmount = object.delegatedAmount ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    if (object.unbondingEpoch !== undefined && object.unbondingEpoch !== null) {
      message.unbondingEpoch = BigInt(object.unbondingEpoch.toString());
    }
    message.delegable = object.delegable ?? false;
    return message;
  },
};
function createBaseDeposit(): Deposit {
  return {
    chainId: "",
    amount: Coin.fromPartial({}),
    epoch: BigInt(0),
    state: 0,
    ibcSequenceId: "",
  };
}
export const Deposit = {
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).int64(message.epoch);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.ibcSequenceId !== "") {
      writer.uint32(42).string(message.ibcSequenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.epoch = reader.int64();
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.ibcSequenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deposit {
    const obj = createBaseDeposit();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.epoch)) obj.epoch = BigInt(object.epoch.toString());
    if (isSet(object.state)) obj.state = deposit_DepositStateFromJSON(object.state);
    if (isSet(object.ibcSequenceId)) obj.ibcSequenceId = String(object.ibcSequenceId);
    return obj;
  },
  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.state !== undefined && (obj.state = deposit_DepositStateToJSON(message.state));
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    return obj;
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.chainId = object.chainId ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch.toString());
    }
    message.state = object.state ?? 0;
    message.ibcSequenceId = object.ibcSequenceId ?? "";
    return message;
  },
};
function createBaseLSMDeposit(): LSMDeposit {
  return {
    chainId: "",
    amount: "",
    shares: "",
    denom: "",
    ibcDenom: "",
    delegatorAddress: "",
    state: 0,
    ibcSequenceId: "",
  };
}
export const LSMDeposit = {
  encode(message: LSMDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(42).string(message.ibcDenom);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(50).string(message.delegatorAddress);
    }
    if (message.state !== 0) {
      writer.uint32(56).int32(message.state);
    }
    if (message.ibcSequenceId !== "") {
      writer.uint32(66).string(message.ibcSequenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LSMDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLSMDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.ibcDenom = reader.string();
          break;
        case 6:
          message.delegatorAddress = reader.string();
          break;
        case 7:
          message.state = reader.int32() as any;
          break;
        case 8:
          message.ibcSequenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LSMDeposit {
    const obj = createBaseLSMDeposit();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.shares)) obj.shares = String(object.shares);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.ibcDenom)) obj.ibcDenom = String(object.ibcDenom);
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.state)) obj.state = lSMDeposit_LSMDepositStateFromJSON(object.state);
    if (isSet(object.ibcSequenceId)) obj.ibcSequenceId = String(object.ibcSequenceId);
    return obj;
  },
  toJSON(message: LSMDeposit): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.shares !== undefined && (obj.shares = message.shares);
    message.denom !== undefined && (obj.denom = message.denom);
    message.ibcDenom !== undefined && (obj.ibcDenom = message.ibcDenom);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.state !== undefined && (obj.state = lSMDeposit_LSMDepositStateToJSON(message.state));
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    return obj;
  },
  fromPartial(object: Partial<LSMDeposit>): LSMDeposit {
    const message = createBaseLSMDeposit();
    message.chainId = object.chainId ?? "";
    message.amount = object.amount ?? "";
    message.shares = object.shares ?? "";
    message.denom = object.denom ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.state = object.state ?? 0;
    message.ibcSequenceId = object.ibcSequenceId ?? "";
    return message;
  },
};
function createBaseUnbonding(): Unbonding {
  return {
    chainId: "",
    epochNumber: BigInt(0),
    matureTime: Timestamp.fromPartial({}),
    burnAmount: Coin.fromPartial({}),
    unbondAmount: Coin.fromPartial({}),
    ibcSequenceId: "",
    state: 0,
  };
}
export const Unbonding = {
  encode(message: Unbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.matureTime !== undefined) {
      Timestamp.encode(message.matureTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.burnAmount !== undefined) {
      Coin.encode(message.burnAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.unbondAmount !== undefined) {
      Coin.encode(message.unbondAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcSequenceId !== "") {
      writer.uint32(50).string(message.ibcSequenceId);
    }
    if (message.state !== 0) {
      writer.uint32(56).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Unbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64();
          break;
        case 3:
          message.matureTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.burnAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unbondAmount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcSequenceId = reader.string();
          break;
        case 7:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Unbonding {
    const obj = createBaseUnbonding();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.matureTime)) obj.matureTime = fromJsonTimestamp(object.matureTime);
    if (isSet(object.burnAmount)) obj.burnAmount = Coin.fromJSON(object.burnAmount);
    if (isSet(object.unbondAmount)) obj.unbondAmount = Coin.fromJSON(object.unbondAmount);
    if (isSet(object.ibcSequenceId)) obj.ibcSequenceId = String(object.ibcSequenceId);
    if (isSet(object.state)) obj.state = unbonding_UnbondingStateFromJSON(object.state);
    return obj;
  },
  toJSON(message: Unbonding): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.matureTime !== undefined && (obj.matureTime = fromTimestamp(message.matureTime).toISOString());
    message.burnAmount !== undefined &&
      (obj.burnAmount = message.burnAmount ? Coin.toJSON(message.burnAmount) : undefined);
    message.unbondAmount !== undefined &&
      (obj.unbondAmount = message.unbondAmount ? Coin.toJSON(message.unbondAmount) : undefined);
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    message.state !== undefined && (obj.state = unbonding_UnbondingStateToJSON(message.state));
    return obj;
  },
  fromPartial(object: Partial<Unbonding>): Unbonding {
    const message = createBaseUnbonding();
    message.chainId = object.chainId ?? "";
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.matureTime !== undefined && object.matureTime !== null) {
      message.matureTime = Timestamp.fromPartial(object.matureTime);
    }
    if (object.burnAmount !== undefined && object.burnAmount !== null) {
      message.burnAmount = Coin.fromPartial(object.burnAmount);
    }
    if (object.unbondAmount !== undefined && object.unbondAmount !== null) {
      message.unbondAmount = Coin.fromPartial(object.unbondAmount);
    }
    message.ibcSequenceId = object.ibcSequenceId ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};
function createBaseUserUnbonding(): UserUnbonding {
  return {
    chainId: "",
    epochNumber: BigInt(0),
    address: "",
    stkAmount: Coin.fromPartial({}),
    unbondAmount: Coin.fromPartial({}),
  };
}
export const UserUnbonding = {
  encode(message: UserUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.stkAmount !== undefined) {
      Coin.encode(message.stkAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.unbondAmount !== undefined) {
      Coin.encode(message.unbondAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.stkAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unbondAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserUnbonding {
    const obj = createBaseUserUnbonding();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.stkAmount)) obj.stkAmount = Coin.fromJSON(object.stkAmount);
    if (isSet(object.unbondAmount)) obj.unbondAmount = Coin.fromJSON(object.unbondAmount);
    return obj;
  },
  toJSON(message: UserUnbonding): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.stkAmount !== undefined &&
      (obj.stkAmount = message.stkAmount ? Coin.toJSON(message.stkAmount) : undefined);
    message.unbondAmount !== undefined &&
      (obj.unbondAmount = message.unbondAmount ? Coin.toJSON(message.unbondAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<UserUnbonding>): UserUnbonding {
    const message = createBaseUserUnbonding();
    message.chainId = object.chainId ?? "";
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    message.address = object.address ?? "";
    if (object.stkAmount !== undefined && object.stkAmount !== null) {
      message.stkAmount = Coin.fromPartial(object.stkAmount);
    }
    if (object.unbondAmount !== undefined && object.unbondAmount !== null) {
      message.unbondAmount = Coin.fromPartial(object.unbondAmount);
    }
    return message;
  },
};
function createBaseValidatorUnbonding(): ValidatorUnbonding {
  return {
    chainId: "",
    epochNumber: BigInt(0),
    matureTime: Timestamp.fromPartial({}),
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    ibcSequenceId: "",
  };
}
export const ValidatorUnbonding = {
  encode(message: ValidatorUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.matureTime !== undefined) {
      Timestamp.encode(message.matureTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcSequenceId !== "") {
      writer.uint32(50).string(message.ibcSequenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64();
          break;
        case 3:
          message.matureTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.validatorAddress = reader.string();
          break;
        case 5:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcSequenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorUnbonding {
    const obj = createBaseValidatorUnbonding();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.epochNumber)) obj.epochNumber = BigInt(object.epochNumber.toString());
    if (isSet(object.matureTime)) obj.matureTime = fromJsonTimestamp(object.matureTime);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.ibcSequenceId)) obj.ibcSequenceId = String(object.ibcSequenceId);
    return obj;
  },
  toJSON(message: ValidatorUnbonding): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.matureTime !== undefined && (obj.matureTime = fromTimestamp(message.matureTime).toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    return obj;
  },
  fromPartial(object: Partial<ValidatorUnbonding>): ValidatorUnbonding {
    const message = createBaseValidatorUnbonding();
    message.chainId = object.chainId ?? "";
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = BigInt(object.epochNumber.toString());
    }
    if (object.matureTime !== undefined && object.matureTime !== null) {
      message.matureTime = Timestamp.fromPartial(object.matureTime);
    }
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.ibcSequenceId = object.ibcSequenceId ?? "";
    return message;
  },
};
function createBaseKVUpdate(): KVUpdate {
  return {
    key: "",
    value: "",
  };
}
export const KVUpdate = {
  encode(message: KVUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): KVUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKVUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): KVUpdate {
    const obj = createBaseKVUpdate();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: KVUpdate): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<KVUpdate>): KVUpdate {
    const message = createBaseKVUpdate();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};
