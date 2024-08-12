import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import CartItem from "./CartItem";
import CartCheckoutButton from "./CartCheckoutButton";
import { formatCurrency } from "../utilities/formatCurrency";

function Cart() {
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const cartContentRef = useRef();
  const navToggleRef = useRef();
  const location = useLocation();

  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeCart();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    closeCart();
  }, [location]);

  const toggleCart = () => {
    setIsCartExpanded((prevExpanded) => !prevExpanded);
  };

  const closeCart = () => {
    setIsCartExpanded(false);
  };

  const handleFocusOut = (event) => {
    if (!cartContentRef.current.contains(event.relatedTarget)) {
      closeCart();
    }
  };

  return (
    <div className="cart" aria-label="main">
      {totalCartQuantity > 0 && (
        <span className="cart__quantity" aria-label="Number of items in cart">
          {totalCartQuantity}
        </span>
      )}
      <button
        className="cart__button"
        aria-expanded={isCartExpanded}
        aria-controls="cart__content"
        aria-label="cart"
        onClick={toggleCart}
        ref={navToggleRef}
      >
        <svg
          className="cart__button-icon"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
        </svg>
      </button>

      <div
        className="cart__content"
        id="cart__content"
        ref={cartContentRef}
        onBlur={handleFocusOut}
      >
        <div className="cart__content-intro">
          <h2 className="cart__content-heading">Cart</h2>
          <span className="cart__content-total">
            {formatCurrency(totalCartPrice)}
          </span>
        </div>

        {cart.length === 0 ? (
          <p className="cart__content-empty-text">Your cart is empty.</p>
        ) : (
          <ul className="cart__content-list">
            {cart.map((item) => (
              <CartItem item={item} key={item.productId} />
            ))}
          </ul>
        )}

        {totalCartQuantity > 0 && <CartCheckoutButton />}
      </div>
    </div>
  );
}

export default Cart;
