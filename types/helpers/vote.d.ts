import { PersistenceClient } from "../clients/client";
export declare function voteYes(client: PersistenceClient, proposalid: number): Promise<string | import("@cosmjs/stargate").DeliverTxResponse>;
