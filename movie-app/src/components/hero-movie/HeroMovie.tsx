import { useFavorites } from "../../context/FavoritesContext";

type Props = {
  movie: any;
};

export default function HeroMovie({ movie }: Props) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <div className="hero-movie">

      <img
        className="hero-backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>{movie.title}</h1>

          <p>{movie.overview}</p>

          <button
            onClick={() =>
              isFavorite
                ? removeFavorite(movie.id)
                : addFavorite(movie)
            }
          >
            {isFavorite ? "❤️ Remove" : "🤍 Add to Favorites"}
          </button>

        </div>
      </div>
    </div>
  );
}