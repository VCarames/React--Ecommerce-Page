import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../utilities/formatCurrency";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice.js";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const {
    id,
    brand,
    name,
    currentPrice,
    previousPrice,
    discount,
    description,
    outOfStock,
    imageUrl,
    thumbnail,
  } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      productId: id,
      brand,
      name,
      thumbnail,
      quantity: 1,
      currentPrice,
      previousPrice,
      discount,
      totalPrice: currentPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <div className="product__content">
      <img className="product__img" src={imageUrl} alt={name} />
      <div className="product__details--info">
        <p className="product__brand">{brand}</p>
        <h2 className="product__name">{name}</h2>
        <p className="product__description">{description}</p>
        <div className="product__details--price">
          {!outOfStock ? (
            <div className="product__price">
              <div className="product__price--container">
                <p className="product__price--current">
                  {formatCurrency(currentPrice)}
                </p>
                <p className="product__price--discount">{discount}%</p>
              </div>
              <del className="product__price--previous">
                {formatCurrency(previousPrice)}
              </del>
            </div>
          ) : (
            <p className="product__soldout">Sold out</p>
          )}

          {!outOfStock && (
            <div className="product__cta">
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />

              <button
                className="button button--add-cart"
                onClick={handleAddToCart}
              >
                <img src="/images/icons/icon-cart.svg" alt="" />
                <span>Add to cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
