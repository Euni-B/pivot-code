import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";
import Header from "./components/header/Header";
import Cart from "./screens/cart/Cart";

import { CartProvider } from "./context/CartContext"; // ✅ ADD THIS

function App() {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        if (selectedCategory === "all") {
          setProducts(data.products);
        } else {
          const filtered = data.products.filter(
            (product) => product.category === selectedCategory
          );
          setProducts(filtered);
        }
      });
  }, [selectedCategory]);

  return (
    <CartProvider> 
    { <ToastContainer /> }

      <Header
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedCategory={selectedCategory}
              query={query}
              setQuery={setQuery}
            />
          }
        />

        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </CartProvider>
  );
}

export default App;