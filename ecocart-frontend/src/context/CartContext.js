import React, { createContext, useReducer, useContext, useState } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  orders: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.asin === action.payload.asin);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.asin === action.payload.asin
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.asin !== action.payload.asin),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.asin === action.payload.asin
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [greenMode, setGreenMode] = useState(false);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (asin) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { asin } });
  };

  const updateQuantity = (asin, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { asin, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addOrder = (order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };

  const toggleGreenMode = () => {
    setGreenMode(prev => !prev);
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, orders: state.orders, addToCart, removeFromCart, updateQuantity, clearCart, addOrder, greenMode, toggleGreenMode }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
