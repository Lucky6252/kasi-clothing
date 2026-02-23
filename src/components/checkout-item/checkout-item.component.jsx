import {
  CheckoutItemContainer,
  ImageContainer,
  ImageStyle,
  SpanStyle,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const clearCartHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemhandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

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
      <RemoveButton onClick={clearCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
