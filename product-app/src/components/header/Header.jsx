import { Link } from "react-router-dom";
import CategoriesNav from "../categories-nav/CategoriesNav";
import CartButton from "../cart-button/CartButton";
import "./Header.css";

function Header({ setSelectedCategory, setQuery }) {

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
            to="/"
            className="home-link"
            onClick={handleHomeClick}
          >
            Home
          </Link>

          <CartButton />

        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="header-bottom">
        <CategoriesNav
          setSelectedCategory={setSelectedCategory}
        />
      </div>

    </header>
  );
}

export default Header;