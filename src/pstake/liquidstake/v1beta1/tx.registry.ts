//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgLiquidStake,
  MsgLiquidUnstake,
  MsgStakeToLP,
  MsgUpdateParams,
  MsgUpdateWhitelistedValidators,
  MsgSetModulePaused,
} from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/pstake.liquidstake.v1beta1.MsgLiquidStake", MsgLiquidStake],
  ["/pstake.liquidstake.v1beta1.MsgLiquidUnstake", MsgLiquidUnstake],
  ["/pstake.liquidstake.v1beta1.MsgStakeToLP", MsgStakeToLP],
  ["/pstake.liquidstake.v1beta1.MsgUpdateParams", MsgUpdateParams],
  ["/pstake.liquidstake.v1beta1.MsgUpdateWhitelistedValidators", MsgUpdateWhitelistedValidators],
  ["/pstake.liquidstake.v1beta1.MsgSetModulePaused", MsgSetModulePaused],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish(),
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.encode(value).finish(),
      };
    },
    stakeToLP(value: MsgStakeToLP) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgStakeToLP",
        value: MsgStakeToLP.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    updateWhitelistedValidators(value: MsgUpdateWhitelistedValidators) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
        value: MsgUpdateWhitelistedValidators.encode(value).finish(),
      };
    },
    setModulePaused(value: MsgSetModulePaused) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgSetModulePaused",
        value: MsgSetModulePaused.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidStake",
        value,
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake",
        value,
      };
    },
    stakeToLP(value: MsgStakeToLP) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgStakeToLP",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateParams",
        value,
      };
    },
    updateWhitelistedValidators(value: MsgUpdateWhitelistedValidators) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
        value,
      };
    },
    setModulePaused(value: MsgSetModulePaused) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgSetModulePaused",
        value,
      };
    },
  },
  toJSON: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.toJSON(value),
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.toJSON(value),
      };
    },
    stakeToLP(value: MsgStakeToLP) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgStakeToLP",
        value: MsgStakeToLP.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
    updateWhitelistedValidators(value: MsgUpdateWhitelistedValidators) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
        value: MsgUpdateWhitelistedValidators.toJSON(value),
      };
    },
    setModulePaused(value: MsgSetModulePaused) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgSetModulePaused",
        value: MsgSetModulePaused.toJSON(value),
      };
    },
  },
  fromJSON: {
    liquidStake(value: any) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.fromJSON(value),
      };
    },
    liquidUnstake(value: any) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.fromJSON(value),
      };
    },
    stakeToLP(value: any) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgStakeToLP",
        value: MsgStakeToLP.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
    updateWhitelistedValidators(value: any) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
        value: MsgUpdateWhitelistedValidators.fromJSON(value),
      };
    },
    setModulePaused(value: any) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgSetModulePaused",
        value: MsgSetModulePaused.fromJSON(value),
      };
    },
  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value),
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.fromPartial(value),
      };
    },
    stakeToLP(value: MsgStakeToLP) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgStakeToLP",
        value: MsgStakeToLP.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    updateWhitelistedValidators(value: MsgUpdateWhitelistedValidators) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
        value: MsgUpdateWhitelistedValidators.fromPartial(value),
      };
    },
    setModulePaused(value: MsgSetModulePaused) {
      return {
        typeUrl: "/pstake.liquidstake.v1beta1.MsgSetModulePaused",
        value: MsgSetModulePaused.fromPartial(value),
      };
    },
  },
};
