import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

interface User {
  email: string;
  password: string;
}

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isRegister) {
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      if (users.find((user) => user.email === email)) {
        alert("Email already registered");
        return;
      }
      setUsers([...users, { email, password }]);
      alert("Registration successful! You can now login.");
      setIsRegister(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        alert("Login successful!");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true"); // persist login
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
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