import { CheckoutItemContainer, ImageContainer, ImageStyle, SpanStyle, Quantity, Arrow, Value, RemoveButton } from "./checkout-item.styles";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <ImageStyle src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <SpanStyle>{name}</SpanStyle>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <SpanStyle>{price}</SpanStyle>
      <RemoveButton onClick={clearCartHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
