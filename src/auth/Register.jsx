
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "../assets/Logo.png";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "bidder"
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    alert(
      `Registration successful as ${
        form.role === "bidder"
          ? "User / Bidder"
          : "Seller"
      }`
    );

    navigate("/login");

  };

  return (
    <div className="register-page">

      {/* Decorative gold curves */}
      <div className="register-decoration register-decoration-left"></div>
      <div className="register-decoration register-decoration-right"></div>

      <div className="register-container">

        {/* ================= REGISTER CARD ================= */}

        <div className="register-card">

          {/* Brand */}

          <div className="register-brand">

            <div className="register-brand-icon">
              <i className="bi bi-hammer"></i>
            </div>

            <div className="register-brand-name">
              <span>FD</span> Auction
            </div>

          </div>


          {/* Heading */}

          <h1>Create your account</h1>

          <p className="register-subtitle">
            Join the Real-Time Auction Platform
          </p>


          <form onSubmit={handleSubmit}>

            {/* Full Name */}

            <div className="register-input-group">

              <label>
                Full Name
              </label>

              <div className="register-input-wrapper">

                <i className="bi bi-person register-input-icon"></i>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* Email */}

            <div className="register-input-group">

              <label>
                Email Address
              </label>

              <div className="register-input-wrapper">

                <i className="bi bi-envelope register-input-icon"></i>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* Password */}

            <div className="register-input-group">

              <label>
                Password
              </label>

              <div className="register-input-wrapper">

                <i className="bi bi-lock register-input-icon"></i>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  value={form.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  <i
                    className={
                      showPassword
                        ? "bi bi-eye"
                        : "bi bi-eye-slash"
                    }
                  ></i>
                </button>

              </div>

            </div>


            {/* Panel Selection */}

            <div className="register-role-wrapper">

              <label>
                Select Panel
              </label>

              <div className="register-select-wrapper">

                <i className="bi bi-grid register-select-icon"></i>

                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                >

                  <option value="bidder">
                    User / Bidder Panel
                  </option>

                  <option value="seller">
                    Seller Panel
                  </option>

                </select>

                <i className="bi bi-chevron-down register-chevron"></i>

              </div>

            </div>


            {/* Register Button */}

            <button
              type="submit"
              className="register-button"
            >

              <i className="bi bi-person-plus"></i>

              <span>
                Create Account
              </span>

              <i className="bi bi-arrow-right"></i>

            </button>

          </form>


          {/* Divider */}

          <div className="register-divider">

            <span></span>

            <p>OR</p>

            <span></span>

          </div>


          {/* Google */}

          <button
            type="button"
            className="register-google-button"
            onClick={() => alert("Google Sign-Up")}
          >

            <span className="register-google-icon">
              G
            </span>

            <span>
              Sign up with Google
            </span>

          </button>


          {/* Login */}

          <div className="register-login">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Login
            </Link>

          </div>

        </div>


        {/* ================= RIGHT BRANDING ================= */}

        <div className="register-auction-info">

          <img
            className="register-auction-logo"
            src={logo}
            alt="FD Real-Time Auction Platform logo"
          />


          <div className="register-tagline">

            <span>Bid Smart</span>

            <b>•</b>

            <span>Compare Better</span>

            <b>•</b>

            <span>Win Faster</span>

          </div>


          <div className="register-features">

            <div className="register-feature">

              <div className="register-feature-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>

              <strong>
                Real-Time
              </strong>

              <span>
                Bidding
              </span>

            </div>


            <div className="register-feature">

              <div className="register-feature-icon">
                <i className="bi bi-shield-fill-check"></i>
              </div>

              <strong>
                Secure &
              </strong>

              <span>
                Trusted
              </span>

            </div>


            <div className="register-feature">

              <div className="register-feature-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>

              <strong>
                Smart
              </strong>

              <span>
                Analysis
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;

