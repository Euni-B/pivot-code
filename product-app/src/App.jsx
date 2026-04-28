import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })

      // catch errors 
      .catch(err => {
        console.log("Error:", err.message);
        setError(err.message); // save error to memory
        setLoading(false); //no longer loading
      });
  }, []);

  // loading state ui 
  if (loading) {
    return (
      <div>
        <h1>Product App</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  // error state ui 
  if (error) {
    return (
      <div>
        <h1>Product App</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Product App</h1>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;