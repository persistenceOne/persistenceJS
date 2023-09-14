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
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
/** GenesisState defines the lscosmos module's genesis state. */
export interface GenesisState {
  params: Params;
  /** this line is used by starport scaffolding # genesis/proto/state */
  moduleEnabled: boolean;
  hostChainParams: HostChainParams;
  allowListedValidators: AllowListedValidators;
  delegationState: DelegationState;
  hostChainRewardAddress: HostChainRewardAddress;
  iBCAmountTransientStore: IBCAmountTransientStore;
  unbondingEpochCValues: UnbondingEpochCValue[];
  delegatorUnbondingEpochEntries: DelegatorUnbondingEpochEntry[];
  hostAccounts: HostAccounts;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    moduleEnabled: false,
    hostChainParams: HostChainParams.fromPartial({}),
    allowListedValidators: AllowListedValidators.fromPartial({}),
    delegationState: DelegationState.fromPartial({}),
    hostChainRewardAddress: HostChainRewardAddress.fromPartial({}),
    iBCAmountTransientStore: IBCAmountTransientStore.fromPartial({}),
    unbondingEpochCValues: [],
    delegatorUnbondingEpochEntries: [],
    hostAccounts: HostAccounts.fromPartial({}),
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.moduleEnabled)) obj.moduleEnabled = Boolean(object.moduleEnabled);
    if (isSet(object.hostChainParams)) obj.hostChainParams = HostChainParams.fromJSON(object.hostChainParams);
    if (isSet(object.allowListedValidators))
      obj.allowListedValidators = AllowListedValidators.fromJSON(object.allowListedValidators);
    if (isSet(object.delegationState)) obj.delegationState = DelegationState.fromJSON(object.delegationState);
    if (isSet(object.hostChainRewardAddress))
      obj.hostChainRewardAddress = HostChainRewardAddress.fromJSON(object.hostChainRewardAddress);
    if (isSet(object.iBCAmountTransientStore))
      obj.iBCAmountTransientStore = IBCAmountTransientStore.fromJSON(object.iBCAmountTransientStore);
    if (Array.isArray(object?.unbondingEpochCValues))
      obj.unbondingEpochCValues = object.unbondingEpochCValues.map((e: any) =>
        UnbondingEpochCValue.fromJSON(e),
      );
    if (Array.isArray(object?.delegatorUnbondingEpochEntries))
      obj.delegatorUnbondingEpochEntries = object.delegatorUnbondingEpochEntries.map((e: any) =>
        DelegatorUnbondingEpochEntry.fromJSON(e),
      );
    if (isSet(object.hostAccounts)) obj.hostAccounts = HostAccounts.fromJSON(object.hostAccounts);
    return obj;
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.moduleEnabled = object.moduleEnabled ?? false;
    if (object.hostChainParams !== undefined && object.hostChainParams !== null) {
      message.hostChainParams = HostChainParams.fromPartial(object.hostChainParams);
    }
    if (object.allowListedValidators !== undefined && object.allowListedValidators !== null) {
      message.allowListedValidators = AllowListedValidators.fromPartial(object.allowListedValidators);
    }
    if (object.delegationState !== undefined && object.delegationState !== null) {
      message.delegationState = DelegationState.fromPartial(object.delegationState);
    }
    if (object.hostChainRewardAddress !== undefined && object.hostChainRewardAddress !== null) {
      message.hostChainRewardAddress = HostChainRewardAddress.fromPartial(object.hostChainRewardAddress);
    }
    if (object.iBCAmountTransientStore !== undefined && object.iBCAmountTransientStore !== null) {
      message.iBCAmountTransientStore = IBCAmountTransientStore.fromPartial(object.iBCAmountTransientStore);
    }
    message.unbondingEpochCValues =
      object.unbondingEpochCValues?.map((e) => UnbondingEpochCValue.fromPartial(e)) || [];
    message.delegatorUnbondingEpochEntries =
      object.delegatorUnbondingEpochEntries?.map((e) => DelegatorUnbondingEpochEntry.fromPartial(e)) || [];
    if (object.hostAccounts !== undefined && object.hostAccounts !== null) {
      message.hostAccounts = HostAccounts.fromPartial(object.hostAccounts);
    }
    return message;
  },
};
