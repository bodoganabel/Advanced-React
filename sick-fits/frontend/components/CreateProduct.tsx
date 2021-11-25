import useForm from 'lib/useForm';
import React, { useEffect, useState } from 'react'
import Router from 'next/router';
import Form from 'components/styles/Form';
import DisplayError from 'components/ErrorMessage';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from './Products';


export default function CreateProduct() {


  const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct(
    $name: String!,
    $priceCents: Int!,
    $description: String!,
    $image: Upload,
   ) {
    createProduct(data: {
      name: $name,
      description: $description,
      status: "AVAILABLE",
      priceCents: $priceCents,
      photo: {
        create: {
          image: $image,
          altText: $name
        }
      }
    }) {
      id
      name
      description
      priceCents
    }
  }`;


  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'TestName',
    image:'',
    priceCents: 3400,
    description: 'Test description',
  });

  const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
  })

  return (
    <Form
      onSubmit={async (e) => {
        console.log(inputs);
        e.preventDefault();
        const res = await createProduct();
        clearForm();
        Router.push(`/product/${res.data.createProduct.id}`)
      }
    }
    >
      <DisplayError error={error}></DisplayError>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">Image</label>
        <input required type="file" name="image" id="image" onChange={handleChange} />

        <label htmlFor="name">Name</label>
        <input required type="text" name="name" id="name" placeholder="Name" value={inputs.name} onChange={handleChange} />

        
        <label htmlFor="price">Price</label>
        <input required type="number" name="priceCents" id="priceCents" placeholder="priceCents" value={inputs.priceCents} onChange={handleChange} />
        
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" placeholder="description" value={inputs.description} onChange={handleChange} />

        <button type="submit">+ Add Product</button>
        {/* <button type="button" onClick={clearForm}>Clear Form</button>
        <button type="button" onClick={resetForm}>Reset Form</button> */}

      </fieldset>
    </Form>
  )
}
