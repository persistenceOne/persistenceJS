import * as _256 from "./abci/types";
import * as _257 from "./blockchain/types";
import * as _258 from "./consensus/types";
import * as _259 from "./consensus/wal";
import * as _260 from "./crypto/keys";
import * as _261 from "./crypto/proof";
import * as _262 from "./libs/bits/types";
import * as _263 from "./mempool/types";
import * as _264 from "./p2p/conn";
import * as _265 from "./p2p/pex";
import * as _266 from "./p2p/types";
import * as _267 from "./privval/types";
import * as _268 from "./rpc/grpc/types";
import * as _269 from "./state/types";
import * as _270 from "./statesync/types";
import * as _271 from "./store/types";
import * as _272 from "./types/block";
import * as _273 from "./types/canonical";
import * as _274 from "./types/events";
import * as _275 from "./types/evidence";
import * as _276 from "./types/params";
import * as _277 from "./types/types";
import * as _278 from "./types/validator";
import * as _279 from "./version/types";
export declare namespace tendermint {
  const abci: {
    checkTxTypeFromJSON(object: any): _256.CheckTxType;
    checkTxTypeToJSON(object: _256.CheckTxType): string;
    responseOfferSnapshot_ResultFromJSON(object: any): _256.ResponseOfferSnapshot_Result;
    responseOfferSnapshot_ResultToJSON(object: _256.ResponseOfferSnapshot_Result): string;
    responseApplySnapshotChunk_ResultFromJSON(object: any): _256.ResponseApplySnapshotChunk_Result;
    responseApplySnapshotChunk_ResultToJSON(object: _256.ResponseApplySnapshotChunk_Result): string;
    evidenceTypeFromJSON(object: any): _256.EvidenceType;
    evidenceTypeToJSON(object: _256.EvidenceType): string;
    CheckTxType: typeof _256.CheckTxType;
    ResponseOfferSnapshot_Result: typeof _256.ResponseOfferSnapshot_Result;
    ResponseApplySnapshotChunk_Result: typeof _256.ResponseApplySnapshotChunk_Result;
    EvidenceType: typeof _256.EvidenceType;
    Request: {
      encode(message: _256.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Request;
      fromJSON(object: any): _256.Request;
      toJSON(message: _256.Request): unknown;
      fromPartial(object: {
        echo?: {
          message?: string;
        };
        flush?: {};
        info?: {
          version?: string;
          blockVersion?: any;
          p2pVersion?: any;
        };
        setOption?: {
          key?: string;
          value?: string;
        };
        initChain?: {
          time?: Date;
          chainId?: string;
          consensusParams?: {
            block?: {
              maxBytes?: any;
              maxGas?: any;
            };
            evidence?: {
              maxAgeNumBlocks?: any;
              maxAgeDuration?: {
                seconds?: any;
                nanos?: number;
              };
              maxBytes?: any;
            };
            validator?: {
              pubKeyTypes?: string[];
            };
            version?: {
              appVersion?: any;
            };
          };
          validators?: {
            pubKey?: {
              ed25519?: Uint8Array;
              secp256k1?: Uint8Array;
            };
            power?: any;
          }[];
          appStateBytes?: Uint8Array;
          initialHeight?: any;
        };
        query?: {
          data?: Uint8Array;
          path?: string;
          height?: any;
          prove?: boolean;
        };
        beginBlock?: {
          hash?: Uint8Array;
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
          lastCommitInfo?: {
            round?: number;
            votes?: {
              validator?: {
                address?: Uint8Array;
                power?: any;
              };
              signedLastBlock?: boolean;
            }[];
          };
          byzantineValidators?: {
            type?: _256.EvidenceType;
            validator?: {
              address?: Uint8Array;
              power?: any;
            };
            height?: any;
            time?: Date;
            totalVotingPower?: any;
          }[];
        };
        checkTx?: {
          tx?: Uint8Array;
          type?: _256.CheckTxType;
        };
        deliverTx?: {
          tx?: Uint8Array;
        };
        endBlock?: {
          height?: any;
        };
        commit?: {};
        listSnapshots?: {};
        offerSnapshot?: {
          snapshot?: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
          };
          appHash?: Uint8Array;
        };
        loadSnapshotChunk?: {
          height?: any;
          format?: number;
          chunk?: number;
        };
        applySnapshotChunk?: {
          index?: number;
          chunk?: Uint8Array;
          sender?: string;
        };
      }): _256.Request;
    };
    RequestEcho: {
      encode(message: _256.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestEcho;
      fromJSON(object: any): _256.RequestEcho;
      toJSON(message: _256.RequestEcho): unknown;
      fromPartial(object: { message?: string }): _256.RequestEcho;
    };
    RequestFlush: {
      encode(_: _256.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestFlush;
      fromJSON(_: any): _256.RequestFlush;
      toJSON(_: _256.RequestFlush): unknown;
      fromPartial(_: {}): _256.RequestFlush;
    };
    RequestInfo: {
      encode(message: _256.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestInfo;
      fromJSON(object: any): _256.RequestInfo;
      toJSON(message: _256.RequestInfo): unknown;
      fromPartial(object: { version?: string; blockVersion?: any; p2pVersion?: any }): _256.RequestInfo;
    };
    RequestSetOption: {
      encode(
        message: _256.RequestSetOption,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestSetOption;
      fromJSON(object: any): _256.RequestSetOption;
      toJSON(message: _256.RequestSetOption): unknown;
      fromPartial(object: { key?: string; value?: string }): _256.RequestSetOption;
    };
    RequestInitChain: {
      encode(
        message: _256.RequestInitChain,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestInitChain;
      fromJSON(object: any): _256.RequestInitChain;
      toJSON(message: _256.RequestInitChain): unknown;
      fromPartial(object: {
        time?: Date;
        chainId?: string;
        consensusParams?: {
          block?: {
            maxBytes?: any;
            maxGas?: any;
          };
          evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: {
              seconds?: any;
              nanos?: number;
            };
            maxBytes?: any;
          };
          validator?: {
            pubKeyTypes?: string[];
          };
          version?: {
            appVersion?: any;
          };
        };
        validators?: {
          pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
          };
          power?: any;
        }[];
        appStateBytes?: Uint8Array;
        initialHeight?: any;
      }): _256.RequestInitChain;
    };
    RequestQuery: {
      encode(message: _256.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestQuery;
      fromJSON(object: any): _256.RequestQuery;
      toJSON(message: _256.RequestQuery): unknown;
      fromPartial(object: {
        data?: Uint8Array;
        path?: string;
        height?: any;
        prove?: boolean;
      }): _256.RequestQuery;
    };
    RequestBeginBlock: {
      encode(
        message: _256.RequestBeginBlock,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestBeginBlock;
      fromJSON(object: any): _256.RequestBeginBlock;
      toJSON(message: _256.RequestBeginBlock): unknown;
      fromPartial(object: {
        hash?: Uint8Array;
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
        lastCommitInfo?: {
          round?: number;
          votes?: {
            validator?: {
              address?: Uint8Array;
              power?: any;
            };
            signedLastBlock?: boolean;
          }[];
        };
        byzantineValidators?: {
          type?: _256.EvidenceType;
          validator?: {
            address?: Uint8Array;
            power?: any;
          };
          height?: any;
          time?: Date;
          totalVotingPower?: any;
        }[];
      }): _256.RequestBeginBlock;
    };
    RequestCheckTx: {
      encode(message: _256.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestCheckTx;
      fromJSON(object: any): _256.RequestCheckTx;
      toJSON(message: _256.RequestCheckTx): unknown;
      fromPartial(object: { tx?: Uint8Array; type?: _256.CheckTxType }): _256.RequestCheckTx;
    };
    RequestDeliverTx: {
      encode(
        message: _256.RequestDeliverTx,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestDeliverTx;
      fromJSON(object: any): _256.RequestDeliverTx;
      toJSON(message: _256.RequestDeliverTx): unknown;
      fromPartial(object: { tx?: Uint8Array }): _256.RequestDeliverTx;
    };
    RequestEndBlock: {
      encode(
        message: _256.RequestEndBlock,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestEndBlock;
      fromJSON(object: any): _256.RequestEndBlock;
      toJSON(message: _256.RequestEndBlock): unknown;
      fromPartial(object: { height?: any }): _256.RequestEndBlock;
    };
    RequestCommit: {
      encode(_: _256.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestCommit;
      fromJSON(_: any): _256.RequestCommit;
      toJSON(_: _256.RequestCommit): unknown;
      fromPartial(_: {}): _256.RequestCommit;
    };
    RequestListSnapshots: {
      encode(_: _256.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestListSnapshots;
      fromJSON(_: any): _256.RequestListSnapshots;
      toJSON(_: _256.RequestListSnapshots): unknown;
      fromPartial(_: {}): _256.RequestListSnapshots;
    };
    RequestOfferSnapshot: {
      encode(
        message: _256.RequestOfferSnapshot,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestOfferSnapshot;
      fromJSON(object: any): _256.RequestOfferSnapshot;
      toJSON(message: _256.RequestOfferSnapshot): unknown;
      fromPartial(object: {
        snapshot?: {
          height?: any;
          format?: number;
          chunks?: number;
          hash?: Uint8Array;
          metadata?: Uint8Array;
        };
        appHash?: Uint8Array;
      }): _256.RequestOfferSnapshot;
    };
    RequestLoadSnapshotChunk: {
      encode(
        message: _256.RequestLoadSnapshotChunk,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.RequestLoadSnapshotChunk;
      fromJSON(object: any): _256.RequestLoadSnapshotChunk;
      toJSON(message: _256.RequestLoadSnapshotChunk): unknown;
      fromPartial(object: { height?: any; format?: number; chunk?: number }): _256.RequestLoadSnapshotChunk;
    };
    RequestApplySnapshotChunk: {
      encode(
        message: _256.RequestApplySnapshotChunk,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(
        input: Uint8Array | import("protobufjs").Reader,
        length?: number,
      ): _256.RequestApplySnapshotChunk;
      fromJSON(object: any): _256.RequestApplySnapshotChunk;
      toJSON(message: _256.RequestApplySnapshotChunk): unknown;
      fromPartial(object: {
        index?: number;
        chunk?: Uint8Array;
        sender?: string;
      }): _256.RequestApplySnapshotChunk;
    };
    Response: {
      encode(message: _256.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Response;
      fromJSON(object: any): _256.Response;
      toJSON(message: _256.Response): unknown;
      fromPartial(object: {
        exception?: {
          error?: string;
        };
        echo?: {
          message?: string;
        };
        flush?: {};
        info?: {
          data?: string;
          version?: string;
          appVersion?: any;
          lastBlockHeight?: any;
          lastBlockAppHash?: Uint8Array;
        };
        setOption?: {
          code?: number;
          log?: string;
          info?: string;
        };
        initChain?: {
          consensusParams?: {
            block?: {
              maxBytes?: any;
              maxGas?: any;
            };
            evidence?: {
              maxAgeNumBlocks?: any;
              maxAgeDuration?: {
                seconds?: any;
                nanos?: number;
              };
              maxBytes?: any;
            };
            validator?: {
              pubKeyTypes?: string[];
            };
            version?: {
              appVersion?: any;
            };
          };
          validators?: {
            pubKey?: {
              ed25519?: Uint8Array;
              secp256k1?: Uint8Array;
            };
            power?: any;
          }[];
          appHash?: Uint8Array;
        };
        query?: {
          code?: number;
          log?: string;
          info?: string;
          index?: any;
          key?: Uint8Array;
          value?: Uint8Array;
          proofOps?: {
            ops?: {
              type?: string;
              key?: Uint8Array;
              data?: Uint8Array;
            }[];
          };
          height?: any;
          codespace?: string;
        };
        beginBlock?: {
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
        };
        checkTx?: {
          code?: number;
          data?: Uint8Array;
          log?: string;
          info?: string;
          gasWanted?: any;
          gasUsed?: any;
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
          codespace?: string;
        };
        deliverTx?: {
          code?: number;
          data?: Uint8Array;
          log?: string;
          info?: string;
          gasWanted?: any;
          gasUsed?: any;
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
          codespace?: string;
        };
        endBlock?: {
          validatorUpdates?: {
            pubKey?: {
              ed25519?: Uint8Array;
              secp256k1?: Uint8Array;
            };
            power?: any;
          }[];
          consensusParamUpdates?: {
            block?: {
              maxBytes?: any;
              maxGas?: any;
            };
            evidence?: {
              maxAgeNumBlocks?: any;
              maxAgeDuration?: {
                seconds?: any;
                nanos?: number;
              };
              maxBytes?: any;
            };
            validator?: {
              pubKeyTypes?: string[];
            };
            version?: {
              appVersion?: any;
            };
          };
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
        };
        commit?: {
          data?: Uint8Array;
          retainHeight?: any;
        };
        listSnapshots?: {
          snapshots?: {
            height?: any;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Uint8Array;
          }[];
        };
        offerSnapshot?: {
          result?: _256.ResponseOfferSnapshot_Result;
        };
        loadSnapshotChunk?: {
          chunk?: Uint8Array;
        };
        applySnapshotChunk?: {
          result?: _256.ResponseApplySnapshotChunk_Result;
          refetchChunks?: number[];
          rejectSenders?: string[];
        };
      }): _256.Response;
    };
    ResponseException: {
      encode(
        message: _256.ResponseException,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseException;
      fromJSON(object: any): _256.ResponseException;
      toJSON(message: _256.ResponseException): unknown;
      fromPartial(object: { error?: string }): _256.ResponseException;
    };
    ResponseEcho: {
      encode(message: _256.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseEcho;
      fromJSON(object: any): _256.ResponseEcho;
      toJSON(message: _256.ResponseEcho): unknown;
      fromPartial(object: { message?: string }): _256.ResponseEcho;
    };
    ResponseFlush: {
      encode(_: _256.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseFlush;
      fromJSON(_: any): _256.ResponseFlush;
      toJSON(_: _256.ResponseFlush): unknown;
      fromPartial(_: {}): _256.ResponseFlush;
    };
    ResponseInfo: {
      encode(message: _256.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseInfo;
      fromJSON(object: any): _256.ResponseInfo;
      toJSON(message: _256.ResponseInfo): unknown;
      fromPartial(object: {
        data?: string;
        version?: string;
        appVersion?: any;
        lastBlockHeight?: any;
        lastBlockAppHash?: Uint8Array;
      }): _256.ResponseInfo;
    };
    ResponseSetOption: {
      encode(
        message: _256.ResponseSetOption,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseSetOption;
      fromJSON(object: any): _256.ResponseSetOption;
      toJSON(message: _256.ResponseSetOption): unknown;
      fromPartial(object: { code?: number; log?: string; info?: string }): _256.ResponseSetOption;
    };
    ResponseInitChain: {
      encode(
        message: _256.ResponseInitChain,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseInitChain;
      fromJSON(object: any): _256.ResponseInitChain;
      toJSON(message: _256.ResponseInitChain): unknown;
      fromPartial(object: {
        consensusParams?: {
          block?: {
            maxBytes?: any;
            maxGas?: any;
          };
          evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: {
              seconds?: any;
              nanos?: number;
            };
            maxBytes?: any;
          };
          validator?: {
            pubKeyTypes?: string[];
          };
          version?: {
            appVersion?: any;
          };
        };
        validators?: {
          pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
          };
          power?: any;
        }[];
        appHash?: Uint8Array;
      }): _256.ResponseInitChain;
    };
    ResponseQuery: {
      encode(message: _256.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseQuery;
      fromJSON(object: any): _256.ResponseQuery;
      toJSON(message: _256.ResponseQuery): unknown;
      fromPartial(object: {
        code?: number;
        log?: string;
        info?: string;
        index?: any;
        key?: Uint8Array;
        value?: Uint8Array;
        proofOps?: {
          ops?: {
            type?: string;
            key?: Uint8Array;
            data?: Uint8Array;
          }[];
        };
        height?: any;
        codespace?: string;
      }): _256.ResponseQuery;
    };
    ResponseBeginBlock: {
      encode(
        message: _256.ResponseBeginBlock,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseBeginBlock;
      fromJSON(object: any): _256.ResponseBeginBlock;
      toJSON(message: _256.ResponseBeginBlock): unknown;
      fromPartial(object: {
        events?: {
          type?: string;
          attributes?: {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
          }[];
        }[];
      }): _256.ResponseBeginBlock;
    };
    ResponseCheckTx: {
      encode(
        message: _256.ResponseCheckTx,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseCheckTx;
      fromJSON(object: any): _256.ResponseCheckTx;
      toJSON(message: _256.ResponseCheckTx): unknown;
      fromPartial(object: {
        code?: number;
        data?: Uint8Array;
        log?: string;
        info?: string;
        gasWanted?: any;
        gasUsed?: any;
        events?: {
          type?: string;
          attributes?: {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
          }[];
        }[];
        codespace?: string;
      }): _256.ResponseCheckTx;
    };
    ResponseDeliverTx: {
      encode(
        message: _256.ResponseDeliverTx,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseDeliverTx;
      fromJSON(object: any): _256.ResponseDeliverTx;
      toJSON(message: _256.ResponseDeliverTx): unknown;
      fromPartial(object: {
        code?: number;
        data?: Uint8Array;
        log?: string;
        info?: string;
        gasWanted?: any;
        gasUsed?: any;
        events?: {
          type?: string;
          attributes?: {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
          }[];
        }[];
        codespace?: string;
      }): _256.ResponseDeliverTx;
    };
    ResponseEndBlock: {
      encode(
        message: _256.ResponseEndBlock,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseEndBlock;
      fromJSON(object: any): _256.ResponseEndBlock;
      toJSON(message: _256.ResponseEndBlock): unknown;
      fromPartial(object: {
        validatorUpdates?: {
          pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
          };
          power?: any;
        }[];
        consensusParamUpdates?: {
          block?: {
            maxBytes?: any;
            maxGas?: any;
          };
          evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: {
              seconds?: any;
              nanos?: number;
            };
            maxBytes?: any;
          };
          validator?: {
            pubKeyTypes?: string[];
          };
          version?: {
            appVersion?: any;
          };
        };
        events?: {
          type?: string;
          attributes?: {
            key?: Uint8Array;
            value?: Uint8Array;
            index?: boolean;
          }[];
        }[];
      }): _256.ResponseEndBlock;
    };
    ResponseCommit: {
      encode(message: _256.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseCommit;
      fromJSON(object: any): _256.ResponseCommit;
      toJSON(message: _256.ResponseCommit): unknown;
      fromPartial(object: { data?: Uint8Array; retainHeight?: any }): _256.ResponseCommit;
    };
    ResponseListSnapshots: {
      encode(
        message: _256.ResponseListSnapshots,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseListSnapshots;
      fromJSON(object: any): _256.ResponseListSnapshots;
      toJSON(message: _256.ResponseListSnapshots): unknown;
      fromPartial(object: {
        snapshots?: {
          height?: any;
          format?: number;
          chunks?: number;
          hash?: Uint8Array;
          metadata?: Uint8Array;
        }[];
      }): _256.ResponseListSnapshots;
    };
    ResponseOfferSnapshot: {
      encode(
        message: _256.ResponseOfferSnapshot,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ResponseOfferSnapshot;
      fromJSON(object: any): _256.ResponseOfferSnapshot;
      toJSON(message: _256.ResponseOfferSnapshot): unknown;
      fromPartial(object: { result?: _256.ResponseOfferSnapshot_Result }): _256.ResponseOfferSnapshot;
    };
    ResponseLoadSnapshotChunk: {
      encode(
        message: _256.ResponseLoadSnapshotChunk,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(
        input: Uint8Array | import("protobufjs").Reader,
        length?: number,
      ): _256.ResponseLoadSnapshotChunk;
      fromJSON(object: any): _256.ResponseLoadSnapshotChunk;
      toJSON(message: _256.ResponseLoadSnapshotChunk): unknown;
      fromPartial(object: { chunk?: Uint8Array }): _256.ResponseLoadSnapshotChunk;
    };
    ResponseApplySnapshotChunk: {
      encode(
        message: _256.ResponseApplySnapshotChunk,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(
        input: Uint8Array | import("protobufjs").Reader,
        length?: number,
      ): _256.ResponseApplySnapshotChunk;
      fromJSON(object: any): _256.ResponseApplySnapshotChunk;
      toJSON(message: _256.ResponseApplySnapshotChunk): unknown;
      fromPartial(object: {
        result?: _256.ResponseApplySnapshotChunk_Result;
        refetchChunks?: number[];
        rejectSenders?: string[];
      }): _256.ResponseApplySnapshotChunk;
    };
    ConsensusParams: {
      encode(
        message: _256.ConsensusParams,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ConsensusParams;
      fromJSON(object: any): _256.ConsensusParams;
      toJSON(message: _256.ConsensusParams): unknown;
      fromPartial(object: {
        block?: {
          maxBytes?: any;
          maxGas?: any;
        };
        evidence?: {
          maxAgeNumBlocks?: any;
          maxAgeDuration?: {
            seconds?: any;
            nanos?: number;
          };
          maxBytes?: any;
        };
        validator?: {
          pubKeyTypes?: string[];
        };
        version?: {
          appVersion?: any;
        };
      }): _256.ConsensusParams;
    };
    BlockParams: {
      encode(message: _256.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.BlockParams;
      fromJSON(object: any): _256.BlockParams;
      toJSON(message: _256.BlockParams): unknown;
      fromPartial(object: { maxBytes?: any; maxGas?: any }): _256.BlockParams;
    };
    LastCommitInfo: {
      encode(message: _256.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.LastCommitInfo;
      fromJSON(object: any): _256.LastCommitInfo;
      toJSON(message: _256.LastCommitInfo): unknown;
      fromPartial(object: {
        round?: number;
        votes?: {
          validator?: {
            address?: Uint8Array;
            power?: any;
          };
          signedLastBlock?: boolean;
        }[];
      }): _256.LastCommitInfo;
    };
    Event: {
      encode(message: _256.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Event;
      fromJSON(object: any): _256.Event;
      toJSON(message: _256.Event): unknown;
      fromPartial(object: {
        type?: string;
        attributes?: {
          key?: Uint8Array;
          value?: Uint8Array;
          index?: boolean;
        }[];
      }): _256.Event;
    };
    EventAttribute: {
      encode(message: _256.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.EventAttribute;
      fromJSON(object: any): _256.EventAttribute;
      toJSON(message: _256.EventAttribute): unknown;
      fromPartial(object: { key?: Uint8Array; value?: Uint8Array; index?: boolean }): _256.EventAttribute;
    };
    TxResult: {
      encode(message: _256.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.TxResult;
      fromJSON(object: any): _256.TxResult;
      toJSON(message: _256.TxResult): unknown;
      fromPartial(object: {
        height?: any;
        index?: number;
        tx?: Uint8Array;
        result?: {
          code?: number;
          data?: Uint8Array;
          log?: string;
          info?: string;
          gasWanted?: any;
          gasUsed?: any;
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
          codespace?: string;
        };
      }): _256.TxResult;
    };
    Validator: {
      encode(message: _256.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Validator;
      fromJSON(object: any): _256.Validator;
      toJSON(message: _256.Validator): unknown;
      fromPartial(object: { address?: Uint8Array; power?: any }): _256.Validator;
    };
    ValidatorUpdate: {
      encode(
        message: _256.ValidatorUpdate,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.ValidatorUpdate;
      fromJSON(object: any): _256.ValidatorUpdate;
      toJSON(message: _256.ValidatorUpdate): unknown;
      fromPartial(object: {
        pubKey?: {
          ed25519?: Uint8Array;
          secp256k1?: Uint8Array;
        };
        power?: any;
      }): _256.ValidatorUpdate;
    };
    VoteInfo: {
      encode(message: _256.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.VoteInfo;
      fromJSON(object: any): _256.VoteInfo;
      toJSON(message: _256.VoteInfo): unknown;
      fromPartial(object: {
        validator?: {
          address?: Uint8Array;
          power?: any;
        };
        signedLastBlock?: boolean;
      }): _256.VoteInfo;
    };
    Evidence: {
      encode(message: _256.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Evidence;
      fromJSON(object: any): _256.Evidence;
      toJSON(message: _256.Evidence): unknown;
      fromPartial(object: {
        type?: _256.EvidenceType;
        validator?: {
          address?: Uint8Array;
          power?: any;
        };
        height?: any;
        time?: Date;
        totalVotingPower?: any;
      }): _256.Evidence;
    };
    Snapshot: {
      encode(message: _256.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Snapshot;
      fromJSON(object: any): _256.Snapshot;
      toJSON(message: _256.Snapshot): unknown;
      fromPartial(object: {
        height?: any;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: Uint8Array;
      }): _256.Snapshot;
    };
  };
  const blockchain: {
    BlockRequest: {
      encode(message: _257.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.BlockRequest;
      fromJSON(object: any): _257.BlockRequest;
      toJSON(message: _257.BlockRequest): unknown;
      fromPartial(object: { height?: any }): _257.BlockRequest;
    };
    NoBlockResponse: {
      encode(
        message: _257.NoBlockResponse,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.NoBlockResponse;
      fromJSON(object: any): _257.NoBlockResponse;
      toJSON(message: _257.NoBlockResponse): unknown;
      fromPartial(object: { height?: any }): _257.NoBlockResponse;
    };
    BlockResponse: {
      encode(message: _257.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.BlockResponse;
      fromJSON(object: any): _257.BlockResponse;
      toJSON(message: _257.BlockResponse): unknown;
      fromPartial(object: {
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
                  type?: _277.SignedMsgType;
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
                  type?: _277.SignedMsgType;
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
                        blockIdFlag?: _277.BlockIDFlag;
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
              blockIdFlag?: _277.BlockIDFlag;
              validatorAddress?: Uint8Array;
              timestamp?: Date;
              signature?: Uint8Array;
            }[];
          };
        };
      }): _257.BlockResponse;
    };
    StatusRequest: {
      encode(_: _257.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.StatusRequest;
      fromJSON(_: any): _257.StatusRequest;
      toJSON(_: _257.StatusRequest): unknown;
      fromPartial(_: {}): _257.StatusRequest;
    };
    StatusResponse: {
      encode(message: _257.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.StatusResponse;
      fromJSON(object: any): _257.StatusResponse;
      toJSON(message: _257.StatusResponse): unknown;
      fromPartial(object: { height?: any; base?: any }): _257.StatusResponse;
    };
    Message: {
      encode(message: _257.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.Message;
      fromJSON(object: any): _257.Message;
      toJSON(message: _257.Message): unknown;
      fromPartial(object: {
        blockRequest?: {
          height?: any;
        };
        noBlockResponse?: {
          height?: any;
        };
        blockResponse?: {
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
                    type?: _277.SignedMsgType;
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
                    type?: _277.SignedMsgType;
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
                          blockIdFlag?: _277.BlockIDFlag;
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
                blockIdFlag?: _277.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
              }[];
            };
          };
        };
        statusRequest?: {};
        statusResponse?: {
          height?: any;
          base?: any;
        };
      }): _257.Message;
    };
  };
  const consensus: {
    MsgInfo: {
      encode(message: _259.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.MsgInfo;
      fromJSON(object: any): _259.MsgInfo;
      toJSON(message: _259.MsgInfo): unknown;
      fromPartial(object: {
        msg?: {
          newRoundStep?: {
            height?: any;
            round?: number;
            step?: number;
            secondsSinceStartTime?: any;
            lastCommitRound?: number;
          };
          newValidBlock?: {
            height?: any;
            round?: number;
            blockPartSetHeader?: {
              total?: number;
              hash?: Uint8Array;
            };
            blockParts?: {
              bits?: any;
              elems?: any[];
            };
            isCommit?: boolean;
          };
          proposal?: {
            proposal?: {
              type?: _277.SignedMsgType;
              height?: any;
              round?: number;
              polRound?: number;
              blockId?: {
                hash?: Uint8Array;
                partSetHeader?: {
                  total?: number;
                  hash?: Uint8Array;
                };
              };
              timestamp?: Date;
              signature?: Uint8Array;
            };
          };
          proposalPol?: {
            height?: any;
            proposalPolRound?: number;
            proposalPol?: {
              bits?: any;
              elems?: any[];
            };
          };
          blockPart?: {
            height?: any;
            round?: number;
            part?: {
              index?: number;
              bytes?: Uint8Array;
              proof?: {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
              };
            };
          };
          vote?: {
            vote?: {
              type?: _277.SignedMsgType;
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
          };
          hasVote?: {
            height?: any;
            round?: number;
            type?: _277.SignedMsgType;
            index?: number;
          };
          voteSetMaj23?: {
            height?: any;
            round?: number;
            type?: _277.SignedMsgType;
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
          };
          voteSetBits?: {
            height?: any;
            round?: number;
            type?: _277.SignedMsgType;
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
            votes?: {
              bits?: any;
              elems?: any[];
            };
          };
        };
        peerId?: string;
      }): _259.MsgInfo;
    };
    TimeoutInfo: {
      encode(message: _259.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.TimeoutInfo;
      fromJSON(object: any): _259.TimeoutInfo;
      toJSON(message: _259.TimeoutInfo): unknown;
      fromPartial(object: {
        duration?: {
          seconds?: any;
          nanos?: number;
        };
        height?: any;
        round?: number;
        step?: number;
      }): _259.TimeoutInfo;
    };
    EndHeight: {
      encode(message: _259.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EndHeight;
      fromJSON(object: any): _259.EndHeight;
      toJSON(message: _259.EndHeight): unknown;
      fromPartial(object: { height?: any }): _259.EndHeight;
    };
    WALMessage: {
      encode(message: _259.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.WALMessage;
      fromJSON(object: any): _259.WALMessage;
      toJSON(message: _259.WALMessage): unknown;
      fromPartial(object: {
        eventDataRoundState?: {
          height?: any;
          round?: number;
          step?: string;
        };
        msgInfo?: {
          msg?: {
            newRoundStep?: {
              height?: any;
              round?: number;
              step?: number;
              secondsSinceStartTime?: any;
              lastCommitRound?: number;
            };
            newValidBlock?: {
              height?: any;
              round?: number;
              blockPartSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
              blockParts?: {
                bits?: any;
                elems?: any[];
              };
              isCommit?: boolean;
            };
            proposal?: {
              proposal?: {
                type?: _277.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                  hash?: Uint8Array;
                  partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                  };
                };
                timestamp?: Date;
                signature?: Uint8Array;
              };
            };
            proposalPol?: {
              height?: any;
              proposalPolRound?: number;
              proposalPol?: {
                bits?: any;
                elems?: any[];
              };
            };
            blockPart?: {
              height?: any;
              round?: number;
              part?: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                  total?: any;
                  index?: any;
                  leafHash?: Uint8Array;
                  aunts?: Uint8Array[];
                };
              };
            };
            vote?: {
              vote?: {
                type?: _277.SignedMsgType;
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
            };
            hasVote?: {
              height?: any;
              round?: number;
              type?: _277.SignedMsgType;
              index?: number;
            };
            voteSetMaj23?: {
              height?: any;
              round?: number;
              type?: _277.SignedMsgType;
              blockId?: {
                hash?: Uint8Array;
                partSetHeader?: {
                  total?: number;
                  hash?: Uint8Array;
                };
              };
            };
            voteSetBits?: {
              height?: any;
              round?: number;
              type?: _277.SignedMsgType;
              blockId?: {
                hash?: Uint8Array;
                partSetHeader?: {
                  total?: number;
                  hash?: Uint8Array;
                };
              };
              votes?: {
                bits?: any;
                elems?: any[];
              };
            };
          };
          peerId?: string;
        };
        timeoutInfo?: {
          duration?: {
            seconds?: any;
            nanos?: number;
          };
          height?: any;
          round?: number;
          step?: number;
        };
        endHeight?: {
          height?: any;
        };
      }): _259.WALMessage;
    };
    TimedWALMessage: {
      encode(
        message: _259.TimedWALMessage,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.TimedWALMessage;
      fromJSON(object: any): _259.TimedWALMessage;
      toJSON(message: _259.TimedWALMessage): unknown;
      fromPartial(object: {
        time?: Date;
        msg?: {
          eventDataRoundState?: {
            height?: any;
            round?: number;
            step?: string;
          };
          msgInfo?: {
            msg?: {
              newRoundStep?: {
                height?: any;
                round?: number;
                step?: number;
                secondsSinceStartTime?: any;
                lastCommitRound?: number;
              };
              newValidBlock?: {
                height?: any;
                round?: number;
                blockPartSetHeader?: {
                  total?: number;
                  hash?: Uint8Array;
                };
                blockParts?: {
                  bits?: any;
                  elems?: any[];
                };
                isCommit?: boolean;
              };
              proposal?: {
                proposal?: {
                  type?: _277.SignedMsgType;
                  height?: any;
                  round?: number;
                  polRound?: number;
                  blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                      total?: number;
                      hash?: Uint8Array;
                    };
                  };
                  timestamp?: Date;
                  signature?: Uint8Array;
                };
              };
              proposalPol?: {
                height?: any;
                proposalPolRound?: number;
                proposalPol?: {
                  bits?: any;
                  elems?: any[];
                };
              };
              blockPart?: {
                height?: any;
                round?: number;
                part?: {
                  index?: number;
                  bytes?: Uint8Array;
                  proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                  };
                };
              };
              vote?: {
                vote?: {
                  type?: _277.SignedMsgType;
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
              };
              hasVote?: {
                height?: any;
                round?: number;
                type?: _277.SignedMsgType;
                index?: number;
              };
              voteSetMaj23?: {
                height?: any;
                round?: number;
                type?: _277.SignedMsgType;
                blockId?: {
                  hash?: Uint8Array;
                  partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                  };
                };
              };
              voteSetBits?: {
                height?: any;
                round?: number;
                type?: _277.SignedMsgType;
                blockId?: {
                  hash?: Uint8Array;
                  partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                  };
                };
                votes?: {
                  bits?: any;
                  elems?: any[];
                };
              };
            };
            peerId?: string;
          };
          timeoutInfo?: {
            duration?: {
              seconds?: any;
              nanos?: number;
            };
            height?: any;
            round?: number;
            step?: number;
          };
          endHeight?: {
            height?: any;
          };
        };
      }): _259.TimedWALMessage;
    };
    NewRoundStep: {
      encode(message: _258.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.NewRoundStep;
      fromJSON(object: any): _258.NewRoundStep;
      toJSON(message: _258.NewRoundStep): unknown;
      fromPartial(object: {
        height?: any;
        round?: number;
        step?: number;
        secondsSinceStartTime?: any;
        lastCommitRound?: number;
      }): _258.NewRoundStep;
    };
    NewValidBlock: {
      encode(message: _258.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.NewValidBlock;
      fromJSON(object: any): _258.NewValidBlock;
      toJSON(message: _258.NewValidBlock): unknown;
      fromPartial(object: {
        height?: any;
        round?: number;
        blockPartSetHeader?: {
          total?: number;
          hash?: Uint8Array;
        };
        blockParts?: {
          bits?: any;
          elems?: any[];
        };
        isCommit?: boolean;
      }): _258.NewValidBlock;
    };
    Proposal: {
      encode(message: _258.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.Proposal;
      fromJSON(object: any): _258.Proposal;
      toJSON(message: _258.Proposal): unknown;
      fromPartial(object: {
        proposal?: {
          type?: _277.SignedMsgType;
          height?: any;
          round?: number;
          polRound?: number;
          blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
              total?: number;
              hash?: Uint8Array;
            };
          };
          timestamp?: Date;
          signature?: Uint8Array;
        };
      }): _258.Proposal;
    };
    ProposalPOL: {
      encode(message: _258.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.ProposalPOL;
      fromJSON(object: any): _258.ProposalPOL;
      toJSON(message: _258.ProposalPOL): unknown;
      fromPartial(object: {
        height?: any;
        proposalPolRound?: number;
        proposalPol?: {
          bits?: any;
          elems?: any[];
        };
      }): _258.ProposalPOL;
    };
    BlockPart: {
      encode(message: _258.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.BlockPart;
      fromJSON(object: any): _258.BlockPart;
      toJSON(message: _258.BlockPart): unknown;
      fromPartial(object: {
        height?: any;
        round?: number;
        part?: {
          index?: number;
          bytes?: Uint8Array;
          proof?: {
            total?: any;
            index?: any;
            leafHash?: Uint8Array;
            aunts?: Uint8Array[];
          };
        };
      }): _258.BlockPart;
    };
    Vote: {
      encode(message: _258.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.Vote;
      fromJSON(object: any): _258.Vote;
      toJSON(message: _258.Vote): unknown;
      fromPartial(object: {
        vote?: {
          type?: _277.SignedMsgType;
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
      }): _258.Vote;
    };
    HasVote: {
      encode(message: _258.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.HasVote;
      fromJSON(object: any): _258.HasVote;
      toJSON(message: _258.HasVote): unknown;
      fromPartial(object: {
        height?: any;
        round?: number;
        type?: _277.SignedMsgType;
        index?: number;
      }): _258.HasVote;
    };
    VoteSetMaj23: {
      encode(message: _258.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.VoteSetMaj23;
      fromJSON(object: any): _258.VoteSetMaj23;
      toJSON(message: _258.VoteSetMaj23): unknown;
      fromPartial(object: {
        height?: any;
        round?: number;
        type?: _277.SignedMsgType;
        blockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
      }): _258.VoteSetMaj23;
    };
    VoteSetBits: {
      encode(message: _258.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.VoteSetBits;
      fromJSON(object: any): _258.VoteSetBits;
      toJSON(message: _258.VoteSetBits): unknown;
      fromPartial(object: {
        height?: any;
        round?: number;
        type?: _277.SignedMsgType;
        blockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
        votes?: {
          bits?: any;
          elems?: any[];
        };
      }): _258.VoteSetBits;
    };
    Message: {
      encode(message: _258.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.Message;
      fromJSON(object: any): _258.Message;
      toJSON(message: _258.Message): unknown;
      fromPartial(object: {
        newRoundStep?: {
          height?: any;
          round?: number;
          step?: number;
          secondsSinceStartTime?: any;
          lastCommitRound?: number;
        };
        newValidBlock?: {
          height?: any;
          round?: number;
          blockPartSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
          blockParts?: {
            bits?: any;
            elems?: any[];
          };
          isCommit?: boolean;
        };
        proposal?: {
          proposal?: {
            type?: _277.SignedMsgType;
            height?: any;
            round?: number;
            polRound?: number;
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
            timestamp?: Date;
            signature?: Uint8Array;
          };
        };
        proposalPol?: {
          height?: any;
          proposalPolRound?: number;
          proposalPol?: {
            bits?: any;
            elems?: any[];
          };
        };
        blockPart?: {
          height?: any;
          round?: number;
          part?: {
            index?: number;
            bytes?: Uint8Array;
            proof?: {
              total?: any;
              index?: any;
              leafHash?: Uint8Array;
              aunts?: Uint8Array[];
            };
          };
        };
        vote?: {
          vote?: {
            type?: _277.SignedMsgType;
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
        };
        hasVote?: {
          height?: any;
          round?: number;
          type?: _277.SignedMsgType;
          index?: number;
        };
        voteSetMaj23?: {
          height?: any;
          round?: number;
          type?: _277.SignedMsgType;
          blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
              total?: number;
              hash?: Uint8Array;
            };
          };
        };
        voteSetBits?: {
          height?: any;
          round?: number;
          type?: _277.SignedMsgType;
          blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
              total?: number;
              hash?: Uint8Array;
            };
          };
          votes?: {
            bits?: any;
            elems?: any[];
          };
        };
      }): _258.Message;
    };
  };
  const crypto: {
    Proof: {
      encode(message: _261.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Proof;
      fromJSON(object: any): _261.Proof;
      toJSON(message: _261.Proof): unknown;
      fromPartial(object: {
        total?: any;
        index?: any;
        leafHash?: Uint8Array;
        aunts?: Uint8Array[];
      }): _261.Proof;
    };
    ValueOp: {
      encode(message: _261.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ValueOp;
      fromJSON(object: any): _261.ValueOp;
      toJSON(message: _261.ValueOp): unknown;
      fromPartial(object: {
        key?: Uint8Array;
        proof?: {
          total?: any;
          index?: any;
          leafHash?: Uint8Array;
          aunts?: Uint8Array[];
        };
      }): _261.ValueOp;
    };
    DominoOp: {
      encode(message: _261.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.DominoOp;
      fromJSON(object: any): _261.DominoOp;
      toJSON(message: _261.DominoOp): unknown;
      fromPartial(object: { key?: string; input?: string; output?: string }): _261.DominoOp;
    };
    ProofOp: {
      encode(message: _261.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ProofOp;
      fromJSON(object: any): _261.ProofOp;
      toJSON(message: _261.ProofOp): unknown;
      fromPartial(object: { type?: string; key?: Uint8Array; data?: Uint8Array }): _261.ProofOp;
    };
    ProofOps: {
      encode(message: _261.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ProofOps;
      fromJSON(object: any): _261.ProofOps;
      toJSON(message: _261.ProofOps): unknown;
      fromPartial(object: {
        ops?: {
          type?: string;
          key?: Uint8Array;
          data?: Uint8Array;
        }[];
      }): _261.ProofOps;
    };
    PublicKey: {
      encode(message: _260.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.PublicKey;
      fromJSON(object: any): _260.PublicKey;
      toJSON(message: _260.PublicKey): unknown;
      fromPartial(object: { ed25519?: Uint8Array; secp256k1?: Uint8Array }): _260.PublicKey;
    };
  };
  namespace libs {
    const bits: {
      BitArray: {
        encode(message: _262.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.BitArray;
        fromJSON(object: any): _262.BitArray;
        toJSON(message: _262.BitArray): unknown;
        fromPartial(object: { bits?: any; elems?: any[] }): _262.BitArray;
      };
    };
  }
  const mempool: {
    Txs: {
      encode(message: _263.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Txs;
      fromJSON(object: any): _263.Txs;
      toJSON(message: _263.Txs): unknown;
      fromPartial(object: { txs?: Uint8Array[] }): _263.Txs;
    };
    Message: {
      encode(message: _263.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Message;
      fromJSON(object: any): _263.Message;
      toJSON(message: _263.Message): unknown;
      fromPartial(object: {
        txs?: {
          txs?: Uint8Array[];
        };
      }): _263.Message;
    };
  };
  const p2p: {
    NetAddress: {
      encode(message: _266.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.NetAddress;
      fromJSON(object: any): _266.NetAddress;
      toJSON(message: _266.NetAddress): unknown;
      fromPartial(object: { id?: string; ip?: string; port?: number }): _266.NetAddress;
    };
    ProtocolVersion: {
      encode(
        message: _266.ProtocolVersion,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.ProtocolVersion;
      fromJSON(object: any): _266.ProtocolVersion;
      toJSON(message: _266.ProtocolVersion): unknown;
      fromPartial(object: { p2p?: any; block?: any; app?: any }): _266.ProtocolVersion;
    };
    DefaultNodeInfo: {
      encode(
        message: _266.DefaultNodeInfo,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.DefaultNodeInfo;
      fromJSON(object: any): _266.DefaultNodeInfo;
      toJSON(message: _266.DefaultNodeInfo): unknown;
      fromPartial(object: {
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
      }): _266.DefaultNodeInfo;
    };
    DefaultNodeInfoOther: {
      encode(
        message: _266.DefaultNodeInfoOther,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.DefaultNodeInfoOther;
      fromJSON(object: any): _266.DefaultNodeInfoOther;
      toJSON(message: _266.DefaultNodeInfoOther): unknown;
      fromPartial(object: { txIndex?: string; rpcAddress?: string }): _266.DefaultNodeInfoOther;
    };
    PexRequest: {
      encode(_: _265.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.PexRequest;
      fromJSON(_: any): _265.PexRequest;
      toJSON(_: _265.PexRequest): unknown;
      fromPartial(_: {}): _265.PexRequest;
    };
    PexAddrs: {
      encode(message: _265.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.PexAddrs;
      fromJSON(object: any): _265.PexAddrs;
      toJSON(message: _265.PexAddrs): unknown;
      fromPartial(object: {
        addrs?: {
          id?: string;
          ip?: string;
          port?: number;
        }[];
      }): _265.PexAddrs;
    };
    Message: {
      encode(message: _265.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Message;
      fromJSON(object: any): _265.Message;
      toJSON(message: _265.Message): unknown;
      fromPartial(object: {
        pexRequest?: {};
        pexAddrs?: {
          addrs?: {
            id?: string;
            ip?: string;
            port?: number;
          }[];
        };
      }): _265.Message;
    };
    PacketPing: {
      encode(_: _264.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.PacketPing;
      fromJSON(_: any): _264.PacketPing;
      toJSON(_: _264.PacketPing): unknown;
      fromPartial(_: {}): _264.PacketPing;
    };
    PacketPong: {
      encode(_: _264.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.PacketPong;
      fromJSON(_: any): _264.PacketPong;
      toJSON(_: _264.PacketPong): unknown;
      fromPartial(_: {}): _264.PacketPong;
    };
    PacketMsg: {
      encode(message: _264.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.PacketMsg;
      fromJSON(object: any): _264.PacketMsg;
      toJSON(message: _264.PacketMsg): unknown;
      fromPartial(object: { channelId?: number; eof?: boolean; data?: Uint8Array }): _264.PacketMsg;
    };
    Packet: {
      encode(message: _264.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.Packet;
      fromJSON(object: any): _264.Packet;
      toJSON(message: _264.Packet): unknown;
      fromPartial(object: {
        packetPing?: {};
        packetPong?: {};
        packetMsg?: {
          channelId?: number;
          eof?: boolean;
          data?: Uint8Array;
        };
      }): _264.Packet;
    };
    AuthSigMessage: {
      encode(message: _264.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.AuthSigMessage;
      fromJSON(object: any): _264.AuthSigMessage;
      toJSON(message: _264.AuthSigMessage): unknown;
      fromPartial(object: {
        pubKey?: {
          ed25519?: Uint8Array;
          secp256k1?: Uint8Array;
        };
        sig?: Uint8Array;
      }): _264.AuthSigMessage;
    };
  };
  const privval: {
    errorsFromJSON(object: any): _267.Errors;
    errorsToJSON(object: _267.Errors): string;
    Errors: typeof _267.Errors;
    RemoteSignerError: {
      encode(
        message: _267.RemoteSignerError,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.RemoteSignerError;
      fromJSON(object: any): _267.RemoteSignerError;
      toJSON(message: _267.RemoteSignerError): unknown;
      fromPartial(object: { code?: number; description?: string }): _267.RemoteSignerError;
    };
    PubKeyRequest: {
      encode(message: _267.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PubKeyRequest;
      fromJSON(object: any): _267.PubKeyRequest;
      toJSON(message: _267.PubKeyRequest): unknown;
      fromPartial(object: { chainId?: string }): _267.PubKeyRequest;
    };
    PubKeyResponse: {
      encode(message: _267.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PubKeyResponse;
      fromJSON(object: any): _267.PubKeyResponse;
      toJSON(message: _267.PubKeyResponse): unknown;
      fromPartial(object: {
        pubKey?: {
          ed25519?: Uint8Array;
          secp256k1?: Uint8Array;
        };
        error?: {
          code?: number;
          description?: string;
        };
      }): _267.PubKeyResponse;
    };
    SignVoteRequest: {
      encode(
        message: _267.SignVoteRequest,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.SignVoteRequest;
      fromJSON(object: any): _267.SignVoteRequest;
      toJSON(message: _267.SignVoteRequest): unknown;
      fromPartial(object: {
        vote?: {
          type?: _277.SignedMsgType;
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
        chainId?: string;
      }): _267.SignVoteRequest;
    };
    SignedVoteResponse: {
      encode(
        message: _267.SignedVoteResponse,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.SignedVoteResponse;
      fromJSON(object: any): _267.SignedVoteResponse;
      toJSON(message: _267.SignedVoteResponse): unknown;
      fromPartial(object: {
        vote?: {
          type?: _277.SignedMsgType;
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
        error?: {
          code?: number;
          description?: string;
        };
      }): _267.SignedVoteResponse;
    };
    SignProposalRequest: {
      encode(
        message: _267.SignProposalRequest,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.SignProposalRequest;
      fromJSON(object: any): _267.SignProposalRequest;
      toJSON(message: _267.SignProposalRequest): unknown;
      fromPartial(object: {
        proposal?: {
          type?: _277.SignedMsgType;
          height?: any;
          round?: number;
          polRound?: number;
          blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
              total?: number;
              hash?: Uint8Array;
            };
          };
          timestamp?: Date;
          signature?: Uint8Array;
        };
        chainId?: string;
      }): _267.SignProposalRequest;
    };
    SignedProposalResponse: {
      encode(
        message: _267.SignedProposalResponse,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.SignedProposalResponse;
      fromJSON(object: any): _267.SignedProposalResponse;
      toJSON(message: _267.SignedProposalResponse): unknown;
      fromPartial(object: {
        proposal?: {
          type?: _277.SignedMsgType;
          height?: any;
          round?: number;
          polRound?: number;
          blockId?: {
            hash?: Uint8Array;
            partSetHeader?: {
              total?: number;
              hash?: Uint8Array;
            };
          };
          timestamp?: Date;
          signature?: Uint8Array;
        };
        error?: {
          code?: number;
          description?: string;
        };
      }): _267.SignedProposalResponse;
    };
    PingRequest: {
      encode(_: _267.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PingRequest;
      fromJSON(_: any): _267.PingRequest;
      toJSON(_: _267.PingRequest): unknown;
      fromPartial(_: {}): _267.PingRequest;
    };
    PingResponse: {
      encode(_: _267.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.PingResponse;
      fromJSON(_: any): _267.PingResponse;
      toJSON(_: _267.PingResponse): unknown;
      fromPartial(_: {}): _267.PingResponse;
    };
    Message: {
      encode(message: _267.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Message;
      fromJSON(object: any): _267.Message;
      toJSON(message: _267.Message): unknown;
      fromPartial(object: {
        pubKeyRequest?: {
          chainId?: string;
        };
        pubKeyResponse?: {
          pubKey?: {
            ed25519?: Uint8Array;
            secp256k1?: Uint8Array;
          };
          error?: {
            code?: number;
            description?: string;
          };
        };
        signVoteRequest?: {
          vote?: {
            type?: _277.SignedMsgType;
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
          chainId?: string;
        };
        signedVoteResponse?: {
          vote?: {
            type?: _277.SignedMsgType;
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
          error?: {
            code?: number;
            description?: string;
          };
        };
        signProposalRequest?: {
          proposal?: {
            type?: _277.SignedMsgType;
            height?: any;
            round?: number;
            polRound?: number;
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
            timestamp?: Date;
            signature?: Uint8Array;
          };
          chainId?: string;
        };
        signedProposalResponse?: {
          proposal?: {
            type?: _277.SignedMsgType;
            height?: any;
            round?: number;
            polRound?: number;
            blockId?: {
              hash?: Uint8Array;
              partSetHeader?: {
                total?: number;
                hash?: Uint8Array;
              };
            };
            timestamp?: Date;
            signature?: Uint8Array;
          };
          error?: {
            code?: number;
            description?: string;
          };
        };
        pingRequest?: {};
        pingResponse?: {};
      }): _267.Message;
    };
  };
  namespace rpc {
    const grpc: {
      RequestPing: {
        encode(_: _268.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.RequestPing;
        fromJSON(_: any): _268.RequestPing;
        toJSON(_: _268.RequestPing): unknown;
        fromPartial(_: {}): _268.RequestPing;
      };
      RequestBroadcastTx: {
        encode(
          message: _268.RequestBroadcastTx,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.RequestBroadcastTx;
        fromJSON(object: any): _268.RequestBroadcastTx;
        toJSON(message: _268.RequestBroadcastTx): unknown;
        fromPartial(object: { tx?: Uint8Array }): _268.RequestBroadcastTx;
      };
      ResponsePing: {
        encode(_: _268.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.ResponsePing;
        fromJSON(_: any): _268.ResponsePing;
        toJSON(_: _268.ResponsePing): unknown;
        fromPartial(_: {}): _268.ResponsePing;
      };
      ResponseBroadcastTx: {
        encode(
          message: _268.ResponseBroadcastTx,
          writer?: import("protobufjs").Writer,
        ): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.ResponseBroadcastTx;
        fromJSON(object: any): _268.ResponseBroadcastTx;
        toJSON(message: _268.ResponseBroadcastTx): unknown;
        fromPartial(object: {
          checkTx?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
            codespace?: string;
          };
          deliverTx?: {
            code?: number;
            data?: Uint8Array;
            log?: string;
            info?: string;
            gasWanted?: any;
            gasUsed?: any;
            events?: {
              type?: string;
              attributes?: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
              }[];
            }[];
            codespace?: string;
          };
        }): _268.ResponseBroadcastTx;
      };
    };
  }
  const state: {
    ABCIResponses: {
      encode(message: _269.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.ABCIResponses;
      fromJSON(object: any): _269.ABCIResponses;
      toJSON(message: _269.ABCIResponses): unknown;
      fromPartial(object: {
        deliverTxs?: {
          code?: number;
          data?: Uint8Array;
          log?: string;
          info?: string;
          gasWanted?: any;
          gasUsed?: any;
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
          codespace?: string;
        }[];
        endBlock?: {
          validatorUpdates?: {
            pubKey?: {
              ed25519?: Uint8Array;
              secp256k1?: Uint8Array;
            };
            power?: any;
          }[];
          consensusParamUpdates?: {
            block?: {
              maxBytes?: any;
              maxGas?: any;
            };
            evidence?: {
              maxAgeNumBlocks?: any;
              maxAgeDuration?: {
                seconds?: any;
                nanos?: number;
              };
              maxBytes?: any;
            };
            validator?: {
              pubKeyTypes?: string[];
            };
            version?: {
              appVersion?: any;
            };
          };
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
        };
        beginBlock?: {
          events?: {
            type?: string;
            attributes?: {
              key?: Uint8Array;
              value?: Uint8Array;
              index?: boolean;
            }[];
          }[];
        };
      }): _269.ABCIResponses;
    };
    ValidatorsInfo: {
      encode(message: _269.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.ValidatorsInfo;
      fromJSON(object: any): _269.ValidatorsInfo;
      toJSON(message: _269.ValidatorsInfo): unknown;
      fromPartial(object: {
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
        lastHeightChanged?: any;
      }): _269.ValidatorsInfo;
    };
    ConsensusParamsInfo: {
      encode(
        message: _269.ConsensusParamsInfo,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.ConsensusParamsInfo;
      fromJSON(object: any): _269.ConsensusParamsInfo;
      toJSON(message: _269.ConsensusParamsInfo): unknown;
      fromPartial(object: {
        consensusParams?: {
          block?: {
            maxBytes?: any;
            maxGas?: any;
            timeIotaMs?: any;
          };
          evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: {
              seconds?: any;
              nanos?: number;
            };
            maxBytes?: any;
          };
          validator?: {
            pubKeyTypes?: string[];
          };
          version?: {
            appVersion?: any;
          };
        };
        lastHeightChanged?: any;
      }): _269.ConsensusParamsInfo;
    };
    Version: {
      encode(message: _269.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.Version;
      fromJSON(object: any): _269.Version;
      toJSON(message: _269.Version): unknown;
      fromPartial(object: {
        consensus?: {
          block?: any;
          app?: any;
        };
        software?: string;
      }): _269.Version;
    };
    State: {
      encode(message: _269.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.State;
      fromJSON(object: any): _269.State;
      toJSON(message: _269.State): unknown;
      fromPartial(object: {
        version?: {
          consensus?: {
            block?: any;
            app?: any;
          };
          software?: string;
        };
        chainId?: string;
        initialHeight?: any;
        lastBlockHeight?: any;
        lastBlockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
        lastBlockTime?: Date;
        nextValidators?: {
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
        validators?: {
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
        lastValidators?: {
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
        lastHeightValidatorsChanged?: any;
        consensusParams?: {
          block?: {
            maxBytes?: any;
            maxGas?: any;
            timeIotaMs?: any;
          };
          evidence?: {
            maxAgeNumBlocks?: any;
            maxAgeDuration?: {
              seconds?: any;
              nanos?: number;
            };
            maxBytes?: any;
          };
          validator?: {
            pubKeyTypes?: string[];
          };
          version?: {
            appVersion?: any;
          };
        };
        lastHeightConsensusParamsChanged?: any;
        lastResultsHash?: Uint8Array;
        appHash?: Uint8Array;
      }): _269.State;
    };
  };
  const statesync: {
    Message: {
      encode(message: _270.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Message;
      fromJSON(object: any): _270.Message;
      toJSON(message: _270.Message): unknown;
      fromPartial(object: {
        snapshotsRequest?: {};
        snapshotsResponse?: {
          height?: any;
          format?: number;
          chunks?: number;
          hash?: Uint8Array;
          metadata?: Uint8Array;
        };
        chunkRequest?: {
          height?: any;
          format?: number;
          index?: number;
        };
        chunkResponse?: {
          height?: any;
          format?: number;
          index?: number;
          chunk?: Uint8Array;
          missing?: boolean;
        };
      }): _270.Message;
    };
    SnapshotsRequest: {
      encode(_: _270.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.SnapshotsRequest;
      fromJSON(_: any): _270.SnapshotsRequest;
      toJSON(_: _270.SnapshotsRequest): unknown;
      fromPartial(_: {}): _270.SnapshotsRequest;
    };
    SnapshotsResponse: {
      encode(
        message: _270.SnapshotsResponse,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.SnapshotsResponse;
      fromJSON(object: any): _270.SnapshotsResponse;
      toJSON(message: _270.SnapshotsResponse): unknown;
      fromPartial(object: {
        height?: any;
        format?: number;
        chunks?: number;
        hash?: Uint8Array;
        metadata?: Uint8Array;
      }): _270.SnapshotsResponse;
    };
    ChunkRequest: {
      encode(message: _270.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.ChunkRequest;
      fromJSON(object: any): _270.ChunkRequest;
      toJSON(message: _270.ChunkRequest): unknown;
      fromPartial(object: { height?: any; format?: number; index?: number }): _270.ChunkRequest;
    };
    ChunkResponse: {
      encode(message: _270.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.ChunkResponse;
      fromJSON(object: any): _270.ChunkResponse;
      toJSON(message: _270.ChunkResponse): unknown;
      fromPartial(object: {
        height?: any;
        format?: number;
        index?: number;
        chunk?: Uint8Array;
        missing?: boolean;
      }): _270.ChunkResponse;
    };
  };
  const store: {
    BlockStoreState: {
      encode(
        message: _271.BlockStoreState,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.BlockStoreState;
      fromJSON(object: any): _271.BlockStoreState;
      toJSON(message: _271.BlockStoreState): unknown;
      fromPartial(object: { base?: any; height?: any }): _271.BlockStoreState;
    };
  };
  const types: {
    ValidatorSet: {
      encode(message: _278.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.ValidatorSet;
      fromJSON(object: any): _278.ValidatorSet;
      toJSON(message: _278.ValidatorSet): unknown;
      fromPartial(object: {
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
      }): _278.ValidatorSet;
    };
    Validator: {
      encode(message: _278.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.Validator;
      fromJSON(object: any): _278.Validator;
      toJSON(message: _278.Validator): unknown;
      fromPartial(object: {
        address?: Uint8Array;
        pubKey?: {
          ed25519?: Uint8Array;
          secp256k1?: Uint8Array;
        };
        votingPower?: any;
        proposerPriority?: any;
      }): _278.Validator;
    };
    SimpleValidator: {
      encode(
        message: _278.SimpleValidator,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.SimpleValidator;
      fromJSON(object: any): _278.SimpleValidator;
      toJSON(message: _278.SimpleValidator): unknown;
      fromPartial(object: {
        pubKey?: {
          ed25519?: Uint8Array;
          secp256k1?: Uint8Array;
        };
        votingPower?: any;
      }): _278.SimpleValidator;
    };
    blockIDFlagFromJSON(object: any): _277.BlockIDFlag;
    blockIDFlagToJSON(object: _277.BlockIDFlag): string;
    signedMsgTypeFromJSON(object: any): _277.SignedMsgType;
    signedMsgTypeToJSON(object: _277.SignedMsgType): string;
    BlockIDFlag: typeof _277.BlockIDFlag;
    SignedMsgType: typeof _277.SignedMsgType;
    PartSetHeader: {
      encode(message: _277.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.PartSetHeader;
      fromJSON(object: any): _277.PartSetHeader;
      toJSON(message: _277.PartSetHeader): unknown;
      fromPartial(object: { total?: number; hash?: Uint8Array }): _277.PartSetHeader;
    };
    Part: {
      encode(message: _277.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Part;
      fromJSON(object: any): _277.Part;
      toJSON(message: _277.Part): unknown;
      fromPartial(object: {
        index?: number;
        bytes?: Uint8Array;
        proof?: {
          total?: any;
          index?: any;
          leafHash?: Uint8Array;
          aunts?: Uint8Array[];
        };
      }): _277.Part;
    };
    BlockID: {
      encode(message: _277.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.BlockID;
      fromJSON(object: any): _277.BlockID;
      toJSON(message: _277.BlockID): unknown;
      fromPartial(object: {
        hash?: Uint8Array;
        partSetHeader?: {
          total?: number;
          hash?: Uint8Array;
        };
      }): _277.BlockID;
    };
    Header: {
      encode(message: _277.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Header;
      fromJSON(object: any): _277.Header;
      toJSON(message: _277.Header): unknown;
      fromPartial(object: {
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
      }): _277.Header;
    };
    Data: {
      encode(message: _277.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Data;
      fromJSON(object: any): _277.Data;
      toJSON(message: _277.Data): unknown;
      fromPartial(object: { txs?: Uint8Array[] }): _277.Data;
    };
    Vote: {
      encode(message: _277.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Vote;
      fromJSON(object: any): _277.Vote;
      toJSON(message: _277.Vote): unknown;
      fromPartial(object: {
        type?: _277.SignedMsgType;
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
      }): _277.Vote;
    };
    Commit: {
      encode(message: _277.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Commit;
      fromJSON(object: any): _277.Commit;
      toJSON(message: _277.Commit): unknown;
      fromPartial(object: {
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
          blockIdFlag?: _277.BlockIDFlag;
          validatorAddress?: Uint8Array;
          timestamp?: Date;
          signature?: Uint8Array;
        }[];
      }): _277.Commit;
    };
    CommitSig: {
      encode(message: _277.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.CommitSig;
      fromJSON(object: any): _277.CommitSig;
      toJSON(message: _277.CommitSig): unknown;
      fromPartial(object: {
        blockIdFlag?: _277.BlockIDFlag;
        validatorAddress?: Uint8Array;
        timestamp?: Date;
        signature?: Uint8Array;
      }): _277.CommitSig;
    };
    Proposal: {
      encode(message: _277.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Proposal;
      fromJSON(object: any): _277.Proposal;
      toJSON(message: _277.Proposal): unknown;
      fromPartial(object: {
        type?: _277.SignedMsgType;
        height?: any;
        round?: number;
        polRound?: number;
        blockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
        timestamp?: Date;
        signature?: Uint8Array;
      }): _277.Proposal;
    };
    SignedHeader: {
      encode(message: _277.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.SignedHeader;
      fromJSON(object: any): _277.SignedHeader;
      toJSON(message: _277.SignedHeader): unknown;
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
            blockIdFlag?: _277.BlockIDFlag;
            validatorAddress?: Uint8Array;
            timestamp?: Date;
            signature?: Uint8Array;
          }[];
        };
      }): _277.SignedHeader;
    };
    LightBlock: {
      encode(message: _277.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.LightBlock;
      fromJSON(object: any): _277.LightBlock;
      toJSON(message: _277.LightBlock): unknown;
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
              blockIdFlag?: _277.BlockIDFlag;
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
      }): _277.LightBlock;
    };
    BlockMeta: {
      encode(message: _277.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.BlockMeta;
      fromJSON(object: any): _277.BlockMeta;
      toJSON(message: _277.BlockMeta): unknown;
      fromPartial(object: {
        blockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
        blockSize?: any;
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
        numTxs?: any;
      }): _277.BlockMeta;
    };
    TxProof: {
      encode(message: _277.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.TxProof;
      fromJSON(object: any): _277.TxProof;
      toJSON(message: _277.TxProof): unknown;
      fromPartial(object: {
        rootHash?: Uint8Array;
        data?: Uint8Array;
        proof?: {
          total?: any;
          index?: any;
          leafHash?: Uint8Array;
          aunts?: Uint8Array[];
        };
      }): _277.TxProof;
    };
    ConsensusParams: {
      encode(
        message: _276.ConsensusParams,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ConsensusParams;
      fromJSON(object: any): _276.ConsensusParams;
      toJSON(message: _276.ConsensusParams): unknown;
      fromPartial(object: {
        block?: {
          maxBytes?: any;
          maxGas?: any;
          timeIotaMs?: any;
        };
        evidence?: {
          maxAgeNumBlocks?: any;
          maxAgeDuration?: {
            seconds?: any;
            nanos?: number;
          };
          maxBytes?: any;
        };
        validator?: {
          pubKeyTypes?: string[];
        };
        version?: {
          appVersion?: any;
        };
      }): _276.ConsensusParams;
    };
    BlockParams: {
      encode(message: _276.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.BlockParams;
      fromJSON(object: any): _276.BlockParams;
      toJSON(message: _276.BlockParams): unknown;
      fromPartial(object: { maxBytes?: any; maxGas?: any; timeIotaMs?: any }): _276.BlockParams;
    };
    EvidenceParams: {
      encode(message: _276.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.EvidenceParams;
      fromJSON(object: any): _276.EvidenceParams;
      toJSON(message: _276.EvidenceParams): unknown;
      fromPartial(object: {
        maxAgeNumBlocks?: any;
        maxAgeDuration?: {
          seconds?: any;
          nanos?: number;
        };
        maxBytes?: any;
      }): _276.EvidenceParams;
    };
    ValidatorParams: {
      encode(
        message: _276.ValidatorParams,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ValidatorParams;
      fromJSON(object: any): _276.ValidatorParams;
      toJSON(message: _276.ValidatorParams): unknown;
      fromPartial(object: { pubKeyTypes?: string[] }): _276.ValidatorParams;
    };
    VersionParams: {
      encode(message: _276.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.VersionParams;
      fromJSON(object: any): _276.VersionParams;
      toJSON(message: _276.VersionParams): unknown;
      fromPartial(object: { appVersion?: any }): _276.VersionParams;
    };
    HashedParams: {
      encode(message: _276.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.HashedParams;
      fromJSON(object: any): _276.HashedParams;
      toJSON(message: _276.HashedParams): unknown;
      fromPartial(object: { blockMaxBytes?: any; blockMaxGas?: any }): _276.HashedParams;
    };
    Evidence: {
      encode(message: _275.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.Evidence;
      fromJSON(object: any): _275.Evidence;
      toJSON(message: _275.Evidence): unknown;
      fromPartial(object: {
        duplicateVoteEvidence?: {
          voteA?: {
            type?: _277.SignedMsgType;
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
            type?: _277.SignedMsgType;
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
                  blockIdFlag?: _277.BlockIDFlag;
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
      }): _275.Evidence;
    };
    DuplicateVoteEvidence: {
      encode(
        message: _275.DuplicateVoteEvidence,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.DuplicateVoteEvidence;
      fromJSON(object: any): _275.DuplicateVoteEvidence;
      toJSON(message: _275.DuplicateVoteEvidence): unknown;
      fromPartial(object: {
        voteA?: {
          type?: _277.SignedMsgType;
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
          type?: _277.SignedMsgType;
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
      }): _275.DuplicateVoteEvidence;
    };
    LightClientAttackEvidence: {
      encode(
        message: _275.LightClientAttackEvidence,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(
        input: Uint8Array | import("protobufjs").Reader,
        length?: number,
      ): _275.LightClientAttackEvidence;
      fromJSON(object: any): _275.LightClientAttackEvidence;
      toJSON(message: _275.LightClientAttackEvidence): unknown;
      fromPartial(object: {
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
                blockIdFlag?: _277.BlockIDFlag;
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
      }): _275.LightClientAttackEvidence;
    };
    EvidenceList: {
      encode(message: _275.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.EvidenceList;
      fromJSON(object: any): _275.EvidenceList;
      toJSON(message: _275.EvidenceList): unknown;
      fromPartial(object: {
        evidence?: {
          duplicateVoteEvidence?: {
            voteA?: {
              type?: _277.SignedMsgType;
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
              type?: _277.SignedMsgType;
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
                    blockIdFlag?: _277.BlockIDFlag;
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
      }): _275.EvidenceList;
    };
    EventDataRoundState: {
      encode(
        message: _274.EventDataRoundState,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.EventDataRoundState;
      fromJSON(object: any): _274.EventDataRoundState;
      toJSON(message: _274.EventDataRoundState): unknown;
      fromPartial(object: { height?: any; round?: number; step?: string }): _274.EventDataRoundState;
    };
    CanonicalBlockID: {
      encode(
        message: _273.CanonicalBlockID,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.CanonicalBlockID;
      fromJSON(object: any): _273.CanonicalBlockID;
      toJSON(message: _273.CanonicalBlockID): unknown;
      fromPartial(object: {
        hash?: Uint8Array;
        partSetHeader?: {
          total?: number;
          hash?: Uint8Array;
        };
      }): _273.CanonicalBlockID;
    };
    CanonicalPartSetHeader: {
      encode(
        message: _273.CanonicalPartSetHeader,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.CanonicalPartSetHeader;
      fromJSON(object: any): _273.CanonicalPartSetHeader;
      toJSON(message: _273.CanonicalPartSetHeader): unknown;
      fromPartial(object: { total?: number; hash?: Uint8Array }): _273.CanonicalPartSetHeader;
    };
    CanonicalProposal: {
      encode(
        message: _273.CanonicalProposal,
        writer?: import("protobufjs").Writer,
      ): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.CanonicalProposal;
      fromJSON(object: any): _273.CanonicalProposal;
      toJSON(message: _273.CanonicalProposal): unknown;
      fromPartial(object: {
        type?: _277.SignedMsgType;
        height?: any;
        round?: any;
        polRound?: any;
        blockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
        timestamp?: Date;
        chainId?: string;
      }): _273.CanonicalProposal;
    };
    CanonicalVote: {
      encode(message: _273.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.CanonicalVote;
      fromJSON(object: any): _273.CanonicalVote;
      toJSON(message: _273.CanonicalVote): unknown;
      fromPartial(object: {
        type?: _277.SignedMsgType;
        height?: any;
        round?: any;
        blockId?: {
          hash?: Uint8Array;
          partSetHeader?: {
            total?: number;
            hash?: Uint8Array;
          };
        };
        timestamp?: Date;
        chainId?: string;
      }): _273.CanonicalVote;
    };
    Block: {
      encode(message: _272.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.Block;
      fromJSON(object: any): _272.Block;
      toJSON(message: _272.Block): unknown;
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
        data?: {
          txs?: Uint8Array[];
        };
        evidence?: {
          evidence?: {
            duplicateVoteEvidence?: {
              voteA?: {
                type?: _277.SignedMsgType;
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
                type?: _277.SignedMsgType;
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
                      blockIdFlag?: _277.BlockIDFlag;
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
            blockIdFlag?: _277.BlockIDFlag;
            validatorAddress?: Uint8Array;
            timestamp?: Date;
            signature?: Uint8Array;
          }[];
        };
      }): _272.Block;
    };
  };
  const version: {
    App: {
      encode(message: _279.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.App;
      fromJSON(object: any): _279.App;
      toJSON(message: _279.App): unknown;
      fromPartial(object: { protocol?: any; software?: string }): _279.App;
    };
    Consensus: {
      encode(message: _279.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
      decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.Consensus;
      fromJSON(object: any): _279.Consensus;
      toJSON(message: _279.Consensus): unknown;
      fromPartial(object: { block?: any; app?: any }): _279.Consensus;
    };
  };
}
