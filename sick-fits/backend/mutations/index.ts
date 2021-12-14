import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from './addToCart'
import checkout from './checkout'
//make a fake graphql tagged template literal highlighting
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productID: ID): CartItem
      checkout(token: String!): Order
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
      checkout,
    }
  } 
})