import FavoriteCard from "./FavoriteCard";

function FavoritesSection({ 
  recipes, 
  favorites , 
  toggleFavorite }) {
  // filter recipes to only favorites
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <div className="section-grid">
      <h2>Favorites</h2>

      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <FavoriteCard
            key={recipe.id}
            recipe={recipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}

export default FavoritesSection;