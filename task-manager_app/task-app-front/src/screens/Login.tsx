import "./Login.css"
import { useState } from "react";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🐱 Task Manager</h1>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        {isRegister && (
          <input type="password" placeholder="Confirm Password" />
        )}

        <button>
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
}

export default Login;