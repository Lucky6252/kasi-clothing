import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart-list.context";

import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearCartHandler = () => clearItemToCart(cartItem);
  const addItemhandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemhandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
