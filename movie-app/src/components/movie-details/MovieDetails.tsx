import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/tmdb";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    async function loadMovie() {
      if (!id) return;

      const data = await getMovieDetails(id);
      setMovie(data);
    }

    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;


  return (
    <div className="movie-details">

      <img
        className="movie-backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />

      <div className="movie-details-content">

        <img
          className="movie-poster-large"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-info">

          <h1 className="movie-title">{movie.title}</h1>

          <p className="movie-overview">{movie.overview}</p>

          <div className="movie-meta">
            <p><strong>Release:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>Votes:</strong> {movie.vote_count}</p>
            <p><strong>Language:</strong> {movie.original_language}</p>
            <p><strong>Popularity:</strong> {movie.popularity}</p>
            <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MovieDetails;