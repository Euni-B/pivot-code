function FavoriteCard({ recipes, favorites, toggleFavorite }) {
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>Favorites</h2>

      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet ❤️</p>
      ) : (
        <div className="favorite-container">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="favorite-card">
              <img src={recipe.image} alt={recipe.name} />
              <p>{recipe.name}</p>

              <button onClick={() => toggleFavorite(recipe.id)}>
                ❤️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteCard;