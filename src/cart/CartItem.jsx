import { formatCurrency } from "../utilities/formatCurrency";
import DeleteButton from "../components/buttons/DeleteButton";

function CartItem({ item }) {
  const {
    productId,
    thumbnails = [],
    name,
    currentPrice,
    quantity,
    totalPrice,
  } = item;

  const thumbnail =
    thumbnails.length > 0
      ? thumbnails[0]
      : "/images/product/image-product-1-thumbnail.jpg";

  return (
    <li className="cart-item" role="listitem">
      <img className="cart-item__image" src={thumbnail} alt={name} />
      <div className="cart-item__info">
        <p className="cart-item__name">{name}</p>
        <div className="cart-item__price-details">
          <p className="cart-item__price">
            {formatCurrency(currentPrice)}{" "}
            <span className="cart-item__quantity">&times; {quantity}</span>
          </p>
          <p className="cart-item__total-price">{formatCurrency(totalPrice)}</p>
        </div>
      </div>
      <DeleteButton
        className="cart-item__delete-button"
        productId={productId}
      />
    </li>
  );
}

export default CartItem;
