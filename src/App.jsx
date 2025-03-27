import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Community from "./components/Community";
import Notifications from "./components/Notifications";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="app d-flex">
        <Sidebar />
        <div className="main-content flex-grow-1">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/home" element={<PrivateRoute element={<Feed />} />} />
            <Route path="/communities" element={<PrivateRoute element={<Community />} />} />
            <Route path="/notifications" element={<PrivateRoute element={<Notifications />} />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
