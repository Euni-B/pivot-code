import type { Movie } from "../../types/movie";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const navigate = useNavigate();

  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (


    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        className="movie-poster"
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
      />

      {/* ❤️ HEART BUTTON */}
      <button

        onClick={(e) => {
          e.stopPropagation();
          isFavorite
            ? removeFavorite(movie.id)
            : addFavorite(movie);
        }}
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