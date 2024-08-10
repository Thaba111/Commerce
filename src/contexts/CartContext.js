import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.some(item => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
    setTotalAmount((prevTotal) => prevTotal + product.price);
  };

  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalAmount((prevTotal) => prevTotal - itemToRemove.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
