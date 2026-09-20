import { NavLink, Routes, Route, useNavigate } from "react-router-dom";

import AdminDashboard from "./AdminDashboard";
import UserManagement from "./UserManagement";
import SellerManagement from "./SellerManagement";
import RealTimeEngine from "./RealTimeEngine";
import FraudDetection from "./FraudDetection";
import ShillBidding from "./ShillBidding";
import AntiSniping from "./AntiSniping";
import AnomalyLogs from "./AnomalyLogs";
import ScoringEngine from "./ScoringEngine";
import LedgerAudit from "./LedgerAudit";
import PlatformSettings from "./PlatformSettings";

function AdminPanel() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">

        <div className="sidebar-brand">
          <div className="brand-mark">⚖</div>
          <span>FD Auction</span>
        </div>

        <div className="admin-info">
          <i className="bi bi-person-circle"></i>
          <div>
            <strong>Administrator</strong>
            <small>System Admin</small>
          </div>
        </div>

        <nav className="sidebar-menu">

          <NavLink to="/admin/dashboard">
            <i className="bi bi-speedometer2"></i>
            Dashboard
          </NavLink>

          <NavLink to="/admin/users">
            <i className="bi bi-people"></i>
            User Management
          </NavLink>

          <NavLink to="/admin/sellers">
            <i className="bi bi-shop"></i>
            Seller Management
          </NavLink>

          <NavLink to="/admin/realtime">
            <i className="bi bi-broadcast"></i>
            Real-Time Engine
          </NavLink>

          <NavLink to="/admin/fraud">
            <i className="bi bi-shield-exclamation"></i>
            Fraud Detection
          </NavLink>

          <NavLink to="/admin/shill-bidding">
            <i className="bi bi-exclamation-triangle"></i>
            Shill Bidding
          </NavLink>

          <NavLink to="/admin/anti-sniping">
            <i className="bi bi-stopwatch"></i>
            Anti-Sniping
          </NavLink>

          <NavLink to="/admin/anomaly-logs">
            <i className="bi bi-clipboard-data"></i>
            Anomaly Logs
          </NavLink>

          <NavLink to="/admin/scoring">
            <i className="bi bi-star"></i>
            Scoring Engine
          </NavLink>

          <NavLink to="/admin/ledger">
            <i className="bi bi-link-45deg"></i>
            Ledger & Audit
          </NavLink>

          <NavLink to="/admin/settings">
            <i className="bi bi-gear"></i>
            Platform Settings
          </NavLink>

        </nav>

        <button className="logout-btn" onClick={logout}>
          <i className="bi bi-box-arrow-left me-2"></i>
          Logout
        </button>

      </aside>

      <main className="admin-content">

        <div className="admin-topbar">

          <div>
            <h5 className="mb-0">Admin Control Panel</h5>
            <small className="text-muted">
              Real-Time Auction Platform
            </small>
          </div>

          <div>
            <i className="bi bi-bell fs-5 me-3"></i>
            <i className="bi bi-person-circle fs-4"></i>
          </div>

        </div>

        <div className="admin-page-content">

          <Routes>

            <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />

            <Route path="/users" element={<UserManagement />} />

            <Route path="/sellers" element={<SellerManagement />} />

            <Route path="/realtime" element={<RealTimeEngine />} />

            <Route path="/fraud" element={<FraudDetection />} />

            <Route path="/shill-bidding" element={<ShillBidding />} />

            <Route path="/anti-sniping" element={<AntiSniping />} />

            <Route path="/anomaly-logs" element={<AnomalyLogs />} />

            <Route path="/scoring" element={<ScoringEngine />} />

            <Route path="/ledger" element={<LedgerAudit />} />

            <Route path="/settings" element={<PlatformSettings />} />

          </Routes>

        </div>

      </main>

    </div>
  );
}

export default AdminPanel;