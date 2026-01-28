import { createContext, useEffect, useState } from "react";

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

//------------------------------ Cart Provider method -------------------------------------------------------------

export const CartProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [cartItems, setCardItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //Monitors the count of items selected. The number shows in the cart logo
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (currentTotal, cartItem) => currentTotal + cartItem.quantity,
      0,
    );
    setCartCount(newCartCount);
  }, [cartItems]);

//Monitors the total amount for the items in the cart
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (currentTotal, cartItem) => currentTotal + cartItem.quantity * cartItem.price,
      0,
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  //Adding item to the cart. Users helper method.
  const addItemToCart = (productToAdd) => {
    setCardItems(addCartItem(cartItems, productToAdd));
  };

  //Removes item from the cart. Uses a helper method.
  const removeItemToCart = (itemToRemove) => {
    setCardItems(removeCartItem(cartItems, itemToRemove));
  };

  //Deletes or clears an item from cart. Uses a helper method.
  const clearItemToCart = (itemToClear) => {
    setCardItems(clearCartItem(cartItems, itemToClear));
  };

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
