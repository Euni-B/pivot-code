import FavoritesSection from "./FavoritesSection";

function FavoriteCard({ recipe,
   favorites = null,
   toggleFavorite = null }) {
  return (
    <div 
    style = {
      {backgroundColor: "white" ,
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        borderWidth: "1px",
        borderColor: "black",
        

    }}>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} className="recipe-img" />
      <p>Rating: {recipe.rating}</p>

      {favorites && <button onClick={() => toggleFavorite(recipe.id)}>
        ❤️
      </button>}
    </div>
  );
}

export default FavoriteCard;