import { Params as Params1 } from "../controller/v1/controller";
import { Params as Params2 } from "../host/v1/host";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controllerGenesisState: ControllerGenesisState;
    hostGenesisState: HostGenesisState;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    ports: string[];
    params: Params1;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    port: string;
    params: Params2;
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
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const ControllerGenesisState: {
    encode(message: ControllerGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGenesisState;
    fromJSON(object: any): ControllerGenesisState;
    toJSON(message: ControllerGenesisState): unknown;
    fromPartial(object: DeepPartial<ControllerGenesisState>): ControllerGenesisState;
};
export declare const HostGenesisState: {
    encode(message: HostGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HostGenesisState;
    fromJSON(object: any): HostGenesisState;
    toJSON(message: HostGenesisState): unknown;
    fromPartial(object: DeepPartial<HostGenesisState>): HostGenesisState;
};
export declare const ActiveChannel: {
    encode(message: ActiveChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveChannel;
    fromJSON(object: any): ActiveChannel;
    toJSON(message: ActiveChannel): unknown;
    fromPartial(object: DeepPartial<ActiveChannel>): ActiveChannel;
};
export declare const RegisteredInterchainAccount: {
    encode(message: RegisteredInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredInterchainAccount;
    fromJSON(object: any): RegisteredInterchainAccount;
    toJSON(message: RegisteredInterchainAccount): unknown;
    fromPartial(object: DeepPartial<RegisteredInterchainAccount>): RegisteredInterchainAccount;
};
