import MovieCard from "../components/movie-card/MovieCard";
import { useFavorites } from "../context/FavoritesContext";


function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 && <p>No favorites yet</p>}

      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie as any} />
      ))}
    </div>
  );
}

export default Favorites;