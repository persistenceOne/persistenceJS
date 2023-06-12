/* eslint-disable */
import { Params } from "./params";
import { HostChain, Deposit, Unbonding, UserUnbonding, ValidatorUnbonding } from "./liquidstakeibc";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "pstake.liquidstakeibc.v1beta1";
/** GenesisState defines the liquidstakeibc module's genesis state. */
export interface GenesisState {
  params?: Params;
  /** initial host chain list */
  hostChains: HostChain[];
  /** initial deposit list */
  deposits: Deposit[];
  /** initial unbondings */
  unbondings: Unbonding[];
  /** initial user unbondings */
  userUnbondings: UserUnbonding[];
  /** validator unbondings */
  validatorUnbondings: ValidatorUnbonding[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    hostChains: [],
    deposits: [],
    unbondings: [],
    userUnbondings: [],
    validatorUnbondings: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hostChains) {
      HostChain.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.userUnbondings) {
      UserUnbonding.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorUnbondings) {
      ValidatorUnbonding.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.hostChains.push(HostChain.decode(reader, reader.uint32()));
          break;
        case 3:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unbondings.push(Unbonding.decode(reader, reader.uint32()));
          break;
        case 5:
          message.userUnbondings.push(UserUnbonding.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorUnbondings.push(ValidatorUnbonding.decode(reader, reader.uint32()));
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
      hostChains: Array.isArray(object?.hostChains)
        ? object.hostChains.map((e: any) => HostChain.fromJSON(e))
        : [],
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      unbondings: Array.isArray(object?.unbondings)
        ? object.unbondings.map((e: any) => Unbonding.fromJSON(e))
        : [],
      userUnbondings: Array.isArray(object?.userUnbondings)
        ? object.userUnbondings.map((e: any) => UserUnbonding.fromJSON(e))
        : [],
      validatorUnbondings: Array.isArray(object?.validatorUnbondings)
        ? object.validatorUnbondings.map((e: any) => ValidatorUnbonding.fromJSON(e))
        : [],
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.hostChains) {
      obj.hostChains = message.hostChains.map((e) => (e ? HostChain.toJSON(e) : undefined));
    } else {
      obj.hostChains = [];
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? Deposit.toJSON(e) : undefined));
    } else {
      obj.deposits = [];
    }
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) => (e ? Unbonding.toJSON(e) : undefined));
    } else {
      obj.unbondings = [];
    }
    if (message.userUnbondings) {
      obj.userUnbondings = message.userUnbondings.map((e) => (e ? UserUnbonding.toJSON(e) : undefined));
    } else {
      obj.userUnbondings = [];
    }
    if (message.validatorUnbondings) {
      obj.validatorUnbondings = message.validatorUnbondings.map((e) =>
        e ? ValidatorUnbonding.toJSON(e) : undefined,
      );
    } else {
      obj.validatorUnbondings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.hostChains = object.hostChains?.map((e) => HostChain.fromPartial(e)) || [];
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    message.unbondings = object.unbondings?.map((e) => Unbonding.fromPartial(e)) || [];
    message.userUnbondings = object.userUnbondings?.map((e) => UserUnbonding.fromPartial(e)) || [];
    message.validatorUnbondings =
      object.validatorUnbondings?.map((e) => ValidatorUnbonding.fromPartial(e)) || [];
    return message;
  },
};
