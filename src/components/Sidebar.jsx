import React from "react";
import { FaHome, FaBell, FaUsers, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) return null; // Hide Sidebar if not logged in

  return (
    <div className="sidebar d-flex flex-column p-3 bg-dark text-white vh-100 position-fixed">
      <h4 className="mb-4">X</h4>
      <button className="sidebar-btn" onClick={() => navigate("/home")}>
        <FaHome className="me-2" /> Home
      </button>
      <button className="sidebar-btn" onClick={() => navigate("/notifications")}>
        <FaBell className="me-2" /> Notifications
      </button>
      <button className="sidebar-btn" onClick={() => navigate("/communities")}>
        <FaUsers className="me-2" /> Communities
      </button>
      <button className="sidebar-btn" onClick={() => navigate("/profile")}>
        <FaUser className="me-2" /> Profile
      </button>
      <button
        className="sidebar-btn mt-auto text-danger"
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
