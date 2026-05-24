import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/header/Header";
import Favorites from "./screens/Favorites";
import UpComing from "./screens/UpComing";
import NowPlaying from "./screens/NowPlaying";
import Popular from "./screens/Popular";
import Search from "./screens/Search";
import MovieDetails from "./components/movie-details/MovieDetails";
import Login from "./screens/Login";

function App() {
  return (

    <>
        {/* GLOBAL HEADER (always visible) */}
      <Header />

      {/* PAGE CONTENT CHANGES HERE */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/popular" element={<Popular />} />

        <Route path="/now-playing" element={<NowPlaying/>}/>

        <Route path="/upcoming" element={< UpComing />} />

         <Route path="/search" element={<Search />} />

         <Route path="/movie/:id" element={<MovieDetails />} />

         <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;