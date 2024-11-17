import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

import { gallery1, google, imgHome1, imgHome3, login2 } from "../../assets";
import { useNavigate } from "react-router-dom";
import SmallNavigation from "../../component/SmallNavigation";

const Login = () => {
  const [login, setLogin] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const loginRef = ref(db, "Page/Login");

    onValue(loginRef, (snapshot) => {
      const data = snapshot.val();
      setLogin(data);
    });
  }, []);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="app-container">
      <SmallNavigation />
      <section className="login-container">
        <div className="login-left">
          <div className="image-container">
            <img src={gallery1} alt="Login Image" />
          </div>
        </div>
        <div className="login-right">
          <h1>Welcome Back!</h1>
          <p>Login to your account</p>
          <form onSubmit={handleLogin} className="login-form">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="alternative-login">
              <p>Or login with</p>
              <button className="login-google">
                <img src={google} alt="Google" />
                Google
              </button>
            </div>
            <div className="signup-link">
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;