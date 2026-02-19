import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { selectCartVisibility, selectCartCount } from "../../store/cart/cart.selector";
import { setCartVisibility } from "../../store/cart/cart.action";

import { useSelector, useDispatch } from "react-redux";



const CartIcon = () => {
  const dispatch = useDispatch();
  const visibility = useSelector(selectCartVisibility);
  const cartCount = useSelector(selectCartCount);

  const VisibilityHandler = () => {
    dispatch(setCartVisibility(!visibility));
  };

  return (
    <CartIconContainer onClick={VisibilityHandler}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;