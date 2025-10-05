import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // separate states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HOST="https://imarticus.onrender.com"
const handleLogin = async () => {
  try {
    const response = await axios.post(
      `${HOST}/api/auth/login`,
      { email, password },
      { withCredentials: true } // ✅ needed if backend uses cookies
    );

    console.log("Login success:", response.data);
    navigate("/");
  } catch (error) {
    if (error.response) {
      console.error("Login failed:", error.response.data.message);
    } else {
      console.error("Error during login:", error.message);
    }
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card login-card shadow p-4">
        <h3 className="text-center mb-4 text-green">Login</h3>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-green">
            Email address
          </label>
          <input
            type="email"
            className="form-control border-green"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-green">
            Password
          </label>
          <input
            type="password"
            className="form-control border-green"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <button onClick={handleLogin} className="btn btn-green w-100">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center mt-3">
          Not registered?{" "}
          <span
            className="text-green fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
