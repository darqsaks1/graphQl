export const artistsResolver = {
  Query: {
    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artists.onGetAllArtists(),
    artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artists.onSelectOneArtist(id),
  },
}