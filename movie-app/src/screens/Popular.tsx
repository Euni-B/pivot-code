import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import HeroMovie from "../components/hero-movie/HeroMovie";
import { getPopularMovies } from "../api/tmdb";

function Popular() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const results = await getPopularMovies();
      setMovies(results);
    }

    loadMovies();
  }, []);

  return (
    <div>

      <h1>Popular Movies</h1>

      {/* HERO SECTION */}
      {movies.length > 0 && (
        <HeroMovie movie={movies[0]} />
      )}

      {/* GRID SECTION */}
      <div className="movie-grid">
        {movies.slice(1).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default Popular;