import Long from "long";
import { CommitmentProof } from "../../../../confio/proofs.js";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    keyPrefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    keyPath: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export declare const MerkleRoot: {
    encode(message: MerkleRoot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerkleRoot;
    fromJSON(object: any): MerkleRoot;
    toJSON(message: MerkleRoot): unknown;
    fromPartial<I extends {
        hash?: Uint8Array | undefined;
    } & {
        hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): MerkleRoot;
};
export declare const MerklePrefix: {
    encode(message: MerklePrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerklePrefix;
    fromJSON(object: any): MerklePrefix;
    toJSON(message: MerklePrefix): unknown;
    fromPartial<I extends {
        keyPrefix?: Uint8Array | undefined;
    } & {
        keyPrefix?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "keyPrefix">, never>>(object: I): MerklePrefix;
};
export declare const MerklePath: {
    encode(message: MerklePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerklePath;
    fromJSON(object: any): MerklePath;
    toJSON(message: MerklePath): unknown;
    fromPartial<I extends {
        keyPath?: string[] | undefined;
    } & {
        keyPath?: (string[] & string[] & Record<Exclude<keyof I["keyPath"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
    } & Record<Exclude<keyof I, "keyPath">, never>>(object: I): MerklePath;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerkleProof;
    fromJSON(object: any): MerkleProof;
    toJSON(message: MerkleProof): unknown;
    fromPartial<I extends {
        proofs?: {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                    length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        proofs?: ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                    length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                    length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            exist?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                    length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: ({
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                    length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                    length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                path?: ({
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["path"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["exist"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["exist"], "path" | "key" | "value" | "leaf">, never>) | undefined;
            nonexist?: ({
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                key?: Uint8Array | undefined;
                left?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                right?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                        length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"], "path" | "key" | "value" | "leaf">, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["nonexist"], "left" | "right" | "key">, never>) | undefined;
            batch?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                        path?: ({
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] & ({
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"], "left" | "right" | "key">, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number], "exist" | "nonexist">, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["batch"], "entries">, never>) | undefined;
            compressed?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                            length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                        path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                            path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs.js").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs.js").HashOp | undefined;
                                length?: import("../../../../confio/proofs.js").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], "length" | "hash" | "prehashKey" | "prehashValue" | "prefix">, never>) | undefined;
                            path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], "path" | "key" | "value" | "leaf">, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"], "left" | "right" | "key">, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number], "exist" | "nonexist">, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
                lookupInners?: ({
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs.js").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"][number], "hash" | "prefix" | "suffix">, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["compressed"], "entries" | "lookupInners">, never>) | undefined;
        } & Record<Exclude<keyof I["proofs"][number], "exist" | "nonexist" | "batch" | "compressed">, never>)[] & Record<Exclude<keyof I["proofs"], number | "toString" | "toLocaleString" | "concat" | "indexOf" | "lastIndexOf" | "slice" | "length" | "includes" | "push" | "reverse" | "map" | "filter" | "pop" | "join" | "shift" | "sort" | "splice" | "unshift" | "every" | "some" | "forEach" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values">, never>) | undefined;
    } & Record<Exclude<keyof I, "proofs">, never>>(object: I): MerkleProof;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
