import { Rpc } from "@osmonauts/helpers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
}
