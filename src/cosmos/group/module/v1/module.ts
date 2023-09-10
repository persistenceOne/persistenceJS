/* eslint-disable */
import { Duration } from "../../../../google/protobuf/duration";
import { Long, isSet, DeepPartial, Exact } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.group.module.v1";
/** Module is the config object of the group module. */
export interface Module {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  maxExecutionPeriod: Duration;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: Long;
}
function createBaseModule(): Module {
  return {
    maxExecutionPeriod: Duration.fromPartial({}),
    maxMetadataLen: Long.UZERO,
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxExecutionPeriod !== undefined) {
      Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (!message.maxMetadataLen.isZero()) {
      writer.uint32(16).uint64(message.maxMetadataLen);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxMetadataLen = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.maxExecutionPeriod))
      obj.maxExecutionPeriod = Duration.fromJSON(object.maxExecutionPeriod);
    if (isSet(object.maxMetadataLen)) obj.maxMetadataLen = Long.fromValue(object.maxMetadataLen);
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxExecutionPeriod !== undefined &&
      (obj.maxExecutionPeriod = message.maxExecutionPeriod
        ? Duration.toJSON(message.maxExecutionPeriod)
        : undefined);
    message.maxMetadataLen !== undefined &&
      (obj.maxMetadataLen = (message.maxMetadataLen || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    if (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null) {
      message.maxExecutionPeriod = Duration.fromPartial(object.maxExecutionPeriod);
    }
    if (object.maxMetadataLen !== undefined && object.maxMetadataLen !== null) {
      message.maxMetadataLen = Long.fromValue(object.maxMetadataLen);
    }
    return message;
  },
};
