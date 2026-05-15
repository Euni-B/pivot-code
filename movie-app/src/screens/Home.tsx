import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  async function handleSearch() {
    if (!query.trim()) return; // prevents empty searches

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}