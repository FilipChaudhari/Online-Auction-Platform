import { useState } from "react";

function PlatformSettings() {

  const [settings, setSettings] = useState({
    twoFactor: true,
    emailAlerts: true,
    fraudDetection: true,
    maintenance: false
  });

  const toggle = (name) => {
    setSettings({
      ...settings,
      [name]: !settings[name]
    });
  };

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Platform Settings</h2>
          <p>Security and system configuration</p>
        </div>
      </div>

      <div className="dashboard-card">

        <h5>Security Settings</h5>

        <div className="setting-row">

          <div>
            <strong>Two-Factor Authentication</strong>
            <p>
              Require additional authentication for administrators.
            </p>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.twoFactor}
              onChange={() => toggle("twoFactor")}
            />
          </div>

        </div>

        <div className="setting-row">

          <div>
            <strong>Email Security Alerts</strong>
            <p>
              Send alerts when suspicious activities are detected.
            </p>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.emailAlerts}
              onChange={() => toggle("emailAlerts")}
            />
          </div>

        </div>

        <div className="setting-row">

          <div>
            <strong>Fraud Detection</strong>
            <p>
              Automatically monitor suspicious bidding behavior.
            </p>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.fraudDetection}
              onChange={() => toggle("fraudDetection")}
            />
          </div>

        </div>

        <div className="setting-row">

          <div>
            <strong>Maintenance Mode</strong>
            <p>
              Temporarily disable public platform operations.
            </p>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.maintenance}
              onChange={() => toggle("maintenance")}
            />
          </div>

        </div>

        <button className="btn btn-primary mt-3">
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default PlatformSettings;