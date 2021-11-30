import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Product from './Product';
import { perPage } from '../config.js'


export const ALL_PRODUCTS_QUERY = gql`
  query AllProducts($skip:Int = 0, $first: Int) {
    allProducts(first:$first, skip:$skip) {
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

interface IProducts {
  page: number;
}

export default function Products({ page }:IProducts) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: (page-1)*perPage,
      first: perPage,
    }
  });
  console.log(data);
  if(loading) {return <>Loading... </>}
  if (error) { return <>{error.message} </> }
  if (!data) { return <>no data </> }
  return (
    <ProductList>
      {data && data.allProducts.map(product =>
        <Product key={product.id} product={product} />)}
    </ProductList>
  )
}
