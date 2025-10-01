/* eslint-disable */
import { permissions_LevelFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export interface MsgAuthorizeCircuitBreakerAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreaker";
  value: {
    granter: string;
    grantee: string;
    permissions: {
      level: number;
      limit_type_urls: string[];
    };
  };
}
export interface MsgTripCircuitBreakerAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreaker";
  value: {
    authority: string;
    msg_type_urls: string[];
  };
}
export interface MsgResetCircuitBreakerAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreaker";
  value: {
    authority: string;
    msg_type_urls: string[];
  };
}
export const AminoConverter = {
  "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
    toAmino: ({
      granter,
      grantee,
      permissions,
    }: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAminoType["value"] => {
      return {
        granter,
        grantee,
        permissions: {
          level: permissions.level,
          limit_type_urls: permissions.limitTypeUrls,
        },
      };
    },
    fromAmino: ({
      granter,
      grantee,
      permissions,
    }: MsgAuthorizeCircuitBreakerAminoType["value"]): MsgAuthorizeCircuitBreaker => {
      return {
        granter,
        grantee,
        permissions: {
          level: permissions_LevelFromJSON(permissions.level),
          limitTypeUrls: permissions.limit_type_urls,
        },
      };
    },
  },
  "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgTripCircuitBreaker",
    toAmino: ({ authority, msgTypeUrls }: MsgTripCircuitBreaker): MsgTripCircuitBreakerAminoType["value"] => {
      return {
        authority,
        msg_type_urls: msgTypeUrls,
      };
    },
    fromAmino: ({
      authority,
      msg_type_urls,
    }: MsgTripCircuitBreakerAminoType["value"]): MsgTripCircuitBreaker => {
      return {
        authority,
        msgTypeUrls: msg_type_urls,
      };
    },
  },
  "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgResetCircuitBreaker",
    toAmino: ({
      authority,
      msgTypeUrls,
    }: MsgResetCircuitBreaker): MsgResetCircuitBreakerAminoType["value"] => {
      return {
        authority,
        msg_type_urls: msgTypeUrls,
      };
    },
    fromAmino: ({
      authority,
      msg_type_urls,
    }: MsgResetCircuitBreakerAminoType["value"]): MsgResetCircuitBreaker => {
      return {
        authority,
        msgTypeUrls: msg_type_urls,
      };
    },
  },
};
