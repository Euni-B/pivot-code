import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";
import Header from "./components/header/Header";
import Cart from "./screens/cart/Cart";
import Checkout from "./screens/checkout/Checkout";
import { CartProvider } from "./context/CartContext"; // ✅ ADD THIS

function App() {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");


  const resetSearch = () => {
    setQuery("");
    setSelectedCategory("all");
  };



  return (
    <CartProvider>
      {<ToastContainer />}

      <Header
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}
        resetSearch={resetSearch}
      />

      <Routes>
        <Route path="/" element={<Home
          selectedCategory={selectedCategory}
          query={query}
          setQuery={setQuery}
          setSelectedCategory={setSelectedCategory}
        />
        }
        />

        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </CartProvider>
  );
}

export default App;