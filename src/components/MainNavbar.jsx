import { Link, useLocation } from "react-router-dom";

function MainNavbar() {
  const location = useLocation();

  if (["/login", "/register"].includes(location.pathname)) {
    return null;
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          <i className="bi bi-hammer me-2"></i>
          AuctionPro
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/"
              >
                <i className="bi bi-house me-1"></i>
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/login"
              >
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Login
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/register"
              >
                <i className="bi bi-person-plus me-1"></i>
                Registration
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/admin/dashboard"
              >
                <i className="bi bi-shield-lock me-1"></i>
                Admin
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}

export default MainNavbar;