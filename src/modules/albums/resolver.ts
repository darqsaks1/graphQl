import { Album, IContext } from '../../ts/index';


const AlbumsQuery: {
  albums: (_: any, __: Album, context: IContext) => Promise<Album>;
  album: (_: any, __: Album, context: IContext) => Promise<Album>;
} = {
  albums: (_: any, __: any, { dataSources }: any) =>
    dataSources.albumsService.selectOnes(),
  album: (_: any, { id }: { id: string }, { dataSources }: any) =>
    dataSources.albumsService.selectOne(id),
};

const AlbumsMutation: {
  createAlbum: (parent: null, args: Album, context: IContext) => Promise<Album>;
  updateAlbum: (parent: null, args: Album, context: IContext) => Promise<Album>;
  deleteAlbum: (parent: null, args: Album, context: IContext) => Promise<void>;
} = {
  createAlbum: (parent: any, args: any, { dataSources }: any) =>
    dataSources.albumsService.createPostMethod(parent, args),
  updateAlbum: (parent: any, args: any, { dataSources }: any) =>
    dataSources.albumsService.upPutMethod(parent, args),
  deleteAlbum: (parent: any, args: any, { dataSources }: any) =>
    dataSources.albumsService.deleteMethod(parent, args),
};

export const albumsResolver = {
  Query: {
    ...AlbumsQuery
  },

  Mutation: {
    ...AlbumsMutation
  },

  Album: {
    id: ({ _id }: { _id: string }) => _id,
    artists: (
      { artistsIds }: { artistsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.artistsService.selectOnesByIds(artistsIds),
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.selectOnesByIds(bandsIds),
    tracks: (
      { trackIds }: { trackIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.tracksService.selectOnesByIds(trackIds),
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.selectOnesByIds(genresIds),
  },
}