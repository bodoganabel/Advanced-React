import React from 'react'
import Router, { useRouter } from 'next/router';
import { SINGLE_ITEM_QUERY } from 'graphql/common-queries';
import { useMutation, useQuery } from '@apollo/client';
import { id } from 'date-fns/locale';
import { SingleItem, SingleItemVariables, UpdateSingleProduct, UpdateSingleProductVariables } from 'types/graphql';
import gql from 'graphql-tag';
import DisplayError from 'components/ErrorMessage';
import Form from 'components/styles/Form';
import useForm from 'lib/useForm';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateSingleProduct (
    $id: ID!,
    $name: String,
    $description: String,
    $price: Int,
  ) {
    updateProduct(
      id: $id,
      data: {name: $name, description: $description, priceCents: $price}
      )
      {
      id
      name
      description
      priceCents
    }
  }
`


export default function UpdateProduct(props) {
  const urlParams = useRouter().query;
  const id = typeof (urlParams.id) === 'string' ? urlParams.id : urlParams.id[0];
  
  
  const { data, loading, error } = useQuery<SingleItem, SingleItemVariables>(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    }
  });


  const [updateProduct, { data: updateData, loading: updateLoading, error: updateError }] = useMutation<UpdateSingleProduct, UpdateSingleProductVariables>(UPDATE_PRODUCT_MUTATION/* ,{refetchQueries: ['SingleItem']} */);

  if (loading) {
    return <p>Loading...</p>
  }

  console.log('data');
  console.log(data);

  const { inputs, handleChange, clearForm, resetForm } = useForm(data.Product);

  return (
    <Form
      onSubmit={async (e) => {
        console.log(inputs);
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            ...inputs,
          }
        });
        // Router.push(`/product/${res.data.updateProduct.id}`)
      }
    }
    >
      <DisplayError error={error}></DisplayError>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">Name</label>
        <input required type="text" name="name" id="name" placeholder="Name" value={inputs.name} onChange={handleChange} />

        
        <label htmlFor="price">Price</label>
        <input required type="number" name="priceCents" id="priceCents" placeholder="priceCents" value={inputs.priceCents} onChange={handleChange} />
        
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" placeholder="description" value={inputs.description} onChange={handleChange} />

        <button type="submit">Update Product</button>
        {/* <button type="button" onClick={clearForm}>Clear Form</button>
        <button type="button" onClick={resetForm}>Reset Form</button> */}

      </fieldset>
    </Form>
  )
}
