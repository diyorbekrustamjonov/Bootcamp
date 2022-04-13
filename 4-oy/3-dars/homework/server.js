import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import { ApolloServer, gql } from "apollo-server"
import fs from "fs"


const PORT = process.env.PORT || 3000


let users = fs.readFileSync("./database/users.json", "utf8")
let orders = fs.readFileSync("./database/orders.json", "utf8")
let foods = fs.readFileSync("./database/foods.json", "utf8")

users = JSON.parse(users)
orders = JSON.parse(orders)
foods = JSON.parse(foods)


const schema = gql`
    type Query{
        users: [User!]!
        orders: [Order!]!
        foods: [Food!]!
    }

    type Food{
        foodId: ID!
        foodName: String!
        foodImg: String!
    }

    type Order{
        orderId: ID!
        userId: Int!
        foodId: Int!
        count: Int!
        foods: Food!
    }

    type User{
        userId: ID!
        username: String!
        contact: String! 
        orders: [Order!]!
    }
`





const resolvers = {
    Query : {
        users: () => users,
        orders: () => orders,
        foods : () => foods 
    
    },

    User: {
        userId: (user) => user.user_id,
        orders: (user) => {
            return orders.filter(order => order.user_id === user.user_id)
        }
    },

    Order: {
        orderId: (parnet) => parnet.order_id,
        userId: (parnet) => parnet.user_id,
        foodId: (parnet) => parnet.food_id,
        count: (parnet) => parnet.count,
        foods: (parnet) => {
            return foods.find(food => food.food_id === parnet.food_id)
        }
    },

    Food: {
        foodId: (food) => food.food_id,
        foodName: (food) => food.food_name,
        foodImg: (food) => food.food_img,
    }
}



const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})

server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})