import "./ProductCard.css";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";


function ProductCard({ product }) {
  const { addToCart } = useCart();
  let stockStatus = "";

  if (product.stock === 0) {
    stockStatus = "Sold Out";
  } else if (product.stock < 5) {
    stockStatus = "Low Stock";
  } else {
    stockStatus = "In Stock";
  }

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.brand}</h3>
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{stockStatus}</p>
      <p>${product.price}</p>
      <p>⭐ {product.rating}</p>
      <button
        className="card-cart-btn"
        onClick={(e) => {
          e.preventDefault(); // stops Link navigation

          addToCart(product);

          toast.success("Added to cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;