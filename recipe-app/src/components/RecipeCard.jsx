import { useState } from "react";

function RecipeCard({ recipe, favorites, toggleFavorite }) {
    const isFavorite = favorites.includes(recipe.id);

    const [showIngredients, setShowIngredients] = useState(false);
    const [rating, setRating] = useState(recipe.rating);

    return (
        <div className="card">
            <h2 className="card-title">{recipe.name}</h2>
            <p>
                Difficulty: <strong>{recipe.difficulty}</strong>
            </p>
            <p>{"⭐".repeat(rating)}{"☆".repeat(5 - rating)}</p>

            <button onClick={() => toggleFavorite(recipe.id)}>
                {isFavorite ? "❤️" : "🤍"}
            </button>

            <img src={recipe.image} alt={recipe.name} className="card-image" />

            <p className="description">{recipe.description}</p>
            <p className="cook-time">Cook time: {recipe.cookTime}</p>

            <div
                className="toggle-switch"
                onClick={() => setShowIngredients((prev) => !prev)}
            >
                <div className={showIngredients ? "thumb on" : "thumb"}></div>
            </div>

            {showIngredients && (
                <ul>
                    {recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RecipeCard;