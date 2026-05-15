import { useEffect, useState } from "react";
import type { Movie } from "../types/movie.ts";
import MovieCard from "../components/movie-card/MovieCard.tsx";
import { getPopularMovies } from "../api/tmdb.ts";

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

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Popular;