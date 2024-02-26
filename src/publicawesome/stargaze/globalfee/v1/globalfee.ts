/* eslint-disable */
import { DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "publicawesome.stargaze.globalfee.v1";
/** Params holds parameters for the globalfee module. */
export interface Params {
  /** Addresses which are whitelisted to modify the gas free operations */
  privilegedAddresses: string[];
  /** Minimum stores the minimum gas price(s) for all TX on the chain. */
  minimumGasPrices: DecCoin[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorization {
  /** authorized code ids */
  codeId: bigint;
  /** authorized contract operation methods */
  methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorization {
  /** authorized contract addresses */
  contractAddress: string;
  /** authorized contract operation methods */
  methods: string[];
}
function createBaseParams(): Params {
  return {
    privilegedAddresses: [],
    minimumGasPrices: [],
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privilegedAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privilegedAddresses.push(reader.string());
          break;
        case 2:
          message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.privilegedAddresses))
      obj.privilegedAddresses = object.privilegedAddresses.map((e: any) => String(e));
    if (Array.isArray(object?.minimumGasPrices))
      obj.minimumGasPrices = object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.privilegedAddresses) {
      obj.privilegedAddresses = message.privilegedAddresses.map((e) => e);
    } else {
      obj.privilegedAddresses = [];
    }
    if (message.minimumGasPrices) {
      obj.minimumGasPrices = message.minimumGasPrices.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.minimumGasPrices = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.privilegedAddresses = object.privilegedAddresses?.map((e) => e) || [];
    message.minimumGasPrices = object.minimumGasPrices?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCodeAuthorization(): CodeAuthorization {
  return {
    codeId: BigInt(0),
    methods: [],
  };
}
export const CodeAuthorization = {
  encode(message: CodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeAuthorization {
    const obj = createBaseCodeAuthorization();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (Array.isArray(object?.methods)) obj.methods = object.methods.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: CodeAuthorization): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    if (message.methods) {
      obj.methods = message.methods.map((e) => e);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CodeAuthorization>): CodeAuthorization {
    const message = createBaseCodeAuthorization();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.methods = object.methods?.map((e) => e) || [];
    return message;
  },
};
function createBaseContractAuthorization(): ContractAuthorization {
  return {
    contractAddress: "",
    methods: [],
  };
}
export const ContractAuthorization = {
  encode(message: ContractAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractAuthorization {
    const obj = createBaseContractAuthorization();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (Array.isArray(object?.methods)) obj.methods = object.methods.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ContractAuthorization): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    if (message.methods) {
      obj.methods = message.methods.map((e) => e);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ContractAuthorization>): ContractAuthorization {
    const message = createBaseContractAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.methods = object.methods?.map((e) => e) || [];
    return message;
  },
};
