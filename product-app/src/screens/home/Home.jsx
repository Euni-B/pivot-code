import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({
  selectedCategory,
  query,
  setQuery,
  setSelectedCategory
}) {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");


  const handleClick = (slug) => {
    setSelectedCategory(slug);

    // only clear search if it exists
    if (setQuery) {
      setQuery("");
    }

    navigate("/");
  };



  // 1. FETCH ONCE
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);


        const limit = 194; // Adjust as needed
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        const data = await res.json();

        setAllProducts(data.products);
        setProducts(data.products);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 2. FILTER (SEARCH + CATEGORY)
  useEffect(() => {
    let filtered = [...allProducts];

    // SEARCH
    if (query) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // CATEGORY
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category === selectedCategory
      );
    }

    setProducts(filtered);
  }, [query, selectedCategory, allProducts]);

  useEffect(() => {
    if (!query) {
      setSearch("");
    }
  }, [query]);

  // 3. LOADING STATE
  if (loading) {
    return (
      <div>
        <h1>Product App</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  // 4. ERROR STATE
  if (error) {
    return (
      <div>
        <h1>Product App</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="search-bar">
          <span>🔍</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
          />

          <button
            onClick={() => {
              setQuery(search.trim());
              
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;