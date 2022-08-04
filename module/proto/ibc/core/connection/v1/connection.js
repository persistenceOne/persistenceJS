import { MerklePrefix } from "../../commitment/v1/commitment";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */

export let State;

(function (State) {
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));

export function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;

    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;

    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;

    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";

    case State.STATE_INIT:
      return "STATE_INIT";

    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";

    case State.STATE_OPEN:
      return "STATE_OPEN";

    default:
      return "UNKNOWN";
  }
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */

function createBaseConnectionEnd() {
  return {
    clientId: "",
    versions: [],
    state: 0,
    counterparty: undefined,
    delayPeriod: Long.UZERO
  };
}

export const ConnectionEnd = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    for (const v of message.versions) {
      Version.encode(v, writer.uint32(18).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionEnd();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 3:
          message.state = reader.int32();
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delayPeriod = reader.uint64();
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
      versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions) ? object.versions.map(e => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromString(object.delayPeriod) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }

    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$clientId, _object$versions, _object$state;

    const message = createBaseConnectionEnd();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.versions = ((_object$versions = object.versions) === null || _object$versions === void 0 ? void 0 : _object$versions.map(e => Version.fromPartial(e))) || [];
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? Long.fromValue(object.delayPeriod) : Long.UZERO;
    return message;
  }

};

function createBaseIdentifiedConnection() {
  return {
    id: "",
    clientId: "",
    versions: [],
    state: 0,
    counterparty: undefined,
    delayPeriod: Long.UZERO
  };
}

export const IdentifiedConnection = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }

    for (const v of message.versions) {
      Version.encode(v, writer.uint32(26).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(48).uint64(message.delayPeriod);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedConnection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 4:
          message.state = reader.int32();
          break;

        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 6:
          message.delayPeriod = reader.uint64();
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
      id: isSet(object.id) ? String(object.id) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions) ? object.versions.map(e => Version.fromJSON(e)) : [],
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromString(object.delayPeriod) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.id !== undefined && (obj.id = message.id);
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.versions) {
      obj.versions = message.versions.map(e => e ? Version.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }

    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$id, _object$clientId2, _object$versions2, _object$state2;

    const message = createBaseIdentifiedConnection();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.versions = ((_object$versions2 = object.versions) === null || _object$versions2 === void 0 ? void 0 : _object$versions2.map(e => Version.fromPartial(e))) || [];
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? Long.fromValue(object.delayPeriod) : Long.UZERO;
    return message;
  }

};

function createBaseCounterparty() {
  return {
    clientId: "",
    connectionId: "",
    prefix: undefined
  };
}

export const Counterparty = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.prefix !== undefined) {
      MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.prefix = MerklePrefix.decode(reader, reader.uint32());
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      prefix: isSet(object.prefix) ? MerklePrefix.fromJSON(object.prefix) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.prefix !== undefined && (obj.prefix = message.prefix ? MerklePrefix.toJSON(message.prefix) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$clientId3, _object$connectionId;

    const message = createBaseCounterparty();
    message.clientId = (_object$clientId3 = object.clientId) !== null && _object$clientId3 !== void 0 ? _object$clientId3 : "";
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : undefined;
    return message;
  }

};

function createBaseClientPaths() {
  return {
    paths: []
  };
}

export const ClientPaths = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.paths) {
      writer.uint32(10).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientPaths();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
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
      paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$paths;

    const message = createBaseClientPaths();
    message.paths = ((_object$paths = object.paths) === null || _object$paths === void 0 ? void 0 : _object$paths.map(e => e)) || [];
    return message;
  }

};

function createBaseConnectionPaths() {
  return {
    clientId: "",
    paths: []
  };
}

export const ConnectionPaths = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    for (const v of message.paths) {
      writer.uint32(18).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionPaths();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.paths.push(reader.string());
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
      paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths) ? object.paths.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);

    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$clientId4, _object$paths2;

    const message = createBaseConnectionPaths();
    message.clientId = (_object$clientId4 = object.clientId) !== null && _object$clientId4 !== void 0 ? _object$clientId4 : "";
    message.paths = ((_object$paths2 = object.paths) === null || _object$paths2 === void 0 ? void 0 : _object$paths2.map(e => e)) || [];
    return message;
  }

};

function createBaseVersion() {
  return {
    identifier: "",
    features: []
  };
}

export const Version = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }

    for (const v of message.features) {
      writer.uint32(18).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.features.push(reader.string());
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
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      features: Array.isArray(object === null || object === void 0 ? void 0 : object.features) ? object.features.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);

    if (message.features) {
      obj.features = message.features.map(e => e);
    } else {
      obj.features = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$identifier, _object$features;

    const message = createBaseVersion();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    message.features = ((_object$features = object.features) === null || _object$features === void 0 ? void 0 : _object$features.map(e => e)) || [];
    return message;
  }

};

function createBaseParams() {
  return {
    maxExpectedTimePerBlock: Long.UZERO
  };
}

export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.maxExpectedTimePerBlock.isZero()) {
      writer.uint32(8).uint64(message.maxExpectedTimePerBlock);
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
          message.maxExpectedTimePerBlock = reader.uint64();
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
      maxExpectedTimePerBlock: isSet(object.maxExpectedTimePerBlock) ? Long.fromString(object.maxExpectedTimePerBlock) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.maxExpectedTimePerBlock !== undefined && (obj.maxExpectedTimePerBlock = (message.maxExpectedTimePerBlock || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseParams();
    message.maxExpectedTimePerBlock = object.maxExpectedTimePerBlock !== undefined && object.maxExpectedTimePerBlock !== null ? Long.fromValue(object.maxExpectedTimePerBlock) : Long.UZERO;
    return message;
  }

};