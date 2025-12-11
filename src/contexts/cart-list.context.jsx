import { createContext, useState } from "react";

export const CartContext = createContext({
    visibility: false,
    setVisibility: () => {},
});

export const CartProvider = ({children}) => {
    const [visibility, setVisibility] = useState(false);
    const value = {visibility, setVisibility};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};