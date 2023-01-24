/* eslint-disable */
import { Params } from "./params";
import {
  HostChainParams,
  AllowListedValidators,
  DelegationState,
  HostChainRewardAddress,
  IBCAmountTransientStore,
  UnbondingEpochCValue,
  DelegatorUnbondingEpochEntry,
  HostAccounts,
} from "./lscosmos";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
/** GenesisState defines the lscosmos module's genesis state. */

export interface GenesisState {
  params?: Params;
  /** this line is used by starport scaffolding # genesis/proto/state */

  moduleEnabled: boolean;
  hostChainParams?: HostChainParams;
  allowListedValidators?: AllowListedValidators;
  delegationState?: DelegationState;
  hostChainRewardAddress?: HostChainRewardAddress;
  iBCAmountTransientStore?: IBCAmountTransientStore;
  unbondingEpochCValues: UnbondingEpochCValue[];
  delegatorUnbondingEpochEntries: DelegatorUnbondingEpochEntry[];
  hostAccounts?: HostAccounts;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    moduleEnabled: false,
    hostChainParams: undefined,
    allowListedValidators: undefined,
    delegationState: undefined,
    hostChainRewardAddress: undefined,
    iBCAmountTransientStore: undefined,
    unbondingEpochCValues: [],
    delegatorUnbondingEpochEntries: [],
    hostAccounts: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.moduleEnabled === true) {
      writer.uint32(16).bool(message.moduleEnabled);
    }

    if (message.hostChainParams !== undefined) {
      HostChainParams.encode(message.hostChainParams, writer.uint32(26).fork()).ldelim();
    }

    if (message.allowListedValidators !== undefined) {
      AllowListedValidators.encode(message.allowListedValidators, writer.uint32(34).fork()).ldelim();
    }

    if (message.delegationState !== undefined) {
      DelegationState.encode(message.delegationState, writer.uint32(42).fork()).ldelim();
    }

    if (message.hostChainRewardAddress !== undefined) {
      HostChainRewardAddress.encode(message.hostChainRewardAddress, writer.uint32(50).fork()).ldelim();
    }

    if (message.iBCAmountTransientStore !== undefined) {
      IBCAmountTransientStore.encode(message.iBCAmountTransientStore, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.unbondingEpochCValues) {
      UnbondingEpochCValue.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.delegatorUnbondingEpochEntries) {
      DelegatorUnbondingEpochEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    if (message.hostAccounts !== undefined) {
      HostAccounts.encode(message.hostAccounts, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.moduleEnabled = reader.bool();
          break;

        case 3:
          message.hostChainParams = HostChainParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.allowListedValidators = AllowListedValidators.decode(reader, reader.uint32());
          break;

        case 5:
          message.delegationState = DelegationState.decode(reader, reader.uint32());
          break;

        case 6:
          message.hostChainRewardAddress = HostChainRewardAddress.decode(reader, reader.uint32());
          break;

        case 7:
          message.iBCAmountTransientStore = IBCAmountTransientStore.decode(reader, reader.uint32());
          break;

        case 8:
          message.unbondingEpochCValues.push(UnbondingEpochCValue.decode(reader, reader.uint32()));
          break;

        case 9:
          message.delegatorUnbondingEpochEntries.push(
            DelegatorUnbondingEpochEntry.decode(reader, reader.uint32()),
          );
          break;

        case 10:
          message.hostAccounts = HostAccounts.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      moduleEnabled: isSet(object.moduleEnabled) ? Boolean(object.moduleEnabled) : false,
      hostChainParams: isSet(object.hostChainParams)
        ? HostChainParams.fromJSON(object.hostChainParams)
        : undefined,
      allowListedValidators: isSet(object.allowListedValidators)
        ? AllowListedValidators.fromJSON(object.allowListedValidators)
        : undefined,
      delegationState: isSet(object.delegationState)
        ? DelegationState.fromJSON(object.delegationState)
        : undefined,
      hostChainRewardAddress: isSet(object.hostChainRewardAddress)
        ? HostChainRewardAddress.fromJSON(object.hostChainRewardAddress)
        : undefined,
      iBCAmountTransientStore: isSet(object.iBCAmountTransientStore)
        ? IBCAmountTransientStore.fromJSON(object.iBCAmountTransientStore)
        : undefined,
      unbondingEpochCValues: Array.isArray(object?.unbondingEpochCValues)
        ? object.unbondingEpochCValues.map((e: any) => UnbondingEpochCValue.fromJSON(e))
        : [],
      delegatorUnbondingEpochEntries: Array.isArray(object?.delegatorUnbondingEpochEntries)
        ? object.delegatorUnbondingEpochEntries.map((e: any) => DelegatorUnbondingEpochEntry.fromJSON(e))
        : [],
      hostAccounts: isSet(object.hostAccounts) ? HostAccounts.fromJSON(object.hostAccounts) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.moduleEnabled !== undefined && (obj.moduleEnabled = message.moduleEnabled);
    message.hostChainParams !== undefined &&
      (obj.hostChainParams = message.hostChainParams
        ? HostChainParams.toJSON(message.hostChainParams)
        : undefined);
    message.allowListedValidators !== undefined &&
      (obj.allowListedValidators = message.allowListedValidators
        ? AllowListedValidators.toJSON(message.allowListedValidators)
        : undefined);
    message.delegationState !== undefined &&
      (obj.delegationState = message.delegationState
        ? DelegationState.toJSON(message.delegationState)
        : undefined);
    message.hostChainRewardAddress !== undefined &&
      (obj.hostChainRewardAddress = message.hostChainRewardAddress
        ? HostChainRewardAddress.toJSON(message.hostChainRewardAddress)
        : undefined);
    message.iBCAmountTransientStore !== undefined &&
      (obj.iBCAmountTransientStore = message.iBCAmountTransientStore
        ? IBCAmountTransientStore.toJSON(message.iBCAmountTransientStore)
        : undefined);

    if (message.unbondingEpochCValues) {
      obj.unbondingEpochCValues = message.unbondingEpochCValues.map((e) =>
        e ? UnbondingEpochCValue.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingEpochCValues = [];
    }

    if (message.delegatorUnbondingEpochEntries) {
      obj.delegatorUnbondingEpochEntries = message.delegatorUnbondingEpochEntries.map((e) =>
        e ? DelegatorUnbondingEpochEntry.toJSON(e) : undefined,
      );
    } else {
      obj.delegatorUnbondingEpochEntries = [];
    }

    message.hostAccounts !== undefined &&
      (obj.hostAccounts = message.hostAccounts ? HostAccounts.toJSON(message.hostAccounts) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.moduleEnabled = object.moduleEnabled ?? false;
    message.hostChainParams =
      object.hostChainParams !== undefined && object.hostChainParams !== null
        ? HostChainParams.fromPartial(object.hostChainParams)
        : undefined;
    message.allowListedValidators =
      object.allowListedValidators !== undefined && object.allowListedValidators !== null
        ? AllowListedValidators.fromPartial(object.allowListedValidators)
        : undefined;
    message.delegationState =
      object.delegationState !== undefined && object.delegationState !== null
        ? DelegationState.fromPartial(object.delegationState)
        : undefined;
    message.hostChainRewardAddress =
      object.hostChainRewardAddress !== undefined && object.hostChainRewardAddress !== null
        ? HostChainRewardAddress.fromPartial(object.hostChainRewardAddress)
        : undefined;
    message.iBCAmountTransientStore =
      object.iBCAmountTransientStore !== undefined && object.iBCAmountTransientStore !== null
        ? IBCAmountTransientStore.fromPartial(object.iBCAmountTransientStore)
        : undefined;
    message.unbondingEpochCValues =
      object.unbondingEpochCValues?.map((e) => UnbondingEpochCValue.fromPartial(e)) || [];
    message.delegatorUnbondingEpochEntries =
      object.delegatorUnbondingEpochEntries?.map((e) => DelegatorUnbondingEpochEntry.fromPartial(e)) || [];
    message.hostAccounts =
      object.hostAccounts !== undefined && object.hostAccounts !== null
        ? HostAccounts.fromPartial(object.hostAccounts)
        : undefined;
    return message;
  },
};
