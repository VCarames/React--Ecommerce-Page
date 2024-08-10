import { Link } from "react-router-dom";

function CartCheckoutButton() {
  return (
    <Link className="cart__checkout button" to="">
      Checkout
    </Link>
  );
}

export default CartCheckoutButton;
