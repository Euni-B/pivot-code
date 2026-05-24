import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import MovieCard from "../components/movie-card/MovieCard";
import HeroMovie from "../components/hero-movie/HeroMovie";
import { getTopRated } from "../api/tmdb";
  

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [data, setData] = useState(null); 
  // const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((data) => {
      console.log("Server response", data);
    })
    .catch((err) => {
      console.error("Fetch error", err);
    });
  }, []);
  

  useEffect(() => {
    getTopRated()
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
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