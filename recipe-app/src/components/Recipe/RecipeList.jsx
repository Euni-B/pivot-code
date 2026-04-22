import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, favorites, toggleFavorite }) {
  return (
    <div>
      <h2>Recipes</h2>

      <div className="card-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;