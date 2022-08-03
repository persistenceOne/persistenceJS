import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */

function createBaseMetadata() {
  return {
    version: "",
    controllerConnectionId: "",
    hostConnectionId: "",
    address: "",
    encoding: "",
    txType: ""
  };
}

export const Metadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }

    if (message.controllerConnectionId !== "") {
      writer.uint32(18).string(message.controllerConnectionId);
    }

    if (message.hostConnectionId !== "") {
      writer.uint32(26).string(message.hostConnectionId);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    if (message.encoding !== "") {
      writer.uint32(42).string(message.encoding);
    }

    if (message.txType !== "") {
      writer.uint32(50).string(message.txType);
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
          message.version = reader.string();
          break;

        case 2:
          message.controllerConnectionId = reader.string();
          break;

        case 3:
          message.hostConnectionId = reader.string();
          break;

        case 4:
          message.address = reader.string();
          break;

        case 5:
          message.encoding = reader.string();
          break;

        case 6:
          message.txType = reader.string();
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
      version: isSet(object.version) ? String(object.version) : "",
      controllerConnectionId: isSet(object.controllerConnectionId) ? String(object.controllerConnectionId) : "",
      hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
      txType: isSet(object.txType) ? String(object.txType) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.version !== undefined && (obj.version = message.version);
    message.controllerConnectionId !== undefined && (obj.controllerConnectionId = message.controllerConnectionId);
    message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
    message.address !== undefined && (obj.address = message.address);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.txType !== undefined && (obj.txType = message.txType);
    return obj;
  },

  fromPartial(object) {
    var _object$version, _object$controllerCon, _object$hostConnectio, _object$address, _object$encoding, _object$txType;

    const message = createBaseMetadata();
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.controllerConnectionId = (_object$controllerCon = object.controllerConnectionId) !== null && _object$controllerCon !== void 0 ? _object$controllerCon : "";
    message.hostConnectionId = (_object$hostConnectio = object.hostConnectionId) !== null && _object$hostConnectio !== void 0 ? _object$hostConnectio : "";
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.encoding = (_object$encoding = object.encoding) !== null && _object$encoding !== void 0 ? _object$encoding : "";
    message.txType = (_object$txType = object.txType) !== null && _object$txType !== void 0 ? _object$txType : "";
    return message;
  }

};