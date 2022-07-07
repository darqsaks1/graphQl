import { Band, IContext } from '../../ts/index';

const bandsQuery: {
  bands: (_: any, __: Band, context: IContext) => Promise<Band>;
  band: (_: any, __: any, context: IContext) => Promise<Band>;
} = {
  bands: (_: any, __: any, { dataSources }: any) =>
    dataSources.bandsService.selectOnes(),
  band: (_: any, { id }: { id: string }, { dataSources }: any) =>
    dataSources.bandsService.selectOne(id),
};

export const bandsResolver = {
  Query: {
    ...bandsQuery
  },
}