import { formatCurrency } from "../utilities/formatCurrency";
import DeleteButton from "../components/buttons/DeleteButton";

function CartItem({ item }) {
  const { productId, thumbnail, name, currentPrice, quantity, totalPrice } =
    item;

  return (
    <li className="cart-item" role="listitem">
      <img className="cart-item__image" src={thumbnail} alt={name} />
      <div className="cart-item__info">
        <p className="cart-item__name">{name}</p>
        <div className="cart-item__price-details">
          <p className="cart-item__price">
            {formatCurrency(currentPrice)} &times; {quantity}
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
