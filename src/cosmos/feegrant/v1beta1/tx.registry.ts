//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance],
  ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", MsgPruneAllowances],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.encode(value).finish(),
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.encode(value).finish(),
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: MsgPruneAllowances.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value,
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value,
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value,
      };
    },
  },
  toJSON: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.toJSON(value),
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.toJSON(value),
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: MsgPruneAllowances.toJSON(value),
      };
    },
  },
  fromJSON: {
    grantAllowance(value: any) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromJSON(value),
      };
    },
    revokeAllowance(value: any) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromJSON(value),
      };
    },
    pruneAllowances(value: any) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: MsgPruneAllowances.fromJSON(value),
      };
    },
  },
  fromPartial: {
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        value: MsgGrantAllowance.fromPartial(value),
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromPartial(value),
      };
    },
    pruneAllowances(value: MsgPruneAllowances) {
      return {
        typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        value: MsgPruneAllowances.fromPartial(value),
      };
    },
  },
};
