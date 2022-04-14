
import {ApolloServer, gql} from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { GraphQLScalarType, Kind } from 'graphql'

const typeDefs = gql`
    scalar OddSum
    type Query {
        oddSum(numbers: [Int]) {
            value
        }
    }
`


const OddSumScallar = new GraphQLScalarType({
    name: 'OddSum',
    description: 'Sum of odd numbers',
    serialize(value) {
        return value
    },
    parseValue(value) {
        return value
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return ast.value
        }
        return null
    },
})

const resolvers = {
    OddSum: OddSumScallar,
    Query: {
        oddSum: (parent, args) => {
            return {
                value: args.numbers.reduce((acc, curr) => {
                    return acc + oddSummer(curr)
                }, 0)
            }
        }
    }
}



const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground,
    ]
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})