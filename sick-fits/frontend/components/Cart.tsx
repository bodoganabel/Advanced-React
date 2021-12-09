import { useCart } from 'lib/cartState';
import React from 'react'
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import { useUser } from './User';
import CloseButton from './styles/CloseButton';


function CartItem({ }) {
  
}


export default function Cart() {
  
  const me = useUser();
  const {cartOpen, closeCart, openCart, toggleCart} = useCart();
  if(!me) return <>Unauthenticated!</>
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton onClick={closeCart}>x</CloseButton>
      </header>
      <ul>
        {/*me.cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>*/}
      </ul>
      
    </CartStyles>
  )
}
