import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import { useSelector, useDispatch } from "react-redux";



const CartIcon = () => {
  const dispatch = useDispatch();
  const visibility = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const VisibilityHandler = () => {
    dispatch(setIsCartOpen(!visibility));
  };

  return (
    <CartIconContainer onClick={VisibilityHandler}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;