import {Checkout, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CheckOut = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);



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

      <PaymentForm/>
    </Checkout>
  );
};

export default CheckOut;
