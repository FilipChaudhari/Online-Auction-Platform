function AntiSniping() {

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Anti-Sniping / Soft-Close</h2>
          <p>Manage auction extension rules</p>
        </div>
      </div>

      <div className="dashboard-card">

        <h5>Soft-Close Configuration</h5>

        <div className="form-check form-switch mt-4">

          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">
            Enable Soft-Close
          </label>

        </div>

        <div className="mt-4">

          <label className="form-label">
            Extension Trigger Window
          </label>

          <select className="form-select">
            <option>30 seconds</option>
            <option>60 seconds</option>
            <option>90 seconds</option>
            <option>120 seconds</option>
          </select>

        </div>

        <div className="mt-4">

          <label className="form-label">
            Extension Duration
          </label>

          <select className="form-select">
            <option>30 seconds</option>
            <option>60 seconds</option>
            <option>120 seconds</option>
          </select>

        </div>

        <button className="btn btn-primary mt-4">
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default AntiSniping;