import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "@osmonauts/helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */

function createBaseBaseVestingAccount() {
  return {
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: Long.ZERO
  };
}

export const BaseVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.originalVesting) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.delegatedFree) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.delegatedVesting) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }

    if (!message.endTime.isZero()) {
      writer.uint32(40).int64(message.endTime);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.endTime = reader.int64();
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
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      originalVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.originalVesting) ? object.originalVesting.map(e => Coin.fromJSON(e)) : [],
      delegatedFree: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedFree) ? object.delegatedFree.map(e => Coin.fromJSON(e)) : [],
      delegatedVesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatedVesting) ? object.delegatedVesting.map(e => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? Long.fromString(object.endTime) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);

    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.originalVesting = [];
    }

    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegatedFree = [];
    }

    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.delegatedVesting = [];
    }

    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    var _object$originalVesti, _object$delegatedFree, _object$delegatedVest;

    const message = createBaseBaseVestingAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.originalVesting = ((_object$originalVesti = object.originalVesting) === null || _object$originalVesti === void 0 ? void 0 : _object$originalVesti.map(e => Coin.fromPartial(e))) || [];
    message.delegatedFree = ((_object$delegatedFree = object.delegatedFree) === null || _object$delegatedFree === void 0 ? void 0 : _object$delegatedFree.map(e => Coin.fromPartial(e))) || [];
    message.delegatedVesting = ((_object$delegatedVest = object.delegatedVesting) === null || _object$delegatedVest === void 0 ? void 0 : _object$delegatedVest.map(e => Coin.fromPartial(e))) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    return message;
  }

};

function createBaseContinuousVestingAccount() {
  return {
    baseVestingAccount: undefined,
    startTime: Long.ZERO
  };
}

export const ContinuousVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }

    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.startTime = reader.int64();
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      startTime: isSet(object.startTime) ? Long.fromString(object.startTime) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    return message;
  }

};

function createBaseDelayedVestingAccount() {
  return {
    baseVestingAccount: undefined
  };
}

export const DelayedVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    return message;
  }

};

function createBasePeriod() {
  return {
    length: Long.ZERO,
    amount: []
  };
}

export const Period = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.length.isZero()) {
      writer.uint32(8).int64(message.length);
    }

    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64();
          break;

        case 2:
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
      length: isSet(object.length) ? Long.fromString(object.length) : Long.ZERO,
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.length !== undefined && (obj.length = (message.length || Long.ZERO).toString());

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$amount;

    const message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? Long.fromValue(object.length) : Long.ZERO;
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }

};

function createBasePeriodicVestingAccount() {
  return {
    baseVestingAccount: undefined,
    startTime: Long.ZERO,
    vestingPeriods: []
  };
}

export const PeriodicVestingAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }

    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }

    for (const v of message.vestingPeriods) {
      Period.encode(v, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.startTime = reader.int64();
          break;

        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      startTime: isSet(object.startTime) ? Long.fromString(object.startTime) : Long.ZERO,
      vestingPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.vestingPeriods) ? object.vestingPeriods.map(e => Period.fromJSON(e)) : []
    };
  },

  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());

    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vestingPeriods = [];
    }

    return obj;
  },

  fromPartial(object) {
    var _object$vestingPeriod;

    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    message.vestingPeriods = ((_object$vestingPeriod = object.vestingPeriods) === null || _object$vestingPeriod === void 0 ? void 0 : _object$vestingPeriod.map(e => Period.fromPartial(e))) || [];
    return message;
  }

};

function createBasePermanentLockedAccount() {
  return {
    baseVestingAccount: undefined
  };
}

export const PermanentLockedAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
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
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    return message;
  }

};