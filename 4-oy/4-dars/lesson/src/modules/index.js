import { makeExecutableSchema } from "@graphql-tools/schema";

import usersModule from './users/index.js';

export const schema = makeExecutableSchema({
    typeDefs: [
        usersModule.typeDefs
    ],
    
    resolvers: [
        usersModule.resolvers
    ]
})