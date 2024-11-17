import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  aboutImg,
  gallery1,
  gallery2,
  gallery3,
  imgHome1,
  imgHome2,
  imgHome3,
  login2,
} from "../../assets";
import SmallNavigation from "../../component/SmallNavigation";

const Gallery = () => {
  const [gallery, setGallery] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const galleryRef = ref(db, "Page/Main/Footer");

    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      setGallery(data);
    });
  }, []);

  return (
    <div className="app-container">
      <SmallNavigation />
      <div>
        <section className="gallery">
          <div className="team-container">
            <h1>Gallery</h1>
            <p>Explore our collection of unforgettable moments.</p>
            <div className="section-header"></div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={gallery1} alt="Gallery 1" />
              </div>
              <div className="gallery-item">
                <img src={gallery2} alt="Gallery 2" />
              </div>
              <div className="gallery-item">
                <img src={gallery3} alt="Gallery 3" />
              </div>
              <div className="gallery-item">
                <img src={imgHome2} alt="Gallery 4" />
              </div>
              <div className="gallery-item">
                <img src={imgHome1} alt="Gallery 4" />
              </div>
              <div className="gallery-item">
                <img src={imgHome3} alt="Gallery 4" />
              </div>
              <div className="gallery-item">
                <img src={aboutImg} alt="Gallery 4" />
              </div>
              <div className="gallery-item">
                <img src={login2} alt="Gallery 4" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <>
      <h1>Login</h1>
      <h3>Dapatkan gaya dari ./src/assets/style.css</h3>
      <form className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="team">View Team</Link> {/* Tautan ke halaman Team */}
    </>
  );
};

const Team = () => {
  return (
    <>
      <h1>Meet Our Team</h1>
      <div className="team-section">
        <div className="team-member">
          <h3>John Doe</h3>
          <p className="position">CEO</p>
          <p>John is the visionary behind our company.</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p className="position">CTO</p>
          <p>Jane leads our technology and development efforts.</p>
        </div>
        <div className="team-member">
          <h3>Emily Johnson</h3>
          <p className="position">CFO</p>
          <p>Emily manages our finances and strategic planning.</p>
        </div>
      </div>
    </>
  );
};

export default Login;