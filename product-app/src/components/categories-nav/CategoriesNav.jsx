import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesNav.css";

function CategoriesNav({
  selectedCategory,
  setSelectedCategory
}) {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleClick = (slug) => {

    setSelectedCategory(slug);
    setQuery("");
    navigate("/");
  };

  return (
    <div className="categories-container">

      {/* ALL */}
      <span
        className={`category ${selectedCategory === "all"
            ? "active"
            : ""
          }`}
        onClick={() => handleClick("all")}
      >
        All
      </span>

      {/* CATEGORY BUTTONS */}
      {categories.map((cat) => (
        <span
          key={cat.slug}
          className={`category ${selectedCategory === cat.slug
              ? "active"
              : ""
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