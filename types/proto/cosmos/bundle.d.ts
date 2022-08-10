import * as _148 from "./auth/v1beta1/auth";
import * as _149 from "./auth/v1beta1/genesis";
import * as _150 from "./auth/v1beta1/query";
import * as _151 from "./authz/v1beta1/authz";
import * as _152 from "./authz/v1beta1/event";
import * as _153 from "./authz/v1beta1/genesis";
import * as _154 from "./authz/v1beta1/query";
import * as _155 from "./authz/v1beta1/tx";
import * as _156 from "./bank/v1beta1/authz";
import * as _157 from "./bank/v1beta1/bank";
import * as _158 from "./bank/v1beta1/genesis";
import * as _159 from "./bank/v1beta1/query";
import * as _160 from "./bank/v1beta1/tx";
import * as _161 from "./base/abci/v1beta1/abci";
import * as _162 from "./base/kv/v1beta1/kv";
import * as _163 from "./base/query/v1beta1/pagination";
import * as _164 from "./base/reflection/v1beta1/reflection";
import * as _165 from "./base/reflection/v2alpha1/reflection";
import * as _166 from "./base/snapshots/v1beta1/snapshot";
import * as _167 from "./base/store/v1beta1/commit_info";
import * as _168 from "./base/store/v1beta1/listening";
import * as _169 from "./base/store/v1beta1/snapshot";
import * as _170 from "./base/tendermint/v1beta1/query";
import * as _171 from "./base/v1beta1/coin";
import * as _172 from "./capability/v1beta1/capability";
import * as _173 from "./capability/v1beta1/genesis";
import * as _174 from "./crisis/v1beta1/genesis";
import * as _175 from "./crisis/v1beta1/tx";
import * as _176 from "./crypto/ed25519/keys";
import * as _177 from "./crypto/multisig/keys";
import * as _178 from "./crypto/secp256k1/keys";
import * as _179 from "./crypto/secp256r1/keys";
import * as _180 from "./distribution/v1beta1/distribution";
import * as _181 from "./distribution/v1beta1/genesis";
import * as _182 from "./distribution/v1beta1/query";
import * as _183 from "./distribution/v1beta1/tx";
import * as _184 from "./evidence/v1beta1/evidence";
import * as _185 from "./evidence/v1beta1/genesis";
import * as _186 from "./evidence/v1beta1/query";
import * as _187 from "./evidence/v1beta1/tx";
import * as _188 from "./feegrant/v1beta1/feegrant";
import * as _189 from "./feegrant/v1beta1/genesis";
import * as _190 from "./feegrant/v1beta1/query";
import * as _191 from "./feegrant/v1beta1/tx";
import * as _192 from "./genutil/v1beta1/genesis";
import * as _193 from "./gov/v1beta1/genesis";
import * as _194 from "./gov/v1beta1/gov";
import * as _195 from "./gov/v1beta1/query";
import * as _196 from "./gov/v1beta1/tx";
import * as _197 from "./mint/v1beta1/genesis";
import * as _198 from "./mint/v1beta1/mint";
import * as _199 from "./mint/v1beta1/query";
import * as _200 from "./params/v1beta1/params";
import * as _201 from "./params/v1beta1/query";
import * as _202 from "./slashing/v1beta1/genesis";
import * as _203 from "./slashing/v1beta1/query";
import * as _204 from "./slashing/v1beta1/slashing";
import * as _205 from "./slashing/v1beta1/tx";
import * as _206 from "./staking/v1beta1/authz";
import * as _207 from "./staking/v1beta1/genesis";
import * as _208 from "./staking/v1beta1/query";
import * as _209 from "./staking/v1beta1/staking";
import * as _210 from "./staking/v1beta1/tx";
import * as _211 from "./tx/signing/v1beta1/signing";
import * as _212 from "./tx/v1beta1/service";
import * as _213 from "./tx/v1beta1/tx";
import * as _214 from "./upgrade/v1beta1/query";
import * as _215 from "./upgrade/v1beta1/upgrade";
import * as _216 from "./vesting/v1beta1/tx";
import * as _217 from "./vesting/v1beta1/vesting";
import * as _282 from "./auth/v1beta1/query.rpc.query";
import * as _283 from "./authz/v1beta1/query.rpc.query";
import * as _284 from "./bank/v1beta1/query.rpc.query";
import * as _285 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _286 from "./distribution/v1beta1/query.rpc.query";
import * as _287 from "./evidence/v1beta1/query.rpc.query";
import * as _288 from "./feegrant/v1beta1/query.rpc.query";
import * as _289 from "./gov/v1beta1/query.rpc.query";
import * as _290 from "./mint/v1beta1/query.rpc.query";
import * as _291 from "./params/v1beta1/query.rpc.query";
import * as _292 from "./slashing/v1beta1/query.rpc.query";
import * as _293 from "./staking/v1beta1/query.rpc.query";
import * as _294 from "./tx/v1beta1/service.rpc.svc";
import * as _295 from "./upgrade/v1beta1/query.rpc.query";
import * as _296 from "./authz/v1beta1/tx.rpc.msg";
import * as _297 from "./bank/v1beta1/tx.rpc.msg";
import * as _298 from "./crisis/v1beta1/tx.rpc.msg";
import * as _299 from "./distribution/v1beta1/tx.rpc.msg";
import * as _300 from "./evidence/v1beta1/tx.rpc.msg";
import * as _301 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _302 from "./gov/v1beta1/tx.rpc.msg";
import * as _303 from "./slashing/v1beta1/tx.rpc.msg";
import * as _304 from "./staking/v1beta1/tx.rpc.msg";
import * as _305 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
  namespace auth {
    const v1beta1: {
      QueryClientImpl: typeof _282.QueryClientImpl;
      QueryAccountsRequest: {
        encode(
          message: _150.QueryAccountsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryAccountsRequest;
        fromJSON(object: any): _150.QueryAccountsRequest;
        toJSON(message: _150.QueryAccountsRequest): unknown;
        fromPartial(object: {
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _150.QueryAccountsRequest;
      };
      QueryAccountsResponse: {
        encode(
          message: _150.QueryAccountsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryAccountsResponse;
        fromJSON(object: any): _150.QueryAccountsResponse;
        toJSON(message: _150.QueryAccountsResponse): unknown;
        fromPartial(object: {
          accounts?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _150.QueryAccountsResponse;
      };
      QueryAccountRequest: {
        encode(
          message: _150.QueryAccountRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryAccountRequest;
        fromJSON(object: any): _150.QueryAccountRequest;
        toJSON(message: _150.QueryAccountRequest): unknown;
        fromPartial(object: { address?: string }): _150.QueryAccountRequest;
      };
      QueryAccountResponse: {
        encode(
          message: _150.QueryAccountResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryAccountResponse;
        fromJSON(object: any): _150.QueryAccountResponse;
        toJSON(message: _150.QueryAccountResponse): unknown;
        fromPartial(object: {
          account?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
        }): _150.QueryAccountResponse;
      };
      QueryParamsRequest: {
        encode(_: _150.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsRequest;
        fromJSON(_: any): _150.QueryParamsRequest;
        toJSON(_: _150.QueryParamsRequest): unknown;
        fromPartial(_: {}): _150.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _150.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.QueryParamsResponse;
        fromJSON(object: any): _150.QueryParamsResponse;
        toJSON(message: _150.QueryParamsResponse): unknown;
        fromPartial(object: {
          params?: {
            maxMemoCharacters?: any;
            txSigLimit?: any;
            txSizeCostPerByte?: any;
            sigVerifyCostEd25519?: any;
            sigVerifyCostSecp256k1?: any;
          };
        }): _150.QueryParamsResponse;
      };
      GenesisState: {
        encode(message: _149.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.GenesisState;
        fromJSON(object: any): _149.GenesisState;
        toJSON(message: _149.GenesisState): unknown;
        fromPartial(object: {
          params?: {
            maxMemoCharacters?: any;
            txSigLimit?: any;
            txSizeCostPerByte?: any;
            sigVerifyCostEd25519?: any;
            sigVerifyCostSecp256k1?: any;
          };
          accounts?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
        }): _149.GenesisState;
      };
      BaseAccount: {
        encode(message: _148.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.BaseAccount;
        fromJSON(object: any): _148.BaseAccount;
        toJSON(message: _148.BaseAccount): unknown;
        fromPartial(object: {
          address?: string;
          pubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          accountNumber?: any;
          sequence?: any;
        }): _148.BaseAccount;
      };
      ModuleAccount: {
        encode(
          message: _148.ModuleAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ModuleAccount;
        fromJSON(object: any): _148.ModuleAccount;
        toJSON(message: _148.ModuleAccount): unknown;
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
          name?: string;
          permissions?: string[];
        }): _148.ModuleAccount;
      };
      Params: {
        encode(message: _148.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Params;
        fromJSON(object: any): _148.Params;
        toJSON(message: _148.Params): unknown;
        fromPartial(object: {
          maxMemoCharacters?: any;
          txSigLimit?: any;
          txSizeCostPerByte?: any;
          sigVerifyCostEd25519?: any;
          sigVerifyCostSecp256k1?: any;
        }): _148.Params;
      };
    };
  }
  namespace authz {
    const v1beta1: {
      MsgClientImpl: typeof _296.MsgClientImpl;
      QueryClientImpl: typeof _283.QueryClientImpl;
      MsgGrant: {
        encode(message: _155.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgGrant;
        fromJSON(object: any): _155.MsgGrant;
        toJSON(message: _155.MsgGrant): unknown;
        fromPartial(object: {
          granter?: string;
          grantee?: string;
          grant?: {
            authorization?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            expiration?: Date;
          };
        }): _155.MsgGrant;
      };
      MsgExecResponse: {
        encode(
          message: _155.MsgExecResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgExecResponse;
        fromJSON(object: any): _155.MsgExecResponse;
        toJSON(message: _155.MsgExecResponse): unknown;
        fromPartial(object: { results?: Uint8Array[] }): _155.MsgExecResponse;
      };
      MsgExec: {
        encode(message: _155.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgExec;
        fromJSON(object: any): _155.MsgExec;
        toJSON(message: _155.MsgExec): unknown;
        fromPartial(object: {
          grantee?: string;
          msgs?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
        }): _155.MsgExec;
      };
      MsgGrantResponse: {
        encode(_: _155.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgGrantResponse;
        fromJSON(_: any): _155.MsgGrantResponse;
        toJSON(_: _155.MsgGrantResponse): unknown;
        fromPartial(_: {}): _155.MsgGrantResponse;
      };
      MsgRevoke: {
        encode(message: _155.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgRevoke;
        fromJSON(object: any): _155.MsgRevoke;
        toJSON(message: _155.MsgRevoke): unknown;
        fromPartial(object: { granter?: string; grantee?: string; msgTypeUrl?: string }): _155.MsgRevoke;
      };
      MsgRevokeResponse: {
        encode(_: _155.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.MsgRevokeResponse;
        fromJSON(_: any): _155.MsgRevokeResponse;
        toJSON(_: _155.MsgRevokeResponse): unknown;
        fromPartial(_: {}): _155.MsgRevokeResponse;
      };
      QueryGrantsRequest: {
        encode(
          message: _154.QueryGrantsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGrantsRequest;
        fromJSON(object: any): _154.QueryGrantsRequest;
        toJSON(message: _154.QueryGrantsRequest): unknown;
        fromPartial(object: {
          granter?: string;
          grantee?: string;
          msgTypeUrl?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _154.QueryGrantsRequest;
      };
      QueryGrantsResponse: {
        encode(
          message: _154.QueryGrantsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryGrantsResponse;
        fromJSON(object: any): _154.QueryGrantsResponse;
        toJSON(message: _154.QueryGrantsResponse): unknown;
        fromPartial(object: {
          grants?: {
            authorization?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            expiration?: Date;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _154.QueryGrantsResponse;
      };
      GenesisState: {
        encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GenesisState;
        fromJSON(object: any): _153.GenesisState;
        toJSON(message: _153.GenesisState): unknown;
        fromPartial(object: {
          authorization?: {
            granter?: string;
            grantee?: string;
            authorization?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            expiration?: Date;
          }[];
        }): _153.GenesisState;
      };
      GrantAuthorization: {
        encode(
          message: _153.GrantAuthorization,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.GrantAuthorization;
        fromJSON(object: any): _153.GrantAuthorization;
        toJSON(message: _153.GrantAuthorization): unknown;
        fromPartial(object: {
          granter?: string;
          grantee?: string;
          authorization?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          expiration?: Date;
        }): _153.GrantAuthorization;
      };
      EventGrant: {
        encode(message: _152.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.EventGrant;
        fromJSON(object: any): _152.EventGrant;
        toJSON(message: _152.EventGrant): unknown;
        fromPartial(object: { msgTypeUrl?: string; granter?: string; grantee?: string }): _152.EventGrant;
      };
      EventRevoke: {
        encode(message: _152.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.EventRevoke;
        fromJSON(object: any): _152.EventRevoke;
        toJSON(message: _152.EventRevoke): unknown;
        fromPartial(object: { msgTypeUrl?: string; granter?: string; grantee?: string }): _152.EventRevoke;
      };
      GenericAuthorization: {
        encode(
          message: _151.GenericAuthorization,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenericAuthorization;
        fromJSON(object: any): _151.GenericAuthorization;
        toJSON(message: _151.GenericAuthorization): unknown;
        fromPartial(object: { msg?: string }): _151.GenericAuthorization;
      };
      Grant: {
        encode(message: _151.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Grant;
        fromJSON(object: any): _151.Grant;
        toJSON(message: _151.Grant): unknown;
        fromPartial(object: {
          authorization?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          expiration?: Date;
        }): _151.Grant;
      };
    };
  }
  namespace bank {
    const v1beta1: {
      MsgClientImpl: typeof _297.MsgClientImpl;
      QueryClientImpl: typeof _284.QueryClientImpl;
      MsgSend: {
        encode(message: _160.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSend;
        fromJSON(object: any): _160.MsgSend;
        toJSON(message: _160.MsgSend): unknown;
        fromPartial(object: {
          fromAddress?: string;
          toAddress?: string;
          amount?: {
            denom?: string;
            amount?: string;
          }[];
        }): _160.MsgSend;
      };
      MsgSendResponse: {
        encode(_: _160.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSendResponse;
        fromJSON(_: any): _160.MsgSendResponse;
        toJSON(_: _160.MsgSendResponse): unknown;
        fromPartial(_: {}): _160.MsgSendResponse;
      };
      MsgMultiSend: {
        encode(message: _160.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgMultiSend;
        fromJSON(object: any): _160.MsgMultiSend;
        toJSON(message: _160.MsgMultiSend): unknown;
        fromPartial(object: {
          inputs?: {
            address?: string;
            coins?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
          outputs?: {
            address?: string;
            coins?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
        }): _160.MsgMultiSend;
      };
      MsgMultiSendResponse: {
        encode(
          _: _160.MsgMultiSendResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgMultiSendResponse;
        fromJSON(_: any): _160.MsgMultiSendResponse;
        toJSON(_: _160.MsgMultiSendResponse): unknown;
        fromPartial(_: {}): _160.MsgMultiSendResponse;
      };
      QueryBalanceRequest: {
        encode(
          message: _159.QueryBalanceRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryBalanceRequest;
        fromJSON(object: any): _159.QueryBalanceRequest;
        toJSON(message: _159.QueryBalanceRequest): unknown;
        fromPartial(object: { address?: string; denom?: string }): _159.QueryBalanceRequest;
      };
      QueryBalanceResponse: {
        encode(
          message: _159.QueryBalanceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryBalanceResponse;
        fromJSON(object: any): _159.QueryBalanceResponse;
        toJSON(message: _159.QueryBalanceResponse): unknown;
        fromPartial(object: {
          balance?: {
            denom?: string;
            amount?: string;
          };
        }): _159.QueryBalanceResponse;
      };
      QueryAllBalancesRequest: {
        encode(
          message: _159.QueryAllBalancesRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryAllBalancesRequest;
        fromJSON(object: any): _159.QueryAllBalancesRequest;
        toJSON(message: _159.QueryAllBalancesRequest): unknown;
        fromPartial(object: {
          address?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _159.QueryAllBalancesRequest;
      };
      QueryAllBalancesResponse: {
        encode(
          message: _159.QueryAllBalancesResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryAllBalancesResponse;
        fromJSON(object: any): _159.QueryAllBalancesResponse;
        toJSON(message: _159.QueryAllBalancesResponse): unknown;
        fromPartial(object: {
          balances?: {
            denom?: string;
            amount?: string;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _159.QueryAllBalancesResponse;
      };
      QueryTotalSupplyRequest: {
        encode(
          message: _159.QueryTotalSupplyRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryTotalSupplyRequest;
        fromJSON(object: any): _159.QueryTotalSupplyRequest;
        toJSON(message: _159.QueryTotalSupplyRequest): unknown;
        fromPartial(object: {
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _159.QueryTotalSupplyRequest;
      };
      QueryTotalSupplyResponse: {
        encode(
          message: _159.QueryTotalSupplyResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryTotalSupplyResponse;
        fromJSON(object: any): _159.QueryTotalSupplyResponse;
        toJSON(message: _159.QueryTotalSupplyResponse): unknown;
        fromPartial(object: {
          supply?: {
            denom?: string;
            amount?: string;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _159.QueryTotalSupplyResponse;
      };
      QuerySupplyOfRequest: {
        encode(
          message: _159.QuerySupplyOfRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QuerySupplyOfRequest;
        fromJSON(object: any): _159.QuerySupplyOfRequest;
        toJSON(message: _159.QuerySupplyOfRequest): unknown;
        fromPartial(object: { denom?: string }): _159.QuerySupplyOfRequest;
      };
      QuerySupplyOfResponse: {
        encode(
          message: _159.QuerySupplyOfResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QuerySupplyOfResponse;
        fromJSON(object: any): _159.QuerySupplyOfResponse;
        toJSON(message: _159.QuerySupplyOfResponse): unknown;
        fromPartial(object: {
          amount?: {
            denom?: string;
            amount?: string;
          };
        }): _159.QuerySupplyOfResponse;
      };
      QueryParamsRequest: {
        encode(_: _159.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsRequest;
        fromJSON(_: any): _159.QueryParamsRequest;
        toJSON(_: _159.QueryParamsRequest): unknown;
        fromPartial(_: {}): _159.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _159.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsResponse;
        fromJSON(object: any): _159.QueryParamsResponse;
        toJSON(message: _159.QueryParamsResponse): unknown;
        fromPartial(object: {
          params?: {
            sendEnabled?: {
              denom?: string;
              enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
          };
        }): _159.QueryParamsResponse;
      };
      QueryDenomsMetadataRequest: {
        encode(
          message: _159.QueryDenomsMetadataRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryDenomsMetadataRequest;
        fromJSON(object: any): _159.QueryDenomsMetadataRequest;
        toJSON(message: _159.QueryDenomsMetadataRequest): unknown;
        fromPartial(object: {
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _159.QueryDenomsMetadataRequest;
      };
      QueryDenomsMetadataResponse: {
        encode(
          message: _159.QueryDenomsMetadataResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryDenomsMetadataResponse;
        fromJSON(object: any): _159.QueryDenomsMetadataResponse;
        toJSON(message: _159.QueryDenomsMetadataResponse): unknown;
        fromPartial(object: {
          metadatas?: {
            description?: string;
            denomUnits?: {
              denom?: string;
              exponent?: number;
              aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _159.QueryDenomsMetadataResponse;
      };
      QueryDenomMetadataRequest: {
        encode(
          message: _159.QueryDenomMetadataRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryDenomMetadataRequest;
        fromJSON(object: any): _159.QueryDenomMetadataRequest;
        toJSON(message: _159.QueryDenomMetadataRequest): unknown;
        fromPartial(object: { denom?: string }): _159.QueryDenomMetadataRequest;
      };
      QueryDenomMetadataResponse: {
        encode(
          message: _159.QueryDenomMetadataResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _159.QueryDenomMetadataResponse;
        fromJSON(object: any): _159.QueryDenomMetadataResponse;
        toJSON(message: _159.QueryDenomMetadataResponse): unknown;
        fromPartial(object: {
          metadata?: {
            description?: string;
            denomUnits?: {
              denom?: string;
              exponent?: number;
              aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
          };
        }): _159.QueryDenomMetadataResponse;
      };
      GenesisState: {
        encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
        fromJSON(object: any): _158.GenesisState;
        toJSON(message: _158.GenesisState): unknown;
        fromPartial(object: {
          params?: {
            sendEnabled?: {
              denom?: string;
              enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
          };
          balances?: {
            address?: string;
            coins?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
          supply?: {
            denom?: string;
            amount?: string;
          }[];
          denomMetadata?: {
            description?: string;
            denomUnits?: {
              denom?: string;
              exponent?: number;
              aliases?: string[];
            }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
          }[];
        }): _158.GenesisState;
      };
      Balance: {
        encode(message: _158.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Balance;
        fromJSON(object: any): _158.Balance;
        toJSON(message: _158.Balance): unknown;
        fromPartial(object: {
          address?: string;
          coins?: {
            denom?: string;
            amount?: string;
          }[];
        }): _158.Balance;
      };
      Params: {
        encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
        fromJSON(object: any): _157.Params;
        toJSON(message: _157.Params): unknown;
        fromPartial(object: {
          sendEnabled?: {
            denom?: string;
            enabled?: boolean;
          }[];
          defaultSendEnabled?: boolean;
        }): _157.Params;
      };
      SendEnabled: {
        encode(message: _157.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.SendEnabled;
        fromJSON(object: any): _157.SendEnabled;
        toJSON(message: _157.SendEnabled): unknown;
        fromPartial(object: { denom?: string; enabled?: boolean }): _157.SendEnabled;
      };
      Input: {
        encode(message: _157.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Input;
        fromJSON(object: any): _157.Input;
        toJSON(message: _157.Input): unknown;
        fromPartial(object: {
          address?: string;
          coins?: {
            denom?: string;
            amount?: string;
          }[];
        }): _157.Input;
      };
      Output: {
        encode(message: _157.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Output;
        fromJSON(object: any): _157.Output;
        toJSON(message: _157.Output): unknown;
        fromPartial(object: {
          address?: string;
          coins?: {
            denom?: string;
            amount?: string;
          }[];
        }): _157.Output;
      };
      Supply: {
        encode(message: _157.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Supply;
        fromJSON(object: any): _157.Supply;
        toJSON(message: _157.Supply): unknown;
        fromPartial(object: {
          total?: {
            denom?: string;
            amount?: string;
          }[];
        }): _157.Supply;
      };
      DenomUnit: {
        encode(message: _157.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DenomUnit;
        fromJSON(object: any): _157.DenomUnit;
        toJSON(message: _157.DenomUnit): unknown;
        fromPartial(object: { denom?: string; exponent?: number; aliases?: string[] }): _157.DenomUnit;
      };
      Metadata: {
        encode(message: _157.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Metadata;
        fromJSON(object: any): _157.Metadata;
        toJSON(message: _157.Metadata): unknown;
        fromPartial(object: {
          description?: string;
          denomUnits?: {
            denom?: string;
            exponent?: number;
            aliases?: string[];
          }[];
          base?: string;
          display?: string;
          name?: string;
          symbol?: string;
        }): _157.Metadata;
      };
      SendAuthorization: {
        encode(
          message: _156.SendAuthorization,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SendAuthorization;
        fromJSON(object: any): _156.SendAuthorization;
        toJSON(message: _156.SendAuthorization): unknown;
        fromPartial(object: {
          spendLimit?: {
            denom?: string;
            amount?: string;
          }[];
        }): _156.SendAuthorization;
      };
    };
  }
  namespace base {
    namespace abci {
      const v1beta1: {
        TxResponse: {
          encode(message: _161.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TxResponse;
          fromJSON(object: any): _161.TxResponse;
          toJSON(message: _161.TxResponse): unknown;
          fromPartial(object: {
            height?: any;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
              msgIndex?: number;
              log?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: string;
                  value?: string;
                }[];
              }[];
            }[];
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
          }): _161.TxResponse;
        };
        ABCIMessageLog: {
          encode(
            message: _161.ABCIMessageLog,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ABCIMessageLog;
          fromJSON(object: any): _161.ABCIMessageLog;
          toJSON(message: _161.ABCIMessageLog): unknown;
          fromPartial(object: {
            msgIndex?: number;
            log?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: string;
                value?: string;
              }[];
            }[];
          }): _161.ABCIMessageLog;
        };
        StringEvent: {
          encode(
            message: _161.StringEvent,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.StringEvent;
          fromJSON(object: any): _161.StringEvent;
          toJSON(message: _161.StringEvent): unknown;
          fromPartial(object: {
            type?: string;
            attributes?: {
              key?: string;
              value?: string;
            }[];
          }): _161.StringEvent;
        };
        Attribute: {
          encode(message: _161.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Attribute;
          fromJSON(object: any): _161.Attribute;
          toJSON(message: _161.Attribute): unknown;
          fromPartial(object: { key?: string; value?: string }): _161.Attribute;
        };
        GasInfo: {
          encode(message: _161.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GasInfo;
          fromJSON(object: any): _161.GasInfo;
          toJSON(message: _161.GasInfo): unknown;
          fromPartial(object: { gasWanted?: any; gasUsed?: any }): _161.GasInfo;
        };
        Result: {
          encode(message: _161.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Result;
          fromJSON(object: any): _161.Result;
          toJSON(message: _161.Result): unknown;
          fromPartial(object: {
            data?: Uint8Array;
            log?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
          }): _161.Result;
        };
        SimulationResponse: {
          encode(
            message: _161.SimulationResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.SimulationResponse;
          fromJSON(object: any): _161.SimulationResponse;
          toJSON(message: _161.SimulationResponse): unknown;
          fromPartial(object: {
            gasInfo?: {
              gasWanted?: any;
              gasUsed?: any;
            };
            result?: {
              data?: Uint8Array;
              log?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: Uint8Array;
                  value?: Uint8Array;
                  index?: boolean;
                }[];
              }[];
            };
          }): _161.SimulationResponse;
        };
        MsgData: {
          encode(message: _161.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.MsgData;
          fromJSON(object: any): _161.MsgData;
          toJSON(message: _161.MsgData): unknown;
          fromPartial(object: { msgType?: string; data?: Uint8Array }): _161.MsgData;
        };
        TxMsgData: {
          encode(message: _161.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TxMsgData;
          fromJSON(object: any): _161.TxMsgData;
          toJSON(message: _161.TxMsgData): unknown;
          fromPartial(object: {
            data?: {
              msgType?: string;
              data?: Uint8Array;
            }[];
          }): _161.TxMsgData;
        };
        SearchTxsResult: {
          encode(
            message: _161.SearchTxsResult,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.SearchTxsResult;
          fromJSON(object: any): _161.SearchTxsResult;
          toJSON(message: _161.SearchTxsResult): unknown;
          fromPartial(object: {
            totalCount?: any;
            count?: any;
            pageNumber?: any;
            pageTotal?: any;
            limit?: any;
            txs?: {
              height?: any;
              txhash?: string;
              codespace?: string;
              code?: number;
              data?: string;
              rawLog?: string;
              logs?: {
                msgIndex?: number;
                log?: string;
                events?: {
                  type?: string;
                  attributes?: {
                    key?: string;
                    value?: string;
                  }[];
                }[];
              }[];
              info?: string;
              gasWanted?: any;
              gasUsed?: any;
              tx?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              timestamp?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: Uint8Array;
                  value?: Uint8Array;
                  index?: boolean;
                }[];
              }[];
            }[];
          }): _161.SearchTxsResult;
        };
      };
    }
    namespace kv {
      const v1beta1: {
        Pairs: {
          encode(message: _162.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Pairs;
          fromJSON(object: any): _162.Pairs;
          toJSON(message: _162.Pairs): unknown;
          fromPartial(object: {
            pairs?: {
              key?: Uint8Array;
              value?: Uint8Array;
            }[];
          }): _162.Pairs;
        };
        Pair: {
          encode(message: _162.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Pair;
          fromJSON(object: any): _162.Pair;
          toJSON(message: _162.Pair): unknown;
          fromPartial(object: { key?: Uint8Array; value?: Uint8Array }): _162.Pair;
        };
      };
    }
    namespace query {
      const v1beta1: {
        PageRequest: {
          encode(
            message: _163.PageRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.PageRequest;
          fromJSON(object: any): _163.PageRequest;
          toJSON(message: _163.PageRequest): unknown;
          fromPartial(object: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          }): _163.PageRequest;
        };
        PageResponse: {
          encode(
            message: _163.PageResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.PageResponse;
          fromJSON(object: any): _163.PageResponse;
          toJSON(message: _163.PageResponse): unknown;
          fromPartial(object: { nextKey?: Uint8Array; total?: any }): _163.PageResponse;
        };
      };
    }
    namespace reflection {
      const v1beta1: {
        ListAllInterfacesRequest: {
          encode(
            _: _164.ListAllInterfacesRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _164.ListAllInterfacesRequest;
          fromJSON(_: any): _164.ListAllInterfacesRequest;
          toJSON(_: _164.ListAllInterfacesRequest): unknown;
          fromPartial(_: {}): _164.ListAllInterfacesRequest;
        };
        ListAllInterfacesResponse: {
          encode(
            message: _164.ListAllInterfacesResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _164.ListAllInterfacesResponse;
          fromJSON(object: any): _164.ListAllInterfacesResponse;
          toJSON(message: _164.ListAllInterfacesResponse): unknown;
          fromPartial(object: { interfaceNames?: string[] }): _164.ListAllInterfacesResponse;
        };
        ListImplementationsRequest: {
          encode(
            message: _164.ListImplementationsRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _164.ListImplementationsRequest;
          fromJSON(object: any): _164.ListImplementationsRequest;
          toJSON(message: _164.ListImplementationsRequest): unknown;
          fromPartial(object: { interfaceName?: string }): _164.ListImplementationsRequest;
        };
        ListImplementationsResponse: {
          encode(
            message: _164.ListImplementationsResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _164.ListImplementationsResponse;
          fromJSON(object: any): _164.ListImplementationsResponse;
          toJSON(message: _164.ListImplementationsResponse): unknown;
          fromPartial(object: { implementationMessageNames?: string[] }): _164.ListImplementationsResponse;
        };
      };
      const v2alpha1: {
        AppDescriptor: {
          encode(
            message: _165.AppDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.AppDescriptor;
          fromJSON(object: any): _165.AppDescriptor;
          toJSON(message: _165.AppDescriptor): unknown;
          fromPartial(object: {
            authn?: {
              signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
              }[];
            };
            chain?: {
              id?: string;
            };
            codec?: {
              interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                  fullname?: string;
                  fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                  fullname?: string;
                  typeUrl?: string;
                }[];
              }[];
            };
            configuration?: {
              bech32AccountAddressPrefix?: string;
            };
            queryServices?: {
              queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                  name?: string;
                  fullQueryPath?: string;
                }[];
              }[];
            };
            tx?: {
              fullname?: string;
              msgs?: {
                msgTypeUrl?: string;
              }[];
            };
          }): _165.AppDescriptor;
        };
        TxDescriptor: {
          encode(
            message: _165.TxDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TxDescriptor;
          fromJSON(object: any): _165.TxDescriptor;
          toJSON(message: _165.TxDescriptor): unknown;
          fromPartial(object: {
            fullname?: string;
            msgs?: {
              msgTypeUrl?: string;
            }[];
          }): _165.TxDescriptor;
        };
        AuthnDescriptor: {
          encode(
            message: _165.AuthnDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.AuthnDescriptor;
          fromJSON(object: any): _165.AuthnDescriptor;
          toJSON(message: _165.AuthnDescriptor): unknown;
          fromPartial(object: {
            signModes?: {
              name?: string;
              number?: number;
              authnInfoProviderMethodFullname?: string;
            }[];
          }): _165.AuthnDescriptor;
        };
        SigningModeDescriptor: {
          encode(
            message: _165.SigningModeDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.SigningModeDescriptor;
          fromJSON(object: any): _165.SigningModeDescriptor;
          toJSON(message: _165.SigningModeDescriptor): unknown;
          fromPartial(object: {
            name?: string;
            number?: number;
            authnInfoProviderMethodFullname?: string;
          }): _165.SigningModeDescriptor;
        };
        ChainDescriptor: {
          encode(
            message: _165.ChainDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ChainDescriptor;
          fromJSON(object: any): _165.ChainDescriptor;
          toJSON(message: _165.ChainDescriptor): unknown;
          fromPartial(object: { id?: string }): _165.ChainDescriptor;
        };
        CodecDescriptor: {
          encode(
            message: _165.CodecDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CodecDescriptor;
          fromJSON(object: any): _165.CodecDescriptor;
          toJSON(message: _165.CodecDescriptor): unknown;
          fromPartial(object: {
            interfaces?: {
              fullname?: string;
              interfaceAcceptingMessages?: {
                fullname?: string;
                fieldDescriptorNames?: string[];
              }[];
              interfaceImplementers?: {
                fullname?: string;
                typeUrl?: string;
              }[];
            }[];
          }): _165.CodecDescriptor;
        };
        InterfaceDescriptor: {
          encode(
            message: _165.InterfaceDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.InterfaceDescriptor;
          fromJSON(object: any): _165.InterfaceDescriptor;
          toJSON(message: _165.InterfaceDescriptor): unknown;
          fromPartial(object: {
            fullname?: string;
            interfaceAcceptingMessages?: {
              fullname?: string;
              fieldDescriptorNames?: string[];
            }[];
            interfaceImplementers?: {
              fullname?: string;
              typeUrl?: string;
            }[];
          }): _165.InterfaceDescriptor;
        };
        InterfaceImplementerDescriptor: {
          encode(
            message: _165.InterfaceImplementerDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.InterfaceImplementerDescriptor;
          fromJSON(object: any): _165.InterfaceImplementerDescriptor;
          toJSON(message: _165.InterfaceImplementerDescriptor): unknown;
          fromPartial(object: { fullname?: string; typeUrl?: string }): _165.InterfaceImplementerDescriptor;
        };
        InterfaceAcceptingMessageDescriptor: {
          encode(
            message: _165.InterfaceAcceptingMessageDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.InterfaceAcceptingMessageDescriptor;
          fromJSON(object: any): _165.InterfaceAcceptingMessageDescriptor;
          toJSON(message: _165.InterfaceAcceptingMessageDescriptor): unknown;
          fromPartial(object: {
            fullname?: string;
            fieldDescriptorNames?: string[];
          }): _165.InterfaceAcceptingMessageDescriptor;
        };
        ConfigurationDescriptor: {
          encode(
            message: _165.ConfigurationDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.ConfigurationDescriptor;
          fromJSON(object: any): _165.ConfigurationDescriptor;
          toJSON(message: _165.ConfigurationDescriptor): unknown;
          fromPartial(object: { bech32AccountAddressPrefix?: string }): _165.ConfigurationDescriptor;
        };
        MsgDescriptor: {
          encode(
            message: _165.MsgDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgDescriptor;
          fromJSON(object: any): _165.MsgDescriptor;
          toJSON(message: _165.MsgDescriptor): unknown;
          fromPartial(object: { msgTypeUrl?: string }): _165.MsgDescriptor;
        };
        GetAuthnDescriptorRequest: {
          encode(
            _: _165.GetAuthnDescriptorRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetAuthnDescriptorRequest;
          fromJSON(_: any): _165.GetAuthnDescriptorRequest;
          toJSON(_: _165.GetAuthnDescriptorRequest): unknown;
          fromPartial(_: {}): _165.GetAuthnDescriptorRequest;
        };
        GetAuthnDescriptorResponse: {
          encode(
            message: _165.GetAuthnDescriptorResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetAuthnDescriptorResponse;
          fromJSON(object: any): _165.GetAuthnDescriptorResponse;
          toJSON(message: _165.GetAuthnDescriptorResponse): unknown;
          fromPartial(object: {
            authn?: {
              signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
              }[];
            };
          }): _165.GetAuthnDescriptorResponse;
        };
        GetChainDescriptorRequest: {
          encode(
            _: _165.GetChainDescriptorRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetChainDescriptorRequest;
          fromJSON(_: any): _165.GetChainDescriptorRequest;
          toJSON(_: _165.GetChainDescriptorRequest): unknown;
          fromPartial(_: {}): _165.GetChainDescriptorRequest;
        };
        GetChainDescriptorResponse: {
          encode(
            message: _165.GetChainDescriptorResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetChainDescriptorResponse;
          fromJSON(object: any): _165.GetChainDescriptorResponse;
          toJSON(message: _165.GetChainDescriptorResponse): unknown;
          fromPartial(object: {
            chain?: {
              id?: string;
            };
          }): _165.GetChainDescriptorResponse;
        };
        GetCodecDescriptorRequest: {
          encode(
            _: _165.GetCodecDescriptorRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetCodecDescriptorRequest;
          fromJSON(_: any): _165.GetCodecDescriptorRequest;
          toJSON(_: _165.GetCodecDescriptorRequest): unknown;
          fromPartial(_: {}): _165.GetCodecDescriptorRequest;
        };
        GetCodecDescriptorResponse: {
          encode(
            message: _165.GetCodecDescriptorResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetCodecDescriptorResponse;
          fromJSON(object: any): _165.GetCodecDescriptorResponse;
          toJSON(message: _165.GetCodecDescriptorResponse): unknown;
          fromPartial(object: {
            codec?: {
              interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                  fullname?: string;
                  fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                  fullname?: string;
                  typeUrl?: string;
                }[];
              }[];
            };
          }): _165.GetCodecDescriptorResponse;
        };
        GetConfigurationDescriptorRequest: {
          encode(
            _: _165.GetConfigurationDescriptorRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetConfigurationDescriptorRequest;
          fromJSON(_: any): _165.GetConfigurationDescriptorRequest;
          toJSON(_: _165.GetConfigurationDescriptorRequest): unknown;
          fromPartial(_: {}): _165.GetConfigurationDescriptorRequest;
        };
        GetConfigurationDescriptorResponse: {
          encode(
            message: _165.GetConfigurationDescriptorResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetConfigurationDescriptorResponse;
          fromJSON(object: any): _165.GetConfigurationDescriptorResponse;
          toJSON(message: _165.GetConfigurationDescriptorResponse): unknown;
          fromPartial(object: {
            config?: {
              bech32AccountAddressPrefix?: string;
            };
          }): _165.GetConfigurationDescriptorResponse;
        };
        GetQueryServicesDescriptorRequest: {
          encode(
            _: _165.GetQueryServicesDescriptorRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetQueryServicesDescriptorRequest;
          fromJSON(_: any): _165.GetQueryServicesDescriptorRequest;
          toJSON(_: _165.GetQueryServicesDescriptorRequest): unknown;
          fromPartial(_: {}): _165.GetQueryServicesDescriptorRequest;
        };
        GetQueryServicesDescriptorResponse: {
          encode(
            message: _165.GetQueryServicesDescriptorResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetQueryServicesDescriptorResponse;
          fromJSON(object: any): _165.GetQueryServicesDescriptorResponse;
          toJSON(message: _165.GetQueryServicesDescriptorResponse): unknown;
          fromPartial(object: {
            queries?: {
              queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                  name?: string;
                  fullQueryPath?: string;
                }[];
              }[];
            };
          }): _165.GetQueryServicesDescriptorResponse;
        };
        GetTxDescriptorRequest: {
          encode(
            _: _165.GetTxDescriptorRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetTxDescriptorRequest;
          fromJSON(_: any): _165.GetTxDescriptorRequest;
          toJSON(_: _165.GetTxDescriptorRequest): unknown;
          fromPartial(_: {}): _165.GetTxDescriptorRequest;
        };
        GetTxDescriptorResponse: {
          encode(
            message: _165.GetTxDescriptorResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.GetTxDescriptorResponse;
          fromJSON(object: any): _165.GetTxDescriptorResponse;
          toJSON(message: _165.GetTxDescriptorResponse): unknown;
          fromPartial(object: {
            tx?: {
              fullname?: string;
              msgs?: {
                msgTypeUrl?: string;
              }[];
            };
          }): _165.GetTxDescriptorResponse;
        };
        QueryServicesDescriptor: {
          encode(
            message: _165.QueryServicesDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.QueryServicesDescriptor;
          fromJSON(object: any): _165.QueryServicesDescriptor;
          toJSON(message: _165.QueryServicesDescriptor): unknown;
          fromPartial(object: {
            queryServices?: {
              fullname?: string;
              isModule?: boolean;
              methods?: {
                name?: string;
                fullQueryPath?: string;
              }[];
            }[];
          }): _165.QueryServicesDescriptor;
        };
        QueryServiceDescriptor: {
          encode(
            message: _165.QueryServiceDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.QueryServiceDescriptor;
          fromJSON(object: any): _165.QueryServiceDescriptor;
          toJSON(message: _165.QueryServiceDescriptor): unknown;
          fromPartial(object: {
            fullname?: string;
            isModule?: boolean;
            methods?: {
              name?: string;
              fullQueryPath?: string;
            }[];
          }): _165.QueryServiceDescriptor;
        };
        QueryMethodDescriptor: {
          encode(
            message: _165.QueryMethodDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _165.QueryMethodDescriptor;
          fromJSON(object: any): _165.QueryMethodDescriptor;
          toJSON(message: _165.QueryMethodDescriptor): unknown;
          fromPartial(object: { name?: string; fullQueryPath?: string }): _165.QueryMethodDescriptor;
        };
      };
    }
    namespace snapshots {
      const v1beta1: {
        Snapshot: {
          encode(message: _166.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Snapshot;
          fromJSON(object: any): _166.Snapshot;
          toJSON(message: _166.Snapshot): unknown;
          fromPartial(object: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: {
              chunkHashes?: Uint8Array[];
            };
          }): _166.Snapshot;
        };
        Metadata: {
          encode(message: _166.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Metadata;
          fromJSON(object: any): _166.Metadata;
          toJSON(message: _166.Metadata): unknown;
          fromPartial(object: { chunkHashes?: Uint8Array[] }): _166.Metadata;
        };
      };
    }
    namespace store {
      const v1beta1: {
        SnapshotItem: {
          encode(
            message: _169.SnapshotItem,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.SnapshotItem;
          fromJSON(object: any): _169.SnapshotItem;
          toJSON(message: _169.SnapshotItem): unknown;
          fromPartial(object: {
            store?: {
              name?: string;
            };
            iavl?: {
              key?: Uint8Array;
              value?: Uint8Array;
              version?: any;
              height?: number;
            };
          }): _169.SnapshotItem;
        };
        SnapshotStoreItem: {
          encode(
            message: _169.SnapshotStoreItem,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.SnapshotStoreItem;
          fromJSON(object: any): _169.SnapshotStoreItem;
          toJSON(message: _169.SnapshotStoreItem): unknown;
          fromPartial(object: { name?: string }): _169.SnapshotStoreItem;
        };
        SnapshotIAVLItem: {
          encode(
            message: _169.SnapshotIAVLItem,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.SnapshotIAVLItem;
          fromJSON(object: any): _169.SnapshotIAVLItem;
          toJSON(message: _169.SnapshotIAVLItem): unknown;
          fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: any;
            height?: number;
          }): _169.SnapshotIAVLItem;
        };
        StoreKVPair: {
          encode(
            message: _168.StoreKVPair,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.StoreKVPair;
          fromJSON(object: any): _168.StoreKVPair;
          toJSON(message: _168.StoreKVPair): unknown;
          fromPartial(object: {
            storeKey?: string;
            delete?: boolean;
            key?: Uint8Array;
            value?: Uint8Array;
          }): _168.StoreKVPair;
        };
        CommitInfo: {
          encode(message: _167.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.CommitInfo;
          fromJSON(object: any): _167.CommitInfo;
          toJSON(message: _167.CommitInfo): unknown;
          fromPartial(object: {
            version?: any;
            storeInfos?: {
              name?: string;
              commitId?: {
                version?: any;
                hash?: Uint8Array;
              };
            }[];
          }): _167.CommitInfo;
        };
        StoreInfo: {
          encode(message: _167.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.StoreInfo;
          fromJSON(object: any): _167.StoreInfo;
          toJSON(message: _167.StoreInfo): unknown;
          fromPartial(object: {
            name?: string;
            commitId?: {
              version?: any;
              hash?: Uint8Array;
            };
          }): _167.StoreInfo;
        };
        CommitID: {
          encode(message: _167.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.CommitID;
          fromJSON(object: any): _167.CommitID;
          toJSON(message: _167.CommitID): unknown;
          fromPartial(object: { version?: any; hash?: Uint8Array }): _167.CommitID;
        };
      };
    }
    namespace tendermint {
      const v1beta1: {
        ServiceClientImpl: typeof _285.ServiceClientImpl;
        GetValidatorSetByHeightRequest: {
          encode(
            message: _170.GetValidatorSetByHeightRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetValidatorSetByHeightRequest;
          fromJSON(object: any): _170.GetValidatorSetByHeightRequest;
          toJSON(message: _170.GetValidatorSetByHeightRequest): unknown;
          fromPartial(object: {
            height?: any;
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _170.GetValidatorSetByHeightRequest;
        };
        GetValidatorSetByHeightResponse: {
          encode(
            message: _170.GetValidatorSetByHeightResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetValidatorSetByHeightResponse;
          fromJSON(object: any): _170.GetValidatorSetByHeightResponse;
          toJSON(message: _170.GetValidatorSetByHeightResponse): unknown;
          fromPartial(object: {
            blockHeight?: any;
            validators?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              votingPower?: any;
              proposerPriority?: any;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
          }): _170.GetValidatorSetByHeightResponse;
        };
        GetLatestValidatorSetRequest: {
          encode(
            message: _170.GetLatestValidatorSetRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetLatestValidatorSetRequest;
          fromJSON(object: any): _170.GetLatestValidatorSetRequest;
          toJSON(message: _170.GetLatestValidatorSetRequest): unknown;
          fromPartial(object: {
            pagination?: {
              key?: Uint8Array;
              offset?: any;
              limit?: any;
              countTotal?: boolean;
              reverse?: boolean;
            };
          }): _170.GetLatestValidatorSetRequest;
        };
        GetLatestValidatorSetResponse: {
          encode(
            message: _170.GetLatestValidatorSetResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetLatestValidatorSetResponse;
          fromJSON(object: any): _170.GetLatestValidatorSetResponse;
          toJSON(message: _170.GetLatestValidatorSetResponse): unknown;
          fromPartial(object: {
            blockHeight?: any;
            validators?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              votingPower?: any;
              proposerPriority?: any;
            }[];
            pagination?: {
              nextKey?: Uint8Array;
              total?: any;
            };
          }): _170.GetLatestValidatorSetResponse;
        };
        Validator: {
          encode(message: _170.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Validator;
          fromJSON(object: any): _170.Validator;
          toJSON(message: _170.Validator): unknown;
          fromPartial(object: {
            address?: string;
            pubKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            votingPower?: any;
            proposerPriority?: any;
          }): _170.Validator;
        };
        GetBlockByHeightRequest: {
          encode(
            message: _170.GetBlockByHeightRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetBlockByHeightRequest;
          fromJSON(object: any): _170.GetBlockByHeightRequest;
          toJSON(message: _170.GetBlockByHeightRequest): unknown;
          fromPartial(object: { height?: any }): _170.GetBlockByHeightRequest;
        };
        GetBlockByHeightResponse: {
          encode(
            message: _170.GetBlockByHeightResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetBlockByHeightResponse;
          fromJSON(object: any): _170.GetBlockByHeightResponse;
          toJSON(message: _170.GetBlockByHeightResponse): unknown;
          fromPartial(object: {
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
            block?: {
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
              data?: {
                txs?: Uint8Array[];
              };
              evidence?: {
                evidence?: {
                  duplicateVoteEvidence?: {
                    voteA?: {
                      type?: import("../tendermint/types/types").SignedMsgType;
                      height?: any;
                      round?: number;
                      blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                          total?: number;
                          hash?: Uint8Array;
                        };
                      };
                      timestamp?: Date;
                      validatorAddress?: Uint8Array;
                      validatorIndex?: number;
                      signature?: Uint8Array;
                    };
                    voteB?: {
                      type?: import("../tendermint/types/types").SignedMsgType;
                      height?: any;
                      round?: number;
                      blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                          total?: number;
                          hash?: Uint8Array;
                        };
                      };
                      timestamp?: Date;
                      validatorAddress?: Uint8Array;
                      validatorIndex?: number;
                      signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                  };
                  lightClientAttackEvidence?: {
                    conflictingBlock?: {
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
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                      address?: Uint8Array;
                      pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                      };
                      votingPower?: any;
                      proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                  };
                }[];
              };
              lastCommit?: {
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
          }): _170.GetBlockByHeightResponse;
        };
        GetLatestBlockRequest: {
          encode(
            _: _170.GetLatestBlockRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetLatestBlockRequest;
          fromJSON(_: any): _170.GetLatestBlockRequest;
          toJSON(_: _170.GetLatestBlockRequest): unknown;
          fromPartial(_: {}): _170.GetLatestBlockRequest;
        };
        GetLatestBlockResponse: {
          encode(
            message: _170.GetLatestBlockResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _170.GetLatestBlockResponse;
          fromJSON(object: any): _170.GetLatestBlockResponse;
          toJSON(message: _170.GetLatestBlockResponse): unknown;
          fromPartial(object: {
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
            block?: {
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
              data?: {
                txs?: Uint8Array[];
              };
              evidence?: {
                evidence?: {
                  duplicateVoteEvidence?: {
                    voteA?: {
                      type?: import("../tendermint/types/types").SignedMsgType;
                      height?: any;
                      round?: number;
                      blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                          total?: number;
                          hash?: Uint8Array;
                        };
                      };
                      timestamp?: Date;
                      validatorAddress?: Uint8Array;
                      validatorIndex?: number;
                      signature?: Uint8Array;
                    };
                    voteB?: {
                      type?: import("../tendermint/types/types").SignedMsgType;
                      height?: any;
                      round?: number;
                      blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                          total?: number;
                          hash?: Uint8Array;
                        };
                      };
                      timestamp?: Date;
                      validatorAddress?: Uint8Array;
                      validatorIndex?: number;
                      signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                  };
                  lightClientAttackEvidence?: {
                    conflictingBlock?: {
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
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                      address?: Uint8Array;
                      pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                      };
                      votingPower?: any;
                      proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                  };
                }[];
              };
              lastCommit?: {
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
          }): _170.GetLatestBlockResponse;
        };
        GetSyncingRequest: {
          encode(
            _: _170.GetSyncingRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GetSyncingRequest;
          fromJSON(_: any): _170.GetSyncingRequest;
          toJSON(_: _170.GetSyncingRequest): unknown;
          fromPartial(_: {}): _170.GetSyncingRequest;
        };
        GetSyncingResponse: {
          encode(
            message: _170.GetSyncingResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GetSyncingResponse;
          fromJSON(object: any): _170.GetSyncingResponse;
          toJSON(message: _170.GetSyncingResponse): unknown;
          fromPartial(object: { syncing?: boolean }): _170.GetSyncingResponse;
        };
        GetNodeInfoRequest: {
          encode(
            _: _170.GetNodeInfoRequest,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GetNodeInfoRequest;
          fromJSON(_: any): _170.GetNodeInfoRequest;
          toJSON(_: _170.GetNodeInfoRequest): unknown;
          fromPartial(_: {}): _170.GetNodeInfoRequest;
        };
        GetNodeInfoResponse: {
          encode(
            message: _170.GetNodeInfoResponse,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GetNodeInfoResponse;
          fromJSON(object: any): _170.GetNodeInfoResponse;
          toJSON(message: _170.GetNodeInfoResponse): unknown;
          fromPartial(object: {
            defaultNodeInfo?: {
              protocolVersion?: {
                p2p?: any;
                block?: any;
                app?: any;
              };
              defaultNodeId?: string;
              listenAddr?: string;
              network?: string;
              version?: string;
              channels?: Uint8Array;
              moniker?: string;
              other?: {
                txIndex?: string;
                rpcAddress?: string;
              };
            };
            applicationVersion?: {
              name?: string;
              appName?: string;
              version?: string;
              gitCommit?: string;
              buildTags?: string;
              goVersion?: string;
              buildDeps?: {
                path?: string;
                version?: string;
                sum?: string;
              }[];
              cosmosSdkVersion?: string;
            };
          }): _170.GetNodeInfoResponse;
        };
        VersionInfo: {
          encode(
            message: _170.VersionInfo,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.VersionInfo;
          fromJSON(object: any): _170.VersionInfo;
          toJSON(message: _170.VersionInfo): unknown;
          fromPartial(object: {
            name?: string;
            appName?: string;
            version?: string;
            gitCommit?: string;
            buildTags?: string;
            goVersion?: string;
            buildDeps?: {
              path?: string;
              version?: string;
              sum?: string;
            }[];
            cosmosSdkVersion?: string;
          }): _170.VersionInfo;
        };
        Module: {
          encode(message: _170.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Module;
          fromJSON(object: any): _170.Module;
          toJSON(message: _170.Module): unknown;
          fromPartial(object: { path?: string; version?: string; sum?: string }): _170.Module;
        };
      };
    }
    const v1beta1: {
      Coin: {
        encode(message: _171.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Coin;
        fromJSON(object: any): _171.Coin;
        toJSON(message: _171.Coin): unknown;
        fromPartial(object: { denom?: string; amount?: string }): _171.Coin;
      };
      DecCoin: {
        encode(message: _171.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DecCoin;
        fromJSON(object: any): _171.DecCoin;
        toJSON(message: _171.DecCoin): unknown;
        fromPartial(object: { denom?: string; amount?: string }): _171.DecCoin;
      };
      IntProto: {
        encode(message: _171.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.IntProto;
        fromJSON(object: any): _171.IntProto;
        toJSON(message: _171.IntProto): unknown;
        fromPartial(object: { int?: string }): _171.IntProto;
      };
      DecProto: {
        encode(message: _171.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DecProto;
        fromJSON(object: any): _171.DecProto;
        toJSON(message: _171.DecProto): unknown;
        fromPartial(object: { dec?: string }): _171.DecProto;
      };
    };
  }
  namespace capability {
    const v1beta1: {
      GenesisOwners: {
        encode(
          message: _173.GenesisOwners,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GenesisOwners;
        fromJSON(object: any): _173.GenesisOwners;
        toJSON(message: _173.GenesisOwners): unknown;
        fromPartial(object: {
          index?: any;
          indexOwners?: {
            owners?: {
              module?: string;
              name?: string;
            }[];
          };
        }): _173.GenesisOwners;
      };
      GenesisState: {
        encode(message: _173.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GenesisState;
        fromJSON(object: any): _173.GenesisState;
        toJSON(message: _173.GenesisState): unknown;
        fromPartial(object: {
          index?: any;
          owners?: {
            index?: any;
            indexOwners?: {
              owners?: {
                module?: string;
                name?: string;
              }[];
            };
          }[];
        }): _173.GenesisState;
      };
      Capability: {
        encode(message: _172.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Capability;
        fromJSON(object: any): _172.Capability;
        toJSON(message: _172.Capability): unknown;
        fromPartial(object: { index?: any }): _172.Capability;
      };
      Owner: {
        encode(message: _172.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Owner;
        fromJSON(object: any): _172.Owner;
        toJSON(message: _172.Owner): unknown;
        fromPartial(object: { module?: string; name?: string }): _172.Owner;
      };
      CapabilityOwners: {
        encode(
          message: _172.CapabilityOwners,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.CapabilityOwners;
        fromJSON(object: any): _172.CapabilityOwners;
        toJSON(message: _172.CapabilityOwners): unknown;
        fromPartial(object: {
          owners?: {
            module?: string;
            name?: string;
          }[];
        }): _172.CapabilityOwners;
      };
    };
  }
  namespace crisis {
    const v1beta1: {
      MsgClientImpl: typeof _298.MsgClientImpl;
      MsgVerifyInvariant: {
        encode(
          message: _175.MsgVerifyInvariant,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgVerifyInvariant;
        fromJSON(object: any): _175.MsgVerifyInvariant;
        toJSON(message: _175.MsgVerifyInvariant): unknown;
        fromPartial(object: {
          sender?: string;
          invariantModuleName?: string;
          invariantRoute?: string;
        }): _175.MsgVerifyInvariant;
      };
      MsgVerifyInvariantResponse: {
        encode(
          _: _175.MsgVerifyInvariantResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _175.MsgVerifyInvariantResponse;
        fromJSON(_: any): _175.MsgVerifyInvariantResponse;
        toJSON(_: _175.MsgVerifyInvariantResponse): unknown;
        fromPartial(_: {}): _175.MsgVerifyInvariantResponse;
      };
      GenesisState: {
        encode(message: _174.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.GenesisState;
        fromJSON(object: any): _174.GenesisState;
        toJSON(message: _174.GenesisState): unknown;
        fromPartial(object: {
          constantFee?: {
            denom?: string;
            amount?: string;
          };
        }): _174.GenesisState;
      };
    };
  }
  namespace crypto {
    const ed25519: {
      PubKey: {
        encode(message: _176.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PubKey;
        fromJSON(object: any): _176.PubKey;
        toJSON(message: _176.PubKey): unknown;
        fromPartial(object: { key?: Uint8Array }): _176.PubKey;
      };
      PrivKey: {
        encode(message: _176.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PrivKey;
        fromJSON(object: any): _176.PrivKey;
        toJSON(message: _176.PrivKey): unknown;
        fromPartial(object: { key?: Uint8Array }): _176.PrivKey;
      };
    };
    const multisig: {
      LegacyAminoPubKey: {
        encode(
          message: _177.LegacyAminoPubKey,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.LegacyAminoPubKey;
        fromJSON(object: any): _177.LegacyAminoPubKey;
        toJSON(message: _177.LegacyAminoPubKey): unknown;
        fromPartial(object: {
          threshold?: number;
          publicKeys?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
        }): _177.LegacyAminoPubKey;
      };
    };
    const secp256k1: {
      PubKey: {
        encode(message: _178.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.PubKey;
        fromJSON(object: any): _178.PubKey;
        toJSON(message: _178.PubKey): unknown;
        fromPartial(object: { key?: Uint8Array }): _178.PubKey;
      };
      PrivKey: {
        encode(message: _178.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.PrivKey;
        fromJSON(object: any): _178.PrivKey;
        toJSON(message: _178.PrivKey): unknown;
        fromPartial(object: { key?: Uint8Array }): _178.PrivKey;
      };
    };
    const secp256r1: {
      PubKey: {
        encode(message: _179.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PubKey;
        fromJSON(object: any): _179.PubKey;
        toJSON(message: _179.PubKey): unknown;
        fromPartial(object: { key?: Uint8Array }): _179.PubKey;
      };
      PrivKey: {
        encode(message: _179.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PrivKey;
        fromJSON(object: any): _179.PrivKey;
        toJSON(message: _179.PrivKey): unknown;
        fromPartial(object: { secret?: Uint8Array }): _179.PrivKey;
      };
    };
  }
  namespace distribution {
    const v1beta1: {
      MsgClientImpl: typeof _299.MsgClientImpl;
      QueryClientImpl: typeof _286.QueryClientImpl;
      MsgSetWithdrawAddress: {
        encode(
          message: _183.MsgSetWithdrawAddress,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgSetWithdrawAddress;
        fromJSON(object: any): _183.MsgSetWithdrawAddress;
        toJSON(message: _183.MsgSetWithdrawAddress): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          withdrawAddress?: string;
        }): _183.MsgSetWithdrawAddress;
      };
      MsgSetWithdrawAddressResponse: {
        encode(
          _: _183.MsgSetWithdrawAddressResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _183.MsgSetWithdrawAddressResponse;
        fromJSON(_: any): _183.MsgSetWithdrawAddressResponse;
        toJSON(_: _183.MsgSetWithdrawAddressResponse): unknown;
        fromPartial(_: {}): _183.MsgSetWithdrawAddressResponse;
      };
      MsgWithdrawDelegatorReward: {
        encode(
          message: _183.MsgWithdrawDelegatorReward,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _183.MsgWithdrawDelegatorReward;
        fromJSON(object: any): _183.MsgWithdrawDelegatorReward;
        toJSON(message: _183.MsgWithdrawDelegatorReward): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
        }): _183.MsgWithdrawDelegatorReward;
      };
      MsgWithdrawDelegatorRewardResponse: {
        encode(
          _: _183.MsgWithdrawDelegatorRewardResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _183.MsgWithdrawDelegatorRewardResponse;
        fromJSON(_: any): _183.MsgWithdrawDelegatorRewardResponse;
        toJSON(_: _183.MsgWithdrawDelegatorRewardResponse): unknown;
        fromPartial(_: {}): _183.MsgWithdrawDelegatorRewardResponse;
      };
      MsgWithdrawValidatorCommission: {
        encode(
          message: _183.MsgWithdrawValidatorCommission,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _183.MsgWithdrawValidatorCommission;
        fromJSON(object: any): _183.MsgWithdrawValidatorCommission;
        toJSON(message: _183.MsgWithdrawValidatorCommission): unknown;
        fromPartial(object: { validatorAddress?: string }): _183.MsgWithdrawValidatorCommission;
      };
      MsgWithdrawValidatorCommissionResponse: {
        encode(
          _: _183.MsgWithdrawValidatorCommissionResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _183.MsgWithdrawValidatorCommissionResponse;
        fromJSON(_: any): _183.MsgWithdrawValidatorCommissionResponse;
        toJSON(_: _183.MsgWithdrawValidatorCommissionResponse): unknown;
        fromPartial(_: {}): _183.MsgWithdrawValidatorCommissionResponse;
      };
      MsgFundCommunityPool: {
        encode(
          message: _183.MsgFundCommunityPool,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgFundCommunityPool;
        fromJSON(object: any): _183.MsgFundCommunityPool;
        toJSON(message: _183.MsgFundCommunityPool): unknown;
        fromPartial(object: {
          amount?: {
            denom?: string;
            amount?: string;
          }[];
          depositor?: string;
        }): _183.MsgFundCommunityPool;
      };
      MsgFundCommunityPoolResponse: {
        encode(
          _: _183.MsgFundCommunityPoolResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _183.MsgFundCommunityPoolResponse;
        fromJSON(_: any): _183.MsgFundCommunityPoolResponse;
        toJSON(_: _183.MsgFundCommunityPoolResponse): unknown;
        fromPartial(_: {}): _183.MsgFundCommunityPoolResponse;
      };
      QueryParamsRequest: {
        encode(_: _182.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsRequest;
        fromJSON(_: any): _182.QueryParamsRequest;
        toJSON(_: _182.QueryParamsRequest): unknown;
        fromPartial(_: {}): _182.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _182.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsResponse;
        fromJSON(object: any): _182.QueryParamsResponse;
        toJSON(message: _182.QueryParamsResponse): unknown;
        fromPartial(object: {
          params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
          };
        }): _182.QueryParamsResponse;
      };
      QueryValidatorOutstandingRewardsRequest: {
        encode(
          message: _182.QueryValidatorOutstandingRewardsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryValidatorOutstandingRewardsRequest;
        fromJSON(object: any): _182.QueryValidatorOutstandingRewardsRequest;
        toJSON(message: _182.QueryValidatorOutstandingRewardsRequest): unknown;
        fromPartial(object: { validatorAddress?: string }): _182.QueryValidatorOutstandingRewardsRequest;
      };
      QueryValidatorOutstandingRewardsResponse: {
        encode(
          message: _182.QueryValidatorOutstandingRewardsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryValidatorOutstandingRewardsResponse;
        fromJSON(object: any): _182.QueryValidatorOutstandingRewardsResponse;
        toJSON(message: _182.QueryValidatorOutstandingRewardsResponse): unknown;
        fromPartial(object: {
          rewards?: {
            rewards?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }): _182.QueryValidatorOutstandingRewardsResponse;
      };
      QueryValidatorCommissionRequest: {
        encode(
          message: _182.QueryValidatorCommissionRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryValidatorCommissionRequest;
        fromJSON(object: any): _182.QueryValidatorCommissionRequest;
        toJSON(message: _182.QueryValidatorCommissionRequest): unknown;
        fromPartial(object: { validatorAddress?: string }): _182.QueryValidatorCommissionRequest;
      };
      QueryValidatorCommissionResponse: {
        encode(
          message: _182.QueryValidatorCommissionResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryValidatorCommissionResponse;
        fromJSON(object: any): _182.QueryValidatorCommissionResponse;
        toJSON(message: _182.QueryValidatorCommissionResponse): unknown;
        fromPartial(object: {
          commission?: {
            commission?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }): _182.QueryValidatorCommissionResponse;
      };
      QueryValidatorSlashesRequest: {
        encode(
          message: _182.QueryValidatorSlashesRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryValidatorSlashesRequest;
        fromJSON(object: any): _182.QueryValidatorSlashesRequest;
        toJSON(message: _182.QueryValidatorSlashesRequest): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          startingHeight?: any;
          endingHeight?: any;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _182.QueryValidatorSlashesRequest;
      };
      QueryValidatorSlashesResponse: {
        encode(
          message: _182.QueryValidatorSlashesResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryValidatorSlashesResponse;
        fromJSON(object: any): _182.QueryValidatorSlashesResponse;
        toJSON(message: _182.QueryValidatorSlashesResponse): unknown;
        fromPartial(object: {
          slashes?: {
            validatorPeriod?: any;
            fraction?: string;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _182.QueryValidatorSlashesResponse;
      };
      QueryDelegationRewardsRequest: {
        encode(
          message: _182.QueryDelegationRewardsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegationRewardsRequest;
        fromJSON(object: any): _182.QueryDelegationRewardsRequest;
        toJSON(message: _182.QueryDelegationRewardsRequest): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
        }): _182.QueryDelegationRewardsRequest;
      };
      QueryDelegationRewardsResponse: {
        encode(
          message: _182.QueryDelegationRewardsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegationRewardsResponse;
        fromJSON(object: any): _182.QueryDelegationRewardsResponse;
        toJSON(message: _182.QueryDelegationRewardsResponse): unknown;
        fromPartial(object: {
          rewards?: {
            denom?: string;
            amount?: string;
          }[];
        }): _182.QueryDelegationRewardsResponse;
      };
      QueryDelegationTotalRewardsRequest: {
        encode(
          message: _182.QueryDelegationTotalRewardsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegationTotalRewardsRequest;
        fromJSON(object: any): _182.QueryDelegationTotalRewardsRequest;
        toJSON(message: _182.QueryDelegationTotalRewardsRequest): unknown;
        fromPartial(object: { delegatorAddress?: string }): _182.QueryDelegationTotalRewardsRequest;
      };
      QueryDelegationTotalRewardsResponse: {
        encode(
          message: _182.QueryDelegationTotalRewardsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegationTotalRewardsResponse;
        fromJSON(object: any): _182.QueryDelegationTotalRewardsResponse;
        toJSON(message: _182.QueryDelegationTotalRewardsResponse): unknown;
        fromPartial(object: {
          rewards?: {
            validatorAddress?: string;
            reward?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
          total?: {
            denom?: string;
            amount?: string;
          }[];
        }): _182.QueryDelegationTotalRewardsResponse;
      };
      QueryDelegatorValidatorsRequest: {
        encode(
          message: _182.QueryDelegatorValidatorsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegatorValidatorsRequest;
        fromJSON(object: any): _182.QueryDelegatorValidatorsRequest;
        toJSON(message: _182.QueryDelegatorValidatorsRequest): unknown;
        fromPartial(object: { delegatorAddress?: string }): _182.QueryDelegatorValidatorsRequest;
      };
      QueryDelegatorValidatorsResponse: {
        encode(
          message: _182.QueryDelegatorValidatorsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegatorValidatorsResponse;
        fromJSON(object: any): _182.QueryDelegatorValidatorsResponse;
        toJSON(message: _182.QueryDelegatorValidatorsResponse): unknown;
        fromPartial(object: { validators?: string[] }): _182.QueryDelegatorValidatorsResponse;
      };
      QueryDelegatorWithdrawAddressRequest: {
        encode(
          message: _182.QueryDelegatorWithdrawAddressRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegatorWithdrawAddressRequest;
        fromJSON(object: any): _182.QueryDelegatorWithdrawAddressRequest;
        toJSON(message: _182.QueryDelegatorWithdrawAddressRequest): unknown;
        fromPartial(object: { delegatorAddress?: string }): _182.QueryDelegatorWithdrawAddressRequest;
      };
      QueryDelegatorWithdrawAddressResponse: {
        encode(
          message: _182.QueryDelegatorWithdrawAddressResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryDelegatorWithdrawAddressResponse;
        fromJSON(object: any): _182.QueryDelegatorWithdrawAddressResponse;
        toJSON(message: _182.QueryDelegatorWithdrawAddressResponse): unknown;
        fromPartial(object: { withdrawAddress?: string }): _182.QueryDelegatorWithdrawAddressResponse;
      };
      QueryCommunityPoolRequest: {
        encode(
          _: _182.QueryCommunityPoolRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryCommunityPoolRequest;
        fromJSON(_: any): _182.QueryCommunityPoolRequest;
        toJSON(_: _182.QueryCommunityPoolRequest): unknown;
        fromPartial(_: {}): _182.QueryCommunityPoolRequest;
      };
      QueryCommunityPoolResponse: {
        encode(
          message: _182.QueryCommunityPoolResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _182.QueryCommunityPoolResponse;
        fromJSON(object: any): _182.QueryCommunityPoolResponse;
        toJSON(message: _182.QueryCommunityPoolResponse): unknown;
        fromPartial(object: {
          pool?: {
            denom?: string;
            amount?: string;
          }[];
        }): _182.QueryCommunityPoolResponse;
      };
      DelegatorWithdrawInfo: {
        encode(
          message: _181.DelegatorWithdrawInfo,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DelegatorWithdrawInfo;
        fromJSON(object: any): _181.DelegatorWithdrawInfo;
        toJSON(message: _181.DelegatorWithdrawInfo): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          withdrawAddress?: string;
        }): _181.DelegatorWithdrawInfo;
      };
      ValidatorOutstandingRewardsRecord: {
        encode(
          message: _181.ValidatorOutstandingRewardsRecord,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _181.ValidatorOutstandingRewardsRecord;
        fromJSON(object: any): _181.ValidatorOutstandingRewardsRecord;
        toJSON(message: _181.ValidatorOutstandingRewardsRecord): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          outstandingRewards?: {
            denom?: string;
            amount?: string;
          }[];
        }): _181.ValidatorOutstandingRewardsRecord;
      };
      ValidatorAccumulatedCommissionRecord: {
        encode(
          message: _181.ValidatorAccumulatedCommissionRecord,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _181.ValidatorAccumulatedCommissionRecord;
        fromJSON(object: any): _181.ValidatorAccumulatedCommissionRecord;
        toJSON(message: _181.ValidatorAccumulatedCommissionRecord): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          accumulated?: {
            commission?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }): _181.ValidatorAccumulatedCommissionRecord;
      };
      ValidatorHistoricalRewardsRecord: {
        encode(
          message: _181.ValidatorHistoricalRewardsRecord,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _181.ValidatorHistoricalRewardsRecord;
        fromJSON(object: any): _181.ValidatorHistoricalRewardsRecord;
        toJSON(message: _181.ValidatorHistoricalRewardsRecord): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          period?: any;
          rewards?: {
            cumulativeRewardRatio?: {
              denom?: string;
              amount?: string;
            }[];
            referenceCount?: number;
          };
        }): _181.ValidatorHistoricalRewardsRecord;
      };
      ValidatorCurrentRewardsRecord: {
        encode(
          message: _181.ValidatorCurrentRewardsRecord,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _181.ValidatorCurrentRewardsRecord;
        fromJSON(object: any): _181.ValidatorCurrentRewardsRecord;
        toJSON(message: _181.ValidatorCurrentRewardsRecord): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          rewards?: {
            rewards?: {
              denom?: string;
              amount?: string;
            }[];
            period?: any;
          };
        }): _181.ValidatorCurrentRewardsRecord;
      };
      DelegatorStartingInfoRecord: {
        encode(
          message: _181.DelegatorStartingInfoRecord,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _181.DelegatorStartingInfoRecord;
        fromJSON(object: any): _181.DelegatorStartingInfoRecord;
        toJSON(message: _181.DelegatorStartingInfoRecord): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
          startingInfo?: {
            previousPeriod?: any;
            stake?: string;
            height?: any;
          };
        }): _181.DelegatorStartingInfoRecord;
      };
      ValidatorSlashEventRecord: {
        encode(
          message: _181.ValidatorSlashEventRecord,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _181.ValidatorSlashEventRecord;
        fromJSON(object: any): _181.ValidatorSlashEventRecord;
        toJSON(message: _181.ValidatorSlashEventRecord): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          height?: any;
          period?: any;
          validatorSlashEvent?: {
            validatorPeriod?: any;
            fraction?: string;
          };
        }): _181.ValidatorSlashEventRecord;
      };
      GenesisState: {
        encode(message: _181.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.GenesisState;
        fromJSON(object: any): _181.GenesisState;
        toJSON(message: _181.GenesisState): unknown;
        fromPartial(object: {
          params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
          };
          feePool?: {
            communityPool?: {
              denom?: string;
              amount?: string;
            }[];
          };
          delegatorWithdrawInfos?: {
            delegatorAddress?: string;
            withdrawAddress?: string;
          }[];
          previousProposer?: string;
          outstandingRewards?: {
            validatorAddress?: string;
            outstandingRewards?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
          validatorAccumulatedCommissions?: {
            validatorAddress?: string;
            accumulated?: {
              commission?: {
                denom?: string;
                amount?: string;
              }[];
            };
          }[];
          validatorHistoricalRewards?: {
            validatorAddress?: string;
            period?: any;
            rewards?: {
              cumulativeRewardRatio?: {
                denom?: string;
                amount?: string;
              }[];
              referenceCount?: number;
            };
          }[];
          validatorCurrentRewards?: {
            validatorAddress?: string;
            rewards?: {
              rewards?: {
                denom?: string;
                amount?: string;
              }[];
              period?: any;
            };
          }[];
          delegatorStartingInfos?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            startingInfo?: {
              previousPeriod?: any;
              stake?: string;
              height?: any;
            };
          }[];
          validatorSlashEvents?: {
            validatorAddress?: string;
            height?: any;
            period?: any;
            validatorSlashEvent?: {
              validatorPeriod?: any;
              fraction?: string;
            };
          }[];
        }): _181.GenesisState;
      };
      Params: {
        encode(message: _180.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Params;
        fromJSON(object: any): _180.Params;
        toJSON(message: _180.Params): unknown;
        fromPartial(object: {
          communityTax?: string;
          baseProposerReward?: string;
          bonusProposerReward?: string;
          withdrawAddrEnabled?: boolean;
        }): _180.Params;
      };
      ValidatorHistoricalRewards: {
        encode(
          message: _180.ValidatorHistoricalRewards,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.ValidatorHistoricalRewards;
        fromJSON(object: any): _180.ValidatorHistoricalRewards;
        toJSON(message: _180.ValidatorHistoricalRewards): unknown;
        fromPartial(object: {
          cumulativeRewardRatio?: {
            denom?: string;
            amount?: string;
          }[];
          referenceCount?: number;
        }): _180.ValidatorHistoricalRewards;
      };
      ValidatorCurrentRewards: {
        encode(
          message: _180.ValidatorCurrentRewards,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.ValidatorCurrentRewards;
        fromJSON(object: any): _180.ValidatorCurrentRewards;
        toJSON(message: _180.ValidatorCurrentRewards): unknown;
        fromPartial(object: {
          rewards?: {
            denom?: string;
            amount?: string;
          }[];
          period?: any;
        }): _180.ValidatorCurrentRewards;
      };
      ValidatorAccumulatedCommission: {
        encode(
          message: _180.ValidatorAccumulatedCommission,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.ValidatorAccumulatedCommission;
        fromJSON(object: any): _180.ValidatorAccumulatedCommission;
        toJSON(message: _180.ValidatorAccumulatedCommission): unknown;
        fromPartial(object: {
          commission?: {
            denom?: string;
            amount?: string;
          }[];
        }): _180.ValidatorAccumulatedCommission;
      };
      ValidatorOutstandingRewards: {
        encode(
          message: _180.ValidatorOutstandingRewards,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.ValidatorOutstandingRewards;
        fromJSON(object: any): _180.ValidatorOutstandingRewards;
        toJSON(message: _180.ValidatorOutstandingRewards): unknown;
        fromPartial(object: {
          rewards?: {
            denom?: string;
            amount?: string;
          }[];
        }): _180.ValidatorOutstandingRewards;
      };
      ValidatorSlashEvent: {
        encode(
          message: _180.ValidatorSlashEvent,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ValidatorSlashEvent;
        fromJSON(object: any): _180.ValidatorSlashEvent;
        toJSON(message: _180.ValidatorSlashEvent): unknown;
        fromPartial(object: { validatorPeriod?: any; fraction?: string }): _180.ValidatorSlashEvent;
      };
      ValidatorSlashEvents: {
        encode(
          message: _180.ValidatorSlashEvents,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ValidatorSlashEvents;
        fromJSON(object: any): _180.ValidatorSlashEvents;
        toJSON(message: _180.ValidatorSlashEvents): unknown;
        fromPartial(object: {
          validatorSlashEvents?: {
            validatorPeriod?: any;
            fraction?: string;
          }[];
        }): _180.ValidatorSlashEvents;
      };
      FeePool: {
        encode(message: _180.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.FeePool;
        fromJSON(object: any): _180.FeePool;
        toJSON(message: _180.FeePool): unknown;
        fromPartial(object: {
          communityPool?: {
            denom?: string;
            amount?: string;
          }[];
        }): _180.FeePool;
      };
      CommunityPoolSpendProposal: {
        encode(
          message: _180.CommunityPoolSpendProposal,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.CommunityPoolSpendProposal;
        fromJSON(object: any): _180.CommunityPoolSpendProposal;
        toJSON(message: _180.CommunityPoolSpendProposal): unknown;
        fromPartial(object: {
          title?: string;
          description?: string;
          recipient?: string;
          amount?: {
            denom?: string;
            amount?: string;
          }[];
        }): _180.CommunityPoolSpendProposal;
      };
      DelegatorStartingInfo: {
        encode(
          message: _180.DelegatorStartingInfo,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.DelegatorStartingInfo;
        fromJSON(object: any): _180.DelegatorStartingInfo;
        toJSON(message: _180.DelegatorStartingInfo): unknown;
        fromPartial(object: {
          previousPeriod?: any;
          stake?: string;
          height?: any;
        }): _180.DelegatorStartingInfo;
      };
      DelegationDelegatorReward: {
        encode(
          message: _180.DelegationDelegatorReward,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.DelegationDelegatorReward;
        fromJSON(object: any): _180.DelegationDelegatorReward;
        toJSON(message: _180.DelegationDelegatorReward): unknown;
        fromPartial(object: {
          validatorAddress?: string;
          reward?: {
            denom?: string;
            amount?: string;
          }[];
        }): _180.DelegationDelegatorReward;
      };
      CommunityPoolSpendProposalWithDeposit: {
        encode(
          message: _180.CommunityPoolSpendProposalWithDeposit,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _180.CommunityPoolSpendProposalWithDeposit;
        fromJSON(object: any): _180.CommunityPoolSpendProposalWithDeposit;
        toJSON(message: _180.CommunityPoolSpendProposalWithDeposit): unknown;
        fromPartial(object: {
          title?: string;
          description?: string;
          recipient?: string;
          amount?: string;
          deposit?: string;
        }): _180.CommunityPoolSpendProposalWithDeposit;
      };
    };
  }
  namespace evidence {
    const v1beta1: {
      MsgClientImpl: typeof _300.MsgClientImpl;
      QueryClientImpl: typeof _287.QueryClientImpl;
      MsgSubmitEvidence: {
        encode(
          message: _187.MsgSubmitEvidence,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MsgSubmitEvidence;
        fromJSON(object: any): _187.MsgSubmitEvidence;
        toJSON(message: _187.MsgSubmitEvidence): unknown;
        fromPartial(object: {
          submitter?: string;
          evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
        }): _187.MsgSubmitEvidence;
      };
      MsgSubmitEvidenceResponse: {
        encode(
          message: _187.MsgSubmitEvidenceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _187.MsgSubmitEvidenceResponse;
        fromJSON(object: any): _187.MsgSubmitEvidenceResponse;
        toJSON(message: _187.MsgSubmitEvidenceResponse): unknown;
        fromPartial(object: { hash?: Uint8Array }): _187.MsgSubmitEvidenceResponse;
      };
      QueryEvidenceRequest: {
        encode(
          message: _186.QueryEvidenceRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryEvidenceRequest;
        fromJSON(object: any): _186.QueryEvidenceRequest;
        toJSON(message: _186.QueryEvidenceRequest): unknown;
        fromPartial(object: { evidenceHash?: Uint8Array }): _186.QueryEvidenceRequest;
      };
      QueryEvidenceResponse: {
        encode(
          message: _186.QueryEvidenceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryEvidenceResponse;
        fromJSON(object: any): _186.QueryEvidenceResponse;
        toJSON(message: _186.QueryEvidenceResponse): unknown;
        fromPartial(object: {
          evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
        }): _186.QueryEvidenceResponse;
      };
      QueryAllEvidenceRequest: {
        encode(
          message: _186.QueryAllEvidenceRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _186.QueryAllEvidenceRequest;
        fromJSON(object: any): _186.QueryAllEvidenceRequest;
        toJSON(message: _186.QueryAllEvidenceRequest): unknown;
        fromPartial(object: {
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _186.QueryAllEvidenceRequest;
      };
      QueryAllEvidenceResponse: {
        encode(
          message: _186.QueryAllEvidenceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _186.QueryAllEvidenceResponse;
        fromJSON(object: any): _186.QueryAllEvidenceResponse;
        toJSON(message: _186.QueryAllEvidenceResponse): unknown;
        fromPartial(object: {
          evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _186.QueryAllEvidenceResponse;
      };
      GenesisState: {
        encode(message: _185.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.GenesisState;
        fromJSON(object: any): _185.GenesisState;
        toJSON(message: _185.GenesisState): unknown;
        fromPartial(object: {
          evidence?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
        }): _185.GenesisState;
      };
      Equivocation: {
        encode(message: _184.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Equivocation;
        fromJSON(object: any): _184.Equivocation;
        toJSON(message: _184.Equivocation): unknown;
        fromPartial(object: {
          height?: any;
          time?: Date;
          power?: any;
          consensusAddress?: string;
        }): _184.Equivocation;
      };
    };
  }
  namespace feegrant {
    const v1beta1: {
      MsgClientImpl: typeof _301.MsgClientImpl;
      QueryClientImpl: typeof _288.QueryClientImpl;
      MsgGrantAllowance: {
        encode(
          message: _191.MsgGrantAllowance,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgGrantAllowance;
        fromJSON(object: any): _191.MsgGrantAllowance;
        toJSON(message: _191.MsgGrantAllowance): unknown;
        fromPartial(object: {
          granter?: string;
          grantee?: string;
          allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
        }): _191.MsgGrantAllowance;
      };
      MsgGrantAllowanceResponse: {
        encode(
          _: _191.MsgGrantAllowanceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _191.MsgGrantAllowanceResponse;
        fromJSON(_: any): _191.MsgGrantAllowanceResponse;
        toJSON(_: _191.MsgGrantAllowanceResponse): unknown;
        fromPartial(_: {}): _191.MsgGrantAllowanceResponse;
      };
      MsgRevokeAllowance: {
        encode(
          message: _191.MsgRevokeAllowance,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.MsgRevokeAllowance;
        fromJSON(object: any): _191.MsgRevokeAllowance;
        toJSON(message: _191.MsgRevokeAllowance): unknown;
        fromPartial(object: { granter?: string; grantee?: string }): _191.MsgRevokeAllowance;
      };
      MsgRevokeAllowanceResponse: {
        encode(
          _: _191.MsgRevokeAllowanceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _191.MsgRevokeAllowanceResponse;
        fromJSON(_: any): _191.MsgRevokeAllowanceResponse;
        toJSON(_: _191.MsgRevokeAllowanceResponse): unknown;
        fromPartial(_: {}): _191.MsgRevokeAllowanceResponse;
      };
      QueryAllowanceRequest: {
        encode(
          message: _190.QueryAllowanceRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAllowanceRequest;
        fromJSON(object: any): _190.QueryAllowanceRequest;
        toJSON(message: _190.QueryAllowanceRequest): unknown;
        fromPartial(object: { granter?: string; grantee?: string }): _190.QueryAllowanceRequest;
      };
      QueryAllowanceResponse: {
        encode(
          message: _190.QueryAllowanceResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAllowanceResponse;
        fromJSON(object: any): _190.QueryAllowanceResponse;
        toJSON(message: _190.QueryAllowanceResponse): unknown;
        fromPartial(object: {
          allowance?: {
            granter?: string;
            grantee?: string;
            allowance?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          };
        }): _190.QueryAllowanceResponse;
      };
      QueryAllowancesRequest: {
        encode(
          message: _190.QueryAllowancesRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAllowancesRequest;
        fromJSON(object: any): _190.QueryAllowancesRequest;
        toJSON(message: _190.QueryAllowancesRequest): unknown;
        fromPartial(object: {
          grantee?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _190.QueryAllowancesRequest;
      };
      QueryAllowancesResponse: {
        encode(
          message: _190.QueryAllowancesResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _190.QueryAllowancesResponse;
        fromJSON(object: any): _190.QueryAllowancesResponse;
        toJSON(message: _190.QueryAllowancesResponse): unknown;
        fromPartial(object: {
          allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _190.QueryAllowancesResponse;
      };
      GenesisState: {
        encode(message: _189.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.GenesisState;
        fromJSON(object: any): _189.GenesisState;
        toJSON(message: _189.GenesisState): unknown;
        fromPartial(object: {
          allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
          }[];
        }): _189.GenesisState;
      };
      BasicAllowance: {
        encode(
          message: _188.BasicAllowance,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.BasicAllowance;
        fromJSON(object: any): _188.BasicAllowance;
        toJSON(message: _188.BasicAllowance): unknown;
        fromPartial(object: {
          spendLimit?: {
            denom?: string;
            amount?: string;
          }[];
          expiration?: Date;
        }): _188.BasicAllowance;
      };
      PeriodicAllowance: {
        encode(
          message: _188.PeriodicAllowance,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PeriodicAllowance;
        fromJSON(object: any): _188.PeriodicAllowance;
        toJSON(message: _188.PeriodicAllowance): unknown;
        fromPartial(object: {
          basic?: {
            spendLimit?: {
              denom?: string;
              amount?: string;
            }[];
            expiration?: Date;
          };
          period?: {
            seconds?: any;
            nanos?: number;
          };
          periodSpendLimit?: {
            denom?: string;
            amount?: string;
          }[];
          periodCanSpend?: {
            denom?: string;
            amount?: string;
          }[];
          periodReset?: Date;
        }): _188.PeriodicAllowance;
      };
      AllowedMsgAllowance: {
        encode(
          message: _188.AllowedMsgAllowance,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.AllowedMsgAllowance;
        fromJSON(object: any): _188.AllowedMsgAllowance;
        toJSON(message: _188.AllowedMsgAllowance): unknown;
        fromPartial(object: {
          allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          allowedMessages?: string[];
        }): _188.AllowedMsgAllowance;
      };
      Grant: {
        encode(message: _188.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Grant;
        fromJSON(object: any): _188.Grant;
        toJSON(message: _188.Grant): unknown;
        fromPartial(object: {
          granter?: string;
          grantee?: string;
          allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
        }): _188.Grant;
      };
    };
  }
  namespace genutil {
    const v1beta1: {
      GenesisState: {
        encode(message: _192.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.GenesisState;
        fromJSON(object: any): _192.GenesisState;
        toJSON(message: _192.GenesisState): unknown;
        fromPartial(object: { genTxs?: Uint8Array[] }): _192.GenesisState;
      };
    };
  }
  namespace gov {
    const v1beta1: {
      MsgClientImpl: typeof _302.MsgClientImpl;
      QueryClientImpl: typeof _289.QueryClientImpl;
      MsgSubmitProposal: {
        encode(
          message: _196.MsgSubmitProposal,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgSubmitProposal;
        fromJSON(object: any): _196.MsgSubmitProposal;
        toJSON(message: _196.MsgSubmitProposal): unknown;
        fromPartial(object: {
          content?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          initialDeposit?: {
            denom?: string;
            amount?: string;
          }[];
          proposer?: string;
        }): _196.MsgSubmitProposal;
      };
      MsgSubmitProposalResponse: {
        encode(
          message: _196.MsgSubmitProposalResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _196.MsgSubmitProposalResponse;
        fromJSON(object: any): _196.MsgSubmitProposalResponse;
        toJSON(message: _196.MsgSubmitProposalResponse): unknown;
        fromPartial(object: { proposalId?: any }): _196.MsgSubmitProposalResponse;
      };
      MsgVote: {
        encode(message: _196.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgVote;
        fromJSON(object: any): _196.MsgVote;
        toJSON(message: _196.MsgVote): unknown;
        fromPartial(object: { proposalId?: any; voter?: string; option?: _194.VoteOption }): _196.MsgVote;
      };
      MsgVoteResponse: {
        encode(_: _196.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgVoteResponse;
        fromJSON(_: any): _196.MsgVoteResponse;
        toJSON(_: _196.MsgVoteResponse): unknown;
        fromPartial(_: {}): _196.MsgVoteResponse;
      };
      MsgVoteWeighted: {
        encode(
          message: _196.MsgVoteWeighted,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgVoteWeighted;
        fromJSON(object: any): _196.MsgVoteWeighted;
        toJSON(message: _196.MsgVoteWeighted): unknown;
        fromPartial(object: {
          proposalId?: any;
          voter?: string;
          options?: {
            option?: _194.VoteOption;
            weight?: string;
          }[];
        }): _196.MsgVoteWeighted;
      };
      MsgVoteWeightedResponse: {
        encode(
          _: _196.MsgVoteWeightedResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _196.MsgVoteWeightedResponse;
        fromJSON(_: any): _196.MsgVoteWeightedResponse;
        toJSON(_: _196.MsgVoteWeightedResponse): unknown;
        fromPartial(_: {}): _196.MsgVoteWeightedResponse;
      };
      MsgDeposit: {
        encode(message: _196.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgDeposit;
        fromJSON(object: any): _196.MsgDeposit;
        toJSON(message: _196.MsgDeposit): unknown;
        fromPartial(object: {
          proposalId?: any;
          depositor?: string;
          amount?: {
            denom?: string;
            amount?: string;
          }[];
        }): _196.MsgDeposit;
      };
      MsgDepositResponse: {
        encode(_: _196.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MsgDepositResponse;
        fromJSON(_: any): _196.MsgDepositResponse;
        toJSON(_: _196.MsgDepositResponse): unknown;
        fromPartial(_: {}): _196.MsgDepositResponse;
      };
      QueryProposalRequest: {
        encode(
          message: _195.QueryProposalRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryProposalRequest;
        fromJSON(object: any): _195.QueryProposalRequest;
        toJSON(message: _195.QueryProposalRequest): unknown;
        fromPartial(object: { proposalId?: any }): _195.QueryProposalRequest;
      };
      QueryProposalResponse: {
        encode(
          message: _195.QueryProposalResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryProposalResponse;
        fromJSON(object: any): _195.QueryProposalResponse;
        toJSON(message: _195.QueryProposalResponse): unknown;
        fromPartial(object: {
          proposal?: {
            proposalId?: any;
            content?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            status?: _194.ProposalStatus;
            finalTallyResult?: {
              yes?: string;
              abstain?: string;
              no?: string;
              noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
              denom?: string;
              amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
          };
        }): _195.QueryProposalResponse;
      };
      QueryProposalsRequest: {
        encode(
          message: _195.QueryProposalsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryProposalsRequest;
        fromJSON(object: any): _195.QueryProposalsRequest;
        toJSON(message: _195.QueryProposalsRequest): unknown;
        fromPartial(object: {
          proposalStatus?: _194.ProposalStatus;
          voter?: string;
          depositor?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _195.QueryProposalsRequest;
      };
      QueryProposalsResponse: {
        encode(
          message: _195.QueryProposalsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryProposalsResponse;
        fromJSON(object: any): _195.QueryProposalsResponse;
        toJSON(message: _195.QueryProposalsResponse): unknown;
        fromPartial(object: {
          proposals?: {
            proposalId?: any;
            content?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            status?: _194.ProposalStatus;
            finalTallyResult?: {
              yes?: string;
              abstain?: string;
              no?: string;
              noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
              denom?: string;
              amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _195.QueryProposalsResponse;
      };
      QueryVoteRequest: {
        encode(
          message: _195.QueryVoteRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryVoteRequest;
        fromJSON(object: any): _195.QueryVoteRequest;
        toJSON(message: _195.QueryVoteRequest): unknown;
        fromPartial(object: { proposalId?: any; voter?: string }): _195.QueryVoteRequest;
      };
      QueryVoteResponse: {
        encode(
          message: _195.QueryVoteResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryVoteResponse;
        fromJSON(object: any): _195.QueryVoteResponse;
        toJSON(message: _195.QueryVoteResponse): unknown;
        fromPartial(object: {
          vote?: {
            proposalId?: any;
            voter?: string;
            option?: _194.VoteOption;
            options?: {
              option?: _194.VoteOption;
              weight?: string;
            }[];
          };
        }): _195.QueryVoteResponse;
      };
      QueryVotesRequest: {
        encode(
          message: _195.QueryVotesRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryVotesRequest;
        fromJSON(object: any): _195.QueryVotesRequest;
        toJSON(message: _195.QueryVotesRequest): unknown;
        fromPartial(object: {
          proposalId?: any;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _195.QueryVotesRequest;
      };
      QueryVotesResponse: {
        encode(
          message: _195.QueryVotesResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryVotesResponse;
        fromJSON(object: any): _195.QueryVotesResponse;
        toJSON(message: _195.QueryVotesResponse): unknown;
        fromPartial(object: {
          votes?: {
            proposalId?: any;
            voter?: string;
            option?: _194.VoteOption;
            options?: {
              option?: _194.VoteOption;
              weight?: string;
            }[];
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _195.QueryVotesResponse;
      };
      QueryParamsRequest: {
        encode(
          message: _195.QueryParamsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryParamsRequest;
        fromJSON(object: any): _195.QueryParamsRequest;
        toJSON(message: _195.QueryParamsRequest): unknown;
        fromPartial(object: { paramsType?: string }): _195.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _195.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryParamsResponse;
        fromJSON(object: any): _195.QueryParamsResponse;
        toJSON(message: _195.QueryParamsResponse): unknown;
        fromPartial(object: {
          votingParams?: {
            votingPeriod?: {
              seconds?: any;
              nanos?: number;
            };
          };
          depositParams?: {
            minDeposit?: {
              denom?: string;
              amount?: string;
            }[];
            maxDepositPeriod?: {
              seconds?: any;
              nanos?: number;
            };
          };
          tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
          };
        }): _195.QueryParamsResponse;
      };
      QueryDepositRequest: {
        encode(
          message: _195.QueryDepositRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryDepositRequest;
        fromJSON(object: any): _195.QueryDepositRequest;
        toJSON(message: _195.QueryDepositRequest): unknown;
        fromPartial(object: { proposalId?: any; depositor?: string }): _195.QueryDepositRequest;
      };
      QueryDepositResponse: {
        encode(
          message: _195.QueryDepositResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryDepositResponse;
        fromJSON(object: any): _195.QueryDepositResponse;
        toJSON(message: _195.QueryDepositResponse): unknown;
        fromPartial(object: {
          deposit?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
              denom?: string;
              amount?: string;
            }[];
          };
        }): _195.QueryDepositResponse;
      };
      QueryDepositsRequest: {
        encode(
          message: _195.QueryDepositsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryDepositsRequest;
        fromJSON(object: any): _195.QueryDepositsRequest;
        toJSON(message: _195.QueryDepositsRequest): unknown;
        fromPartial(object: {
          proposalId?: any;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _195.QueryDepositsRequest;
      };
      QueryDepositsResponse: {
        encode(
          message: _195.QueryDepositsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.QueryDepositsResponse;
        fromJSON(object: any): _195.QueryDepositsResponse;
        toJSON(message: _195.QueryDepositsResponse): unknown;
        fromPartial(object: {
          deposits?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _195.QueryDepositsResponse;
      };
      QueryTallyResultRequest: {
        encode(
          message: _195.QueryTallyResultRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _195.QueryTallyResultRequest;
        fromJSON(object: any): _195.QueryTallyResultRequest;
        toJSON(message: _195.QueryTallyResultRequest): unknown;
        fromPartial(object: { proposalId?: any }): _195.QueryTallyResultRequest;
      };
      QueryTallyResultResponse: {
        encode(
          message: _195.QueryTallyResultResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _195.QueryTallyResultResponse;
        fromJSON(object: any): _195.QueryTallyResultResponse;
        toJSON(message: _195.QueryTallyResultResponse): unknown;
        fromPartial(object: {
          tally?: {
            yes?: string;
            abstain?: string;
            no?: string;
            noWithVeto?: string;
          };
        }): _195.QueryTallyResultResponse;
      };
      voteOptionFromJSON(object: any): _194.VoteOption;
      voteOptionToJSON(object: _194.VoteOption): string;
      proposalStatusFromJSON(object: any): _194.ProposalStatus;
      proposalStatusToJSON(object: _194.ProposalStatus): string;
      VoteOption: typeof _194.VoteOption;
      ProposalStatus: typeof _194.ProposalStatus;
      WeightedVoteOption: {
        encode(
          message: _194.WeightedVoteOption,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.WeightedVoteOption;
        fromJSON(object: any): _194.WeightedVoteOption;
        toJSON(message: _194.WeightedVoteOption): unknown;
        fromPartial(object: { option?: _194.VoteOption; weight?: string }): _194.WeightedVoteOption;
      };
      TextProposal: {
        encode(message: _194.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.TextProposal;
        fromJSON(object: any): _194.TextProposal;
        toJSON(message: _194.TextProposal): unknown;
        fromPartial(object: { title?: string; description?: string }): _194.TextProposal;
      };
      Deposit: {
        encode(message: _194.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.Deposit;
        fromJSON(object: any): _194.Deposit;
        toJSON(message: _194.Deposit): unknown;
        fromPartial(object: {
          proposalId?: any;
          depositor?: string;
          amount?: {
            denom?: string;
            amount?: string;
          }[];
        }): _194.Deposit;
      };
      Proposal: {
        encode(message: _194.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.Proposal;
        fromJSON(object: any): _194.Proposal;
        toJSON(message: _194.Proposal): unknown;
        fromPartial(object: {
          proposalId?: any;
          content?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          status?: _194.ProposalStatus;
          finalTallyResult?: {
            yes?: string;
            abstain?: string;
            no?: string;
            noWithVeto?: string;
          };
          submitTime?: Date;
          depositEndTime?: Date;
          totalDeposit?: {
            denom?: string;
            amount?: string;
          }[];
          votingStartTime?: Date;
          votingEndTime?: Date;
        }): _194.Proposal;
      };
      TallyResult: {
        encode(message: _194.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.TallyResult;
        fromJSON(object: any): _194.TallyResult;
        toJSON(message: _194.TallyResult): unknown;
        fromPartial(object: {
          yes?: string;
          abstain?: string;
          no?: string;
          noWithVeto?: string;
        }): _194.TallyResult;
      };
      Vote: {
        encode(message: _194.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.Vote;
        fromJSON(object: any): _194.Vote;
        toJSON(message: _194.Vote): unknown;
        fromPartial(object: {
          proposalId?: any;
          voter?: string;
          option?: _194.VoteOption;
          options?: {
            option?: _194.VoteOption;
            weight?: string;
          }[];
        }): _194.Vote;
      };
      DepositParams: {
        encode(
          message: _194.DepositParams,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.DepositParams;
        fromJSON(object: any): _194.DepositParams;
        toJSON(message: _194.DepositParams): unknown;
        fromPartial(object: {
          minDeposit?: {
            denom?: string;
            amount?: string;
          }[];
          maxDepositPeriod?: {
            seconds?: any;
            nanos?: number;
          };
        }): _194.DepositParams;
      };
      VotingParams: {
        encode(message: _194.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.VotingParams;
        fromJSON(object: any): _194.VotingParams;
        toJSON(message: _194.VotingParams): unknown;
        fromPartial(object: {
          votingPeriod?: {
            seconds?: any;
            nanos?: number;
          };
        }): _194.VotingParams;
      };
      TallyParams: {
        encode(message: _194.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.TallyParams;
        fromJSON(object: any): _194.TallyParams;
        toJSON(message: _194.TallyParams): unknown;
        fromPartial(object: {
          quorum?: Uint8Array;
          threshold?: Uint8Array;
          vetoThreshold?: Uint8Array;
        }): _194.TallyParams;
      };
      GenesisState: {
        encode(message: _193.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.GenesisState;
        fromJSON(object: any): _193.GenesisState;
        toJSON(message: _193.GenesisState): unknown;
        fromPartial(object: {
          startingProposalId?: any;
          deposits?: {
            proposalId?: any;
            depositor?: string;
            amount?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
          votes?: {
            proposalId?: any;
            voter?: string;
            option?: _194.VoteOption;
            options?: {
              option?: _194.VoteOption;
              weight?: string;
            }[];
          }[];
          proposals?: {
            proposalId?: any;
            content?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            status?: _194.ProposalStatus;
            finalTallyResult?: {
              yes?: string;
              abstain?: string;
              no?: string;
              noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
              denom?: string;
              amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
          }[];
          depositParams?: {
            minDeposit?: {
              denom?: string;
              amount?: string;
            }[];
            maxDepositPeriod?: {
              seconds?: any;
              nanos?: number;
            };
          };
          votingParams?: {
            votingPeriod?: {
              seconds?: any;
              nanos?: number;
            };
          };
          tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
          };
        }): _193.GenesisState;
      };
    };
  }
  namespace mint {
    const v1beta1: {
      QueryClientImpl: typeof _290.QueryClientImpl;
      QueryParamsRequest: {
        encode(_: _199.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsRequest;
        fromJSON(_: any): _199.QueryParamsRequest;
        toJSON(_: _199.QueryParamsRequest): unknown;
        fromPartial(_: {}): _199.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _199.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsResponse;
        fromJSON(object: any): _199.QueryParamsResponse;
        toJSON(message: _199.QueryParamsResponse): unknown;
        fromPartial(object: {
          params?: {
            mintDenom?: string;
            inflationRateChange?: string;
            inflationMax?: string;
            inflationMin?: string;
            goalBonded?: string;
            blocksPerYear?: any;
          };
        }): _199.QueryParamsResponse;
      };
      QueryInflationRequest: {
        encode(
          _: _199.QueryInflationRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryInflationRequest;
        fromJSON(_: any): _199.QueryInflationRequest;
        toJSON(_: _199.QueryInflationRequest): unknown;
        fromPartial(_: {}): _199.QueryInflationRequest;
      };
      QueryInflationResponse: {
        encode(
          message: _199.QueryInflationResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryInflationResponse;
        fromJSON(object: any): _199.QueryInflationResponse;
        toJSON(message: _199.QueryInflationResponse): unknown;
        fromPartial(object: { inflation?: Uint8Array }): _199.QueryInflationResponse;
      };
      QueryAnnualProvisionsRequest: {
        encode(
          _: _199.QueryAnnualProvisionsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _199.QueryAnnualProvisionsRequest;
        fromJSON(_: any): _199.QueryAnnualProvisionsRequest;
        toJSON(_: _199.QueryAnnualProvisionsRequest): unknown;
        fromPartial(_: {}): _199.QueryAnnualProvisionsRequest;
      };
      QueryAnnualProvisionsResponse: {
        encode(
          message: _199.QueryAnnualProvisionsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _199.QueryAnnualProvisionsResponse;
        fromJSON(object: any): _199.QueryAnnualProvisionsResponse;
        toJSON(message: _199.QueryAnnualProvisionsResponse): unknown;
        fromPartial(object: { annualProvisions?: Uint8Array }): _199.QueryAnnualProvisionsResponse;
      };
      Minter: {
        encode(message: _198.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Minter;
        fromJSON(object: any): _198.Minter;
        toJSON(message: _198.Minter): unknown;
        fromPartial(object: { inflation?: string; annualProvisions?: string }): _198.Minter;
      };
      Params: {
        encode(message: _198.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Params;
        fromJSON(object: any): _198.Params;
        toJSON(message: _198.Params): unknown;
        fromPartial(object: {
          mintDenom?: string;
          inflationRateChange?: string;
          inflationMax?: string;
          inflationMin?: string;
          goalBonded?: string;
          blocksPerYear?: any;
        }): _198.Params;
      };
      GenesisState: {
        encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
        fromJSON(object: any): _197.GenesisState;
        toJSON(message: _197.GenesisState): unknown;
        fromPartial(object: {
          minter?: {
            inflation?: string;
            annualProvisions?: string;
          };
          params?: {
            mintDenom?: string;
            inflationRateChange?: string;
            inflationMax?: string;
            inflationMin?: string;
            goalBonded?: string;
            blocksPerYear?: any;
          };
        }): _197.GenesisState;
      };
    };
  }
  namespace params {
    const v1beta1: {
      QueryClientImpl: typeof _291.QueryClientImpl;
      QueryParamsRequest: {
        encode(
          message: _201.QueryParamsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryParamsRequest;
        fromJSON(object: any): _201.QueryParamsRequest;
        toJSON(message: _201.QueryParamsRequest): unknown;
        fromPartial(object: { subspace?: string; key?: string }): _201.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _201.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.QueryParamsResponse;
        fromJSON(object: any): _201.QueryParamsResponse;
        toJSON(message: _201.QueryParamsResponse): unknown;
        fromPartial(object: {
          param?: {
            subspace?: string;
            key?: string;
            value?: string;
          };
        }): _201.QueryParamsResponse;
      };
      ParameterChangeProposal: {
        encode(
          message: _200.ParameterChangeProposal,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _200.ParameterChangeProposal;
        fromJSON(object: any): _200.ParameterChangeProposal;
        toJSON(message: _200.ParameterChangeProposal): unknown;
        fromPartial(object: {
          title?: string;
          description?: string;
          changes?: {
            subspace?: string;
            key?: string;
            value?: string;
          }[];
        }): _200.ParameterChangeProposal;
      };
      ParamChange: {
        encode(message: _200.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ParamChange;
        fromJSON(object: any): _200.ParamChange;
        toJSON(message: _200.ParamChange): unknown;
        fromPartial(object: { subspace?: string; key?: string; value?: string }): _200.ParamChange;
      };
    };
  }
  namespace slashing {
    const v1beta1: {
      MsgClientImpl: typeof _303.MsgClientImpl;
      QueryClientImpl: typeof _292.QueryClientImpl;
      MsgUnjail: {
        encode(message: _205.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgUnjail;
        fromJSON(object: any): _205.MsgUnjail;
        toJSON(message: _205.MsgUnjail): unknown;
        fromPartial(object: { validatorAddr?: string }): _205.MsgUnjail;
      };
      MsgUnjailResponse: {
        encode(_: _205.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgUnjailResponse;
        fromJSON(_: any): _205.MsgUnjailResponse;
        toJSON(_: _205.MsgUnjailResponse): unknown;
        fromPartial(_: {}): _205.MsgUnjailResponse;
      };
      ValidatorSigningInfo: {
        encode(
          message: _204.ValidatorSigningInfo,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ValidatorSigningInfo;
        fromJSON(object: any): _204.ValidatorSigningInfo;
        toJSON(message: _204.ValidatorSigningInfo): unknown;
        fromPartial(object: {
          address?: string;
          startHeight?: any;
          indexOffset?: any;
          jailedUntil?: Date;
          tombstoned?: boolean;
          missedBlocksCounter?: any;
        }): _204.ValidatorSigningInfo;
      };
      Params: {
        encode(message: _204.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.Params;
        fromJSON(object: any): _204.Params;
        toJSON(message: _204.Params): unknown;
        fromPartial(object: {
          signedBlocksWindow?: any;
          minSignedPerWindow?: Uint8Array;
          downtimeJailDuration?: {
            seconds?: any;
            nanos?: number;
          };
          slashFractionDoubleSign?: Uint8Array;
          slashFractionDowntime?: Uint8Array;
        }): _204.Params;
      };
      QueryParamsRequest: {
        encode(_: _203.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsRequest;
        fromJSON(_: any): _203.QueryParamsRequest;
        toJSON(_: _203.QueryParamsRequest): unknown;
        fromPartial(_: {}): _203.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _203.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsResponse;
        fromJSON(object: any): _203.QueryParamsResponse;
        toJSON(message: _203.QueryParamsResponse): unknown;
        fromPartial(object: {
          params?: {
            signedBlocksWindow?: any;
            minSignedPerWindow?: Uint8Array;
            downtimeJailDuration?: {
              seconds?: any;
              nanos?: number;
            };
            slashFractionDoubleSign?: Uint8Array;
            slashFractionDowntime?: Uint8Array;
          };
        }): _203.QueryParamsResponse;
      };
      QuerySigningInfoRequest: {
        encode(
          message: _203.QuerySigningInfoRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _203.QuerySigningInfoRequest;
        fromJSON(object: any): _203.QuerySigningInfoRequest;
        toJSON(message: _203.QuerySigningInfoRequest): unknown;
        fromPartial(object: { consAddress?: string }): _203.QuerySigningInfoRequest;
      };
      QuerySigningInfoResponse: {
        encode(
          message: _203.QuerySigningInfoResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _203.QuerySigningInfoResponse;
        fromJSON(object: any): _203.QuerySigningInfoResponse;
        toJSON(message: _203.QuerySigningInfoResponse): unknown;
        fromPartial(object: {
          valSigningInfo?: {
            address?: string;
            startHeight?: any;
            indexOffset?: any;
            jailedUntil?: Date;
            tombstoned?: boolean;
            missedBlocksCounter?: any;
          };
        }): _203.QuerySigningInfoResponse;
      };
      QuerySigningInfosRequest: {
        encode(
          message: _203.QuerySigningInfosRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _203.QuerySigningInfosRequest;
        fromJSON(object: any): _203.QuerySigningInfosRequest;
        toJSON(message: _203.QuerySigningInfosRequest): unknown;
        fromPartial(object: {
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _203.QuerySigningInfosRequest;
      };
      QuerySigningInfosResponse: {
        encode(
          message: _203.QuerySigningInfosResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _203.QuerySigningInfosResponse;
        fromJSON(object: any): _203.QuerySigningInfosResponse;
        toJSON(message: _203.QuerySigningInfosResponse): unknown;
        fromPartial(object: {
          info?: {
            address?: string;
            startHeight?: any;
            indexOffset?: any;
            jailedUntil?: Date;
            tombstoned?: boolean;
            missedBlocksCounter?: any;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _203.QuerySigningInfosResponse;
      };
      GenesisState: {
        encode(message: _202.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.GenesisState;
        fromJSON(object: any): _202.GenesisState;
        toJSON(message: _202.GenesisState): unknown;
        fromPartial(object: {
          params?: {
            signedBlocksWindow?: any;
            minSignedPerWindow?: Uint8Array;
            downtimeJailDuration?: {
              seconds?: any;
              nanos?: number;
            };
            slashFractionDoubleSign?: Uint8Array;
            slashFractionDowntime?: Uint8Array;
          };
          signingInfos?: {
            address?: string;
            validatorSigningInfo?: {
              address?: string;
              startHeight?: any;
              indexOffset?: any;
              jailedUntil?: Date;
              tombstoned?: boolean;
              missedBlocksCounter?: any;
            };
          }[];
          missedBlocks?: {
            address?: string;
            missedBlocks?: {
              index?: any;
              missed?: boolean;
            }[];
          }[];
        }): _202.GenesisState;
      };
      SigningInfo: {
        encode(message: _202.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.SigningInfo;
        fromJSON(object: any): _202.SigningInfo;
        toJSON(message: _202.SigningInfo): unknown;
        fromPartial(object: {
          address?: string;
          validatorSigningInfo?: {
            address?: string;
            startHeight?: any;
            indexOffset?: any;
            jailedUntil?: Date;
            tombstoned?: boolean;
            missedBlocksCounter?: any;
          };
        }): _202.SigningInfo;
      };
      ValidatorMissedBlocks: {
        encode(
          message: _202.ValidatorMissedBlocks,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ValidatorMissedBlocks;
        fromJSON(object: any): _202.ValidatorMissedBlocks;
        toJSON(message: _202.ValidatorMissedBlocks): unknown;
        fromPartial(object: {
          address?: string;
          missedBlocks?: {
            index?: any;
            missed?: boolean;
          }[];
        }): _202.ValidatorMissedBlocks;
      };
      MissedBlock: {
        encode(message: _202.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MissedBlock;
        fromJSON(object: any): _202.MissedBlock;
        toJSON(message: _202.MissedBlock): unknown;
        fromPartial(object: { index?: any; missed?: boolean }): _202.MissedBlock;
      };
    };
  }
  namespace staking {
    const v1beta1: {
      MsgClientImpl: typeof _304.MsgClientImpl;
      QueryClientImpl: typeof _293.QueryClientImpl;
      MsgCreateValidator: {
        encode(
          message: _210.MsgCreateValidator,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgCreateValidator;
        fromJSON(object: any): _210.MsgCreateValidator;
        toJSON(message: _210.MsgCreateValidator): unknown;
        fromPartial(object: {
          description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
          };
          commission?: {
            rate?: string;
            maxRate?: string;
            maxChangeRate?: string;
          };
          minSelfDelegation?: string;
          delegatorAddress?: string;
          validatorAddress?: string;
          pubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          value?: {
            denom?: string;
            amount?: string;
          };
        }): _210.MsgCreateValidator;
      };
      MsgCreateValidatorResponse: {
        encode(
          _: _210.MsgCreateValidatorResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _210.MsgCreateValidatorResponse;
        fromJSON(_: any): _210.MsgCreateValidatorResponse;
        toJSON(_: _210.MsgCreateValidatorResponse): unknown;
        fromPartial(_: {}): _210.MsgCreateValidatorResponse;
      };
      MsgEditValidator: {
        encode(
          message: _210.MsgEditValidator,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgEditValidator;
        fromJSON(object: any): _210.MsgEditValidator;
        toJSON(message: _210.MsgEditValidator): unknown;
        fromPartial(object: {
          description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
          };
          validatorAddress?: string;
          commissionRate?: string;
          minSelfDelegation?: string;
        }): _210.MsgEditValidator;
      };
      MsgEditValidatorResponse: {
        encode(
          _: _210.MsgEditValidatorResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _210.MsgEditValidatorResponse;
        fromJSON(_: any): _210.MsgEditValidatorResponse;
        toJSON(_: _210.MsgEditValidatorResponse): unknown;
        fromPartial(_: {}): _210.MsgEditValidatorResponse;
      };
      MsgDelegate: {
        encode(message: _210.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgDelegate;
        fromJSON(object: any): _210.MsgDelegate;
        toJSON(message: _210.MsgDelegate): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
          amount?: {
            denom?: string;
            amount?: string;
          };
        }): _210.MsgDelegate;
      };
      MsgDelegateResponse: {
        encode(
          _: _210.MsgDelegateResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgDelegateResponse;
        fromJSON(_: any): _210.MsgDelegateResponse;
        toJSON(_: _210.MsgDelegateResponse): unknown;
        fromPartial(_: {}): _210.MsgDelegateResponse;
      };
      MsgBeginRedelegate: {
        encode(
          message: _210.MsgBeginRedelegate,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgBeginRedelegate;
        fromJSON(object: any): _210.MsgBeginRedelegate;
        toJSON(message: _210.MsgBeginRedelegate): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorSrcAddress?: string;
          validatorDstAddress?: string;
          amount?: {
            denom?: string;
            amount?: string;
          };
        }): _210.MsgBeginRedelegate;
      };
      MsgBeginRedelegateResponse: {
        encode(
          message: _210.MsgBeginRedelegateResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _210.MsgBeginRedelegateResponse;
        fromJSON(object: any): _210.MsgBeginRedelegateResponse;
        toJSON(message: _210.MsgBeginRedelegateResponse): unknown;
        fromPartial(object: { completionTime?: Date }): _210.MsgBeginRedelegateResponse;
      };
      MsgUndelegate: {
        encode(
          message: _210.MsgUndelegate,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgUndelegate;
        fromJSON(object: any): _210.MsgUndelegate;
        toJSON(message: _210.MsgUndelegate): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
          amount?: {
            denom?: string;
            amount?: string;
          };
        }): _210.MsgUndelegate;
      };
      MsgUndelegateResponse: {
        encode(
          message: _210.MsgUndelegateResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgUndelegateResponse;
        fromJSON(object: any): _210.MsgUndelegateResponse;
        toJSON(message: _210.MsgUndelegateResponse): unknown;
        fromPartial(object: { completionTime?: Date }): _210.MsgUndelegateResponse;
      };
      bondStatusFromJSON(object: any): _209.BondStatus;
      bondStatusToJSON(object: _209.BondStatus): string;
      BondStatus: typeof _209.BondStatus;
      HistoricalInfo: {
        encode(
          message: _209.HistoricalInfo,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.HistoricalInfo;
        fromJSON(object: any): _209.HistoricalInfo;
        toJSON(message: _209.HistoricalInfo): unknown;
        fromPartial(object: {
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
          valset?: {
            operatorAddress?: string;
            consensusPubkey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            jailed?: boolean;
            status?: _209.BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              securityContact?: string;
              details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
              commissionRates?: {
                rate?: string;
                maxRate?: string;
                maxChangeRate?: string;
              };
              updateTime?: Date;
            };
            minSelfDelegation?: string;
          }[];
        }): _209.HistoricalInfo;
      };
      CommissionRates: {
        encode(
          message: _209.CommissionRates,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.CommissionRates;
        fromJSON(object: any): _209.CommissionRates;
        toJSON(message: _209.CommissionRates): unknown;
        fromPartial(object: {
          rate?: string;
          maxRate?: string;
          maxChangeRate?: string;
        }): _209.CommissionRates;
      };
      Commission: {
        encode(message: _209.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Commission;
        fromJSON(object: any): _209.Commission;
        toJSON(message: _209.Commission): unknown;
        fromPartial(object: {
          commissionRates?: {
            rate?: string;
            maxRate?: string;
            maxChangeRate?: string;
          };
          updateTime?: Date;
        }): _209.Commission;
      };
      Description: {
        encode(message: _209.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Description;
        fromJSON(object: any): _209.Description;
        toJSON(message: _209.Description): unknown;
        fromPartial(object: {
          moniker?: string;
          identity?: string;
          website?: string;
          securityContact?: string;
          details?: string;
        }): _209.Description;
      };
      Validator: {
        encode(message: _209.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Validator;
        fromJSON(object: any): _209.Validator;
        toJSON(message: _209.Validator): unknown;
        fromPartial(object: {
          operatorAddress?: string;
          consensusPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          jailed?: boolean;
          status?: _209.BondStatus;
          tokens?: string;
          delegatorShares?: string;
          description?: {
            moniker?: string;
            identity?: string;
            website?: string;
            securityContact?: string;
            details?: string;
          };
          unbondingHeight?: any;
          unbondingTime?: Date;
          commission?: {
            commissionRates?: {
              rate?: string;
              maxRate?: string;
              maxChangeRate?: string;
            };
            updateTime?: Date;
          };
          minSelfDelegation?: string;
        }): _209.Validator;
      };
      ValAddresses: {
        encode(message: _209.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.ValAddresses;
        fromJSON(object: any): _209.ValAddresses;
        toJSON(message: _209.ValAddresses): unknown;
        fromPartial(object: { addresses?: string[] }): _209.ValAddresses;
      };
      DVPair: {
        encode(message: _209.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.DVPair;
        fromJSON(object: any): _209.DVPair;
        toJSON(message: _209.DVPair): unknown;
        fromPartial(object: { delegatorAddress?: string; validatorAddress?: string }): _209.DVPair;
      };
      DVPairs: {
        encode(message: _209.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.DVPairs;
        fromJSON(object: any): _209.DVPairs;
        toJSON(message: _209.DVPairs): unknown;
        fromPartial(object: {
          pairs?: {
            delegatorAddress?: string;
            validatorAddress?: string;
          }[];
        }): _209.DVPairs;
      };
      DVVTriplet: {
        encode(message: _209.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.DVVTriplet;
        fromJSON(object: any): _209.DVVTriplet;
        toJSON(message: _209.DVVTriplet): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorSrcAddress?: string;
          validatorDstAddress?: string;
        }): _209.DVVTriplet;
      };
      DVVTriplets: {
        encode(message: _209.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.DVVTriplets;
        fromJSON(object: any): _209.DVVTriplets;
        toJSON(message: _209.DVVTriplets): unknown;
        fromPartial(object: {
          triplets?: {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
          }[];
        }): _209.DVVTriplets;
      };
      Delegation: {
        encode(message: _209.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Delegation;
        fromJSON(object: any): _209.Delegation;
        toJSON(message: _209.Delegation): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
          shares?: string;
        }): _209.Delegation;
      };
      UnbondingDelegation: {
        encode(
          message: _209.UnbondingDelegation,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.UnbondingDelegation;
        fromJSON(object: any): _209.UnbondingDelegation;
        toJSON(message: _209.UnbondingDelegation): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorAddress?: string;
          entries?: {
            creationHeight?: any;
            completionTime?: Date;
            initialBalance?: string;
            balance?: string;
          }[];
        }): _209.UnbondingDelegation;
      };
      UnbondingDelegationEntry: {
        encode(
          message: _209.UnbondingDelegationEntry,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _209.UnbondingDelegationEntry;
        fromJSON(object: any): _209.UnbondingDelegationEntry;
        toJSON(message: _209.UnbondingDelegationEntry): unknown;
        fromPartial(object: {
          creationHeight?: any;
          completionTime?: Date;
          initialBalance?: string;
          balance?: string;
        }): _209.UnbondingDelegationEntry;
      };
      RedelegationEntry: {
        encode(
          message: _209.RedelegationEntry,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.RedelegationEntry;
        fromJSON(object: any): _209.RedelegationEntry;
        toJSON(message: _209.RedelegationEntry): unknown;
        fromPartial(object: {
          creationHeight?: any;
          completionTime?: Date;
          initialBalance?: string;
          sharesDst?: string;
        }): _209.RedelegationEntry;
      };
      Redelegation: {
        encode(message: _209.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Redelegation;
        fromJSON(object: any): _209.Redelegation;
        toJSON(message: _209.Redelegation): unknown;
        fromPartial(object: {
          delegatorAddress?: string;
          validatorSrcAddress?: string;
          validatorDstAddress?: string;
          entries?: {
            creationHeight?: any;
            completionTime?: Date;
            initialBalance?: string;
            sharesDst?: string;
          }[];
        }): _209.Redelegation;
      };
      Params: {
        encode(message: _209.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Params;
        fromJSON(object: any): _209.Params;
        toJSON(message: _209.Params): unknown;
        fromPartial(object: {
          unbondingTime?: {
            seconds?: any;
            nanos?: number;
          };
          maxValidators?: number;
          maxEntries?: number;
          historicalEntries?: number;
          bondDenom?: string;
        }): _209.Params;
      };
      DelegationResponse: {
        encode(
          message: _209.DelegationResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.DelegationResponse;
        fromJSON(object: any): _209.DelegationResponse;
        toJSON(message: _209.DelegationResponse): unknown;
        fromPartial(object: {
          delegation?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
          };
          balance?: {
            denom?: string;
            amount?: string;
          };
        }): _209.DelegationResponse;
      };
      RedelegationEntryResponse: {
        encode(
          message: _209.RedelegationEntryResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _209.RedelegationEntryResponse;
        fromJSON(object: any): _209.RedelegationEntryResponse;
        toJSON(message: _209.RedelegationEntryResponse): unknown;
        fromPartial(object: {
          redelegationEntry?: {
            creationHeight?: any;
            completionTime?: Date;
            initialBalance?: string;
            sharesDst?: string;
          };
          balance?: string;
        }): _209.RedelegationEntryResponse;
      };
      RedelegationResponse: {
        encode(
          message: _209.RedelegationResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.RedelegationResponse;
        fromJSON(object: any): _209.RedelegationResponse;
        toJSON(message: _209.RedelegationResponse): unknown;
        fromPartial(object: {
          redelegation?: {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              sharesDst?: string;
            }[];
          };
          entries?: {
            redelegationEntry?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              sharesDst?: string;
            };
            balance?: string;
          }[];
        }): _209.RedelegationResponse;
      };
      Pool: {
        encode(message: _209.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Pool;
        fromJSON(object: any): _209.Pool;
        toJSON(message: _209.Pool): unknown;
        fromPartial(object: { notBondedTokens?: string; bondedTokens?: string }): _209.Pool;
      };
      QueryValidatorsRequest: {
        encode(
          message: _208.QueryValidatorsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryValidatorsRequest;
        fromJSON(object: any): _208.QueryValidatorsRequest;
        toJSON(message: _208.QueryValidatorsRequest): unknown;
        fromPartial(object: {
          status?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryValidatorsRequest;
      };
      QueryValidatorsResponse: {
        encode(
          message: _208.QueryValidatorsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryValidatorsResponse;
        fromJSON(object: any): _208.QueryValidatorsResponse;
        toJSON(message: _208.QueryValidatorsResponse): unknown;
        fromPartial(object: {
          validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            jailed?: boolean;
            status?: _209.BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              securityContact?: string;
              details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
              commissionRates?: {
                rate?: string;
                maxRate?: string;
                maxChangeRate?: string;
              };
              updateTime?: Date;
            };
            minSelfDelegation?: string;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryValidatorsResponse;
      };
      QueryValidatorRequest: {
        encode(
          message: _208.QueryValidatorRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryValidatorRequest;
        fromJSON(object: any): _208.QueryValidatorRequest;
        toJSON(message: _208.QueryValidatorRequest): unknown;
        fromPartial(object: { validatorAddr?: string }): _208.QueryValidatorRequest;
      };
      QueryValidatorResponse: {
        encode(
          message: _208.QueryValidatorResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryValidatorResponse;
        fromJSON(object: any): _208.QueryValidatorResponse;
        toJSON(message: _208.QueryValidatorResponse): unknown;
        fromPartial(object: {
          validator?: {
            operatorAddress?: string;
            consensusPubkey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            jailed?: boolean;
            status?: _209.BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              securityContact?: string;
              details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
              commissionRates?: {
                rate?: string;
                maxRate?: string;
                maxChangeRate?: string;
              };
              updateTime?: Date;
            };
            minSelfDelegation?: string;
          };
        }): _208.QueryValidatorResponse;
      };
      QueryValidatorDelegationsRequest: {
        encode(
          message: _208.QueryValidatorDelegationsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryValidatorDelegationsRequest;
        fromJSON(object: any): _208.QueryValidatorDelegationsRequest;
        toJSON(message: _208.QueryValidatorDelegationsRequest): unknown;
        fromPartial(object: {
          validatorAddr?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryValidatorDelegationsRequest;
      };
      QueryValidatorDelegationsResponse: {
        encode(
          message: _208.QueryValidatorDelegationsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryValidatorDelegationsResponse;
        fromJSON(object: any): _208.QueryValidatorDelegationsResponse;
        toJSON(message: _208.QueryValidatorDelegationsResponse): unknown;
        fromPartial(object: {
          delegationResponses?: {
            delegation?: {
              delegatorAddress?: string;
              validatorAddress?: string;
              shares?: string;
            };
            balance?: {
              denom?: string;
              amount?: string;
            };
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryValidatorDelegationsResponse;
      };
      QueryValidatorUnbondingDelegationsRequest: {
        encode(
          message: _208.QueryValidatorUnbondingDelegationsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryValidatorUnbondingDelegationsRequest;
        fromJSON(object: any): _208.QueryValidatorUnbondingDelegationsRequest;
        toJSON(message: _208.QueryValidatorUnbondingDelegationsRequest): unknown;
        fromPartial(object: {
          validatorAddr?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryValidatorUnbondingDelegationsRequest;
      };
      QueryValidatorUnbondingDelegationsResponse: {
        encode(
          message: _208.QueryValidatorUnbondingDelegationsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryValidatorUnbondingDelegationsResponse;
        fromJSON(object: any): _208.QueryValidatorUnbondingDelegationsResponse;
        toJSON(message: _208.QueryValidatorUnbondingDelegationsResponse): unknown;
        fromPartial(object: {
          unbondingResponses?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              balance?: string;
            }[];
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryValidatorUnbondingDelegationsResponse;
      };
      QueryDelegationRequest: {
        encode(
          message: _208.QueryDelegationRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDelegationRequest;
        fromJSON(object: any): _208.QueryDelegationRequest;
        toJSON(message: _208.QueryDelegationRequest): unknown;
        fromPartial(object: { delegatorAddr?: string; validatorAddr?: string }): _208.QueryDelegationRequest;
      };
      QueryDelegationResponse: {
        encode(
          message: _208.QueryDelegationResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegationResponse;
        fromJSON(object: any): _208.QueryDelegationResponse;
        toJSON(message: _208.QueryDelegationResponse): unknown;
        fromPartial(object: {
          delegationResponse?: {
            delegation?: {
              delegatorAddress?: string;
              validatorAddress?: string;
              shares?: string;
            };
            balance?: {
              denom?: string;
              amount?: string;
            };
          };
        }): _208.QueryDelegationResponse;
      };
      QueryUnbondingDelegationRequest: {
        encode(
          message: _208.QueryUnbondingDelegationRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryUnbondingDelegationRequest;
        fromJSON(object: any): _208.QueryUnbondingDelegationRequest;
        toJSON(message: _208.QueryUnbondingDelegationRequest): unknown;
        fromPartial(object: {
          delegatorAddr?: string;
          validatorAddr?: string;
        }): _208.QueryUnbondingDelegationRequest;
      };
      QueryUnbondingDelegationResponse: {
        encode(
          message: _208.QueryUnbondingDelegationResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryUnbondingDelegationResponse;
        fromJSON(object: any): _208.QueryUnbondingDelegationResponse;
        toJSON(message: _208.QueryUnbondingDelegationResponse): unknown;
        fromPartial(object: {
          unbond?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              balance?: string;
            }[];
          };
        }): _208.QueryUnbondingDelegationResponse;
      };
      QueryDelegatorDelegationsRequest: {
        encode(
          message: _208.QueryDelegatorDelegationsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorDelegationsRequest;
        fromJSON(object: any): _208.QueryDelegatorDelegationsRequest;
        toJSON(message: _208.QueryDelegatorDelegationsRequest): unknown;
        fromPartial(object: {
          delegatorAddr?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryDelegatorDelegationsRequest;
      };
      QueryDelegatorDelegationsResponse: {
        encode(
          message: _208.QueryDelegatorDelegationsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorDelegationsResponse;
        fromJSON(object: any): _208.QueryDelegatorDelegationsResponse;
        toJSON(message: _208.QueryDelegatorDelegationsResponse): unknown;
        fromPartial(object: {
          delegationResponses?: {
            delegation?: {
              delegatorAddress?: string;
              validatorAddress?: string;
              shares?: string;
            };
            balance?: {
              denom?: string;
              amount?: string;
            };
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryDelegatorDelegationsResponse;
      };
      QueryDelegatorUnbondingDelegationsRequest: {
        encode(
          message: _208.QueryDelegatorUnbondingDelegationsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorUnbondingDelegationsRequest;
        fromJSON(object: any): _208.QueryDelegatorUnbondingDelegationsRequest;
        toJSON(message: _208.QueryDelegatorUnbondingDelegationsRequest): unknown;
        fromPartial(object: {
          delegatorAddr?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryDelegatorUnbondingDelegationsRequest;
      };
      QueryDelegatorUnbondingDelegationsResponse: {
        encode(
          message: _208.QueryDelegatorUnbondingDelegationsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorUnbondingDelegationsResponse;
        fromJSON(object: any): _208.QueryDelegatorUnbondingDelegationsResponse;
        toJSON(message: _208.QueryDelegatorUnbondingDelegationsResponse): unknown;
        fromPartial(object: {
          unbondingResponses?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              balance?: string;
            }[];
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryDelegatorUnbondingDelegationsResponse;
      };
      QueryRedelegationsRequest: {
        encode(
          message: _208.QueryRedelegationsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryRedelegationsRequest;
        fromJSON(object: any): _208.QueryRedelegationsRequest;
        toJSON(message: _208.QueryRedelegationsRequest): unknown;
        fromPartial(object: {
          delegatorAddr?: string;
          srcValidatorAddr?: string;
          dstValidatorAddr?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryRedelegationsRequest;
      };
      QueryRedelegationsResponse: {
        encode(
          message: _208.QueryRedelegationsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryRedelegationsResponse;
        fromJSON(object: any): _208.QueryRedelegationsResponse;
        toJSON(message: _208.QueryRedelegationsResponse): unknown;
        fromPartial(object: {
          redelegationResponses?: {
            redelegation?: {
              delegatorAddress?: string;
              validatorSrcAddress?: string;
              validatorDstAddress?: string;
              entries?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
              }[];
            };
            entries?: {
              redelegationEntry?: {
                creationHeight?: any;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
              };
              balance?: string;
            }[];
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryRedelegationsResponse;
      };
      QueryDelegatorValidatorsRequest: {
        encode(
          message: _208.QueryDelegatorValidatorsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorValidatorsRequest;
        fromJSON(object: any): _208.QueryDelegatorValidatorsRequest;
        toJSON(message: _208.QueryDelegatorValidatorsRequest): unknown;
        fromPartial(object: {
          delegatorAddr?: string;
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
        }): _208.QueryDelegatorValidatorsRequest;
      };
      QueryDelegatorValidatorsResponse: {
        encode(
          message: _208.QueryDelegatorValidatorsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorValidatorsResponse;
        fromJSON(object: any): _208.QueryDelegatorValidatorsResponse;
        toJSON(message: _208.QueryDelegatorValidatorsResponse): unknown;
        fromPartial(object: {
          validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            jailed?: boolean;
            status?: _209.BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              securityContact?: string;
              details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
              commissionRates?: {
                rate?: string;
                maxRate?: string;
                maxChangeRate?: string;
              };
              updateTime?: Date;
            };
            minSelfDelegation?: string;
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _208.QueryDelegatorValidatorsResponse;
      };
      QueryDelegatorValidatorRequest: {
        encode(
          message: _208.QueryDelegatorValidatorRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorValidatorRequest;
        fromJSON(object: any): _208.QueryDelegatorValidatorRequest;
        toJSON(message: _208.QueryDelegatorValidatorRequest): unknown;
        fromPartial(object: {
          delegatorAddr?: string;
          validatorAddr?: string;
        }): _208.QueryDelegatorValidatorRequest;
      };
      QueryDelegatorValidatorResponse: {
        encode(
          message: _208.QueryDelegatorValidatorResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryDelegatorValidatorResponse;
        fromJSON(object: any): _208.QueryDelegatorValidatorResponse;
        toJSON(message: _208.QueryDelegatorValidatorResponse): unknown;
        fromPartial(object: {
          validator?: {
            operatorAddress?: string;
            consensusPubkey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            jailed?: boolean;
            status?: _209.BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              securityContact?: string;
              details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
              commissionRates?: {
                rate?: string;
                maxRate?: string;
                maxChangeRate?: string;
              };
              updateTime?: Date;
            };
            minSelfDelegation?: string;
          };
        }): _208.QueryDelegatorValidatorResponse;
      };
      QueryHistoricalInfoRequest: {
        encode(
          message: _208.QueryHistoricalInfoRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryHistoricalInfoRequest;
        fromJSON(object: any): _208.QueryHistoricalInfoRequest;
        toJSON(message: _208.QueryHistoricalInfoRequest): unknown;
        fromPartial(object: { height?: any }): _208.QueryHistoricalInfoRequest;
      };
      QueryHistoricalInfoResponse: {
        encode(
          message: _208.QueryHistoricalInfoResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _208.QueryHistoricalInfoResponse;
        fromJSON(object: any): _208.QueryHistoricalInfoResponse;
        toJSON(message: _208.QueryHistoricalInfoResponse): unknown;
        fromPartial(object: {
          hist?: {
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
            valset?: {
              operatorAddress?: string;
              consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              jailed?: boolean;
              status?: _209.BondStatus;
              tokens?: string;
              delegatorShares?: string;
              description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
              };
              unbondingHeight?: any;
              unbondingTime?: Date;
              commission?: {
                commissionRates?: {
                  rate?: string;
                  maxRate?: string;
                  maxChangeRate?: string;
                };
                updateTime?: Date;
              };
              minSelfDelegation?: string;
            }[];
          };
        }): _208.QueryHistoricalInfoResponse;
      };
      QueryPoolRequest: {
        encode(_: _208.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryPoolRequest;
        fromJSON(_: any): _208.QueryPoolRequest;
        toJSON(_: _208.QueryPoolRequest): unknown;
        fromPartial(_: {}): _208.QueryPoolRequest;
      };
      QueryPoolResponse: {
        encode(
          message: _208.QueryPoolResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryPoolResponse;
        fromJSON(object: any): _208.QueryPoolResponse;
        toJSON(message: _208.QueryPoolResponse): unknown;
        fromPartial(object: {
          pool?: {
            notBondedTokens?: string;
            bondedTokens?: string;
          };
        }): _208.QueryPoolResponse;
      };
      QueryParamsRequest: {
        encode(_: _208.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryParamsRequest;
        fromJSON(_: any): _208.QueryParamsRequest;
        toJSON(_: _208.QueryParamsRequest): unknown;
        fromPartial(_: {}): _208.QueryParamsRequest;
      };
      QueryParamsResponse: {
        encode(
          message: _208.QueryParamsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryParamsResponse;
        fromJSON(object: any): _208.QueryParamsResponse;
        toJSON(message: _208.QueryParamsResponse): unknown;
        fromPartial(object: {
          params?: {
            unbondingTime?: {
              seconds?: any;
              nanos?: number;
            };
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
          };
        }): _208.QueryParamsResponse;
      };
      GenesisState: {
        encode(message: _207.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.GenesisState;
        fromJSON(object: any): _207.GenesisState;
        toJSON(message: _207.GenesisState): unknown;
        fromPartial(object: {
          params?: {
            unbondingTime?: {
              seconds?: any;
              nanos?: number;
            };
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
          };
          lastTotalPower?: Uint8Array;
          lastValidatorPowers?: {
            address?: string;
            power?: any;
          }[];
          validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            jailed?: boolean;
            status?: _209.BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              securityContact?: string;
              details?: string;
            };
            unbondingHeight?: any;
            unbondingTime?: Date;
            commission?: {
              commissionRates?: {
                rate?: string;
                maxRate?: string;
                maxChangeRate?: string;
              };
              updateTime?: Date;
            };
            minSelfDelegation?: string;
          }[];
          delegations?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
          }[];
          unbondingDelegations?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              balance?: string;
            }[];
          }[];
          redelegations?: {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
              creationHeight?: any;
              completionTime?: Date;
              initialBalance?: string;
              sharesDst?: string;
            }[];
          }[];
          exported?: boolean;
        }): _207.GenesisState;
      };
      LastValidatorPower: {
        encode(
          message: _207.LastValidatorPower,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.LastValidatorPower;
        fromJSON(object: any): _207.LastValidatorPower;
        toJSON(message: _207.LastValidatorPower): unknown;
        fromPartial(object: { address?: string; power?: any }): _207.LastValidatorPower;
      };
      authorizationTypeFromJSON(object: any): _206.AuthorizationType;
      authorizationTypeToJSON(object: _206.AuthorizationType): string;
      AuthorizationType: typeof _206.AuthorizationType;
      StakeAuthorization: {
        encode(
          message: _206.StakeAuthorization,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.StakeAuthorization;
        fromJSON(object: any): _206.StakeAuthorization;
        toJSON(message: _206.StakeAuthorization): unknown;
        fromPartial(object: {
          maxTokens?: {
            denom?: string;
            amount?: string;
          };
          allowList?: {
            address?: string[];
          };
          denyList?: {
            address?: string[];
          };
          authorizationType?: _206.AuthorizationType;
        }): _206.StakeAuthorization;
      };
      StakeAuthorization_Validators: {
        encode(
          message: _206.StakeAuthorization_Validators,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _206.StakeAuthorization_Validators;
        fromJSON(object: any): _206.StakeAuthorization_Validators;
        toJSON(message: _206.StakeAuthorization_Validators): unknown;
        fromPartial(object: { address?: string[] }): _206.StakeAuthorization_Validators;
      };
    };
  }
  namespace tx {
    namespace signing {
      const v1beta1: {
        signModeFromJSON(object: any): _211.SignMode;
        signModeToJSON(object: _211.SignMode): string;
        SignMode: typeof _211.SignMode;
        SignatureDescriptors: {
          encode(
            message: _211.SignatureDescriptors,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.SignatureDescriptors;
          fromJSON(object: any): _211.SignatureDescriptors;
          toJSON(message: _211.SignatureDescriptors): unknown;
          fromPartial(object: {
            signatures?: {
              publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              data?: {
                single?: {
                  mode?: _211.SignMode;
                  signature?: Uint8Array;
                };
                multi?: {
                  bitarray?: {
                    extraBitsStored?: number;
                    elems?: Uint8Array;
                  };
                  signatures?: any[];
                };
              };
              sequence?: any;
            }[];
          }): _211.SignatureDescriptors;
        };
        SignatureDescriptor: {
          encode(
            message: _211.SignatureDescriptor,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.SignatureDescriptor;
          fromJSON(object: any): _211.SignatureDescriptor;
          toJSON(message: _211.SignatureDescriptor): unknown;
          fromPartial(object: {
            publicKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            data?: {
              single?: {
                mode?: _211.SignMode;
                signature?: Uint8Array;
              };
              multi?: {
                bitarray?: {
                  extraBitsStored?: number;
                  elems?: Uint8Array;
                };
                signatures?: any[];
              };
            };
            sequence?: any;
          }): _211.SignatureDescriptor;
        };
        SignatureDescriptor_Data: {
          encode(
            message: _211.SignatureDescriptor_Data,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _211.SignatureDescriptor_Data;
          fromJSON(object: any): _211.SignatureDescriptor_Data;
          toJSON(message: _211.SignatureDescriptor_Data): unknown;
          fromPartial(object: {
            single?: {
              mode?: _211.SignMode;
              signature?: Uint8Array;
            };
            multi?: {
              bitarray?: {
                extraBitsStored?: number;
                elems?: Uint8Array;
              };
              signatures?: any[];
            };
          }): _211.SignatureDescriptor_Data;
        };
        SignatureDescriptor_Data_Single: {
          encode(
            message: _211.SignatureDescriptor_Data_Single,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _211.SignatureDescriptor_Data_Single;
          fromJSON(object: any): _211.SignatureDescriptor_Data_Single;
          toJSON(message: _211.SignatureDescriptor_Data_Single): unknown;
          fromPartial(object: {
            mode?: _211.SignMode;
            signature?: Uint8Array;
          }): _211.SignatureDescriptor_Data_Single;
        };
        SignatureDescriptor_Data_Multi: {
          encode(
            message: _211.SignatureDescriptor_Data_Multi,
            writer?: import("protobufjs").Writer,
          ): import("protobufjs").Writer;
          decode(
            input: Uint8Array | import("protobufjs").Reader,
            length?: number,
          ): _211.SignatureDescriptor_Data_Multi;
          fromJSON(object: any): _211.SignatureDescriptor_Data_Multi;
          toJSON(message: _211.SignatureDescriptor_Data_Multi): unknown;
          fromPartial(object: {
            bitarray?: {
              extraBitsStored?: number;
              elems?: Uint8Array;
            };
            signatures?: any[];
          }): _211.SignatureDescriptor_Data_Multi;
        };
      };
    }
    const v1beta1: {
      ServiceClientImpl: typeof _294.ServiceClientImpl;
      Tx: {
        encode(message: _213.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Tx;
        fromJSON(object: any): _213.Tx;
        toJSON(message: _213.Tx): unknown;
        fromPartial(object: {
          body?: {
            messages?: {
              typeUrl?: string;
              value?: Uint8Array;
            }[];
            memo?: string;
            timeoutHeight?: any;
            extensionOptions?: {
              typeUrl?: string;
              value?: Uint8Array;
            }[];
            nonCriticalExtensionOptions?: {
              typeUrl?: string;
              value?: Uint8Array;
            }[];
          };
          authInfo?: {
            signerInfos?: {
              publicKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              modeInfo?: {
                single?: {
                  mode?: _211.SignMode;
                };
                multi?: {
                  bitarray?: {
                    extraBitsStored?: number;
                    elems?: Uint8Array;
                  };
                  modeInfos?: any[];
                };
              };
              sequence?: any;
            }[];
            fee?: {
              amount?: {
                denom?: string;
                amount?: string;
              }[];
              gasLimit?: any;
              payer?: string;
              granter?: string;
            };
          };
          signatures?: Uint8Array[];
        }): _213.Tx;
      };
      TxRaw: {
        encode(message: _213.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.TxRaw;
        fromJSON(object: any): _213.TxRaw;
        toJSON(message: _213.TxRaw): unknown;
        fromPartial(object: {
          bodyBytes?: Uint8Array;
          authInfoBytes?: Uint8Array;
          signatures?: Uint8Array[];
        }): _213.TxRaw;
      };
      SignDoc: {
        encode(message: _213.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.SignDoc;
        fromJSON(object: any): _213.SignDoc;
        toJSON(message: _213.SignDoc): unknown;
        fromPartial(object: {
          bodyBytes?: Uint8Array;
          authInfoBytes?: Uint8Array;
          chainId?: string;
          accountNumber?: any;
        }): _213.SignDoc;
      };
      TxBody: {
        encode(message: _213.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.TxBody;
        fromJSON(object: any): _213.TxBody;
        toJSON(message: _213.TxBody): unknown;
        fromPartial(object: {
          messages?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
          memo?: string;
          timeoutHeight?: any;
          extensionOptions?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
          nonCriticalExtensionOptions?: {
            typeUrl?: string;
            value?: Uint8Array;
          }[];
        }): _213.TxBody;
      };
      AuthInfo: {
        encode(message: _213.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.AuthInfo;
        fromJSON(object: any): _213.AuthInfo;
        toJSON(message: _213.AuthInfo): unknown;
        fromPartial(object: {
          signerInfos?: {
            publicKey?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            modeInfo?: {
              single?: {
                mode?: _211.SignMode;
              };
              multi?: {
                bitarray?: {
                  extraBitsStored?: number;
                  elems?: Uint8Array;
                };
                modeInfos?: any[];
              };
            };
            sequence?: any;
          }[];
          fee?: {
            amount?: {
              denom?: string;
              amount?: string;
            }[];
            gasLimit?: any;
            payer?: string;
            granter?: string;
          };
        }): _213.AuthInfo;
      };
      SignerInfo: {
        encode(message: _213.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.SignerInfo;
        fromJSON(object: any): _213.SignerInfo;
        toJSON(message: _213.SignerInfo): unknown;
        fromPartial(object: {
          publicKey?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
          modeInfo?: {
            single?: {
              mode?: _211.SignMode;
            };
            multi?: {
              bitarray?: {
                extraBitsStored?: number;
                elems?: Uint8Array;
              };
              modeInfos?: any[];
            };
          };
          sequence?: any;
        }): _213.SignerInfo;
      };
      ModeInfo: {
        encode(message: _213.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ModeInfo;
        fromJSON(object: any): _213.ModeInfo;
        toJSON(message: _213.ModeInfo): unknown;
        fromPartial(object: {
          single?: {
            mode?: _211.SignMode;
          };
          multi?: {
            bitarray?: {
              extraBitsStored?: number;
              elems?: Uint8Array;
            };
            modeInfos?: any[];
          };
        }): _213.ModeInfo;
      };
      ModeInfo_Single: {
        encode(
          message: _213.ModeInfo_Single,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ModeInfo_Single;
        fromJSON(object: any): _213.ModeInfo_Single;
        toJSON(message: _213.ModeInfo_Single): unknown;
        fromPartial(object: { mode?: _211.SignMode }): _213.ModeInfo_Single;
      };
      ModeInfo_Multi: {
        encode(
          message: _213.ModeInfo_Multi,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ModeInfo_Multi;
        fromJSON(object: any): _213.ModeInfo_Multi;
        toJSON(message: _213.ModeInfo_Multi): unknown;
        fromPartial(object: {
          bitarray?: {
            extraBitsStored?: number;
            elems?: Uint8Array;
          };
          modeInfos?: any[];
        }): _213.ModeInfo_Multi;
      };
      Fee: {
        encode(message: _213.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Fee;
        fromJSON(object: any): _213.Fee;
        toJSON(message: _213.Fee): unknown;
        fromPartial(object: {
          amount?: {
            denom?: string;
            amount?: string;
          }[];
          gasLimit?: any;
          payer?: string;
          granter?: string;
        }): _213.Fee;
      };
      orderByFromJSON(object: any): _212.OrderBy;
      orderByToJSON(object: _212.OrderBy): string;
      broadcastModeFromJSON(object: any): _212.BroadcastMode;
      broadcastModeToJSON(object: _212.BroadcastMode): string;
      OrderBy: typeof _212.OrderBy;
      BroadcastMode: typeof _212.BroadcastMode;
      GetTxsEventRequest: {
        encode(
          message: _212.GetTxsEventRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GetTxsEventRequest;
        fromJSON(object: any): _212.GetTxsEventRequest;
        toJSON(message: _212.GetTxsEventRequest): unknown;
        fromPartial(object: {
          events?: string[];
          pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
          };
          orderBy?: _212.OrderBy;
        }): _212.GetTxsEventRequest;
      };
      GetTxsEventResponse: {
        encode(
          message: _212.GetTxsEventResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GetTxsEventResponse;
        fromJSON(object: any): _212.GetTxsEventResponse;
        toJSON(message: _212.GetTxsEventResponse): unknown;
        fromPartial(object: {
          txs?: {
            body?: {
              messages?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
              memo?: string;
              timeoutHeight?: any;
              extensionOptions?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
              nonCriticalExtensionOptions?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
            };
            authInfo?: {
              signerInfos?: {
                publicKey?: {
                  typeUrl?: string;
                  value?: Uint8Array;
                };
                modeInfo?: {
                  single?: {
                    mode?: _211.SignMode;
                  };
                  multi?: {
                    bitarray?: {
                      extraBitsStored?: number;
                      elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                  };
                };
                sequence?: any;
              }[];
              fee?: {
                amount?: {
                  denom?: string;
                  amount?: string;
                }[];
                gasLimit?: any;
                payer?: string;
                granter?: string;
              };
            };
            signatures?: Uint8Array[];
          }[];
          txResponses?: {
            height?: any;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
              msgIndex?: number;
              log?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: string;
                  value?: string;
                }[];
              }[];
            }[];
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
          }[];
          pagination?: {
            nextKey?: Uint8Array;
            total?: any;
          };
        }): _212.GetTxsEventResponse;
      };
      BroadcastTxRequest: {
        encode(
          message: _212.BroadcastTxRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.BroadcastTxRequest;
        fromJSON(object: any): _212.BroadcastTxRequest;
        toJSON(message: _212.BroadcastTxRequest): unknown;
        fromPartial(object: { txBytes?: Uint8Array; mode?: _212.BroadcastMode }): _212.BroadcastTxRequest;
      };
      BroadcastTxResponse: {
        encode(
          message: _212.BroadcastTxResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.BroadcastTxResponse;
        fromJSON(object: any): _212.BroadcastTxResponse;
        toJSON(message: _212.BroadcastTxResponse): unknown;
        fromPartial(object: {
          txResponse?: {
            height?: any;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
              msgIndex?: number;
              log?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: string;
                  value?: string;
                }[];
              }[];
            }[];
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
          };
        }): _212.BroadcastTxResponse;
      };
      SimulateRequest: {
        encode(
          message: _212.SimulateRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SimulateRequest;
        fromJSON(object: any): _212.SimulateRequest;
        toJSON(message: _212.SimulateRequest): unknown;
        fromPartial(object: {
          tx?: {
            body?: {
              messages?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
              memo?: string;
              timeoutHeight?: any;
              extensionOptions?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
              nonCriticalExtensionOptions?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
            };
            authInfo?: {
              signerInfos?: {
                publicKey?: {
                  typeUrl?: string;
                  value?: Uint8Array;
                };
                modeInfo?: {
                  single?: {
                    mode?: _211.SignMode;
                  };
                  multi?: {
                    bitarray?: {
                      extraBitsStored?: number;
                      elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                  };
                };
                sequence?: any;
              }[];
              fee?: {
                amount?: {
                  denom?: string;
                  amount?: string;
                }[];
                gasLimit?: any;
                payer?: string;
                granter?: string;
              };
            };
            signatures?: Uint8Array[];
          };
          txBytes?: Uint8Array;
        }): _212.SimulateRequest;
      };
      SimulateResponse: {
        encode(
          message: _212.SimulateResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SimulateResponse;
        fromJSON(object: any): _212.SimulateResponse;
        toJSON(message: _212.SimulateResponse): unknown;
        fromPartial(object: {
          gasInfo?: {
            gasWanted?: any;
            gasUsed?: any;
          };
          result?: {
            data?: Uint8Array;
            log?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
          };
        }): _212.SimulateResponse;
      };
      GetTxRequest: {
        encode(message: _212.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GetTxRequest;
        fromJSON(object: any): _212.GetTxRequest;
        toJSON(message: _212.GetTxRequest): unknown;
        fromPartial(object: { hash?: string }): _212.GetTxRequest;
      };
      GetTxResponse: {
        encode(
          message: _212.GetTxResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GetTxResponse;
        fromJSON(object: any): _212.GetTxResponse;
        toJSON(message: _212.GetTxResponse): unknown;
        fromPartial(object: {
          tx?: {
            body?: {
              messages?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
              memo?: string;
              timeoutHeight?: any;
              extensionOptions?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
              nonCriticalExtensionOptions?: {
                typeUrl?: string;
                value?: Uint8Array;
              }[];
            };
            authInfo?: {
              signerInfos?: {
                publicKey?: {
                  typeUrl?: string;
                  value?: Uint8Array;
                };
                modeInfo?: {
                  single?: {
                    mode?: _211.SignMode;
                  };
                  multi?: {
                    bitarray?: {
                      extraBitsStored?: number;
                      elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                  };
                };
                sequence?: any;
              }[];
              fee?: {
                amount?: {
                  denom?: string;
                  amount?: string;
                }[];
                gasLimit?: any;
                payer?: string;
                granter?: string;
              };
            };
            signatures?: Uint8Array[];
          };
          txResponse?: {
            height?: any;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            rawLog?: string;
            logs?: {
              msgIndex?: number;
              log?: string;
              events?: {
                type?: string;
                attributes?: {
                  key?: string;
                  value?: string;
                }[];
              }[];
            }[];
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            tx?: {
              typeUrl?: string;
              value?: Uint8Array;
            };
            timestamp?: string;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
          };
        }): _212.GetTxResponse;
      };
    };
  }
  namespace upgrade {
    const v1beta1: {
      QueryClientImpl: typeof _295.QueryClientImpl;
      Plan: {
        encode(message: _215.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Plan;
        fromJSON(object: any): _215.Plan;
        toJSON(message: _215.Plan): unknown;
        fromPartial(object: {
          name?: string;
          time?: Date;
          height?: any;
          info?: string;
          upgradedClientState?: {
            typeUrl?: string;
            value?: Uint8Array;
          };
        }): _215.Plan;
      };
      SoftwareUpgradeProposal: {
        encode(
          message: _215.SoftwareUpgradeProposal,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _215.SoftwareUpgradeProposal;
        fromJSON(object: any): _215.SoftwareUpgradeProposal;
        toJSON(message: _215.SoftwareUpgradeProposal): unknown;
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
        }): _215.SoftwareUpgradeProposal;
      };
      CancelSoftwareUpgradeProposal: {
        encode(
          message: _215.CancelSoftwareUpgradeProposal,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _215.CancelSoftwareUpgradeProposal;
        fromJSON(object: any): _215.CancelSoftwareUpgradeProposal;
        toJSON(message: _215.CancelSoftwareUpgradeProposal): unknown;
        fromPartial(object: { title?: string; description?: string }): _215.CancelSoftwareUpgradeProposal;
      };
      ModuleVersion: {
        encode(
          message: _215.ModuleVersion,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.ModuleVersion;
        fromJSON(object: any): _215.ModuleVersion;
        toJSON(message: _215.ModuleVersion): unknown;
        fromPartial(object: { name?: string; version?: any }): _215.ModuleVersion;
      };
      QueryCurrentPlanRequest: {
        encode(
          _: _214.QueryCurrentPlanRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryCurrentPlanRequest;
        fromJSON(_: any): _214.QueryCurrentPlanRequest;
        toJSON(_: _214.QueryCurrentPlanRequest): unknown;
        fromPartial(_: {}): _214.QueryCurrentPlanRequest;
      };
      QueryCurrentPlanResponse: {
        encode(
          message: _214.QueryCurrentPlanResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryCurrentPlanResponse;
        fromJSON(object: any): _214.QueryCurrentPlanResponse;
        toJSON(message: _214.QueryCurrentPlanResponse): unknown;
        fromPartial(object: {
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
        }): _214.QueryCurrentPlanResponse;
      };
      QueryAppliedPlanRequest: {
        encode(
          message: _214.QueryAppliedPlanRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryAppliedPlanRequest;
        fromJSON(object: any): _214.QueryAppliedPlanRequest;
        toJSON(message: _214.QueryAppliedPlanRequest): unknown;
        fromPartial(object: { name?: string }): _214.QueryAppliedPlanRequest;
      };
      QueryAppliedPlanResponse: {
        encode(
          message: _214.QueryAppliedPlanResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryAppliedPlanResponse;
        fromJSON(object: any): _214.QueryAppliedPlanResponse;
        toJSON(message: _214.QueryAppliedPlanResponse): unknown;
        fromPartial(object: { height?: any }): _214.QueryAppliedPlanResponse;
      };
      QueryUpgradedConsensusStateRequest: {
        encode(
          message: _214.QueryUpgradedConsensusStateRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryUpgradedConsensusStateRequest;
        fromJSON(object: any): _214.QueryUpgradedConsensusStateRequest;
        toJSON(message: _214.QueryUpgradedConsensusStateRequest): unknown;
        fromPartial(object: { lastHeight?: any }): _214.QueryUpgradedConsensusStateRequest;
      };
      QueryUpgradedConsensusStateResponse: {
        encode(
          message: _214.QueryUpgradedConsensusStateResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryUpgradedConsensusStateResponse;
        fromJSON(object: any): _214.QueryUpgradedConsensusStateResponse;
        toJSON(message: _214.QueryUpgradedConsensusStateResponse): unknown;
        fromPartial(object: {
          upgradedConsensusState?: Uint8Array;
        }): _214.QueryUpgradedConsensusStateResponse;
      };
      QueryModuleVersionsRequest: {
        encode(
          message: _214.QueryModuleVersionsRequest,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryModuleVersionsRequest;
        fromJSON(object: any): _214.QueryModuleVersionsRequest;
        toJSON(message: _214.QueryModuleVersionsRequest): unknown;
        fromPartial(object: { moduleName?: string }): _214.QueryModuleVersionsRequest;
      };
      QueryModuleVersionsResponse: {
        encode(
          message: _214.QueryModuleVersionsResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _214.QueryModuleVersionsResponse;
        fromJSON(object: any): _214.QueryModuleVersionsResponse;
        toJSON(message: _214.QueryModuleVersionsResponse): unknown;
        fromPartial(object: {
          moduleVersions?: {
            name?: string;
            version?: any;
          }[];
        }): _214.QueryModuleVersionsResponse;
      };
    };
  }
  namespace vesting {
    const v1beta1: {
      MsgClientImpl: typeof _305.MsgClientImpl;
      BaseVestingAccount: {
        encode(
          message: _217.BaseVestingAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.BaseVestingAccount;
        fromJSON(object: any): _217.BaseVestingAccount;
        toJSON(message: _217.BaseVestingAccount): unknown;
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
          originalVesting?: {
            denom?: string;
            amount?: string;
          }[];
          delegatedFree?: {
            denom?: string;
            amount?: string;
          }[];
          delegatedVesting?: {
            denom?: string;
            amount?: string;
          }[];
          endTime?: any;
        }): _217.BaseVestingAccount;
      };
      ContinuousVestingAccount: {
        encode(
          message: _217.ContinuousVestingAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _217.ContinuousVestingAccount;
        fromJSON(object: any): _217.ContinuousVestingAccount;
        toJSON(message: _217.ContinuousVestingAccount): unknown;
        fromPartial(object: {
          baseVestingAccount?: {
            baseAccount?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              accountNumber?: any;
              sequence?: any;
            };
            originalVesting?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedFree?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedVesting?: {
              denom?: string;
              amount?: string;
            }[];
            endTime?: any;
          };
          startTime?: any;
        }): _217.ContinuousVestingAccount;
      };
      DelayedVestingAccount: {
        encode(
          message: _217.DelayedVestingAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.DelayedVestingAccount;
        fromJSON(object: any): _217.DelayedVestingAccount;
        toJSON(message: _217.DelayedVestingAccount): unknown;
        fromPartial(object: {
          baseVestingAccount?: {
            baseAccount?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              accountNumber?: any;
              sequence?: any;
            };
            originalVesting?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedFree?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedVesting?: {
              denom?: string;
              amount?: string;
            }[];
            endTime?: any;
          };
        }): _217.DelayedVestingAccount;
      };
      Period: {
        encode(message: _217.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Period;
        fromJSON(object: any): _217.Period;
        toJSON(message: _217.Period): unknown;
        fromPartial(object: {
          length?: any;
          amount?: {
            denom?: string;
            amount?: string;
          }[];
        }): _217.Period;
      };
      PeriodicVestingAccount: {
        encode(
          message: _217.PeriodicVestingAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.PeriodicVestingAccount;
        fromJSON(object: any): _217.PeriodicVestingAccount;
        toJSON(message: _217.PeriodicVestingAccount): unknown;
        fromPartial(object: {
          baseVestingAccount?: {
            baseAccount?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              accountNumber?: any;
              sequence?: any;
            };
            originalVesting?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedFree?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedVesting?: {
              denom?: string;
              amount?: string;
            }[];
            endTime?: any;
          };
          startTime?: any;
          vestingPeriods?: {
            length?: any;
            amount?: {
              denom?: string;
              amount?: string;
            }[];
          }[];
        }): _217.PeriodicVestingAccount;
      };
      PermanentLockedAccount: {
        encode(
          message: _217.PermanentLockedAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.PermanentLockedAccount;
        fromJSON(object: any): _217.PermanentLockedAccount;
        toJSON(message: _217.PermanentLockedAccount): unknown;
        fromPartial(object: {
          baseVestingAccount?: {
            baseAccount?: {
              address?: string;
              pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
              };
              accountNumber?: any;
              sequence?: any;
            };
            originalVesting?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedFree?: {
              denom?: string;
              amount?: string;
            }[];
            delegatedVesting?: {
              denom?: string;
              amount?: string;
            }[];
            endTime?: any;
          };
        }): _217.PermanentLockedAccount;
      };
      MsgCreateVestingAccount: {
        encode(
          message: _216.MsgCreateVestingAccount,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _216.MsgCreateVestingAccount;
        fromJSON(object: any): _216.MsgCreateVestingAccount;
        toJSON(message: _216.MsgCreateVestingAccount): unknown;
        fromPartial(object: {
          fromAddress?: string;
          toAddress?: string;
          amount?: {
            denom?: string;
            amount?: string;
          }[];
          endTime?: any;
          delayed?: boolean;
        }): _216.MsgCreateVestingAccount;
      };
      MsgCreateVestingAccountResponse: {
        encode(
          _: _216.MsgCreateVestingAccountResponse,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(
          input: Uint8Array | import("protobufjs").Reader,
          length?: number,
        ): _216.MsgCreateVestingAccountResponse;
        fromJSON(_: any): _216.MsgCreateVestingAccountResponse;
        toJSON(_: _216.MsgCreateVestingAccountResponse): unknown;
        fromPartial(_: {}): _216.MsgCreateVestingAccountResponse;
      };
    };
  }
  const ClientFactory: {
    createRPCMsgClient: ({ rpc }: { rpc: import("@osmonauts/helpers").Rpc }) => Promise<{
      cosmos: {
        authz: {
          v1beta1: _296.MsgClientImpl;
        };
        bank: {
          v1beta1: _297.MsgClientImpl;
        };
        crisis: {
          v1beta1: _298.MsgClientImpl;
        };
        distribution: {
          v1beta1: _299.MsgClientImpl;
        };
        evidence: {
          v1beta1: _300.MsgClientImpl;
        };
        feegrant: {
          v1beta1: _301.MsgClientImpl;
        };
        gov: {
          v1beta1: _302.MsgClientImpl;
        };
        slashing: {
          v1beta1: _303.MsgClientImpl;
        };
        staking: {
          v1beta1: _304.MsgClientImpl;
        };
        vesting: {
          v1beta1: _305.MsgClientImpl;
        };
      };
    }>;
    createRPCQueryClient: ({ rpc }: { rpc: import("@osmonauts/helpers").Rpc }) => Promise<{
      cosmos: {
        auth: {
          v1beta1: _282.QueryClientImpl;
        };
        authz: {
          v1beta1: _283.QueryClientImpl;
        };
        bank: {
          v1beta1: _284.QueryClientImpl;
        };
        distribution: {
          v1beta1: _286.QueryClientImpl;
        };
        evidence: {
          v1beta1: _287.QueryClientImpl;
        };
        feegrant: {
          v1beta1: _288.QueryClientImpl;
        };
        gov: {
          v1beta1: _289.QueryClientImpl;
        };
        mint: {
          v1beta1: _290.QueryClientImpl;
        };
        params: {
          v1beta1: _291.QueryClientImpl;
        };
        slashing: {
          v1beta1: _292.QueryClientImpl;
        };
        staking: {
          v1beta1: _293.QueryClientImpl;
        };
        upgrade: {
          v1beta1: _295.QueryClientImpl;
        };
      };
    }>;
  };
}
