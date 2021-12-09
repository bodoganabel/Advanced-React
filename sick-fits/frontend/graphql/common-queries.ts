import gql from "graphql-tag";

export const SINGLE_ITEM_QUERY = gql`# Write your query or mutation here
query SingleItem($id: ID!){
  Product (where: {
    id: $id
  }) {
    name
    price
    description
    photo {
      altText
      image {
        publicUrlTransformed
      }
    }
  }
}`;