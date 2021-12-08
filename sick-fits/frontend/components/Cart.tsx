import React from 'react'
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import { useUser } from './User';



function CartItem({ }) {
  
}


export default function Cart() {
  
  const me = useUser();
  if(!me) return <>Unauthenticated!</>
  return (
    <CartStyles open>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
      </header>
      <ul>
        {/*me.cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>*/}
      </ul>
      
    </CartStyles>
  )
}
