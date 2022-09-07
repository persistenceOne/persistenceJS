import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface PacketPing {}
export interface PacketPong {}
export interface PacketMsg {
  channelId: number;
  eof: boolean;
  data: Uint8Array;
}
export interface Packet {
  packetPing?: PacketPing;
  packetPong?: PacketPong;
  packetMsg?: PacketMsg;
}
export interface AuthSigMessage {
  pubKey: PublicKey;
  sig: Uint8Array;
}
export declare const PacketPing: {
  encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing;
  fromJSON(_: any): PacketPing;
  toJSON(_: PacketPing): unknown;
  fromPartial(_: DeepPartial<PacketPing>): PacketPing;
};
export declare const PacketPong: {
  encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong;
  fromJSON(_: any): PacketPong;
  toJSON(_: PacketPong): unknown;
  fromPartial(_: DeepPartial<PacketPong>): PacketPong;
};
export declare const PacketMsg: {
  encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg;
  fromJSON(object: any): PacketMsg;
  toJSON(message: PacketMsg): unknown;
  fromPartial(object: DeepPartial<PacketMsg>): PacketMsg;
};
export declare const Packet: {
  encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Packet;
  fromJSON(object: any): Packet;
  toJSON(message: Packet): unknown;
  fromPartial(object: DeepPartial<Packet>): Packet;
};
export declare const AuthSigMessage: {
  encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage;
  fromJSON(object: any): AuthSigMessage;
  toJSON(message: AuthSigMessage): unknown;
  fromPartial(object: DeepPartial<AuthSigMessage>): AuthSigMessage;
};
