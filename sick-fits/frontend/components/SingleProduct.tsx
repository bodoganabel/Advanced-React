import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import React from "react";
import DisplayError from "./ErrorMessage";
import { SingleItem, SingleItemVariables, SingleItem_Product } from "types/graphql";
import Head from "next/Head"
import styled from "styled-components"

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-height: 800px;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;


const SINGLE_ITEM_QUERY = gql`# Write your query or mutation here
query SingleItem($id: ID!){
  Product (where: {
    id: $id
  }) {
    name
    priceCents
    description
    photo {
      altText
      image {
        publicUrlTransformed
      }
    }
  }
}`;

interface IProps {
  id: string;
}

export default function SingleProduct({ id }: IProps) {

  const { data, loading, error } = useQuery<SingleItem, SingleItemVariables>(SINGLE_ITEM_QUERY,
    {
      variables: {
        id
      }
    });

  if (loading) { return <>Loading...</> }
  if (error) { return <DisplayError error={error}></DisplayError> }

  const product = data.Product;

  return <>
    <Head>
      <title>Sick Fits | {product.name}</title>
    </Head>
    <ProductStyles>

      <img
        alt={product.photo.altText}
        src={product.photo.image.publicUrlTransformed}>
      </img>
      <div>
        <h2>{product.name}</h2>
        <p>{data.Product.description}</p>
      </div>

    </ProductStyles>
  </>
}