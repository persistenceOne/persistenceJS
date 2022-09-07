import * as _146 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _146.HashOp;
    hashOpToJSON(object: _146.HashOp): string;
    lengthOpFromJSON(object: any): _146.LengthOp;
    lengthOpToJSON(object: _146.LengthOp): string;
    HashOp: typeof _146.HashOp;
    LengthOp: typeof _146.LengthOp;
    ExistenceProof: {
        encode(message: _146.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ExistenceProof;
        fromJSON(object: any): _146.ExistenceProof;
        toJSON(message: _146.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _146.HashOp;
                prehashKey?: _146.HashOp;
                prehashValue?: _146.HashOp;
                length?: _146.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _146.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _146.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _146.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.NonExistenceProof;
        fromJSON(object: any): _146.NonExistenceProof;
        toJSON(message: _146.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _146.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _146.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _146.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _146.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CommitmentProof;
        fromJSON(object: any): _146.CommitmentProof;
        toJSON(message: _146.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _146.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _146.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _146.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _146.HashOp;
                            prehashKey?: _146.HashOp;
                            prehashValue?: _146.HashOp;
                            length?: _146.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _146.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _146.HashOp;
                                prehashKey?: _146.HashOp;
                                prehashValue?: _146.HashOp;
                                length?: _146.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _146.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _146.HashOp;
                                prehashKey?: _146.HashOp;
                                prehashValue?: _146.HashOp;
                                length?: _146.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _146.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _146.HashOp;
                            prehashKey?: _146.HashOp;
                            prehashValue?: _146.HashOp;
                            length?: _146.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _146.HashOp;
                                prehashKey?: _146.HashOp;
                                prehashValue?: _146.HashOp;
                                length?: _146.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _146.HashOp;
                                prehashKey?: _146.HashOp;
                                prehashValue?: _146.HashOp;
                                length?: _146.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _146.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _146.CommitmentProof;
    };
    LeafOp: {
        encode(message: _146.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LeafOp;
        fromJSON(object: any): _146.LeafOp;
        toJSON(message: _146.LeafOp): unknown;
        fromPartial(object: {
            hash?: _146.HashOp;
            prehashKey?: _146.HashOp;
            prehashValue?: _146.HashOp;
            length?: _146.LengthOp;
            prefix?: Uint8Array;
        }): _146.LeafOp;
    };
    InnerOp: {
        encode(message: _146.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.InnerOp;
        fromJSON(object: any): _146.InnerOp;
        toJSON(message: _146.InnerOp): unknown;
        fromPartial(object: {
            hash?: _146.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _146.InnerOp;
    };
    ProofSpec: {
        encode(message: _146.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ProofSpec;
        fromJSON(object: any): _146.ProofSpec;
        toJSON(message: _146.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _146.HashOp;
                prehashKey?: _146.HashOp;
                prehashValue?: _146.HashOp;
                length?: _146.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _146.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _146.ProofSpec;
    };
    InnerSpec: {
        encode(message: _146.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.InnerSpec;
        fromJSON(object: any): _146.InnerSpec;
        toJSON(message: _146.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _146.HashOp;
        }): _146.InnerSpec;
    };
    BatchProof: {
        encode(message: _146.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BatchProof;
        fromJSON(object: any): _146.BatchProof;
        toJSON(message: _146.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _146.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _146.HashOp;
                            prehashKey?: _146.HashOp;
                            prehashValue?: _146.HashOp;
                            length?: _146.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _146.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _146.HashOp;
                            prehashKey?: _146.HashOp;
                            prehashValue?: _146.HashOp;
                            length?: _146.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _146.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _146.BatchProof;
    };
    BatchEntry: {
        encode(message: _146.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BatchEntry;
        fromJSON(object: any): _146.BatchEntry;
        toJSON(message: _146.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _146.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _146.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _146.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _146.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _146.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CompressedBatchProof;
        fromJSON(object: any): _146.CompressedBatchProof;
        toJSON(message: _146.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _146.HashOp;
                            prehashKey?: _146.HashOp;
                            prehashValue?: _146.HashOp;
                            length?: _146.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _146.HashOp;
                            prehashKey?: _146.HashOp;
                            prehashValue?: _146.HashOp;
                            length?: _146.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _146.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _146.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _146.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CompressedBatchEntry;
        fromJSON(object: any): _146.CompressedBatchEntry;
        toJSON(message: _146.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _146.HashOp;
                        prehashKey?: _146.HashOp;
                        prehashValue?: _146.HashOp;
                        length?: _146.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _146.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _146.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CompressedExistenceProof;
        fromJSON(object: any): _146.CompressedExistenceProof;
        toJSON(message: _146.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _146.HashOp;
                prehashKey?: _146.HashOp;
                prehashValue?: _146.HashOp;
                length?: _146.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _146.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _146.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CompressedNonExistenceProof;
        fromJSON(object: any): _146.CompressedNonExistenceProof;
        toJSON(message: _146.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _146.HashOp;
                    prehashKey?: _146.HashOp;
                    prehashValue?: _146.HashOp;
                    length?: _146.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _146.CompressedNonExistenceProof;
    };
};
