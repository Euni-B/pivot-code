import { useState } from "react";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => {
    setIsLogin((prev) => !prev);

    setUsername("");
    setPassword("");

    setSuccess("");
    setError("");
  };

  const handleSubmit = async () => {
    const endpoint = isLogin
      ? "http://localhost:3000/login"
      : "http://localhost:3000/register";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(isLogin ? "Login successful!" : "Account created successfully!");
        setError("");

        setUsername("");
        setPassword("");
      } else {
        setError(data.message || "Something went wrong");
        setSuccess("");
      }
    } catch (err) {
      setError("Server error");
      setSuccess("");
    }
  };



  return (
    <div className="register-container">

      <h1>{isLogin ? "Login" : "Register"}</h1>

      {success && <p className="success-msg">{success}</p>}
      {error && <p className="error-msg">{error}</p>}


      <form>
        <input
          type="text"
          placeholder="Username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete={isLogin ? "current-password" : "new-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Register"}
      </button>

      <p className="switch-text">
        {isLogin ? "Need an account?" : "Already have an account?"}{" "}
        <span onClick={toggleMode} className="switch-link">
          Switch to {isLogin ? "Register" : "Login"}
        </span>
      </p>

    </div>
  );
}

