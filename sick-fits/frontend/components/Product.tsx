import Link from 'next/link'
import React from 'react'
import { ItemStyles } from './styles/ItemStyles.js'
import { Title } from './styles/Title.js'
import PriceTag from './styles/PriceTag'
import {formatMoney} from 'lib/formatMoney'
import DeleteProduct from './DeleteProduct'

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product?.name}></img>
      <Title>
        <Link href={`/product/${product.id}`} >{product?.name || '-'}</Link>
      </Title>
      <PriceTag>{formatMoney(product.priceCents)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link href={
          {
            pathname: 'update',
            query: {
              id: product.id,
            }
          }}>Edit ✏</Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>

  )
}
