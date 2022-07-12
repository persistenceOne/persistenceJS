import { join } from "path";
import telescope from "@osmonauts/telescope";
import { camel, snake } from "case";
import {generate} from "cosmwasm-typescript-gen"

const protoDirs = [join(__dirname, "./cosmos-sdk/proto"), join(__dirname, "./cosmos-sdk/third_party"), join(__dirname, "./proto")];
const outPath = join(__dirname, "./src/proto");


generate(
    "bl-contracts",
    ["/Users/vishrutsingh/Documents/persistenceJS/BL-contracts/contracts/bl-market/schema"],
    "/Users/vishrutsingh/Documents/persistenceJS/src"
)



// telescope({
//     protoDirs,
//     outPath,
//     options: {
//         includeAminos: true,
//         includeLCDClient: true,
//     },
//     plugins: [
//         {
//             name: "aminoCasing",
//             plugin: ({ protoPackage }) => {
//                 if (protoPackage.startsWith("osmosis")) {
//                     return camel;
//                 }
//                 return snake;
//             },
//         },
//     ],
// });
