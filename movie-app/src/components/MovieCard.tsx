import type { Movie } from '../types/movie';
import "./MovieCard.css"

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL; 
// Access the image base URL from environment variables


type Props = {
    movie: Movie
}


export default function MovieCard({ movie }: Props){

return (
  <div className="movie-card">
    <img
      className="movie-poster"
      src={`${imageBaseUrl}${movie.poster_path}`}
      alt={movie.title}
    />

    <div className="movie-content">
      <h2 className="movie-title">{movie.title}</h2>

      <p className="movie-overview">
        {movie.overview}
      </p>
    </div>
  </div>
)}