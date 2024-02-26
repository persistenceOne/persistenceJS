//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgSetCodeAuthorization,
  MsgRemoveCodeAuthorization,
  MsgSetContractAuthorization,
  MsgRemoveContractAuthorization,
} from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization", MsgSetCodeAuthorization],
  ["/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization", MsgRemoveCodeAuthorization],
  ["/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization", MsgSetContractAuthorization],
  ["/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization", MsgRemoveContractAuthorization],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setCodeAuthorization(value: MsgSetCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
        value: MsgSetCodeAuthorization.encode(value).finish(),
      };
    },
    removeCodeAuthorization(value: MsgRemoveCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
        value: MsgRemoveCodeAuthorization.encode(value).finish(),
      };
    },
    setContractAuthorization(value: MsgSetContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
        value: MsgSetContractAuthorization.encode(value).finish(),
      };
    },
    removeContractAuthorization(value: MsgRemoveContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
        value: MsgRemoveContractAuthorization.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    setCodeAuthorization(value: MsgSetCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
        value,
      };
    },
    removeCodeAuthorization(value: MsgRemoveCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
        value,
      };
    },
    setContractAuthorization(value: MsgSetContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
        value,
      };
    },
    removeContractAuthorization(value: MsgRemoveContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
        value,
      };
    },
  },
  toJSON: {
    setCodeAuthorization(value: MsgSetCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
        value: MsgSetCodeAuthorization.toJSON(value),
      };
    },
    removeCodeAuthorization(value: MsgRemoveCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
        value: MsgRemoveCodeAuthorization.toJSON(value),
      };
    },
    setContractAuthorization(value: MsgSetContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
        value: MsgSetContractAuthorization.toJSON(value),
      };
    },
    removeContractAuthorization(value: MsgRemoveContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
        value: MsgRemoveContractAuthorization.toJSON(value),
      };
    },
  },
  fromJSON: {
    setCodeAuthorization(value: any) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
        value: MsgSetCodeAuthorization.fromJSON(value),
      };
    },
    removeCodeAuthorization(value: any) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
        value: MsgRemoveCodeAuthorization.fromJSON(value),
      };
    },
    setContractAuthorization(value: any) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
        value: MsgSetContractAuthorization.fromJSON(value),
      };
    },
    removeContractAuthorization(value: any) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
        value: MsgRemoveContractAuthorization.fromJSON(value),
      };
    },
  },
  fromPartial: {
    setCodeAuthorization(value: MsgSetCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
        value: MsgSetCodeAuthorization.fromPartial(value),
      };
    },
    removeCodeAuthorization(value: MsgRemoveCodeAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
        value: MsgRemoveCodeAuthorization.fromPartial(value),
      };
    },
    setContractAuthorization(value: MsgSetContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
        value: MsgSetContractAuthorization.fromPartial(value),
      };
    },
    removeContractAuthorization(value: MsgRemoveContractAuthorization) {
      return {
        typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
        value: MsgRemoveContractAuthorization.fromPartial(value),
      };
    },
  },
};
