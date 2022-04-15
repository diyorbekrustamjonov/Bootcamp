import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"

//Schema
import {typeDefs} from './modules/schema.js';


//Resolvers
import {resolvers} from './modules/resolver.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});