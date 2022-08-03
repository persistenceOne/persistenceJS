import { Params, Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/** GenesisState defines the bank module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    balances: [],
    supply: [],
    denomMetadata: []
  };
}

export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.balances) {
      Balance.encode(v, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.supply) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.denomMetadata) {
      Metadata.encode(v, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;

        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map(e => Balance.fromJSON(e)) : [],
      supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply) ? object.supply.map(e => Coin.fromJSON(e)) : [],
      denomMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.denomMetadata) ? object.denomMetadata.map(e => Metadata.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supply = [];
    }

    if (message.denomMetadata) {
      obj.denomMetadata = message.denomMetadata.map(e => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.denomMetadata = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$balances, _object$supply, _object$denomMetadata;

    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.balances = ((_object$balances = object.balances) === null || _object$balances === void 0 ? void 0 : _object$balances.map(e => Balance.fromPartial(e))) || [];
    message.supply = ((_object$supply = object.supply) === null || _object$supply === void 0 ? void 0 : _object$supply.map(e => Coin.fromPartial(e))) || [];
    message.denomMetadata = ((_object$denomMetadata = object.denomMetadata) === null || _object$denomMetadata === void 0 ? void 0 : _object$denomMetadata.map(e => Metadata.fromPartial(e))) || [];
    return message;
  }

};

function createBaseBalance() {
  return {
    address: "",
    coins: []
  };
}

export const Balance = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.coins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(e => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$address, _object$coins;

    const message = createBaseBalance();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};