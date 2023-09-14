//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgCreateValidator,
  MsgEditValidator,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgUpdateParams,
  MsgUnbondValidator,
  MsgTokenizeShares,
  MsgRedeemTokensForShares,
  MsgTransferTokenizeShareRecord,
  MsgDisableTokenizeShares,
  MsgEnableTokenizeShares,
  MsgValidatorBond,
} from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],
  ["/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", MsgCancelUnbondingDelegation],
  ["/cosmos.staking.v1beta1.MsgUpdateParams", MsgUpdateParams],
  ["/cosmos.staking.v1beta1.MsgUnbondValidator", MsgUnbondValidator],
  ["/cosmos.staking.v1beta1.MsgTokenizeShares", MsgTokenizeShares],
  ["/cosmos.staking.v1beta1.MsgRedeemTokensForShares", MsgRedeemTokensForShares],
  ["/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord", MsgTransferTokenizeShareRecord],
  ["/cosmos.staking.v1beta1.MsgDisableTokenizeShares", MsgDisableTokenizeShares],
  ["/cosmos.staking.v1beta1.MsgEnableTokenizeShares", MsgEnableTokenizeShares],
  ["/cosmos.staking.v1beta1.MsgValidatorBond", MsgValidatorBond],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.encode(value).finish(),
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.encode(value).finish(),
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.encode(value).finish(),
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.encode(value).finish(),
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish(),
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value: MsgUnbondValidator.encode(value).finish(),
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.encode(value).finish(),
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.encode(value).finish(),
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.encode(value).finish(),
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.encode(value).finish(),
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.encode(value).finish(),
      };
    },
    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value: MsgValidatorBond.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value,
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value,
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value,
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value,
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value,
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value,
      };
    },
    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value,
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value,
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value,
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value,
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value,
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value,
      };
    },
    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value,
      };
    },
  },
  toJSON: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.toJSON(value),
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.toJSON(value),
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.toJSON(value),
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.toJSON(value),
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.toJSON(value),
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value: MsgUnbondValidator.toJSON(value),
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.toJSON(value),
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.toJSON(value),
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.toJSON(value),
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.toJSON(value),
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.toJSON(value),
      };
    },
    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value: MsgValidatorBond.toJSON(value),
      };
    },
  },
  fromJSON: {
    createValidator(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromJSON(value),
      };
    },
    editValidator(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.fromJSON(value),
      };
    },
    delegate(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.fromJSON(value),
      };
    },
    beginRedelegate(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.fromJSON(value),
      };
    },
    undelegate(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromJSON(value),
      };
    },
    cancelUnbondingDelegation(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
    unbondValidator(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value: MsgUnbondValidator.fromJSON(value),
      };
    },
    tokenizeShares(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.fromJSON(value),
      };
    },
    redeemTokensForShares(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.fromJSON(value),
      };
    },
    transferTokenizeShareRecord(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.fromJSON(value),
      };
    },
    disableTokenizeShares(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.fromJSON(value),
      };
    },
    enableTokenizeShares(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.fromJSON(value),
      };
    },
    validatorBond(value: any) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value: MsgValidatorBond.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromPartial(value),
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.fromPartial(value),
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.fromPartial(value),
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.fromPartial(value),
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value),
      };
    },
    cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        value: MsgCancelUnbondingDelegation.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    unbondValidator(value: MsgUnbondValidator) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
        value: MsgUnbondValidator.fromPartial(value),
      };
    },
    tokenizeShares(value: MsgTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
        value: MsgTokenizeShares.fromPartial(value),
      };
    },
    redeemTokensForShares(value: MsgRedeemTokensForShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
        value: MsgRedeemTokensForShares.fromPartial(value),
      };
    },
    transferTokenizeShareRecord(value: MsgTransferTokenizeShareRecord) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
        value: MsgTransferTokenizeShareRecord.fromPartial(value),
      };
    },
    disableTokenizeShares(value: MsgDisableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
        value: MsgDisableTokenizeShares.fromPartial(value),
      };
    },
    enableTokenizeShares(value: MsgEnableTokenizeShares) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
        value: MsgEnableTokenizeShares.fromPartial(value),
      };
    },
    validatorBond(value: MsgValidatorBond) {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
        value: MsgValidatorBond.fromPartial(value),
      };
    },
  },
};
