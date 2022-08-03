import { Params as Params1 } from "../controller/v1/controller";
import { Params as Params2 } from "../host/v1/host";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/** GenesisState defines the interchain accounts genesis state */

function createBaseGenesisState() {
  return {
    controllerGenesisState: undefined,
    hostGenesisState: undefined
  };
}

export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.controllerGenesisState !== undefined) {
      ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
    }

    if (message.hostGenesisState !== undefined) {
      HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
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
          message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
          break;

        case 2:
          message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
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
      controllerGenesisState: isSet(object.controllerGenesisState) ? ControllerGenesisState.fromJSON(object.controllerGenesisState) : undefined,
      hostGenesisState: isSet(object.hostGenesisState) ? HostGenesisState.fromJSON(object.hostGenesisState) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.controllerGenesisState !== undefined && (obj.controllerGenesisState = message.controllerGenesisState ? ControllerGenesisState.toJSON(message.controllerGenesisState) : undefined);
    message.hostGenesisState !== undefined && (obj.hostGenesisState = message.hostGenesisState ? HostGenesisState.toJSON(message.hostGenesisState) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseGenesisState();
    message.controllerGenesisState = object.controllerGenesisState !== undefined && object.controllerGenesisState !== null ? ControllerGenesisState.fromPartial(object.controllerGenesisState) : undefined;
    message.hostGenesisState = object.hostGenesisState !== undefined && object.hostGenesisState !== null ? HostGenesisState.fromPartial(object.hostGenesisState) : undefined;
    return message;
  }

};

function createBaseControllerGenesisState() {
  return {
    activeChannels: [],
    interchainAccounts: [],
    ports: [],
    params: undefined
  };
}

export const ControllerGenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.ports) {
      writer.uint32(26).string(v);
    }

    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ports.push(reader.string());
          break;

        case 4:
          message.params = Params1.decode(reader, reader.uint32());
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
      activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels) ? object.activeChannels.map(e => ActiveChannel.fromJSON(e)) : [],
      interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts) ? object.interchainAccounts.map(e => RegisteredInterchainAccount.fromJSON(e)) : [],
      ports: Array.isArray(object === null || object === void 0 ? void 0 : object.ports) ? object.ports.map(e => String(e)) : [],
      params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
    } else {
      obj.activeChannels = [];
    }

    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
    } else {
      obj.interchainAccounts = [];
    }

    if (message.ports) {
      obj.ports = message.ports.map(e => e);
    } else {
      obj.ports = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$activeChannel, _object$interchainAcc, _object$ports;

    const message = createBaseControllerGenesisState();
    message.activeChannels = ((_object$activeChannel = object.activeChannels) === null || _object$activeChannel === void 0 ? void 0 : _object$activeChannel.map(e => ActiveChannel.fromPartial(e))) || [];
    message.interchainAccounts = ((_object$interchainAcc = object.interchainAccounts) === null || _object$interchainAcc === void 0 ? void 0 : _object$interchainAcc.map(e => RegisteredInterchainAccount.fromPartial(e))) || [];
    message.ports = ((_object$ports = object.ports) === null || _object$ports === void 0 ? void 0 : _object$ports.map(e => e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseHostGenesisState() {
  return {
    activeChannels: [],
    interchainAccounts: [],
    port: "",
    params: undefined
  };
}

export const HostGenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.activeChannels) {
      ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.interchainAccounts) {
      RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }

    if (message.params !== undefined) {
      Params2.encode(message.params, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.port = reader.string();
          break;

        case 4:
          message.params = Params2.decode(reader, reader.uint32());
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
      activeChannels: Array.isArray(object === null || object === void 0 ? void 0 : object.activeChannels) ? object.activeChannels.map(e => ActiveChannel.fromJSON(e)) : [],
      interchainAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchainAccounts) ? object.interchainAccounts.map(e => RegisteredInterchainAccount.fromJSON(e)) : [],
      port: isSet(object.port) ? String(object.port) : "",
      params: isSet(object.params) ? Params2.fromJSON(object.params) : undefined
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.activeChannels) {
      obj.activeChannels = message.activeChannels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
    } else {
      obj.activeChannels = [];
    }

    if (message.interchainAccounts) {
      obj.interchainAccounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
    } else {
      obj.interchainAccounts = [];
    }

    message.port !== undefined && (obj.port = message.port);
    message.params !== undefined && (obj.params = message.params ? Params2.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$activeChannel2, _object$interchainAcc2, _object$port;

    const message = createBaseHostGenesisState();
    message.activeChannels = ((_object$activeChannel2 = object.activeChannels) === null || _object$activeChannel2 === void 0 ? void 0 : _object$activeChannel2.map(e => ActiveChannel.fromPartial(e))) || [];
    message.interchainAccounts = ((_object$interchainAcc2 = object.interchainAccounts) === null || _object$interchainAcc2 === void 0 ? void 0 : _object$interchainAcc2.map(e => RegisteredInterchainAccount.fromPartial(e))) || [];
    message.port = (_object$port = object.port) !== null && _object$port !== void 0 ? _object$port : "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseActiveChannel() {
  return {
    connectionId: "",
    portId: "",
    channelId: ""
  };
}

export const ActiveChannel = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.portId = reader.string();
          break;

        case 3:
          message.channelId = reader.string();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object) {
    var _object$connectionId, _object$portId, _object$channelId;

    const message = createBaseActiveChannel();
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    return message;
  }

};

function createBaseRegisteredInterchainAccount() {
  return {
    connectionId: "",
    portId: "",
    accountAddress: ""
  };
}

export const RegisteredInterchainAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    if (message.accountAddress !== "") {
      writer.uint32(26).string(message.accountAddress);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredInterchainAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.portId = reader.string();
          break;

        case 3:
          message.accountAddress = reader.string();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial(object) {
    var _object$connectionId2, _object$portId2, _object$accountAddres;

    const message = createBaseRegisteredInterchainAccount();
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.accountAddress = (_object$accountAddres = object.accountAddress) !== null && _object$accountAddres !== void 0 ? _object$accountAddres : "";
    return message;
  }

};