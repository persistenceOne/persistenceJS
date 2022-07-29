#!/usr/bin/env node
import { generate } from "cosmwasm-typescript-gen"
import { join } from "path";

generate(
    "cw20-ics20",
    ["../src/schema/"],
    "../src/contracts"
)


// cli command: cosmwasm-typescript-gen generate --schema [./source/cw-plus/contracts/cw20-base/schema/, ./src/schema/] --out ./src/contracts --name cw20