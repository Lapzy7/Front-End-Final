import React from "react";
import { useNavigate } from "react-router-dom";

const SmallNavigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h2>Filkom Day</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <button onClick={() => navigate("/")} className="navbar-button">
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="navbar-button"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SmallNavigation;
