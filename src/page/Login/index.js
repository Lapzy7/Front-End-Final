import { gallery1, google, imgHome1, imgHome3, login2 } from "../../assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
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
  );
};

export default Login;
