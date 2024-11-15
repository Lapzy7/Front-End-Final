import Navigation from "../../component/Navigation"; // Pastikan path ini sesuai
import React from 'react';
import { Link } from 'react-router-dom'; // Tambahkan ini untuk navigasi

const Login = () => {
  return (
    <div className="app-container">
      <Navigation />
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
      <Link to="/login/team">View Team</Link> {/* Tambahkan tautan ke halaman Team */}
    </div>
  );
};

export default Login;