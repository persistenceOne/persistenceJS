import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */

function createBaseListAllInterfacesRequest() {
  return {};
}

export const ListAllInterfacesRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();

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
    const message = createBaseListAllInterfacesRequest();
    return message;
  }

};

function createBaseListAllInterfacesResponse() {
  return {
    interfaceNames: []
  };
}

export const ListAllInterfacesResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
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
      interfaceNames: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaceNames) ? object.interfaceNames.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.interfaceNames) {
      obj.interfaceNames = message.interfaceNames.map(e => e);
    } else {
      obj.interfaceNames = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$interfaceName;

    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = ((_object$interfaceName = object.interfaceNames) === null || _object$interfaceName === void 0 ? void 0 : _object$interfaceName.map(e => e)) || [];
    return message;
  }

};

function createBaseListImplementationsRequest() {
  return {
    interfaceName: ""
  };
}

export const ListImplementationsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
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
      interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    return obj;
  },

  fromPartial(object) {
    var _object$interfaceName2;

    const message = createBaseListImplementationsRequest();
    message.interfaceName = (_object$interfaceName2 = object.interfaceName) !== null && _object$interfaceName2 !== void 0 ? _object$interfaceName2 : "";
    return message;
  }

};

function createBaseListImplementationsResponse() {
  return {
    implementationMessageNames: []
  };
}

export const ListImplementationsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
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
      implementationMessageNames: Array.isArray(object === null || object === void 0 ? void 0 : object.implementationMessageNames) ? object.implementationMessageNames.map(e => String(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementationMessageNames = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$implementatio;

    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = ((_object$implementatio = object.implementationMessageNames) === null || _object$implementatio === void 0 ? void 0 : _object$implementatio.map(e => e)) || [];
    return message;
  }

};