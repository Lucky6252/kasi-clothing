import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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

export const setCartVisibility = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_VISIBILITY, boolean);

//Adding item to the cart. Users helper method.
  export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

  //Removes item from the cart. Uses a helper method.
  export const removeItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

  //Deletes or clears an item from cart. Uses a helper method.
  export const clearItemToCart = (cartItems, itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };