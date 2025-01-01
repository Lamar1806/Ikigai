import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { CartContext } from './context/cart';
import { useCart } from './hooks/use-cart';
import { MenuContext } from './context/MenuContext';
import { useMenu } from './hooks/use-menu';

export default function App() {
  const cart = useCart();
  const menu = useMenu();
  return (
    <CartContext.Provider value={cart}>
      <MenuContext.Provider value={menu}>
        <AppNavigator />
      </MenuContext.Provider>
    </CartContext.Provider>
  );
}
