import {ApolloServer} from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { schema } from "./modules/index.js"
import model from "./utils/model.js"

const server = new ApolloServer({
    // Middleware in Apollo Server
    context: ({ req, res }) => model,

    schema,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen({port: process.env.PORT || 4000}).then(({url}) => {
    console.log(`Server ready at ${url}`)
})
