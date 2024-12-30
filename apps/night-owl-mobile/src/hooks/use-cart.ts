import React, { useState, useCallback } from 'react';

// Define the CartItem type for better type safety
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image for display purposes
};

export const useCart = () => {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  // Add item to the cart
  const addItemToCart = useCallback(
    (item: CartItem) => {
      setCartData((prevCart) => {
        const existingItem = prevCart.find(
          (cartItem) => cartItem.id === item.id
        );

        if (existingItem) {
          // If the item exists, update its quantity
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        }

        // Otherwise, add the item to the cart
        return [...prevCart, item];
      });
    },
    [setCartData]
  );

  // Remove an item from the cart
  const removeItemFromCart = useCallback(
    (id: number) => {
      setCartData((prevCart) => prevCart.filter((item) => item.id !== id));
    },
    [setCartData]
  );

  // Update item quantity
  const updateItemQuantity = useCallback(
    (id: number, quantity: number) => {
      if (quantity <= 0) {
        removeItemFromCart(id); // Remove item if quantity is 0 or less
        return;
      }

      setCartData((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    },
    [removeItemFromCart, setCartData]
  );

  // Calculate the total price of items in the cart
  const calculateTotal = useCallback(() => {
    return cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartData]);

  // Clear the entire cart
  const clearCart = useCallback(() => {
    setCartData([]);
  }, [setCartData]);

  // Get total number of items in the cart
  const getTotalItems = useCallback(() => {
    return cartData.reduce((total, item) => total + item.quantity, 0);
  }, [cartData]);

  return {
    cartData,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    calculateTotal,
    clearCart,
    getTotalItems,
  };
};
