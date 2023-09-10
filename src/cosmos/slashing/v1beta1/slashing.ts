/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import {
  Long,
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** Height at which validator was first a candidate OR was unjailed */
  startHeight: Long;
  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  indexOffset: Long;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil: Timestamp;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned: boolean;
  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter: Long;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: Long;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration: Duration;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}
function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: "",
    startHeight: Long.ZERO,
    indexOffset: Long.ZERO,
    jailedUntil: Timestamp.fromPartial({}),
    tombstoned: false,
    missedBlocksCounter: Long.ZERO,
  };
}
export const ValidatorSigningInfo = {
  encode(message: ValidatorSigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.startHeight.isZero()) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (!message.indexOffset.isZero()) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(message.jailedUntil, writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (!message.missedBlocksCounter.isZero()) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = reader.int64() as Long;
          break;
        case 3:
          message.indexOffset = reader.int64() as Long;
          break;
        case 4:
          message.jailedUntil = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSigningInfo {
    const obj = createBaseValidatorSigningInfo();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.startHeight)) obj.startHeight = Long.fromValue(object.startHeight);
    if (isSet(object.indexOffset)) obj.indexOffset = Long.fromValue(object.indexOffset);
    if (isSet(object.jailedUntil)) obj.jailedUntil = fromJsonTimestamp(object.jailedUntil);
    if (isSet(object.tombstoned)) obj.tombstoned = Boolean(object.tombstoned);
    if (isSet(object.missedBlocksCounter))
      obj.missedBlocksCounter = Long.fromValue(object.missedBlocksCounter);
    return obj;
  },
  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
    message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || Long.ZERO).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = fromTimestamp(message.jailedUntil).toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined &&
      (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(object: I): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = Long.fromValue(object.startHeight);
    }
    if (object.indexOffset !== undefined && object.indexOffset !== null) {
      message.indexOffset = Long.fromValue(object.indexOffset);
    }
    if (object.jailedUntil !== undefined && object.jailedUntil !== null) {
      message.jailedUntil = Timestamp.fromPartial(object.jailedUntil);
    }
    message.tombstoned = object.tombstoned ?? false;
    if (object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null) {
      message.missedBlocksCounter = Long.fromValue(object.missedBlocksCounter);
    }
    return message;
  },
};
function createBaseParams(): Params {
  return {
    signedBlocksWindow: Long.ZERO,
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: Duration.fromPartial({}),
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array(),
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.signedBlocksWindow.isZero()) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = reader.int64() as Long;
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.signedBlocksWindow)) obj.signedBlocksWindow = Long.fromValue(object.signedBlocksWindow);
    if (isSet(object.minSignedPerWindow)) obj.minSignedPerWindow = bytesFromBase64(object.minSignedPerWindow);
    if (isSet(object.downtimeJailDuration))
      obj.downtimeJailDuration = Duration.fromJSON(object.downtimeJailDuration);
    if (isSet(object.slashFractionDoubleSign))
      obj.slashFractionDoubleSign = bytesFromBase64(object.slashFractionDoubleSign);
    if (isSet(object.slashFractionDowntime))
      obj.slashFractionDowntime = bytesFromBase64(object.slashFractionDowntime);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined &&
      (obj.signedBlocksWindow = (message.signedBlocksWindow || Long.ZERO).toString());
    message.minSignedPerWindow !== undefined &&
      (obj.minSignedPerWindow = base64FromBytes(
        message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array(),
      ));
    message.downtimeJailDuration !== undefined &&
      (obj.downtimeJailDuration = message.downtimeJailDuration
        ? Duration.toJSON(message.downtimeJailDuration)
        : undefined);
    message.slashFractionDoubleSign !== undefined &&
      (obj.slashFractionDoubleSign = base64FromBytes(
        message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array(),
      ));
    message.slashFractionDowntime !== undefined &&
      (obj.slashFractionDowntime = base64FromBytes(
        message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null) {
      message.signedBlocksWindow = Long.fromValue(object.signedBlocksWindow);
    }
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    if (object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null) {
      message.downtimeJailDuration = Duration.fromPartial(object.downtimeJailDuration);
    }
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
};
