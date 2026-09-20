import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="text-center mb-4">
          <i className="bi bi-shield-lock display-5 text-primary"></i>
          <h2 className="fw-bold mt-2">Admin Login</h2>
          <p className="text-muted">
            Login to AuctionPro Administration
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">Email Address</label>

            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">
              Remember me
            </label>
          </div>

          <button className="btn btn-primary w-100">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Login
          </button>

        </form>

        <div className="text-center mt-4">
          <p>
            Don't have an admin account?{" "}
            <Link to="/admin/register">
              Register
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminLogin;