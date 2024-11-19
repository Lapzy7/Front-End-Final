import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
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
            <img src={`data:image/jpg;base64,${login.img}`} alt="Login Image" />
          </div>
        </div>
        <div className="login-right">
          <h1>{login.wb}</h1>
          <p>{login.p}</p>
          <form onSubmit={handleLogin} className="login-form">
            <label htmlFor="email">{login.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="password">{login.ps}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <div className="forgot-password">
              <a href="#">{login.fp}</a>
            </div>
            <button type="submit" className="login-btn">
              {login.lgn}
            </button>
            <div className="alternative-login">
              <p>{login.or}</p>
              <button className="login-google">
                <img
                  src={`data:image/jpg;base64,${login.imgggl}`}
                  alt="Google"
                />
                {login.ggl}
              </button>
            </div>
            <div className="signup-link">
              <p>
                {login.dha}
                <a href="#">{login.su}</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
