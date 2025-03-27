import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      alert("Incorrect Email or Password");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    alert("Login Successful");
    navigate("/home"); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#000" }}>
      <div className="card p-4 shadow-lg text-white" style={{ width: "400px", borderRadius: "15px", backgroundColor: "#15202B" }}>
        <div className="text-center mb-3">
          <h2>X</h2>
        </div>
        <h2 className="text-center mb-4">Welcome Back</h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={Login}>
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account? <a href="/signup" className="text-info">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
