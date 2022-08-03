import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/** MsgSend represents a message to send coins from one account to another. */

function createBaseMsgSend() {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}

export const MsgSend = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }

    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }

    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;

        case 2:
          message.toAddress = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
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
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$fromAddress, _object$toAddress, _object$amount;

    const message = createBaseMsgSend();
    message.fromAddress = (_object$fromAddress = object.fromAddress) !== null && _object$fromAddress !== void 0 ? _object$fromAddress : "";
    message.toAddress = (_object$toAddress = object.toAddress) !== null && _object$toAddress !== void 0 ? _object$toAddress : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBaseMsgSendResponse() {
  return {};
}

export const MsgSendResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_) {
    return {};
  },

  toJSON(_) {
    const obj = {};
    return obj;
  },

  fromPartial(_) {
    const message = createBaseMsgSendResponse();
    return message;
  }

};

function createBaseMsgMultiSend() {
  return {
    inputs: [],
    outputs: []
  };
}

export const MsgMultiSend = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.inputs) {
      Input.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.outputs) {
      Output.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;

        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
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
      inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs) ? object.inputs.map(e => Input.fromJSON(e)) : [],
      outputs: Array.isArray(object === null || object === void 0 ? void 0 : object.outputs) ? object.outputs.map(e => Output.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$inputs, _object$outputs;

    const message = createBaseMsgMultiSend();
    message.inputs = ((_object$inputs = object.inputs) === null || _object$inputs === void 0 ? void 0 : _object$inputs.map(e => Input.fromPartial(e))) || [];
    message.outputs = ((_object$outputs = object.outputs) === null || _object$outputs === void 0 ? void 0 : _object$outputs.map(e => Output.fromPartial(e))) || [];
    return message;
  }

};

function createBaseMsgMultiSendResponse() {
  return {};
}

export const MsgMultiSendResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_) {
    return {};
  },

  toJSON(_) {
    const obj = {};
    return obj;
  },

  fromPartial(_) {
    const message = createBaseMsgMultiSendResponse();
    return message;
  }

};