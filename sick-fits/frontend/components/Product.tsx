import Link from 'next/link'
import React from 'react'
import { ItemStyles } from './styles/ItemStyles.js'
import { Title } from './styles/Title.js'
import PriceTag from './styles/PriceTag'
import {formatMoney} from 'lib/formatMoney'

export default function Product({ product }) {
  console.log('product');
  console.log(product);
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
    </ItemStyles>

  )
}
