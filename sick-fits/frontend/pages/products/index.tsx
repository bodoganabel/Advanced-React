/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Page from 'components/Page';
import Products from 'components/Products';
import Pagination from 'components/Pagination';
import { useRouter } from 'next/router';

export default function ProductsPage() {
  const router = useRouter();
  const page = parseInt(typeof router.query.page === 'string' ? router.query.page : '1') ;
  console.log(router);
  return (
    <>
      <Pagination page={page}></Pagination>
      <Products page={page}/>
      <Pagination page={page}></Pagination>
    </>
  );
}
