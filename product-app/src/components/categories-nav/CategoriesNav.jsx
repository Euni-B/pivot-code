import { useEffect, useState } from "react";
import "./CategoriesNav.css";

function CategoriesNav({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleClick = (slug) => {
    setActive(slug);
    setSelectedCategory(slug);
  };

  return (
    <div className="categories-container">

      {/* ALL */}
      <span
        className={`category ${
          active === "all" ? "active" : ""
        }`}
        onClick={() => handleClick("all")}
      >
        All
      </span>

      {/* CATEGORY BUTTONS */}
      {categories.map((cat) => (
        <span
          key={cat.slug}
          className={`category ${
            active === cat.slug ? "active" : ""
          }`}
          onClick={() => handleClick(cat.slug)}
        >
          {cat.name}
        </span>
      ))}
    </div>
  );
}

export default CategoriesNav;