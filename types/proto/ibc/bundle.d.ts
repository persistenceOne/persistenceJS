import * as _225 from "./applications/interchain_accounts/controller/v1/controller";
import * as _226 from "./applications/interchain_accounts/controller/v1/query";
import * as _227 from "./applications/interchain_accounts/host/v1/host";
import * as _228 from "./applications/interchain_accounts/host/v1/query";
import * as _229 from "./applications/interchain_accounts/v1/account";
import * as _230 from "./applications/interchain_accounts/v1/genesis";
import * as _231 from "./applications/interchain_accounts/v1/metadata";
import * as _232 from "./applications/interchain_accounts/v1/packet";
import * as _233 from "./applications/transfer/v1/genesis";
import * as _234 from "./applications/transfer/v1/query";
import * as _235 from "./applications/transfer/v1/transfer";
import * as _236 from "./applications/transfer/v1/tx";
import * as _237 from "./applications/transfer/v2/packet";
import * as _238 from "./core/channel/v1/channel";
import * as _239 from "./core/channel/v1/genesis";
import * as _240 from "./core/channel/v1/query";
import * as _241 from "./core/channel/v1/tx";
import * as _242 from "./core/client/v1/client";
import * as _243 from "./core/client/v1/genesis";
import * as _244 from "./core/client/v1/query";
import * as _245 from "./core/client/v1/tx";
import * as _246 from "./core/commitment/v1/commitment";
import * as _247 from "./core/connection/v1/connection";
import * as _248 from "./core/connection/v1/genesis";
import * as _249 from "./core/connection/v1/query";
import * as _250 from "./core/connection/v1/tx";
import * as _251 from "./core/types/v1/genesis";
import * as _252 from "./lightclients/localhost/v1/localhost";
import * as _253 from "./lightclients/solomachine/v1/solomachine";
import * as _254 from "./lightclients/solomachine/v2/solomachine";
import * as _255 from "./lightclients/tendermint/v1/tendermint";
import * as _306 from "./applications/interchain_accounts/controller/v1/query.rpc.query";
import * as _307 from "./applications/interchain_accounts/host/v1/query.rpc.query";
import * as _308 from "./applications/transfer/v1/query.rpc.query";
import * as _309 from "./core/channel/v1/query.rpc.query";
import * as _310 from "./core/client/v1/query.rpc.query";
import * as _311 from "./core/connection/v1/query.rpc.query";
import * as _312 from "./applications/transfer/v1/tx.rpc.msg";
import * as _313 from "./core/channel/v1/tx.rpc.msg";
import * as _314 from "./core/client/v1/tx.rpc.msg";
import * as _315 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
  namespace applications {
    namespace interchain_accounts {
      namespace controller {
        const v1: {
          QueryClientImpl: typeof _306.QueryClientImpl;
          QueryParamsRequest: {
            encode(
              _: _226.QueryParamsRequest,
              writer?: import("protobufjs").Writer,
            ): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.QueryParamsRequest;
            fromJSON(_: any): _226.QueryParamsRequest;
            toJSON(_: _226.QueryParamsRequest): unknown;
            fromPartial(_: {}): _226.QueryParamsRequest;
          };
          QueryParamsResponse: {
            encode(
              message: _226.QueryParamsResponse,
              writer?: import("protobufjs").Writer,
            ): import("protobufjs").Writer;
            decode(
              input: Uint8Array | import("protobufjs").Reader,
              length?: number,
            ): _226.QueryParamsResponse;
            fromJSON(object: any): _226.QueryParamsResponse;
            toJSON(message: _226.QueryParamsResponse): unknown;
            fromPartial(object: {
              params?: {
                controllerEnabled?: boolean;
              };
            }): _226.QueryParamsResponse;
          };
          Params: {
            encode(message: _225.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.Params;
            fromJSON(object: any): _225.Params;
            toJSON(message: _225.Params): unknown;
            fromPartial(object: { controllerEnabled?: boolean }): _225.Params;
          };
        };
      }
      namespace host {
        const v1: {
          QueryClientImpl: typeof _307.QueryClientImpl;
          QueryParamsRequest: {
            encode(
              _: _228.QueryParamsRequest,
              writer?: import("protobufjs").Writer,
            ): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryParamsRequest;
            fromJSON(_: any): _228.QueryParamsRequest;
            toJSON(_: _228.QueryParamsRequest): unknown;
            fromPartial(_: {}): _228.QueryParamsRequest;
          };
          QueryParamsResponse: {
            encode(
              message: _228.QueryParamsResponse,
              writer?: import("protobufjs").Writer,
            ): import("protobufjs").Writer;
            decode(
              input: Uint8Array | import("protobufjs").Reader,
              length?: number,
            ): _228.QueryParamsResponse;
            fromJSON(object: any): _228.QueryParamsResponse;
            toJSON(message: _228.QueryParamsResponse): unknown;
            fromPartial(object: {
              params?: {
                hostEnabled?: boolean;
                allowMessages?: string[];
              };
            }): _228.QueryParamsResponse;
          };
          Params: {
            encode(message: _227.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Params;
            fromJSON(object: any): _227.Params;
            toJSON(message: _227.Params): unknown;
            fromPartial(object: { hostEnabled?: boolean; allowMessages?: string[] }): _227.Params;
          };
        };
      }
      const v1: {
        typeFromJSON(object: any): _232.Type;
        typeToJSON(object: _232.Type): string;
        Type: typeof _232.Type;
        InterchainAccountPacketData: {
          encode(
            message: _232.InterchainAccountPacketData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _232.InterchainAccountPacketData;
          fromJSON(object: any): _232.InterchainAccountPacketData;
          toJSON(message: _232.InterchainAccountPacketData): unknown;
          fromPartial(object: {
            type?: _232.Type;
            data?: Uint8Array;
            memo?: string;
          }): _232.InterchainAccountPacketData;
        };
        CosmosTx: {
          encode(message: _232.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.CosmosTx;
          fromJSON(object: any): _232.CosmosTx;
          toJSON(message: _232.CosmosTx): unknown;
          fromPartial(object: {
            messages?: {
              typeUrl?: string;
              value?: Uint8Array;
            }[];
          }): _232.CosmosTx;
        };
        Metadata: {
          encode(message: _231.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.Metadata;
          fromJSON(object: any): _231.Metadata;
          toJSON(message: _231.Metadata): unknown;
          fromPartial(object: {
            version?: string;
            controllerConnectionId?: string;
            hostConnectionId?: string;
            address?: string;
            encoding?: string;
            txType?: string;
          }): _231.Metadata;
        };
        GenesisState: {
          encode(
            message: _230.GenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState;
          fromJSON(object: any): _230.GenesisState;
          toJSON(message: _230.GenesisState): unknown;
          fromPartial(object: {
            controllerGenesisState?: {
              activeChannels?: {
                connectionId?: string;
                portId?: string;
                channelId?: string;
              }[];
              interchainAccounts?: {
                connectionId?: string;
                portId?: string;
                accountAddress?: string;
              }[];
              ports?: string[];
              params?: {
                controllerEnabled?: boolean;
              };
            };
            hostGenesisState?: {
              activeChannels?: {
                connectionId?: string;
                portId?: string;
                channelId?: string;
              }[];
              interchainAccounts?: {
                connectionId?: string;
                portId?: string;
                accountAddress?: string;
              }[];
              port?: string;
              params?: {
                hostEnabled?: boolean;
                allowMessages?: string[];
              };
            };
          }): _230.GenesisState;
        };
        ControllerGenesisState: {
          encode(
            message: _230.ControllerGenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _230.ControllerGenesisState;
          fromJSON(object: any): _230.ControllerGenesisState;
          toJSON(message: _230.ControllerGenesisState): unknown;
          fromPartial(object: {
            activeChannels?: {
              connectionId?: string;
              portId?: string;
              channelId?: string;
            }[];
            interchainAccounts?: {
              connectionId?: string;
              portId?: string;
              accountAddress?: string;
            }[];
            ports?: string[];
            params?: {
              controllerEnabled?: boolean;
            };
          }): _230.ControllerGenesisState;
        };
        HostGenesisState: {
          encode(
            message: _230.HostGenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.HostGenesisState;
          fromJSON(object: any): _230.HostGenesisState;
          toJSON(message: _230.HostGenesisState): unknown;
          fromPartial(object: {
            activeChannels?: {
              connectionId?: string;
              portId?: string;
              channelId?: string;
            }[];
            interchainAccounts?: {
              connectionId?: string;
              portId?: string;
              accountAddress?: string;
            }[];
            port?: string;
            params?: {
              hostEnabled?: boolean;
              allowMessages?: string[];
            };
          }): _230.HostGenesisState;
        };
        ActiveChannel: {
          encode(
            message: _230.ActiveChannel,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ActiveChannel;
          fromJSON(object: any): _230.ActiveChannel;
          toJSON(message: _230.ActiveChannel): unknown;
          fromPartial(object: {
            connectionId?: string;
            portId?: string;
            channelId?: string;
          }): _230.ActiveChannel;
        };
        RegisteredInterchainAccount: {
          encode(
            message: _230.RegisteredInterchainAccount,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _230.RegisteredInterchainAccount;
          fromJSON(object: any): _230.RegisteredInterchainAccount;
          toJSON(message: _230.RegisteredInterchainAccount): unknown;
          fromPartial(object: {
            connectionId?: string;
            portId?: string;
            accountAddress?: string;
          }): _230.RegisteredInterchainAccount;
        };
        InterchainAccount: {
          encode(
            message: _229.InterchainAccount,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.InterchainAccount;
          fromJSON(object: any): _229.InterchainAccount;
          toJSON(message: _229.InterchainAccount): unknown;
          fromPartial(object: {
            baseAccount?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              accountNumber?: any;
              sequence?: any;
            };
            accountOwner?: string;
          }): _229.InterchainAccount;
        };
      };
    }
    namespace transfer {
      const v1: {
        MsgClientImpl: typeof _312.MsgClientImpl;
        QueryClientImpl: typeof _308.QueryClientImpl;
        MsgTransfer: {
          encode(
            message: _236.MsgTransfer,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgTransfer;
          fromJSON(object: any): _236.MsgTransfer;
          toJSON(message: _236.MsgTransfer): unknown;
          fromPartial(object: {
            sourcePort?: string;
            sourceChannel?: string;
            token?: {
              denom?: string;
              amount?: string;
            };
            sender?: string;
            receiver?: string;
            timeoutHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            timeoutTimestamp?: any;
          }): _236.MsgTransfer;
        };
        MsgTransferResponse: {
          encode(
            _: _236.MsgTransferResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgTransferResponse;
          fromJSON(_: any): _236.MsgTransferResponse;
          toJSON(_: _236.MsgTransferResponse): unknown;
          fromPartial(_: {}): _236.MsgTransferResponse;
        };
        DenomTrace: {
          encode(message: _235.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.DenomTrace;
          fromJSON(object: any): _235.DenomTrace;
          toJSON(message: _235.DenomTrace): unknown;
          fromPartial(object: { path?: string; baseDenom?: string }): _235.DenomTrace;
        };
        Params: {
          encode(message: _235.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Params;
          fromJSON(object: any): _235.Params;
          toJSON(message: _235.Params): unknown;
          fromPartial(object: { sendEnabled?: boolean; receiveEnabled?: boolean }): _235.Params;
        };
        QueryDenomTraceRequest: {
          encode(
            message: _234.QueryDenomTraceRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _234.QueryDenomTraceRequest;
          fromJSON(object: any): _234.QueryDenomTraceRequest;
          toJSON(message: _234.QueryDenomTraceRequest): unknown;
          fromPartial(object: { hash?: string }): _234.QueryDenomTraceRequest;
        };
        QueryDenomTraceResponse: {
          encode(
            message: _234.QueryDenomTraceResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _234.QueryDenomTraceResponse;
          fromJSON(object: any): _234.QueryDenomTraceResponse;
          toJSON(message: _234.QueryDenomTraceResponse): unknown;
          fromPartial(object: {
            denomTrace?: {
              path?: string;
              baseDenom?: string;
            };
          }): _234.QueryDenomTraceResponse;
        };
        QueryDenomTracesRequest: {
          encode(
            message: _234.QueryDenomTracesRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _234.QueryDenomTracesRequest;
          fromJSON(object: any): _234.QueryDenomTracesRequest;
          toJSON(message: _234.QueryDenomTracesRequest): unknown;
          fromPartial(object: {
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _234.QueryDenomTracesRequest;
        };
        QueryDenomTracesResponse: {
          encode(
            message: _234.QueryDenomTracesResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _234.QueryDenomTracesResponse;
          fromJSON(object: any): _234.QueryDenomTracesResponse;
          toJSON(message: _234.QueryDenomTracesResponse): unknown;
          fromPartial(object: {
            denomTraces?: {
              path?: string;
              baseDenom?: string;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
          }): _234.QueryDenomTracesResponse;
        };
        QueryParamsRequest: {
          encode(
            _: _234.QueryParamsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryParamsRequest;
          fromJSON(_: any): _234.QueryParamsRequest;
          toJSON(_: _234.QueryParamsRequest): unknown;
          fromPartial(_: {}): _234.QueryParamsRequest;
        };
        QueryParamsResponse: {
          encode(
            message: _234.QueryParamsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.QueryParamsResponse;
          fromJSON(object: any): _234.QueryParamsResponse;
          toJSON(message: _234.QueryParamsResponse): unknown;
          fromPartial(object: {
            params?: {
              sendEnabled?: boolean;
              receiveEnabled?: boolean;
            };
          }): _234.QueryParamsResponse;
        };
        QueryDenomHashRequest: {
          encode(
            message: _234.QueryDenomHashRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _234.QueryDenomHashRequest;
          fromJSON(object: any): _234.QueryDenomHashRequest;
          toJSON(message: _234.QueryDenomHashRequest): unknown;
          fromPartial(object: { trace?: string }): _234.QueryDenomHashRequest;
        };
        QueryDenomHashResponse: {
          encode(
            message: _234.QueryDenomHashResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _234.QueryDenomHashResponse;
          fromJSON(object: any): _234.QueryDenomHashResponse;
          toJSON(message: _234.QueryDenomHashResponse): unknown;
          fromPartial(object: { hash?: string }): _234.QueryDenomHashResponse;
        };
        GenesisState: {
          encode(
            message: _233.GenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.GenesisState;
          fromJSON(object: any): _233.GenesisState;
          toJSON(message: _233.GenesisState): unknown;
          fromPartial(object: {
            portId?: string;
            denomTraces?: {
              path?: string;
              baseDenom?: string;
            }[];
            params?: {
              sendEnabled?: boolean;
              receiveEnabled?: boolean;
            };
          }): _233.GenesisState;
        };
      };
      const v2: {
        FungibleTokenPacketData: {
          encode(
            message: _237.FungibleTokenPacketData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _237.FungibleTokenPacketData;
          fromJSON(object: any): _237.FungibleTokenPacketData;
          toJSON(message: _237.FungibleTokenPacketData): unknown;
          fromPartial(object: {
            denom?: string;
            amount?: string;
            sender?: string;
            receiver?: string;
          }): _237.FungibleTokenPacketData;
        };
      };
    }
  }
  namespace core {
    namespace channel {
      const v1: {
        MsgClientImpl: typeof _313.MsgClientImpl;
        QueryClientImpl: typeof _309.QueryClientImpl;
        responseResultTypeFromJSON(object: any): _241.ResponseResultType;
        responseResultTypeToJSON(object: _241.ResponseResultType): string;
        ResponseResultType: typeof _241.ResponseResultType;
        MsgChannelOpenInit: {
          encode(
            message: _241.MsgChannelOpenInit,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgChannelOpenInit;
          fromJSON(object: any): _241.MsgChannelOpenInit;
          toJSON(message: _241.MsgChannelOpenInit): unknown;
          fromPartial(object: {
            portId?: string;
            channel?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
            };
            signer?: string;
          }): _241.MsgChannelOpenInit;
        };
        MsgChannelOpenInitResponse: {
          encode(
            message: _241.MsgChannelOpenInitResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelOpenInitResponse;
          fromJSON(object: any): _241.MsgChannelOpenInitResponse;
          toJSON(message: _241.MsgChannelOpenInitResponse): unknown;
          fromPartial(object: { channelId?: string }): _241.MsgChannelOpenInitResponse;
        };
        MsgChannelOpenTry: {
          encode(
            message: _241.MsgChannelOpenTry,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgChannelOpenTry;
          fromJSON(object: any): _241.MsgChannelOpenTry;
          toJSON(message: _241.MsgChannelOpenTry): unknown;
          fromPartial(object: {
            portId?: string;
            previousChannelId?: string;
            channel?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
            };
            counterpartyVersion?: string;
            proofInit?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _241.MsgChannelOpenTry;
        };
        MsgChannelOpenTryResponse: {
          encode(
            _: _241.MsgChannelOpenTryResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelOpenTryResponse;
          fromJSON(_: any): _241.MsgChannelOpenTryResponse;
          toJSON(_: _241.MsgChannelOpenTryResponse): unknown;
          fromPartial(_: {}): _241.MsgChannelOpenTryResponse;
        };
        MsgChannelOpenAck: {
          encode(
            message: _241.MsgChannelOpenAck,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgChannelOpenAck;
          fromJSON(object: any): _241.MsgChannelOpenAck;
          toJSON(message: _241.MsgChannelOpenAck): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            counterpartyChannelId?: string;
            counterpartyVersion?: string;
            proofTry?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _241.MsgChannelOpenAck;
        };
        MsgChannelOpenAckResponse: {
          encode(
            _: _241.MsgChannelOpenAckResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelOpenAckResponse;
          fromJSON(_: any): _241.MsgChannelOpenAckResponse;
          toJSON(_: _241.MsgChannelOpenAckResponse): unknown;
          fromPartial(_: {}): _241.MsgChannelOpenAckResponse;
        };
        MsgChannelOpenConfirm: {
          encode(
            message: _241.MsgChannelOpenConfirm,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelOpenConfirm;
          fromJSON(object: any): _241.MsgChannelOpenConfirm;
          toJSON(message: _241.MsgChannelOpenConfirm): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            proofAck?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _241.MsgChannelOpenConfirm;
        };
        MsgChannelOpenConfirmResponse: {
          encode(
            _: _241.MsgChannelOpenConfirmResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelOpenConfirmResponse;
          fromJSON(_: any): _241.MsgChannelOpenConfirmResponse;
          toJSON(_: _241.MsgChannelOpenConfirmResponse): unknown;
          fromPartial(_: {}): _241.MsgChannelOpenConfirmResponse;
        };
        MsgChannelCloseInit: {
          encode(
            message: _241.MsgChannelCloseInit,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgChannelCloseInit;
          fromJSON(object: any): _241.MsgChannelCloseInit;
          toJSON(message: _241.MsgChannelCloseInit): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            signer?: string;
          }): _241.MsgChannelCloseInit;
        };
        MsgChannelCloseInitResponse: {
          encode(
            _: _241.MsgChannelCloseInitResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelCloseInitResponse;
          fromJSON(_: any): _241.MsgChannelCloseInitResponse;
          toJSON(_: _241.MsgChannelCloseInitResponse): unknown;
          fromPartial(_: {}): _241.MsgChannelCloseInitResponse;
        };
        MsgChannelCloseConfirm: {
          encode(
            message: _241.MsgChannelCloseConfirm,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelCloseConfirm;
          fromJSON(object: any): _241.MsgChannelCloseConfirm;
          toJSON(message: _241.MsgChannelCloseConfirm): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            proofInit?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _241.MsgChannelCloseConfirm;
        };
        MsgChannelCloseConfirmResponse: {
          encode(
            _: _241.MsgChannelCloseConfirmResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgChannelCloseConfirmResponse;
          fromJSON(_: any): _241.MsgChannelCloseConfirmResponse;
          toJSON(_: _241.MsgChannelCloseConfirmResponse): unknown;
          fromPartial(_: {}): _241.MsgChannelCloseConfirmResponse;
        };
        MsgRecvPacket: {
          encode(
            message: _241.MsgRecvPacket,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRecvPacket;
          fromJSON(object: any): _241.MsgRecvPacket;
          toJSON(message: _241.MsgRecvPacket): unknown;
          fromPartial(object: {
            packet?: {
              sequence?: any;
              sourcePort?: string;
              sourceChannel?: string;
              destinationPort?: string;
              destinationChannel?: string;
              data?: Uint8Array;
              timeoutHeight?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              timeoutTimestamp?: any;
            };
            proofCommitment?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _241.MsgRecvPacket;
        };
        MsgRecvPacketResponse: {
          encode(
            message: _241.MsgRecvPacketResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgRecvPacketResponse;
          fromJSON(object: any): _241.MsgRecvPacketResponse;
          toJSON(message: _241.MsgRecvPacketResponse): unknown;
          fromPartial(object: { result?: _241.ResponseResultType }): _241.MsgRecvPacketResponse;
        };
        MsgTimeout: {
          encode(message: _241.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgTimeout;
          fromJSON(object: any): _241.MsgTimeout;
          toJSON(message: _241.MsgTimeout): unknown;
          fromPartial(object: {
            packet?: {
              sequence?: any;
              sourcePort?: string;
              sourceChannel?: string;
              destinationPort?: string;
              destinationChannel?: string;
              data?: Uint8Array;
              timeoutHeight?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              timeoutTimestamp?: any;
            };
            proofUnreceived?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            nextSequenceRecv?: any;
            signer?: string;
          }): _241.MsgTimeout;
        };
        MsgTimeoutResponse: {
          encode(
            message: _241.MsgTimeoutResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgTimeoutResponse;
          fromJSON(object: any): _241.MsgTimeoutResponse;
          toJSON(message: _241.MsgTimeoutResponse): unknown;
          fromPartial(object: { result?: _241.ResponseResultType }): _241.MsgTimeoutResponse;
        };
        MsgTimeoutOnClose: {
          encode(
            message: _241.MsgTimeoutOnClose,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgTimeoutOnClose;
          fromJSON(object: any): _241.MsgTimeoutOnClose;
          toJSON(message: _241.MsgTimeoutOnClose): unknown;
          fromPartial(object: {
            packet?: {
              sequence?: any;
              sourcePort?: string;
              sourceChannel?: string;
              destinationPort?: string;
              destinationChannel?: string;
              data?: Uint8Array;
              timeoutHeight?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              timeoutTimestamp?: any;
            };
            proofUnreceived?: Uint8Array;
            proofClose?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            nextSequenceRecv?: any;
            signer?: string;
          }): _241.MsgTimeoutOnClose;
        };
        MsgTimeoutOnCloseResponse: {
          encode(
            message: _241.MsgTimeoutOnCloseResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgTimeoutOnCloseResponse;
          fromJSON(object: any): _241.MsgTimeoutOnCloseResponse;
          toJSON(message: _241.MsgTimeoutOnCloseResponse): unknown;
          fromPartial(object: { result?: _241.ResponseResultType }): _241.MsgTimeoutOnCloseResponse;
        };
        MsgAcknowledgement: {
          encode(
            message: _241.MsgAcknowledgement,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgAcknowledgement;
          fromJSON(object: any): _241.MsgAcknowledgement;
          toJSON(message: _241.MsgAcknowledgement): unknown;
          fromPartial(object: {
            packet?: {
              sequence?: any;
              sourcePort?: string;
              sourceChannel?: string;
              destinationPort?: string;
              destinationChannel?: string;
              data?: Uint8Array;
              timeoutHeight?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              timeoutTimestamp?: any;
            };
            acknowledgement?: Uint8Array;
            proofAcked?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _241.MsgAcknowledgement;
        };
        MsgAcknowledgementResponse: {
          encode(
            message: _241.MsgAcknowledgementResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _241.MsgAcknowledgementResponse;
          fromJSON(object: any): _241.MsgAcknowledgementResponse;
          toJSON(message: _241.MsgAcknowledgementResponse): unknown;
          fromPartial(object: { result?: _241.ResponseResultType }): _241.MsgAcknowledgementResponse;
        };
        QueryChannelRequest: {
          encode(
            message: _240.QueryChannelRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryChannelRequest;
          fromJSON(object: any): _240.QueryChannelRequest;
          toJSON(message: _240.QueryChannelRequest): unknown;
          fromPartial(object: { portId?: string; channelId?: string }): _240.QueryChannelRequest;
        };
        QueryChannelResponse: {
          encode(
            message: _240.QueryChannelResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryChannelResponse;
          fromJSON(object: any): _240.QueryChannelResponse;
          toJSON(message: _240.QueryChannelResponse): unknown;
          fromPartial(object: {
            channel?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
            };
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryChannelResponse;
        };
        QueryChannelsRequest: {
          encode(
            message: _240.QueryChannelsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryChannelsRequest;
          fromJSON(object: any): _240.QueryChannelsRequest;
          toJSON(message: _240.QueryChannelsRequest): unknown;
          fromPartial(object: {
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _240.QueryChannelsRequest;
        };
        QueryChannelsResponse: {
          encode(
            message: _240.QueryChannelsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryChannelsResponse;
          fromJSON(object: any): _240.QueryChannelsResponse;
          toJSON(message: _240.QueryChannelsResponse): unknown;
          fromPartial(object: {
            channels?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
              portId?: string;
              channelId?: string;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryChannelsResponse;
        };
        QueryConnectionChannelsRequest: {
          encode(
            message: _240.QueryConnectionChannelsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryConnectionChannelsRequest;
          fromJSON(object: any): _240.QueryConnectionChannelsRequest;
          toJSON(message: _240.QueryConnectionChannelsRequest): unknown;
          fromPartial(object: {
            connection?: string;
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _240.QueryConnectionChannelsRequest;
        };
        QueryConnectionChannelsResponse: {
          encode(
            message: _240.QueryConnectionChannelsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryConnectionChannelsResponse;
          fromJSON(object: any): _240.QueryConnectionChannelsResponse;
          toJSON(message: _240.QueryConnectionChannelsResponse): unknown;
          fromPartial(object: {
            channels?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
              portId?: string;
              channelId?: string;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryConnectionChannelsResponse;
        };
        QueryChannelClientStateRequest: {
          encode(
            message: _240.QueryChannelClientStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryChannelClientStateRequest;
          fromJSON(object: any): _240.QueryChannelClientStateRequest;
          toJSON(message: _240.QueryChannelClientStateRequest): unknown;
          fromPartial(object: { portId?: string; channelId?: string }): _240.QueryChannelClientStateRequest;
        };
        QueryChannelClientStateResponse: {
          encode(
            message: _240.QueryChannelClientStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryChannelClientStateResponse;
          fromJSON(object: any): _240.QueryChannelClientStateResponse;
          toJSON(message: _240.QueryChannelClientStateResponse): unknown;
          fromPartial(object: {
            identifiedClientState?: {
              clientId?: string;
              clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            };
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryChannelClientStateResponse;
        };
        QueryChannelConsensusStateRequest: {
          encode(
            message: _240.QueryChannelConsensusStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryChannelConsensusStateRequest;
          fromJSON(object: any): _240.QueryChannelConsensusStateRequest;
          toJSON(message: _240.QueryChannelConsensusStateRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            revisionNumber?: any;
            revisionHeight?: any;
          }): _240.QueryChannelConsensusStateRequest;
        };
        QueryChannelConsensusStateResponse: {
          encode(
            message: _240.QueryChannelConsensusStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryChannelConsensusStateResponse;
          fromJSON(object: any): _240.QueryChannelConsensusStateResponse;
          toJSON(message: _240.QueryChannelConsensusStateResponse): unknown;
          fromPartial(object: {
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            clientId?: string;
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryChannelConsensusStateResponse;
        };
        QueryPacketCommitmentRequest: {
          encode(
            message: _240.QueryPacketCommitmentRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketCommitmentRequest;
          fromJSON(object: any): _240.QueryPacketCommitmentRequest;
          toJSON(message: _240.QueryPacketCommitmentRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            sequence?: any;
          }): _240.QueryPacketCommitmentRequest;
        };
        QueryPacketCommitmentResponse: {
          encode(
            message: _240.QueryPacketCommitmentResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketCommitmentResponse;
          fromJSON(object: any): _240.QueryPacketCommitmentResponse;
          toJSON(message: _240.QueryPacketCommitmentResponse): unknown;
          fromPartial(object: {
            commitment?: Uint8Array;
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryPacketCommitmentResponse;
        };
        QueryPacketCommitmentsRequest: {
          encode(
            message: _240.QueryPacketCommitmentsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketCommitmentsRequest;
          fromJSON(object: any): _240.QueryPacketCommitmentsRequest;
          toJSON(message: _240.QueryPacketCommitmentsRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _240.QueryPacketCommitmentsRequest;
        };
        QueryPacketCommitmentsResponse: {
          encode(
            message: _240.QueryPacketCommitmentsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketCommitmentsResponse;
          fromJSON(object: any): _240.QueryPacketCommitmentsResponse;
          toJSON(message: _240.QueryPacketCommitmentsResponse): unknown;
          fromPartial(object: {
            commitments?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
              data?: Uint8Array;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryPacketCommitmentsResponse;
        };
        QueryPacketReceiptRequest: {
          encode(
            message: _240.QueryPacketReceiptRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketReceiptRequest;
          fromJSON(object: any): _240.QueryPacketReceiptRequest;
          toJSON(message: _240.QueryPacketReceiptRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            sequence?: any;
          }): _240.QueryPacketReceiptRequest;
        };
        QueryPacketReceiptResponse: {
          encode(
            message: _240.QueryPacketReceiptResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketReceiptResponse;
          fromJSON(object: any): _240.QueryPacketReceiptResponse;
          toJSON(message: _240.QueryPacketReceiptResponse): unknown;
          fromPartial(object: {
            received?: boolean;
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryPacketReceiptResponse;
        };
        QueryPacketAcknowledgementRequest: {
          encode(
            message: _240.QueryPacketAcknowledgementRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketAcknowledgementRequest;
          fromJSON(object: any): _240.QueryPacketAcknowledgementRequest;
          toJSON(message: _240.QueryPacketAcknowledgementRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            sequence?: any;
          }): _240.QueryPacketAcknowledgementRequest;
        };
        QueryPacketAcknowledgementResponse: {
          encode(
            message: _240.QueryPacketAcknowledgementResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketAcknowledgementResponse;
          fromJSON(object: any): _240.QueryPacketAcknowledgementResponse;
          toJSON(message: _240.QueryPacketAcknowledgementResponse): unknown;
          fromPartial(object: {
            acknowledgement?: Uint8Array;
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryPacketAcknowledgementResponse;
        };
        QueryPacketAcknowledgementsRequest: {
          encode(
            message: _240.QueryPacketAcknowledgementsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketAcknowledgementsRequest;
          fromJSON(object: any): _240.QueryPacketAcknowledgementsRequest;
          toJSON(message: _240.QueryPacketAcknowledgementsRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
            packetCommitmentSequences?: any[];
          }): _240.QueryPacketAcknowledgementsRequest;
        };
        QueryPacketAcknowledgementsResponse: {
          encode(
            message: _240.QueryPacketAcknowledgementsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryPacketAcknowledgementsResponse;
          fromJSON(object: any): _240.QueryPacketAcknowledgementsResponse;
          toJSON(message: _240.QueryPacketAcknowledgementsResponse): unknown;
          fromPartial(object: {
            acknowledgements?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
              data?: Uint8Array;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryPacketAcknowledgementsResponse;
        };
        QueryUnreceivedPacketsRequest: {
          encode(
            message: _240.QueryUnreceivedPacketsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryUnreceivedPacketsRequest;
          fromJSON(object: any): _240.QueryUnreceivedPacketsRequest;
          toJSON(message: _240.QueryUnreceivedPacketsRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            packetCommitmentSequences?: any[];
          }): _240.QueryUnreceivedPacketsRequest;
        };
        QueryUnreceivedPacketsResponse: {
          encode(
            message: _240.QueryUnreceivedPacketsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryUnreceivedPacketsResponse;
          fromJSON(object: any): _240.QueryUnreceivedPacketsResponse;
          toJSON(message: _240.QueryUnreceivedPacketsResponse): unknown;
          fromPartial(object: {
            sequences?: any[];
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryUnreceivedPacketsResponse;
        };
        QueryUnreceivedAcksRequest: {
          encode(
            message: _240.QueryUnreceivedAcksRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryUnreceivedAcksRequest;
          fromJSON(object: any): _240.QueryUnreceivedAcksRequest;
          toJSON(message: _240.QueryUnreceivedAcksRequest): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            packetAckSequences?: any[];
          }): _240.QueryUnreceivedAcksRequest;
        };
        QueryUnreceivedAcksResponse: {
          encode(
            message: _240.QueryUnreceivedAcksResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryUnreceivedAcksResponse;
          fromJSON(object: any): _240.QueryUnreceivedAcksResponse;
          toJSON(message: _240.QueryUnreceivedAcksResponse): unknown;
          fromPartial(object: {
            sequences?: any[];
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryUnreceivedAcksResponse;
        };
        QueryNextSequenceReceiveRequest: {
          encode(
            message: _240.QueryNextSequenceReceiveRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryNextSequenceReceiveRequest;
          fromJSON(object: any): _240.QueryNextSequenceReceiveRequest;
          toJSON(message: _240.QueryNextSequenceReceiveRequest): unknown;
          fromPartial(object: { portId?: string; channelId?: string }): _240.QueryNextSequenceReceiveRequest;
        };
        QueryNextSequenceReceiveResponse: {
          encode(
            message: _240.QueryNextSequenceReceiveResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _240.QueryNextSequenceReceiveResponse;
          fromJSON(object: any): _240.QueryNextSequenceReceiveResponse;
          toJSON(message: _240.QueryNextSequenceReceiveResponse): unknown;
          fromPartial(object: {
            nextSequenceReceive?: any;
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _240.QueryNextSequenceReceiveResponse;
        };
        GenesisState: {
          encode(
            message: _239.GenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.GenesisState;
          fromJSON(object: any): _239.GenesisState;
          toJSON(message: _239.GenesisState): unknown;
          fromPartial(object: {
            channels?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
              portId?: string;
              channelId?: string;
            }[];
            acknowledgements?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
              data?: Uint8Array;
            }[];
            commitments?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
              data?: Uint8Array;
            }[];
            receipts?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
              data?: Uint8Array;
            }[];
            sendSequences?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
            }[];
            recvSequences?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
            }[];
            ackSequences?: {
              portId?: string;
              channelId?: string;
              sequence?: any;
            }[];
            nextChannelSequence?: any;
          }): _239.GenesisState;
        };
        PacketSequence: {
          encode(
            message: _239.PacketSequence,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.PacketSequence;
          fromJSON(object: any): _239.PacketSequence;
          toJSON(message: _239.PacketSequence): unknown;
          fromPartial(object: { portId?: string; channelId?: string; sequence?: any }): _239.PacketSequence;
        };
        stateFromJSON(object: any): _238.State;
        stateToJSON(object: _238.State): string;
        orderFromJSON(object: any): _238.Order;
        orderToJSON(object: _238.Order): string;
        State: typeof _238.State;
        Order: typeof _238.Order;
        Channel: {
          encode(message: _238.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Channel;
          fromJSON(object: any): _238.Channel;
          toJSON(message: _238.Channel): unknown;
          fromPartial(object: {
            state?: _238.State;
            ordering?: _238.Order;
            counterparty?: {
              portId?: string;
              channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
          }): _238.Channel;
        };
        IdentifiedChannel: {
          encode(
            message: _238.IdentifiedChannel,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.IdentifiedChannel;
          fromJSON(object: any): _238.IdentifiedChannel;
          toJSON(message: _238.IdentifiedChannel): unknown;
          fromPartial(object: {
            state?: _238.State;
            ordering?: _238.Order;
            counterparty?: {
              portId?: string;
              channelId?: string;
            };
            connectionHops?: string[];
            version?: string;
            portId?: string;
            channelId?: string;
          }): _238.IdentifiedChannel;
        };
        Counterparty: {
          encode(
            message: _238.Counterparty,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Counterparty;
          fromJSON(object: any): _238.Counterparty;
          toJSON(message: _238.Counterparty): unknown;
          fromPartial(object: { portId?: string; channelId?: string }): _238.Counterparty;
        };
        Packet: {
          encode(message: _238.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Packet;
          fromJSON(object: any): _238.Packet;
          toJSON(message: _238.Packet): unknown;
          fromPartial(object: {
            sequence?: any;
            sourcePort?: string;
            sourceChannel?: string;
            destinationPort?: string;
            destinationChannel?: string;
            data?: Uint8Array;
            timeoutHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            timeoutTimestamp?: any;
          }): _238.Packet;
        };
        PacketState: {
          encode(
            message: _238.PacketState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.PacketState;
          fromJSON(object: any): _238.PacketState;
          toJSON(message: _238.PacketState): unknown;
          fromPartial(object: {
            portId?: string;
            channelId?: string;
            sequence?: any;
            data?: Uint8Array;
          }): _238.PacketState;
        };
        Acknowledgement: {
          encode(
            message: _238.Acknowledgement,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Acknowledgement;
          fromJSON(object: any): _238.Acknowledgement;
          toJSON(message: _238.Acknowledgement): unknown;
          fromPartial(object: { result?: Uint8Array; error?: string }): _238.Acknowledgement;
        };
      };
    }
    namespace client {
      const v1: {
        MsgClientImpl: typeof _314.MsgClientImpl;
        QueryClientImpl: typeof _310.QueryClientImpl;
        MsgCreateClient: {
          encode(
            message: _245.MsgCreateClient,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateClient;
          fromJSON(object: any): _245.MsgCreateClient;
          toJSON(message: _245.MsgCreateClient): unknown;
          fromPartial(object: {
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            signer?: string;
          }): _245.MsgCreateClient;
        };
        MsgCreateClientResponse: {
          encode(
            _: _245.MsgCreateClientResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _245.MsgCreateClientResponse;
          fromJSON(_: any): _245.MsgCreateClientResponse;
          toJSON(_: _245.MsgCreateClientResponse): unknown;
          fromPartial(_: {}): _245.MsgCreateClientResponse;
        };
        MsgUpdateClient: {
          encode(
            message: _245.MsgUpdateClient,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateClient;
          fromJSON(object: any): _245.MsgUpdateClient;
          toJSON(message: _245.MsgUpdateClient): unknown;
          fromPartial(object: {
            clientId?: string;
            header?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            signer?: string;
          }): _245.MsgUpdateClient;
        };
        MsgUpdateClientResponse: {
          encode(
            _: _245.MsgUpdateClientResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _245.MsgUpdateClientResponse;
          fromJSON(_: any): _245.MsgUpdateClientResponse;
          toJSON(_: _245.MsgUpdateClientResponse): unknown;
          fromPartial(_: {}): _245.MsgUpdateClientResponse;
        };
        MsgUpgradeClient: {
          encode(
            message: _245.MsgUpgradeClient,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpgradeClient;
          fromJSON(object: any): _245.MsgUpgradeClient;
          toJSON(message: _245.MsgUpgradeClient): unknown;
          fromPartial(object: {
            clientId?: string;
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            proofUpgradeClient?: Uint8Array;
            proofUpgradeConsensusState?: Uint8Array;
            signer?: string;
          }): _245.MsgUpgradeClient;
        };
        MsgUpgradeClientResponse: {
          encode(
            _: _245.MsgUpgradeClientResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _245.MsgUpgradeClientResponse;
          fromJSON(_: any): _245.MsgUpgradeClientResponse;
          toJSON(_: _245.MsgUpgradeClientResponse): unknown;
          fromPartial(_: {}): _245.MsgUpgradeClientResponse;
        };
        MsgSubmitMisbehaviour: {
          encode(
            message: _245.MsgSubmitMisbehaviour,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _245.MsgSubmitMisbehaviour;
          fromJSON(object: any): _245.MsgSubmitMisbehaviour;
          toJSON(message: _245.MsgSubmitMisbehaviour): unknown;
          fromPartial(object: {
            clientId?: string;
            misbehaviour?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            signer?: string;
          }): _245.MsgSubmitMisbehaviour;
        };
        MsgSubmitMisbehaviourResponse: {
          encode(
            _: _245.MsgSubmitMisbehaviourResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _245.MsgSubmitMisbehaviourResponse;
          fromJSON(_: any): _245.MsgSubmitMisbehaviourResponse;
          toJSON(_: _245.MsgSubmitMisbehaviourResponse): unknown;
          fromPartial(_: {}): _245.MsgSubmitMisbehaviourResponse;
        };
        QueryClientStateRequest: {
          encode(
            message: _244.QueryClientStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientStateRequest;
          fromJSON(object: any): _244.QueryClientStateRequest;
          toJSON(message: _244.QueryClientStateRequest): unknown;
          fromPartial(object: { clientId?: string }): _244.QueryClientStateRequest;
        };
        QueryClientStateResponse: {
          encode(
            message: _244.QueryClientStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientStateResponse;
          fromJSON(object: any): _244.QueryClientStateResponse;
          toJSON(message: _244.QueryClientStateResponse): unknown;
          fromPartial(object: {
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _244.QueryClientStateResponse;
        };
        QueryClientStatesRequest: {
          encode(
            message: _244.QueryClientStatesRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientStatesRequest;
          fromJSON(object: any): _244.QueryClientStatesRequest;
          toJSON(message: _244.QueryClientStatesRequest): unknown;
          fromPartial(object: {
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _244.QueryClientStatesRequest;
        };
        QueryClientStatesResponse: {
          encode(
            message: _244.QueryClientStatesResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientStatesResponse;
          fromJSON(object: any): _244.QueryClientStatesResponse;
          toJSON(message: _244.QueryClientStatesResponse): unknown;
          fromPartial(object: {
            clientStates?: {
              clientId?: string;
              clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
          }): _244.QueryClientStatesResponse;
        };
        QueryConsensusStateRequest: {
          encode(
            message: _244.QueryConsensusStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryConsensusStateRequest;
          fromJSON(object: any): _244.QueryConsensusStateRequest;
          toJSON(message: _244.QueryConsensusStateRequest): unknown;
          fromPartial(object: {
            clientId?: string;
            revisionNumber?: any;
            revisionHeight?: any;
            latestHeight?: boolean;
          }): _244.QueryConsensusStateRequest;
        };
        QueryConsensusStateResponse: {
          encode(
            message: _244.QueryConsensusStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryConsensusStateResponse;
          fromJSON(object: any): _244.QueryConsensusStateResponse;
          toJSON(message: _244.QueryConsensusStateResponse): unknown;
          fromPartial(object: {
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _244.QueryConsensusStateResponse;
        };
        QueryConsensusStatesRequest: {
          encode(
            message: _244.QueryConsensusStatesRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryConsensusStatesRequest;
          fromJSON(object: any): _244.QueryConsensusStatesRequest;
          toJSON(message: _244.QueryConsensusStatesRequest): unknown;
          fromPartial(object: {
            clientId?: string;
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _244.QueryConsensusStatesRequest;
        };
        QueryConsensusStatesResponse: {
          encode(
            message: _244.QueryConsensusStatesResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryConsensusStatesResponse;
          fromJSON(object: any): _244.QueryConsensusStatesResponse;
          toJSON(message: _244.QueryConsensusStatesResponse): unknown;
          fromPartial(object: {
            consensusStates?: {
              height?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              consensusState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
          }): _244.QueryConsensusStatesResponse;
        };
        QueryClientStatusRequest: {
          encode(
            message: _244.QueryClientStatusRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientStatusRequest;
          fromJSON(object: any): _244.QueryClientStatusRequest;
          toJSON(message: _244.QueryClientStatusRequest): unknown;
          fromPartial(object: { clientId?: string }): _244.QueryClientStatusRequest;
        };
        QueryClientStatusResponse: {
          encode(
            message: _244.QueryClientStatusResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientStatusResponse;
          fromJSON(object: any): _244.QueryClientStatusResponse;
          toJSON(message: _244.QueryClientStatusResponse): unknown;
          fromPartial(object: { status?: string }): _244.QueryClientStatusResponse;
        };
        QueryClientParamsRequest: {
          encode(
            _: _244.QueryClientParamsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientParamsRequest;
          fromJSON(_: any): _244.QueryClientParamsRequest;
          toJSON(_: _244.QueryClientParamsRequest): unknown;
          fromPartial(_: {}): _244.QueryClientParamsRequest;
        };
        QueryClientParamsResponse: {
          encode(
            message: _244.QueryClientParamsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryClientParamsResponse;
          fromJSON(object: any): _244.QueryClientParamsResponse;
          toJSON(message: _244.QueryClientParamsResponse): unknown;
          fromPartial(object: {
            params?: {
              allowedClients?: string[];
            };
          }): _244.QueryClientParamsResponse;
        };
        QueryUpgradedClientStateRequest: {
          encode(
            _: _244.QueryUpgradedClientStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryUpgradedClientStateRequest;
          fromJSON(_: any): _244.QueryUpgradedClientStateRequest;
          toJSON(_: _244.QueryUpgradedClientStateRequest): unknown;
          fromPartial(_: {}): _244.QueryUpgradedClientStateRequest;
        };
        QueryUpgradedClientStateResponse: {
          encode(
            message: _244.QueryUpgradedClientStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryUpgradedClientStateResponse;
          fromJSON(object: any): _244.QueryUpgradedClientStateResponse;
          toJSON(message: _244.QueryUpgradedClientStateResponse): unknown;
          fromPartial(object: {
            upgradedClientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _244.QueryUpgradedClientStateResponse;
        };
        QueryUpgradedConsensusStateRequest: {
          encode(
            _: _244.QueryUpgradedConsensusStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryUpgradedConsensusStateRequest;
          fromJSON(_: any): _244.QueryUpgradedConsensusStateRequest;
          toJSON(_: _244.QueryUpgradedConsensusStateRequest): unknown;
          fromPartial(_: {}): _244.QueryUpgradedConsensusStateRequest;
        };
        QueryUpgradedConsensusStateResponse: {
          encode(
            message: _244.QueryUpgradedConsensusStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _244.QueryUpgradedConsensusStateResponse;
          fromJSON(object: any): _244.QueryUpgradedConsensusStateResponse;
          toJSON(message: _244.QueryUpgradedConsensusStateResponse): unknown;
          fromPartial(object: {
            upgradedConsensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _244.QueryUpgradedConsensusStateResponse;
        };
        GenesisState: {
          encode(
            message: _243.GenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.GenesisState;
          fromJSON(object: any): _243.GenesisState;
          toJSON(message: _243.GenesisState): unknown;
          fromPartial(object: {
            clients?: {
              clientId?: string;
              clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            }[];
            clientsConsensus?: {
              clientId?: string;
              consensusStates?: {
                height?: {
                  revisionNumber?: any;
                  revisionHeight?: any;
                };
                consensusState?: {
                  typeUrl?: string;
                  value?: Uint8Array;
                };
              }[];
            }[];
            clientsMetadata?: {
              clientId?: string;
              clientMetadata?: {
                key?: Uint8Array;
                value?: Uint8Array;
              }[];
            }[];
            params?: {
              allowedClients?: string[];
            };
            createLocalhost?: boolean;
            nextClientSequence?: any;
          }): _243.GenesisState;
        };
        GenesisMetadata: {
          encode(
            message: _243.GenesisMetadata,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.GenesisMetadata;
          fromJSON(object: any): _243.GenesisMetadata;
          toJSON(message: _243.GenesisMetadata): unknown;
          fromPartial(object: { key?: Uint8Array; value?: Uint8Array }): _243.GenesisMetadata;
        };
        IdentifiedGenesisMetadata: {
          encode(
            message: _243.IdentifiedGenesisMetadata,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _243.IdentifiedGenesisMetadata;
          fromJSON(object: any): _243.IdentifiedGenesisMetadata;
          toJSON(message: _243.IdentifiedGenesisMetadata): unknown;
          fromPartial(object: {
            clientId?: string;
            clientMetadata?: {
              key?: Uint8Array;
              value?: Uint8Array;
            }[];
          }): _243.IdentifiedGenesisMetadata;
        };
        IdentifiedClientState: {
          encode(
            message: _242.IdentifiedClientState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _242.IdentifiedClientState;
          fromJSON(object: any): _242.IdentifiedClientState;
          toJSON(message: _242.IdentifiedClientState): unknown;
          fromPartial(object: {
            clientId?: string;
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _242.IdentifiedClientState;
        };
        ConsensusStateWithHeight: {
          encode(
            message: _242.ConsensusStateWithHeight,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _242.ConsensusStateWithHeight;
          fromJSON(object: any): _242.ConsensusStateWithHeight;
          toJSON(message: _242.ConsensusStateWithHeight): unknown;
          fromPartial(object: {
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _242.ConsensusStateWithHeight;
        };
        ClientConsensusStates: {
          encode(
            message: _242.ClientConsensusStates,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _242.ClientConsensusStates;
          fromJSON(object: any): _242.ClientConsensusStates;
          toJSON(message: _242.ClientConsensusStates): unknown;
          fromPartial(object: {
            clientId?: string;
            consensusStates?: {
              height?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              consensusState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            }[];
          }): _242.ClientConsensusStates;
        };
        ClientUpdateProposal: {
          encode(
            message: _242.ClientUpdateProposal,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ClientUpdateProposal;
          fromJSON(object: any): _242.ClientUpdateProposal;
          toJSON(message: _242.ClientUpdateProposal): unknown;
          fromPartial(object: {
            title?: string;
            description?: string;
            subjectClientId?: string;
            substituteClientId?: string;
          }): _242.ClientUpdateProposal;
        };
        UpgradeProposal: {
          encode(
            message: _242.UpgradeProposal,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.UpgradeProposal;
          fromJSON(object: any): _242.UpgradeProposal;
          toJSON(message: _242.UpgradeProposal): unknown;
          fromPartial(object: {
            title?: string;
            description?: string;
            plan?: {
              name?: string;
              time?: Date;
              height?: any;
              info?: string;
              upgradedClientState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            };
            upgradedClientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _242.UpgradeProposal;
        };
        Height: {
          encode(message: _242.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Height;
          fromJSON(object: any): _242.Height;
          toJSON(message: _242.Height): unknown;
          fromPartial(object: { revisionNumber?: any; revisionHeight?: any }): _242.Height;
        };
        Params: {
          encode(message: _242.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Params;
          fromJSON(object: any): _242.Params;
          toJSON(message: _242.Params): unknown;
          fromPartial(object: { allowedClients?: string[] }): _242.Params;
        };
      };
    }
    namespace commitment {
      const v1: {
        MerkleRoot: {
          encode(message: _246.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MerkleRoot;
          fromJSON(object: any): _246.MerkleRoot;
          toJSON(message: _246.MerkleRoot): unknown;
          fromPartial(object: { hash?: Uint8Array }): _246.MerkleRoot;
        };
        MerklePrefix: {
          encode(
            message: _246.MerklePrefix,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MerklePrefix;
          fromJSON(object: any): _246.MerklePrefix;
          toJSON(message: _246.MerklePrefix): unknown;
          fromPartial(object: { keyPrefix?: Uint8Array }): _246.MerklePrefix;
        };
        MerklePath: {
          encode(message: _246.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MerklePath;
          fromJSON(object: any): _246.MerklePath;
          toJSON(message: _246.MerklePath): unknown;
          fromPartial(object: { keyPath?: string[] }): _246.MerklePath;
        };
        MerkleProof: {
          encode(
            message: _246.MerkleProof,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MerkleProof;
          fromJSON(object: any): _246.MerkleProof;
          toJSON(message: _246.MerkleProof): unknown;
          fromPartial(object: {
            proofs?: {
              exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                  hash?: import("../confio/proofs").HashOp;
                  prehashKey?: import("../confio/proofs").HashOp;
                  prehashValue?: import("../confio/proofs").HashOp;
                  length?: import("../confio/proofs").LengthOp;
                  prefix?: Uint8Array;
                };
                path?: {
                  hash?: import("../confio/proofs").HashOp;
                  prefix?: Uint8Array;
                  suffix?: Uint8Array;
                }[];
              };
              nonexist?: {
                key?: Uint8Array;
                left?: {
                  key?: Uint8Array;
                  value?: Uint8Array;
                  leaf?: {
                    hash?: import("../confio/proofs").HashOp;
                    prehashKey?: import("../confio/proofs").HashOp;
                    prehashValue?: import("../confio/proofs").HashOp;
                    length?: import("../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                  };
                  path?: {
                    hash?: import("../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                  }[];
                };
                right?: {
                  key?: Uint8Array;
                  value?: Uint8Array;
                  leaf?: {
                    hash?: import("../confio/proofs").HashOp;
                    prehashKey?: import("../confio/proofs").HashOp;
                    prehashValue?: import("../confio/proofs").HashOp;
                    length?: import("../confio/proofs").LengthOp;
                    prefix?: Uint8Array;
                  };
                  path?: {
                    hash?: import("../confio/proofs").HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                  }[];
                };
              };
              batch?: {
                entries?: {
                  exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                      hash?: import("../confio/proofs").HashOp;
                      prehashKey?: import("../confio/proofs").HashOp;
                      prehashValue?: import("../confio/proofs").HashOp;
                      length?: import("../confio/proofs").LengthOp;
                      prefix?: Uint8Array;
                    };
                    path?: {
                      hash?: import("../confio/proofs").HashOp;
                      prefix?: Uint8Array;
                      suffix?: Uint8Array;
                    }[];
                  };
                  nonexist?: {
                    key?: Uint8Array;
                    left?: {
                      key?: Uint8Array;
                      value?: Uint8Array;
                      leaf?: {
                        hash?: import("../confio/proofs").HashOp;
                        prehashKey?: import("../confio/proofs").HashOp;
                        prehashValue?: import("../confio/proofs").HashOp;
                        length?: import("../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                      };
                      path?: {
                        hash?: import("../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                      }[];
                    };
                    right?: {
                      key?: Uint8Array;
                      value?: Uint8Array;
                      leaf?: {
                        hash?: import("../confio/proofs").HashOp;
                        prehashKey?: import("../confio/proofs").HashOp;
                        prehashValue?: import("../confio/proofs").HashOp;
                        length?: import("../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                      };
                      path?: {
                        hash?: import("../confio/proofs").HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                      }[];
                    };
                  };
                }[];
              };
              compressed?: {
                entries?: {
                  exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                      hash?: import("../confio/proofs").HashOp;
                      prehashKey?: import("../confio/proofs").HashOp;
                      prehashValue?: import("../confio/proofs").HashOp;
                      length?: import("../confio/proofs").LengthOp;
                      prefix?: Uint8Array;
                    };
                    path?: number[];
                  };
                  nonexist?: {
                    key?: Uint8Array;
                    left?: {
                      key?: Uint8Array;
                      value?: Uint8Array;
                      leaf?: {
                        hash?: import("../confio/proofs").HashOp;
                        prehashKey?: import("../confio/proofs").HashOp;
                        prehashValue?: import("../confio/proofs").HashOp;
                        length?: import("../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                      };
                      path?: number[];
                    };
                    right?: {
                      key?: Uint8Array;
                      value?: Uint8Array;
                      leaf?: {
                        hash?: import("../confio/proofs").HashOp;
                        prehashKey?: import("../confio/proofs").HashOp;
                        prehashValue?: import("../confio/proofs").HashOp;
                        length?: import("../confio/proofs").LengthOp;
                        prefix?: Uint8Array;
                      };
                      path?: number[];
                    };
                  };
                }[];
                lookupInners?: {
                  hash?: import("../confio/proofs").HashOp;
                  prefix?: Uint8Array;
                  suffix?: Uint8Array;
                }[];
              };
            }[];
          }): _246.MerkleProof;
        };
      };
    }
    namespace connection {
      const v1: {
        MsgClientImpl: typeof _315.MsgClientImpl;
        QueryClientImpl: typeof _311.QueryClientImpl;
        MsgConnectionOpenInit: {
          encode(
            message: _250.MsgConnectionOpenInit,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _250.MsgConnectionOpenInit;
          fromJSON(object: any): _250.MsgConnectionOpenInit;
          toJSON(message: _250.MsgConnectionOpenInit): unknown;
          fromPartial(object: {
            clientId?: string;
            counterparty?: {
              clientId?: string;
              connectionId?: string;
              prefix?: {
                keyPrefix?: Uint8Array;
              };
            };
            version?: {
              identifier?: string;
              features?: string[];
            };
            delayPeriod?: any;
            signer?: string;
          }): _250.MsgConnectionOpenInit;
        };
        MsgConnectionOpenInitResponse: {
          encode(
            _: _250.MsgConnectionOpenInitResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _250.MsgConnectionOpenInitResponse;
          fromJSON(_: any): _250.MsgConnectionOpenInitResponse;
          toJSON(_: _250.MsgConnectionOpenInitResponse): unknown;
          fromPartial(_: {}): _250.MsgConnectionOpenInitResponse;
        };
        MsgConnectionOpenTry: {
          encode(
            message: _250.MsgConnectionOpenTry,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgConnectionOpenTry;
          fromJSON(object: any): _250.MsgConnectionOpenTry;
          toJSON(message: _250.MsgConnectionOpenTry): unknown;
          fromPartial(object: {
            clientId?: string;
            previousConnectionId?: string;
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            counterparty?: {
              clientId?: string;
              connectionId?: string;
              prefix?: {
                keyPrefix?: Uint8Array;
              };
            };
            delayPeriod?: any;
            counterpartyVersions?: {
              identifier?: string;
              features?: string[];
            }[];
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            proofInit?: Uint8Array;
            proofClient?: Uint8Array;
            proofConsensus?: Uint8Array;
            consensusHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _250.MsgConnectionOpenTry;
        };
        MsgConnectionOpenTryResponse: {
          encode(
            _: _250.MsgConnectionOpenTryResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _250.MsgConnectionOpenTryResponse;
          fromJSON(_: any): _250.MsgConnectionOpenTryResponse;
          toJSON(_: _250.MsgConnectionOpenTryResponse): unknown;
          fromPartial(_: {}): _250.MsgConnectionOpenTryResponse;
        };
        MsgConnectionOpenAck: {
          encode(
            message: _250.MsgConnectionOpenAck,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgConnectionOpenAck;
          fromJSON(object: any): _250.MsgConnectionOpenAck;
          toJSON(message: _250.MsgConnectionOpenAck): unknown;
          fromPartial(object: {
            connectionId?: string;
            counterpartyConnectionId?: string;
            version?: {
              identifier?: string;
              features?: string[];
            };
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            proofTry?: Uint8Array;
            proofClient?: Uint8Array;
            proofConsensus?: Uint8Array;
            consensusHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _250.MsgConnectionOpenAck;
        };
        MsgConnectionOpenAckResponse: {
          encode(
            _: _250.MsgConnectionOpenAckResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _250.MsgConnectionOpenAckResponse;
          fromJSON(_: any): _250.MsgConnectionOpenAckResponse;
          toJSON(_: _250.MsgConnectionOpenAckResponse): unknown;
          fromPartial(_: {}): _250.MsgConnectionOpenAckResponse;
        };
        MsgConnectionOpenConfirm: {
          encode(
            message: _250.MsgConnectionOpenConfirm,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _250.MsgConnectionOpenConfirm;
          fromJSON(object: any): _250.MsgConnectionOpenConfirm;
          toJSON(message: _250.MsgConnectionOpenConfirm): unknown;
          fromPartial(object: {
            connectionId?: string;
            proofAck?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            signer?: string;
          }): _250.MsgConnectionOpenConfirm;
        };
        MsgConnectionOpenConfirmResponse: {
          encode(
            _: _250.MsgConnectionOpenConfirmResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _250.MsgConnectionOpenConfirmResponse;
          fromJSON(_: any): _250.MsgConnectionOpenConfirmResponse;
          toJSON(_: _250.MsgConnectionOpenConfirmResponse): unknown;
          fromPartial(_: {}): _250.MsgConnectionOpenConfirmResponse;
        };
        QueryConnectionRequest: {
          encode(
            message: _249.QueryConnectionRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionRequest;
          fromJSON(object: any): _249.QueryConnectionRequest;
          toJSON(message: _249.QueryConnectionRequest): unknown;
          fromPartial(object: { connectionId?: string }): _249.QueryConnectionRequest;
        };
        QueryConnectionResponse: {
          encode(
            message: _249.QueryConnectionResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionResponse;
          fromJSON(object: any): _249.QueryConnectionResponse;
          toJSON(message: _249.QueryConnectionResponse): unknown;
          fromPartial(object: {
            connection?: {
              clientId?: string;
              versions?: {
                identifier?: string;
                features?: string[];
              }[];
              state?: _247.State;
              counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                  keyPrefix?: Uint8Array;
                };
              };
              delayPeriod?: any;
            };
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _249.QueryConnectionResponse;
        };
        QueryConnectionsRequest: {
          encode(
            message: _249.QueryConnectionsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionsRequest;
          fromJSON(object: any): _249.QueryConnectionsRequest;
          toJSON(message: _249.QueryConnectionsRequest): unknown;
          fromPartial(object: {
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _249.QueryConnectionsRequest;
        };
        QueryConnectionsResponse: {
          encode(
            message: _249.QueryConnectionsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionsResponse;
          fromJSON(object: any): _249.QueryConnectionsResponse;
          toJSON(message: _249.QueryConnectionsResponse): unknown;
          fromPartial(object: {
            connections?: {
              id?: string;
              clientId?: string;
              versions?: {
                identifier?: string;
                features?: string[];
              }[];
              state?: _247.State;
              counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                  keyPrefix?: Uint8Array;
                };
              };
              delayPeriod?: any;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _249.QueryConnectionsResponse;
        };
        QueryClientConnectionsRequest: {
          encode(
            message: _249.QueryClientConnectionsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryClientConnectionsRequest;
          fromJSON(object: any): _249.QueryClientConnectionsRequest;
          toJSON(message: _249.QueryClientConnectionsRequest): unknown;
          fromPartial(object: { clientId?: string }): _249.QueryClientConnectionsRequest;
        };
        QueryClientConnectionsResponse: {
          encode(
            message: _249.QueryClientConnectionsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryClientConnectionsResponse;
          fromJSON(object: any): _249.QueryClientConnectionsResponse;
          toJSON(message: _249.QueryClientConnectionsResponse): unknown;
          fromPartial(object: {
            connectionPaths?: string[];
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _249.QueryClientConnectionsResponse;
        };
        QueryConnectionClientStateRequest: {
          encode(
            message: _249.QueryConnectionClientStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionClientStateRequest;
          fromJSON(object: any): _249.QueryConnectionClientStateRequest;
          toJSON(message: _249.QueryConnectionClientStateRequest): unknown;
          fromPartial(object: { connectionId?: string }): _249.QueryConnectionClientStateRequest;
        };
        QueryConnectionClientStateResponse: {
          encode(
            message: _249.QueryConnectionClientStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionClientStateResponse;
          fromJSON(object: any): _249.QueryConnectionClientStateResponse;
          toJSON(message: _249.QueryConnectionClientStateResponse): unknown;
          fromPartial(object: {
            identifiedClientState?: {
              clientId?: string;
              clientState?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
            };
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _249.QueryConnectionClientStateResponse;
        };
        QueryConnectionConsensusStateRequest: {
          encode(
            message: _249.QueryConnectionConsensusStateRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionConsensusStateRequest;
          fromJSON(object: any): _249.QueryConnectionConsensusStateRequest;
          toJSON(message: _249.QueryConnectionConsensusStateRequest): unknown;
          fromPartial(object: {
            connectionId?: string;
            revisionNumber?: any;
            revisionHeight?: any;
          }): _249.QueryConnectionConsensusStateRequest;
        };
        QueryConnectionConsensusStateResponse: {
          encode(
            message: _249.QueryConnectionConsensusStateResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _249.QueryConnectionConsensusStateResponse;
          fromJSON(object: any): _249.QueryConnectionConsensusStateResponse;
          toJSON(message: _249.QueryConnectionConsensusStateResponse): unknown;
          fromPartial(object: {
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            clientId?: string;
            proof?: Uint8Array;
            proofHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _249.QueryConnectionConsensusStateResponse;
        };
        GenesisState: {
          encode(
            message: _248.GenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.GenesisState;
          fromJSON(object: any): _248.GenesisState;
          toJSON(message: _248.GenesisState): unknown;
          fromPartial(object: {
            connections?: {
              id?: string;
              clientId?: string;
              versions?: {
                identifier?: string;
                features?: string[];
              }[];
              state?: _247.State;
              counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                  keyPrefix?: Uint8Array;
                };
              };
              delayPeriod?: any;
            }[];
            clientConnectionPaths?: {
              clientId?: string;
              paths?: string[];
            }[];
            nextConnectionSequence?: any;
            params?: {
              maxExpectedTimePerBlock?: any;
            };
          }): _248.GenesisState;
        };
        stateFromJSON(object: any): _247.State;
        stateToJSON(object: _247.State): string;
        State: typeof _247.State;
        ConnectionEnd: {
          encode(
            message: _247.ConnectionEnd,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.ConnectionEnd;
          fromJSON(object: any): _247.ConnectionEnd;
          toJSON(message: _247.ConnectionEnd): unknown;
          fromPartial(object: {
            clientId?: string;
            versions?: {
              identifier?: string;
              features?: string[];
            }[];
            state?: _247.State;
            counterparty?: {
              clientId?: string;
              connectionId?: string;
              prefix?: {
                keyPrefix?: Uint8Array;
              };
            };
            delayPeriod?: any;
          }): _247.ConnectionEnd;
        };
        IdentifiedConnection: {
          encode(
            message: _247.IdentifiedConnection,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.IdentifiedConnection;
          fromJSON(object: any): _247.IdentifiedConnection;
          toJSON(message: _247.IdentifiedConnection): unknown;
          fromPartial(object: {
            id?: string;
            clientId?: string;
            versions?: {
              identifier?: string;
              features?: string[];
            }[];
            state?: _247.State;
            counterparty?: {
              clientId?: string;
              connectionId?: string;
              prefix?: {
                keyPrefix?: Uint8Array;
              };
            };
            delayPeriod?: any;
          }): _247.IdentifiedConnection;
        };
        Counterparty: {
          encode(
            message: _247.Counterparty,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.Counterparty;
          fromJSON(object: any): _247.Counterparty;
          toJSON(message: _247.Counterparty): unknown;
          fromPartial(object: {
            clientId?: string;
            connectionId?: string;
            prefix?: {
              keyPrefix?: Uint8Array;
            };
          }): _247.Counterparty;
        };
        ClientPaths: {
          encode(
            message: _247.ClientPaths,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.ClientPaths;
          fromJSON(object: any): _247.ClientPaths;
          toJSON(message: _247.ClientPaths): unknown;
          fromPartial(object: { paths?: string[] }): _247.ClientPaths;
        };
        ConnectionPaths: {
          encode(
            message: _247.ConnectionPaths,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.ConnectionPaths;
          fromJSON(object: any): _247.ConnectionPaths;
          toJSON(message: _247.ConnectionPaths): unknown;
          fromPartial(object: { clientId?: string; paths?: string[] }): _247.ConnectionPaths;
        };
        Version: {
          encode(message: _247.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.Version;
          fromJSON(object: any): _247.Version;
          toJSON(message: _247.Version): unknown;
          fromPartial(object: { identifier?: string; features?: string[] }): _247.Version;
        };
        Params: {
          encode(message: _247.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.Params;
          fromJSON(object: any): _247.Params;
          toJSON(message: _247.Params): unknown;
          fromPartial(object: { maxExpectedTimePerBlock?: any }): _247.Params;
        };
      };
    }
    namespace types {
      const v1: {
        GenesisState: {
          encode(
            message: _251.GenesisState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.GenesisState;
          fromJSON(object: any): _251.GenesisState;
          toJSON(message: _251.GenesisState): unknown;
          fromPartial(object: {
            clientGenesis?: {
              clients?: {
                clientId?: string;
                clientState?: {
                  typeUrl?: string;
                  value?: Uint8Array;
                };
              }[];
              clientsConsensus?: {
                clientId?: string;
                consensusStates?: {
                  height?: {
                    revisionNumber?: any;
                    revisionHeight?: any;
                  };
                  consensusState?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                  };
                }[];
              }[];
              clientsMetadata?: {
                clientId?: string;
                clientMetadata?: {
                  key?: Uint8Array;
                  value?: Uint8Array;
                }[];
              }[];
              params?: {
                allowedClients?: string[];
              };
              createLocalhost?: boolean;
              nextClientSequence?: any;
            };
            connectionGenesis?: {
              connections?: {
                id?: string;
                clientId?: string;
                versions?: {
                  identifier?: string;
                  features?: string[];
                }[];
                state?: _247.State;
                counterparty?: {
                  clientId?: string;
                  connectionId?: string;
                  prefix?: {
                    keyPrefix?: Uint8Array;
                  };
                };
                delayPeriod?: any;
              }[];
              clientConnectionPaths?: {
                clientId?: string;
                paths?: string[];
              }[];
              nextConnectionSequence?: any;
              params?: {
                maxExpectedTimePerBlock?: any;
              };
            };
            channelGenesis?: {
              channels?: {
                state?: _238.State;
                ordering?: _238.Order;
                counterparty?: {
                  portId?: string;
                  channelId?: string;
                };
                connectionHops?: string[];
                version?: string;
                portId?: string;
                channelId?: string;
              }[];
              acknowledgements?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
              }[];
              commitments?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
              }[];
              receipts?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
                data?: Uint8Array;
              }[];
              sendSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
              }[];
              recvSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
              }[];
              ackSequences?: {
                portId?: string;
                channelId?: string;
                sequence?: any;
              }[];
              nextChannelSequence?: any;
            };
          }): _251.GenesisState;
        };
      };
    }
  }
  namespace lightclients {
    namespace localhost {
      const v1: {
        ClientState: {
          encode(
            message: _252.ClientState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.ClientState;
          fromJSON(object: any): _252.ClientState;
          toJSON(message: _252.ClientState): unknown;
          fromPartial(object: {
            chainId?: string;
            height?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
          }): _252.ClientState;
        };
      };
    }
    namespace solomachine {
      const v1: {
        dataTypeFromJSON(object: any): _253.DataType;
        dataTypeToJSON(object: _253.DataType): string;
        DataType: typeof _253.DataType;
        ClientState: {
          encode(
            message: _253.ClientState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ClientState;
          fromJSON(object: any): _253.ClientState;
          toJSON(message: _253.ClientState): unknown;
          fromPartial(object: {
            sequence?: any;
            frozenSequence?: any;
            consensusState?: {
              publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              diversifier?: string;
              timestamp?: any;
            };
            allowUpdateAfterProposal?: boolean;
          }): _253.ClientState;
        };
        ConsensusState: {
          encode(
            message: _253.ConsensusState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ConsensusState;
          fromJSON(object: any): _253.ConsensusState;
          toJSON(message: _253.ConsensusState): unknown;
          fromPartial(object: {
            publicKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            diversifier?: string;
            timestamp?: any;
          }): _253.ConsensusState;
        };
        Header: {
          encode(message: _253.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Header;
          fromJSON(object: any): _253.Header;
          toJSON(message: _253.Header): unknown;
          fromPartial(object: {
            sequence?: any;
            timestamp?: any;
            signature?: Uint8Array;
            newPublicKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            newDiversifier?: string;
          }): _253.Header;
        };
        Misbehaviour: {
          encode(
            message: _253.Misbehaviour,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Misbehaviour;
          fromJSON(object: any): _253.Misbehaviour;
          toJSON(message: _253.Misbehaviour): unknown;
          fromPartial(object: {
            clientId?: string;
            sequence?: any;
            signatureOne?: {
              signature?: Uint8Array;
              dataType?: _253.DataType;
              data?: Uint8Array;
              timestamp?: any;
            };
            signatureTwo?: {
              signature?: Uint8Array;
              dataType?: _253.DataType;
              data?: Uint8Array;
              timestamp?: any;
            };
          }): _253.Misbehaviour;
        };
        SignatureAndData: {
          encode(
            message: _253.SignatureAndData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.SignatureAndData;
          fromJSON(object: any): _253.SignatureAndData;
          toJSON(message: _253.SignatureAndData): unknown;
          fromPartial(object: {
            signature?: Uint8Array;
            dataType?: _253.DataType;
            data?: Uint8Array;
            timestamp?: any;
          }): _253.SignatureAndData;
        };
        TimestampedSignatureData: {
          encode(
            message: _253.TimestampedSignatureData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _253.TimestampedSignatureData;
          fromJSON(object: any): _253.TimestampedSignatureData;
          toJSON(message: _253.TimestampedSignatureData): unknown;
          fromPartial(object: { signatureData?: Uint8Array; timestamp?: any }): _253.TimestampedSignatureData;
        };
        SignBytes: {
          encode(message: _253.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.SignBytes;
          fromJSON(object: any): _253.SignBytes;
          toJSON(message: _253.SignBytes): unknown;
          fromPartial(object: {
            sequence?: any;
            timestamp?: any;
            diversifier?: string;
            dataType?: _253.DataType;
            data?: Uint8Array;
          }): _253.SignBytes;
        };
        HeaderData: {
          encode(message: _253.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.HeaderData;
          fromJSON(object: any): _253.HeaderData;
          toJSON(message: _253.HeaderData): unknown;
          fromPartial(object: {
            newPubKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            newDiversifier?: string;
          }): _253.HeaderData;
        };
        ClientStateData: {
          encode(
            message: _253.ClientStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ClientStateData;
          fromJSON(object: any): _253.ClientStateData;
          toJSON(message: _253.ClientStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _253.ClientStateData;
        };
        ConsensusStateData: {
          encode(
            message: _253.ConsensusStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ConsensusStateData;
          fromJSON(object: any): _253.ConsensusStateData;
          toJSON(message: _253.ConsensusStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _253.ConsensusStateData;
        };
        ConnectionStateData: {
          encode(
            message: _253.ConnectionStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ConnectionStateData;
          fromJSON(object: any): _253.ConnectionStateData;
          toJSON(message: _253.ConnectionStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            connection?: {
              clientId?: string;
              versions?: {
                identifier?: string;
                features?: string[];
              }[];
              state?: _247.State;
              counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                  keyPrefix?: Uint8Array;
                };
              };
              delayPeriod?: any;
            };
          }): _253.ConnectionStateData;
        };
        ChannelStateData: {
          encode(
            message: _253.ChannelStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ChannelStateData;
          fromJSON(object: any): _253.ChannelStateData;
          toJSON(message: _253.ChannelStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            channel?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
            };
          }): _253.ChannelStateData;
        };
        PacketCommitmentData: {
          encode(
            message: _253.PacketCommitmentData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.PacketCommitmentData;
          fromJSON(object: any): _253.PacketCommitmentData;
          toJSON(message: _253.PacketCommitmentData): unknown;
          fromPartial(object: { path?: Uint8Array; commitment?: Uint8Array }): _253.PacketCommitmentData;
        };
        PacketAcknowledgementData: {
          encode(
            message: _253.PacketAcknowledgementData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _253.PacketAcknowledgementData;
          fromJSON(object: any): _253.PacketAcknowledgementData;
          toJSON(message: _253.PacketAcknowledgementData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            acknowledgement?: Uint8Array;
          }): _253.PacketAcknowledgementData;
        };
        PacketReceiptAbsenceData: {
          encode(
            message: _253.PacketReceiptAbsenceData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _253.PacketReceiptAbsenceData;
          fromJSON(object: any): _253.PacketReceiptAbsenceData;
          toJSON(message: _253.PacketReceiptAbsenceData): unknown;
          fromPartial(object: { path?: Uint8Array }): _253.PacketReceiptAbsenceData;
        };
        NextSequenceRecvData: {
          encode(
            message: _253.NextSequenceRecvData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.NextSequenceRecvData;
          fromJSON(object: any): _253.NextSequenceRecvData;
          toJSON(message: _253.NextSequenceRecvData): unknown;
          fromPartial(object: { path?: Uint8Array; nextSeqRecv?: any }): _253.NextSequenceRecvData;
        };
      };
      const v2: {
        dataTypeFromJSON(object: any): _254.DataType;
        dataTypeToJSON(object: _254.DataType): string;
        DataType: typeof _254.DataType;
        ClientState: {
          encode(
            message: _254.ClientState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ClientState;
          fromJSON(object: any): _254.ClientState;
          toJSON(message: _254.ClientState): unknown;
          fromPartial(object: {
            sequence?: any;
            isFrozen?: boolean;
            consensusState?: {
              publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              diversifier?: string;
              timestamp?: any;
            };
            allowUpdateAfterProposal?: boolean;
          }): _254.ClientState;
        };
        ConsensusState: {
          encode(
            message: _254.ConsensusState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ConsensusState;
          fromJSON(object: any): _254.ConsensusState;
          toJSON(message: _254.ConsensusState): unknown;
          fromPartial(object: {
            publicKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            diversifier?: string;
            timestamp?: any;
          }): _254.ConsensusState;
        };
        Header: {
          encode(message: _254.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.Header;
          fromJSON(object: any): _254.Header;
          toJSON(message: _254.Header): unknown;
          fromPartial(object: {
            sequence?: any;
            timestamp?: any;
            signature?: Uint8Array;
            newPublicKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            newDiversifier?: string;
          }): _254.Header;
        };
        Misbehaviour: {
          encode(
            message: _254.Misbehaviour,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.Misbehaviour;
          fromJSON(object: any): _254.Misbehaviour;
          toJSON(message: _254.Misbehaviour): unknown;
          fromPartial(object: {
            clientId?: string;
            sequence?: any;
            signatureOne?: {
              signature?: Uint8Array;
              dataType?: _254.DataType;
              data?: Uint8Array;
              timestamp?: any;
            };
            signatureTwo?: {
              signature?: Uint8Array;
              dataType?: _254.DataType;
              data?: Uint8Array;
              timestamp?: any;
            };
          }): _254.Misbehaviour;
        };
        SignatureAndData: {
          encode(
            message: _254.SignatureAndData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.SignatureAndData;
          fromJSON(object: any): _254.SignatureAndData;
          toJSON(message: _254.SignatureAndData): unknown;
          fromPartial(object: {
            signature?: Uint8Array;
            dataType?: _254.DataType;
            data?: Uint8Array;
            timestamp?: any;
          }): _254.SignatureAndData;
        };
        TimestampedSignatureData: {
          encode(
            message: _254.TimestampedSignatureData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _254.TimestampedSignatureData;
          fromJSON(object: any): _254.TimestampedSignatureData;
          toJSON(message: _254.TimestampedSignatureData): unknown;
          fromPartial(object: { signatureData?: Uint8Array; timestamp?: any }): _254.TimestampedSignatureData;
        };
        SignBytes: {
          encode(message: _254.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.SignBytes;
          fromJSON(object: any): _254.SignBytes;
          toJSON(message: _254.SignBytes): unknown;
          fromPartial(object: {
            sequence?: any;
            timestamp?: any;
            diversifier?: string;
            dataType?: _254.DataType;
            data?: Uint8Array;
          }): _254.SignBytes;
        };
        HeaderData: {
          encode(message: _254.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.HeaderData;
          fromJSON(object: any): _254.HeaderData;
          toJSON(message: _254.HeaderData): unknown;
          fromPartial(object: {
            newPubKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            newDiversifier?: string;
          }): _254.HeaderData;
        };
        ClientStateData: {
          encode(
            message: _254.ClientStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ClientStateData;
          fromJSON(object: any): _254.ClientStateData;
          toJSON(message: _254.ClientStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            clientState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _254.ClientStateData;
        };
        ConsensusStateData: {
          encode(
            message: _254.ConsensusStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ConsensusStateData;
          fromJSON(object: any): _254.ConsensusStateData;
          toJSON(message: _254.ConsensusStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            consensusState?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }): _254.ConsensusStateData;
        };
        ConnectionStateData: {
          encode(
            message: _254.ConnectionStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ConnectionStateData;
          fromJSON(object: any): _254.ConnectionStateData;
          toJSON(message: _254.ConnectionStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            connection?: {
              clientId?: string;
              versions?: {
                identifier?: string;
                features?: string[];
              }[];
              state?: _247.State;
              counterparty?: {
                clientId?: string;
                connectionId?: string;
                prefix?: {
                  keyPrefix?: Uint8Array;
                };
              };
              delayPeriod?: any;
            };
          }): _254.ConnectionStateData;
        };
        ChannelStateData: {
          encode(
            message: _254.ChannelStateData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.ChannelStateData;
          fromJSON(object: any): _254.ChannelStateData;
          toJSON(message: _254.ChannelStateData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            channel?: {
              state?: _238.State;
              ordering?: _238.Order;
              counterparty?: {
                portId?: string;
                channelId?: string;
              };
              connectionHops?: string[];
              version?: string;
            };
          }): _254.ChannelStateData;
        };
        PacketCommitmentData: {
          encode(
            message: _254.PacketCommitmentData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.PacketCommitmentData;
          fromJSON(object: any): _254.PacketCommitmentData;
          toJSON(message: _254.PacketCommitmentData): unknown;
          fromPartial(object: { path?: Uint8Array; commitment?: Uint8Array }): _254.PacketCommitmentData;
        };
        PacketAcknowledgementData: {
          encode(
            message: _254.PacketAcknowledgementData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _254.PacketAcknowledgementData;
          fromJSON(object: any): _254.PacketAcknowledgementData;
          toJSON(message: _254.PacketAcknowledgementData): unknown;
          fromPartial(object: {
            path?: Uint8Array;
            acknowledgement?: Uint8Array;
          }): _254.PacketAcknowledgementData;
        };
        PacketReceiptAbsenceData: {
          encode(
            message: _254.PacketReceiptAbsenceData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _254.PacketReceiptAbsenceData;
          fromJSON(object: any): _254.PacketReceiptAbsenceData;
          toJSON(message: _254.PacketReceiptAbsenceData): unknown;
          fromPartial(object: { path?: Uint8Array }): _254.PacketReceiptAbsenceData;
        };
        NextSequenceRecvData: {
          encode(
            message: _254.NextSequenceRecvData,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.NextSequenceRecvData;
          fromJSON(object: any): _254.NextSequenceRecvData;
          toJSON(message: _254.NextSequenceRecvData): unknown;
          fromPartial(object: { path?: Uint8Array; nextSeqRecv?: any }): _254.NextSequenceRecvData;
        };
      };
    }
    namespace tendermint {
      const v1: {
        ClientState: {
          encode(
            message: _255.ClientState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ClientState;
          fromJSON(object: any): _255.ClientState;
          toJSON(message: _255.ClientState): unknown;
          fromPartial(object: {
            chainId?: string;
            trustLevel?: {
              numerator?: any;
              denominator?: any;
            };
            trustingPeriod?: {
              seconds?: any;
              nanos?: number;
            };
            unbondingPeriod?: {
              seconds?: any;
              nanos?: number;
            };
            maxClockDrift?: {
              seconds?: any;
              nanos?: number;
            };
            frozenHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            latestHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            proofSpecs?: {
              leafSpec?: {
                hash?: import("../confio/proofs").HashOp;
                prehashKey?: import("../confio/proofs").HashOp;
                prehashValue?: import("../confio/proofs").HashOp;
                length?: import("../confio/proofs").LengthOp;
                prefix?: Uint8Array;
              };
              innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../confio/proofs").HashOp;
              };
              maxDepth?: number;
              minDepth?: number;
            }[];
            upgradePath?: string[];
            allowUpdateAfterExpiry?: boolean;
            allowUpdateAfterMisbehaviour?: boolean;
          }): _255.ClientState;
        };
        ConsensusState: {
          encode(
            message: _255.ConsensusState,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ConsensusState;
          fromJSON(object: any): _255.ConsensusState;
          toJSON(message: _255.ConsensusState): unknown;
          fromPartial(object: {
            timestamp?: Date;
            root?: {
              hash?: Uint8Array;
            };
            nextValidatorsHash?: Uint8Array;
          }): _255.ConsensusState;
        };
        Misbehaviour: {
          encode(
            message: _255.Misbehaviour,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Misbehaviour;
          fromJSON(object: any): _255.Misbehaviour;
          toJSON(message: _255.Misbehaviour): unknown;
          fromPartial(object: {
            clientId?: string;
            header_1?: {
              signedHeader?: {
                header?: {
                  version?: {
                    block?: any;
                    app?: any;
                  };
                  chainId?: string;
                  height?: any;
                  time?: Date;
                  lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                      total?: number;
                      hash?: Uint8Array;
                    };
                  };
                  lastCommitHash?: Uint8Array;
                  dataHash?: Uint8Array;
                  validatorsHash?: Uint8Array;
                  nextValidatorsHash?: Uint8Array;
                  consensusHash?: Uint8Array;
                  appHash?: Uint8Array;
                  lastResultsHash?: Uint8Array;
                  evidenceHash?: Uint8Array;
                  proposerAddress?: Uint8Array;
                };
                commit?: {
                  height?: any;
                  round?: number;
                  blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                      total?: number;
                      hash?: Uint8Array;
                    };
                  };
                  signatures?: {
                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                  }[];
                };
              };
              validatorSet?: {
                validators?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                }[];
                proposer?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                };
                totalVotingPower?: any;
              };
              trustedHeight?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              trustedValidators?: {
                validators?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                }[];
                proposer?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                };
                totalVotingPower?: any;
              };
            };
            header_2?: {
              signedHeader?: {
                header?: {
                  version?: {
                    block?: any;
                    app?: any;
                  };
                  chainId?: string;
                  height?: any;
                  time?: Date;
                  lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                      total?: number;
                      hash?: Uint8Array;
                    };
                  };
                  lastCommitHash?: Uint8Array;
                  dataHash?: Uint8Array;
                  validatorsHash?: Uint8Array;
                  nextValidatorsHash?: Uint8Array;
                  consensusHash?: Uint8Array;
                  appHash?: Uint8Array;
                  lastResultsHash?: Uint8Array;
                  evidenceHash?: Uint8Array;
                  proposerAddress?: Uint8Array;
                };
                commit?: {
                  height?: any;
                  round?: number;
                  blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                      total?: number;
                      hash?: Uint8Array;
                    };
                  };
                  signatures?: {
                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                  }[];
                };
              };
              validatorSet?: {
                validators?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                }[];
                proposer?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                };
                totalVotingPower?: any;
              };
              trustedHeight?: {
                revisionNumber?: any;
                revisionHeight?: any;
              };
              trustedValidators?: {
                validators?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                }[];
                proposer?: {
                  address?: Uint8Array;
                  pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                  };
                  votingPower?: any;
                  proposerPriority?: any;
                };
                totalVotingPower?: any;
              };
            };
          }): _255.Misbehaviour;
        };
        Header: {
          encode(message: _255.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Header;
          fromJSON(object: any): _255.Header;
          toJSON(message: _255.Header): unknown;
          fromPartial(object: {
            signedHeader?: {
              header?: {
                version?: {
                  block?: any;
                  app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                  hash?: Uint8Array;
                  partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                  };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
              };
              commit?: {
                height?: any;
                round?: number;
                blockId?: {
                  hash?: Uint8Array;
                  partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                  };
                };
                signatures?: {
                  blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                  validatorAddress?: Uint8Array;
                  timestamp?: Date;
                  signature?: Uint8Array;
                }[];
              };
            };
            validatorSet?: {
              validators?: {
                address?: Uint8Array;
                pubKey?: {
                  ed25519?: Uint8Array;
                  secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
              }[];
              proposer?: {
                address?: Uint8Array;
                pubKey?: {
                  ed25519?: Uint8Array;
                  secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
              };
              totalVotingPower?: any;
            };
            trustedHeight?: {
              revisionNumber?: any;
              revisionHeight?: any;
            };
            trustedValidators?: {
              validators?: {
                address?: Uint8Array;
                pubKey?: {
                  ed25519?: Uint8Array;
                  secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
              }[];
              proposer?: {
                address?: Uint8Array;
                pubKey?: {
                  ed25519?: Uint8Array;
                  secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
              };
              totalVotingPower?: any;
            };
          }): _255.Header;
        };
        Fraction: {
          encode(message: _255.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Fraction;
          fromJSON(object: any): _255.Fraction;
          toJSON(message: _255.Fraction): unknown;
          fromPartial(object: { numerator?: any; denominator?: any }): _255.Fraction;
        };
      };
    }
  }
  const ClientFactory: {
    createRPCMsgClient: ({ rpc }: { rpc: import("@osmonauts/helpers").Rpc }) => Promise<{
      cosmos: {
        authz: {
          v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
          v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        crisis: {
          v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
          v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evidence: {
          v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        feegrant: {
          v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
          v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
          v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
          v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
          v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
      };
      ibc: {
        applications: {
          transfer: {
            v1: _312.MsgClientImpl;
          };
        };
        core: {
          channel: {
            v1: _313.MsgClientImpl;
          };
          client: {
            v1: _314.MsgClientImpl;
          };
          connection: {
            v1: _315.MsgClientImpl;
          };
        };
      };
    }>;
    createRPCQueryClient: ({ rpc }: { rpc: import("@osmonauts/helpers").Rpc }) => Promise<{
      cosmos: {
        auth: {
          v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
        };
        authz: {
          v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
        };
        bank: {
          v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
        };
        distribution: {
          v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
        };
        evidence: {
          v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
        };
        feegrant: {
          v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
        };
        gov: {
          v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
        };
        mint: {
          v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
        };
        params: {
          v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
        };
        slashing: {
          v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
        };
        staking: {
          v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
        };
        upgrade: {
          v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
        };
      };
      ibc: {
        applications: {
          interchain_accounts: {
            controller: {
              v1: _306.QueryClientImpl;
            };
            host: {
              v1: _307.QueryClientImpl;
            };
          };
          transfer: {
            v1: _308.QueryClientImpl;
          };
        };
        core: {
          channel: {
            v1: _309.QueryClientImpl;
          };
          client: {
            v1: _310.QueryClientImpl;
          };
          connection: {
            v1: _311.QueryClientImpl;
          };
        };
      };
    }>;
  };
}
