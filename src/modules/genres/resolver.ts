export const genresResolver = {
  Query: {
    genres: (_: any, __: any, { dataSources }: any) =>
      dataSources.artists.onGetAll(),
    genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artists.onSelectOne(id),
  },
}