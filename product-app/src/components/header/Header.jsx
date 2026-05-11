import { Link } from "react-router-dom";
import CategoriesNav from "../categories-nav/CategoriesNav";
import CartButton from "../cart-button/CartButton";
import "./Header.css";

function Header({
  setSelectedCategory,
  setQuery,
  resetSearch,
  selectedCategory }) {

  const handleHomeClick = () => {
    setSelectedCategory("all");
    setQuery("");
  };

  return (
    <header className="header">

      {/* TOP ROW */}
      <div className="header-top">

        <h1 className="header-title">Eunice's Shop</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            className="home-link"
            to="/"
            onClick={() => {
              setSelectedCategory("all");
              setQuery("");
             
            }}
          >
            Home
          </Link>

          <CartButton />

        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="header-bottom">
        <CategoriesNav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setQuery={setQuery}
          resetSearch={resetSearch}
        />
      </div>

    </header>
  );
}

export default Header;