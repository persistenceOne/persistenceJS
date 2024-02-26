/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.alloc.v1beta1";
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface DistributionProportions {
  nftIncentives: string;
  developerRewards: string;
  communityPool: string;
}
export interface Params {
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions: DistributionProportions;
  /** addresses to receive developer rewards */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /** addresses to receive incentive rewards */
  weightedIncentivesRewardsReceivers: WeightedAddress[];
  /**
   * SupplementAmount is the amount to be supplemented from the pool on top of
   * newly minted coins.
   */
  supplementAmount: Coin[];
}
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: "",
  };
}
export const WeightedAddress = {
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedAddress {
    const obj = createBaseWeightedAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    nftIncentives: "",
    developerRewards: "",
    communityPool: "",
  };
}
export const DistributionProportions = {
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftIncentives !== "") {
      writer.uint32(10).string(message.nftIncentives);
    }
    if (message.developerRewards !== "") {
      writer.uint32(18).string(message.developerRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(message.communityPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftIncentives = reader.string();
          break;
        case 2:
          message.developerRewards = reader.string();
          break;
        case 3:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionProportions {
    const obj = createBaseDistributionProportions();
    if (isSet(object.nftIncentives)) obj.nftIncentives = String(object.nftIncentives);
    if (isSet(object.developerRewards)) obj.developerRewards = String(object.developerRewards);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.nftIncentives !== undefined && (obj.nftIncentives = message.nftIncentives);
    message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.nftIncentives = object.nftIncentives ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    weightedIncentivesRewardsReceivers: [],
    supplementAmount: [],
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.weightedIncentivesRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.supplementAmount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 2:
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 3:
          message.weightedIncentivesRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 4:
          message.supplementAmount.push(Coin.decode(reader, reader.uint32()));
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
    if (isSet(object.distributionProportions))
      obj.distributionProportions = DistributionProportions.fromJSON(object.distributionProportions);
    if (Array.isArray(object?.weightedDeveloperRewardsReceivers))
      obj.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers.map((e: any) =>
        WeightedAddress.fromJSON(e),
      );
    if (Array.isArray(object?.weightedIncentivesRewardsReceivers))
      obj.weightedIncentivesRewardsReceivers = object.weightedIncentivesRewardsReceivers.map((e: any) =>
        WeightedAddress.fromJSON(e),
      );
    if (Array.isArray(object?.supplementAmount))
      obj.supplementAmount = object.supplementAmount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distributionProportions !== undefined &&
      (obj.distributionProportions = message.distributionProportions
        ? DistributionProportions.toJSON(message.distributionProportions)
        : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map((e) =>
        e ? WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.weightedDeveloperRewardsReceivers = [];
    }
    if (message.weightedIncentivesRewardsReceivers) {
      obj.weightedIncentivesRewardsReceivers = message.weightedIncentivesRewardsReceivers.map((e) =>
        e ? WeightedAddress.toJSON(e) : undefined,
      );
    } else {
      obj.weightedIncentivesRewardsReceivers = [];
    }
    if (message.supplementAmount) {
      obj.supplementAmount = message.supplementAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supplementAmount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    if (object.distributionProportions !== undefined && object.distributionProportions !== null) {
      message.distributionProportions = DistributionProportions.fromPartial(object.distributionProportions);
    }
    message.weightedDeveloperRewardsReceivers =
      object.weightedDeveloperRewardsReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.weightedIncentivesRewardsReceivers =
      object.weightedIncentivesRewardsReceivers?.map((e) => WeightedAddress.fromPartial(e)) || [];
    message.supplementAmount = object.supplementAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
