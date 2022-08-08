import { Message } from "./types";
import { Duration } from "../../google/protobuf/duration";
import { EventDataRoundState } from "../types/events";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
  msg: Message;
  peerId: string;
}

/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
  duration: Duration;
  height: Long;
  round: number;
  step: number;
}

/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
  height: Long;
}
export interface WALMessage {
  eventDataRoundState?: EventDataRoundState;
  msgInfo?: MsgInfo;
  timeoutInfo?: TimeoutInfo;
  endHeight?: EndHeight;
}

/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
  time: Date;
  msg: WALMessage;
}

function createBaseMsgInfo(): MsgInfo {
  return {
    msg: undefined,
    peerId: "",
  };
}

export const MsgInfo = {
  encode(message: MsgInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }

    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msg = Message.decode(reader, reader.uint32());
          break;

        case 2:
          message.peerId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInfo {
    return {
      msg: isSet(object.msg) ? Message.fromJSON(object.msg) : undefined,
      peerId: isSet(object.peerId) ? String(object.peerId) : "",
    };
  },

  toJSON(message: MsgInfo): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? Message.toJSON(message.msg) : undefined);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInfo>): MsgInfo {
    const message = createBaseMsgInfo();
    message.msg =
      object.msg !== undefined && object.msg !== null ? Message.fromPartial(object.msg) : undefined;
    message.peerId = object.peerId ?? "";
    return message;
  },
};

function createBaseTimeoutInfo(): TimeoutInfo {
  return {
    duration: undefined,
    height: Long.ZERO,
    round: 0,
    step: 0,
  };
}

export const TimeoutInfo = {
  encode(message: TimeoutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }

    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeoutInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.height = reader.int64() as Long;
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.step = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TimeoutInfo {
    return {
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0,
    };
  },

  toJSON(message: TimeoutInfo): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = message.duration);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.step !== undefined && (obj.step = Math.round(message.step));
    return obj;
  },

  fromPartial(object: DeepPartial<TimeoutInfo>): TimeoutInfo {
    const message = createBaseTimeoutInfo();
    message.duration = object.duration ?? undefined;
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.step = object.step ?? 0;
    return message;
  },
};

function createBaseEndHeight(): EndHeight {
  return {
    height: Long.ZERO,
  };
}

export const EndHeight = {
  encode(message: EndHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndHeight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EndHeight {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
    };
  },

  toJSON(message: EndHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EndHeight>): EndHeight {
    const message = createBaseEndHeight();
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
};

function createBaseWALMessage(): WALMessage {
  return {
    eventDataRoundState: undefined,
    msgInfo: undefined,
    timeoutInfo: undefined,
    endHeight: undefined,
  };
}

export const WALMessage = {
  encode(message: WALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventDataRoundState !== undefined) {
      EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
    }

    if (message.msgInfo !== undefined) {
      MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.timeoutInfo !== undefined) {
      TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
    }

    if (message.endHeight !== undefined) {
      EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWALMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.eventDataRoundState = EventDataRoundState.decode(reader, reader.uint32());
          break;

        case 2:
          message.msgInfo = MsgInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.timeoutInfo = TimeoutInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.endHeight = EndHeight.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WALMessage {
    return {
      eventDataRoundState: isSet(object.eventDataRoundState)
        ? EventDataRoundState.fromJSON(object.eventDataRoundState)
        : undefined,
      msgInfo: isSet(object.msgInfo) ? MsgInfo.fromJSON(object.msgInfo) : undefined,
      timeoutInfo: isSet(object.timeoutInfo) ? TimeoutInfo.fromJSON(object.timeoutInfo) : undefined,
      endHeight: isSet(object.endHeight) ? EndHeight.fromJSON(object.endHeight) : undefined,
    };
  },

  toJSON(message: WALMessage): unknown {
    const obj: any = {};
    message.eventDataRoundState !== undefined &&
      (obj.eventDataRoundState = message.eventDataRoundState
        ? EventDataRoundState.toJSON(message.eventDataRoundState)
        : undefined);
    message.msgInfo !== undefined &&
      (obj.msgInfo = message.msgInfo ? MsgInfo.toJSON(message.msgInfo) : undefined);
    message.timeoutInfo !== undefined &&
      (obj.timeoutInfo = message.timeoutInfo ? TimeoutInfo.toJSON(message.timeoutInfo) : undefined);
    message.endHeight !== undefined &&
      (obj.endHeight = message.endHeight ? EndHeight.toJSON(message.endHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WALMessage>): WALMessage {
    const message = createBaseWALMessage();
    message.eventDataRoundState =
      object.eventDataRoundState !== undefined && object.eventDataRoundState !== null
        ? EventDataRoundState.fromPartial(object.eventDataRoundState)
        : undefined;
    message.msgInfo =
      object.msgInfo !== undefined && object.msgInfo !== null
        ? MsgInfo.fromPartial(object.msgInfo)
        : undefined;
    message.timeoutInfo =
      object.timeoutInfo !== undefined && object.timeoutInfo !== null
        ? TimeoutInfo.fromPartial(object.timeoutInfo)
        : undefined;
    message.endHeight =
      object.endHeight !== undefined && object.endHeight !== null
        ? EndHeight.fromPartial(object.endHeight)
        : undefined;
    return message;
  },
};

function createBaseTimedWALMessage(): TimedWALMessage {
  return {
    time: undefined,
    msg: undefined,
  };
}

export const TimedWALMessage = {
  encode(message: TimedWALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }

    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedWALMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.msg = WALMessage.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TimedWALMessage {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      msg: isSet(object.msg) ? WALMessage.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: TimedWALMessage): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.msg !== undefined && (obj.msg = message.msg ? WALMessage.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TimedWALMessage>): TimedWALMessage {
    const message = createBaseTimedWALMessage();
    message.time = object.time ?? undefined;
    message.msg =
      object.msg !== undefined && object.msg !== null ? WALMessage.fromPartial(object.msg) : undefined;
    return message;
  },
};
