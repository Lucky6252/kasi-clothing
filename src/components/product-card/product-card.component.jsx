import { ProductCardContainer, ImageStyle, ButtonStyle, Name, Price } from "./product-card.styles";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-list.context";

const ProductCard = ({ product }) => {
  const {addItemToCart} = useContext(CartContext)

  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ImageStyle src={imageUrl} alt={`S{name}`} />
      <div className="footer">
        <Name className="name"> {name} </Name>
        <Price className="price"> {price} </Price>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
