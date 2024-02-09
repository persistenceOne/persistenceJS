//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateHostChain, MsgUpdateHostChain, MsgDeleteHostChain, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/pstake.ratesync.v1beta1.MsgCreateHostChain", MsgCreateHostChain],
  ["/pstake.ratesync.v1beta1.MsgUpdateHostChain", MsgUpdateHostChain],
  ["/pstake.ratesync.v1beta1.MsgDeleteHostChain", MsgDeleteHostChain],
  ["/pstake.ratesync.v1beta1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createHostChain(value: MsgCreateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgCreateHostChain",
        value: MsgCreateHostChain.encode(value).finish(),
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.encode(value).finish(),
      };
    },
    deleteHostChain(value: MsgDeleteHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgDeleteHostChain",
        value: MsgDeleteHostChain.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createHostChain(value: MsgCreateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgCreateHostChain",
        value,
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateHostChain",
        value,
      };
    },
    deleteHostChain(value: MsgDeleteHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgDeleteHostChain",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    createHostChain(value: MsgCreateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgCreateHostChain",
        value: MsgCreateHostChain.toJSON(value),
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.toJSON(value),
      };
    },
    deleteHostChain(value: MsgDeleteHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgDeleteHostChain",
        value: MsgDeleteHostChain.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    createHostChain(value: any) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgCreateHostChain",
        value: MsgCreateHostChain.fromJSON(value),
      };
    },
    updateHostChain(value: any) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromJSON(value),
      };
    },
    deleteHostChain(value: any) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgDeleteHostChain",
        value: MsgDeleteHostChain.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createHostChain(value: MsgCreateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgCreateHostChain",
        value: MsgCreateHostChain.fromPartial(value),
      };
    },
    updateHostChain(value: MsgUpdateHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateHostChain",
        value: MsgUpdateHostChain.fromPartial(value),
      };
    },
    deleteHostChain(value: MsgDeleteHostChain) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgDeleteHostChain",
        value: MsgDeleteHostChain.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pstake.ratesync.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
