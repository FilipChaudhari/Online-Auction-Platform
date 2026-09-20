import { NavLink, Routes, Route, useNavigate } from "react-router-dom";

import UserDashboard from "./UserDashboard";
import AuctionCatalog from "./AuctionCatalog";
import AuctionDetails from "./AuctionDetails";
import LiveBidding from "./LiveBidding";
import Watchlist from "./Watchlist";
import BidHistory from "./BidHistory";
import SoftCloseNotification from "./SoftCloseNotification";
import SellerTrust from "./SellerTrust";
import Settlement from "./Settlement";
import UserProfile from "./UserProfile";

function UserPanel() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userLoggedIn");
    navigate("/login");
  };

  return (
    <div className="user-layout">

      {/* SIDEBAR */}
      <aside className="user-sidebar">

        <div className="user-brand">
          <i className="bi bi-hammer me-2"></i>
          AuctionPro
        </div>

        <div className="user-info">
          <i className="bi bi-person-circle"></i>

          <div>
            <strong>Bidder</strong>
            <small>User Account</small>
          </div>
        </div>

        <nav className="user-menu">

          <NavLink to="/user/dashboard">
            <i className="bi bi-speedometer2"></i>
            Dashboard
          </NavLink>

          <NavLink to="/user/auctions">
            <i className="bi bi-grid"></i>
            Auction Catalog
          </NavLink>

          <NavLink to="/user/live-bidding">
            <i className="bi bi-broadcast"></i>
            Live Bidding
          </NavLink>

          <NavLink to="/user/watchlist">
            <i className="bi bi-heart"></i>
            Watchlist
          </NavLink>

          <NavLink to="/user/bid-history">
            <i className="bi bi-clock-history"></i>
            Bid History
          </NavLink>

          <NavLink to="/user/notifications">
            <i className="bi bi-bell"></i>
            Notifications
          </NavLink>

          <NavLink to="/user/sellers">
            <i className="bi bi-shop"></i>
            Seller Trust
          </NavLink>

          <NavLink to="/user/settlement">
            <i className="bi bi-receipt"></i>
            Settlement
          </NavLink>

          <NavLink to="/user/profile">
            <i className="bi bi-person"></i>
            My Profile
          </NavLink>

        </nav>

        <button
          className="user-logout"
          onClick={logout}
        >
          <i className="bi bi-box-arrow-left me-2"></i>
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="user-content">

        <div className="user-topbar">

          <div>
            <h5 className="mb-0">
              Bidder Panel
            </h5>

            <small className="text-muted">
              Real-Time Auction Platform
            </small>
          </div>

          <div>
            <i className="bi bi-bell fs-5 me-3"></i>
            <i className="bi bi-person-circle fs-4"></i>
          </div>

        </div>

        <div className="user-page-content">

          <Routes>

            <Route
              path="/"
              element={<UserDashboard />}
            />

            <Route
              path="/dashboard"
              element={<UserDashboard />}
            />

            <Route
              path="/auctions"
              element={<AuctionCatalog />}
            />

            <Route
              path="/auction/:id"
              element={<AuctionDetails />}
            />

            <Route
              path="/live-bidding"
              element={<LiveBidding />}
            />

            <Route
              path="/watchlist"
              element={<Watchlist />}
            />

            <Route
              path="/bid-history"
              element={<BidHistory />}
            />

            <Route
              path="/notifications"
              element={<SoftCloseNotification />}
            />

            <Route
              path="/sellers"
              element={<SellerTrust />}
            />

            <Route
              path="/settlement"
              element={<Settlement />}
            />

            <Route
              path="/profile"
              element={<UserProfile />}
            />

          </Routes>

        </div>

      </main>

    </div>
  );
}

export default UserPanel;
