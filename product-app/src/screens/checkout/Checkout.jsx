import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart, totalPrice, setCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [order, setOrder] = useState(null);

  const generateOrderNumber = () => {
    return "ORD-" + Math.floor(Math.random() * 1000000);
  };

  const handleOrder = () => {

    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    const newOrder = {
      orderNumber: generateOrderNumber(),
      name,
      email,
      items: cart,
      total: totalPrice
    };

    setOrder(newOrder);

    toast.success("Order placed successfully!");

    // clear cart
    setCart([]);

  };

  if (order) {
    return (
      <div className="checkout-container">

        <h1>Order Complete 🎉</h1>

        <div className="order-card">

          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Order #:</strong> {order.orderNumber}</p>
          <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>

          <h3>Items:</h3>

          {order.items.map((item) => (
            <div key={item.id} className="order-item">
              <p>{item.title} × {item.qty}</p>
            </div>
          ))}

          <button
            onClick={() => navigate("/")}
            className="home-btn"
          >
            Back to Home
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="checkout-container">

      <h1>Checkout</h1>

      <div className="checkout-box">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <p key={item.id}>
              {item.title} × {item.qty}
            </p>
          ))}

          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>

        <button
          className="place-order-btn"
          onClick={handleOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;