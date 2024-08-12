import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/CartSlice.js";
import ProductImageGallery from "./ProductImageGallery.jsx";
import { formatCurrency } from "../utilities/formatCurrency";
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
    thumbnails,
  } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="product__content">
      <ProductImageGallery
        imageUrl={imageUrl}
        name={name}
        thumbnails={thumbnails}
      />
      <div className="product__details">
        <p className="product__brand">{brand}</p>
        <h2 className="product__name">{name}</h2>
        <p className="product__description">{description}</p>
        <div className="product__group">
          {!outOfStock ? (
            <div className="product__price">
              <div className="product__group--price">
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
            <p className="product__price--soldout">Sold out</p>
          )}

          {!outOfStock && (
            <div className="product__controls">
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
