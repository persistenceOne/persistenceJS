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
            includePackageVar: false,
            aminoEncoding: {
                enabled: false
            },
            stargateClients:{
                enabled: true
            },
            lcdClients: {
                enabled: false
            },
            rpcClients: {
                enabled: true,
                camelCase: true
            },
            typingsFormat: {
                duration: 'duration',
                timestamp: 'date',
                useExact: false
            }
        }
    });
})
