import React from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { addToCartMutation, addToCartMutationVariables } from 'types/graphql';
import { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
 mutation addToCartMutation($id: ID!) {
  addToCart(productID:$id) {
    id
  }
}
`;


export default function AddToCart({ id }) {
  const [addToCartMutation, { data: addToCartMutationData, loading: addToCartMutationLoading, error: addToCartMutationError }] = useMutation<addToCartMutation, addToCartMutationVariables>(ADD_TO_CART_MUTATION, {
    refetchQueries: [{query: CURRENT_USER_QUERY}],
    variables: {
      id
    }
  });
  return (
    <button type="button" onClick={()=>addToCartMutation()}>
      Add to Cart 🛒
    </button>
  )
}
