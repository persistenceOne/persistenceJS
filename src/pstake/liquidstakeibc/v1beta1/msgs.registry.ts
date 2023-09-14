//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgRegisterHostChain,
  MsgUpdateHostChain,
  MsgLiquidStake,
  MsgLiquidStakeLSM,
  MsgLiquidUnstake,
  MsgRedeem,
  MsgUpdateParams,
} from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain", MsgRegisterHostChain],
  ["/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain", MsgUpdateHostChain],
  ["/pstake.liquidstakeibc.v1beta1.MsgLiquidStake", MsgLiquidStake],
  ["/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM", MsgLiquidStakeLSM],
  ["/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake", MsgLiquidUnstake],
  ["/pstake.liquidstakeibc.v1beta1.MsgRedeem", MsgRedeem],
  ["/pstake.liquidstakeibc.v1beta1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain",
        value: MsgRegisterHostChain.encode(value).finish(),
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.encode(value).finish(),
      };
    },
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish(),
      };
    },
    liquidStakeLSM(value: MsgLiquidStakeLSM) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM",
        value: MsgLiquidStakeLSM.encode(value).finish(),
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.encode(value).finish(),
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRedeem",
        value: MsgRedeem.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain",
        value,
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain",
        value,
      };
    },
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStake",
        value,
      };
    },
    liquidStakeLSM(value: MsgLiquidStakeLSM) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM",
        value,
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake",
        value,
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRedeem",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain",
        value: MsgRegisterHostChain.toJSON(value),
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.toJSON(value),
      };
    },
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.toJSON(value),
      };
    },
    liquidStakeLSM(value: MsgLiquidStakeLSM) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM",
        value: MsgLiquidStakeLSM.toJSON(value),
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.toJSON(value),
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRedeem",
        value: MsgRedeem.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    registerHostChain(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromJSON(value),
      };
    },
    updateHostChain(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromJSON(value),
      };
    },
    liquidStake(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.fromJSON(value),
      };
    },
    liquidStakeLSM(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM",
        value: MsgLiquidStakeLSM.fromJSON(value),
      };
    },
    liquidUnstake(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.fromJSON(value),
      };
    },
    redeem(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRedeem",
        value: MsgRedeem.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    registerHostChain(value: MsgRegisterHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRegisterHostChain",
        value: MsgRegisterHostChain.fromPartial(value),
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromPartial(value),
      };
    },
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value),
      };
    },
    liquidStakeLSM(value: MsgLiquidStakeLSM) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidStakeLSM",
        value: MsgLiquidStakeLSM.fromPartial(value),
      };
    },
    liquidUnstake(value: MsgLiquidUnstake) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgLiquidUnstake",
        value: MsgLiquidUnstake.fromPartial(value),
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgRedeem",
        value: MsgRedeem.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.liquidstakeibc.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
