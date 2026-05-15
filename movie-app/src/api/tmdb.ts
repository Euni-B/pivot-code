  

const apiKey = import.meta.env.VITE_API_KEY

export async function getPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  )

  const data = await response.json()

  return data.results
}



export async function searchMovies(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );

  const data = await response.json();

  return data.results;
}

export async function getNowPlaying () {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );

  const data = await response.json();

  return data.results;

}

export async function getUpcoming () {
  const response = await fetch (
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  );

  const data = await response.json();

  return data.results;
}

export async function getTopRated () {
  const response = await fetch (
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );

  const data = await response.json();
  return data;
}