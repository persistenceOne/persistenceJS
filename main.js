const keys = require("./utilities/keys");
const bank = require("./transaction/bank/index");
const identity = require("./transaction/identity/index");

let mnemonic = "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
let toAddress = "cosmos1pkkayn066msg6kn33wnl5srhdt3tnu2vzasz9c";

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

identity.issue(mnemonic, toAddress, "", "", "", "test1:test1,test2:test2", 25, "stake", 200000, "sync")
    .then(txHash => {
        console.log("Tx successful. TxHash: ");
        console.log(txHash);
    })
    .catch(err => {
        console.log("Transaction failed");
        console.log(err);
    })

