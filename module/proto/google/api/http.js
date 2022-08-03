import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/**
 * Defines the HTTP configuration for an API service. It contains a list of
 * [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method
 * to one or more HTTP REST API methods.
 */

function createBaseHttp() {
  return {
    rules: [],
    fullyDecodeReservedExpansion: false
  };
}

export const Http = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rules) {
      HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.fullyDecodeReservedExpansion === true) {
      writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          break;

        case 2:
          message.fullyDecodeReservedExpansion = reader.bool();
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
      rules: Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map(e => HttpRule.fromJSON(e)) : [],
      fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion) ? Boolean(object.fullyDecodeReservedExpansion) : false
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? HttpRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    message.fullyDecodeReservedExpansion !== undefined && (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
    return obj;
  },

  fromPartial(object) {
    var _object$rules, _object$fullyDecodeRe;

    const message = createBaseHttp();
    message.rules = ((_object$rules = object.rules) === null || _object$rules === void 0 ? void 0 : _object$rules.map(e => HttpRule.fromPartial(e))) || [];
    message.fullyDecodeReservedExpansion = (_object$fullyDecodeRe = object.fullyDecodeReservedExpansion) !== null && _object$fullyDecodeRe !== void 0 ? _object$fullyDecodeRe : false;
    return message;
  }

};

function createBaseHttpRule() {
  return {
    selector: "",
    get: undefined,
    put: undefined,
    post: undefined,
    delete: undefined,
    patch: undefined,
    custom: undefined,
    body: "",
    responseBody: "",
    additionalBindings: []
  };
}

export const HttpRule = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    if (message.get !== undefined) {
      writer.uint32(18).string(message.get);
    }

    if (message.put !== undefined) {
      writer.uint32(26).string(message.put);
    }

    if (message.post !== undefined) {
      writer.uint32(34).string(message.post);
    }

    if (message.delete !== undefined) {
      writer.uint32(42).string(message.delete);
    }

    if (message.patch !== undefined) {
      writer.uint32(50).string(message.patch);
    }

    if (message.custom !== undefined) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }

    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }

    if (message.responseBody !== "") {
      writer.uint32(98).string(message.responseBody);
    }

    for (const v of message.additionalBindings) {
      HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.get = reader.string();
          break;

        case 3:
          message.put = reader.string();
          break;

        case 4:
          message.post = reader.string();
          break;

        case 5:
          message.delete = reader.string();
          break;

        case 6:
          message.patch = reader.string();
          break;

        case 8:
          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          break;

        case 7:
          message.body = reader.string();
          break;

        case 12:
          message.responseBody = reader.string();
          break;

        case 11:
          message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
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
      selector: isSet(object.selector) ? String(object.selector) : "",
      get: isSet(object.get) ? String(object.get) : undefined,
      put: isSet(object.put) ? String(object.put) : undefined,
      post: isSet(object.post) ? String(object.post) : undefined,
      delete: isSet(object.delete) ? String(object.delete) : undefined,
      patch: isSet(object.patch) ? String(object.patch) : undefined,
      custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
      body: isSet(object.body) ? String(object.body) : "",
      responseBody: isSet(object.responseBody) ? String(object.responseBody) : "",
      additionalBindings: Array.isArray(object === null || object === void 0 ? void 0 : object.additionalBindings) ? object.additionalBindings.map(e => HttpRule.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.get !== undefined && (obj.get = message.get);
    message.put !== undefined && (obj.put = message.put);
    message.post !== undefined && (obj.post = message.post);
    message.delete !== undefined && (obj.delete = message.delete);
    message.patch !== undefined && (obj.patch = message.patch);
    message.custom !== undefined && (obj.custom = message.custom ? CustomHttpPattern.toJSON(message.custom) : undefined);
    message.body !== undefined && (obj.body = message.body);
    message.responseBody !== undefined && (obj.responseBody = message.responseBody);

    if (message.additionalBindings) {
      obj.additionalBindings = message.additionalBindings.map(e => e ? HttpRule.toJSON(e) : undefined);
    } else {
      obj.additionalBindings = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$selector, _object$get, _object$put, _object$post, _object$delete, _object$patch, _object$body, _object$responseBody, _object$additionalBin;

    const message = createBaseHttpRule();
    message.selector = (_object$selector = object.selector) !== null && _object$selector !== void 0 ? _object$selector : "";
    message.get = (_object$get = object.get) !== null && _object$get !== void 0 ? _object$get : undefined;
    message.put = (_object$put = object.put) !== null && _object$put !== void 0 ? _object$put : undefined;
    message.post = (_object$post = object.post) !== null && _object$post !== void 0 ? _object$post : undefined;
    message.delete = (_object$delete = object.delete) !== null && _object$delete !== void 0 ? _object$delete : undefined;
    message.patch = (_object$patch = object.patch) !== null && _object$patch !== void 0 ? _object$patch : undefined;
    message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
    message.body = (_object$body = object.body) !== null && _object$body !== void 0 ? _object$body : "";
    message.responseBody = (_object$responseBody = object.responseBody) !== null && _object$responseBody !== void 0 ? _object$responseBody : "";
    message.additionalBindings = ((_object$additionalBin = object.additionalBindings) === null || _object$additionalBin === void 0 ? void 0 : _object$additionalBin.map(e => HttpRule.fromPartial(e))) || [];
    return message;
  }

};

function createBaseCustomHttpPattern() {
  return {
    kind: "",
    path: ""
  };
}

export const CustomHttpPattern = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }

    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;

        case 2:
          message.path = reader.string();
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
      kind: isSet(object.kind) ? String(object.kind) : "",
      path: isSet(object.path) ? String(object.path) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.kind !== undefined && (obj.kind = message.kind);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial(object) {
    var _object$kind, _object$path;

    const message = createBaseCustomHttpPattern();
    message.kind = (_object$kind = object.kind) !== null && _object$kind !== void 0 ? _object$kind : "";
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    return message;
  }

};