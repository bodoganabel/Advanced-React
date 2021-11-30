import Head from 'next/Head'
import Link from 'next/link';
import React from 'react'
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import { PaginationQuery } from 'types/graphql';
import { useQuery } from '@apollo/client';
import { perPage } from '../config.js'

export const PAGINATION_QUERY = gql`
 query PaginationQuery {
  _allProductsMeta {
    count
  }
}`

export default function Pagination(props) {

  const page = Number(props.page);
  const { data: paginationData, loading: paginationLoading, error: paginationError } = useQuery<PaginationQuery>(PAGINATION_QUERY);

  if (paginationLoading) { return <>Loading...</> }
  if (paginationError) { return <>Error...</> }

  const count = paginationData._allProductsMeta.count;
  const pageCount = Math.ceil(count / perPage);

  if (!count || !paginationData) { return <>ERROR</>}

  return (
    <PaginationStyles id={id}>
      <Head><title>Sick Fits - Page {page} of {pageCount}</title></Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page === 1}>⬅ Prev</a>
      </Link>
      <p>Page {page} of {pageCount}</p>
      <p> {count} Items Total</p>
      <Link aria-disabled={page === 1} href={`/products/${page + 1}`}>
        <a aria-disabled={page === pageCount}>Next ➡</a>
        </Link>
    </PaginationStyles>
  )
}
