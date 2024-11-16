import { google, login2 } from "../../assets";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-left">
        <div className="image-container">
          <img src={login2} alt="Login Image" />
        </div>
      </div>
      <div className="login-right">
        <h1>Welcome Back!</h1>
        <p>Login to your account</p>
        <form action="#" method="POST" className="login-form">
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
