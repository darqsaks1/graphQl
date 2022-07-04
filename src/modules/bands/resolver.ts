export const bandsResolver = {
  Query: {
    bands: (_: any, __: any, { dataSources }: any) =>
      dataSources.bands.onGetAll(),
    band: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bands.onSelectOne(id),
  },
}