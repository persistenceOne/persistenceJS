import { Rpc } from "@osmonauts/helpers";
export declare const createRPCQueryClient: ({ rpc }: { rpc: Rpc }) => Promise<{
  persistence: {
    halving: {
      v1beta1: import("./halving/v1beta1/query.rpc.query").QueryClientImpl;
    };
  };
}>;
