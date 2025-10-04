/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../helpers";
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx";
export interface MsgSendPacketAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSendPacket";
  value: {
    source_client: string;
    timeout_timestamp: string;
    payloads: {
      source_port: string;
      destination_port: string;
      version: string;
      encoding: string;
      value: Uint8Array;
    }[];
    signer: string;
  };
}
export interface MsgRecvPacketAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: {
    packet: {
      sequence: string;
      source_client: string;
      destination_client: string;
      timeout_timestamp: string;
      payloads: {
        source_port: string;
        destination_port: string;
        version: string;
        encoding: string;
        value: Uint8Array;
      }[];
    };
    proof_commitment: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgTimeoutAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: {
    packet: {
      sequence: string;
      source_client: string;
      destination_client: string;
      timeout_timestamp: string;
      payloads: {
        source_port: string;
        destination_port: string;
        version: string;
        encoding: string;
        value: Uint8Array;
      }[];
    };
    proof_unreceived: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export interface MsgAcknowledgementAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: {
    packet: {
      sequence: string;
      source_client: string;
      destination_client: string;
      timeout_timestamp: string;
      payloads: {
        source_port: string;
        destination_port: string;
        version: string;
        encoding: string;
        value: Uint8Array;
      }[];
    };
    acknowledgement: {
      app_acknowledgements: Uint8Array[];
    };
    proof_acked: Uint8Array;
    proof_height: AminoHeight;
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.channel.v2.MsgSendPacket": {
    aminoType: "cosmos-sdk/MsgSendPacket",
    toAmino: ({
      sourceClient,
      timeoutTimestamp,
      payloads,
      signer,
    }: MsgSendPacket): MsgSendPacketAminoType["value"] => {
      return {
        source_client: sourceClient,
        timeout_timestamp: timeoutTimestamp.toString(),
        payloads: payloads.map((el0) => ({
          source_port: el0.sourcePort,
          destination_port: el0.destinationPort,
          version: el0.version,
          encoding: el0.encoding,
          value: el0.value,
        })),
        signer,
      };
    },
    fromAmino: ({
      source_client,
      timeout_timestamp,
      payloads,
      signer,
    }: MsgSendPacketAminoType["value"]): MsgSendPacket => {
      return {
        sourceClient: source_client,
        timeoutTimestamp: BigInt(timeout_timestamp),
        payloads: payloads.map((el0) => ({
          sourcePort: el0.source_port,
          destinationPort: el0.destination_port,
          version: el0.version,
          encoding: el0.encoding,
          value: el0.value,
        })),
        signer,
      };
    },
  },
  "/ibc.core.channel.v2.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: ({
      packet,
      proofCommitment,
      proofHeight,
      signer,
    }: MsgRecvPacket): MsgRecvPacketAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_client: packet.sourceClient,
          destination_client: packet.destinationClient,
          timeout_timestamp: packet.timeoutTimestamp.toString(),
          payloads: packet.payloads.map((el0) => ({
            source_port: el0.sourcePort,
            destination_port: el0.destinationPort,
            version: el0.version,
            encoding: el0.encoding,
            value: el0.value,
          })),
        },
        proof_commitment: proofCommitment,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      packet,
      proof_commitment,
      proof_height,
      signer,
    }: MsgRecvPacketAminoType["value"]): MsgRecvPacket => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourceClient: packet.source_client,
          destinationClient: packet.destination_client,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
          payloads: packet.payloads.map((el1) => ({
            sourcePort: el1.source_port,
            destinationPort: el1.destination_port,
            version: el1.version,
            encoding: el1.encoding,
            value: el1.value,
          })),
        },
        proofCommitment: proof_commitment,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v2.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: ({ packet, proofUnreceived, proofHeight, signer }: MsgTimeout): MsgTimeoutAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_client: packet.sourceClient,
          destination_client: packet.destinationClient,
          timeout_timestamp: packet.timeoutTimestamp.toString(),
          payloads: packet.payloads.map((el0) => ({
            source_port: el0.sourcePort,
            destination_port: el0.destinationPort,
            version: el0.version,
            encoding: el0.encoding,
            value: el0.value,
          })),
        },
        proof_unreceived: proofUnreceived,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_height,
      signer,
    }: MsgTimeoutAminoType["value"]): MsgTimeout => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourceClient: packet.source_client,
          destinationClient: packet.destination_client,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
          payloads: packet.payloads.map((el1) => ({
            sourcePort: el1.source_port,
            destinationPort: el1.destination_port,
            version: el1.version,
            encoding: el1.encoding,
            value: el1.value,
          })),
        },
        proofUnreceived: proof_unreceived,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
  "/ibc.core.channel.v2.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: ({
      packet,
      acknowledgement,
      proofAcked,
      proofHeight,
      signer,
    }: MsgAcknowledgement): MsgAcknowledgementAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_client: packet.sourceClient,
          destination_client: packet.destinationClient,
          timeout_timestamp: packet.timeoutTimestamp.toString(),
          payloads: packet.payloads.map((el0) => ({
            source_port: el0.sourcePort,
            destination_port: el0.destinationPort,
            version: el0.version,
            encoding: el0.encoding,
            value: el0.value,
          })),
        },
        acknowledgement: {
          app_acknowledgements: acknowledgement.appAcknowledgements,
        },
        proof_acked: proofAcked,
        proof_height: proofHeight
          ? {
              revision_height: omitDefault(proofHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(proofHeight.revisionNumber)?.toString(),
            }
          : {},
        signer,
      };
    },
    fromAmino: ({
      packet,
      acknowledgement,
      proof_acked,
      proof_height,
      signer,
    }: MsgAcknowledgementAminoType["value"]): MsgAcknowledgement => {
      return {
        packet: {
          sequence: BigInt(packet.sequence),
          sourceClient: packet.source_client,
          destinationClient: packet.destination_client,
          timeoutTimestamp: BigInt(packet.timeout_timestamp),
          payloads: packet.payloads.map((el1) => ({
            sourcePort: el1.source_port,
            destinationPort: el1.destination_port,
            version: el1.version,
            encoding: el1.encoding,
            value: el1.value,
          })),
        },
        acknowledgement: {
          appAcknowledgements: acknowledgement.app_acknowledgements,
        },
        proofAcked: proof_acked,
        proofHeight: proof_height
          ? {
              revisionHeight: BigInt(proof_height.revision_height || "0"),
              revisionNumber: BigInt(proof_height.revision_number || "0"),
            }
          : undefined,
        signer,
      };
    },
  },
};
