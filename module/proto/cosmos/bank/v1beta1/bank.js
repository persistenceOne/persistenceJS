import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/** Params defines the parameters for the bank module. */

function createBaseParams() {
  return {
    sendEnabled: [],
    defaultSendEnabled: false
  };
}

export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.defaultSendEnabled === true) {
      writer.uint32(16).bool(message.defaultSendEnabled);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;

        case 2:
          message.defaultSendEnabled = reader.bool();
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
      sendEnabled: Array.isArray(object === null || object === void 0 ? void 0 : object.sendEnabled) ? object.sendEnabled.map(e => SendEnabled.fromJSON(e)) : [],
      defaultSendEnabled: isSet(object.defaultSendEnabled) ? Boolean(object.defaultSendEnabled) : false
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map(e => e ? SendEnabled.toJSON(e) : undefined);
    } else {
      obj.sendEnabled = [];
    }

    message.defaultSendEnabled !== undefined && (obj.defaultSendEnabled = message.defaultSendEnabled);
    return obj;
  },

  fromPartial(object) {
    var _object$sendEnabled, _object$defaultSendEn;

    const message = createBaseParams();
    message.sendEnabled = ((_object$sendEnabled = object.sendEnabled) === null || _object$sendEnabled === void 0 ? void 0 : _object$sendEnabled.map(e => SendEnabled.fromPartial(e))) || [];
    message.defaultSendEnabled = (_object$defaultSendEn = object.defaultSendEnabled) !== null && _object$defaultSendEn !== void 0 ? _object$defaultSendEn : false;
    return message;
  }

};

function createBaseSendEnabled() {
  return {
    denom: "",
    enabled: false
  };
}

export const SendEnabled = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendEnabled();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.enabled = reader.bool();
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message) {
    const obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(object) {
    var _object$denom, _object$enabled;

    const message = createBaseSendEnabled();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    return message;
  }

};

function createBaseInput() {
  return {
    address: "",
    coins: []
  };
}

export const Input = {
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
    const message = createBaseInput();

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

    const message = createBaseInput();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.coins = ((_object$coins = object.coins) === null || _object$coins === void 0 ? void 0 : _object$coins.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBaseOutput() {
  return {
    address: "",
    coins: []
  };
}

export const Output = {
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
    const message = createBaseOutput();

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
    var _object$address2, _object$coins2;

    const message = createBaseOutput();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.coins = ((_object$coins2 = object.coins) === null || _object$coins2 === void 0 ? void 0 : _object$coins2.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBaseSupply() {
  return {
    total: []
  };
}

export const Supply = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.total) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupply();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total.push(Coin.decode(reader, reader.uint32()));
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
      total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(e => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.total) {
      obj.total = message.total.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$total;

    const message = createBaseSupply();
    message.total = ((_object$total = object.total) === null || _object$total === void 0 ? void 0 : _object$total.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBaseDenomUnit() {
  return {
    denom: "",
    exponent: 0,
    aliases: []
  };
}

export const DenomUnit = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }

    for (const v of message.aliases) {
      writer.uint32(26).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.exponent = reader.uint32();
          break;

        case 3:
          message.aliases.push(reader.string());
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      aliases: Array.isArray(object === null || object === void 0 ? void 0 : object.aliases) ? object.aliases.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));

    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$denom2, _object$exponent, _object$aliases;

    const message = createBaseDenomUnit();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.exponent = (_object$exponent = object.exponent) !== null && _object$exponent !== void 0 ? _object$exponent : 0;
    message.aliases = ((_object$aliases = object.aliases) === null || _object$aliases === void 0 ? void 0 : _object$aliases.map(e => e)) || [];
    return message;
  }

};

function createBaseMetadata() {
  return {
    description: "",
    denomUnits: [],
    base: "",
    display: "",
    name: "",
    symbol: ""
  };
}

export const Metadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    for (const v of message.denomUnits) {
      DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }

    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }

    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;

        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.base = reader.string();
          break;

        case 4:
          message.display = reader.string();
          break;

        case 5:
          message.name = reader.string();
          break;

        case 6:
          message.symbol = reader.string();
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
      description: isSet(object.description) ? String(object.description) : "",
      denomUnits: Array.isArray(object === null || object === void 0 ? void 0 : object.denomUnits) ? object.denomUnits.map(e => DenomUnit.fromJSON(e)) : [],
      base: isSet(object.base) ? String(object.base) : "",
      display: isSet(object.display) ? String(object.display) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.description !== undefined && (obj.description = message.description);

    if (message.denomUnits) {
      obj.denomUnits = message.denomUnits.map(e => e ? DenomUnit.toJSON(e) : undefined);
    } else {
      obj.denomUnits = [];
    }

    message.base !== undefined && (obj.base = message.base);
    message.display !== undefined && (obj.display = message.display);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object) {
    var _object$description, _object$denomUnits, _object$base, _object$display, _object$name, _object$symbol;

    const message = createBaseMetadata();
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.denomUnits = ((_object$denomUnits = object.denomUnits) === null || _object$denomUnits === void 0 ? void 0 : _object$denomUnits.map(e => DenomUnit.fromPartial(e))) || [];
    message.base = (_object$base = object.base) !== null && _object$base !== void 0 ? _object$base : "";
    message.display = (_object$display = object.display) !== null && _object$display !== void 0 ? _object$display : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.symbol = (_object$symbol = object.symbol) !== null && _object$symbol !== void 0 ? _object$symbol : "";
    return message;
  }

};