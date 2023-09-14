/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement bytes */
  appAcknowledgement: Uint8Array;
  /** the relayer address which submits the recv packet message */
  forwardRelayerAddress: string;
  /** success flag of the base application callback */
  underlyingAppSuccess: boolean;
}
function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return {
    appAcknowledgement: new Uint8Array(),
    forwardRelayerAddress: "",
    underlyingAppSuccess: false,
  };
}
export const IncentivizedAcknowledgement = {
  encode(message: IncentivizedAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appAcknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.appAcknowledgement);
    }
    if (message.forwardRelayerAddress !== "") {
      writer.uint32(18).string(message.forwardRelayerAddress);
    }
    if (message.underlyingAppSuccess === true) {
      writer.uint32(24).bool(message.underlyingAppSuccess);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgement = reader.bytes();
          break;
        case 2:
          message.forwardRelayerAddress = reader.string();
          break;
        case 3:
          message.underlyingAppSuccess = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentivizedAcknowledgement {
    const obj = createBaseIncentivizedAcknowledgement();
    if (isSet(object.appAcknowledgement)) obj.appAcknowledgement = bytesFromBase64(object.appAcknowledgement);
    if (isSet(object.forwardRelayerAddress)) obj.forwardRelayerAddress = String(object.forwardRelayerAddress);
    if (isSet(object.underlyingAppSuccess)) obj.underlyingAppSuccess = Boolean(object.underlyingAppSuccess);
    return obj;
  },
  toJSON(message: IncentivizedAcknowledgement): unknown {
    const obj: any = {};
    message.appAcknowledgement !== undefined &&
      (obj.appAcknowledgement = base64FromBytes(
        message.appAcknowledgement !== undefined ? message.appAcknowledgement : new Uint8Array(),
      ));
    message.forwardRelayerAddress !== undefined &&
      (obj.forwardRelayerAddress = message.forwardRelayerAddress);
    message.underlyingAppSuccess !== undefined && (obj.underlyingAppSuccess = message.underlyingAppSuccess);
    return obj;
  },
  fromPartial(object: Partial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
    return message;
  },
};
