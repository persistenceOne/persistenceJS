/* eslint-disable */
import { CodeAuthorization, ContractAuthorization } from "./globalfee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.globalfee.v1";
/** SetCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetCodeAuthorizationProposal {
  title: string;
  description: string;
  codeAuthorization: CodeAuthorization;
}
/** RemoveCodeAuthorizationProposal */
/** @deprecated */
export interface RemoveCodeAuthorizationProposal {
  title: string;
  description: string;
  codeId: bigint;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface SetContractAuthorizationProposal {
  title: string;
  description: string;
  contractAuthorization: ContractAuthorization;
}
/** RemoveCodeAuthorizationProposal ... */
/** @deprecated */
export interface RemoveContractAuthorizationProposal {
  title: string;
  description: string;
  contractAddress: string;
}
function createBaseSetCodeAuthorizationProposal(): SetCodeAuthorizationProposal {
  return {
    title: "",
    description: "",
    codeAuthorization: CodeAuthorization.fromPartial({}),
  };
}
export const SetCodeAuthorizationProposal = {
  encode(message: SetCodeAuthorizationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeAuthorization !== undefined) {
      CodeAuthorization.encode(message.codeAuthorization, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetCodeAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCodeAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.codeAuthorization = CodeAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SetCodeAuthorizationProposal {
    const obj = createBaseSetCodeAuthorizationProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.codeAuthorization))
      obj.codeAuthorization = CodeAuthorization.fromJSON(object.codeAuthorization);
    return obj;
  },
  toJSON(message: SetCodeAuthorizationProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.codeAuthorization !== undefined &&
      (obj.codeAuthorization = message.codeAuthorization
        ? CodeAuthorization.toJSON(message.codeAuthorization)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<SetCodeAuthorizationProposal>): SetCodeAuthorizationProposal {
    const message = createBaseSetCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.codeAuthorization !== undefined && object.codeAuthorization !== null) {
      message.codeAuthorization = CodeAuthorization.fromPartial(object.codeAuthorization);
    }
    return message;
  },
};
function createBaseRemoveCodeAuthorizationProposal(): RemoveCodeAuthorizationProposal {
  return {
    title: "",
    description: "",
    codeId: BigInt(0),
  };
}
export const RemoveCodeAuthorizationProposal = {
  encode(
    message: RemoveCodeAuthorizationProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RemoveCodeAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveCodeAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RemoveCodeAuthorizationProposal {
    const obj = createBaseRemoveCodeAuthorizationProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    return obj;
  },
  toJSON(message: RemoveCodeAuthorizationProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<RemoveCodeAuthorizationProposal>): RemoveCodeAuthorizationProposal {
    const message = createBaseRemoveCodeAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
};
function createBaseSetContractAuthorizationProposal(): SetContractAuthorizationProposal {
  return {
    title: "",
    description: "",
    contractAuthorization: ContractAuthorization.fromPartial({}),
  };
}
export const SetContractAuthorizationProposal = {
  encode(
    message: SetContractAuthorizationProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAuthorization !== undefined) {
      ContractAuthorization.encode(message.contractAuthorization, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetContractAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetContractAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractAuthorization = ContractAuthorization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SetContractAuthorizationProposal {
    const obj = createBaseSetContractAuthorizationProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.contractAuthorization))
      obj.contractAuthorization = ContractAuthorization.fromJSON(object.contractAuthorization);
    return obj;
  },
  toJSON(message: SetContractAuthorizationProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contractAuthorization !== undefined &&
      (obj.contractAuthorization = message.contractAuthorization
        ? ContractAuthorization.toJSON(message.contractAuthorization)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<SetContractAuthorizationProposal>): SetContractAuthorizationProposal {
    const message = createBaseSetContractAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.contractAuthorization !== undefined && object.contractAuthorization !== null) {
      message.contractAuthorization = ContractAuthorization.fromPartial(object.contractAuthorization);
    }
    return message;
  },
};
function createBaseRemoveContractAuthorizationProposal(): RemoveContractAuthorizationProposal {
  return {
    title: "",
    description: "",
    contractAddress: "",
  };
}
export const RemoveContractAuthorizationProposal = {
  encode(
    message: RemoveContractAuthorizationProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RemoveContractAuthorizationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveContractAuthorizationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RemoveContractAuthorizationProposal {
    const obj = createBaseRemoveContractAuthorizationProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: RemoveContractAuthorizationProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<RemoveContractAuthorizationProposal>): RemoveContractAuthorizationProposal {
    const message = createBaseRemoveContractAuthorizationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
