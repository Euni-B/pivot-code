import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import HeroMovie from "../components/hero-movie/HeroMovie";
import { getUpcoming } from "../api/tmdb";

export default function Upcoming() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const results = await getUpcoming();
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    }

    loadMovies();
  }, []);

  return (
    <div>

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