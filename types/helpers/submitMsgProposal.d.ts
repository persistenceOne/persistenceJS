import { PersistenceClient } from "../clients/client";
export declare function contractProposal(client: PersistenceClient, proposal: {
    typeUrl?: string;
    value?: Uint8Array;
}): Promise<any>;
