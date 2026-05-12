import { useEffect, useState } from 'react';
import type {Movie } from './types/movie';
import MovieCard from './components/MovieCard';




export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]); //array of movies

  const apiKey = import.meta.env.VITE_API_KEY; // Access the API key from environment variables
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)

      .then((res) => res.json()) //convert to usable code
      .then((data) => {
        console.log(data); // Log the entire response to see its structure
        setMovies(data.results); // Assuming the movies are in the 'results' property
      })
      .catch((error) => console.error('Error fetching movies:', error)); // Handle errors

  }, []);

  return ( 
    <div className ="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    
  );
}