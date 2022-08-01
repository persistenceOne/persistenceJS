#!/usr/bin/env node
import { generate } from "cosmwasm-typescript-gen"
import { join } from "path";

generate(
    "cw20-ics20",
    ["../src/schema/"],
    "../src/contracts"
)


// cli command: cosmwasm-typescript-gen generate --schema ./src/schema/cw20-ics20/schema/ --out ./src/contracts --name cw20-ics20