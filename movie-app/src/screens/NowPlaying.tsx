import { useEffect, useState } from "react";
import MovieCard from "../components/movie-card/MovieCard.tsx";
import { getNowPlaying } from "../api/tmdb.ts";

function NowPlaying() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        async function loadMovies() {
            const results = await getNowPlaying();
            setMovies(results);
        }

        loadMovies();
    }, []);

    return (
        <div>
            <h1>Now Playing</h1>

            {movies.map((movie: any) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}


        </div>
    );
}

export default NowPlaying;

