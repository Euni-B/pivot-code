import { useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import { searchMovies } from "../api/tmdb";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  async function handleSearch() {
    if (!query.trim()) return;

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="search-page">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}