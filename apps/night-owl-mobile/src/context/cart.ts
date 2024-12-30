import { createContext } from 'react';
import { useCart } from '../hooks/use-cart';

type CartContextType = ReturnType<typeof useCart>;
export const CartContext = createContext<CartContextType>({
  cartData: [],
  addItemToCart: undefined,
  removeItemFromCart: undefined,
  updateItemQuantity: undefined,
  calculateTotal: undefined,
  clearCart: undefined,
  getTotalItems: undefined,
});
