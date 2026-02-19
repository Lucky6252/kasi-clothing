import { ProductCardContainer, Name, Price } from "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-list.context";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  //const {addItemToCart} = useContext(CartContext)


  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`S{name}`} />
      <div className="footer">
        <Name className="name"> {name} </Name>
        <Price className="price"> {price} </Price>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
