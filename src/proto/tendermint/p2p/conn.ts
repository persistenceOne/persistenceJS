import { PublicKey } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
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

function createBasePacketPing(): PacketPing {
  return {};
}

export const PacketPing = {
  encode(_: PacketPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPing();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): PacketPing {
    return {};
  },

  toJSON(_: PacketPing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PacketPing>): PacketPing {
    const message = createBasePacketPing();
    return message;
  },
};

function createBasePacketPong(): PacketPong {
  return {};
}

export const PacketPong = {
  encode(_: PacketPong, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPong();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): PacketPong {
    return {};
  },

  toJSON(_: PacketPong): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PacketPong>): PacketPong {
    const message = createBasePacketPong();
    return message;
  },
};

function createBasePacketMsg(): PacketMsg {
  return {
    channelId: 0,
    eof: false,
    data: new Uint8Array(),
  };
}

export const PacketMsg = {
  encode(message: PacketMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).int32(message.channelId);
    }

    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketMsg();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.int32();
          break;

        case 2:
          message.eof = reader.bool();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PacketMsg {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      eof: isSet(object.eof) ? Boolean(object.eof) : false,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: PacketMsg): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.eof !== undefined && (obj.eof = message.eof);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<PacketMsg>): PacketMsg {
    const message = createBasePacketMsg();
    message.channelId = object.channelId ?? 0;
    message.eof = object.eof ?? false;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBasePacket(): Packet {
  return {
    packetPing: undefined,
    packetPong: undefined,
    packetMsg: undefined,
  };
}

export const Packet = {
  encode(message: Packet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetPing !== undefined) {
      PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
    }

    if (message.packetPong !== undefined) {
      PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
    }

    if (message.packetMsg !== undefined) {
      PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packetPing = PacketPing.decode(reader, reader.uint32());
          break;

        case 2:
          message.packetPong = PacketPong.decode(reader, reader.uint32());
          break;

        case 3:
          message.packetMsg = PacketMsg.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Packet {
    return {
      packetPing: isSet(object.packetPing) ? PacketPing.fromJSON(object.packetPing) : undefined,
      packetPong: isSet(object.packetPong) ? PacketPong.fromJSON(object.packetPong) : undefined,
      packetMsg: isSet(object.packetMsg) ? PacketMsg.fromJSON(object.packetMsg) : undefined,
    };
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.packetPing !== undefined &&
      (obj.packetPing = message.packetPing ? PacketPing.toJSON(message.packetPing) : undefined);
    message.packetPong !== undefined &&
      (obj.packetPong = message.packetPong ? PacketPong.toJSON(message.packetPong) : undefined);
    message.packetMsg !== undefined &&
      (obj.packetMsg = message.packetMsg ? PacketMsg.toJSON(message.packetMsg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = createBasePacket();
    message.packetPing =
      object.packetPing !== undefined && object.packetPing !== null
        ? PacketPing.fromPartial(object.packetPing)
        : undefined;
    message.packetPong =
      object.packetPong !== undefined && object.packetPong !== null
        ? PacketPong.fromPartial(object.packetPong)
        : undefined;
    message.packetMsg =
      object.packetMsg !== undefined && object.packetMsg !== null
        ? PacketMsg.fromPartial(object.packetMsg)
        : undefined;
    return message;
  },
};

function createBaseAuthSigMessage(): AuthSigMessage {
  return {
    pubKey: undefined,
    sig: new Uint8Array(),
  };
}

export const AuthSigMessage = {
  encode(message: AuthSigMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthSigMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.sig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AuthSigMessage {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
    };
  },

  toJSON(message: AuthSigMessage): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.sig !== undefined &&
      (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<AuthSigMessage>): AuthSigMessage {
    const message = createBaseAuthSigMessage();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  },
};
