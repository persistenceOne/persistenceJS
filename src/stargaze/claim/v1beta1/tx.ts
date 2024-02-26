/* eslint-disable */
import { Action, actionFromJSON, actionToJSON } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.claim.v1beta1";
export interface MsgInitialClaim {
  sender: string;
}
export interface MsgInitialClaimResponse {
  /** total initial claimable amount for the user */
  claimedAmount: Coin[];
}
export interface MsgClaimFor {
  sender: string;
  address: string;
  action: Action;
}
export interface MsgClaimForResponse {
  address: string;
  /** total initial claimable amount for the user */
  claimedAmount: Coin[];
}
function createBaseMsgInitialClaim(): MsgInitialClaim {
  return {
    sender: "",
  };
}
export const MsgInitialClaim = {
  encode(message: MsgInitialClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInitialClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitialClaim {
    const obj = createBaseMsgInitialClaim();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgInitialClaim): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: Partial<MsgInitialClaim>): MsgInitialClaim {
    const message = createBaseMsgInitialClaim();
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgInitialClaimResponse(): MsgInitialClaimResponse {
  return {
    claimedAmount: [],
  };
}
export const MsgInitialClaimResponse = {
  encode(message: MsgInitialClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInitialClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitialClaimResponse {
    const obj = createBaseMsgInitialClaimResponse();
    if (Array.isArray(object?.claimedAmount))
      obj.claimedAmount = object.claimedAmount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgInitialClaimResponse): unknown {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgInitialClaimResponse>): MsgInitialClaimResponse {
    const message = createBaseMsgInitialClaimResponse();
    message.claimedAmount = object.claimedAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgClaimFor(): MsgClaimFor {
  return {
    sender: "",
    address: "",
    action: 0,
  };
}
export const MsgClaimFor = {
  encode(message: MsgClaimFor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimFor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.action = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimFor {
    const obj = createBaseMsgClaimFor();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.action)) obj.action = actionFromJSON(object.action);
    return obj;
  },
  toJSON(message: MsgClaimFor): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromPartial(object: Partial<MsgClaimFor>): MsgClaimFor {
    const message = createBaseMsgClaimFor();
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
};
function createBaseMsgClaimForResponse(): MsgClaimForResponse {
  return {
    address: "",
    claimedAmount: [],
  };
}
export const MsgClaimForResponse = {
  encode(message: MsgClaimForResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimForResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimForResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimForResponse {
    const obj = createBaseMsgClaimForResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.claimedAmount))
      obj.claimedAmount = object.claimedAmount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgClaimForResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgClaimForResponse>): MsgClaimForResponse {
    const message = createBaseMsgClaimForResponse();
    message.address = object.address ?? "";
    message.claimedAmount = object.claimedAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  InitialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ClaimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InitialClaim = this.InitialClaim.bind(this);
    this.ClaimFor = this.ClaimFor.bind(this);
  }
  InitialClaim(request: MsgInitialClaim): Promise<MsgInitialClaimResponse> {
    const data = MsgInitialClaim.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "InitialClaim", data);
    return promise.then((data) => MsgInitialClaimResponse.decode(new BinaryReader(data)));
  }
  ClaimFor(request: MsgClaimFor): Promise<MsgClaimForResponse> {
    const data = MsgClaimFor.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "ClaimFor", data);
    return promise.then((data) => MsgClaimForResponse.decode(new BinaryReader(data)));
  }
}
