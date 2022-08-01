import { Rpc } from "@osmonauts/helpers";
export const createRPCQueryClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  persistence: {
    halving: {
      v1beta1: new (await import("./halving/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  }
});