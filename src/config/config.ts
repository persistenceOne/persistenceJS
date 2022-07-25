import { stringToPath, HdPath } from "@cosmjs/crypto"
export const DefaultConfig = {
    rpc: "rpc.testnet.persistence.one",
    chainId: "wasm-1",
    gasPrices: {
        denom: "uxprt",
        amount: "200",
    },
    gasAdjustment: 0,
}

export const LocalConfig = {
    rpc: "http://localhost:26657",
    chainId: "core-1",
    gasPrices: {
        denom: "uxprt",
        amount: "200",
    },
    gasAdjustment: 0,
}

export const DefaultWalletOptoions = {
    bip39Password: "",
    hdPaths: [stringToPath("m/44'/750'/0'/0/0")],
    prefix: "wasm",
}