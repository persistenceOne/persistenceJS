/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.commitment.v2";
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * ICS-23 verification supports membership proofs for nested merkle trees.
 * The ICS-24 standard provable keys MUST be stored in the lowest level tree with an optional prefix.
 * The IC24 provable tree may then be stored in a higher level tree(s) that hash up to the root hash
 * stored in the consensus state of the client.
 * Each element of the path represents the key of a merkle tree from the root to the leaf.
 * The elements of the path before the final element must be the path to the tree that contains
 * the ICS24 provable store. Thus, it should remain constant for all ICS24 proofs.
 * The final element of the path is the key of the leaf in the ICS24 provable store,
 * Thus IBC core will append the ICS24 path to the final element of the MerklePath
 * stored in the counterparty to create the full path to the leaf for proof verification.
 * Examples:
 * Cosmos SDK:
 * The Cosmos SDK commits to a multi-tree where each store is an IAVL tree and all store hashes
 * are hashed in a simple merkle tree to get the final root hash. Thus, the MerklePath in the counterparty
 * MerklePrefix has the following structure: ["ibc", ""]
 * The core IBC handler will append the ICS24 path to the final element of the MerklePath
 * like so: ["ibc", "{packetCommitmentPath}"] which will then be used for final verification.
 * Ethereum:
 * The Ethereum client commits to a single Patricia merkle trie. The ICS24 provable store is managed
 * by the smart contract state. Each smart contract has a specific prefix reserved within the global trie.
 * Thus the MerklePath in the counterparty is the prefix to the smart contract state in the global trie.
 * Since there is only one tree in the commitment structure of ethereum the MerklePath in the counterparty
 * MerklePrefix has the following structure: ["IBCCoreContractAddressStoragePrefix"]
 * The core IBC handler will append the ICS24 path to the final element of the MerklePath
 * like so: ["IBCCoreContractAddressStoragePrefix{packetCommitmentPath}"] which will then be used for final
 * verification. Thus the MerklePath in the counterparty MerklePrefix is the nested key path from the root hash of the
 * consensus state down to the ICS24 provable store. The IBC handler retrieves the counterparty key path to the ICS24
 * provable store from the MerklePath and appends the ICS24 path to get the final key path to the value being verified
 * by the client against the root hash in the client's consensus state.
 */
export interface MerklePath {
  keyPath: Uint8Array[];
}
function createBaseMerklePath(): MerklePath {
  return {
    keyPath: [],
  };
}
export const MerklePath = {
  encode(message: MerklePath, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keyPath) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePath {
    const obj = createBaseMerklePath();
    if (Array.isArray(object?.keyPath)) obj.keyPath = object.keyPath.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: MerklePath): unknown {
    const obj: any = {};
    if (message.keyPath) {
      obj.keyPath = message.keyPath.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.keyPath = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MerklePath>): MerklePath {
    const message = createBaseMerklePath();
    message.keyPath = object.keyPath?.map((e) => e) || [];
    return message;
  },
};
