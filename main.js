const keys = require("./utilities/keys");
const bank = require("./transaction/bank/index");

let mnemonic = "fluid cereal trash miracle casino menu true method exhaust pen fiber rural grape purchase rather table omit youth gain cage erase puppy sibling expand";
let toAddress = "cosmos10hhgcs8hmzj9mwge6ctzdrvdvnur68uzdpwu3g";

console.log("Sending coin...");
bank.sendCoin(mnemonic, toAddress, 2000000, "stake", 25, "stake", 200000, "block")
    .then(txHash => {
        console.log("Tx successful. TxHash: ");
        console.log(txHash);
    })
    .catch(err => {
        console.log("Transaction failed");
        console.log(err);
    })

console.log("Creating random wallet...");
let randomWallet = keys.createRandomWallet();
console.log(randomWallet);

let userGivenMnemonic = 'banana sun alone body hybrid praise drift gravity castle task proud six surround twice fuel riot enable deny casual menu elbow beauty repair three';
console.log("Creating wallet from mnemonic...");
let wallet = keys.createWallet(userGivenMnemonic);
console.log(wallet);

console.log("Creating keystore...");
let createdStore = keys.createStore(wallet.mnemonic, "123123123", wallet.address);
if (createdStore.error) {
    console.log(createdStore.error);
} else {
    console.log("Keystore created with name " + wallet.address + ".json")
}

if (createdStore.error) {
    console.log("Unable to store keys. Reason: " + created.error);
}

console.log("Reading ketstore...");
let mnemonicRestored = keys.decryptStore("cosmos160phc9aajqmllhn442tyehkrwpd8sytr6q9uwc.json", "123123123")
console.log(mnemonicRestored);
