import React, { useState } from "react";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Show success message
    setIsSubmitted(true);

    // Simulate a short delay before redirecting (e.g., 2 seconds)
    setTimeout(() => {
      setIsRedirecting(true);
      // Redirect after 2 seconds (you can adjust this time)
      window.location.href = "/"; // Redirect to main menu or homepage
    }, 2000);
  };

  if (isSubmitted && !isRedirecting) {
    return (
      <div className="success-container">
        <h2>Login Berhasil</h2>
        <p>Tunggu sebentar, Anda akan diarahkan ke halaman utama...</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Formulir Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan password"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
