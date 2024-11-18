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
          <h2>{navbar.Logo}</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">{navbar.Menu1}</a>
          </li>
          <li>
            <a href="#about">{navbar.Menu2}</a>
          </li>
          <li>
            <a href="#prody">{navbar.Menu3}</a>
          </li>
          <li>
            <a href="#contact">{navbar.Menu4}</a>
          </li>
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="informasi"
          >
            <a href="#informasi">{navbar.Menu5}</a>
            <ul className={`dropdown ${showDropdown ? "show" : ""}`}>
              <li>
                <button
                  onClick={() => navigate("/gallery")}
                  className="navbar-button-down"
                >
                  {navbar.Menu5Gal}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/team")}
                  className="navbar-button-down"
                >
                  {navbar.Menu5Team}
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="navbar-button"
            >
              {navbar.Menu6}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
