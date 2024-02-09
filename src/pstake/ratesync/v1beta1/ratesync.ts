/* eslint-disable */
import { ICAAccount } from "../../liquidstakeibc/v1beta1/liquidstakeibc";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.ratesync.v1beta1";
export enum InstantiationState {
  /** INSTANTIATION_NOT_INITIATED - Not Initiated */
  INSTANTIATION_NOT_INITIATED = 0,
  /** INSTANTIATION_INITIATED - Initiated */
  INSTANTIATION_INITIATED = 1,
  /** INSTANTIATION_COMPLETED - we should have an address */
  INSTANTIATION_COMPLETED = 2,
  UNRECOGNIZED = -1,
}
export function instantiationStateFromJSON(object: any): InstantiationState {
  switch (object) {
    case 0:
    case "INSTANTIATION_NOT_INITIATED":
      return InstantiationState.INSTANTIATION_NOT_INITIATED;
    case 1:
    case "INSTANTIATION_INITIATED":
      return InstantiationState.INSTANTIATION_INITIATED;
    case 2:
    case "INSTANTIATION_COMPLETED":
      return InstantiationState.INSTANTIATION_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstantiationState.UNRECOGNIZED;
  }
}
export function instantiationStateToJSON(object: InstantiationState): string {
  switch (object) {
    case InstantiationState.INSTANTIATION_NOT_INITIATED:
      return "INSTANTIATION_NOT_INITIATED";
    case InstantiationState.INSTANTIATION_INITIATED:
      return "INSTANTIATION_INITIATED";
    case InstantiationState.INSTANTIATION_COMPLETED:
      return "INSTANTIATION_COMPLETED";
    case InstantiationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureType {
  LIQUID_STAKE_IBC = 0,
  LIQUID_STAKE = 1,
  UNRECOGNIZED = -1,
}
export function featureTypeFromJSON(object: any): FeatureType {
  switch (object) {
    case 0:
    case "LIQUID_STAKE_IBC":
      return FeatureType.LIQUID_STAKE_IBC;
    case 1:
    case "LIQUID_STAKE":
      return FeatureType.LIQUID_STAKE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureType.UNRECOGNIZED;
  }
}
export function featureTypeToJSON(object: FeatureType): string {
  switch (object) {
    case FeatureType.LIQUID_STAKE_IBC:
      return "LIQUID_STAKE_IBC";
    case FeatureType.LIQUID_STAKE:
      return "LIQUID_STAKE";
    case FeatureType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** HostChain defines the ratesync module's HostChain state. */
export interface HostChain {
  /** unique id */
  iD: bigint;
  /** not really required, just easier readability */
  chainID: string;
  connectionID: string;
  iCAAccount: ICAAccount;
  features: Feature;
  transferChannelID: string;
  transferPortID: string;
}
export interface Feature {
  /** triggers on hooks */
  liquidStakeIBC: LiquidStake;
  /** triggers on hour epoch */
  liquidStake: LiquidStake;
}
export interface LiquidStake {
  featureType: FeatureType;
  /** needs to be uploaded before hand */
  codeID: bigint;
  /**
   * state of instantiation, do not support gov based instantiation. (need ICA
   * to be at least admin)
   */
  instantiation: InstantiationState;
  /** address of instantiated contract. */
  contractAddress: string;
  /**
   * allow * as default for all denoms in case of lsibc, or default bond denom
   * in case of ls.
   */
  denoms: string[];
  enabled: boolean;
}
/** aim to keep this smaller than 256 MaxCharLen in ICA memo. */
export interface ICAMemo {
  featureType: FeatureType;
  hostChainID: bigint;
}
function createBaseHostChain(): HostChain {
  return {
    iD: BigInt(0),
    chainID: "",
    connectionID: "",
    iCAAccount: ICAAccount.fromPartial({}),
    features: Feature.fromPartial({}),
    transferChannelID: "",
    transferPortID: "",
  };
}
export const HostChain = {
  encode(message: HostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.connectionID !== "") {
      writer.uint32(26).string(message.connectionID);
    }
    if (message.iCAAccount !== undefined) {
      ICAAccount.encode(message.iCAAccount, writer.uint32(34).fork()).ldelim();
    }
    if (message.features !== undefined) {
      Feature.encode(message.features, writer.uint32(42).fork()).ldelim();
    }
    if (message.transferChannelID !== "") {
      writer.uint32(50).string(message.transferChannelID);
    }
    if (message.transferPortID !== "") {
      writer.uint32(58).string(message.transferPortID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.connectionID = reader.string();
          break;
        case 4:
          message.iCAAccount = ICAAccount.decode(reader, reader.uint32());
          break;
        case 5:
          message.features = Feature.decode(reader, reader.uint32());
          break;
        case 6:
          message.transferChannelID = reader.string();
          break;
        case 7:
          message.transferPortID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChain {
    const obj = createBaseHostChain();
    if (isSet(object.iD)) obj.iD = BigInt(object.iD.toString());
    if (isSet(object.chainID)) obj.chainID = String(object.chainID);
    if (isSet(object.connectionID)) obj.connectionID = String(object.connectionID);
    if (isSet(object.iCAAccount)) obj.iCAAccount = ICAAccount.fromJSON(object.iCAAccount);
    if (isSet(object.features)) obj.features = Feature.fromJSON(object.features);
    if (isSet(object.transferChannelID)) obj.transferChannelID = String(object.transferChannelID);
    if (isSet(object.transferPortID)) obj.transferPortID = String(object.transferPortID);
    return obj;
  },
  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.connectionID !== undefined && (obj.connectionID = message.connectionID);
    message.iCAAccount !== undefined &&
      (obj.iCAAccount = message.iCAAccount ? ICAAccount.toJSON(message.iCAAccount) : undefined);
    message.features !== undefined &&
      (obj.features = message.features ? Feature.toJSON(message.features) : undefined);
    message.transferChannelID !== undefined && (obj.transferChannelID = message.transferChannelID);
    message.transferPortID !== undefined && (obj.transferPortID = message.transferPortID);
    return obj;
  },
  fromPartial(object: Partial<HostChain>): HostChain {
    const message = createBaseHostChain();
    if (object.iD !== undefined && object.iD !== null) {
      message.iD = BigInt(object.iD.toString());
    }
    message.chainID = object.chainID ?? "";
    message.connectionID = object.connectionID ?? "";
    if (object.iCAAccount !== undefined && object.iCAAccount !== null) {
      message.iCAAccount = ICAAccount.fromPartial(object.iCAAccount);
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = Feature.fromPartial(object.features);
    }
    message.transferChannelID = object.transferChannelID ?? "";
    message.transferPortID = object.transferPortID ?? "";
    return message;
  },
};
function createBaseFeature(): Feature {
  return {
    liquidStakeIBC: LiquidStake.fromPartial({}),
    liquidStake: LiquidStake.fromPartial({}),
  };
}
export const Feature = {
  encode(message: Feature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidStakeIBC !== undefined) {
      LiquidStake.encode(message.liquidStakeIBC, writer.uint32(10).fork()).ldelim();
    }
    if (message.liquidStake !== undefined) {
      LiquidStake.encode(message.liquidStake, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Feature {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidStakeIBC = LiquidStake.decode(reader, reader.uint32());
          break;
        case 2:
          message.liquidStake = LiquidStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Feature {
    const obj = createBaseFeature();
    if (isSet(object.liquidStakeIBC)) obj.liquidStakeIBC = LiquidStake.fromJSON(object.liquidStakeIBC);
    if (isSet(object.liquidStake)) obj.liquidStake = LiquidStake.fromJSON(object.liquidStake);
    return obj;
  },
  toJSON(message: Feature): unknown {
    const obj: any = {};
    message.liquidStakeIBC !== undefined &&
      (obj.liquidStakeIBC = message.liquidStakeIBC ? LiquidStake.toJSON(message.liquidStakeIBC) : undefined);
    message.liquidStake !== undefined &&
      (obj.liquidStake = message.liquidStake ? LiquidStake.toJSON(message.liquidStake) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Feature>): Feature {
    const message = createBaseFeature();
    if (object.liquidStakeIBC !== undefined && object.liquidStakeIBC !== null) {
      message.liquidStakeIBC = LiquidStake.fromPartial(object.liquidStakeIBC);
    }
    if (object.liquidStake !== undefined && object.liquidStake !== null) {
      message.liquidStake = LiquidStake.fromPartial(object.liquidStake);
    }
    return message;
  },
};
function createBaseLiquidStake(): LiquidStake {
  return {
    featureType: 0,
    codeID: BigInt(0),
    instantiation: 0,
    contractAddress: "",
    denoms: [],
    enabled: false,
  };
}
export const LiquidStake = {
  encode(message: LiquidStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.featureType !== 0) {
      writer.uint32(8).int32(message.featureType);
    }
    if (message.codeID !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeID);
    }
    if (message.instantiation !== 0) {
      writer.uint32(24).int32(message.instantiation);
    }
    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }
    for (const v of message.denoms) {
      writer.uint32(42).string(v!);
    }
    if (message.enabled === true) {
      writer.uint32(48).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.featureType = reader.int32() as any;
          break;
        case 2:
          message.codeID = reader.uint64();
          break;
        case 3:
          message.instantiation = reader.int32() as any;
          break;
        case 4:
          message.contractAddress = reader.string();
          break;
        case 5:
          message.denoms.push(reader.string());
          break;
        case 6:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidStake {
    const obj = createBaseLiquidStake();
    if (isSet(object.featureType)) obj.featureType = featureTypeFromJSON(object.featureType);
    if (isSet(object.codeID)) obj.codeID = BigInt(object.codeID.toString());
    if (isSet(object.instantiation)) obj.instantiation = instantiationStateFromJSON(object.instantiation);
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => String(e));
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    return obj;
  },
  toJSON(message: LiquidStake): unknown {
    const obj: any = {};
    message.featureType !== undefined && (obj.featureType = featureTypeToJSON(message.featureType));
    message.codeID !== undefined && (obj.codeID = (message.codeID || BigInt(0)).toString());
    message.instantiation !== undefined &&
      (obj.instantiation = instantiationStateToJSON(message.instantiation));
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<LiquidStake>): LiquidStake {
    const message = createBaseLiquidStake();
    message.featureType = object.featureType ?? 0;
    if (object.codeID !== undefined && object.codeID !== null) {
      message.codeID = BigInt(object.codeID.toString());
    }
    message.instantiation = object.instantiation ?? 0;
    message.contractAddress = object.contractAddress ?? "";
    message.denoms = object.denoms?.map((e) => e) || [];
    message.enabled = object.enabled ?? false;
    return message;
  },
};
function createBaseICAMemo(): ICAMemo {
  return {
    featureType: 0,
    hostChainID: BigInt(0),
  };
}
export const ICAMemo = {
  encode(message: ICAMemo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.featureType !== 0) {
      writer.uint32(8).int32(message.featureType);
    }
    if (message.hostChainID !== BigInt(0)) {
      writer.uint32(16).uint64(message.hostChainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICAMemo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAMemo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.featureType = reader.int32() as any;
          break;
        case 2:
          message.hostChainID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ICAMemo {
    const obj = createBaseICAMemo();
    if (isSet(object.featureType)) obj.featureType = featureTypeFromJSON(object.featureType);
    if (isSet(object.hostChainID)) obj.hostChainID = BigInt(object.hostChainID.toString());
    return obj;
  },
  toJSON(message: ICAMemo): unknown {
    const obj: any = {};
    message.featureType !== undefined && (obj.featureType = featureTypeToJSON(message.featureType));
    message.hostChainID !== undefined && (obj.hostChainID = (message.hostChainID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ICAMemo>): ICAMemo {
    const message = createBaseICAMemo();
    message.featureType = object.featureType ?? 0;
    if (object.hostChainID !== undefined && object.hostChainID !== null) {
      message.hostChainID = BigInt(object.hostChainID.toString());
    }
    return message;
  },
};
