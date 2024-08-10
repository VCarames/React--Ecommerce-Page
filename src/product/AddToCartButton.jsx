import { useDispatch } from "react-redux";
import { addItem } from "../cart/CartSlice.js";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      productId: product.id,
      brand: product.brand,
      name: product.name,
      thumbnail: product.thumbnail,
      quantity: 1,
      currentPrice: product.currentPrice,
      previousPrice: product.previousPrice,
      discount: product.discount,
      totalPrice: product.currentPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <button className="button button--add-cart" onClick={handleAddToCart}>
      <img src="/images/icons/icon-cart.svg" alt="" />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
