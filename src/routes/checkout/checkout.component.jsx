import {Checkout, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart-list.context";

const CheckOut = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <Checkout>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>


        {cartItems.map((cartItem) =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )}
      <Total>Total: ${cartTotal}</Total>
    </Checkout>
  );
};

export default CheckOut;
