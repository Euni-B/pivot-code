import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Read login status from localStorage on load
  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    if (stored === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="app-layout">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="page-content">
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/home" replace />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          {/* Home Route */}
          <Route
            path="/home"
            element={
              isLoggedIn ? <Home /> : <Navigate to="/login" replace />
            }
          />

          {/* Catch-all */}
          <Route
            path="*"
            element={
              <Navigate to={isLoggedIn ? "/home" : "/login"} replace />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;