import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import HeroMovie from "../components/hero-movie/HeroMovie";
import { getNowPlaying } from "../api/tmdb";

function NowPlaying() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const results = await getNowPlaying();
      setMovies(results);
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

export default NowPlaying;