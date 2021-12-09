import React from 'react'
import Link from 'next/link';
import NavStyles from 'components/styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from 'lib/cartState';


export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (<>
        <Link href="/sell">Sell</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/account">Account</Link>
        <button type="button" onClick={ openCart}>My Cart</button>
        <Link href="/cart">Cart</Link>
        <SignOut />
      </>)}
      {!user && (<>
        <Link href="/signin">Sign In</Link>
      </>)}
      

    </NavStyles>
  )
}
