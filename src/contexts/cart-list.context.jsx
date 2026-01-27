import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    visibility: false,
    setVisibility: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

const addCartItem = (cartItems, productToAdd) => {

    const existingProduct = cartItems.find(item => item.id === productToAdd.id);

    if(existingProduct){
       return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1}: item);
        
    }
    else {
        return [...cartItems, {...productToAdd, quantity: 1}]
    }

}

export const CartProvider = ({children}) => {
    const [visibility, setVisibility] = useState(false);
    const [ cartItems, setCardItems] = useState([])
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(()=> {
        const newCartCount = cartItems.reduce((currentTotal, cartItem)=> currentTotal + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCardItems(addCartItem(cartItems, productToAdd));
    }

    const value = {visibility, setVisibility, addItemToCart, cartItems, cartCount};

    

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};