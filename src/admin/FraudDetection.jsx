function FraudDetection() {

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Fraud & Anomaly Detection</h2>
          <p>Monitor suspicious auction activities</p>
        </div>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="dashboard-card">
            <h6>Suspicious Activities</h6>
            <h2 className="text-danger">17</h2>
            <small>Detected today</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <h6>Blocked Accounts</h6>
            <h2 className="text-warning">8</h2>
            <small>This month</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <h6>Detection Accuracy</h6>
            <h2 className="text-success">96.8%</h2>
            <small>Current model</small>
          </div>
        </div>

      </div>

      <div className="dashboard-card mt-4">

        <h5>Detection Rules</h5>

        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />
          <label className="form-check-label">
            Multiple bids from same network
          </label>
        </div>

        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />
          <label className="form-check-label">
            Abnormal bidding frequency
          </label>
        </div>

        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />
          <label className="form-check-label">
            Unusual price increment
          </label>
        </div>

      </div>

    </div>
  );
}

export default FraudDetection;