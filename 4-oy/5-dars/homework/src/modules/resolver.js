
  
import { GraphQLScalarType, Kind } from 'graphql';
import { oddFun, evenFun } from '../function/functions.js';

export const resolvers = {

    Odd: new GraphQLScalarType({
        name: "Odd",
        description: "Odd number type for testing",
        parseValue: oddFun,
        serialize: oddFun,
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return oddFun(parseInt(ast.value));
            }
            throw new Error("Not an integer odd");
        },
    }),

    Even: new GraphQLScalarType({
        name: "Even",
        description: "Ecen number type for testing",
        parseValue: evenFun,
        serialize: evenFun,
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return evenFun(parseInt(ast.value));
            }
            throw new Error("Not an integer even");
        },
    }),


    Query: {
        isOdd(_, { odd }) {
            return odd;
        },

        isEven(_, { even }) {
            return even
        }
    }
};