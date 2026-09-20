import { useState } from "react";
import "./Login.css";
import logo from "../assets/Logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter your email/phone and password.");
      return;
    }

    console.log("Login Data:", formData);

    // Connect your backend API here
    // Example:
    // fetch("http://localhost:5000/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData)
    // });
  };

  return (
    <div className="login-page">

      {/* Background Overlay */}
      <div className="background-overlay"></div>

      <div className="login-container">

        {/* LEFT LOGIN CARD */}
        <div className="login-card">

          <div className="brand">
            <div className="brand-icon">⚖</div>
            <span>
              <strong>FD</strong> Auction
            </span>
          </div>

          <h1>Nice to see you again</h1>
          <p className="subtitle">
            Login to continue and start bidding
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="input-group">
              <label>Email or phone number</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email or phone number"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-wrapper">
                <span className="input-icon">🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="form-options">

              <label className="remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() => alert("Password recovery page")}
              >
                Forgot password?
              </button>

            </div>

            {/* Sign In */}
            <button type="submit" className="signin-btn">
              <span>Sign in</span>
              <span className="arrow">→</span>
            </button>

          </form>

          {/* OR */}
          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {/* Google */}
          <button
            className="google-btn"
            onClick={() => alert("Google Sign-In")}
          >
            <span className="google-logo">G</span>
            <span>Sign in with Google</span>
          </button>

          {/* Signup */}
          <div className="signup">
            <span>Don't have an account?</span>

            <button
              onClick={() => alert("Sign up page")}
              className="signup-link"
            >
              Sign up now
            </button>
          </div>

        </div>

        {/* RIGHT BRANDING */}
        <div className="auction-info">

          <img
            className="auction-logo"
            src={logo}
            alt="FD Real-Time Auction Platform logo"
          />

          <p className="tagline">
            <span>Bid Smart</span>
            <b>•</b>
            <span>Compare Better</span>
            <b>•</b>
            <span>Win Faster</span>
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <strong>Real-Time</strong>
              <span>Bidding</span>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <i className="bi bi-shield-fill-check"></i>
              </div>
              <strong>Secure &</strong>
              <span>Trusted</span>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <strong>Smart</strong>
              <span>Analysis</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}