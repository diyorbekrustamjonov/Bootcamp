import { makeExecutableSchema } from "@graphql-tools/schema";

import usersModule from './users/index.js';
import ordersModule from './orders/index.js';
import foodsModule from './foods/index.js';

export const schema = makeExecutableSchema({
    typeDefs: [
        usersModule.typeDefs,
        ordersModule.typeDefs,
        foodsModule.typeDefs
    ],
    
    resolvers: [
        usersModule.resolvers,
        ordersModule.resolvers,
        foodsModule.resolvers
    ]
})