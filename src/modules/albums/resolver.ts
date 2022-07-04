export const albumsResolver = {
  Query: {
    albums: (_: any, __: any, { dataSources }: any) =>
      dataSources.albums.onGetAllAlbums(),
    album: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.albums.onSelectOneAlbum(id),
  },
}