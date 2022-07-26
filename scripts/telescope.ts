import { join } from "path";
import telescope from "@osmonauts/telescope";
import { generate } from "cosmwasm-typescript-gen"

const protoDirs = [
    join(__dirname, ".././proto"),
];
const outPath = join(__dirname, "../src");


// generate(
//     "cw20-base",
//     [join(__dirname, ".././source/cw-plus/contracts/cw20-base/schema/")],
//     join(__dirname, "../src/contracts")
// )

telescope({
    protoDirs,
    outPath,
    options: {
        includeAminos: false,
        includeLCDClients: true,
        camelRpcMethods: true,
        includeRpcClients: false,
        useDate: 'date',
        useDuration: 'duration'
    }
});
