/* eslint-disable */
import { Timestamp } from "../../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.store.v1beta1";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  version: Long;
  storeInfos: StoreInfo[];
  timestamp: Timestamp;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string;
  commitId: CommitID;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 */
export interface CommitID {
  version: Long;
  hash: Uint8Array;
}
function createBaseCommitInfo(): CommitInfo {
  return {
    version: Long.ZERO,
    storeInfos: [],
    timestamp: Timestamp.fromPartial({}),
  };
}
export const CommitInfo = {
  encode(message: CommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitInfo {
    const obj = createBaseCommitInfo();
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (Array.isArray(object?.storeInfos))
      obj.storeInfos = object.storeInfos.map((e: any) => StoreInfo.fromJSON(e));
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map((e) => (e ? StoreInfo.toJSON(e) : undefined));
    } else {
      obj.storeInfos = [];
    }
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CommitInfo>, I>>(object: I): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.storeInfos = object.storeInfos?.map((e) => StoreInfo.fromPartial(e)) || [];
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseStoreInfo(): StoreInfo {
  return {
    name: "",
    commitId: CommitID.fromPartial({}),
  };
}
export const StoreInfo = {
  encode(message: StoreInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreInfo {
    const obj = createBaseStoreInfo();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.commitId)) obj.commitId = CommitID.fromJSON(object.commitId);
    return obj;
  },
  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commitId !== undefined &&
      (obj.commitId = message.commitId ? CommitID.toJSON(message.commitId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StoreInfo>, I>>(object: I): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    if (object.commitId !== undefined && object.commitId !== null) {
      message.commitId = CommitID.fromPartial(object.commitId);
    }
    return message;
  },
};
function createBaseCommitID(): CommitID {
  return {
    version: Long.ZERO,
    hash: new Uint8Array(),
  };
}
export const CommitID = {
  encode(message: CommitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitID {
    const obj = createBaseCommitID();
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CommitID>, I>>(object: I): CommitID {
    const message = createBaseCommitID();
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};
