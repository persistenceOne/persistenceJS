import { PersistenceClient } from "../clients/client";
import { Coin } from "@cosmjs/stargate";
export declare function Send(client: PersistenceClient, from: string, to: string, amount: Coin): Promise<void>;
