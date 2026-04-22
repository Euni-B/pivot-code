function FavoriteCard({ recipe, toggleFavorite }) {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} width="150" />
      <p>Rating: {recipe.rating}</p>

      <button onClick={() => toggleFavorite(recipe.id)}>
        Remove ❤️
      </button>
    </div>
  );
}

export default FavoriteCard;