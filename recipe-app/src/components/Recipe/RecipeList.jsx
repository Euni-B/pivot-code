import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, favorites, toggleFavorite }) {
  const nonFavoriteRecipes = recipes.filter(
    (recipe) => !favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>Recipes</h2>

      <div className="card-container">
        {nonFavoriteRecipes.map((recipe) => (
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