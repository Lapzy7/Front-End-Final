import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const SmallNavigation = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [smallnavbar, setSmallNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const smallNavbarRef = ref(db, "Component/SmallNavigation");

    onValue(smallNavbarRef, (snapshot) => {
      const data = snapshot.val();
      setSmallNavbar(data);
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h2>{smallnavbar.Logo}</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <button onClick={() => navigate("/")} className="navbar-button">
              {smallnavbar.Menu1}
            </button>
          </li>
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="informasi"
          >
            <a href="#informasi">{smallnavbar.Menu2}</a>
            <ul className={`dropdown ${showDropdown ? "show" : ""}`}>
              <li>
                <button
                  onClick={() => navigate("/gallery")}
                  className="navbar-button-down"
                >
                  {smallnavbar.Menu2Gal}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/team")}
                  className="navbar-button-down"
                >
                  {smallnavbar.Menu2Team}
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="navbar-button"
            >
              {smallnavbar.Menu3}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SmallNavigation;
