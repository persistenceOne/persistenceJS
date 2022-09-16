/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import {
  AllAccountsResponse,
  AllAllowancesResponse,
  AllowanceResponse,
  BalanceResponse,
  DownloadLogoResponse,
  MinterResponse,
  MarketingInfoResponse,
  TokenInfoResponse,
} from "./Cw20.types";
export interface Cw20ReadOnlyInterface {
  contractAddress: string;
  balance: ({ address }: { address: string }) => Promise<BalanceResponse>;
  tokenInfo: () => Promise<TokenInfoResponse>;
  minter: () => Promise<MinterResponse>;
  allowance: ({ owner, spender }: { owner: string; spender: string }) => Promise<AllowanceResponse>;
  allAllowances: ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllAllowancesResponse>;
  allAccounts: ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<AllAccountsResponse>;
  marketingInfo: () => Promise<MarketingInfoResponse>;
  downloadLogo: () => Promise<DownloadLogoResponse>;
}
export declare class Cw20QueryClient implements Cw20ReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string);
  balance: ({ address }: { address: string }) => Promise<BalanceResponse>;
  tokenInfo: () => Promise<TokenInfoResponse>;
  minter: () => Promise<MinterResponse>;
  allowance: ({ owner, spender }: { owner: string; spender: string }) => Promise<AllowanceResponse>;
  allAllowances: ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllAllowancesResponse>;
  allAccounts: ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<AllAccountsResponse>;
  marketingInfo: () => Promise<MarketingInfoResponse>;
  downloadLogo: () => Promise<DownloadLogoResponse>;
}
