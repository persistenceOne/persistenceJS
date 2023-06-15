/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  fromTimestamp,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  params?: HostChainLSParams;
  /** native token denom */
  hostDenom: string;
  /** ibc connection channel id */
  channelId: string;
  /** ibc connection port id */
  portId: string;
  /** delegation host account */
  delegationAccount?: ICAAccount;
  /** reward host account */
  rewardsAccount?: ICAAccount;
  /** validator set */
  validators: Validator[];
  /** minimum ls amount */
  minimumDeposit: string;
  /** redemption rate */
  cValue: string;
  /** the hash of the next validator set */
  nextValsetHash: Uint8Array;
  /** undelegation epoch factor */
  unbondingFactor: Long;
  /** whether the chain is ready to accept delegations or not */
  active: boolean;
}
export interface HostChainLSParams {
  depositFee: string;
  restakeFee: string;
  unstakeFee: string;
  redemptionFee: string;
}
export interface ICAAccount {
  /** address of the ica on the controller chain */
  address: string;
  /** token balance of the ica */
  balance?: Coin;
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
  /** total amount delegated to the validator (including amount not delegated by the module) */
  totalAmount: string;
  /** total number of shares issued by the validator to its delegators */
  delegatorShares: string;
  /** the unbonding epoch number when the validator transitioned into the state */
  unbondingEpoch: Long;
}
export interface Deposit {
  /** deposit target chain */
  chainId: string;
  amount?: Coin;
  /** epoch number of the deposit */
  epoch: string;
  /** state */
  state: Deposit_DepositState;
  /** sequence id of the ibc transaction */
  ibcSequenceId: string;
}
export interface Unbonding {
  /** unbonding target chain */
  chainId: string;
  /** epoch number of the unbonding record */
  epochNumber: Long;
  /** time when the unbonding matures and can be collected */
  matureTime?: Timestamp;
  /** stk token amount that is burned with the unbonding */
  burnAmount?: Coin;
  /** host token amount that is being unbonded */
  unbondAmount?: Coin;
  /** sequence id of the ibc transaction */
  ibcSequenceId: string;
  /** state of the unbonding during the process */
  state: Unbonding_UnbondingState;
}
export interface UserUnbonding {
  /** unbonding target chain */
  chainId: string;
  /** epoch when the unbonding started */
  epochNumber: Long;
  /** address which requested the unbonding */
  address: string;
  /** stk token amount that is being unbonded */
  stkAmount?: Coin;
  /** host token amount that is being unbonded */
  unbondAmount?: Coin;
}
export interface ValidatorUnbonding {
  /** unbonding target chain */
  chainId: string;
  /** epoch when the unbonding started */
  epochNumber: Long;
  /** time when the unbonding matures and can be collected */
  matureTime?: Timestamp;
  /** address of the validator that is being unbonded */
  validatorAddress: string;
  /** amount unbonded from the validator */
  amount?: Coin;
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
    params: undefined,
    hostDenom: "",
    channelId: "",
    portId: "",
    delegationAccount: undefined,
    rewardsAccount: undefined,
    validators: [],
    minimumDeposit: "",
    cValue: "",
    nextValsetHash: new Uint8Array(),
    unbondingFactor: Long.ZERO,
    active: false,
  };
}
export const HostChain = {
  encode(message: HostChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.nextValsetHash.length !== 0) {
      writer.uint32(98).bytes(message.nextValsetHash);
    }
    if (!message.unbondingFactor.isZero()) {
      writer.uint32(104).int64(message.unbondingFactor);
    }
    if (message.active === true) {
      writer.uint32(112).bool(message.active);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HostChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.nextValsetHash = reader.bytes();
          break;
        case 13:
          message.unbondingFactor = reader.int64() as Long;
          break;
        case 14:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChain {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      params: isSet(object.params) ? HostChainLSParams.fromJSON(object.params) : undefined,
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      delegationAccount: isSet(object.delegationAccount)
        ? ICAAccount.fromJSON(object.delegationAccount)
        : undefined,
      rewardsAccount: isSet(object.rewardsAccount) ? ICAAccount.fromJSON(object.rewardsAccount) : undefined,
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => Validator.fromJSON(e))
        : [],
      minimumDeposit: isSet(object.minimumDeposit) ? String(object.minimumDeposit) : "",
      cValue: isSet(object.cValue) ? String(object.cValue) : "",
      nextValsetHash: isSet(object.nextValsetHash)
        ? bytesFromBase64(object.nextValsetHash)
        : new Uint8Array(),
      unbondingFactor: isSet(object.unbondingFactor) ? Long.fromValue(object.unbondingFactor) : Long.ZERO,
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
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
    message.nextValsetHash !== undefined &&
      (obj.nextValsetHash = base64FromBytes(
        message.nextValsetHash !== undefined ? message.nextValsetHash : new Uint8Array(),
      ));
    message.unbondingFactor !== undefined &&
      (obj.unbondingFactor = (message.unbondingFactor || Long.ZERO).toString());
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HostChain>, I>>(object: I): HostChain {
    const message = createBaseHostChain();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? HostChainLSParams.fromPartial(object.params)
        : undefined;
    message.hostDenom = object.hostDenom ?? "";
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    message.delegationAccount =
      object.delegationAccount !== undefined && object.delegationAccount !== null
        ? ICAAccount.fromPartial(object.delegationAccount)
        : undefined;
    message.rewardsAccount =
      object.rewardsAccount !== undefined && object.rewardsAccount !== null
        ? ICAAccount.fromPartial(object.rewardsAccount)
        : undefined;
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.minimumDeposit = object.minimumDeposit ?? "";
    message.cValue = object.cValue ?? "";
    message.nextValsetHash = object.nextValsetHash ?? new Uint8Array();
    message.unbondingFactor =
      object.unbondingFactor !== undefined && object.unbondingFactor !== null
        ? Long.fromValue(object.unbondingFactor)
        : Long.ZERO;
    message.active = object.active ?? false;
    return message;
  },
};
function createBaseHostChainLSParams(): HostChainLSParams {
  return {
    depositFee: "",
    restakeFee: "",
    unstakeFee: "",
    redemptionFee: "",
  };
}
export const HostChainLSParams = {
  encode(message: HostChainLSParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HostChainLSParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainLSParams {
    return {
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      restakeFee: isSet(object.restakeFee) ? String(object.restakeFee) : "",
      unstakeFee: isSet(object.unstakeFee) ? String(object.unstakeFee) : "",
      redemptionFee: isSet(object.redemptionFee) ? String(object.redemptionFee) : "",
    };
  },
  toJSON(message: HostChainLSParams): unknown {
    const obj: any = {};
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.restakeFee !== undefined && (obj.restakeFee = message.restakeFee);
    message.unstakeFee !== undefined && (obj.unstakeFee = message.unstakeFee);
    message.redemptionFee !== undefined && (obj.redemptionFee = message.redemptionFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HostChainLSParams>, I>>(object: I): HostChainLSParams {
    const message = createBaseHostChainLSParams();
    message.depositFee = object.depositFee ?? "";
    message.restakeFee = object.restakeFee ?? "";
    message.unstakeFee = object.unstakeFee ?? "";
    message.redemptionFee = object.redemptionFee ?? "";
    return message;
  },
};
function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    balance: undefined,
    owner: "",
    channelState: 0,
  };
}
export const ICAAccount = {
  encode(message: ICAAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
      channelState: isSet(object.channelState) ? iCAAccount_ChannelStateFromJSON(object.channelState) : 0,
    };
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
  fromPartial<I extends Exact<DeepPartial<ICAAccount>, I>>(object: I): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.balance =
      object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
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
    totalAmount: "",
    delegatorShares: "",
    unbondingEpoch: Long.ZERO,
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.totalAmount !== "") {
      writer.uint32(42).string(message.totalAmount);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (!message.unbondingEpoch.isZero()) {
      writer.uint32(56).int64(message.unbondingEpoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.totalAmount = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.unbondingEpoch = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      status: isSet(object.status) ? String(object.status) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      delegatedAmount: isSet(object.delegatedAmount) ? String(object.delegatedAmount) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
      unbondingEpoch: isSet(object.unbondingEpoch) ? Long.fromValue(object.unbondingEpoch) : Long.ZERO,
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.status !== undefined && (obj.status = message.status);
    message.weight !== undefined && (obj.weight = message.weight);
    message.delegatedAmount !== undefined && (obj.delegatedAmount = message.delegatedAmount);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
    message.unbondingEpoch !== undefined &&
      (obj.unbondingEpoch = (message.unbondingEpoch || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.status = object.status ?? "";
    message.weight = object.weight ?? "";
    message.delegatedAmount = object.delegatedAmount ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.unbondingEpoch =
      object.unbondingEpoch !== undefined && object.unbondingEpoch !== null
        ? Long.fromValue(object.unbondingEpoch)
        : Long.ZERO;
    return message;
  },
};
function createBaseDeposit(): Deposit {
  return {
    chainId: "",
    amount: undefined,
    epoch: "",
    state: 0,
    ibcSequenceId: "",
  };
}
export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.epoch !== "") {
      writer.uint32(26).string(message.epoch);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.ibcSequenceId !== "") {
      writer.uint32(42).string(message.ibcSequenceId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.epoch = reader.string();
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      epoch: isSet(object.epoch) ? String(object.epoch) : "",
      state: isSet(object.state) ? deposit_DepositStateFromJSON(object.state) : 0,
      ibcSequenceId: isSet(object.ibcSequenceId) ? String(object.ibcSequenceId) : "",
    };
  },
  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.epoch !== undefined && (obj.epoch = message.epoch);
    message.state !== undefined && (obj.state = deposit_DepositStateToJSON(message.state));
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Deposit>, I>>(object: I): Deposit {
    const message = createBaseDeposit();
    message.chainId = object.chainId ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.epoch = object.epoch ?? "";
    message.state = object.state ?? 0;
    message.ibcSequenceId = object.ibcSequenceId ?? "";
    return message;
  },
};
function createBaseUnbonding(): Unbonding {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    matureTime: undefined,
    burnAmount: undefined,
    unbondAmount: undefined,
    ibcSequenceId: "",
    state: 0,
  };
}
export const Unbonding = {
  encode(message: Unbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Unbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64() as Long;
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
      matureTime: isSet(object.matureTime) ? fromJsonTimestamp(object.matureTime) : undefined,
      burnAmount: isSet(object.burnAmount) ? Coin.fromJSON(object.burnAmount) : undefined,
      unbondAmount: isSet(object.unbondAmount) ? Coin.fromJSON(object.unbondAmount) : undefined,
      ibcSequenceId: isSet(object.ibcSequenceId) ? String(object.ibcSequenceId) : "",
      state: isSet(object.state) ? unbonding_UnbondingStateFromJSON(object.state) : 0,
    };
  },
  toJSON(message: Unbonding): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.matureTime !== undefined && (obj.matureTime = fromTimestamp(message.matureTime).toISOString());
    message.burnAmount !== undefined &&
      (obj.burnAmount = message.burnAmount ? Coin.toJSON(message.burnAmount) : undefined);
    message.unbondAmount !== undefined &&
      (obj.unbondAmount = message.unbondAmount ? Coin.toJSON(message.unbondAmount) : undefined);
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    message.state !== undefined && (obj.state = unbonding_UnbondingStateToJSON(message.state));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Unbonding>, I>>(object: I): Unbonding {
    const message = createBaseUnbonding();
    message.chainId = object.chainId ?? "";
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.matureTime =
      object.matureTime !== undefined && object.matureTime !== null
        ? Timestamp.fromPartial(object.matureTime)
        : undefined;
    message.burnAmount =
      object.burnAmount !== undefined && object.burnAmount !== null
        ? Coin.fromPartial(object.burnAmount)
        : undefined;
    message.unbondAmount =
      object.unbondAmount !== undefined && object.unbondAmount !== null
        ? Coin.fromPartial(object.unbondAmount)
        : undefined;
    message.ibcSequenceId = object.ibcSequenceId ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};
function createBaseUserUnbonding(): UserUnbonding {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    address: "",
    stkAmount: undefined,
    unbondAmount: undefined,
  };
}
export const UserUnbonding = {
  encode(message: UserUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): UserUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64() as Long;
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
      address: isSet(object.address) ? String(object.address) : "",
      stkAmount: isSet(object.stkAmount) ? Coin.fromJSON(object.stkAmount) : undefined,
      unbondAmount: isSet(object.unbondAmount) ? Coin.fromJSON(object.unbondAmount) : undefined,
    };
  },
  toJSON(message: UserUnbonding): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.stkAmount !== undefined &&
      (obj.stkAmount = message.stkAmount ? Coin.toJSON(message.stkAmount) : undefined);
    message.unbondAmount !== undefined &&
      (obj.unbondAmount = message.unbondAmount ? Coin.toJSON(message.unbondAmount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserUnbonding>, I>>(object: I): UserUnbonding {
    const message = createBaseUserUnbonding();
    message.chainId = object.chainId ?? "";
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.address = object.address ?? "";
    message.stkAmount =
      object.stkAmount !== undefined && object.stkAmount !== null
        ? Coin.fromPartial(object.stkAmount)
        : undefined;
    message.unbondAmount =
      object.unbondAmount !== undefined && object.unbondAmount !== null
        ? Coin.fromPartial(object.unbondAmount)
        : undefined;
    return message;
  },
};
function createBaseValidatorUnbonding(): ValidatorUnbonding {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    matureTime: undefined,
    validatorAddress: "",
    amount: undefined,
    ibcSequenceId: "",
  };
}
export const ValidatorUnbonding = {
  encode(message: ValidatorUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.epochNumber.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.epochNumber = reader.int64() as Long;
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
      matureTime: isSet(object.matureTime) ? fromJsonTimestamp(object.matureTime) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      ibcSequenceId: isSet(object.ibcSequenceId) ? String(object.ibcSequenceId) : "",
    };
  },
  toJSON(message: ValidatorUnbonding): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
    message.matureTime !== undefined && (obj.matureTime = fromTimestamp(message.matureTime).toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.ibcSequenceId !== undefined && (obj.ibcSequenceId = message.ibcSequenceId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorUnbonding>, I>>(object: I): ValidatorUnbonding {
    const message = createBaseValidatorUnbonding();
    message.chainId = object.chainId ?? "";
    message.epochNumber =
      object.epochNumber !== undefined && object.epochNumber !== null
        ? Long.fromValue(object.epochNumber)
        : Long.ZERO;
    message.matureTime =
      object.matureTime !== undefined && object.matureTime !== null
        ? Timestamp.fromPartial(object.matureTime)
        : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
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
  encode(message: KVUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): KVUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },
  toJSON(message: KVUpdate): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<KVUpdate>, I>>(object: I): KVUpdate {
    const message = createBaseKVUpdate();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};
