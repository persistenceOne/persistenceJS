/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx";
export interface MsgRegisterCounterpartyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterparty";
  value: {
    client_id: string;
    counterparty_merkle_prefix: Uint8Array[];
    counterparty_client_id: string;
    signer: string;
  };
}
export interface MsgUpdateClientConfigAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateClientConfig";
  value: {
    client_id: string;
    config: {
      allowed_relayers: string[];
    };
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.client.v2.MsgRegisterCounterparty": {
    aminoType: "cosmos-sdk/MsgRegisterCounterparty",
    toAmino: ({
      clientId,
      counterpartyMerklePrefix,
      counterpartyClientId,
      signer,
    }: MsgRegisterCounterparty): MsgRegisterCounterpartyAminoType["value"] => {
      return {
        client_id: clientId,
        counterparty_merkle_prefix: counterpartyMerklePrefix,
        counterparty_client_id: counterpartyClientId,
        signer,
      };
    },
    fromAmino: ({
      client_id,
      counterparty_merkle_prefix,
      counterparty_client_id,
      signer,
    }: MsgRegisterCounterpartyAminoType["value"]): MsgRegisterCounterparty => {
      return {
        clientId: client_id,
        counterpartyMerklePrefix: counterparty_merkle_prefix,
        counterpartyClientId: counterparty_client_id,
        signer,
      };
    },
  },
  "/ibc.core.client.v2.MsgUpdateClientConfig": {
    aminoType: "cosmos-sdk/MsgUpdateClientConfig",
    toAmino: ({
      clientId,
      config,
      signer,
    }: MsgUpdateClientConfig): MsgUpdateClientConfigAminoType["value"] => {
      return {
        client_id: clientId,
        config: {
          allowed_relayers: config.allowedRelayers,
        },
        signer,
      };
    },
    fromAmino: ({
      client_id,
      config,
      signer,
    }: MsgUpdateClientConfigAminoType["value"]): MsgUpdateClientConfig => {
      return {
        clientId: client_id,
        config: {
          allowedRelayers: config.allowed_relayers,
        },
        signer,
      };
    },
  },
};
