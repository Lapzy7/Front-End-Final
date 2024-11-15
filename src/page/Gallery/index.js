import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from "../../component/Navigation"; // Pastikan path ini sesuai

const Login = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route index element={<LoginForm />} /> {/* Rute untuk form login */}
        <Route path="team" element={<Team />} /> {/* Rute untuk team */}
      </Routes>
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