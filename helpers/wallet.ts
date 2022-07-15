import { DirectSecp256k1HdWallet, Registry, DirectSecp256k1HdWalletOptions } from "@cosmjs/proto-signing";
import {
    defaultRegistryTypes as defaultStargateTypes,
    SigningStargateClient,
    SigningStargateClientOptions,
} from "@cosmjs/stargate";
import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import {stringToPath} from "@cosmjs/crypto"


const DefaultWalletOptoions = {
    bip39Password: "",
    hdPaths: [stringToPath("m/44'/750'/0'/0/0")],
    prefix: "persistence",

}

export class Wallet {
    constructor(mnemonic: string, options?: DirectSecp256k1HdWallet || DefaultWalletOptoions) { }

    public wallet(mnemonic: this.mnemonic, options?:  this.options) {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic,
            {
                bip39Password: bip39Password,
                hdPaths: [stringToPath("")],
                prefix: prefix,
            });
        const [firstAccount] = await wallet.getAccounts();
        return [wallet, firstAccount.address]
    }
}


export { }