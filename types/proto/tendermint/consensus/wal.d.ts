import { Message } from "./types";
import { Duration } from "../../google/protobuf/duration";
import { EventDataRoundState } from "../types/events";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
export declare const MsgInfo: {
  encode(message: MsgInfo, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo;
  fromJSON(object: any): MsgInfo;
  toJSON(message: MsgInfo): unknown;
  fromPartial(object: DeepPartial<MsgInfo>): MsgInfo;
};
export declare const TimeoutInfo: {
  encode(message: TimeoutInfo, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo;
  fromJSON(object: any): TimeoutInfo;
  toJSON(message: TimeoutInfo): unknown;
  fromPartial(object: DeepPartial<TimeoutInfo>): TimeoutInfo;
};
export declare const EndHeight: {
  encode(message: EndHeight, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight;
  fromJSON(object: any): EndHeight;
  toJSON(message: EndHeight): unknown;
  fromPartial(object: DeepPartial<EndHeight>): EndHeight;
};
export declare const WALMessage: {
  encode(message: WALMessage, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage;
  fromJSON(object: any): WALMessage;
  toJSON(message: WALMessage): unknown;
  fromPartial(object: DeepPartial<WALMessage>): WALMessage;
};
export declare const TimedWALMessage: {
  encode(message: TimedWALMessage, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage;
  fromJSON(object: any): TimedWALMessage;
  toJSON(message: TimedWALMessage): unknown;
  fromPartial(object: DeepPartial<TimedWALMessage>): TimedWALMessage;
};
