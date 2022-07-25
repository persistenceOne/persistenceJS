#!/usr/bin/env node
import { join } from "path";
import telescope from "@osmonauts/telescope";

const protoDirs = [
    [
        "./source/cosmos-sdk/proto",
        "./source/cosmos-sdk/third_party/proto"
    ],
    [
        "./source/persistenceCore/proto",
        "./source/cosmos-sdk/third_party/proto"
    ],
    [
        "./source/wasmd/proto",
        "./source/wasmd/third_party/proto"
    ]
];
const outPath = join(__dirname, "../src/proto");

protoDirs.forEach(dirs => {
    telescope({
        protoDirs: [
            'third_party',
            ...dirs
        ],
        outPath,
        options: {
            includeAminos: true,
            includeLCDClients: true,
        }
    });
})
