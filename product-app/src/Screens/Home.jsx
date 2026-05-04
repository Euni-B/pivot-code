import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");


  const handleSearch = () => {
    setQuery(search); // 🔥 THIS triggers everything
  };



  // ASYNC gives ability to AWAIT
  useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      let url = "https://dummyjson.com/products";

      if (query) {
        url = `https://dummyjson.com/products/search?q=${query}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [query]);


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
      <h1>Product Store</h1>
      {/* SEARCHBAR  */}
      <div className="search-bar">
        <span>🔍</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product} />

        ))}
      </div>
    </div>
  );
}

export default Home;