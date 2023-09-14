/* eslint-disable */
import { AllowListedValidators } from "./lscosmos";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "pstake.lscosmos.v1beta1";
/** @deprecated */
export interface MinDepositAndFeeChangeProposal {
  title: string;
  description: string;
  minDeposit: string;
  pstakeDepositFee: string;
  pstakeRestakeFee: string;
  pstakeUnstakeFee: string;
  pstakeRedemptionFee: string;
}
/** @deprecated */
export interface PstakeFeeAddressChangeProposal {
  title: string;
  description: string;
  pstakeFeeAddress: string;
}
/** @deprecated */
export interface AllowListedValidatorSetChangeProposal {
  title: string;
  description: string;
  allowListedValidators: AllowListedValidators;
}
function createBaseMinDepositAndFeeChangeProposal(): MinDepositAndFeeChangeProposal {
  return {
    title: "",
    description: "",
    minDeposit: "",
    pstakeDepositFee: "",
    pstakeRestakeFee: "",
    pstakeUnstakeFee: "",
    pstakeRedemptionFee: "",
  };
}
export const MinDepositAndFeeChangeProposal = {
  encode(
    message: MinDepositAndFeeChangeProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.minDeposit !== "") {
      writer.uint32(26).string(message.minDeposit);
    }
    if (message.pstakeDepositFee !== "") {
      writer.uint32(34).string(message.pstakeDepositFee);
    }
    if (message.pstakeRestakeFee !== "") {
      writer.uint32(42).string(message.pstakeRestakeFee);
    }
    if (message.pstakeUnstakeFee !== "") {
      writer.uint32(50).string(message.pstakeUnstakeFee);
    }
    if (message.pstakeRedemptionFee !== "") {
      writer.uint32(58).string(message.pstakeRedemptionFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MinDepositAndFeeChangeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinDepositAndFeeChangeProposal();
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
          message.minDeposit = reader.string();
          break;
        case 4:
          message.pstakeDepositFee = reader.string();
          break;
        case 5:
          message.pstakeRestakeFee = reader.string();
          break;
        case 6:
          message.pstakeUnstakeFee = reader.string();
          break;
        case 7:
          message.pstakeRedemptionFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MinDepositAndFeeChangeProposal {
    const obj = createBaseMinDepositAndFeeChangeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.minDeposit)) obj.minDeposit = String(object.minDeposit);
    if (isSet(object.pstakeDepositFee)) obj.pstakeDepositFee = String(object.pstakeDepositFee);
    if (isSet(object.pstakeRestakeFee)) obj.pstakeRestakeFee = String(object.pstakeRestakeFee);
    if (isSet(object.pstakeUnstakeFee)) obj.pstakeUnstakeFee = String(object.pstakeUnstakeFee);
    if (isSet(object.pstakeRedemptionFee)) obj.pstakeRedemptionFee = String(object.pstakeRedemptionFee);
    return obj;
  },
  toJSON(message: MinDepositAndFeeChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.minDeposit !== undefined && (obj.minDeposit = message.minDeposit);
    message.pstakeDepositFee !== undefined && (obj.pstakeDepositFee = message.pstakeDepositFee);
    message.pstakeRestakeFee !== undefined && (obj.pstakeRestakeFee = message.pstakeRestakeFee);
    message.pstakeUnstakeFee !== undefined && (obj.pstakeUnstakeFee = message.pstakeUnstakeFee);
    message.pstakeRedemptionFee !== undefined && (obj.pstakeRedemptionFee = message.pstakeRedemptionFee);
    return obj;
  },
  fromPartial(object: Partial<MinDepositAndFeeChangeProposal>): MinDepositAndFeeChangeProposal {
    const message = createBaseMinDepositAndFeeChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.minDeposit = object.minDeposit ?? "";
    message.pstakeDepositFee = object.pstakeDepositFee ?? "";
    message.pstakeRestakeFee = object.pstakeRestakeFee ?? "";
    message.pstakeUnstakeFee = object.pstakeUnstakeFee ?? "";
    message.pstakeRedemptionFee = object.pstakeRedemptionFee ?? "";
    return message;
  },
};
function createBasePstakeFeeAddressChangeProposal(): PstakeFeeAddressChangeProposal {
  return {
    title: "",
    description: "",
    pstakeFeeAddress: "",
  };
}
export const PstakeFeeAddressChangeProposal = {
  encode(
    message: PstakeFeeAddressChangeProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.pstakeFeeAddress !== "") {
      writer.uint32(26).string(message.pstakeFeeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PstakeFeeAddressChangeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePstakeFeeAddressChangeProposal();
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
          message.pstakeFeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PstakeFeeAddressChangeProposal {
    const obj = createBasePstakeFeeAddressChangeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.pstakeFeeAddress)) obj.pstakeFeeAddress = String(object.pstakeFeeAddress);
    return obj;
  },
  toJSON(message: PstakeFeeAddressChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.pstakeFeeAddress !== undefined && (obj.pstakeFeeAddress = message.pstakeFeeAddress);
    return obj;
  },
  fromPartial(object: Partial<PstakeFeeAddressChangeProposal>): PstakeFeeAddressChangeProposal {
    const message = createBasePstakeFeeAddressChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.pstakeFeeAddress = object.pstakeFeeAddress ?? "";
    return message;
  },
};
function createBaseAllowListedValidatorSetChangeProposal(): AllowListedValidatorSetChangeProposal {
  return {
    title: "",
    description: "",
    allowListedValidators: AllowListedValidators.fromPartial({}),
  };
}
export const AllowListedValidatorSetChangeProposal = {
  encode(
    message: AllowListedValidatorSetChangeProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.allowListedValidators !== undefined) {
      AllowListedValidators.encode(message.allowListedValidators, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowListedValidatorSetChangeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowListedValidatorSetChangeProposal();
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
          message.allowListedValidators = AllowListedValidators.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllowListedValidatorSetChangeProposal {
    const obj = createBaseAllowListedValidatorSetChangeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.allowListedValidators))
      obj.allowListedValidators = AllowListedValidators.fromJSON(object.allowListedValidators);
    return obj;
  },
  toJSON(message: AllowListedValidatorSetChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.allowListedValidators !== undefined &&
      (obj.allowListedValidators = message.allowListedValidators
        ? AllowListedValidators.toJSON(message.allowListedValidators)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<AllowListedValidatorSetChangeProposal>): AllowListedValidatorSetChangeProposal {
    const message = createBaseAllowListedValidatorSetChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.allowListedValidators !== undefined && object.allowListedValidators !== null) {
      message.allowListedValidators = AllowListedValidators.fromPartial(object.allowListedValidators);
    }
    return message;
  },
};
