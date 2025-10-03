import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css"; // reusing login styles

const Signup = () => {
  const navigate = useNavigate();

  // separate states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await  axios.post("http://localhost:3000/api/auth/signup",
        {name,email,password}
      )

      if (response.status===201) {
        const data = await response.data;
        console.log("Signup success:", data);
        navigate("/home");
      } else {
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card login-card shadow p-4">
        <h3 className="text-center mb-4 text-green">Sign Up</h3>
        
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-green">
            Full Name
          </label>
          <input
            type="text"
            className="form-control border-green"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        {/* Signup Button */}
        <button onClick={handleSignup} className="btn btn-green w-100">
          Sign Up
        </button>

        {/* Already have account link */}
        <p className="text-center mt-3">
          Already registered?{" "}
          <span
            className="text-green fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
