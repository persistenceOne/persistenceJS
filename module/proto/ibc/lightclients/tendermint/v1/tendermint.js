import { Duration } from "../../../../google/protobuf/duration";
import { Height } from "../../../core/client/v1/client";
import { ProofSpec } from "../../../../confio/proofs";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot } from "../../../core/commitment/v1/commitment";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import * as _m0 from "protobufjs/minimal";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */

function createBaseClientState() {
  return {
    chainId: "",
    trustLevel: undefined,
    trustingPeriod: undefined,
    unbondingPeriod: undefined,
    maxClockDrift: undefined,
    frozenHeight: undefined,
    latestHeight: undefined,
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  };
}

export const ClientState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.trustLevel !== undefined) {
      Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }

    if (message.trustingPeriod !== undefined) {
      Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }

    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }

    if (message.maxClockDrift !== undefined) {
      Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }

    if (message.frozenHeight !== undefined) {
      Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }

    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.proofSpecs) {
      ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.upgradePath) {
      writer.uint32(74).string(v);
    }

    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }

    if (message.allowUpdateAfterMisbehaviour === true) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.trustLevel = Fraction.decode(reader, reader.uint32());
          break;

        case 3:
          message.trustingPeriod = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;

        case 5:
          message.maxClockDrift = Duration.decode(reader, reader.uint32());
          break;

        case 6:
          message.frozenHeight = Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proofSpecs.push(ProofSpec.decode(reader, reader.uint32()));
          break;

        case 9:
          message.upgradePath.push(reader.string());
          break;

        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;

        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
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
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      trustLevel: isSet(object.trustLevel) ? Fraction.fromJSON(object.trustLevel) : undefined,
      trustingPeriod: isSet(object.trustingPeriod) ? Duration.fromJSON(object.trustingPeriod) : undefined,
      unbondingPeriod: isSet(object.unbondingPeriod) ? Duration.fromJSON(object.unbondingPeriod) : undefined,
      maxClockDrift: isSet(object.maxClockDrift) ? Duration.fromJSON(object.maxClockDrift) : undefined,
      frozenHeight: isSet(object.frozenHeight) ? Height.fromJSON(object.frozenHeight) : undefined,
      latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined,
      proofSpecs: Array.isArray(object === null || object === void 0 ? void 0 : object.proofSpecs) ? object.proofSpecs.map(e => ProofSpec.fromJSON(e)) : [],
      upgradePath: Array.isArray(object === null || object === void 0 ? void 0 : object.upgradePath) ? object.upgradePath.map(e => String(e)) : [],
      allowUpdateAfterExpiry: isSet(object.allowUpdateAfterExpiry) ? Boolean(object.allowUpdateAfterExpiry) : false,
      allowUpdateAfterMisbehaviour: isSet(object.allowUpdateAfterMisbehaviour) ? Boolean(object.allowUpdateAfterMisbehaviour) : false
    };
  },

  toJSON(message) {
    const obj = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? Fraction.toJSON(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod);
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod);
    message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift);
    message.frozenHeight !== undefined && (obj.frozenHeight = message.frozenHeight ? Height.toJSON(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);

    if (message.proofSpecs) {
      obj.proofSpecs = message.proofSpecs.map(e => e ? ProofSpec.toJSON(e) : undefined);
    } else {
      obj.proofSpecs = [];
    }

    if (message.upgradePath) {
      obj.upgradePath = message.upgradePath.map(e => e);
    } else {
      obj.upgradePath = [];
    }

    message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
    message.allowUpdateAfterMisbehaviour !== undefined && (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
    return obj;
  },

  fromPartial(object) {
    var _object$chainId, _object$trustingPerio, _object$unbondingPeri, _object$maxClockDrift, _object$proofSpecs, _object$upgradePath, _object$allowUpdateAf, _object$allowUpdateAf2;

    const message = createBaseClientState();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? Fraction.fromPartial(object.trustLevel) : undefined;
    message.trustingPeriod = (_object$trustingPerio = object.trustingPeriod) !== null && _object$trustingPerio !== void 0 ? _object$trustingPerio : undefined;
    message.unbondingPeriod = (_object$unbondingPeri = object.unbondingPeriod) !== null && _object$unbondingPeri !== void 0 ? _object$unbondingPeri : undefined;
    message.maxClockDrift = (_object$maxClockDrift = object.maxClockDrift) !== null && _object$maxClockDrift !== void 0 ? _object$maxClockDrift : undefined;
    message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? Height.fromPartial(object.frozenHeight) : undefined;
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
    message.proofSpecs = ((_object$proofSpecs = object.proofSpecs) === null || _object$proofSpecs === void 0 ? void 0 : _object$proofSpecs.map(e => ProofSpec.fromPartial(e))) || [];
    message.upgradePath = ((_object$upgradePath = object.upgradePath) === null || _object$upgradePath === void 0 ? void 0 : _object$upgradePath.map(e => e)) || [];
    message.allowUpdateAfterExpiry = (_object$allowUpdateAf = object.allowUpdateAfterExpiry) !== null && _object$allowUpdateAf !== void 0 ? _object$allowUpdateAf : false;
    message.allowUpdateAfterMisbehaviour = (_object$allowUpdateAf2 = object.allowUpdateAfterMisbehaviour) !== null && _object$allowUpdateAf2 !== void 0 ? _object$allowUpdateAf2 : false;
    return message;
  }

};

function createBaseConsensusState() {
  return {
    timestamp: undefined,
    root: undefined,
    nextValidatorsHash: new Uint8Array()
  };
}

export const ConsensusState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }

    if (message.root !== undefined) {
      MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }

    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.root = MerkleRoot.decode(reader, reader.uint32());
          break;

        case 3:
          message.nextValidatorsHash = reader.bytes();
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
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromJSON(object.root) : undefined,
      nextValidatorsHash: isSet(object.nextValidatorsHash) ? bytesFromBase64(object.nextValidatorsHash) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toJSON(message.root) : undefined);
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$timestamp, _object$nextValidator;

    const message = createBaseConsensusState();
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    return message;
  }

};

function createBaseMisbehaviour() {
  return {
    clientId: "",
    header_1: undefined,
    header_2: undefined
  };
}

export const Misbehaviour = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.header_1 !== undefined) {
      Header.encode(message.header_1, writer.uint32(18).fork()).ldelim();
    }

    if (message.header_2 !== undefined) {
      Header.encode(message.header_2, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.header_1 = Header.decode(reader, reader.uint32());
          break;

        case 3:
          message.header_2 = Header.decode(reader, reader.uint32());
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
      header_1: isSet(object.header_1) ? Header.fromJSON(object.header_1) : undefined,
      header_2: isSet(object.header_2) ? Header.fromJSON(object.header_2) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header_1 !== undefined && (obj.header_1 = message.header_1 ? Header.toJSON(message.header_1) : undefined);
    message.header_2 !== undefined && (obj.header_2 = message.header_2 ? Header.toJSON(message.header_2) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$clientId;

    const message = createBaseMisbehaviour();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.header_1 = object.header_1 !== undefined && object.header_1 !== null ? Header.fromPartial(object.header_1) : undefined;
    message.header_2 = object.header_2 !== undefined && object.header_2 !== null ? Header.fromPartial(object.header_2) : undefined;
    return message;
  }

};

function createBaseHeader() {
  return {
    signedHeader: undefined,
    validatorSet: undefined,
    trustedHeight: undefined,
    trustedValidators: undefined
  };
}

export const Header = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }

    if (message.trustedHeight !== undefined) {
      Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.trustedValidators !== undefined) {
      ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 3:
          message.trustedHeight = Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.trustedValidators = ValidatorSet.decode(reader, reader.uint32());
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
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      trustedHeight: isSet(object.trustedHeight) ? Height.fromJSON(object.trustedHeight) : undefined,
      trustedValidators: isSet(object.trustedValidators) ? ValidatorSet.fromJSON(object.trustedValidators) : undefined
    };
  },

  toJSON(message) {
    const obj = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trustedHeight = message.trustedHeight ? Height.toJSON(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trustedValidators = message.trustedValidators ? ValidatorSet.toJSON(message.trustedValidators) : undefined);
    return obj;
  },

  fromPartial(object) {
    const message = createBaseHeader();
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? Height.fromPartial(object.trustedHeight) : undefined;
    message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? ValidatorSet.fromPartial(object.trustedValidators) : undefined;
    return message;
  }

};

function createBaseFraction() {
  return {
    numerator: Long.UZERO,
    denominator: Long.UZERO
  };
}

export const Fraction = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.numerator.isZero()) {
      writer.uint32(8).uint64(message.numerator);
    }

    if (!message.denominator.isZero()) {
      writer.uint32(16).uint64(message.denominator);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;

        case 2:
          message.denominator = reader.uint64();
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
      numerator: isSet(object.numerator) ? Long.fromString(object.numerator) : Long.UZERO,
      denominator: isSet(object.denominator) ? Long.fromString(object.denominator) : Long.UZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || Long.UZERO).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseFraction();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? Long.fromValue(object.numerator) : Long.UZERO;
    message.denominator = object.denominator !== undefined && object.denominator !== null ? Long.fromValue(object.denominator) : Long.UZERO;
    return message;
  }

};