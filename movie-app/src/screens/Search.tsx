import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import { searchMovies } from "../api/tmdb";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("searchResults");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(movies));
  }, [movies]);

  async function handleSearch() {
    if (!query.trim()) return;

    const results = await searchMovies(query);
    setMovies(results);
  }

  useEffect(() => {
    return () => {
      localStorage.removeItem("searchResults");
    };
  }, []);

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