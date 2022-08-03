export const createRPCQueryClient = async ({
  rpc
}) => ({
  persistence: {
    halving: {
      v1beta1: new (await import("./halving/v1beta1/query.rpc.query")).QueryClientImpl(rpc)
    }
  }
});