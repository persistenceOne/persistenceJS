/* eslint-disable */
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.reflection.v1";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}
function createBaseFileDescriptorsRequest(): FileDescriptorsRequest {
  return {};
}
export const FileDescriptorsRequest = {
  encode(_: FileDescriptorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsRequest();
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
  fromJSON(_: any): FileDescriptorsRequest {
    const obj = createBaseFileDescriptorsRequest();
    return obj;
  },
  toJSON(_: FileDescriptorsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<FileDescriptorsRequest>): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  },
};
function createBaseFileDescriptorsResponse(): FileDescriptorsResponse {
  return {
    files: [],
  };
}
export const FileDescriptorsResponse = {
  encode(message: FileDescriptorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorsResponse {
    const obj = createBaseFileDescriptorsResponse();
    if (Array.isArray(object?.files))
      obj.files = object.files.map((e: any) => FileDescriptorProto.fromJSON(e));
    return obj;
  },
  toJSON(message: FileDescriptorsResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => (e ? FileDescriptorProto.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
  },
  fromPartial(object: Partial<FileDescriptorsResponse>): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
};
/** Package cosmos.reflection.v1 provides support for inspecting protobuf
 file descriptors. */
export interface ReflectionService {
  /**
   * FileDescriptors queries all the file descriptors in the app in order
   * to enable easier generation of dynamic clients.
   */
  FileDescriptors(request?: FileDescriptorsRequest): Promise<FileDescriptorsResponse>;
}
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FileDescriptors = this.FileDescriptors.bind(this);
  }
  FileDescriptors(request: FileDescriptorsRequest = {}): Promise<FileDescriptorsResponse> {
    const data = FileDescriptorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.reflection.v1.ReflectionService", "FileDescriptors", data);
    return promise.then((data) => FileDescriptorsResponse.decode(new BinaryReader(data)));
  }
}
