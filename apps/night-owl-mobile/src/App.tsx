import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { CartContext } from './context/cart';
import { useCart } from './hooks/use-cart';

export default function App() {
  const cart = useCart();
  return (
    <CartContext.Provider value={cart}>
      <AppNavigator />
    </CartContext.Provider>
  );
}
