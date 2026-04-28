import { useState } from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, favorites, toggleFavorite }) {
  const isFavorite = favorites.includes(recipe.id);

  const [showIngredients, setShowIngredients] = useState(false);
  const [rating, setRating] = useState(recipe.rating);

  return (
    <div className="card section section-grid">

      {/* IMAGE + OVERLAY BUTTON */}
      <div className="card-img-wrapper">
        <img src={recipe.image} alt={recipe.name} />

        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(recipe.id)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* CONTENT */}
      <div className="card-content">
        <h2 className="card-title">{recipe.name}</h2>

        <p className="difficulty">
          Difficulty: <strong>{recipe.difficulty}</strong>
        </p>

        <p className="rating">
          {"⭐".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </p>

        <p className="description">{recipe.description}</p>

        <p className="cook-time">Cook time: {recipe.cookTime}</p>

        {/* TOGGLE */}
        <div
          className="toggle-switch"
          onClick={() => setShowIngredients((prev) => !prev)}
        >
          <div className={showIngredients ? "thumb on" : "thumb"}></div>
        </div>

        {/* ✅ FIXED INGREDIENTS */}
        <div className={`ingredients ${showIngredients ? "open" : ""}`}>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}  style={{ "--i": index + 1 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="date">Date: {recipe.dateCreated}</p>
      </div>
    </div>
  );
}

export default RecipeCard;