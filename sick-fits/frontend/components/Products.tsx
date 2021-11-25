import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Product from './Product';


export const ALL_PRODUCTS_QUERY = gql`
  query AllProducts{
    allProducts {
      id
      name
      description
      status
      priceCents
      photo{
        image {publicUrlTransformed}
        altText
      }
    }
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data);
  if(loading) {return <>Loading... </>}
  if (error) { return <>{error.message} </> }
  return (
    <ProductList>
      {data.allProducts.map(product =>
        <Product key={product.id} product={product} />)}
    </ProductList>
  )
}
