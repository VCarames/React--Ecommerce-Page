import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../cart/CartSlice.js";

function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="quantity">
      <button
        className=" quantity__button quantity__button--decrease"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
        aria-label="Decrease quantity"
      >
        <img src="/images/icons/icon-minus.svg" alt="" />
      </button>
      <span className="quantity__value">{currentQuantity}</span>
      <button
        className="quantity__button quantity__button--increase"
        onClick={() => dispatch(increaseItemQuantity(productId))}
        aria-label="Increase quantity"
      >
        <img src="/images/icons/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
