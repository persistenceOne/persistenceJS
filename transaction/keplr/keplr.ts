import * as config from "../../config.json";
import { MsgSend } from('@cosmjs/stargate/build/codec/cosmos/bank/v1beta1/tx');
import { Persistence } from "../../utilities/persistenceJS";
import { getWallet } from "../../utilities/keys";

class keplr extends Persistence {
  createMsg = async (
      msgSendTypeUrl: string,
      keplrAddress: string,
      toAddress: string,
      amount: any,
      mnemonic: any,
      feesAmount: any,
      feesToken: any,
      gas: any,
      mode: any,
      memo: string
  ): Promise<any> => {
    try {
      const wallet = getWallet(mnemonic, "");
      let path = this.path;

      let options = {
        typeUrl: msgSendTypeUrl,
        value: MsgSend.fromPartial({
          fromAddress: keplrAddress,
          toAddress: toAddress,
          amount: [
            {
              denom: config.CoinDenom,
              amount: String(amount),
            },
          ],
        }),
      };
      return options;
    } catch (e) {
      console.log("Error ion keplr: ", e);
    }
  }
}

module.exports = keplr;
