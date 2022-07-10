import { Track, IContext } from '../../ts/index';

const trackQuery: {
  tracks: (_: any, __: Track, context: IContext) => Promise<Track>;
  track: (_: any, __: Track, context: IContext) => Promise<Track>;
} = {
  tracks: (_: any, __: any, { dataSources }: any) =>
    dataSources.tracksService.selectOnes(),
  track: (_: any, { id }: { id: string }, { dataSources }: any) =>
    dataSources.tracksService.selectOne(id),
};
const trackMutation: {
  createTrack: (parent: null, args: Track, context: IContext) => Promise<Track>;
  updateTrack: (parent: null, args: Track, context: IContext) => Promise<Track>;
  deleteTrack: (parent: null, args: Track, context: IContext) => Promise<void>;
} = {
  createTrack: (parent: any, args: Track, { dataSources }: any) =>
    dataSources.tracksService.createPostMethod(parent, args),
  updateTrack: (parent: any, args: Track, { dataSources }: any) =>
    dataSources.tracksService.upPutMethod(parent, args),
  deleteTrack: (parent: any, args: Track, { dataSources }: any) =>
    dataSources.tracksService.deleteMethod(parent, args),
};
export const tracksResolver = {
  Query: {
    ...trackQuery
  },
  Mutation: {
    ...trackMutation
  },
  Track: {
    id: ({ _id }: { _id: string }) => _id,
    bands: (
      { bandsIds }: { bandsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.selectOnesByIds(bandsIds),
    artists: (
      { artistsIds }: { artistsIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.artistsService.selectOnesByIds(artistsIds),
    genres: (
      { genresIds }: { genresIds: Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.selectOnesByIds(genresIds),
  }
}