import MovieCard from "../components/movie-card/MovieCard";
import { useFavorites } from "../context/FavoritesContext";
import HeroMovie from "../components/hero-movie/HeroMovie";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>

      {favorites.length === 0 && (
        <p className="empty-favorites">
          No favorites yet
        </p>
      )}

      {favorites.length > 0 && (
        <HeroMovie movie={favorites[0] as any} />
      )}

      <div className="movie-grid">
        {favorites.slice(1).map((movie) => (
          <MovieCard key={movie.id} movie={movie as any} />
        ))}
      </div>

    </div>
  );
}

export default Favorites;