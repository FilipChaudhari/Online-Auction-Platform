import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Admin registration successful");
    navigate("/admin/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="text-center mb-4">
          <i className="bi bi-person-plus display-5 text-primary"></i>

          <h2 className="fw-bold mt-2">
            Admin Registration
          </h2>

          <p className="text-muted">
            Create a new administrator account
          </p>
        </div>

        <form onSubmit={handleRegister}>

          <div className="mb-3">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="admin@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100">
            <i className="bi bi-person-plus me-2"></i>
            Register Admin
          </button>

        </form>

        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/admin/login">
            Login
          </Link>
        </div>

      </div>

    </div>
  );
}

export default AdminRegister;