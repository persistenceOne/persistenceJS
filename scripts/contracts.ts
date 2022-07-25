#!/usr/bin/env node
import { generate } from "cosmwasm-typescript-gen"
import { join } from "path";

generate(
    "cw20-ics20",
    ["../source/cw-plus/contracts/cw20-ics20/schema/"],
    "../src/contracts"
)

generate(
    "cw20-base",
    ["../source/cw-plus/contracts/cw20-base/schema/"],
    "../src/contracts"
)


// cli command: cosmwasm-typescript-gen generate --schema [./source/cw-plus/contracts/cw20-base/schema/, ./source/cw-plus/packages/cw20/schema/] --out ./src/contracts --name cw20-base