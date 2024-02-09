/* eslint-disable */
import { featureTypeFromJSON, instantiationStateFromJSON } from "./ratesync";
import { AminoMsg } from "@cosmjs/amino";
import { iCAAccount_ChannelStateFromJSON } from "../../liquidstakeibc/v1beta1/liquidstakeibc";
import { MsgCreateHostChain, MsgUpdateHostChain, MsgDeleteHostChain, MsgUpdateParams } from "./tx";
export interface MsgCreateHostChainAminoType extends AminoMsg {
  type: "pstake/ratesync/MsgCreateHostChain";
  value: {
    authority: string;
    host_chain: {
      i_d: string;
      chain_i_d: string;
      connection_i_d: string;
      i_c_a_account: {
        address: string;
        balance: {
          denom: string;
          amount: string;
        };
        owner: string;
        channel_state: number;
      };
      features: {
        liquid_stake_i_b_c: {
          feature_type: number;
          code_i_d: string;
          instantiation: number;
          contract_address: string;
          denoms: string[];
          enabled: boolean;
        };
        liquid_stake: {
          feature_type: number;
          code_i_d: string;
          instantiation: number;
          contract_address: string;
          denoms: string[];
          enabled: boolean;
        };
      };
      transfer_channel_i_d: string;
      transfer_port_i_d: string;
    };
  };
}
export interface MsgUpdateHostChainAminoType extends AminoMsg {
  type: "pstake/ratesync/MsgUpdateHostChain";
  value: {
    authority: string;
    host_chain: {
      i_d: string;
      chain_i_d: string;
      connection_i_d: string;
      i_c_a_account: {
        address: string;
        balance: {
          denom: string;
          amount: string;
        };
        owner: string;
        channel_state: number;
      };
      features: {
        liquid_stake_i_b_c: {
          feature_type: number;
          code_i_d: string;
          instantiation: number;
          contract_address: string;
          denoms: string[];
          enabled: boolean;
        };
        liquid_stake: {
          feature_type: number;
          code_i_d: string;
          instantiation: number;
          contract_address: string;
          denoms: string[];
          enabled: boolean;
        };
      };
      transfer_channel_i_d: string;
      transfer_port_i_d: string;
    };
  };
}
export interface MsgDeleteHostChainAminoType extends AminoMsg {
  type: "pstake/ratesync/MsgDeleteHostChain";
  value: {
    authority: string;
    i_d: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "pstake/ratesync/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      admin: string;
    };
  };
}
export const AminoConverter = {
  "/pstake.ratesync.v1beta1.MsgCreateHostChain": {
    aminoType: "pstake/ratesync/MsgCreateHostChain",
    toAmino: ({ authority, hostChain }: MsgCreateHostChain): MsgCreateHostChainAminoType["value"] => {
      return {
        authority,
        host_chain: {
          i_d: hostChain.iD.toString(),
          chain_i_d: hostChain.chainID,
          connection_i_d: hostChain.connectionID,
          i_c_a_account: {
            address: hostChain.iCAAccount.address,
            balance: {
              denom: hostChain.iCAAccount.balance.denom,
              amount: hostChain.iCAAccount.balance.amount,
            },
            owner: hostChain.iCAAccount.owner,
            channel_state: hostChain.iCAAccount.channelState,
          },
          features: {
            liquid_stake_i_b_c: {
              feature_type: hostChain.features.liquidStakeIBC.featureType,
              code_i_d: hostChain.features.liquidStakeIBC.codeID.toString(),
              instantiation: hostChain.features.liquidStakeIBC.instantiation,
              contract_address: hostChain.features.liquidStakeIBC.contractAddress,
              denoms: hostChain.features.liquidStakeIBC.denoms,
              enabled: hostChain.features.liquidStakeIBC.enabled,
            },
            liquid_stake: {
              feature_type: hostChain.features.liquidStake.featureType,
              code_i_d: hostChain.features.liquidStake.codeID.toString(),
              instantiation: hostChain.features.liquidStake.instantiation,
              contract_address: hostChain.features.liquidStake.contractAddress,
              denoms: hostChain.features.liquidStake.denoms,
              enabled: hostChain.features.liquidStake.enabled,
            },
          },
          transfer_channel_i_d: hostChain.transferChannelID,
          transfer_port_i_d: hostChain.transferPortID,
        },
      };
    },
    fromAmino: ({ authority, host_chain }: MsgCreateHostChainAminoType["value"]): MsgCreateHostChain => {
      return {
        authority,
        hostChain: {
          iD: BigInt(host_chain.i_d),
          chainID: host_chain.chain_i_d,
          connectionID: host_chain.connection_i_d,
          iCAAccount: {
            address: host_chain.i_c_a_account.address,
            balance: {
              denom: host_chain.i_c_a_account.balance.denom,
              amount: host_chain.i_c_a_account.balance.amount,
            },
            owner: host_chain.i_c_a_account.owner,
            channelState: iCAAccount_ChannelStateFromJSON(host_chain.i_c_a_account.channel_state),
          },
          features: {
            liquidStakeIBC: {
              featureType: featureTypeFromJSON(host_chain.features.liquid_stake_i_b_c.feature_type),
              codeID: BigInt(host_chain.features.liquid_stake_i_b_c.code_i_d),
              instantiation: instantiationStateFromJSON(host_chain.features.liquid_stake_i_b_c.instantiation),
              contractAddress: host_chain.features.liquid_stake_i_b_c.contract_address,
              denoms: host_chain.features.liquid_stake_i_b_c.denoms,
              enabled: host_chain.features.liquid_stake_i_b_c.enabled,
            },
            liquidStake: {
              featureType: featureTypeFromJSON(host_chain.features.liquid_stake.feature_type),
              codeID: BigInt(host_chain.features.liquid_stake.code_i_d),
              instantiation: instantiationStateFromJSON(host_chain.features.liquid_stake.instantiation),
              contractAddress: host_chain.features.liquid_stake.contract_address,
              denoms: host_chain.features.liquid_stake.denoms,
              enabled: host_chain.features.liquid_stake.enabled,
            },
          },
          transferChannelID: host_chain.transfer_channel_i_d,
          transferPortID: host_chain.transfer_port_i_d,
        },
      };
    },
  },
  "/pstake.ratesync.v1beta1.MsgUpdateHostChain": {
    aminoType: "pstake/ratesync/MsgUpdateHostChain",
    toAmino: ({ authority, hostChain }: MsgUpdateHostChain): MsgUpdateHostChainAminoType["value"] => {
      return {
        authority,
        host_chain: {
          i_d: hostChain.iD.toString(),
          chain_i_d: hostChain.chainID,
          connection_i_d: hostChain.connectionID,
          i_c_a_account: {
            address: hostChain.iCAAccount.address,
            balance: {
              denom: hostChain.iCAAccount.balance.denom,
              amount: hostChain.iCAAccount.balance.amount,
            },
            owner: hostChain.iCAAccount.owner,
            channel_state: hostChain.iCAAccount.channelState,
          },
          features: {
            liquid_stake_i_b_c: {
              feature_type: hostChain.features.liquidStakeIBC.featureType,
              code_i_d: hostChain.features.liquidStakeIBC.codeID.toString(),
              instantiation: hostChain.features.liquidStakeIBC.instantiation,
              contract_address: hostChain.features.liquidStakeIBC.contractAddress,
              denoms: hostChain.features.liquidStakeIBC.denoms,
              enabled: hostChain.features.liquidStakeIBC.enabled,
            },
            liquid_stake: {
              feature_type: hostChain.features.liquidStake.featureType,
              code_i_d: hostChain.features.liquidStake.codeID.toString(),
              instantiation: hostChain.features.liquidStake.instantiation,
              contract_address: hostChain.features.liquidStake.contractAddress,
              denoms: hostChain.features.liquidStake.denoms,
              enabled: hostChain.features.liquidStake.enabled,
            },
          },
          transfer_channel_i_d: hostChain.transferChannelID,
          transfer_port_i_d: hostChain.transferPortID,
        },
      };
    },
    fromAmino: ({ authority, host_chain }: MsgUpdateHostChainAminoType["value"]): MsgUpdateHostChain => {
      return {
        authority,
        hostChain: {
          iD: BigInt(host_chain.i_d),
          chainID: host_chain.chain_i_d,
          connectionID: host_chain.connection_i_d,
          iCAAccount: {
            address: host_chain.i_c_a_account.address,
            balance: {
              denom: host_chain.i_c_a_account.balance.denom,
              amount: host_chain.i_c_a_account.balance.amount,
            },
            owner: host_chain.i_c_a_account.owner,
            channelState: iCAAccount_ChannelStateFromJSON(host_chain.i_c_a_account.channel_state),
          },
          features: {
            liquidStakeIBC: {
              featureType: featureTypeFromJSON(host_chain.features.liquid_stake_i_b_c.feature_type),
              codeID: BigInt(host_chain.features.liquid_stake_i_b_c.code_i_d),
              instantiation: instantiationStateFromJSON(host_chain.features.liquid_stake_i_b_c.instantiation),
              contractAddress: host_chain.features.liquid_stake_i_b_c.contract_address,
              denoms: host_chain.features.liquid_stake_i_b_c.denoms,
              enabled: host_chain.features.liquid_stake_i_b_c.enabled,
            },
            liquidStake: {
              featureType: featureTypeFromJSON(host_chain.features.liquid_stake.feature_type),
              codeID: BigInt(host_chain.features.liquid_stake.code_i_d),
              instantiation: instantiationStateFromJSON(host_chain.features.liquid_stake.instantiation),
              contractAddress: host_chain.features.liquid_stake.contract_address,
              denoms: host_chain.features.liquid_stake.denoms,
              enabled: host_chain.features.liquid_stake.enabled,
            },
          },
          transferChannelID: host_chain.transfer_channel_i_d,
          transferPortID: host_chain.transfer_port_i_d,
        },
      };
    },
  },
  "/pstake.ratesync.v1beta1.MsgDeleteHostChain": {
    aminoType: "pstake/ratesync/MsgDeleteHostChain",
    toAmino: ({ authority, iD }: MsgDeleteHostChain): MsgDeleteHostChainAminoType["value"] => {
      return {
        authority,
        i_d: iD.toString(),
      };
    },
    fromAmino: ({ authority, i_d }: MsgDeleteHostChainAminoType["value"]): MsgDeleteHostChain => {
      return {
        authority,
        iD: BigInt(i_d),
      };
    },
  },
  "/pstake.ratesync.v1beta1.MsgUpdateParams": {
    aminoType: "pstake/ratesync/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          admin: params.admin,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          admin: params.admin,
        },
      };
    },
  },
};
