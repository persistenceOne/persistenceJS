export const createLCDClient = async ({
  restEndpoint
}) => ({
  persistence: {
    halving: {
      v1beta1: new (await import("./halving/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  }
});