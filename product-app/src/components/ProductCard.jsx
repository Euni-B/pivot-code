function ProductCard({ product }) {
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
    </div>
  );
}

export default ProductCard;