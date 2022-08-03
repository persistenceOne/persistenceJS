import { IdentifiedClientState, ClientConsensusStates, Params } from "./client";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/** GenesisState defines the ibc client submodule's genesis state. */

function createBaseGenesisState() {
  return {
    clients: [],
    clientsConsensus: [],
    clientsMetadata: [],
    params: undefined,
    createLocalhost: false,
    nextClientSequence: Long.UZERO
  };
}

export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.clientsConsensus) {
      ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    if (message.createLocalhost === true) {
      writer.uint32(40).bool(message.createLocalhost);
    }

    if (!message.nextClientSequence.isZero()) {
      writer.uint32(48).uint64(message.nextClientSequence);
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
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;

        case 3:
          message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;

        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 5:
          message.createLocalhost = reader.bool();
          break;

        case 6:
          message.nextClientSequence = reader.uint64();
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
      clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients) ? object.clients.map(e => IdentifiedClientState.fromJSON(e)) : [],
      clientsConsensus: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsConsensus) ? object.clientsConsensus.map(e => ClientConsensusStates.fromJSON(e)) : [],
      clientsMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsMetadata) ? object.clientsMetadata.map(e => IdentifiedGenesisMetadata.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      createLocalhost: isSet(object.createLocalhost) ? Boolean(object.createLocalhost) : false,
      nextClientSequence: isSet(object.nextClientSequence) ? Long.fromString(object.nextClientSequence) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
    } else {
      obj.clients = [];
    }

    if (message.clientsConsensus) {
      obj.clientsConsensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toJSON(e) : undefined);
    } else {
      obj.clientsConsensus = [];
    }

    if (message.clientsMetadata) {
      obj.clientsMetadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.clientsMetadata = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.createLocalhost !== undefined && (obj.createLocalhost = message.createLocalhost);
    message.nextClientSequence !== undefined && (obj.nextClientSequence = (message.nextClientSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$clients, _object$clientsConsen, _object$clientsMetada, _object$createLocalho;

    const message = createBaseGenesisState();
    message.clients = ((_object$clients = object.clients) === null || _object$clients === void 0 ? void 0 : _object$clients.map(e => IdentifiedClientState.fromPartial(e))) || [];
    message.clientsConsensus = ((_object$clientsConsen = object.clientsConsensus) === null || _object$clientsConsen === void 0 ? void 0 : _object$clientsConsen.map(e => ClientConsensusStates.fromPartial(e))) || [];
    message.clientsMetadata = ((_object$clientsMetada = object.clientsMetadata) === null || _object$clientsMetada === void 0 ? void 0 : _object$clientsMetada.map(e => IdentifiedGenesisMetadata.fromPartial(e))) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.createLocalhost = (_object$createLocalho = object.createLocalhost) !== null && _object$createLocalho !== void 0 ? _object$createLocalho : false;
    message.nextClientSequence = object.nextClientSequence !== undefined && object.nextClientSequence !== null ? Long.fromValue(object.nextClientSequence) : Long.UZERO;
    return message;
  }

};

function createBaseGenesisMetadata() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const GenesisMetadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
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
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$key, _object$value;

    const message = createBaseGenesisMetadata();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }

};

function createBaseIdentifiedGenesisMetadata() {
  return {
    clientId: "",
    clientMetadata: []
  };
}

export const IdentifiedGenesisMetadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    for (const v of message.clientMetadata) {
      GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientMetadata) ? object.clientMetadata.map(e => GenesisMetadata.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.clientMetadata) {
      obj.clientMetadata = message.clientMetadata.map(e => e ? GenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.clientMetadata = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$clientId, _object$clientMetadat;

    const message = createBaseIdentifiedGenesisMetadata();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.clientMetadata = ((_object$clientMetadat = object.clientMetadata) === null || _object$clientMetadat === void 0 ? void 0 : _object$clientMetadat.map(e => GenesisMetadata.fromPartial(e))) || [];
    return message;
  }

};