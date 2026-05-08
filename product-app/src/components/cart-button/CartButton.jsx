import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartButton.css";

function CartButton() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <button
      className="cart-button"
      onClick={() => navigate("/cart")}
    >
      🛒 Cart
      {cartCount > 0 && (
        <span className="cart-badge">{cartCount}</span>
      )}
    </button>
  );
}

export default CartButton;