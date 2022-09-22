/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import {
  AllAccountsResponse,
  Uint128,
  Expiration,
  Timestamp,
  Uint64,
  AllAllowancesResponse,
  AllowanceInfo,
  AllowanceResponse,
  BalanceResponse,
  Cw20ExecuteMsg,
  Binary,
  Logo,
  EmbeddedLogo,
  Cw20QueryMsg,
  Cw20ReceiveMsg,
  DownloadLogoResponse,
  InstantiateMsg,
  Cw20Coin,
  InstantiateMarketingInfo,
  MinterResponse,
  LogoInfo,
  Addr,
  MarketingInfoResponse,
  QueryMsg,
  TokenInfoResponse,
} from "./Cw20.types";
import { Cw20QueryClient } from "./Cw20.client";
export const cw20QueryKeys = {
  contract: [
    {
      contract: "cw20",
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...cw20QueryKeys.contract[0], address: contractAddress }] as const,
  balance: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "balance", args }] as const,
  tokenInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "token_info", args }] as const,
  minter: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "minter", args }] as const,
  allowance: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "allowance", args }] as const,
  allAllowances: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "all_allowances", args }] as const,
  allAccounts: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "all_accounts", args }] as const,
  marketingInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "marketing_info", args }] as const,
  downloadLogo: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [{ ...cw20QueryKeys.address(contractAddress)[0], method: "download_logo", args }] as const,
};
export interface Cw20ReactQuery<TResponse, TData = TResponse> {
  client: Cw20QueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface Cw20DownloadLogoQuery<TData> extends Cw20ReactQuery<DownloadLogoResponse, TData> {}
export function useCw20DownloadLogoQuery<TData = DownloadLogoResponse>({
  client,
  options,
}: Cw20DownloadLogoQuery<TData>) {
  return useQuery<DownloadLogoResponse, Error, TData>(
    cw20QueryKeys.downloadLogo(client?.contractAddress),
    () => (client ? client.downloadLogo() : Promise.reject(new Error("Invalid client"))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20MarketingInfoQuery<TData> extends Cw20ReactQuery<MarketingInfoResponse, TData> {}
export function useCw20MarketingInfoQuery<TData = MarketingInfoResponse>({
  client,
  options,
}: Cw20MarketingInfoQuery<TData>) {
  return useQuery<MarketingInfoResponse, Error, TData>(
    cw20QueryKeys.marketingInfo(client?.contractAddress),
    () => (client ? client.marketingInfo() : Promise.reject(new Error("Invalid client"))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20AllAccountsQuery<TData> extends Cw20ReactQuery<AllAccountsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useCw20AllAccountsQuery<TData = AllAccountsResponse>({
  client,
  args,
  options,
}: Cw20AllAccountsQuery<TData>) {
  return useQuery<AllAccountsResponse, Error, TData>(
    cw20QueryKeys.allAccounts(client?.contractAddress, args),
    () =>
      client
        ? client.allAccounts({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error("Invalid client")),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20AllAllowancesQuery<TData> extends Cw20ReactQuery<AllAllowancesResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useCw20AllAllowancesQuery<TData = AllAllowancesResponse>({
  client,
  args,
  options,
}: Cw20AllAllowancesQuery<TData>) {
  return useQuery<AllAllowancesResponse, Error, TData>(
    cw20QueryKeys.allAllowances(client?.contractAddress, args),
    () =>
      client
        ? client.allAllowances({
            limit: args.limit,
            owner: args.owner,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error("Invalid client")),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20AllowanceQuery<TData> extends Cw20ReactQuery<AllowanceResponse, TData> {
  args: {
    owner: string;
    spender: string;
  };
}
export function useCw20AllowanceQuery<TData = AllowanceResponse>({
  client,
  args,
  options,
}: Cw20AllowanceQuery<TData>) {
  return useQuery<AllowanceResponse, Error, TData>(
    cw20QueryKeys.allowance(client?.contractAddress, args),
    () =>
      client
        ? client.allowance({
            owner: args.owner,
            spender: args.spender,
          })
        : Promise.reject(new Error("Invalid client")),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20MinterQuery<TData> extends Cw20ReactQuery<MinterResponse, TData> {}
export function useCw20MinterQuery<TData = MinterResponse>({ client, options }: Cw20MinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(
    cw20QueryKeys.minter(client?.contractAddress),
    () => (client ? client.minter() : Promise.reject(new Error("Invalid client"))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20TokenInfoQuery<TData> extends Cw20ReactQuery<TokenInfoResponse, TData> {}
export function useCw20TokenInfoQuery<TData = TokenInfoResponse>({
  client,
  options,
}: Cw20TokenInfoQuery<TData>) {
  return useQuery<TokenInfoResponse, Error, TData>(
    cw20QueryKeys.tokenInfo(client?.contractAddress),
    () => (client ? client.tokenInfo() : Promise.reject(new Error("Invalid client"))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
export interface Cw20BalanceQuery<TData> extends Cw20ReactQuery<BalanceResponse, TData> {
  args: {
    address: string;
  };
}
export function useCw20BalanceQuery<TData = BalanceResponse>({
  client,
  args,
  options,
}: Cw20BalanceQuery<TData>) {
  return useQuery<BalanceResponse, Error, TData>(
    cw20QueryKeys.balance(client?.contractAddress, args),
    () =>
      client
        ? client.balance({
            address: args.address,
          })
        : Promise.reject(new Error("Invalid client")),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  );
}
