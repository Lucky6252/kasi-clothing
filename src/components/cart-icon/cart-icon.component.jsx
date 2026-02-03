import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-list.context";

const CartIcon = () => {
  const {visibility, setVisibility, cartCount}  = useContext(CartContext);

  const VisibilityHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <CartIconContainer onClick={VisibilityHandler}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;