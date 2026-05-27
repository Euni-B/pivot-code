import { NavLink, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";




function About() {
  return <h1>About</h1>
}

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Login">| Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;