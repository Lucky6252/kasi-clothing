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
  clearItemToCart,
  addItemToCart,
  removeItemToCart,
} from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems  = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearCartHandler = () => dispatch(clearItemToCart(cartItems, cartItem));
  const addItemhandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));

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
