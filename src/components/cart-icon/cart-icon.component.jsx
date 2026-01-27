import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-list.context";

const CartIcon = () => {
  const {visibility, setVisibility, cartCount}  = useContext(CartContext);

  const VisibilityHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="cart-icon-container" onClick={VisibilityHandler}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;