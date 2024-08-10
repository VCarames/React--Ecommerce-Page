import { useSelector } from "react-redux";
import { formatCurrency } from "../utilities/formatCurrency";
import { getCurrentQuantityById } from "../cart/CartSlice.js";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import AddToCartButton from "./AddToCartButton.jsx";

function ProductItem({ product }) {
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

              <AddToCartButton product={product} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
