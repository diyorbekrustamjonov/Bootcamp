import { gql } from "apollo-server";


export const typeDefs = gql `
  scalar Odd
  scalar Even
  type Query {
    isOdd(odd: Odd!): Odd!
  }
  type Query {
    isEven(even: Even!): Even!
  }
`