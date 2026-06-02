import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
  setUsername: (value: string) => void;
}

const Login = ({ setIsLoggedIn, setUsername }: LoginProps) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // ======================
    // REGISTER FLOW
    // ======================
    if (isRegister) {
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.error);
          return;
        }

        alert(data.message);

        setIsRegister(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        alert("Unable to connect to server.");
      }

      return; // IMPORTANT
    }

    // ======================
    // LOGIN FLOW
    // ======================
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      alert(data.message);

      setIsLoggedIn(true);
      setUsername(email);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", email);

      navigate("/home");
    } catch (error) {
      alert("Unable to connect to server.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>{isRegister ? "Register" : "Login"}</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isRegister && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <button onClick={handleSubmit}>
          {isRegister ? "Register" : "Login"}
        </button>

        <p>
          {isRegister ? "Already have an account?" : "Need an account?"}{" "}
          <span
            style={{ color: "#2563eb", cursor: "pointer" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

