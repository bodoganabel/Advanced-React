import { useMutation } from '@apollo/client';
import id from 'date-fns/esm/locale/id/index.js';
import gql from 'graphql-tag';
import React from 'react'
import { DeleteProductMutation, DeleteProductMutationVariables } from 'types/graphql';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;


export default function DeleteProduct({ id, children }) {
  
  const update = (cache, payload) => {
    console.log(payload);
    console.log('running the update after the delete');
    cache.evict(cache.identify(payload.data.deleteProduct));
  }
  const [deleteProduct,{ data: deleteProductData, loading: deleteProductLoading, error: deleteProductError }] = useMutation<DeleteProductMutation,DeleteProductMutationVariables>(DELETE_PRODUCT_MUTATION,{
    refetchQueries: [''],
    update,
  variables: {
    id
  }
  });
  
  return (
    <button
      type="button"
      disabled={ deleteProductLoading }
      onClick={() => {
      if (confirm('Are you sure you want to delete this product?')) {
        console.log("Deleted");
        deleteProduct();
      }
    }}>
      {children}
    </button>
  )
}
