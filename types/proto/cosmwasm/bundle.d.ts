import * as _140 from "./wasm/v1/genesis";
import * as _141 from "./wasm/v1/ibc";
import * as _142 from "./wasm/v1/proposal";
import * as _143 from "./wasm/v1/query";
import * as _144 from "./wasm/v1/tx";
import * as _145 from "./wasm/v1/types";
import * as _280 from "./wasm/v1/query.rpc.query";
import * as _281 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            accessTypeFromJSON(object: any): _145.AccessType;
            accessTypeToJSON(object: _145.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _145.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _145.ContractCodeHistoryOperationType): string;
            AccessType: typeof _145.AccessType;
            ContractCodeHistoryOperationType: typeof _145.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _145.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AccessTypeParam;
                fromJSON(object: any): _145.AccessTypeParam;
                toJSON(message: _145.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _145.AccessType;
                }): _145.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _145.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AccessConfig;
                fromJSON(object: any): _145.AccessConfig;
                toJSON(message: _145.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _145.AccessType;
                    address?: string;
                }): _145.AccessConfig;
            };
            Params: {
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromJSON(object: any): _145.Params;
                toJSON(message: _145.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _145.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _145.AccessType;
                }): _145.Params;
            };
            CodeInfo: {
                encode(message: _145.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.CodeInfo;
                fromJSON(object: any): _145.CodeInfo;
                toJSON(message: _145.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _145.AccessType;
                        address?: string;
                    };
                }): _145.CodeInfo;
            };
            ContractInfo: {
                encode(message: _145.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ContractInfo;
                fromJSON(object: any): _145.ContractInfo;
                toJSON(message: _145.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _145.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _145.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ContractCodeHistoryEntry;
                fromJSON(object: any): _145.ContractCodeHistoryEntry;
                toJSON(message: _145.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _145.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _145.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _145.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AbsoluteTxPosition;
                fromJSON(object: any): _145.AbsoluteTxPosition;
                toJSON(message: _145.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _145.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _145.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Model;
                fromJSON(object: any): _145.Model;
                toJSON(message: _145.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _145.Model;
            };
            MsgStoreCode: {
                encode(message: _144.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgStoreCode;
                fromJSON(object: any): _144.MsgStoreCode;
                toJSON(message: _144.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _145.AccessType;
                        address?: string;
                    };
                }): _144.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _144.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgStoreCodeResponse;
                fromJSON(object: any): _144.MsgStoreCodeResponse;
                toJSON(message: _144.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _144.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _144.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgInstantiateContract;
                fromJSON(object: any): _144.MsgInstantiateContract;
                toJSON(message: _144.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _144.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _144.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgInstantiateContractResponse;
                fromJSON(object: any): _144.MsgInstantiateContractResponse;
                toJSON(message: _144.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _144.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _144.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgExecuteContract;
                fromJSON(object: any): _144.MsgExecuteContract;
                toJSON(message: _144.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _144.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _144.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgExecuteContractResponse;
                fromJSON(object: any): _144.MsgExecuteContractResponse;
                toJSON(message: _144.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _144.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _144.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgMigrateContract;
                fromJSON(object: any): _144.MsgMigrateContract;
                toJSON(message: _144.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _144.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _144.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgMigrateContractResponse;
                fromJSON(object: any): _144.MsgMigrateContractResponse;
                toJSON(message: _144.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _144.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _144.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgUpdateAdmin;
                fromJSON(object: any): _144.MsgUpdateAdmin;
                toJSON(message: _144.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _144.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _144.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgUpdateAdminResponse;
                fromJSON(_: any): _144.MsgUpdateAdminResponse;
                toJSON(_: _144.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _144.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _144.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgClearAdmin;
                fromJSON(object: any): _144.MsgClearAdmin;
                toJSON(message: _144.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _144.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _144.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgClearAdminResponse;
                fromJSON(_: any): _144.MsgClearAdminResponse;
                toJSON(_: _144.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _144.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _143.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryContractInfoRequest;
                fromJSON(object: any): _143.QueryContractInfoRequest;
                toJSON(message: _143.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _143.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _143.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryContractInfoResponse;
                fromJSON(object: any): _143.QueryContractInfoResponse;
                toJSON(message: _143.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _143.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _143.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryContractHistoryRequest;
                fromJSON(object: any): _143.QueryContractHistoryRequest;
                toJSON(message: _143.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _143.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryContractHistoryResponse;
                fromJSON(object: any): _143.QueryContractHistoryResponse;
                toJSON(message: _143.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _145.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _143.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryContractsByCodeRequest;
                fromJSON(object: any): _143.QueryContractsByCodeRequest;
                toJSON(message: _143.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _143.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryContractsByCodeResponse;
                fromJSON(object: any): _143.QueryContractsByCodeResponse;
                toJSON(message: _143.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _143.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryAllContractStateRequest;
                fromJSON(object: any): _143.QueryAllContractStateRequest;
                toJSON(message: _143.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _143.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryAllContractStateResponse;
                fromJSON(object: any): _143.QueryAllContractStateResponse;
                toJSON(message: _143.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _143.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryRawContractStateRequest;
                fromJSON(object: any): _143.QueryRawContractStateRequest;
                toJSON(message: _143.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _143.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _143.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryRawContractStateResponse;
                fromJSON(object: any): _143.QueryRawContractStateResponse;
                toJSON(message: _143.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _143.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _143.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QuerySmartContractStateRequest;
                fromJSON(object: any): _143.QuerySmartContractStateRequest;
                toJSON(message: _143.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _143.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _143.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QuerySmartContractStateResponse;
                fromJSON(object: any): _143.QuerySmartContractStateResponse;
                toJSON(message: _143.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _143.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _143.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryCodeRequest;
                fromJSON(object: any): _143.QueryCodeRequest;
                toJSON(message: _143.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _143.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _143.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.CodeInfoResponse;
                fromJSON(object: any): _143.CodeInfoResponse;
                toJSON(message: _143.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _145.AccessType;
                        address?: string;
                    };
                }): _143.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _143.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryCodeResponse;
                fromJSON(object: any): _143.QueryCodeResponse;
                toJSON(message: _143.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _145.AccessType;
                            address?: string;
                        };
                    };
                    data?: Uint8Array;
                }): _143.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _143.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryCodesRequest;
                fromJSON(object: any): _143.QueryCodesRequest;
                toJSON(message: _143.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _143.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryCodesResponse;
                fromJSON(object: any): _143.QueryCodesResponse;
                toJSON(message: _143.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _145.AccessType;
                            address?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _143.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryPinnedCodesRequest;
                fromJSON(object: any): _143.QueryPinnedCodesRequest;
                toJSON(message: _143.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _143.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _143.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryPinnedCodesResponse;
                fromJSON(object: any): _143.QueryPinnedCodesResponse;
                toJSON(message: _143.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _143.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _142.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.StoreCodeProposal;
                fromJSON(object: any): _142.StoreCodeProposal;
                toJSON(message: _142.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _145.AccessType;
                        address?: string;
                    };
                }): _142.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _142.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.InstantiateContractProposal;
                fromJSON(object: any): _142.InstantiateContractProposal;
                toJSON(message: _142.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _142.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MigrateContractProposal;
                fromJSON(object: any): _142.MigrateContractProposal;
                toJSON(message: _142.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _142.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _142.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.SudoContractProposal;
                fromJSON(object: any): _142.SudoContractProposal;
                toJSON(message: _142.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _142.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _142.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ExecuteContractProposal;
                fromJSON(object: any): _142.ExecuteContractProposal;
                toJSON(message: _142.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _142.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _142.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpdateAdminProposal;
                fromJSON(object: any): _142.UpdateAdminProposal;
                toJSON(message: _142.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _142.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _142.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ClearAdminProposal;
                fromJSON(object: any): _142.ClearAdminProposal;
                toJSON(message: _142.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _142.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _142.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PinCodesProposal;
                fromJSON(object: any): _142.PinCodesProposal;
                toJSON(message: _142.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _142.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _142.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UnpinCodesProposal;
                fromJSON(object: any): _142.UnpinCodesProposal;
                toJSON(message: _142.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _142.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _142.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.AccessConfigUpdate;
                fromJSON(object: any): _142.AccessConfigUpdate;
                toJSON(message: _142.AccessConfigUpdate): unknown;
                fromPartial(object: {
                    codeId?: any;
                    instantiatePermission?: {
                        permission?: _145.AccessType;
                        address?: string;
                    };
                }): _142.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _142.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _142.UpdateInstantiateConfigProposal;
                toJSON(message: _142.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: any;
                        instantiatePermission?: {
                            permission?: _145.AccessType;
                            address?: string;
                        };
                    }[];
                }): _142.UpdateInstantiateConfigProposal;
            };
            MsgIBCSend: {
                encode(message: _141.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgIBCSend;
                fromJSON(object: any): _141.MsgIBCSend;
                toJSON(message: _141.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _141.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _141.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgIBCCloseChannel;
                fromJSON(object: any): _141.MsgIBCCloseChannel;
                toJSON(message: _141.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _141.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _140.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState;
                fromJSON(object: any): _140.GenesisState;
                toJSON(message: _140.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _145.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _145.AccessType;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _145.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _145.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _140.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _140.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GenesisState_GenMsgs;
                fromJSON(object: any): _140.GenesisState_GenMsgs;
                toJSON(message: _140.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _145.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _140.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _140.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Code;
                fromJSON(object: any): _140.Code;
                toJSON(message: _140.Code): unknown;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _145.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _140.Code;
            };
            Contract: {
                encode(message: _140.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Contract;
                fromJSON(object: any): _140.Contract;
                toJSON(message: _140.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _140.Contract;
            };
            Sequence: {
                encode(message: _140.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Sequence;
                fromJSON(object: any): _140.Sequence;
                toJSON(message: _140.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _140.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmwasm: {
                wasm: {
                    v1: _281.MsgClientImpl;
                };
            };
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
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmwasm: {
                wasm: {
                    v1: _280.QueryClientImpl;
                };
            };
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
        }>;
    };
}
