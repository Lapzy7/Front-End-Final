import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [navbar, setNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navbarRef = ref(db, "Component/Navigation");

    onValue(navbarRef, (snapshot) => {
      const data = snapshot.val();
      setNavbar(data);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h2>Filkom Day</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#prody">Prody</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="informasi"
          >
            <a href="#informasi">Information</a>
            <ul className={`dropdown ${showDropdown ? "show" : ""}`}>
              <li>
                <button
                  onClick={() => navigate("/gallery")}
                  className="navbar-button-down"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/team")}
                  className="navbar-button-down"
                >
                  Team
                </button>
              </li>
            </ul>
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

export default Navigation;
