import { useRouter } from 'next/router';
import SingleProduct from 'components/SingleProduct';

export default function SingleProductPage({ props }) {
  
  const router = useRouter();
  const id  = typeof router.query.id === 'string' ? router.query.id : router.query.id[0];

  return <SingleProduct id={id}></SingleProduct>
}