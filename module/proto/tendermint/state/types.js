import { ResponseDeliverTx, ResponseEndBlock, ResponseBeginBlock } from "../abci/types";
import { ValidatorSet } from "../types/validator";
import { ConsensusParams } from "../types/params";
import { Consensus } from "../version/types";
import { BlockID } from "../types/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */

function createBaseABCIResponses() {
  return {
    deliverTxs: [],
    endBlock: undefined,
    beginBlock: undefined
  };
}

export const ABCIResponses = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.deliverTxs) {
      ResponseDeliverTx.encode(v, writer.uint32(10).fork()).ldelim();
    }

    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deliverTxs.push(ResponseDeliverTx.decode(reader, reader.uint32()));
          break;

        case 2:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
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
      deliverTxs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliverTxs) ? object.deliverTxs.map(e => ResponseDeliverTx.fromJSON(e)) : [],
      endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined
    };
  },

  toJSON(message) {
    const obj = {};

    if (message.deliverTxs) {
      obj.deliverTxs = message.deliverTxs.map(e => e ? ResponseDeliverTx.toJSON(e) : undefined);
    } else {
      obj.deliverTxs = [];
    }

    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? ResponseEndBlock.toJSON(message.endBlock) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
    return obj;
  },

  fromPartial(object) {
    var _object$deliverTxs;

    const message = createBaseABCIResponses();
    message.deliverTxs = ((_object$deliverTxs = object.deliverTxs) === null || _object$deliverTxs === void 0 ? void 0 : _object$deliverTxs.map(e => ResponseDeliverTx.fromPartial(e))) || [];
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    return message;
  }

};

function createBaseValidatorsInfo() {
  return {
    validatorSet: undefined,
    lastHeightChanged: Long.ZERO
  };
}

export const ValidatorsInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorsInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastHeightChanged = reader.int64();
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
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? Long.fromString(object.lastHeightChanged) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.lastHeightChanged !== undefined && (obj.lastHeightChanged = (message.lastHeightChanged || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseValidatorsInfo();
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? Long.fromValue(object.lastHeightChanged) : Long.ZERO;
    return message;
  }

};

function createBaseConsensusParamsInfo() {
  return {
    consensusParams: undefined,
    lastHeightChanged: Long.ZERO
  };
}

export const ConsensusParamsInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParamsInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastHeightChanged = reader.int64();
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
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? Long.fromString(object.lastHeightChanged) : Long.ZERO
    };
  },

  toJSON(message) {
    const obj = {};
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);
    message.lastHeightChanged !== undefined && (obj.lastHeightChanged = (message.lastHeightChanged || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object) {
    const message = createBaseConsensusParamsInfo();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? Long.fromValue(object.lastHeightChanged) : Long.ZERO;
    return message;
  }

};

function createBaseVersion() {
  return {
    consensus: undefined,
    software: ""
  };
}

export const Version = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consensus !== undefined) {
      Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }

    if (message.software !== "") {
      writer.uint32(18).string(message.software);
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
          message.consensus = Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.software = reader.string();
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
      consensus: isSet(object.consensus) ? Consensus.fromJSON(object.consensus) : undefined,
      software: isSet(object.software) ? String(object.software) : ""
    };
  },

  toJSON(message) {
    const obj = {};
    message.consensus !== undefined && (obj.consensus = message.consensus ? Consensus.toJSON(message.consensus) : undefined);
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },

  fromPartial(object) {
    var _object$software;

    const message = createBaseVersion();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? Consensus.fromPartial(object.consensus) : undefined;
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  }

};

function createBaseState() {
  return {
    version: undefined,
    chainId: "",
    initialHeight: Long.ZERO,
    lastBlockHeight: Long.ZERO,
    lastBlockId: undefined,
    lastBlockTime: undefined,
    nextValidators: undefined,
    validators: undefined,
    lastValidators: undefined,
    lastHeightValidatorsChanged: Long.ZERO,
    consensusParams: undefined,
    lastHeightConsensusParamsChanged: Long.ZERO,
    lastResultsHash: new Uint8Array(),
    appHash: new Uint8Array()
  };
}

export const State = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (!message.initialHeight.isZero()) {
      writer.uint32(112).int64(message.initialHeight);
    }

    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(24).int64(message.lastBlockHeight);
    }

    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.nextValidators !== undefined) {
      ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
    }

    if (message.validators !== undefined) {
      ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }

    if (message.lastValidators !== undefined) {
      ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
    }

    if (!message.lastHeightValidatorsChanged.isZero()) {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }

    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
    }

    if (!message.lastHeightConsensusParamsChanged.isZero()) {
      writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
    }

    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(106).bytes(message.appHash);
    }

    return writer;
  },

  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 14:
          message.initialHeight = reader.int64();
          break;

        case 3:
          message.lastBlockHeight = reader.int64();
          break;

        case 4:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.nextValidators = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 7:
          message.validators = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 8:
          message.lastValidators = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 9:
          message.lastHeightValidatorsChanged = reader.int64();
          break;

        case 10:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 11:
          message.lastHeightConsensusParamsChanged = reader.int64();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.appHash = reader.bytes();
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
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      initialHeight: isSet(object.initialHeight) ? Long.fromString(object.initialHeight) : Long.ZERO,
      lastBlockHeight: isSet(object.lastBlockHeight) ? Long.fromString(object.lastBlockHeight) : Long.ZERO,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
      nextValidators: isSet(object.nextValidators) ? ValidatorSet.fromJSON(object.nextValidators) : undefined,
      validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
      lastValidators: isSet(object.lastValidators) ? ValidatorSet.fromJSON(object.lastValidators) : undefined,
      lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged) ? Long.fromString(object.lastHeightValidatorsChanged) : Long.ZERO,
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged) ? Long.fromString(object.lastHeightConsensusParamsChanged) : Long.ZERO,
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },

  toJSON(message) {
    const obj = {};
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.initialHeight !== undefined && (obj.initialHeight = (message.initialHeight || Long.ZERO).toString());
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || Long.ZERO).toString());
    message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
    message.nextValidators !== undefined && (obj.nextValidators = message.nextValidators ? ValidatorSet.toJSON(message.nextValidators) : undefined);
    message.validators !== undefined && (obj.validators = message.validators ? ValidatorSet.toJSON(message.validators) : undefined);
    message.lastValidators !== undefined && (obj.lastValidators = message.lastValidators ? ValidatorSet.toJSON(message.lastValidators) : undefined);
    message.lastHeightValidatorsChanged !== undefined && (obj.lastHeightValidatorsChanged = (message.lastHeightValidatorsChanged || Long.ZERO).toString());
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);
    message.lastHeightConsensusParamsChanged !== undefined && (obj.lastHeightConsensusParamsChanged = (message.lastHeightConsensusParamsChanged || Long.ZERO).toString());
    message.lastResultsHash !== undefined && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },

  fromPartial(object) {
    var _object$chainId, _object$lastBlockTime, _object$lastResultsHa, _object$appHash;

    const message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? Long.fromValue(object.initialHeight) : Long.ZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastBlockTime = (_object$lastBlockTime = object.lastBlockTime) !== null && _object$lastBlockTime !== void 0 ? _object$lastBlockTime : undefined;
    message.nextValidators = object.nextValidators !== undefined && object.nextValidators !== null ? ValidatorSet.fromPartial(object.nextValidators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? ValidatorSet.fromPartial(object.validators) : undefined;
    message.lastValidators = object.lastValidators !== undefined && object.lastValidators !== null ? ValidatorSet.fromPartial(object.lastValidators) : undefined;
    message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged !== undefined && object.lastHeightValidatorsChanged !== null ? Long.fromValue(object.lastHeightValidatorsChanged) : Long.ZERO;
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightConsensusParamsChanged = object.lastHeightConsensusParamsChanged !== undefined && object.lastHeightConsensusParamsChanged !== null ? Long.fromValue(object.lastHeightConsensusParamsChanged) : Long.ZERO;
    message.lastResultsHash = (_object$lastResultsHa = object.lastResultsHash) !== null && _object$lastResultsHa !== void 0 ? _object$lastResultsHa : new Uint8Array();
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    return message;
  }

};