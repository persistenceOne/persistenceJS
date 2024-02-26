/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import {
  MsgSetCodeAuthorization,
  MsgRemoveCodeAuthorization,
  MsgSetContractAuthorization,
  MsgRemoveContractAuthorization,
  MsgUpdateParams,
} from "./tx";
export interface MsgSetCodeAuthorizationAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization";
  value: {
    sender: string;
    code_authorization: {
      code_id: string;
      methods: string[];
    };
  };
}
export interface MsgRemoveCodeAuthorizationAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization";
  value: {
    sender: string;
    code_id: string;
  };
}
export interface MsgSetContractAuthorizationAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization";
  value: {
    sender: string;
    contract_authorization: {
      contract_address: string;
      methods: string[];
    };
  };
}
export interface MsgRemoveContractAuthorizationAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization";
  value: {
    sender: string;
    contract_address: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams";
  value: {
    sender: string;
    params: {
      privileged_addresses: string[];
      minimum_gas_prices: {
        denom: string;
        amount: string;
      }[];
    };
  };
}
export const AminoConverter = {
  "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
    aminoType: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization",
    toAmino: ({
      sender,
      codeAuthorization,
    }: MsgSetCodeAuthorization): MsgSetCodeAuthorizationAminoType["value"] => {
      return {
        sender,
        code_authorization: {
          code_id: codeAuthorization.codeId.toString(),
          methods: codeAuthorization.methods,
        },
      };
    },
    fromAmino: ({
      sender,
      code_authorization,
    }: MsgSetCodeAuthorizationAminoType["value"]): MsgSetCodeAuthorization => {
      return {
        sender,
        codeAuthorization: {
          codeId: BigInt(code_authorization.code_id),
          methods: code_authorization.methods,
        },
      };
    },
  },
  "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
    aminoType: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization",
    toAmino: ({
      sender,
      codeId,
    }: MsgRemoveCodeAuthorization): MsgRemoveCodeAuthorizationAminoType["value"] => {
      return {
        sender,
        code_id: codeId.toString(),
      };
    },
    fromAmino: ({
      sender,
      code_id,
    }: MsgRemoveCodeAuthorizationAminoType["value"]): MsgRemoveCodeAuthorization => {
      return {
        sender,
        codeId: BigInt(code_id),
      };
    },
  },
  "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
    aminoType: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization",
    toAmino: ({
      sender,
      contractAuthorization,
    }: MsgSetContractAuthorization): MsgSetContractAuthorizationAminoType["value"] => {
      return {
        sender,
        contract_authorization: {
          contract_address: contractAuthorization.contractAddress,
          methods: contractAuthorization.methods,
        },
      };
    },
    fromAmino: ({
      sender,
      contract_authorization,
    }: MsgSetContractAuthorizationAminoType["value"]): MsgSetContractAuthorization => {
      return {
        sender,
        contractAuthorization: {
          contractAddress: contract_authorization.contract_address,
          methods: contract_authorization.methods,
        },
      };
    },
  },
  "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
    aminoType: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization",
    toAmino: ({
      sender,
      contractAddress,
    }: MsgRemoveContractAuthorization): MsgRemoveContractAuthorizationAminoType["value"] => {
      return {
        sender,
        contract_address: contractAddress,
      };
    },
    fromAmino: ({
      sender,
      contract_address,
    }: MsgRemoveContractAuthorizationAminoType["value"]): MsgRemoveContractAuthorization => {
      return {
        sender,
        contractAddress: contract_address,
      };
    },
  },
  "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams": {
    aminoType: "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams",
    toAmino: ({ sender, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        sender,
        params: {
          privileged_addresses: params.privilegedAddresses,
          minimum_gas_prices: params.minimumGasPrices.map((el0) => ({
            denom: el0.denom,
            amount: el0.amount,
          })),
        },
      };
    },
    fromAmino: ({ sender, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        sender,
        params: {
          privilegedAddresses: params.privileged_addresses,
          minimumGasPrices: params.minimum_gas_prices.map((el1) => ({
            denom: el1.denom,
            amount: el1.amount,
          })),
        },
      };
    },
  },
};
