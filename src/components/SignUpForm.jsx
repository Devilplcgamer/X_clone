import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignUp = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("This Email is Already Registered");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("SignUp Successful! Please Log in");
    setEmail("");
    setPassword("");
    navigate("/login"); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#000" }}>
      <div className="card p-4 shadow-lg text-white" style={{ width: "400px", borderRadius: "15px", backgroundColor: "#15202B" }}>
        <div className="text-center mb-3">
          <h2>X</h2>
        </div>
        <h2 className="text-center mb-4">Join X Today</h2>

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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={SignUp}>
          Sign Up
        </button>

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-info">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
