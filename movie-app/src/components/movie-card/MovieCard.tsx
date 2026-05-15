import type { Movie } from "../../types/movie";
import { useFavorites } from "../../context/FavoritesContext";
import "./MovieCard.css";

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
      />

      {/* ❤️ HEART BUTTON */}
      <button
        className="favorite-btn"
        onClick={() =>
          isFavorite
            ? removeFavorite(movie.id)
            : addFavorite(movie)
        }
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <div className="movie-content">
        <h2 className="movie-title">{movie.title}</h2>

        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
}