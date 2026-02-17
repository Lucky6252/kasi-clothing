import { createContext, useReducer } from "react";
import {createAction} from '../utils/reducer/reducer.utils'

//-------------------------------- Cart Context ---------------------------------------------------------------

export const CartContext = createContext({
  visibility: false,
  setVisibility: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

//-------------------------------- Helper methods ----------------------------------------------------------------

const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.find((item) => item.id === productToAdd.id);

  if (existingProduct) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
    
  }
};

const removeCartItem = (cartItems, itemToRemove) => {
  //find if the product exist
  const existingProduct = cartItems.find((item) => item.id === itemToRemove.id);

  //Check if the quantity is equals to 1
  if(existingProduct.quantity === 1)
  {
    return cartItems.filter((cartItem)=> cartItem.id !== itemToRemove.id);
  }

  //return the adjusted quantity
  return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
};

const clearCartItem = ( cartItems, itemToClear) => cartItems.filter((cartItem)=> cartItem.id !== itemToClear.id);

const Initial_State = {
  visibility: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}


const CART_ACTION_TYPES = {
  ADD_CART_ITEMS: 'ADD_CART_ITEMS',
  SET_CART_VISIBILITY: 'SET_CART_VISIBILITY'
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case CART_ACTION_TYPES.ADD_CART_ITEMS:
      return{
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_CART_VISIBILITY:
      return{
        ...state,
        visibility: payload,
      }
    default:
      throw new Error(`Unhandled type for ${type} in cartReducer`);
  }
}

//------------------------------ Cart Provider method -------------------------------------------------------------

export const CartProvider = ({ children }) => {


  const [{visibility, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, Initial_State);

  const updateNewCart = (newCartItems) => {

    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (currentTotal, cartItem) => currentTotal + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(createAction(CART_ACTION_TYPES.ADD_CART_ITEMS, 
      {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    }))

  }


  //Adding item to the cart. Users helper method.
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateNewCart(newCartItems);
  };

  //Removes item from the cart. Uses a helper method.
  const removeItemToCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateNewCart(newCartItems);
  };

  //Deletes or clears an item from cart. Uses a helper method.
  const clearItemToCart = (itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    updateNewCart(newCartItems);
  };

  const setVisibility = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_VISIBILITY, bool));

  }

  //Values and functions exposed to the components
  const value = {
    visibility,
    setVisibility,
    addItemToCart,
    removeItemToCart,
    clearItemToCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
