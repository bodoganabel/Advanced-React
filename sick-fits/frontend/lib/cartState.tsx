import { createContext, useContext, useState } from 'react';


const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

export function CartStateProvider({ children }) {

  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => { setCartOpen(!cartOpen) }
  const openCart = () => { setCartOpen(true) }
  const closeCart = () => { setCartOpen(false) }

  return <LocalStateProvider value={{
    cartOpen,
    toggleCart,
    openCart,
    closeCart
  }}>{children}</LocalStateProvider>

}

export function useCart() {
  const all = useContext(LocalStateContext)
  return all;
}