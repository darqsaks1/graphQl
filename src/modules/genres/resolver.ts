import { Genre, IContext } from '../../ts/index';

const genreQuery: {
  genres: (_: any, __: Genre, context: IContext) => Promise<Genre>;
  genre: (_: any, __: Genre, context: IContext) => Promise<Genre>;
} = {
  genres: (_: any, __: Genre, { dataSources }: any) =>
    dataSources.genresService.selectOnes(),
  genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
    dataSources.genresService.selectOne(id),
};

const genreMutation: {
  createGenre: (parent: null, args: Genre, context: IContext) => Promise<Genre>;
  updateGenre: (parent: null, args: Genre, context: IContext) => Promise<Genre>;
  deleteGenre: (parent: null, args: Genre, context: IContext) => Promise<void>;
} = {
  createGenre: (parent: any, args: Genre, { dataSources }: any) =>
    dataSources.genresService.createPostMethod(parent, args),
  updateGenre: (parent: any, args: Genre, { dataSources }: any) =>
    dataSources.genresService.upPutMethod(parent, args),
  deleteGenre: (parent: any, args: Genre, { dataSources }: any) =>
    dataSources.genresService.deleteMethod(parent, args),
};

export const genresResolver = {
  Query: {
    ...genreQuery
  },
  Mutation: {
    ...genreMutation
  },
  Genre: {
    id: ({ _id }: { _id: string }) => _id,
  }
}