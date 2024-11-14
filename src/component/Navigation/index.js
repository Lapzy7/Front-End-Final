import React, { useState } from "react";

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
            <a href="#informasi">Informasi</a>
            <ul className={`dropdown ${showDropdown ? "show" : ""}`}>
              <li>
                <a
                  href="https://link-to-gallery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://link-to-team.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Team
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
