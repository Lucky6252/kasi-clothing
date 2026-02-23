import { ProductCardContainer, Name, Price } from "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();


  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(product));

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
