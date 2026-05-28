import { Route, Routes } from "react-router-dom";

import Login from "./screens/Login";
import Home from "./screens/Home";

import Sidebar from "./components/SideBar";

import "./components/sidebar.css";

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <div className="app-layout">

      <Sidebar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;