function ShillBidding() {

  return (
    <div>

      <div className="page-title">
        <div>
          <h2>Shill Bidding Configuration</h2>
          <p>Configure rules for detecting artificial bidding</p>
        </div>
      </div>

      <div className="dashboard-card">

        <h5>Detection Rules</h5>

        <div className="mb-4 mt-4">

          <label className="form-label">
            Maximum Bids Per Minute
          </label>

          <input
            type="number"
            className="form-control"
            defaultValue="10"
          />

        </div>

        <div className="mb-4">

          <label className="form-label">
            Suspicious Bid Similarity %
          </label>

          <input
            type="number"
            className="form-control"
            defaultValue="80"
          />

        </div>

        <div className="form-check form-switch mb-4">

          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">
            Enable automatic shill detection
          </label>

        </div>

        <button className="btn btn-primary">
          Save Configuration
        </button>

      </div>

    </div>
  );
}

export default ShillBidding;