/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface AllAccountsResponse {
    accounts: string[];
    [k: string]: unknown;
}
export declare type Uint128 = string;
export declare type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {
        [k: string]: unknown;
    };
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export interface AllAllowancesResponse {
    allowances: AllowanceInfo[];
    [k: string]: unknown;
}
export interface AllowanceInfo {
    allowance: Uint128;
    expires: Expiration;
    spender: string;
    [k: string]: unknown;
}
export interface AllowanceResponse {
    allowance: Uint128;
    expires: Expiration;
    [k: string]: unknown;
}
export interface BalanceResponse {
    balance: Uint128;
    [k: string]: unknown;
}
export declare type Binary = string;
export interface DownloadLogoResponse {
    data: Binary;
    mime_type: string;
    [k: string]: unknown;
}
export declare type ExecuteMsg = {
    transfer: {
        amount: Uint128;
        recipient: string;
        [k: string]: unknown;
    };
} | {
    burn: {
        amount: Uint128;
        user: string;
        [k: string]: unknown;
    };
} | {
    send: {
        amount: Uint128;
        contract: string;
        msg: Binary;
        [k: string]: unknown;
    };
} | {
    increase_allowance: {
        amount: Uint128;
        expires?: Expiration | null;
        spender: string;
        [k: string]: unknown;
    };
} | {
    decrease_allowance: {
        amount: Uint128;
        expires?: Expiration | null;
        spender: string;
        [k: string]: unknown;
    };
} | {
    transfer_from: {
        amount: Uint128;
        owner: string;
        recipient: string;
        [k: string]: unknown;
    };
} | {
    send_from: {
        amount: Uint128;
        contract: string;
        msg: Binary;
        owner: string;
        [k: string]: unknown;
    };
} | {
    burn_from: {
        amount: Uint128;
        owner: string;
        [k: string]: unknown;
    };
} | {
    mint: {
        amount: Uint128;
        recipient: string;
        [k: string]: unknown;
    };
} | {
    update_marketing: {
        description?: string | null;
        marketing?: string | null;
        project?: string | null;
        [k: string]: unknown;
    };
} | {
    upload_logo: Logo;
};
export declare type Logo = {
    url: string;
} | {
    embedded: EmbeddedLogo;
};
export declare type EmbeddedLogo = {
    svg: Binary;
} | {
    png: Binary;
};
export interface InstantiateMsg {
    bl_market_address: string;
    decimals: number;
    init_hook?: InitHook | null;
    initial_balances: Cw20Coin[];
    marketing?: InstantiateMarketingInfo | null;
    mint?: MinterResponse | null;
    name: string;
    symbol: string;
    [k: string]: unknown;
}
export interface InitHook {
    contract_addr: string;
    msg: Binary;
    [k: string]: unknown;
}
export interface Cw20Coin {
    address: string;
    amount: Uint128;
    [k: string]: unknown;
}
export interface InstantiateMarketingInfo {
    description?: string | null;
    logo?: Logo | null;
    marketing?: string | null;
    project?: string | null;
    [k: string]: unknown;
}
export interface MinterResponse {
    cap?: Uint128 | null;
    minter: string;
    [k: string]: unknown;
}
export declare type LogoInfo = "embedded" | {
    url: string;
};
export declare type Addr = string;
export interface MarketingInfoResponse {
    description?: string | null;
    logo?: LogoInfo | null;
    marketing?: Addr | null;
    project?: string | null;
    [k: string]: unknown;
}
export declare type QueryMsg = {
    balance: {
        address: string;
        [k: string]: unknown;
    };
} | {
    token_info: {
        [k: string]: unknown;
    };
} | {
    minter: {
        [k: string]: unknown;
    };
} | {
    allowance: {
        owner: string;
        spender: string;
        [k: string]: unknown;
    };
} | {
    all_allowances: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
    };
} | {
    all_accounts: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
    };
} | {
    marketing_info: {
        [k: string]: unknown;
    };
} | {
    download_logo: {
        [k: string]: unknown;
    };
};
export interface TokenInfoResponse {
    decimals: number;
    name: string;
    symbol: string;
    total_supply: Uint128;
    [k: string]: unknown;
}
export interface PTokenReadOnlyInterface {
    contractAddress: string;
    balance: ({ address }: {
        address: string;
    }) => Promise<BalanceResponse>;
    tokenInfo: () => Promise<TokenInfoResponse>;
    minter: () => Promise<MinterResponse>;
    allowance: ({ owner, spender }: {
        owner: string;
        spender: string;
    }) => Promise<AllowanceResponse>;
    allAllowances: ({ limit, owner, startAfter, }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllAllowancesResponse>;
    allAccounts: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllAccountsResponse>;
    marketingInfo: () => Promise<MarketingInfoResponse>;
    downloadLogo: () => Promise<DownloadLogoResponse>;
}
export declare class PTokenQueryClient implements PTokenReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    balance: ({ address }: {
        address: string;
    }) => Promise<BalanceResponse>;
    tokenInfo: () => Promise<TokenInfoResponse>;
    minter: () => Promise<MinterResponse>;
    allowance: ({ owner, spender }: {
        owner: string;
        spender: string;
    }) => Promise<AllowanceResponse>;
    allAllowances: ({ limit, owner, startAfter, }: {
        limit?: number;
        owner: string;
        startAfter?: string;
    }) => Promise<AllAllowancesResponse>;
    allAccounts: ({ limit, startAfter, }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<AllAccountsResponse>;
    marketingInfo: () => Promise<MarketingInfoResponse>;
    downloadLogo: () => Promise<DownloadLogoResponse>;
}
export interface PTokenInterface extends PTokenReadOnlyInterface {
    contractAddress: string;
    sender: string;
    transfer: ({ amount, recipient, }: {
        amount: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    burn: ({ amount, user, }: {
        amount: string;
        user: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    send: ({ amount, contract, msg, }: {
        amount: string;
        contract: string;
        msg: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    increaseAllowance: ({ amount, expires, spender, }: {
        amount: string;
        expires?: Expiration;
        spender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    decreaseAllowance: ({ amount, expires, spender, }: {
        amount: string;
        expires?: Expiration;
        spender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    transferFrom: ({ amount, owner, recipient, }: {
        amount: string;
        owner: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    sendFrom: ({ amount, contract, msg, owner, }: {
        amount: string;
        contract: string;
        msg: string;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    burnFrom: ({ amount, owner, }: {
        amount: string;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mint: ({ amount, recipient, }: {
        amount: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateMarketing: ({ description, marketing, project, }: {
        description?: string;
        marketing?: string;
        project?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    uploadLogo: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class PTokenClient extends PTokenQueryClient implements PTokenInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    transfer: ({ amount, recipient, }: {
        amount: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    burn: ({ amount, user, }: {
        amount: string;
        user: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    send: ({ amount, contract, msg, }: {
        amount: string;
        contract: string;
        msg: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    increaseAllowance: ({ amount, expires, spender, }: {
        amount: string;
        expires?: Expiration;
        spender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    decreaseAllowance: ({ amount, expires, spender, }: {
        amount: string;
        expires?: Expiration;
        spender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    transferFrom: ({ amount, owner, recipient, }: {
        amount: string;
        owner: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    sendFrom: ({ amount, contract, msg, owner, }: {
        amount: string;
        contract: string;
        msg: string;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    burnFrom: ({ amount, owner, }: {
        amount: string;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mint: ({ amount, recipient, }: {
        amount: string;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    updateMarketing: ({ description, marketing, project, }: {
        description?: string;
        marketing?: string;
        project?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    uploadLogo: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
