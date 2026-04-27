import "./FavoriteCard.css";

function FavoriteCard({
   recipe, 
   favorites = null,
    toggleFavorite = null }) {
      
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={recipe.image} alt={recipe.name} />
        {favorites && (
          <button
            className="favorite-btn"
            onClick={() => toggleFavorite(recipe.id)}
          >
            ❤️
          </button>
        )}
      </div>

      <div className="card-content">
        <h3>{recipe.name}</h3>
        <p className="rating">⭐ {recipe.rating}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;