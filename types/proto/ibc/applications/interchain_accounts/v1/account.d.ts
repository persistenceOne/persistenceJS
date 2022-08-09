import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    baseAccount: BaseAccount;
    accountOwner: string;
}
export declare const InterchainAccount: {
    encode(message: InterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterchainAccount;
    fromJSON(object: any): InterchainAccount;
    toJSON(message: InterchainAccount): unknown;
    fromPartial(object: DeepPartial<InterchainAccount>): InterchainAccount;
};
