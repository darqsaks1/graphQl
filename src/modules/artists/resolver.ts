import { Artist, IContext } from '../../ts/index';

const ArtistsQuery: {
  artists: (_: any, __: Artist, context: IContext) => Promise<Artist>;
  artist: (_: any, __: Artist, context: IContext) => Promise<Artist>;
} = {
  artists: (_: any, __: any, { dataSources }: any) =>
    dataSources.artistsService.selectOnes(),
  artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
    dataSources.artistsService.selectOne(id),
};

const ArtistsMutation: {
  createArtist: (parent: null, args: Artist, context: IContext) => Promise<Artist>;
  updateArtist: (parent: null, args: Artist, context: IContext) => Promise<Artist>;
  deleteArtist: (parent: null, args: Artist, context: IContext) => Promise<void>;
} = {
  createArtist: (parent: any, args: any, { dataSources }: any) =>
    dataSources.artistsService.createPostMethod(parent, args),
  updateArtist: (parent: any, args: any, { dataSources }: any) =>
    dataSources.artistsService.upPutMethod(parent, args),
  deleteArtist: (parent: any, args: any, { dataSources }: any) =>
    dataSources.artistsService.deleteMethod(parent, args),
};

export const artistsResolver = {
  Query: {
    ...ArtistsQuery
  },
  Mutation: {
    ...ArtistsMutation
  },
  Artist: {
    id: ({ _id }: { _id: string }) => _id,
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.selectOnesByIds(bandsIds),
  }
}