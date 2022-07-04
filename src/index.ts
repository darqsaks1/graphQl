import { ApolloServer } from "apollo-server-express";
import express from "express";
import { APP_PORT } from './utils/index';
import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {
    albumsResolver,
    Albums,
    artistsResolver,
    Artists,
    bandsResolver,
    Bands,
    Genres,
    genresResolver
} from "./modules";

const app = express();

const init = async () => {
    const graphQl = new ApolloServer({
        typeDefs: await loadFiles("src/**/*.graphql"),
        resolvers: [albumsResolver, artistsResolver, bandsResolver, genresResolver],
        csrfPrevention: true,
        cache: "bounded",
        dataSources: () => {
            return {
                albums: new Albums(),
                artists: new Artists(),
                bands: new Bands(),
                genres: new Genres()
            };
        },
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    });
    await graphQl.start()
    graphQl.applyMiddleware({ app, path: '/graphql' });

    app.listen({ port: APP_PORT }, () => {
        console.log(`Server is running at http://localhost:3000${graphQl.graphqlPath}`);
    });
}

init()
