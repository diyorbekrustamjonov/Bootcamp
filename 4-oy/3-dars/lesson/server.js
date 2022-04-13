import { ApolloServer, gql } from "apollo-server";
import { 
    ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";

const users = [
    {
        userId: 1,
        username: "Ali",
        age: 16
    },
    {
        userId: 2,
        username: "Halil",
        age: 17
    }
]

const schema = gql`
    type Query {
        users: [User]
    }

    type User {
        userId: ID!
        username: String!
        age: Int!
    }
`

const resolvers = {
    Query: {
        users: () => users
    }
}

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
});


server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
})