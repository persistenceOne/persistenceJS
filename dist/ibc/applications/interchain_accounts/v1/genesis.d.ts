import { Params } from "../controller/v1/controller.js";
import { Params as Params1 } from "../host/v1/host.js";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controllerGenesisState?: ControllerGenesisState;
    hostGenesisState?: HostGenesisState;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    ports: string[];
    params?: Params;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    port: string;
    params?: Params1;
}
/** ActiveChannel contains a connection ID, port ID and associated active channel ID */
export interface ActiveChannel {
    connectionId: string;
    portId: string;
    channelId: string;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
    connectionId: string;
    portId: string;
    accountAddress: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        controllerGenesisState?: {
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            ports?: string[] | undefined;
            params?: {
                controllerEnabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        hostGenesisState?: {
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            port?: string | undefined;
            params?: {
                hostEnabled?: boolean | undefined;
                allowMessages?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        controllerGenesisState?: ({
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            ports?: string[] | undefined;
            params?: {
                controllerEnabled?: boolean | undefined;
            } | undefined;
        } & {
            activeChannels?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & Record<Exclude<keyof I["controllerGenesisState"]["activeChannels"][number], "portId" | "channelId" | "connectionId">, never>)[] & Record<Exclude<keyof I["controllerGenesisState"]["activeChannels"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            interchainAccounts?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & Record<Exclude<keyof I["controllerGenesisState"]["interchainAccounts"][number], "portId" | "connectionId" | "accountAddress">, never>)[] & Record<Exclude<keyof I["controllerGenesisState"]["interchainAccounts"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            ports?: (string[] & string[] & Record<Exclude<keyof I["controllerGenesisState"]["ports"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            params?: ({
                controllerEnabled?: boolean | undefined;
            } & {
                controllerEnabled?: boolean | undefined;
            } & Record<Exclude<keyof I["controllerGenesisState"]["params"], "controllerEnabled">, never>) | undefined;
        } & Record<Exclude<keyof I["controllerGenesisState"], "params" | "activeChannels" | "interchainAccounts" | "ports">, never>) | undefined;
        hostGenesisState?: ({
            activeChannels?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            interchainAccounts?: {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] | undefined;
            port?: string | undefined;
            params?: {
                hostEnabled?: boolean | undefined;
                allowMessages?: string[] | undefined;
            } | undefined;
        } & {
            activeChannels?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & Record<Exclude<keyof I["hostGenesisState"]["activeChannels"][number], "portId" | "channelId" | "connectionId">, never>)[] & Record<Exclude<keyof I["hostGenesisState"]["activeChannels"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            interchainAccounts?: ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            }[] & ({
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & {
                connectionId?: string | undefined;
                portId?: string | undefined;
                accountAddress?: string | undefined;
            } & Record<Exclude<keyof I["hostGenesisState"]["interchainAccounts"][number], "portId" | "connectionId" | "accountAddress">, never>)[] & Record<Exclude<keyof I["hostGenesisState"]["interchainAccounts"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            port?: string | undefined;
            params?: ({
                hostEnabled?: boolean | undefined;
                allowMessages?: string[] | undefined;
            } & {
                hostEnabled?: boolean | undefined;
                allowMessages?: (string[] & string[] & Record<Exclude<keyof I["hostGenesisState"]["params"]["allowMessages"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["hostGenesisState"]["params"], "hostEnabled" | "allowMessages">, never>) | undefined;
        } & Record<Exclude<keyof I["hostGenesisState"], "params" | "port" | "activeChannels" | "interchainAccounts">, never>) | undefined;
    } & Record<Exclude<keyof I, "controllerGenesisState" | "hostGenesisState">, never>>(object: I): GenesisState;
};
export declare const ControllerGenesisState: {
    encode(message: ControllerGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ControllerGenesisState;
    fromJSON(object: any): ControllerGenesisState;
    toJSON(message: ControllerGenesisState): unknown;
    fromPartial<I extends {
        activeChannels?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] | undefined;
        interchainAccounts?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] | undefined;
        ports?: string[] | undefined;
        params?: {
            controllerEnabled?: boolean | undefined;
        } | undefined;
    } & {
        activeChannels?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & Record<Exclude<keyof I["activeChannels"][number], "portId" | "channelId" | "connectionId">, never>)[] & Record<Exclude<keyof I["activeChannels"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        interchainAccounts?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & Record<Exclude<keyof I["interchainAccounts"][number], "portId" | "connectionId" | "accountAddress">, never>)[] & Record<Exclude<keyof I["interchainAccounts"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        ports?: (string[] & string[] & Record<Exclude<keyof I["ports"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        params?: ({
            controllerEnabled?: boolean | undefined;
        } & {
            controllerEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], "controllerEnabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "params" | "activeChannels" | "interchainAccounts" | "ports">, never>>(object: I): ControllerGenesisState;
};
export declare const HostGenesisState: {
    encode(message: HostGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostGenesisState;
    fromJSON(object: any): HostGenesisState;
    toJSON(message: HostGenesisState): unknown;
    fromPartial<I extends {
        activeChannels?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] | undefined;
        interchainAccounts?: {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] | undefined;
        port?: string | undefined;
        params?: {
            hostEnabled?: boolean | undefined;
            allowMessages?: string[] | undefined;
        } | undefined;
    } & {
        activeChannels?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            channelId?: string | undefined;
        } & Record<Exclude<keyof I["activeChannels"][number], "portId" | "channelId" | "connectionId">, never>)[] & Record<Exclude<keyof I["activeChannels"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        interchainAccounts?: ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        }[] & ({
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & {
            connectionId?: string | undefined;
            portId?: string | undefined;
            accountAddress?: string | undefined;
        } & Record<Exclude<keyof I["interchainAccounts"][number], "portId" | "connectionId" | "accountAddress">, never>)[] & Record<Exclude<keyof I["interchainAccounts"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        port?: string | undefined;
        params?: ({
            hostEnabled?: boolean | undefined;
            allowMessages?: string[] | undefined;
        } & {
            hostEnabled?: boolean | undefined;
            allowMessages?: (string[] & string[] & Record<Exclude<keyof I["params"]["allowMessages"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "hostEnabled" | "allowMessages">, never>) | undefined;
    } & Record<Exclude<keyof I, "params" | "port" | "activeChannels" | "interchainAccounts">, never>>(object: I): HostGenesisState;
};
export declare const ActiveChannel: {
    encode(message: ActiveChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActiveChannel;
    fromJSON(object: any): ActiveChannel;
    toJSON(message: ActiveChannel): unknown;
    fromPartial<I extends {
        connectionId?: string | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
    } & {
        connectionId?: string | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
    } & Record<Exclude<keyof I, "portId" | "channelId" | "connectionId">, never>>(object: I): ActiveChannel;
};
export declare const RegisteredInterchainAccount: {
    encode(message: RegisteredInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisteredInterchainAccount;
    fromJSON(object: any): RegisteredInterchainAccount;
    toJSON(message: RegisteredInterchainAccount): unknown;
    fromPartial<I extends {
        connectionId?: string | undefined;
        portId?: string | undefined;
        accountAddress?: string | undefined;
    } & {
        connectionId?: string | undefined;
        portId?: string | undefined;
        accountAddress?: string | undefined;
    } & Record<Exclude<keyof I, "portId" | "connectionId" | "accountAddress">, never>>(object: I): RegisteredInterchainAccount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
