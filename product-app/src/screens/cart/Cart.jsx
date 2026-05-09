import "./Cart.css";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate = useNavigate();
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeItem,
        totalPrice,
    } = useCart();

    if (cart.length === 0) {
        return <h2 className="empty">Your cart is empty 🛒</h2>;
    }

    return (
        <div className="cart-page">
            <div className="cart-container">

                <h1>Your Cart</h1>

                {cart.map((item) => (

                    <div key={item.id} className="cart-item">

                        {/* LEFT SIDE */}
                        <div className="cart-info">

                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="cart-image"
                            />

                            <div>
                                <h3>{item.title}</h3>

                                <p className="cart-price">
                                    ${item.price}
                                </p>
                            </div>

                        </div>

                        {/* QUANTITY */}
                        <div className="qty-controls">

                            <button onClick={() => decreaseQty(item.id)}>
                                -
                            </button>

                            <span>{item.qty}</span>

                            <button onClick={() => increaseQty(item.id)}>
                                +
                            </button>

                        </div>

                        {/* REMOVE BUTTON */}
                        <button
                            className="remove-btn"
                            onClick={() => {
                                removeItem(item.id);
                                toast.error("Removed from cart");
                            }}
                        >
                            Remove
                        </button>

                    </div>

                ))}

                <div className="summary-card">

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>$10.00</span>
                    </div>

                    <div className="summary-row">
                        <span>Tax</span>
                        <span>${(totalPrice * 0.08).toFixed(2)}</span>
                    </div>

                    <hr />

                    <div className="summary-total">
                        <span>Total</span>

                        <span>
                            ${(totalPrice + 10 + totalPrice * 0.08).toFixed(2)}
                        </span>
                    </div>

                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/checkout")}
                    >
                        Proceed to Checkout
                    </button>

                </div>

            </div>
        </div>);
}


export default Cart;

// CONTEXT FUNCTIONS (for reference)