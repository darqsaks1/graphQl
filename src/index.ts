import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv';
import { resolvers, service } from "./utils/utils";
import { typeDefs } from "./shema/shema";
import { port } from "./utils/utils";
dotenv.config();


const init = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
      return service
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req }) => {
      const token = req.headers.authorization || process.env.JWT
      return { token };
    }
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen({ port: port }, () => {
    console.log(`Server is running at http://localhost:3000${server.graphqlPath}`);
  })
}

init()